var bd=Object.defineProperty;var Ed=(n,e,t)=>e in n?bd(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var fe=(n,e,t)=>Ed(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Ku=[{id:"jobs",name:"Job Board",x:-5,z:-3},{id:"brooms",name:"Broom Workshop",x:5,z:-3},{id:"decor",name:"Decor Corner",x:-5,z:3},{id:"cat",name:"Pumpkin",x:4,z:3}],Cl=[{id:"rug",name:"Woven Rug",cost:30,description:"A soft landing for tired feet."},{id:"plant",name:"Moonleaf Plant",cost:40,description:"A little green for Meg's room."},{id:"shelf",name:"Parcel Shelf",cost:50,description:"A home for souvenirs and parcels."},{id:"lamp",name:"Warm Lamp",cost:60,description:"A cozy glow after a long shift."},{id:"cushion",name:"Window Cushion",cost:70,description:"The perfect reading nook."},{id:"cat-tree",name:"Cat Tree",cost:80,description:"Pumpkin's new favorite perch."}],Pl=[{id:"speed",name:"Swift Bristles",description:"Raises top speed by 10% per level."},{id:"handling",name:"Responsive Handle",description:"Raises turn rate by 20% per level."},{id:"braking",name:"Cloud Brake",description:"Raises hover braking by 20% per level."}],Ea=7.5,wa=5.5,wd=2.4,Td=3.5,Mr=(n,e,t)=>Math.max(e,Math.min(t,n));function Ta(n){n.mode="home",n.run=null,n.paused=!1,n.pauseReason="",n.homePosition={x:0,z:3},n.homeFacing=0,n.homePanel="none",n.message="Back at Meg's room.",n.revision++}function Ju(n){n.mode!=="home"||n.homePanel==="none"||(n.homePanel="none",n.revision++)}function Ll(n){if(n.mode==="home")return Ku.find(e=>Math.hypot(n.homePosition.x-e.x,n.homePosition.z-e.z)<=wd)}function Ad(n){if(n.mode!=="home"||n.paused)return;const e=Ll(n);e&&(n.homePanel=e.id,n.message=e.id==="cat"?"Pumpkin purrs.":`${e.name} opened.`,n.revision++)}function Rd(n,e,t){if(n.mode!=="home"||n.paused||n.homePanel!=="none"||!Number.isFinite(t)||t<=0)return;const i=Mr(e.turn,-1,1),s=-Mr(e.climb,-1,1),r=Math.hypot(i,s);if(r>0){const o=Td*t/Math.max(1,r);n.homePosition.x=Mr(n.homePosition.x+i*o,-Ea,Ea),n.homePosition.z=Mr(n.homePosition.z+s*o,-wa,wa),n.homeFacing=Math.atan2(i,s)}n.revision++}function Cd(n,e){if(n.paused||n.mode!=="home"||n.homePanel!=="brooms"||!Dd(e))return!1;const t=n.profile.upgrades[e];if(t>=2)return!1;const i=t===0?60:120;return n.profile.coins<i?!1:(n.profile.coins-=i,n.profile.upgrades[e]=t+1,n.message=`${Pl.find(s=>s.id===e).name} upgraded.`,n.revision++,!0)}function Pd(n,e){if(n.paused||n.mode!=="home"||n.homePanel!=="decor")return!1;const t=Cl.find(i=>i.id===e);return!t||n.profile.furniture.includes(e)||n.profile.coins<t.cost?!1:(n.profile.coins-=t.cost,n.profile.furniture.push(e),n.message=`${t.name} added to the room.`,n.revision++,!0)}function Ld(n){return Cl.every(e=>n.furniture.includes(e.id))&&Pl.every(e=>n.upgrades[e.id]>=2)}function Dd(n){return Pl.some(e=>e.id===n)}const Xs=230,Fn=[-40,-195,40,-155],Hi=[[20,-25],[30,-18],[40,-5],[46,12],[50,30],[54,50],[56,70],[60,90],[63,105],[66,120],[70,140],[76,160],[82,180],[88,200],[95,220],[45,220],[40,200],[34,180],[26,160],[16,140],[6,120],[-2,100],[-8,82],[-14,65],[-18,45],[-20,25],[-16,5],[-6,-12],[6,-22]];function us(n,e){let t=!1;for(let i=0,s=Hi.length-1;i<Hi.length;s=i++){const r=Hi[i][0],o=Hi[i][1],a=Hi[s][0],l=Hi[s][1];o>e!=l>e&&n<(a-r)*(e-o)/(l-o)+r&&(t=!t)}return t}const Tt=[{id:"home",name:"Bakery Attic",subtitle:"Home — borrowed attic",position:{x:-25,y:30,z:-48},color:"#f9cf68"},{id:"harbor-cafe",name:"Harbor Cafe",subtitle:"Tutorial delivery",position:{x:-80,y:18.12,z:150},color:"#63c7dc"},{id:"market",name:"Sunset Market",subtitle:"Fresh parcels",position:{x:-88,y:33,z:-88},color:"#e88869"},{id:"lighthouse",name:"The Lighthouse",subtitle:"Beacon House",position:{x:130,y:15,z:140},color:"#f4e5b8"},{id:"marina",name:"Marina Works",subtitle:"Dockside roof",position:{x:102,y:20,z:125},color:"#79b9a0"},{id:"observatory",name:"Hill Observatory",subtitle:"East hill pad",position:{x:130,y:53,z:-55},color:"#ad91d1"},{id:"cliffside",name:"Cliffside Books",subtitle:"West avenue",position:{x:-115,y:46,z:-177.5},color:"#db92a7"}],mn=[{min:{x:-37,y:10,z:-60},max:{x:-13,y:28,z:-36},district:"merchant-row"},{min:{x:-94,y:.12,z:136},max:{x:-66,y:16.12,z:164},district:"harbor"},{min:{x:-103,y:10,z:-102},max:{x:-73,y:31,z:-74},district:"old-town"},{min:{x:120,y:0,z:130},max:{x:140,y:13,z:150},district:"lighthouse-headland"},{min:{x:87,y:0,z:110},max:{x:117,y:18,z:140},district:"harbor"},{min:{x:115,y:20,z:-70},max:{x:145,y:51,z:-40},district:"observatory-rise"},{min:{x:-130,y:20,z:-192.5},max:{x:-100,y:44,z:-162.5},district:"bungalow-lanes"},{min:{x:-65,y:0,z:88},max:{x:-45,y:10,z:108},district:"harbor"},{min:{x:-65,y:0,z:38},max:{x:-45,y:12,z:58},district:"harbor"},{min:{x:94,y:0,z:61},max:{x:110,y:10,z:79},district:"harbor"},{min:{x:92,y:0,z:10},max:{x:112,y:12,z:30},district:"harbor"},{min:{x:-50,y:10,z:-98.5},max:{x:-30,y:25,z:-78.5},district:"old-town"},{min:{x:-10,y:10,z:-98.5},max:{x:10,y:25,z:-78.5},district:"old-town"},{min:{x:30,y:10,z:-98.5},max:{x:50,y:26,z:-78.5},district:"old-town"},{min:{x:-50,y:9.19,z:-130.5},max:{x:-30,y:25.19,z:-113.5},district:"old-town"},{min:{x:22.5,y:10,z:-55},max:{x:37.5,y:21,z:-41},district:"merchant-row"},{min:{x:-2.5,y:10,z:-55.5},max:{x:12.5,y:21,z:-40.5},district:"merchant-row"},{min:{x:-80,y:20,z:-187.5},max:{x:-60,y:34,z:-167.5},district:"mansion-hill"},{min:{x:-57.5,y:20,z:-187.5},max:{x:-42.5,y:34,z:-167.5},district:"mansion-hill"},{min:{x:42.5,y:20,z:-185},max:{x:57.5,y:28,z:-170},district:"bungalow-lanes"},{min:{x:60.5,y:20,z:-185},max:{x:75.5,y:27,z:-170},district:"bungalow-lanes"},{min:{x:-122.5,y:19.28,z:-157},max:{x:-107.5,y:27.28,z:-143},district:"bungalow-lanes"},{min:{x:133.5,y:19.26,z:-97.5},max:{x:146.5,y:33.26,z:-82.5},district:"observatory-rise"},{min:{x:-55,y:10,z:-53},max:{x:-45,y:38,z:-43},district:"old-town"},{min:{x:117.5,y:48.5,z:-67.5},max:{x:126.5,y:57,z:-58.5},district:"observatory-rise"},{min:{x:125,y:-.22,z:153},max:{x:135,y:28.78,z:163}}],yr={harbor:{bodies:[4873579,7043714,6048314,12099704],roofs:[3820117,3095365]},"old-town":{bodies:[13935988,15258808,13219990],roofs:[11951167,4877148]},"merchant-row":{bodies:[11065544,16049320,15247544,15784120],roofs:[9132602,7031338]},"mansion-hill":{bodies:[15790312,10139802],roofs:[3817290]},"bungalow-lanes":{bodies:[8034923,9136970,11033674],roofs:[6048314,4865845]},"observatory-rise":{bodies:[9079442],roofs:[6064762,2767452]},"lighthouse-headland":{bodies:[15266024],roofs:[13948116]}},vc=mn.length-1,Mc=mn.length-3,yc=mn.length-2,Id=[{min:{x:15,y:0,z:168},max:{x:100,y:100,z:172}}];function Nd(n){let e=n>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const Ud=.5*(Math.sqrt(3)-1),Ps=(3-Math.sqrt(3))/6;class Qu{constructor(e){fe(this,"perm");const t=Nd(e),i=new Uint8Array(256);for(let s=0;s<256;s++)i[s]=s;for(let s=255;s>0;s--){const r=Math.floor(t()*(s+1));[i[s],i[r]]=[i[r],i[s]]}this.perm=new Uint8Array(512);for(let s=0;s<512;s++)this.perm[s]=i[s&255]}noise(e,t){const i=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]];let s=0,r=0,o=0;const a=(e+t)*Ud,l=Math.floor(e+a),c=Math.floor(t+a),h=(l+c)*Ps,d=e-(l-h),u=t-(c-h);let f,g;d>u?(f=1,g=0):(f=0,g=1);const M=d-f+Ps,m=u-g+Ps,p=d-1+2*Ps,y=u-1+2*Ps,S=l&255,_=c&255;let E=.5-d*d-u*u;if(E>=0){E*=E;const x=i[this.perm[S+this.perm[_]]&7];s=E*E*(x[0]*d+x[1]*u)}let b=.5-M*M-m*m;if(b>=0){b*=b;const x=i[this.perm[S+f+this.perm[_+g]]&7];r=b*b*(x[0]*M+x[1]*m)}let A=.5-p*p-y*y;if(A>=0){A*=A;const x=i[this.perm[S+1+this.perm[_+1]]&7];o=A*A*(x[0]*p+x[1]*y)}return 70*(s+r+o)}}const ju=1337,Fd=new Qu(ju),Aa=new Qu(ju+1);function eh(n,e,t=5){let i=0,s=.5,r=1;for(let o=0;o<t;o++)i+=s*Fd.noise(n*r,e*r),s*=.5,r*=2;return i}function Od(n,e,t,i){const s=Aa.noise(n*t+5.2,e*t+1.3),r=Aa.noise(n*t+1.7,e*t+9.1);return[n+s*i,e+r*i]}function Sn(n,e,t){const i=Math.min(1,Math.max(0,(t-n)/(e-n)));return i*i*(3-2*i)}const th=[{name:"waterfront",y:0,rects:[[-95,-15,5,175],[50,-35,150,175]]},{name:"midtown",y:10,rects:[[-115,-135,75,-15]]},{name:"upper",y:20,rects:[[-135,-215,135,-135],[55,-135,155,-35]]}];function Ti(n,e){const t=175+Aa.noise(n*.01+3.7,8.2)*35,i=Sn(t-15,t+45,e);let s=0;us(n,e)?s=e<t+25?1:0:(us(n+6,e)||us(n-6,e)||us(n,e+6)||us(n,e-6))&&e<t+20&&(s=.45);const[r,o]=Od(n,e,.015,18),a=(eh(r*.02,o*.02)*.5+.5)*8,l=Math.hypot(n,e),c=Sn(145,175,l),h=a*c*(1-s);let d=0,u=0;for(const p of th)for(const[y,S,_,E]of p.rects){const b=Sn(y-20,y+20,n)*(1-Sn(_-20,_+20,n)),A=Sn(S-20,S+20,e)*(1-Sn(E-20,E+20,e)),x=b*A;x>u&&(u=x,d=p.y)}const f=s<.5&&i<.5?1:0,g=d*u+h*(1-u),M=h*(1-f)+g*f,m=Math.min(s*-3.5,i*-12);return{h:M+m,bayT:s,oceanT:i,tierCover:u}}function bn(n,e){return Ti(n,e).h}const zd=[.918,.851,.659],Bd=[.498,.682,.431],Sc=[.541,.498,.447],kd=[.72,.68,.52];function Sr(n,e,t){return[n[0]+(e[0]-n[0])*t,n[1]+(e[1]-n[1])*t,n[2]+(e[2]-n[2])*t]}function bc(n,e){const{h:t,bayT:i,oceanT:s,tierCover:r}=Ti(n,e);if(t<.2||t>4.5&&r<.5||i>0||s>.05)return!1;const o=1.5,a=(Ti(n+o,e).h-Ti(n-o,e).h)/(2*o),l=(Ti(n,e+o).h-Ti(n,e-o).h)/(2*o);return!(Math.hypot(a,l)>.5)}function Hd(n){const e=new Float32Array(n*n),t=new Float32Array(n*n),i=new Float32Array(n*n),s=new Float32Array(n*n),r=440/(n-1);for(let a=0;a<n;a++)for(let l=0;l<n;l++){const c=(l/(n-1)-.5)*440,h=(.5-a/(n-1))*440,d=Ti(c,h),u=a*n+l;e[u]=d.h,t[u]=d.bayT,i[u]=d.oceanT,s[u]=d.tierCover}const o=new Uint8ClampedArray(n*n*4);for(let a=0;a<n;a++)for(let l=0;l<n;l++){const c=a*n+l,h=(l/(n-1)-.5)*440,d=(.5-a/(n-1))*440,u=Math.max(1,Math.round(1.5/r)),f=e[a*n+Math.max(l-u,0)],g=e[a*n+Math.min(l+u,n-1)],M=e[Math.max(a-u,0)*n+l],m=e[Math.min(a+u,n-1)*n+l],p=Math.hypot((g-f)/(2*u*r),(m-M)/(2*u*r)),[y,S,_]=Gd(e[c],t[c],i[c],p,h,d,s[c]),E=c*4;o[E]=y,o[E+1]=S,o[E+2]=_,o[E+3]=255}return o}function Gd(n,e,t,i,s,r,o){const a=Math.max(e,Sn(.02,.25,t));let l=Sr(Bd,Sc,Sn(3,5.5,n)*(1-o));l=Sr(l,zd,a*Sn(-1.5,-.3,n));const c=Sn(-.8,-1.6,n);l=Sr(l,kd,c);const h=Sn(.45,.75,i);h>0&&(l=Sr(l,Sc,h));const d=1+eh(s*.08+11.3,r*.08+7.9,3)*.07;return[Math.round(l[0]*d*255),Math.round(l[1]*d*255),Math.round(l[2]*d*255)]}const Ce=(n,e,t,i)=>({id:n,x:e,z:t,y:i}),Vd=[Ce("ww1",-75,10),Ce("ww2",-75,70),Ce("ww3",-75,130),Ce("ww1b",-35,10),Ce("ww2b",-35,70),Ce("ww3b",-35,130),Ce("we1",85,-10),Ce("we2",85,50),Ce("we3",85,110),Ce("we1b",120,-10),Ce("we2b",120,50),Ce("bl-w",-8,100,6),Ce("bl-e",68,100,6),Ce("sw1",-75,-8),Ce("sw2",-95,-25),Ce("sw3",-65,-42),Ce("sw4",-90,-58),Ce("se1",85,-28),Ce("se2",105,-45),Ce("se3",75,-60),Ce("se4",95,-75),Ce("m1",-60,-72),Ce("m2",-20,-72),Ce("m3",20,-72),Ce("m4",60,-72),Ce("m5",-60,-105),Ce("m6",-20,-105),Ce("m7",20,-105),Ce("m8",60,-105),Ce("uc1",20,-120),Ce("uc2",-5,-135),Ce("uc3",15,-150),Ce("u1",-90,-160),Ce("u2",-30,-160),Ce("u3",30,-160),Ce("u4",90,-160),Ce("u5",90,-195),Ce("u6",30,-195),Ce("u7",-30,-195),Ce("u8",-90,-195),Ce("ob1",95,-100),Ce("ob2",110,-70),Ce("mn1",-100,-25),Ce("mn2",-68,-25),Ce("mn3",-20,-25),Ce("mn4",20,-25),Ce("mn5",60,-25),Ce("mn6",-68,-72),Ce("ms1",-100,-120),Ce("ms2",-60,-120),Ce("ms3",-20,-120),Ce("ms4",20,-120),Ce("ms5",60,-120),Ce("ue1",100,-160),Ce("ue2",100,-195),Ce("ui5",130,-160),Ce("ob3",125,-100),Ce("wx1",-15,10),Ce("wx2",-15,70),Ce("wx3",-15,130),Ce("ex1",65,-10),Ce("ex2",65,50),Ce("ex3",65,110)],xe=(n,e,t="street",i)=>({a:n,b:e,kind:t,deckY:i}),Ro=[xe("ww1","ww2"),xe("ww2","ww3"),xe("ww1b","ww2b"),xe("ww2b","ww3b"),xe("ww1","ww1b"),xe("ww2","ww2b"),xe("ww3","ww3b"),xe("we1","we2"),xe("we2","we3"),xe("we1b","we2b"),xe("we1","we1b"),xe("we2","we2b"),xe("ww3b","bl-w"),xe("bl-w","bl-e","bridge",6),xe("bl-e","we3"),xe("ww1","sw1","switchback"),xe("sw1","sw2","switchback"),xe("sw2","sw3","switchback"),xe("sw3","sw4","switchback"),xe("sw4","m1","switchback"),xe("we1","se1","switchback"),xe("se1","se2","switchback"),xe("se2","se3","switchback"),xe("se3","se4","switchback"),xe("se4","m4","switchback"),xe("m1","m2"),xe("m2","m3"),xe("m3","m4"),xe("m5","m6"),xe("m6","m7"),xe("m7","m8"),xe("m1","m5"),xe("m2","m6"),xe("m3","m7"),xe("m4","m8"),xe("m3","uc1","switchback"),xe("uc1","uc2","switchback"),xe("uc2","uc3","switchback"),xe("uc3","u3","switchback"),xe("se4","ob1"),xe("ob1","ob2"),xe("mn1","mn2"),xe("mn2","mn3"),xe("mn3","mn4"),xe("mn4","mn5"),xe("mn1","sw2"),xe("mn5","se1"),xe("mn2","mn6"),xe("mn6","m1"),xe("ms1","ms2"),xe("ms3","ms4"),xe("ms4","ms5"),xe("ms2","m5"),xe("ms4","m7"),xe("u1","u2"),xe("u2","u3"),xe("u3","u4"),xe("u4","u5"),xe("u5","u6"),xe("u6","u7"),xe("u7","u8"),xe("u8","u1"),xe("u4","ue1"),xe("ue1","ue2"),xe("ue2","u5"),xe("u4","ui5"),xe("ob1","ob3"),xe("wx1","wx2"),xe("wx2","wx3"),xe("ww1b","wx1"),xe("ww2b","wx2"),xe("ww3b","wx3"),xe("ex1","ex2"),xe("ex2","ex3"),xe("we1","ex1"),xe("we2","ex2"),xe("we3","ex3")];Ro.filter(n=>n.kind==="bridge").map(n=>[n.a,n.b]);function vs(n){const e=Vd.find(t=>t.id===n);if(!e)throw new Error(`unknown road node ${n}`);return e}function uo(n){return{x:n.x,y:n.y??bn(n.x,n.z),z:n.z}}const Wd=1836670420,Xd=110,Ks=32,qd=.07;function $n(n){let e=n>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Yd(n){const e=$n(n),t=[];for(let i=0;i<Xd;i++){const s=e()*qd,r=e()*Ks,o=e()*Ks;t.push({x:r,y:o,alpha:s})}return t}const Zd=20260927,$d={harbor:{w:[9,16],d:[8,14],floors:[1,2],bayWindow:!1,palettes:[0]},"old-town":{w:[8,14],d:[8,12],floors:[2,4],bayWindow:!0,palettes:[0]},"merchant-row":{w:[8,14],d:[8,12],floors:[2,3],bayWindow:!0,palettes:[0]},"bungalow-lanes":{w:[8,12],d:[8,12],floors:[1,1],bayWindow:!1,palettes:[1,2,3,4]}},Gi=7,Kd=4,Ec=.9,Jd=-.4,Qd=2.8,jd=.7,br=Qd+jd,Er=2,Oo=275,ef=3.4;function zo(n,e,t,i,s,r,o,a){return n<o&&t>s&&e<a&&i>r}function wr(n,e,t,i,s,r,o,a){const l=t-n,c=i-e,h=o-s,d=a-r,u=l*d-c*h;if(Math.abs(u)<1e-9)return!1;const f=((s-n)*d-(r-e)*h)/u,g=((s-n)*c-(r-e)*l)/u;return f>=0&&f<=1&&g>=0&&g<=1}function tf(n,e,t,i,s,r,o,a){return n>=s&&n<=o&&e>=r&&e<=a||t>=s&&t<=o&&i>=r&&i<=a?!0:wr(n,e,t,i,s,r,o,r)||wr(n,e,t,i,o,r,o,a)||wr(n,e,t,i,o,a,s,a)||wr(n,e,t,i,s,a,s,r)}function nh(){const n=$n(Zd),e=[],t=mn.map(r=>({x0:r.min.x-Er,z0:r.min.z-Er,x1:r.max.x+Er,z1:r.max.z+Er})),i=Ro.filter(r=>r.kind!=="bridge").map(r=>{const o=vs(r.a),a=vs(r.b);return{x0:o.x,z0:o.z,x1:a.x,z1:a.z}});let s=0;for(const r of th)for(const[o,a,l,c]of r.rects){const h=r.name==="waterfront"?"harbor":r.name==="midtown"?"midtown-mix":"bungalow-lanes";for(let d=o+Gi/2;d<l&&e.length<Oo;d+=Gi)for(let u=a+Gi/2;u<c&&e.length<Oo;u+=Gi)for(let f=0;f<Kd&&e.length<Oo;f++){const g=(n()-.5)*Gi*Ec,M=(n()-.5)*Gi*Ec,m=h==="midtown-mix"?s%2===0?"old-town":"merchant-row":h,p=$d[m],y=p.w[0]+n()*(p.w[1]-p.w[0]),S=p.d[0]+n()*(p.d[1]-p.d[0]),_=p.floors[0]+Math.floor(n()*(p.floors[1]-p.floors[0]+1)),E=p.palettes[Math.floor(n()*p.palettes.length)],b=d+g,A=u+M,x=b-y/2,T=A-S/2;if(bn(b,A)<Jd||us(b,A)||zo(x,T,x+y,T+S,Fn[0],Fn[1],Fn[2],Fn[3])||t.some(B=>zo(x,T,x+y,T+S,B.x0,B.z0,B.x1,B.z1))||e.some(B=>zo(x,T,x+y,T+S,B.x,B.z,B.x+B.w,B.z+B.d)))continue;const C=x-br,P=T-br,I=x+y+br,V=T+S+br;i.some(B=>tf(B.x0,B.z0,B.x1,B.z1,C,P,I,V))||(h==="midtown-mix"&&s++,e.push({x,z:T,w:y,d:S,h:_*ef,floors:_,district:m,bayWindow:p.bayWindow,palette:E}))}}return e}function ih(n){return n.map(e=>{const t=bn(e.x+e.w/2,e.z+e.d/2);return{min:{x:e.x,y:t,z:e.z},max:{x:e.x+e.w,y:t+e.h,z:e.z+e.d},district:e.district}})}const Vt=1,nf=3,sf=100,rf=18,of=2.2,af=7,lf=12,cf=ih(nh()),sh=[...mn,...cf,...Id],uf=5,hf=.5,Kn=480,df=3.5,rh=.9,oh=.45,ff=3.5,pf=1.5,mf=3,gf=.8,wc=.2,xf=3,_f=8,vf=2,ah=6;function Mf(n,e){return Math.max(ah,uf+hf*n)*(1+e*.2)}const Tc=2,yf=20,Sf=.05,lh=.5,ch=3.6,In=(n,e,t)=>Math.max(e,Math.min(t,n)),Ra=n=>{const e=In(n,0,1);return e*e*(3-2*e)},Ac=45;function bf(n,e){const t=Math.hypot(n.x,n.z),i=Xs-Vt-Ac;if(t<=i)return;const s=Ra((t-i)/Ac),r=n.x/t,o=n.z/t,a=e.x*r+e.z*o;if(a<=0)return;const l=a*(1-s);e.x+=r*(l-a),e.z+=o*(l-a)}const Ef=n=>Math.hypot(n.x,n.y,n.z);function Dl(n=Tt[0].position){return{position:{...n},yaw:0,pitch:0,speed:9,throttle:9,hover:!1,velocity:{x:0,y:0,z:-9},brakeHold:!1}}function Il(){return{mode:"title",player:Dl(),profile:{coins:0,upgrades:{speed:0,handling:0,braking:0},furniture:[],tutorialDone:!1,runs:0,deliveries:0},run:null,paused:!1,pauseReason:"",message:"",tutorialStage:0,drop:null,descent:null,haloFade:0,homePosition:{x:0,z:3},homeFacing:0,homePanel:"none",summary:null,revision:0,coarsePointer:!1}}function wf(n){n.mode="tutorial",n.paused=!1,n.pauseReason="",n.player=Dl(),n.tutorialStage=0,n.drop=null,n.descent=null,n.haloFade=0,n.message="Steer toward the glowing Harbor Cafe pad.",n.revision++}function Tf(n){n.paused||n.mode!=="tutorial"&&n.mode!=="flight"||(n.player.hover=!n.player.hover,n.revision++)}function uh(n,e,t=""){n.paused=e,n.pauseReason=e?t:"",n.revision++}function ir(n){const e=n.player;if(!(e.speed>=df))return Tt.find(t=>{const i=e.position.x-t.position.x,s=e.position.z-t.position.z;return Math.hypot(i,s)<=ch&&e.position.y>=t.position.y})}function hh(n){var t;if(n.paused)return;if(n.mode==="home"){Ad(n);return}if(n.drop||n.descent||n.haloFade>0)return;if(n.mode==="tutorial"){if(((t=ir(n))==null?void 0:t.id)!=="harbor-cafe")return;Ca(n,Tt.find(i=>i.id==="harbor-cafe"));return}if(n.mode!=="flight"||!n.run)return;if(n.run.elapsed>=Kn){sr(n,!1);return}const e=ir(n);e&&Ca(n,e)}function Af(n,e){n.player.brakeHold=!1,n.haloFade=0,n.drop={stopId:e.id,t:0,parcel:e.id!=="home"},dh(n),n.message=e.id==="home"?"Banking your earnings…":"Parcel away!",n.revision++}function dh(n){n.player.speed=0,n.player.hover=!0,n.player.velocity={x:0,y:0,z:0}}function Rf(n,e){var s;if(n.player.hover=!1,n.player.throttle=0,n.mode==="tutorial"){n.profile.tutorialDone=!0,n.message="Practice complete",n.mode="title",n.tutorialStage=3,n.revision++;return}const t=n.run;if(!t||t.elapsed>=Kn){sr(n,!1);return}const i=Tt.find(r=>r.id===e);if(i){if(i.id==="home"){const r=t.earnings,o=t.deliveries;sr(n,!0),n.summary=null,Ta(n),n.message=`Shift complete — banked ${r} coins after ${o} ${o===1?"delivery":"deliveries"}.`;return}((s=t.job)==null?void 0:s.to)===i.id&&(t.earnings+=t.job.payout,t.deliveries++,n.profile.deliveries++,t.job=null,t.lastStop=i.id,t.offers=ph(t.seed,t.deliveries,i.id),t.returning=!1,n.mode="offers",n.message="Delivered! Choose the next parcel or return home.",n.revision++)}}function Cf(n,e=Date.now()){if(n.paused||n.run||n.mode!=="title"&&n.mode!=="summary"&&n.mode!=="home")return;const t=Number.isFinite(e)?Math.floor(e):Date.now();n.player=Dl(),n.run={seed:t,elapsed:0,earnings:0,deliveries:0,job:null,offers:ph(t,0,"home"),returning:!1,lastStop:"home"},n.summary=null,n.homePanel="none",n.drop=null,n.descent=null,n.haloFade=0,n.mode="offers",n.message="Choose your first delivery of the day.",n.revision++}function Pf(n,e){if(n.paused||n.mode!=="offers"||!n.run||!Number.isInteger(e))return;const t=n.run.offers[e];t&&(n.run.job=t,n.run.offers=[],n.run.returning=!1,n.mode="flight",n.message=`Delivery: ${If(t.to)}.`,n.revision++)}function Lf(n){n.paused||n.mode!=="offers"||!n.run||n.run.deliveries===0||(n.run.job=null,n.run.offers=[],n.run.returning=!0,n.mode="flight",n.message="Return to Meg's Rooftop to bank your earnings.",n.revision++)}function sr(n,e){const t=n.run;if(!t)return;n.drop=null,n.descent=null,n.haloFade=0;const i=e?t.earnings:0;n.summary={success:e,earnings:i,deliveries:t.deliveries},e&&(n.profile.coins+=i),n.profile.runs++,n.run=null,n.mode="summary",n.player.speed=0,n.player.throttle=0,n.player.hover=!0,n.player.velocity={x:0,y:0,z:0},n.message=e?"Shift complete. Earnings banked!":"Rescue called. Unbanked earnings were lost.",n.revision++}function fh(n){if(n.mode==="tutorial")return Tt.find(e=>e.id==="harbor-cafe");if(n.run)return Tt.find(e=>{var t;return e.id===(n.run.returning?"home":(t=n.run.job)==null?void 0:t.to)})}function Df(n,e,t){return(Math.atan2(e.x-n.x,-(e.z-n.z))-t)*180/Math.PI}function If(n){var e;return((e=Tt.find(t=>t.id===n))==null?void 0:e.name)??n}function Co(n){if(!(n.drop||n.descent)&&!(n.mode!=="tutorial"&&n.mode!=="flight"))return fh(n)}function Ls(n){let e=n|0;return e=Math.imul(e^e>>>16,73244475),e=Math.imul(e^e>>>16,73244475),(e^e>>>16)>>>0}function ph(n,e,t){let i=Ls(n^Ls(e)^Ls(t.length));const s=Tt.find(c=>c.id===t),r=Tt.filter(c=>c.id!=="home"&&c.id!==t).map(c=>({stop:c,distance:Math.hypot(c.position.x-s.position.x,c.position.z-s.position.z)})).sort((c,h)=>c.distance-h.distance);i=Ls(i+1);const o=r[i%Math.min(3,r.length)],a=r.slice(-Math.min(3,r.length));i=Ls(i+2);const l=a[i%a.length];return[o,l].sort((c,h)=>c.distance-h.distance).map(({stop:c,distance:h},d)=>{const u=h<100?20:h<180?35:50;return{from:t,to:c.id,payout:u,label:d===0?"Short hop":"Long haul",parcel:"Delivery parcel"}})}function Nf(n,e){let t;for(const i of sh){const s={x:i.min.x-Vt,y:i.min.y-Vt,z:i.min.z-Vt},r={x:i.max.x+Vt,y:i.max.y+Vt,z:i.max.z+Vt};let o=-1e-9,a=1,l={x:0,y:0,z:0};for(const c of["x","y","z"]){const h=n[c],d=e[c];if(Math.abs(d)<1e-9){if(h<s[c]||h>r[c]){o=2;break}continue}const u=(s[c]-h)/d,f=(r[c]-h)/d,g=Math.min(u,f),M=Math.max(u,f);if(g>o&&(o=g,l={x:0,y:0,z:0},l[c]=u<f?-1:1),a=Math.min(a,M),o>a)break}o>=0&&o<=1&&o<=a&&(!t||o<t.t)&&(t={t:o,normal:l})}return t}function mh(n,e){var t;return n.mode==="tutorial"?e.id==="harbor-cafe":n.mode!=="flight"||!n.run?!1:e.id==="home"?n.run.returning&&!n.run.job:((t=n.run.job)==null?void 0:t.to)===e.id}function Uf(n){if(n.drop||n.descent||n.haloFade>0||n.mode!=="tutorial"&&n.mode!=="flight"||Math.abs(n.player.speed)>lh)return;const e=Co(n),t=e?ir(n):void 0;!t||t.id!==e.id||!mh(n,t)||(n.haloFade=oh)}function Ff(n){const e=Co(n),t=e?ir(n):void 0;!t||t.id!==e.id||!mh(n,t)||Math.abs(n.player.speed)>lh||Ca(n,t)}function Ca(n,e){const t=n.player.position.x-e.position.x,i=n.player.position.z-e.position.z,s=Math.hypot(t,i),r=Math.atan2(i,t),o=Math.atan2(-Math.sin(r),-Math.cos(r)),a=Math.abs(Math.atan2(Math.sin(o-n.player.yaw),Math.cos(o-n.player.yaw)));n.descent={stopId:e.id,startY:n.player.position.y,angle:r,radius0:s,orbitR:Math.max(s,mf),dir:a<=Math.PI/2?1:-1,t:0},n.player.brakeHold=!1,dh(n),n.message="Descending…",n.revision++}function Of(n,e,t){if(n.mode==="home"){Rd(n,e,t);return}if(n.paused||n.mode!=="tutorial"&&n.mode!=="flight"&&n.mode!=="offers"||!Number.isFinite(t)||t<=0)return;if(n.drop){if(n.mode!=="flight"&&n.mode!=="tutorial")n.drop=null;else{if(n.drop.t+=Math.max(0,t),n.drop.t>=rh){const x=n.drop.stopId;n.drop=null,Rf(n,x)}n.revision++}return}const i=Math.max(0,t);if(n.haloFade>0&&(n.haloFade=Math.max(0,n.haloFade-i),n.haloFade===0&&Ff(n),n.revision++,n.haloFade>0||n.drop||n.descent))return;if(n.descent){const x=Tt.find(T=>T.id===n.descent.stopId);if(n.mode!=="flight"&&n.mode!=="tutorial"||!x)n.descent=null,n.player.hover=!1;else{const T=x.position.y+ff;if(n.player.position.y-T<=.05)n.descent=null,Af(n,x);else{const C=n.descent,P=n.player.position.x,I=n.player.position.z,V=Math.min(_f,Math.max(vf,(n.player.position.y-T)*1.5));n.player.position.y=Math.max(T,n.player.position.y-V*i),C.t+=i,C.angle+=C.dir*pf*i;const B=C.radius0+(C.orbitR-C.radius0)*Ra(C.t/gf),N=Math.max(0,(n.player.position.y-T)/Math.max(.001,C.startY-T)),W=N>=wc?1:Ra(N/wc),F=B*W,Z=x.position.x+Math.cos(C.angle)*F,j=x.position.z+Math.sin(C.angle)*F,ae=Z-P,re=j-I;if(Math.hypot(ae,re)>.75*i){const _e=Math.atan2(ae,-re),qe=Math.atan2(Math.sin(_e-n.player.yaw),Math.cos(_e-n.player.yaw)),nt=xf*i;n.player.yaw+=Math.max(-nt,Math.min(nt,qe))}n.player.position.x=Z,n.player.position.z=j,n.revision++}}return}if(n.run&&(n.mode==="flight"||n.mode==="offers")){if(n.run.elapsed>=Kn-1e-9){n.run.elapsed=Kn,sr(n,!1);return}const x=n.run.elapsed;if(n.run.elapsed=Math.min(Kn,x+i),n.run.elapsed>=Kn-1e-9){n.run.elapsed=Kn,sr(n,!1);return}if(zf(n,x),n.mode==="offers"){n.revision++;return}}const s=n.player,r=In(e.turn,-1,1),o=In(e.climb,-1,1),a=rf*(1+n.profile.upgrades.speed*.1),l=of*(1+n.profile.upgrades.handling*.2),c=Mf(s.speed,n.profile.upgrades.braking);s.yaw+=r*l*i,s.pitch+=(o*.38-s.pitch)*Math.min(1,7*i),e.cutThrottle&&(s.throttle=0),s.throttle=In(s.throttle+In(e.throttle,-1,1)*af*i,0,a);let h,d=1/0;const u=s.hover?void 0:Co(n);if(u){const x=u.position.x-s.position.x,T=u.position.z-s.position.z;d=Math.hypot(x,T),d<Tc?(h=0,s.brakeHold=!0):s.brakeHold&&d<yf?h=0:d>1e-6&&(s.velocity.x*x+s.velocity.z*T)/d>.5&&(h=Math.sqrt(2*ah*d)),h===void 0&&(s.brakeHold=!1)}else s.brakeHold=!1;const f=s.throttle>Sf?s.throttle:s.speed,g=s.hover?0:h===void 0?s.throttle:Math.min(h,f);s.speed=In(s.speed+In(g-s.speed,-c*i,lf*i),0,a),Math.abs(s.speed)<.01&&(s.speed=0),s.brakeHold&&s.speed===0&&(s.brakeHold=!1,d>=Tc&&(s.throttle=0));const M={x:Math.sin(s.yaw),z:-Math.cos(s.yaw)},m=s.hover?0:o*Math.max(s.speed,3)*.7,p={x:M.x*s.speed*i,y:m*i,z:M.z*s.speed*i};bf(s.position,p);const y=s.position.x,S=s.position.y,_=s.position.z;let E={...p};for(let x=0;x<3;x++){const T=Nf(s.position,E);if(!T){s.position.x+=E.x,s.position.y+=E.y,s.position.z+=E.z;break}if(!(T.normal.x||T.normal.y||T.normal.z))break;const C=Math.max(0,T.t-1e-4);s.position.x+=E.x*C,s.position.y+=E.y*C,s.position.z+=E.z*C;const P=1-C;if(E={x:T.normal.x?0:E.x*P,y:T.normal.y?0:E.y*P,z:T.normal.z?0:E.z*P},!E.x&&!E.y&&!E.z)break}for(let x=0;x<4;x++){let T=!1;for(const C of sh){const P=C.min.x-Vt,I=C.max.x+Vt,V=C.min.y-Vt,B=C.max.y+Vt,N=C.min.z-Vt,W=C.max.z+Vt,F=s.position;if(F.x<=P||F.x>=I||F.y<=V||F.y>=B||F.z<=N||F.z>=W)continue;const Z=F.x-P,j=I-F.x,ae=F.y-V,re=B-F.y,_e=F.z-N,qe=W-F.z,nt=Math.min(Z,j,ae,re,_e,qe),Ke=.02;nt===Z?F.x=P-Ke:nt===j?F.x=I+Ke:nt===ae?F.y=V-Ke:nt===re?F.y=B+Ke:nt===_e?F.z=N-Ke:F.z=W+Ke,T=!0}if(!T)break}s.position.x=In(s.position.x,-Xs+Vt,Xs-Vt);const b=Math.max(bn(s.position.x,s.position.z),0)+nf;s.position.y=In(s.position.y,b,sf),s.position.z=In(s.position.z,-Xs+Vt,Xs-Vt),s.velocity={x:(s.position.x-y)/i,y:(s.position.y-S)/i,z:(s.position.z-_)/i};const A=Ef({x:s.position.x-y,y:s.position.y-S,z:s.position.z-_});n.mode==="tutorial"&&n.tutorialStage===0&&A>.1?(n.tutorialStage=1,n.message=n.coarsePointer?"Release the stick to slow down and hover.":"Press Space to slow down and hover."):n.mode==="tutorial"&&n.tutorialStage===1&&Math.abs(s.speed)<.5&&(n.tutorialStage=2,n.message="Nice and steady. Drift over the glowing Harbor Cafe pad — the parcel drops itself."),Uf(n),n.revision++}function zf(n,e){const t=Kn-n.run.elapsed,i=Kn-e;i>30&&t<=30?n.message="30 seconds left — return home before nightfall!":i>60&&t<=60?n.message="One minute left — Meg needs to head home.":i>120&&t<=120&&(n.message="Two minutes left — finish up before nightfall.")}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Nl="185",Bf=0,Rc=1,kf=2,no=1,Hf=2,qs=3,xi=0,jt=1,nn=2,ti=0,ds=1,Pa=2,Cc=3,Pc=4,Gf=5,Ai=100,Vf=101,Wf=102,Xf=103,qf=104,Yf=200,Zf=201,$f=202,Kf=203,La=204,Da=205,Jf=206,Qf=207,jf=208,ep=209,tp=210,np=211,ip=212,sp=213,rp=214,Ia=0,Na=1,Ua=2,Ms=3,Fa=4,Oa=5,za=6,Ba=7,gh=0,op=1,ap=2,Bn=0,xh=1,_h=2,vh=3,Ul=4,Mh=5,yh=6,Sh=7,bh=300,Ii=301,ys=302,Bo=303,ko=304,Po=306,ho=1e3,Qn=1001,ka=1002,Ht=1003,lp=1004,Tr=1005,Kt=1006,Ho=1007,Pi=1008,un=1009,Eh=1010,wh=1011,rr=1012,Fl=1013,Gn=1014,Tn=1015,ii=1016,Ol=1017,zl=1018,or=1020,Th=35902,Ah=35899,Rh=1021,Ch=1022,An=1023,si=1026,Li=1027,Bl=1028,kl=1029,Ni=1030,Hl=1031,Gl=1033,io=33776,so=33777,ro=33778,oo=33779,Ha=35840,Ga=35841,Va=35842,Wa=35843,Xa=36196,qa=37492,Ya=37496,Za=37488,$a=37489,fo=37490,Ka=37491,Ja=37808,Qa=37809,ja=37810,el=37811,tl=37812,nl=37813,il=37814,sl=37815,rl=37816,ol=37817,al=37818,ll=37819,cl=37820,ul=37821,hl=36492,dl=36494,fl=36495,pl=36283,ml=36284,po=36285,gl=36286,cp=3200,xl=0,up=1,mi="",$t="srgb",mo="srgb-linear",go="linear",dt="srgb",Vi=7680,Lc=519,hp=512,dp=513,fp=514,Vl=515,pp=516,mp=517,Wl=518,gp=519,_l=35044,Dc="300 es",zn=2e3,ar=2001;function xp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function xo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function _p(){const n=xo("canvas");return n.style.display="block",n}const Ic={};function _o(...n){const e="THREE."+n.shift();console.log(e,...n)}function Ph(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Xe(...n){n=Ph(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function rt(...n){n=Ph(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function fs(...n){const e=n.join(" ");e in Ic||(Ic[e]=!0,Xe(...n))}function vp(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Mp={[Ia]:Na,[Ua]:za,[Fa]:Ba,[Ms]:Oa,[Na]:Ia,[za]:Ua,[Ba]:Fa,[Oa]:Ms};class Oi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Nc=1234567;const Js=Math.PI/180,lr=180/Math.PI;function kn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]).toLowerCase()}function it(n,e,t){return Math.max(e,Math.min(t,n))}function Xl(n,e){return(n%e+e)%e}function yp(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Sp(n,e,t){return n!==e?(t-n)/(e-n):0}function Qs(n,e,t){return(1-t)*n+t*e}function bp(n,e,t,i){return Qs(n,e,1-Math.exp(-t*i))}function Ep(n,e=1){return e-Math.abs(Xl(n,e*2)-e)}function wp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Tp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Ap(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Rp(n,e){return n+Math.random()*(e-n)}function Cp(n){return n*(.5-Math.random())}function Pp(n){n!==void 0&&(Nc=n);let e=Nc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Lp(n){return n*Js}function Dp(n){return n*lr}function Ip(n){return(n&n-1)===0&&n!==0}function Np(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Up(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Fp(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),d=r((e-i)/2),u=o((e-i)/2),f=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*d,l*u,a*c);break;case"YZY":n.set(l*u,a*h,l*d,a*c);break;case"ZXZ":n.set(l*d,l*u,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*f,a*c);break;case"YXY":n.set(l*f,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*f,a*h,a*c);break;default:Xe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function wn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ft(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ys={DEG2RAD:Js,RAD2DEG:lr,generateUUID:kn,clamp:it,euclideanModulo:Xl,mapLinear:yp,inverseLerp:Sp,lerp:Qs,damp:bp,pingpong:Ep,smoothstep:wp,smootherstep:Tp,randInt:Ap,randFloat:Rp,randFloatSpread:Cp,seededRandom:Pp,degToRad:Lp,radToDeg:Dp,isPowerOfTwo:Ip,ceilPowerOfTwo:Np,floorPowerOfTwo:Up,setQuaternionFromProperEuler:Fp,normalize:ft,denormalize:wn},rc=class rc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};rc.prototype.isVector2=!0;let ce=rc;class As{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[o+0],f=r[o+1],g=r[o+2],M=r[o+3];if(d!==M||l!==u||c!==f||h!==g){let m=l*u+c*f+h*g+d*M;m<0&&(u=-u,f=-f,g=-g,M=-M,m=-m);let p=1-a;if(m<.9995){const y=Math.acos(m),S=Math.sin(y);p=Math.sin(p*y)/S,a=Math.sin(a*y)/S,l=l*p+u*a,c=c*p+f*a,h=h*p+g*a,d=d*p+M*a}else{l=l*p+u*a,c=c*p+f*a,h=h*p+g*a,d=d*p+M*a;const y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-a*f,e[t+2]=c*g+h*f+a*u-l*d,e[t+3]=h*g-a*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),u=l(i/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:Xe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>d){const f=2*Math.sqrt(1+i-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-i-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const oc=class oc{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Uc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Uc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Go.copy(this).projectOnVector(e),this.sub(Go)}reflect(e){return this.sub(Go.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};oc.prototype.isVector3=!0;let L=oc;const Go=new L,Uc=new As,ac=class ac{constructor(e,t,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],M=s[0],m=s[3],p=s[6],y=s[1],S=s[4],_=s[7],E=s[2],b=s[5],A=s[8];return r[0]=o*M+a*y+l*E,r[3]=o*m+a*S+l*b,r[6]=o*p+a*_+l*A,r[1]=c*M+h*y+d*E,r[4]=c*m+h*S+d*b,r[7]=c*p+h*_+d*A,r[2]=u*M+f*y+g*E,r[5]=u*m+f*S+g*b,r[8]=u*p+f*_+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,g=t*d+i*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return e[0]=d*M,e[1]=(s*c-h*i)*M,e[2]=(a*i-s*o)*M,e[3]=u*M,e[4]=(h*t-s*l)*M,e[5]=(s*r-a*t)*M,e[6]=f*M,e[7]=(i*l-c*t)*M,e[8]=(o*t-i*r)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return fs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Vo.makeScale(e,t)),this}rotate(e){return fs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Vo.makeRotation(-e)),this}translate(e,t){return fs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Vo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ac.prototype.isMatrix3=!0;let $e=ac;const Vo=new $e,Fc=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Oc=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Op(){const n={enabled:!0,workingColorSpace:mo,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===dt&&(s.r=ni(s.r),s.g=ni(s.g),s.b=ni(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===dt&&(s.r=ps(s.r),s.g=ps(s.g),s.b=ps(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===mi?go:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return fs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return fs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[mo]:{primaries:e,whitePoint:i,transfer:go,toXYZ:Fc,fromXYZ:Oc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:$t},outputColorSpaceConfig:{drawingBufferColorSpace:$t}},[$t]:{primaries:e,whitePoint:i,transfer:dt,toXYZ:Fc,fromXYZ:Oc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:$t}}}),n}const at=Op();function ni(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ps(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Wi;class zp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Wi===void 0&&(Wi=xo("canvas")),Wi.width=e.width,Wi.height=e.height;const s=Wi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Wi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ni(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ni(t[i]/255)*255):t[i]=ni(t[i]);return{data:t,width:e.width,height:e.height}}else return Xe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Bp=0;class ql{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=kn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Wo(s[o].image)):r.push(Wo(s[o]))}else r=Wo(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Wo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?zp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Xe("Texture: Unable to serialize Texture."),{})}let kp=0;const Xo=new L;class Wt extends Oi{constructor(e=Wt.DEFAULT_IMAGE,t=Wt.DEFAULT_MAPPING,i=Qn,s=Qn,r=Kt,o=Pi,a=An,l=un,c=Wt.DEFAULT_ANISOTROPY,h=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=kn(),this.name="",this.source=new ql(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Xo).x}get height(){return this.source.getSize(Xo).y}get depth(){return this.source.getSize(Xo).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Xe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Xe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ho:e.x=e.x-Math.floor(e.x);break;case Qn:e.x=e.x<0?0:1;break;case ka:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ho:e.y=e.y-Math.floor(e.y);break;case Qn:e.y=e.y<0?0:1;break;case ka:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=bh;Wt.DEFAULT_ANISOTROPY=1;const lc=class lc{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],M=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-M)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+M)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,_=(f+1)/2,E=(p+1)/2,b=(h+u)/4,A=(d+M)/4,x=(g+m)/4;return S>_&&S>E?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=b/i,r=A/i):_>E?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=b/s,r=x/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=A/r,s=x/r),this.set(i,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(d-M)*(d-M)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(d-M)/y,this.z=(u-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};lc.prototype.isVector4=!0;let Rt=lc;class Hp extends Oi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new Wt(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new ql(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hn extends Hp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Lh extends Wt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Gp extends Wt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ao=class Ao{constructor(e,t,i,s,r,o,a,l,c,h,d,u,f,g,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,d,u,f,g,M,m)}set(e,t,i,s,r,o,a,l,c,h,d,u,f,g,M,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=M,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ao().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/Xi.setFromMatrixColumn(e,0).length(),r=1/Xi.setFromMatrixColumn(e,1).length(),o=1/Xi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=o*h,f=o*d,g=a*h,M=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-M*c,t[9]=-a*l,t[2]=M-u*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const u=l*h,f=l*d,g=c*h,M=c*d;t[0]=u+M*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=M+u*a,t[10]=o*l}else if(e.order==="ZXY"){const u=l*h,f=l*d,g=c*h,M=c*d;t[0]=u-M*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=M-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const u=o*h,f=o*d,g=a*h,M=a*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+M,t[1]=l*d,t[5]=M*c+u,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const u=o*l,f=o*c,g=a*l,M=a*c;t[0]=l*h,t[4]=M-u*d,t[8]=g*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-M*d}else if(e.order==="XZY"){const u=o*l,f=o*c,g=a*l,M=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+M,t[5]=o*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*h,t[10]=M*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vp,e,Wp)}lookAt(e,t,i){const s=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),li.crossVectors(i,rn),li.lengthSq()===0&&(Math.abs(i.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),li.crossVectors(i,rn)),li.normalize(),Ar.crossVectors(rn,li),s[0]=li.x,s[4]=Ar.x,s[8]=rn.x,s[1]=li.y,s[5]=Ar.y,s[9]=rn.y,s[2]=li.z,s[6]=Ar.z,s[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],M=i[6],m=i[10],p=i[14],y=i[3],S=i[7],_=i[11],E=i[15],b=s[0],A=s[4],x=s[8],T=s[12],C=s[1],P=s[5],I=s[9],V=s[13],B=s[2],N=s[6],W=s[10],F=s[14],Z=s[3],j=s[7],ae=s[11],re=s[15];return r[0]=o*b+a*C+l*B+c*Z,r[4]=o*A+a*P+l*N+c*j,r[8]=o*x+a*I+l*W+c*ae,r[12]=o*T+a*V+l*F+c*re,r[1]=h*b+d*C+u*B+f*Z,r[5]=h*A+d*P+u*N+f*j,r[9]=h*x+d*I+u*W+f*ae,r[13]=h*T+d*V+u*F+f*re,r[2]=g*b+M*C+m*B+p*Z,r[6]=g*A+M*P+m*N+p*j,r[10]=g*x+M*I+m*W+p*ae,r[14]=g*T+M*V+m*F+p*re,r[3]=y*b+S*C+_*B+E*Z,r[7]=y*A+S*P+_*N+E*j,r[11]=y*x+S*I+_*W+E*ae,r[15]=y*T+S*V+_*F+E*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],M=e[7],m=e[11],p=e[15],y=l*f-c*u,S=a*f-c*d,_=a*u-l*d,E=o*f-c*h,b=o*u-l*h,A=o*d-a*h;return t*(M*y-m*S+p*_)-i*(g*y-m*E+p*b)+s*(g*S-M*E+p*A)-r*(g*_-M*b+m*A)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-i*(r*h-a*l)+s*(r*c-o*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],M=e[13],m=e[14],p=e[15],y=t*a-i*o,S=t*l-s*o,_=t*c-r*o,E=i*l-s*a,b=i*c-r*a,A=s*c-r*l,x=h*M-d*g,T=h*m-u*g,C=h*p-f*g,P=d*m-u*M,I=d*p-f*M,V=u*p-f*m,B=y*V-S*I+_*P+E*C-b*T+A*x;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/B;return e[0]=(a*V-l*I+c*P)*N,e[1]=(s*I-i*V-r*P)*N,e[2]=(M*A-m*b+p*E)*N,e[3]=(u*b-d*A-f*E)*N,e[4]=(l*C-o*V-c*T)*N,e[5]=(t*V-s*C+r*T)*N,e[6]=(m*_-g*A-p*S)*N,e[7]=(h*A-u*_+f*S)*N,e[8]=(o*I-a*C+c*x)*N,e[9]=(i*C-t*I-r*x)*N,e[10]=(g*b-M*_+p*y)*N,e[11]=(d*_-h*b-f*y)*N,e[12]=(a*T-o*P-l*x)*N,e[13]=(t*P-i*T+s*x)*N,e[14]=(M*S-g*E-m*y)*N,e[15]=(h*E-d*S+u*y)*N,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,g=r*d,M=o*h,m=o*d,p=a*d,y=l*c,S=l*h,_=l*d,E=i.x,b=i.y,A=i.z;return s[0]=(1-(M+p))*E,s[1]=(f+_)*E,s[2]=(g-S)*E,s[3]=0,s[4]=(f-_)*b,s[5]=(1-(u+p))*b,s[6]=(m+y)*b,s[7]=0,s[8]=(g+S)*A,s[9]=(m-y)*A,s[10]=(1-(u+M))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=Xi.set(s[0],s[1],s[2]).length();const a=Xi.set(s[4],s[5],s[6]).length(),l=Xi.set(s[8],s[9],s[10]).length();r<0&&(o=-o),_n.copy(this);const c=1/o,h=1/a,d=1/l;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=h,_n.elements[5]*=h,_n.elements[6]*=h,_n.elements[8]*=d,_n.elements[9]*=d,_n.elements[10]*=d,t.setFromRotationMatrix(_n),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=zn,l=!1){const c=this.elements,h=2*r/(t-e),d=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s);let g,M;if(l)g=r/(o-r),M=o*r/(o-r);else if(a===zn)g=-(o+r)/(o-r),M=-2*o*r/(o-r);else if(a===ar)g=-o/(o-r),M=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=zn,l=!1){const c=this.elements,h=2/(t-e),d=2/(i-s),u=-(t+e)/(t-e),f=-(i+s)/(i-s);let g,M;if(l)g=1/(o-r),M=o/(o-r);else if(a===zn)g=-2/(o-r),M=-(o+r)/(o-r);else if(a===ar)g=-1/(o-r),M=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Ao.prototype.isMatrix4=!0;let _t=Ao;const Xi=new L,_n=new _t,Vp=new L(0,0,0),Wp=new L(1,1,1),li=new L,Ar=new L,rn=new L,zc=new _t,Bc=new As;class Ui{constructor(e=0,t=0,i=0,s=Ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-it(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(it(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-it(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Xe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return zc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bc.setFromEuler(this),this.setFromQuaternion(Bc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ui.DEFAULT_ORDER="XYZ";class Yl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Xp=0;const kc=new L,qi=new As,Wn=new _t,Rr=new L,Ds=new L,qp=new L,Yp=new As,Hc=new L(1,0,0),Gc=new L(0,1,0),Vc=new L(0,0,1),Wc={type:"added"},Zp={type:"removed"},Yi={type:"childadded",child:null},qo={type:"childremoved",child:null};class Nt extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DEFAULT_UP.clone();const e=new L,t=new Ui,i=new As,s=new L(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _t},normalMatrix:{value:new $e}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qi.setFromAxisAngle(e,t),this.quaternion.multiply(qi),this}rotateOnWorldAxis(e,t){return qi.setFromAxisAngle(e,t),this.quaternion.premultiply(qi),this}rotateX(e){return this.rotateOnAxis(Hc,e)}rotateY(e){return this.rotateOnAxis(Gc,e)}rotateZ(e){return this.rotateOnAxis(Vc,e)}translateOnAxis(e,t){return kc.copy(e).applyQuaternion(this.quaternion),this.position.add(kc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hc,e)}translateY(e){return this.translateOnAxis(Gc,e)}translateZ(e){return this.translateOnAxis(Vc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Rr.copy(e):Rr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(Ds,Rr,this.up):Wn.lookAt(Rr,Ds,this.up),this.quaternion.setFromRotationMatrix(Wn),s&&(Wn.extractRotation(s.matrixWorld),qi.setFromRotationMatrix(Wn),this.quaternion.premultiply(qi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wc),Yi.child=e,this.dispatchEvent(Yi),Yi.child=null):rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zp),qo.child=e,this.dispatchEvent(qo),qo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wc),Yi.child=e,this.dispatchEvent(Yi),Yi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,e,qp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,Yp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Nt.DEFAULT_UP=new L(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ut extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $p={type:"move"};class Yo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const M of e.hand.values()){const m=t.getJointPose(M,i),p=this._getHandJoint(c,M);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($p)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ut;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Dh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},Cr={h:0,s:0,l:0};function Zo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ot{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=at.workingColorSpace){return this.r=e,this.g=t,this.b=i,at.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=at.workingColorSpace){if(e=Xl(e,1),t=it(t,0,1),i=it(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Zo(o,r,e+1/3),this.g=Zo(o,r,e),this.b=Zo(o,r,e-1/3)}return at.colorSpaceToWorking(this,s),this}setStyle(e,t=$t){function i(r){r!==void 0&&parseFloat(r)<1&&Xe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Xe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Xe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$t){const i=Dh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Xe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ni(e.r),this.g=ni(e.g),this.b=ni(e.b),this}copyLinearToSRGB(e){return this.r=ps(e.r),this.g=ps(e.g),this.b=ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$t){return at.workingToColorSpace(Yt.copy(this),e),Math.round(it(Yt.r*255,0,255))*65536+Math.round(it(Yt.g*255,0,255))*256+Math.round(it(Yt.b*255,0,255))}getHexString(e=$t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.workingToColorSpace(Yt.copy(this),t);const i=Yt.r,s=Yt.g,r=Yt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=at.workingColorSpace){return at.workingToColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=$t){at.workingToColorSpace(Yt.copy(this),e);const t=Yt.r,i=Yt.g,s=Yt.b;return e!==$t?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ci),this.setHSL(ci.h+e,ci.s+t,ci.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ci),e.getHSL(Cr);const i=Qs(ci.h,Cr.h,t),s=Qs(ci.s,Cr.s,t),r=Qs(ci.l,Cr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new ot;ot.NAMES=Dh;class vo{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ot(e),this.density=t}clone(){return new vo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Kp extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ui,this.environmentIntensity=1,this.environmentRotation=new Ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const vn=new L,Xn=new L,$o=new L,qn=new L,Zi=new L,$i=new L,Xc=new L,Ko=new L,Jo=new L,Qo=new L,jo=new Rt,ea=new Rt,ta=new Rt;class gn{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),vn.subVectors(e,t),s.cross(vn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){vn.subVectors(s,t),Xn.subVectors(i,t),$o.subVectors(e,t);const o=vn.dot(vn),a=vn.dot(Xn),l=vn.dot($o),c=Xn.dot(Xn),h=Xn.dot($o),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,qn.x),l.addScaledVector(o,qn.y),l.addScaledVector(a,qn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return jo.setScalar(0),ea.setScalar(0),ta.setScalar(0),jo.fromBufferAttribute(e,t),ea.fromBufferAttribute(e,i),ta.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(jo,r.x),o.addScaledVector(ea,r.y),o.addScaledVector(ta,r.z),o}static isFrontFacing(e,t,i,s){return vn.subVectors(i,t),Xn.subVectors(e,t),vn.cross(Xn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),vn.cross(Xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return gn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Zi.subVectors(s,i),$i.subVectors(r,i),Ko.subVectors(e,i);const l=Zi.dot(Ko),c=$i.dot(Ko);if(l<=0&&c<=0)return t.copy(i);Jo.subVectors(e,s);const h=Zi.dot(Jo),d=$i.dot(Jo);if(h>=0&&d<=h)return t.copy(s);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Zi,o);Qo.subVectors(e,r);const f=Zi.dot(Qo),g=$i.dot(Qo);if(g>=0&&f<=g)return t.copy(r);const M=f*c-l*g;if(M<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector($i,a);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Xc.subVectors(r,s),a=(d-h)/(d-h+(f-g)),t.copy(s).addScaledVector(Xc,a);const p=1/(m+M+u);return o=M*p,a=u*p,t.copy(i).addScaledVector(Zi,o).addScaledVector($i,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class zi{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Mn):Mn.fromBufferAttribute(r,o),Mn.applyMatrix4(e.matrixWorld),this.expandByPoint(Mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Pr.copy(i.boundingBox)),Pr.applyMatrix4(e.matrixWorld),this.union(Pr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Is),Lr.subVectors(this.max,Is),Ki.subVectors(e.a,Is),Ji.subVectors(e.b,Is),Qi.subVectors(e.c,Is),ui.subVectors(Ji,Ki),hi.subVectors(Qi,Ji),vi.subVectors(Ki,Qi);let t=[0,-ui.z,ui.y,0,-hi.z,hi.y,0,-vi.z,vi.y,ui.z,0,-ui.x,hi.z,0,-hi.x,vi.z,0,-vi.x,-ui.y,ui.x,0,-hi.y,hi.x,0,-vi.y,vi.x,0];return!na(t,Ki,Ji,Qi,Lr)||(t=[1,0,0,0,1,0,0,0,1],!na(t,Ki,Ji,Qi,Lr))?!1:(Dr.crossVectors(ui,hi),t=[Dr.x,Dr.y,Dr.z],na(t,Ki,Ji,Qi,Lr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Yn=[new L,new L,new L,new L,new L,new L,new L,new L],Mn=new L,Pr=new zi,Ki=new L,Ji=new L,Qi=new L,ui=new L,hi=new L,vi=new L,Is=new L,Lr=new L,Dr=new L,Mi=new L;function na(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Mi.fromArray(n,r);const a=s.x*Math.abs(Mi.x)+s.y*Math.abs(Mi.y)+s.z*Math.abs(Mi.z),l=e.dot(Mi),c=t.dot(Mi),h=i.dot(Mi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Ut=new L,Ir=new ce;let Jp=0;class hn extends Oi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Jp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=_l,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ir.fromBufferAttribute(this,t),Ir.applyMatrix3(e),this.setXY(t,Ir.x,Ir.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=wn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ft(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array),s=ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array),s=ft(s,this.array),r=ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_l&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Ih extends hn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Nh extends hn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class vt extends hn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Qp=new zi,Ns=new L,ia=new L;class mr{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Qp.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ns.subVectors(e,this.center);const t=Ns.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ns,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ia.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ns.copy(e.center).add(ia)),this.expandByPoint(Ns.copy(e.center).sub(ia))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let jp=0;const fn=new _t,sa=new Nt,ji=new L,on=new zi,Us=new zi,kt=new L;class Gt extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xp(e)?Nh:Ih)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new $e().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return fn.makeRotationFromQuaternion(e),this.applyMatrix4(fn),this}rotateX(e){return fn.makeRotationX(e),this.applyMatrix4(fn),this}rotateY(e){return fn.makeRotationY(e),this.applyMatrix4(fn),this}rotateZ(e){return fn.makeRotationZ(e),this.applyMatrix4(fn),this}translate(e,t,i){return fn.makeTranslation(e,t,i),this.applyMatrix4(fn),this}scale(e,t,i){return fn.makeScale(e,t,i),this.applyMatrix4(fn),this}lookAt(e){return sa.lookAt(e),sa.updateMatrix(),this.applyMatrix4(sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ji).negate(),this.translate(ji.x,ji.y,ji.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new vt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Xe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];on.setFromBufferAttribute(r),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const i=this.boundingSphere.center;if(on.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Us.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(on.min,Us.min),on.expandByPoint(kt),kt.addVectors(on.max,Us.max),on.expandByPoint(kt)):(on.expandByPoint(Us.min),on.expandByPoint(Us.max))}on.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)kt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(kt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)kt.fromBufferAttribute(a,c),l&&(ji.fromBufferAttribute(e,c),kt.add(ji)),s=Math.max(s,i.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new hn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let x=0;x<i.count;x++)a[x]=new L,l[x]=new L;const c=new L,h=new L,d=new L,u=new ce,f=new ce,g=new ce,M=new L,m=new L;function p(x,T,C){c.fromBufferAttribute(i,x),h.fromBufferAttribute(i,T),d.fromBufferAttribute(i,C),u.fromBufferAttribute(r,x),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,C),h.sub(c),d.sub(c),f.sub(u),g.sub(u);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(M.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(P),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),a[x].add(M),a[T].add(M),a[C].add(M),l[x].add(m),l[T].add(m),l[C].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let x=0,T=y.length;x<T;++x){const C=y[x],P=C.start,I=C.count;for(let V=P,B=P+I;V<B;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const S=new L,_=new L,E=new L,b=new L;function A(x){E.fromBufferAttribute(s,x),b.copy(E);const T=a[x];S.copy(T),S.sub(E.multiplyScalar(E.dot(T))).normalize(),_.crossVectors(b,T);const P=_.dot(l[x])<0?-1:1;o.setXYZW(x,S.x,S.y,S.z,P)}for(let x=0,T=y.length;x<T;++x){const C=y[x],P=C.start,I=C.count;for(let V=P,B=P+I;V<B;V+=3)A(e.getX(V+0)),A(e.getX(V+1)),A(e.getX(V+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new hn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);const s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,d=new L;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),M=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,M),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let M=0,m=l.length;M<m;M++){a.isInterleavedBufferAttribute?f=l[M]*a.data.stride+a.offset:f=l[M]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new hn(u,h,d)}if(this.index===null)return Xe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Gt,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=e(u,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class em{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=_l,this.updateRanges=[],this.version=0,this.uuid=kn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Jt=new L;class Mo{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=wn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ft(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=wn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=wn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=wn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=wn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array),s=ft(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),i=ft(i,this.array),s=ft(s,this.array),r=ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){_o("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new hn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Mo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){_o("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let tm=0;class Rs extends Oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tm++}),this.uuid=kn(),this.name="",this.type="Material",this.blending=ds,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=La,this.blendDst=Da,this.blendEquation=Ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=Ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vi,this.stencilZFail=Vi,this.stencilZPass=Vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Xe(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Xe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(i.blending=this.blending),this.side!==xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==La&&(i.blendSrc=this.blendSrc),this.blendDst!==Da&&(i.blendDst=this.blendDst),this.blendEquation!==Ai&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ms&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Vi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Vi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ot().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ce().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ce().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Uh extends Rs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let es;const Fs=new L,ts=new L,ns=new L,is=new ce,Os=new ce,Fh=new _t,Nr=new L,zs=new L,Ur=new L,qc=new ce,ra=new ce,Yc=new ce;class nm extends Nt{constructor(e=new Uh){if(super(),this.isSprite=!0,this.type="Sprite",es===void 0){es=new Gt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new em(t,5);es.setIndex([0,1,2,0,2,3]),es.setAttribute("position",new Mo(i,3,0,!1)),es.setAttribute("uv",new Mo(i,2,3,!1))}this.geometry=es,this.material=e,this.center=new ce(.5,.5),this.count=1}raycast(e,t){e.camera===null&&rt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ts.setFromMatrixScale(this.matrixWorld),Fh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ns.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ts.multiplyScalar(-ns.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;Fr(Nr.set(-.5,-.5,0),ns,o,ts,s,r),Fr(zs.set(.5,-.5,0),ns,o,ts,s,r),Fr(Ur.set(.5,.5,0),ns,o,ts,s,r),qc.set(0,0),ra.set(1,0),Yc.set(1,1);let a=e.ray.intersectTriangle(Nr,zs,Ur,!1,Fs);if(a===null&&(Fr(zs.set(-.5,.5,0),ns,o,ts,s,r),ra.set(0,1),a=e.ray.intersectTriangle(Nr,Ur,zs,!1,Fs),a===null))return;const l=e.ray.origin.distanceTo(Fs);l<e.near||l>e.far||t.push({distance:l,point:Fs.clone(),uv:gn.getInterpolation(Fs,Nr,zs,Ur,qc,ra,Yc,new ce),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Fr(n,e,t,i,s,r){is.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Os.x=r*is.x-s*is.y,Os.y=s*is.x+r*is.y):Os.copy(is),n.copy(e),n.x+=Os.x,n.y+=Os.y,n.applyMatrix4(Fh)}const Zn=new L,oa=new L,Or=new L,di=new L,aa=new L,zr=new L,la=new L;class Oh{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zn.copy(this.origin).addScaledVector(this.direction,t),Zn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){oa.copy(e).add(t).multiplyScalar(.5),Or.copy(t).sub(e).normalize(),di.copy(this.origin).sub(oa);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Or),a=di.dot(this.direction),l=-di.dot(Or),c=di.lengthSq(),h=Math.abs(1-o*o);let d,u,f,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){const M=1/h;d*=M,u*=M,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(oa).addScaledVector(Or,u),f}intersectSphere(e,t){Zn.subVectors(e.center,this.origin);const i=Zn.dot(this.direction),s=Zn.dot(Zn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Zn)!==null}intersectTriangle(e,t,i,s,r){aa.subVectors(t,e),zr.subVectors(i,e),la.crossVectors(aa,zr);let o=this.direction.dot(la),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;di.subVectors(this.origin,e);const l=a*this.direction.dot(zr.crossVectors(di,zr));if(l<0)return null;const c=a*this.direction.dot(aa.cross(di));if(c<0||l+c>o)return null;const h=-a*di.dot(la);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nn extends Rs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=gh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zc=new _t,yi=new Oh,Br=new mr,$c=new L,kr=new L,Hr=new L,Gr=new L,ca=new L,Vr=new L,Kc=new L,Wr=new L;class J extends Nt{constructor(e=new Gt,t=new Nn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Vr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(ca.fromBufferAttribute(d,e),o?Vr.addScaledVector(ca,h):Vr.addScaledVector(ca.sub(t),h))}t.add(Vr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Br.copy(i.boundingSphere),Br.applyMatrix4(r),yi.copy(e.ray).recast(e.near),!(Br.containsPoint(yi.origin)===!1&&(yi.intersectSphere(Br,$c)===null||yi.origin.distanceToSquared($c)>(e.far-e.near)**2))&&(Zc.copy(r).invert(),yi.copy(e.ray).applyMatrix4(Zc),!(i.boundingBox!==null&&yi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,yi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,M=u.length;g<M;g++){const m=u[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=y,E=S;_<E;_+=3){const b=a.getX(_),A=a.getX(_+1),x=a.getX(_+2);s=Xr(this,p,e,i,c,h,d,b,A,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),M=Math.min(a.count,f.start+f.count);for(let m=g,p=M;m<p;m+=3){const y=a.getX(m),S=a.getX(m+1),_=a.getX(m+2);s=Xr(this,o,e,i,c,h,d,y,S,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,M=u.length;g<M;g++){const m=u[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=y,E=S;_<E;_+=3){const b=_,A=_+1,x=_+2;s=Xr(this,p,e,i,c,h,d,b,A,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),M=Math.min(l.count,f.start+f.count);for(let m=g,p=M;m<p;m+=3){const y=m,S=m+1,_=m+2;s=Xr(this,o,e,i,c,h,d,y,S,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function im(n,e,t,i,s,r,o,a){let l;if(e.side===jt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===xi,a),l===null)return null;Wr.copy(a),Wr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Wr);return c<t.near||c>t.far?null:{distance:c,point:Wr.clone(),object:n}}function Xr(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,kr),n.getVertexPosition(l,Hr),n.getVertexPosition(c,Gr);const h=im(n,e,t,i,kr,Hr,Gr,Kc);if(h){const d=new L;gn.getBarycoord(Kc,kr,Hr,Gr,d),s&&(h.uv=gn.getInterpolatedAttribute(s,a,l,c,d,new ce)),r&&(h.uv1=gn.getInterpolatedAttribute(r,a,l,c,d,new ce)),o&&(h.normal=gn.getInterpolatedAttribute(o,a,l,c,d,new L),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new L,materialIndex:0};gn.getNormal(kr,Hr,Gr,u.normal),h.face=u,h.barycoord=d}return h}class zh extends Wt{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Ht,h=Ht,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jc extends hn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ss=new _t,Qc=new _t,qr=[],jc=new zi,sm=new _t,Bs=new J,ks=new mr;class an extends J{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Jc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,sm)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new zi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ss),jc.copy(e.boundingBox).applyMatrix4(ss),this.boundingBox.union(jc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new mr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ss),ks.copy(e.boundingSphere).applyMatrix4(ss),this.boundingSphere.union(ks)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Bs.geometry=this.geometry,Bs.material=this.material,Bs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ks.copy(this.boundingSphere),ks.applyMatrix4(i),e.ray.intersectsSphere(ks)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ss),Qc.multiplyMatrices(i,ss),Bs.matrixWorld=Qc,Bs.raycast(e,qr);for(let o=0,a=qr.length;o<a;o++){const l=qr[o];l.instanceId=r,l.object=this,t.push(l)}qr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Jc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new zh(new Float32Array(s*this.count),s,this.count,Bl,Tn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ua=new L,rm=new L,om=new $e;class wi{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=ua.subVectors(i,t).cross(rm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(ua),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||om.getNormalMatrix(e),s=this.coplanarPoint(ua).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Si=new mr,am=new ce(.5,.5),Yr=new L;class Zl{constructor(e=new wi,t=new wi,i=new wi,s=new wi,r=new wi,o=new wi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=zn,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],M=r[9],m=r[10],p=r[11],y=r[12],S=r[13],_=r[14],E=r[15];if(s[0].setComponents(c-o,f-h,p-g,E-y).normalize(),s[1].setComponents(c+o,f+h,p+g,E+y).normalize(),s[2].setComponents(c+a,f+d,p+M,E+S).normalize(),s[3].setComponents(c-a,f-d,p-M,E-S).normalize(),i)s[4].setComponents(l,u,m,_).normalize(),s[5].setComponents(c-l,f-u,p-m,E-_).normalize();else if(s[4].setComponents(c-l,f-u,p-m,E-_).normalize(),t===zn)s[5].setComponents(c+l,f+u,p+m,E+_).normalize();else if(t===ar)s[5].setComponents(l,u,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(e){Si.center.set(0,0,0);const t=am.distanceTo(e.center);return Si.radius=.7071067811865476+t,Si.applyMatrix4(e.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Yr.x=s.normal.x>0?e.max.x:e.min.x,Yr.y=s.normal.y>0?e.max.y:e.min.y,Yr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Yr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Bh extends Wt{constructor(e=[],t=Ii,i,s,r,o,a,l,c,h){super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class cr extends Wt{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ss extends Wt{constructor(e,t,i=Gn,s,r,o,a=Ht,l=Ht,c,h=si,d=1){if(h!==si&&h!==Li)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ql(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class lm extends Ss{constructor(e,t=Gn,i=Ii,s,r,o=Ht,a=Ht,l,c=si){const h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,i,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class kh extends Wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class je extends Gt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new vt(c,3)),this.setAttribute("normal",new vt(h,3)),this.setAttribute("uv",new vt(d,2));function g(M,m,p,y,S,_,E,b,A,x,T){const C=_/A,P=E/x,I=_/2,V=E/2,B=b/2,N=A+1,W=x+1;let F=0,Z=0;const j=new L;for(let ae=0;ae<W;ae++){const re=ae*P-V;for(let _e=0;_e<N;_e++){const qe=_e*C-I;j[M]=qe*y,j[m]=re*S,j[p]=B,c.push(j.x,j.y,j.z),j[M]=0,j[m]=0,j[p]=b>0?1:-1,h.push(j.x,j.y,j.z),d.push(_e/A),d.push(1-ae/x),F+=1}}for(let ae=0;ae<x;ae++)for(let re=0;re<A;re++){const _e=u+re+N*ae,qe=u+re+N*(ae+1),nt=u+(re+1)+N*(ae+1),Ke=u+(re+1)+N*ae;l.push(_e,qe,Ke),l.push(qe,nt,Ke),Z+=6}a.addGroup(f,Z,T),f+=Z,u+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new je(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class xt extends Gt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],u=[],f=[];let g=0;const M=[],m=i/2;let p=0;y(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new vt(d,3)),this.setAttribute("normal",new vt(u,3)),this.setAttribute("uv",new vt(f,2));function y(){const _=new L,E=new L;let b=0;const A=(t-e)/i;for(let x=0;x<=r;x++){const T=[],C=x/r,P=C*(t-e)+e;for(let I=0;I<=s;I++){const V=I/s,B=V*l+a,N=Math.sin(B),W=Math.cos(B);E.x=P*N,E.y=-C*i+m,E.z=P*W,d.push(E.x,E.y,E.z),_.set(N,A,W).normalize(),u.push(_.x,_.y,_.z),f.push(V,1-C),T.push(g++)}M.push(T)}for(let x=0;x<s;x++)for(let T=0;T<r;T++){const C=M[T][x],P=M[T+1][x],I=M[T+1][x+1],V=M[T][x+1];(e>0||T!==0)&&(h.push(C,P,V),b+=3),(t>0||T!==r-1)&&(h.push(P,I,V),b+=3)}c.addGroup(p,b,0),p+=b}function S(_){const E=g,b=new ce,A=new L;let x=0;const T=_===!0?e:t,C=_===!0?1:-1;for(let I=1;I<=s;I++)d.push(0,m*C,0),u.push(0,C,0),f.push(.5,.5),g++;const P=g;for(let I=0;I<=s;I++){const B=I/s*l+a,N=Math.cos(B),W=Math.sin(B);A.x=T*W,A.y=m*C,A.z=T*N,d.push(A.x,A.y,A.z),u.push(0,C,0),b.x=N*.5+.5,b.y=W*.5*C+.5,f.push(b.x,b.y),g++}for(let I=0;I<s;I++){const V=E+I,B=P+I;_===!0?h.push(B,B+1,V):h.push(B+1,B,V),x+=3}c.addGroup(p,x,_===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Zt extends xt{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Zt(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $l extends Gt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new vt(r,3)),this.setAttribute("normal",new vt(r.slice(),3)),this.setAttribute("uv",new vt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const S=new L,_=new L,E=new L;for(let b=0;b<t.length;b+=3)f(t[b+0],S),f(t[b+1],_),f(t[b+2],E),l(S,_,E,y)}function l(y,S,_,E){const b=E+1,A=[];for(let x=0;x<=b;x++){A[x]=[];const T=y.clone().lerp(_,x/b),C=S.clone().lerp(_,x/b),P=b-x;for(let I=0;I<=P;I++)I===0&&x===b?A[x][I]=T:A[x][I]=T.clone().lerp(C,I/P)}for(let x=0;x<b;x++)for(let T=0;T<2*(b-x)-1;T++){const C=Math.floor(T/2);T%2===0?(u(A[x][C+1]),u(A[x+1][C]),u(A[x][C])):(u(A[x][C+1]),u(A[x+1][C+1]),u(A[x+1][C]))}}function c(y){const S=new L;for(let _=0;_<r.length;_+=3)S.x=r[_+0],S.y=r[_+1],S.z=r[_+2],S.normalize().multiplyScalar(y),r[_+0]=S.x,r[_+1]=S.y,r[_+2]=S.z}function h(){const y=new L;for(let S=0;S<r.length;S+=3){y.x=r[S+0],y.y=r[S+1],y.z=r[S+2];const _=m(y)/2/Math.PI+.5,E=p(y)/Math.PI+.5;o.push(_,1-E)}g(),d()}function d(){for(let y=0;y<o.length;y+=6){const S=o[y+0],_=o[y+2],E=o[y+4],b=Math.max(S,_,E),A=Math.min(S,_,E);b>.9&&A<.1&&(S<.2&&(o[y+0]+=1),_<.2&&(o[y+2]+=1),E<.2&&(o[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function f(y,S){const _=y*3;S.x=e[_+0],S.y=e[_+1],S.z=e[_+2]}function g(){const y=new L,S=new L,_=new L,E=new L,b=new ce,A=new ce,x=new ce;for(let T=0,C=0;T<r.length;T+=9,C+=6){y.set(r[T+0],r[T+1],r[T+2]),S.set(r[T+3],r[T+4],r[T+5]),_.set(r[T+6],r[T+7],r[T+8]),b.set(o[C+0],o[C+1]),A.set(o[C+2],o[C+3]),x.set(o[C+4],o[C+5]),E.copy(y).add(S).add(_).divideScalar(3);const P=m(E);M(b,C+0,y,P),M(A,C+2,S,P),M(x,C+4,_,P)}}function M(y,S,_,E){E<0&&y.x===1&&(o[S]=y.x-1),_.x===0&&_.z===0&&(o[S]=E/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $l(e.vertices,e.indices,e.radius,e.detail)}}class Vn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Xe("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const h=i[s],u=i[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ce:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new L,s=[],r=[],o=[],a=new L,l=new _t;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(it(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(it(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Kl extends Vn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ce){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class cm extends Kl{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Jl(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const eu=new L,tu=new L,ha=new Jl,da=new Jl,fa=new Jl;class yo extends Vn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new L){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(tu.subVectors(s[0],s[1]).add(s[0]),c=tu);const d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(eu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=eu),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),f),M=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);M<1e-4&&(M=1),g<1e-4&&(g=M),m<1e-4&&(m=M),ha.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,M,m),da.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,M,m),fa.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,M,m)}else this.curveType==="catmullrom"&&(ha.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),da.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),fa.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(ha.calc(l),da.calc(l),fa.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function nu(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function um(n,e){const t=1-n;return t*t*e}function hm(n,e){return 2*(1-n)*n*e}function dm(n,e){return n*n*e}function js(n,e,t,i){return um(n,e)+hm(n,t)+dm(n,i)}function fm(n,e){const t=1-n;return t*t*t*e}function pm(n,e){const t=1-n;return 3*t*t*n*e}function mm(n,e){return 3*(1-n)*n*n*e}function gm(n,e){return n*n*n*e}function er(n,e,t,i,s){return fm(n,e)+pm(n,t)+mm(n,i)+gm(n,s)}class Hh extends Vn{constructor(e=new ce,t=new ce,i=new ce,s=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ce){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(er(e,s.x,r.x,o.x,a.x),er(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class xm extends Vn{constructor(e=new L,t=new L,i=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new L){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(er(e,s.x,r.x,o.x,a.x),er(e,s.y,r.y,o.y,a.y),er(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Gh extends Vn{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Vh extends Vn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wh extends Vn{constructor(e=new ce,t=new ce,i=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ce){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(js(e,s.x,r.x,o.x),js(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Xh extends Vn{constructor(e=new L,t=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new L){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(js(e,s.x,r.x,o.x),js(e,s.y,r.y,o.y),js(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qh extends Vn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(nu(a,l.x,c.x,h.x,d.x),nu(a,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new ce().fromArray(s))}return this}}var So=Object.freeze({__proto__:null,ArcCurve:cm,CatmullRomCurve3:yo,CubicBezierCurve:Hh,CubicBezierCurve3:xm,EllipseCurve:Kl,LineCurve:Gh,LineCurve3:Vh,QuadraticBezierCurve:Wh,QuadraticBezierCurve3:Xh,SplineCurve:qh});class _m extends Vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new So[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new So[s.type]().fromJSON(s))}return this}}class vl extends _m{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Gh(this.currentPoint.clone(),new ce(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new Wh(this.currentPoint.clone(),new ce(e,t),new ce(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new Hh(this.currentPoint.clone(),new ce(e,t),new ce(i,s),new ce(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new qh(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){const c=new Kl(e,t,i,s,r,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ml extends vl{constructor(e){super(e),this.uuid=kn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new vl().fromJSON(s))}return this}}function vm(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=Yh(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=Em(n,e,r,t)),n.length>80*t){a=n[0],l=n[1];let h=a,d=l;for(let u=t;u<s;u+=t){const f=n[u],g=n[u+1];f<a&&(a=f),g<l&&(l=g),f>h&&(h=f),g>d&&(d=g)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return ur(r,o,t,a,l,c,0),o}function Yh(n,e,t,i,s){let r;if(s===Um(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=iu(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=iu(o/i|0,n[o],n[o+1],r);return r&&bs(r,r.next)&&(dr(r),r=r.next),r}function Fi(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(bs(t,t.next)||Ct(t.prev,t,t.next)===0)){if(dr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ur(n,e,t,i,s,r,o){if(!n)return;!o&&r&&Cm(n,i,s,r);let a=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(r?ym(n,i,s,r):Mm(n)){e.push(l.i,n.i,c.i),dr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Sm(Fi(n),e),ur(n,e,t,i,s,r,2)):o===2&&bm(n,e,t,i,s,r):ur(Fi(n),e,t,i,s,r,1);break}}}function Mm(n){const e=n.prev,t=n,i=n.next;if(Ct(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=Math.min(s,r,o),d=Math.min(a,l,c),u=Math.max(s,r,o),f=Math.max(a,l,c);let g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&Zs(s,a,r,l,o,c,g.x,g.y)&&Ct(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function ym(n,e,t,i){const s=n.prev,r=n,o=n.next;if(Ct(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,f=Math.min(a,l,c),g=Math.min(h,d,u),M=Math.max(a,l,c),m=Math.max(h,d,u),p=yl(f,g,e,t,i),y=yl(M,m,e,t,i);let S=n.prevZ,_=n.nextZ;for(;S&&S.z>=p&&_&&_.z<=y;){if(S.x>=f&&S.x<=M&&S.y>=g&&S.y<=m&&S!==s&&S!==o&&Zs(a,h,l,d,c,u,S.x,S.y)&&Ct(S.prev,S,S.next)>=0||(S=S.prevZ,_.x>=f&&_.x<=M&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Zs(a,h,l,d,c,u,_.x,_.y)&&Ct(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;S&&S.z>=p;){if(S.x>=f&&S.x<=M&&S.y>=g&&S.y<=m&&S!==s&&S!==o&&Zs(a,h,l,d,c,u,S.x,S.y)&&Ct(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;_&&_.z<=y;){if(_.x>=f&&_.x<=M&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Zs(a,h,l,d,c,u,_.x,_.y)&&Ct(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Sm(n,e){let t=n;do{const i=t.prev,s=t.next.next;!bs(i,s)&&$h(i,t,t.next,s)&&hr(i,s)&&hr(s,i)&&(e.push(i.i,t.i,s.i),dr(t),dr(t.next),t=n=s),t=t.next}while(t!==n);return Fi(t)}function bm(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Dm(o,a)){let l=Kh(o,a);o=Fi(o,o.next),l=Fi(l,l.next),ur(o,e,t,i,s,r,0),ur(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Em(n,e,t,i){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=Yh(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Lm(c))}s.sort(wm);for(let r=0;r<s.length;r++)t=Tm(s[r],t);return t}function wm(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Tm(n,e){const t=Am(n,e);if(!t)return e;const i=Kh(t,n);return Fi(i,i.next),Fi(t,t.next)}function Am(n,e){let t=e;const i=n.x,s=n.y;let r=-1/0,o;if(bs(n,t))return t;do{if(bs(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Zh(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){const d=Math.abs(s-t.y)/(i-t.x);hr(t,n)&&(d<h||d===h&&(t.x>o.x||t.x===o.x&&Rm(o,t)))&&(o=t,h=d)}t=t.next}while(t!==a);return o}function Rm(n,e){return Ct(n.prev,n,e.prev)<0&&Ct(e.next,n,n.next)<0}function Cm(n,e,t,i){let s=n;do s.z===0&&(s.z=yl(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Pm(s)}function Pm(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function yl(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Lm(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Zh(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function Zs(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&Zh(n,e,t,i,s,r,o,a)}function Dm(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Im(n,e)&&(hr(n,e)&&hr(e,n)&&Nm(n,e)&&(Ct(n.prev,n,e.prev)||Ct(n,e.prev,e))||bs(n,e)&&Ct(n.prev,n,n.next)>0&&Ct(e.prev,e,e.next)>0)}function Ct(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function bs(n,e){return n.x===e.x&&n.y===e.y}function $h(n,e,t,i){const s=$r(Ct(n,e,t)),r=$r(Ct(n,e,i)),o=$r(Ct(t,i,n)),a=$r(Ct(t,i,e));return!!(s!==r&&o!==a||s===0&&Zr(n,t,e)||r===0&&Zr(n,i,e)||o===0&&Zr(t,n,i)||a===0&&Zr(t,e,i))}function Zr(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function $r(n){return n>0?1:n<0?-1:0}function Im(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&$h(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function hr(n,e){return Ct(n.prev,n,n.next)<0?Ct(n,e,n.next)>=0&&Ct(n,n.prev,e)>=0:Ct(n,e,n.prev)<0||Ct(n,n.next,e)<0}function Nm(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Kh(n,e){const t=Sl(n.i,n.x,n.y),i=Sl(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function iu(n,e,t,i){const s=Sl(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function dr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Sl(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Um(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class Fm{static triangulate(e,t,i=2){return vm(e,t,i)}}class hs{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return hs.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];su(e),ru(i,e);let o=e.length;t.forEach(su);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,ru(i,t[l]);const a=Fm.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function su(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function ru(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class bo extends Gt{constructor(e=new Ml([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new vt(s,3)),this.setAttribute("uv",new vt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,M=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Om;let S,_=!1,E,b,A,x;if(p){S=p.getSpacedPoints(h),_=!0,u=!1;const ee=p.isCatmullRomCurve3?p.closed:!1;E=p.computeFrenetFrames(h,ee),b=new L,A=new L,x=new L}u||(m=0,f=0,g=0,M=0);const T=a.extractPoints(c);let C=T.shape;const P=T.holes;if(!hs.isClockWise(C)){C=C.reverse();for(let ee=0,ie=P.length;ee<ie;ee++){const ne=P[ee];hs.isClockWise(ne)&&(P[ee]=ne.reverse())}}function V(ee){const ne=10000000000000001e-36;let Se=ee[0];for(let ve=1;ve<=ee.length;ve++){const Ge=ve%ee.length,Ne=ee[Ge],Ye=Ne.x-Se.x,Ze=Ne.y-Se.y,D=Ye*Ye+Ze*Ze,mt=Math.max(Math.abs(Ne.x),Math.abs(Ne.y),Math.abs(Se.x),Math.abs(Se.y)),st=ne*mt*mt;if(D<=st){ee.splice(Ge,1),ve--;continue}Se=Ne}}V(C),P.forEach(V);const B=P.length,N=C;for(let ee=0;ee<B;ee++){const ie=P[ee];C=C.concat(ie)}function W(ee,ie,ne){return ie||rt("ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(ie,ne)}const F=C.length;function Z(ee,ie,ne){let Se,ve,Ge;const Ne=ee.x-ie.x,Ye=ee.y-ie.y,Ze=ne.x-ee.x,D=ne.y-ee.y,mt=Ne*Ne+Ye*Ye,st=Ne*D-Ye*Ze;if(Math.abs(st)>Number.EPSILON){const R=Math.sqrt(mt),v=Math.sqrt(Ze*Ze+D*D),z=ie.x-Ye/R,G=ie.y+Ne/R,q=ne.x-D/v,le=ne.y+Ze/v,he=((q-z)*D-(le-G)*Ze)/(Ne*D-Ye*Ze);Se=z+Ne*he-ee.x,ve=G+Ye*he-ee.y;const Y=Se*Se+ve*ve;if(Y<=2)return new ce(Se,ve);Ge=Math.sqrt(Y/2)}else{let R=!1;Ne>Number.EPSILON?Ze>Number.EPSILON&&(R=!0):Ne<-Number.EPSILON?Ze<-Number.EPSILON&&(R=!0):Math.sign(Ye)===Math.sign(D)&&(R=!0),R?(Se=-Ye,ve=Ne,Ge=Math.sqrt(mt)):(Se=Ne,ve=Ye,Ge=Math.sqrt(mt/2))}return new ce(Se/Ge,ve/Ge)}const j=[];for(let ee=0,ie=N.length,ne=ie-1,Se=ee+1;ee<ie;ee++,ne++,Se++)ne===ie&&(ne=0),Se===ie&&(Se=0),j[ee]=Z(N[ee],N[ne],N[Se]);const ae=[];let re,_e=j.concat();for(let ee=0,ie=B;ee<ie;ee++){const ne=P[ee];re=[];for(let Se=0,ve=ne.length,Ge=ve-1,Ne=Se+1;Se<ve;Se++,Ge++,Ne++)Ge===ve&&(Ge=0),Ne===ve&&(Ne=0),re[Se]=Z(ne[Se],ne[Ge],ne[Ne]);ae.push(re),_e=_e.concat(re)}let qe;if(m===0)qe=hs.triangulateShape(N,P);else{const ee=[],ie=[];for(let ne=0;ne<m;ne++){const Se=ne/m,ve=f*Math.cos(Se*Math.PI/2),Ge=g*Math.sin(Se*Math.PI/2)+M;for(let Ne=0,Ye=N.length;Ne<Ye;Ne++){const Ze=W(N[Ne],j[Ne],Ge);De(Ze.x,Ze.y,-ve),Se===0&&ee.push(Ze)}for(let Ne=0,Ye=B;Ne<Ye;Ne++){const Ze=P[Ne];re=ae[Ne];const D=[];for(let mt=0,st=Ze.length;mt<st;mt++){const R=W(Ze[mt],re[mt],Ge);De(R.x,R.y,-ve),Se===0&&D.push(R)}Se===0&&ie.push(D)}}qe=hs.triangulateShape(ee,ie)}const nt=qe.length,Ke=g+M;for(let ee=0;ee<F;ee++){const ie=u?W(C[ee],_e[ee],Ke):C[ee];_?(A.copy(E.normals[0]).multiplyScalar(ie.x),b.copy(E.binormals[0]).multiplyScalar(ie.y),x.copy(S[0]).add(A).add(b),De(x.x,x.y,x.z)):De(ie.x,ie.y,0)}for(let ee=1;ee<=h;ee++)for(let ie=0;ie<F;ie++){const ne=u?W(C[ie],_e[ie],Ke):C[ie];_?(A.copy(E.normals[ee]).multiplyScalar(ne.x),b.copy(E.binormals[ee]).multiplyScalar(ne.y),x.copy(S[ee]).add(A).add(b),De(x.x,x.y,x.z)):De(ne.x,ne.y,d/h*ee)}for(let ee=m-1;ee>=0;ee--){const ie=ee/m,ne=f*Math.cos(ie*Math.PI/2),Se=g*Math.sin(ie*Math.PI/2)+M;for(let ve=0,Ge=N.length;ve<Ge;ve++){const Ne=W(N[ve],j[ve],Se);De(Ne.x,Ne.y,d+ne)}for(let ve=0,Ge=P.length;ve<Ge;ve++){const Ne=P[ve];re=ae[ve];for(let Ye=0,Ze=Ne.length;Ye<Ze;Ye++){const D=W(Ne[Ye],re[Ye],Se);_?De(D.x,D.y+S[h-1].y,S[h-1].x+ne):De(D.x,D.y,d+ne)}}}$(),ue();function $(){const ee=s.length/3;if(u){let ie=0,ne=F*ie;for(let Se=0;Se<nt;Se++){const ve=qe[Se];We(ve[2]+ne,ve[1]+ne,ve[0]+ne)}ie=h+m*2,ne=F*ie;for(let Se=0;Se<nt;Se++){const ve=qe[Se];We(ve[0]+ne,ve[1]+ne,ve[2]+ne)}}else{for(let ie=0;ie<nt;ie++){const ne=qe[ie];We(ne[2],ne[1],ne[0])}for(let ie=0;ie<nt;ie++){const ne=qe[ie];We(ne[0]+F*h,ne[1]+F*h,ne[2]+F*h)}}i.addGroup(ee,s.length/3-ee,0)}function ue(){const ee=s.length/3;let ie=0;se(N,ie),ie+=N.length;for(let ne=0,Se=P.length;ne<Se;ne++){const ve=P[ne];se(ve,ie),ie+=ve.length}i.addGroup(ee,s.length/3-ee,1)}function se(ee,ie){let ne=ee.length;for(;--ne>=0;){const Se=ne;let ve=ne-1;ve<0&&(ve=ee.length-1);for(let Ge=0,Ne=h+m*2;Ge<Ne;Ge++){const Ye=F*Ge,Ze=F*(Ge+1),D=ie+Se+Ye,mt=ie+ve+Ye,st=ie+ve+Ze,R=ie+Se+Ze;Be(D,mt,st,R)}}}function De(ee,ie,ne){l.push(ee),l.push(ie),l.push(ne)}function We(ee,ie,ne){lt(ee),lt(ie),lt(ne);const Se=s.length/3,ve=y.generateTopUV(i,s,Se-3,Se-2,Se-1);He(ve[0]),He(ve[1]),He(ve[2])}function Be(ee,ie,ne,Se){lt(ee),lt(ie),lt(Se),lt(ie),lt(ne),lt(Se);const ve=s.length/3,Ge=y.generateSideWallUV(i,s,ve-6,ve-3,ve-2,ve-1);He(Ge[0]),He(Ge[1]),He(Ge[3]),He(Ge[1]),He(Ge[2]),He(Ge[3])}function lt(ee){s.push(l[ee*3+0]),s.push(l[ee*3+1]),s.push(l[ee*3+2])}function He(ee){r.push(ee.x),r.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return zm(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new So[s.type]().fromJSON(s)),new bo(i,e.options)}}const Om={generateTopUV:function(n,e,t,i,s){const r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new ce(r,o),new ce(a,l),new ce(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],d=e[i*3+2],u=e[s*3],f=e[s*3+1],g=e[s*3+2],M=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ce(o,1-l),new ce(c,1-d),new ce(u,1-g),new ce(M,1-p)]:[new ce(a,1-l),new ce(h,1-d),new ce(f,1-g),new ce(m,1-p)]}};function zm(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Eo extends $l{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Eo(e.radius,e.detail)}}class ln extends Gt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=e/a,u=t/l,f=[],g=[],M=[],m=[];for(let p=0;p<h;p++){const y=p*u-o;for(let S=0;S<c;S++){const _=S*d-r;g.push(_,-y,0),M.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const S=y+c*p,_=y+c*(p+1),E=y+1+c*(p+1),b=y+1+c*p;f.push(S,_,b),f.push(_,E,b)}this.setIndex(f),this.setAttribute("position",new vt(g,3)),this.setAttribute("normal",new vt(M,3)),this.setAttribute("uv",new vt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ln(e.width,e.height,e.widthSegments,e.heightSegments)}}class ht extends Gt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new L,u=new L,f=[],g=[],M=[],m=[];for(let p=0;p<=i;p++){const y=[],S=p/i,_=o+S*a,E=e*Math.cos(_),b=Math.sqrt(e*e-E*E);let A=0;p===0&&o===0?A=.5/t:p===i&&l===Math.PI&&(A=-.5/t);for(let x=0;x<=t;x++){const T=x/t,C=s+T*r;d.x=-b*Math.cos(C),d.y=E,d.z=b*Math.sin(C),g.push(d.x,d.y,d.z),u.copy(d).normalize(),M.push(u.x,u.y,u.z),m.push(T+A,1-S),y.push(c++)}h.push(y)}for(let p=0;p<i;p++)for(let y=0;y<t;y++){const S=h[p][y+1],_=h[p][y],E=h[p+1][y],b=h[p+1][y+1];(p!==0||o>0)&&f.push(S,_,b),(p!==i-1||l<Math.PI)&&f.push(_,E,b)}this.setIndex(f),this.setAttribute("position",new vt(g,3)),this.setAttribute("normal",new vt(M,3)),this.setAttribute("uv",new vt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ht(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class yn extends Gt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);const l=[],c=[],h=[],d=[],u=new L,f=new L,g=new L;for(let M=0;M<=i;M++){const m=o+M/i*a;for(let p=0;p<=s;p++){const y=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(y),f.y=(e+t*Math.cos(m))*Math.sin(y),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(p/s),d.push(M/i)}}for(let M=1;M<=i;M++)for(let m=1;m<=s;m++){const p=(s+1)*M+m-1,y=(s+1)*(M-1)+m-1,S=(s+1)*(M-1)+m,_=(s+1)*M+m;l.push(p,y,_),l.push(y,S,_)}this.setIndex(l),this.setAttribute("position",new vt(c,3)),this.setAttribute("normal",new vt(h,3)),this.setAttribute("uv",new vt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ms extends Gt{constructor(e=new Xh(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new L,l=new L,c=new ce;let h=new L;const d=[],u=[],f=[],g=[];M(),this.setIndex(g),this.setAttribute("position",new vt(d,3)),this.setAttribute("normal",new vt(u,3)),this.setAttribute("uv",new vt(f,2));function M(){for(let S=0;S<t;S++)m(S);m(r===!1?t:0),y(),p()}function m(S){h=e.getPointAt(S/t,h);const _=o.normals[S],E=o.binormals[S];for(let b=0;b<=s;b++){const A=b/s*Math.PI*2,x=Math.sin(A),T=-Math.cos(A);l.x=T*_.x+x*E.x,l.y=T*_.y+x*E.y,l.z=T*_.z+x*E.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,d.push(a.x,a.y,a.z)}}function p(){for(let S=1;S<=t;S++)for(let _=1;_<=s;_++){const E=(s+1)*(S-1)+(_-1),b=(s+1)*S+(_-1),A=(s+1)*S+_,x=(s+1)*(S-1)+_;g.push(E,b,x),g.push(b,A,x)}}function y(){for(let S=0;S<=t;S++)for(let _=0;_<=s;_++)c.x=S/t,c.y=_/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ms(new So[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Es(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(ou(s))s.isRenderTargetTexture?(Xe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(ou(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Qt(n){const e={};for(let t=0;t<n.length;t++){const i=Es(n[t]);for(const s in i)e[s]=i[s]}return e}function ou(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Bm(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Jh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const km={clone:Es,merge:Qt};var Hm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xn extends Rs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hm,this.fragmentShader=Gm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Es(e.uniforms),this.uniformsGroups=Bm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new ot().setHex(s.value);break;case"v2":this.uniforms[i].value=new ce().fromArray(s.value);break;case"v3":this.uniforms[i].value=new L().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Rt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new $e().fromArray(s.value);break;case"m4":this.uniforms[i].value=new _t().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Vm extends xn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ws extends Rs{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ot(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xl,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Wm extends Rs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xm extends Rs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ql extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class qm extends Ql{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ot(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const pa=new _t,au=new L,lu=new L;class Qh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.mapType=un,this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zl,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;au.setFromMatrixPosition(e.matrixWorld),t.position.copy(au),lu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(lu),t.updateMatrixWorld(),pa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pa,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===ar||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(pa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Kr=new L,Jr=new As,Ln=new L;class jh extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Kr,Jr,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Kr,Jr,Ln.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Kr,Jr,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Kr,Jr,Ln.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const fi=new L,cu=new ce,uu=new ce;class cn extends jh{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=lr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Js*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lr*2*Math.atan(Math.tan(Js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fi.x,fi.y).multiplyScalar(-e/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fi.x,fi.y).multiplyScalar(-e/fi.z)}getViewSize(e,t){return this.getViewBounds(e,cu,uu),t.subVectors(uu,cu)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Js*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Ym extends Qh{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0}}class Zm extends Ql{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Ym}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class jl extends jh{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class $m extends Qh{constructor(){super(new jl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Km extends Ql{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new $m}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const rs=-90,os=1;class Jm extends Nt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new cn(rs,os,e,t);s.layers=this.layers,this.add(s);const r=new cn(rs,os,e,t);r.layers=this.layers,this.add(r);const o=new cn(rs,os,e,t);o.layers=this.layers,this.add(o);const a=new cn(rs,os,e,t);a.layers=this.layers,this.add(a);const l=new cn(rs,os,e,t);l.layers=this.layers,this.add(l);const c=new cn(rs,os,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===zn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ar)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Qm extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const hu=new _t;class jm{constructor(e,t,i=0,s=1/0){this.ray=new Oh(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Yl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):rt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return hu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(hu),this}intersectObject(e,t=!0,i=[]){return bl(e,this,i,t),i.sort(du),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)bl(e[s],this,i,t);return i.sort(du),i}}function du(n,e){return n.distance-e.distance}function bl(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)bl(r[o],e,t,!0)}}const cc=class cc{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};cc.prototype.isMatrix2=!0;let fu=cc;function pu(n,e,t,i){const s=e0(i);switch(t){case Rh:return n*e;case Bl:return n*e/s.components*s.byteLength;case kl:return n*e/s.components*s.byteLength;case Ni:return n*e*2/s.components*s.byteLength;case Hl:return n*e*2/s.components*s.byteLength;case Ch:return n*e*3/s.components*s.byteLength;case An:return n*e*4/s.components*s.byteLength;case Gl:return n*e*4/s.components*s.byteLength;case io:case so:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ro:case oo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ga:case Wa:return Math.max(n,16)*Math.max(e,8)/4;case Ha:case Va:return Math.max(n,8)*Math.max(e,8)/2;case Xa:case qa:case Za:case $a:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ya:case fo:case Ka:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ja:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Qa:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ja:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case el:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case tl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case nl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case il:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case sl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case rl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ol:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case al:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ll:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case cl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ul:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case hl:case dl:case fl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case pl:case ml:return Math.ceil(n/4)*Math.ceil(e/4)*8;case po:case gl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function e0(n){switch(n){case un:case Eh:return{byteLength:1,components:1};case rr:case wh:case ii:return{byteLength:2,components:1};case Ol:case zl:return{byteLength:2,components:4};case Gn:case Fl:case Tn:return{byteLength:4,components:1};case Th:case Ah:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nl}}));typeof window<"u"&&(window.__THREE__?Xe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nl);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ed(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function t0(n){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const h=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],M=d[f];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++u,d[u]=M)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const M=d[f];n.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var n0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,i0=`#ifdef USE_ALPHAHASH
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
#endif`,s0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,r0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,o0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,a0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,l0=`#ifdef USE_AOMAP
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
#endif`,c0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,u0=`#ifdef USE_BATCHING
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
#endif`,h0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,d0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,f0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,p0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,m0=`#ifdef USE_IRIDESCENCE
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
#endif`,g0=`#ifdef USE_BUMPMAP
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
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,M0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,y0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,S0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,b0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,E0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,w0=`#define PI 3.141592653589793
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
} // validated`,T0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,A0=`vec3 transformedNormal = objectNormal;
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
#endif`,R0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,C0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,P0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,L0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,D0="gl_FragColor = linearToOutputTexel( gl_FragColor );",I0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,N0=`#ifdef USE_ENVMAP
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
#endif`,U0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,F0=`#ifdef USE_ENVMAP
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
#endif`,O0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,z0=`#ifdef USE_ENVMAP
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
#endif`,B0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,k0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,H0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,G0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,V0=`#ifdef USE_GRADIENTMAP
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
}`,W0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,X0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,q0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Y0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Z0=`#ifdef USE_ENVMAP
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
#endif`,$0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,K0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,J0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Q0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,j0=`PhysicalMaterial material;
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
#endif`,eg=`uniform sampler2D dfgLUT;
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
}`,tg=`
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
#endif`,ng=`#if defined( RE_IndirectDiffuse )
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
#endif`,ig=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,rg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,og=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ag=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ug=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dg=`#if defined( USE_POINTS_UV )
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
#endif`,fg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_g=`#ifdef USE_MORPHTARGETS
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
#endif`,vg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,wg=`#ifdef USE_NORMALMAP
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
#endif`,Tg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ag=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Dg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ig=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ng=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ug=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Og=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Hg=`float getShadowMask() {
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
}`,Gg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vg=`#ifdef USE_SKINNING
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
#endif`,Wg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xg=`#ifdef USE_SKINNING
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
#endif`,qg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$g=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kg=`#ifdef USE_TRANSMISSION
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
#endif`,Jg=`#ifdef USE_TRANSMISSION
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
#endif`,Qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ix=`uniform sampler2D t2D;
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
}`,sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ax=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lx=`#include <common>
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
}`,cx=`#if DEPTH_PACKING == 3200
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
}`,ux=`#define DISTANCE
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
}`,hx=`#define DISTANCE
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
}`,dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,px=`uniform float scale;
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
}`,mx=`uniform vec3 diffuse;
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
}`,gx=`#include <common>
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
}`,xx=`uniform vec3 diffuse;
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
}`,_x=`#define LAMBERT
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
}`,vx=`#define LAMBERT
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
}`,Mx=`#define MATCAP
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
}`,yx=`#define MATCAP
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
}`,Sx=`#define NORMAL
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
}`,bx=`#define NORMAL
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
}`,Ex=`#define PHONG
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
}`,wx=`#define PHONG
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
}`,Tx=`#define STANDARD
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
}`,Ax=`#define STANDARD
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
}`,Rx=`#define TOON
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
}`,Cx=`#define TOON
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
}`,Px=`uniform float size;
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
}`,Lx=`uniform vec3 diffuse;
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
}`,Dx=`#include <common>
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
}`,Ix=`uniform vec3 color;
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
}`,Nx=`uniform float rotation;
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
}`,Ux=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:n0,alphahash_pars_fragment:i0,alphamap_fragment:s0,alphamap_pars_fragment:r0,alphatest_fragment:o0,alphatest_pars_fragment:a0,aomap_fragment:l0,aomap_pars_fragment:c0,batching_pars_vertex:u0,batching_vertex:h0,begin_vertex:d0,beginnormal_vertex:f0,bsdfs:p0,iridescence_fragment:m0,bumpmap_pars_fragment:g0,clipping_planes_fragment:x0,clipping_planes_pars_fragment:_0,clipping_planes_pars_vertex:v0,clipping_planes_vertex:M0,color_fragment:y0,color_pars_fragment:S0,color_pars_vertex:b0,color_vertex:E0,common:w0,cube_uv_reflection_fragment:T0,defaultnormal_vertex:A0,displacementmap_pars_vertex:R0,displacementmap_vertex:C0,emissivemap_fragment:P0,emissivemap_pars_fragment:L0,colorspace_fragment:D0,colorspace_pars_fragment:I0,envmap_fragment:N0,envmap_common_pars_fragment:U0,envmap_pars_fragment:F0,envmap_pars_vertex:O0,envmap_physical_pars_fragment:Z0,envmap_vertex:z0,fog_vertex:B0,fog_pars_vertex:k0,fog_fragment:H0,fog_pars_fragment:G0,gradientmap_pars_fragment:V0,lightmap_pars_fragment:W0,lights_lambert_fragment:X0,lights_lambert_pars_fragment:q0,lights_pars_begin:Y0,lights_toon_fragment:$0,lights_toon_pars_fragment:K0,lights_phong_fragment:J0,lights_phong_pars_fragment:Q0,lights_physical_fragment:j0,lights_physical_pars_fragment:eg,lights_fragment_begin:tg,lights_fragment_maps:ng,lights_fragment_end:ig,lightprobes_pars_fragment:sg,logdepthbuf_fragment:rg,logdepthbuf_pars_fragment:og,logdepthbuf_pars_vertex:ag,logdepthbuf_vertex:lg,map_fragment:cg,map_pars_fragment:ug,map_particle_fragment:hg,map_particle_pars_fragment:dg,metalnessmap_fragment:fg,metalnessmap_pars_fragment:pg,morphinstance_vertex:mg,morphcolor_vertex:gg,morphnormal_vertex:xg,morphtarget_pars_vertex:_g,morphtarget_vertex:vg,normal_fragment_begin:Mg,normal_fragment_maps:yg,normal_pars_fragment:Sg,normal_pars_vertex:bg,normal_vertex:Eg,normalmap_pars_fragment:wg,clearcoat_normal_fragment_begin:Tg,clearcoat_normal_fragment_maps:Ag,clearcoat_pars_fragment:Rg,iridescence_pars_fragment:Cg,opaque_fragment:Pg,packing:Lg,premultiplied_alpha_fragment:Dg,project_vertex:Ig,dithering_fragment:Ng,dithering_pars_fragment:Ug,roughnessmap_fragment:Fg,roughnessmap_pars_fragment:Og,shadowmap_pars_fragment:zg,shadowmap_pars_vertex:Bg,shadowmap_vertex:kg,shadowmask_pars_fragment:Hg,skinbase_vertex:Gg,skinning_pars_vertex:Vg,skinning_vertex:Wg,skinnormal_vertex:Xg,specularmap_fragment:qg,specularmap_pars_fragment:Yg,tonemapping_fragment:Zg,tonemapping_pars_fragment:$g,transmission_fragment:Kg,transmission_pars_fragment:Jg,uv_pars_fragment:Qg,uv_pars_vertex:jg,uv_vertex:ex,worldpos_vertex:tx,background_vert:nx,background_frag:ix,backgroundCube_vert:sx,backgroundCube_frag:rx,cube_vert:ox,cube_frag:ax,depth_vert:lx,depth_frag:cx,distance_vert:ux,distance_frag:hx,equirect_vert:dx,equirect_frag:fx,linedashed_vert:px,linedashed_frag:mx,meshbasic_vert:gx,meshbasic_frag:xx,meshlambert_vert:_x,meshlambert_frag:vx,meshmatcap_vert:Mx,meshmatcap_frag:yx,meshnormal_vert:Sx,meshnormal_frag:bx,meshphong_vert:Ex,meshphong_frag:wx,meshphysical_vert:Tx,meshphysical_frag:Ax,meshtoon_vert:Rx,meshtoon_frag:Cx,points_vert:Px,points_frag:Lx,shadow_vert:Dx,shadow_frag:Ix,sprite_vert:Nx,sprite_frag:Ux},ye={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},Un={basic:{uniforms:Qt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:Qt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new ot(0)},envMapIntensity:{value:1}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:Qt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:Qt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:Qt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new ot(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:Qt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:Qt([ye.points,ye.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:Qt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:Qt([ye.common,ye.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:Qt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:Qt([ye.sprite,ye.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:Qt([ye.common,ye.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:Qt([ye.lights,ye.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};Un.physical={uniforms:Qt([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const Qr={r:0,b:0,g:0},Fx=new _t,td=new $e;td.set(-1,0,0,0,1,0,0,0,1);function Ox(n,e,t,i,s,r){const o=new ot(0);let a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(y){let S=y.isScene===!0?y.background:null;if(S&&S.isTexture){const _=y.backgroundBlurriness>0;S=e.get(S,_)}return S}function g(y){let S=!1;const _=f(y);_===null?m(o,a):_&&_.isColor&&(m(_,1),S=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function M(y,S){const _=f(S);_&&(_.isCubeTexture||_.mapping===Po)?(c===void 0&&(c=new J(new je(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:Es(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Fx.makeRotationFromEuler(S.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(td),c.material.toneMapped=at.getTransfer(_.colorSpace)!==dt,(h!==_||d!==_.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,u=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new J(new ln(2,2),new xn({name:"BackgroundMaterial",uniforms:Es(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=at.getTransfer(_.colorSpace)!==dt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=_,d=_.version,u=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,S){y.getRGB(Qr,Jh(n)),t.buffers.color.setClear(Qr.r,Qr.g,Qr.b,S,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,S=1){o.set(y),a=S,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:g,addToRenderList:M,dispose:p}}function zx(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null);let r=s,o=!1;function a(P,I,V,B,N){let W=!1;const F=d(P,B,V,I);r!==F&&(r=F,c(r.object)),W=f(P,B,V,N),W&&g(P,B,V,N),N!==null&&e.update(N,n.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,_(P,I,V,B),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return n.createVertexArray()}function c(P){return n.bindVertexArray(P)}function h(P){return n.deleteVertexArray(P)}function d(P,I,V,B){const N=B.wireframe===!0;let W=i[I.id];W===void 0&&(W={},i[I.id]=W);const F=P.isInstancedMesh===!0?P.id:0;let Z=W[F];Z===void 0&&(Z={},W[F]=Z);let j=Z[V.id];j===void 0&&(j={},Z[V.id]=j);let ae=j[N];return ae===void 0&&(ae=u(l()),j[N]=ae),ae}function u(P){const I=[],V=[],B=[];for(let N=0;N<t;N++)I[N]=0,V[N]=0,B[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:V,attributeDivisors:B,object:P,attributes:{},index:null}}function f(P,I,V,B){const N=r.attributes,W=I.attributes;let F=0;const Z=V.getAttributes();for(const j in Z)if(Z[j].location>=0){const re=N[j];let _e=W[j];if(_e===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(_e=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(_e=P.instanceColor)),re===void 0||re.attribute!==_e||_e&&re.data!==_e.data)return!0;F++}return r.attributesNum!==F||r.index!==B}function g(P,I,V,B){const N={},W=I.attributes;let F=0;const Z=V.getAttributes();for(const j in Z)if(Z[j].location>=0){let re=W[j];re===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(re=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(re=P.instanceColor));const _e={};_e.attribute=re,re&&re.data&&(_e.data=re.data),N[j]=_e,F++}r.attributes=N,r.attributesNum=F,r.index=B}function M(){const P=r.newAttributes;for(let I=0,V=P.length;I<V;I++)P[I]=0}function m(P){p(P,0)}function p(P,I){const V=r.newAttributes,B=r.enabledAttributes,N=r.attributeDivisors;V[P]=1,B[P]===0&&(n.enableVertexAttribArray(P),B[P]=1),N[P]!==I&&(n.vertexAttribDivisor(P,I),N[P]=I)}function y(){const P=r.newAttributes,I=r.enabledAttributes;for(let V=0,B=I.length;V<B;V++)I[V]!==P[V]&&(n.disableVertexAttribArray(V),I[V]=0)}function S(P,I,V,B,N,W,F){F===!0?n.vertexAttribIPointer(P,I,V,N,W):n.vertexAttribPointer(P,I,V,B,N,W)}function _(P,I,V,B){M();const N=B.attributes,W=V.getAttributes(),F=I.defaultAttributeValues;for(const Z in W){const j=W[Z];if(j.location>=0){let ae=N[Z];if(ae===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(ae=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(ae=P.instanceColor)),ae!==void 0){const re=ae.normalized,_e=ae.itemSize,qe=e.get(ae);if(qe===void 0)continue;const nt=qe.buffer,Ke=qe.type,$=qe.bytesPerElement,ue=Ke===n.INT||Ke===n.UNSIGNED_INT||ae.gpuType===Fl;if(ae.isInterleavedBufferAttribute){const se=ae.data,De=se.stride,We=ae.offset;if(se.isInstancedInterleavedBuffer){for(let Be=0;Be<j.locationSize;Be++)p(j.location+Be,se.meshPerAttribute);P.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Be=0;Be<j.locationSize;Be++)m(j.location+Be);n.bindBuffer(n.ARRAY_BUFFER,nt);for(let Be=0;Be<j.locationSize;Be++)S(j.location+Be,_e/j.locationSize,Ke,re,De*$,(We+_e/j.locationSize*Be)*$,ue)}else{if(ae.isInstancedBufferAttribute){for(let se=0;se<j.locationSize;se++)p(j.location+se,ae.meshPerAttribute);P.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let se=0;se<j.locationSize;se++)m(j.location+se);n.bindBuffer(n.ARRAY_BUFFER,nt);for(let se=0;se<j.locationSize;se++)S(j.location+se,_e/j.locationSize,Ke,re,_e*$,_e/j.locationSize*se*$,ue)}}else if(F!==void 0){const re=F[Z];if(re!==void 0)switch(re.length){case 2:n.vertexAttrib2fv(j.location,re);break;case 3:n.vertexAttrib3fv(j.location,re);break;case 4:n.vertexAttrib4fv(j.location,re);break;default:n.vertexAttrib1fv(j.location,re)}}}}y()}function E(){T();for(const P in i){const I=i[P];for(const V in I){const B=I[V];for(const N in B){const W=B[N];for(const F in W)h(W[F].object),delete W[F];delete B[N]}}delete i[P]}}function b(P){if(i[P.id]===void 0)return;const I=i[P.id];for(const V in I){const B=I[V];for(const N in B){const W=B[N];for(const F in W)h(W[F].object),delete W[F];delete B[N]}}delete i[P.id]}function A(P){for(const I in i){const V=i[I];for(const B in V){const N=V[B];if(N[P.id]===void 0)continue;const W=N[P.id];for(const F in W)h(W[F].object),delete W[F];delete N[P.id]}}}function x(P){for(const I in i){const V=i[I],B=P.isInstancedMesh===!0?P.id:0,N=V[B];if(N!==void 0){for(const W in N){const F=N[W];for(const Z in F)h(F[Z].object),delete F[Z];delete N[W]}delete V[B],Object.keys(V).length===0&&delete i[I]}}}function T(){C(),o=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:C,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:M,enableAttribute:m,disableUnusedAttributes:y}}function Bx(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function kx(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==An&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const x=A===ii&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==un&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Tn&&!x)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Xe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Xe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:_,maxSamples:E,samples:b}}function Hx(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new wi,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,M=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const y=r?0:i,S=y*4;let _=p.clippingState||null;l.value=_,_=h(g,u,S,f);for(let E=0;E!==S;++E)_[E]=t[E];p.clippingState=_,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,f,g){const M=d!==null?d.length:0;let m=null;if(M!==0){if(m=l.value,g!==!0||m===null){const p=f+M*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,_=f;S!==M;++S,_+=4)o.copy(d[S]).applyMatrix4(y,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}const gi=4,mu=[.125,.215,.35,.446,.526,.582],Ri=20,Gx=256,Hs=new jl,gu=new ot;let ma=null,ga=0,xa=0,_a=!1;const Vx=new L;class xu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=Vx}=r;ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel(),_a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ma,ga,xa),this._renderer.xr.enabled=_a,e.scissorTest=!1,as(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ii||e.mapping===ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel(),_a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:ii,format:An,colorSpace:mo,depthBuffer:!1},s=_u(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_u(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Wx(r)),this._blurMaterial=qx(r,e,t),this._ggxMaterial=Xx(r,e,t)}return s}_compileMaterial(e){const t=new J(new Gt,e);this._renderer.compile(t,Hs)}_sceneToCubeUV(e,t,i,s,r){const l=new cn(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(gu),d.toneMapping=Bn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new J(new je,new Nn({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,m=M.material;let p=!1;const y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,p=!0):(m.color.copy(gu),p=!0);for(let S=0;S<6;S++){const _=S%3;_===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[S],r.y,r.z)):_===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[S]));const E=this._cubeSize;as(s,_*E,S>2?E:0,E,E),d.setRenderTarget(s),p&&d.render(M,l),d.render(e,l)}d.toneMapping=f,d.autoClear=u,e.background=y}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Ii||e.mapping===ys;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;as(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Hs)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=0+c*1.25,f=d*u,{_lodMax:g}=this,M=this._sizeLods[i],m=3*M*(i>g-gi?i-g+gi:0),p=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,as(r,m,p,3*M,2*M),s.setRenderTarget(r),s.render(a,Hs),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,as(e,m,p,3*M,2*M),s.setRenderTarget(e),s.render(a,Hs)}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&rt("blur direction must be either latitudinal or longitudinal!");const h=3,d=this._lodMeshes[s];d.material=c;const u=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ri-1),M=r/g,m=isFinite(r)?1+Math.floor(h*M):Ri;m>Ri&&Xe(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ri}`);const p=[];let y=0;for(let A=0;A<Ri;++A){const x=A/M,T=Math.exp(-x*x/2);p.push(T),A===0?y+=T:A<m&&(y+=2*T)}for(let A=0;A<p.length;A++)p[A]=p[A]/y;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:S}=this;u.dTheta.value=g,u.mipInt.value=S-i;const _=this._sizeLods[s],E=3*_*(s>S-gi?s-S+gi:0),b=4*(this._cubeSize-_);as(t,E,b,3*_,2*_),l.setRenderTarget(t),l.render(d,Hs)}}function Wx(n){const e=[],t=[],i=[];let s=n;const r=n-gi+1+mu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-gi?l=mu[o-n+gi-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,M=3,m=2,p=1,y=new Float32Array(M*g*f),S=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let b=0;b<f;b++){const A=b%3*2/3-1,x=b>2?0:-1,T=[A,x,0,A+2/3,x,0,A+2/3,x+1,0,A,x,0,A+2/3,x+1,0,A,x+1,0];y.set(T,M*g*b),S.set(u,m*g*b);const C=[b,b,b,b,b,b];_.set(C,p*g*b)}const E=new Gt;E.setAttribute("position",new hn(y,M)),E.setAttribute("uv",new hn(S,m)),E.setAttribute("faceIndex",new hn(_,p)),i.push(new J(E,null)),s>gi&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function _u(n,e,t){const i=new Hn(n,e,t);return i.texture.mapping=Po,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function as(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Xx(n,e,t){return new xn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Gx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Lo(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function qx(n,e,t){const i=new Float32Array(Ri),s=new L(0,1,0);return new xn({name:"SphericalGaussianBlur",defines:{n:Ri,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Lo(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function vu(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lo(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Mu(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Lo(){return`

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
	`}class nd extends Hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Bh(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new je(5,5,5),r=new xn({name:"CubemapFromEquirect",uniforms:Es(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:jt,blending:ti});r.uniforms.tEquirect.value=t;const o=new J(s,r),a=t.minFilter;return t.minFilter===Pi&&(t.minFilter=Kt),new Jm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}function Yx(n){let e=new WeakMap,t=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===Bo||f===ko)if(e.has(u)){const g=e.get(u).texture;return a(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const M=new nd(g.height);return M.fromEquirectangularTexture(n,u),e.set(u,M),u.addEventListener("dispose",c),a(M.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){const f=u.mapping,g=f===Bo||f===ko,M=f===Ii||f===ys;if(g||M){let m=t.get(u);const p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new xu(n)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{const y=u.image;return g&&y&&y.height>0||M&&y&&l(y)?(i===null&&(i=new xu(n)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===Bo?u.mapping=Ii:f===ko&&(u.mapping=ys),u}function l(u){let f=0;const g=6;for(let M=0;M<g;M++)u[M]!==void 0&&f++;return f===g}function c(u){const f=u.target;f.removeEventListener("dispose",c);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function Zx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&fs("WebGLRenderer: "+i+" extension not supported."),s}}}function $x(n,e,t,i){const s={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete s[u.id];const f=r.get(u);f&&(e.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const f in u)e.update(u[f],n.ARRAY_BUFFER)}function c(d){const u=[],f=d.index,g=d.attributes.position;let M=0;if(g===void 0)return;if(f!==null){const y=f.array;M=f.version;for(let S=0,_=y.length;S<_;S+=3){const E=y[S+0],b=y[S+1],A=y[S+2];u.push(E,b,b,A,A,E)}}else{const y=g.array;M=g.version;for(let S=0,_=y.length/3-1;S<_;S+=3){const E=S+0,b=S+1,A=S+2;u.push(E,b,b,A,A,E)}}const m=new(g.count>=65535?Nh:Ih)(u,1);m.version=M;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Kx(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){n.drawElements(i,u,r,d*o),t.update(u,i,1)}function c(d,u,f){f!==0&&(n.drawElementsInstanced(i,u,r,d*o,f),t.update(u,i,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let M=0;for(let m=0;m<f;m++)M+=u[m];t.update(M,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Jx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:rt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Qx(n,e,t){const i=new WeakMap,s=new Rt;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(a);if(u===void 0||u.count!==d){let C=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",C)};var f=C;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,M=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),M===!0&&(_=2),m===!0&&(_=3);let E=a.attributes.position.count*_,b=1;E>e.maxTextureSize&&(b=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const A=new Float32Array(E*b*4*d),x=new Lh(A,E,b,d);x.type=Tn,x.needsUpdate=!0;const T=_*4;for(let P=0;P<d;P++){const I=p[P],V=y[P],B=S[P],N=E*b*4*P;for(let W=0;W<I.count;W++){const F=W*T;g===!0&&(s.fromBufferAttribute(I,W),A[N+F+0]=s.x,A[N+F+1]=s.y,A[N+F+2]=s.z,A[N+F+3]=0),M===!0&&(s.fromBufferAttribute(V,W),A[N+F+4]=s.x,A[N+F+5]=s.y,A[N+F+6]=s.z,A[N+F+7]=0),m===!0&&(s.fromBufferAttribute(B,W),A[N+F+8]=s.x,A[N+F+9]=s.y,A[N+F+10]=s.z,A[N+F+11]=B.itemSize===4?s.w:1)}}u={count:d,texture:x,size:new ce(E,b)},i.set(a,u),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const M=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",M),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function jx(n,e,t,i,s){let r=new WeakMap;function o(c){const h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}const e_={[xh]:"LINEAR_TONE_MAPPING",[_h]:"REINHARD_TONE_MAPPING",[vh]:"CINEON_TONE_MAPPING",[Ul]:"ACES_FILMIC_TONE_MAPPING",[yh]:"AGX_TONE_MAPPING",[Sh]:"NEUTRAL_TONE_MAPPING",[Mh]:"CUSTOM_TONE_MAPPING"};function t_(n,e,t,i,s,r){const o=new Hn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,depthTexture:s?new Ss(e,t):void 0}),a=new Hn(e,t,{type:ii,depthBuffer:!1,stencilBuffer:!1}),l=new Gt;l.setAttribute("position",new vt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new vt([0,2,0,0,2,0],2));const c=new Vm({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new J(l,c),d=new jl(-1,1,1,-1,0,1);let u=null,f=null,g=!1,M,m=null,p=[],y=!1;this.setSize=function(S,_){o.setSize(S,_),a.setSize(S,_);for(let E=0;E<p.length;E++){const b=p[E];b.setSize&&b.setSize(S,_)}},this.setEffects=function(S){p=S,y=p.length>0&&p[0].isRenderPass===!0;const _=o.width,E=o.height;for(let b=0;b<p.length;b++){const A=p[b];A.setSize&&A.setSize(_,E)}},this.begin=function(S,_){if(g||S.toneMapping===Bn&&p.length===0)return!1;if(m=_,_!==null){const E=_.width,b=_.height;(o.width!==E||o.height!==b)&&this.setSize(E,b)}return y===!1&&S.setRenderTarget(o),M=S.toneMapping,S.toneMapping=Bn,!0},this.hasRenderPass=function(){return y},this.end=function(S,_){S.toneMapping=M,g=!0;let E=o,b=a;for(let A=0;A<p.length;A++){const x=p[A];if(x.enabled!==!1&&(x.render(S,b,E,_),x.needsSwap!==!1)){const T=E;E=b,b=T}}if(u!==S.outputColorSpace||f!==S.toneMapping){u=S.outputColorSpace,f=S.toneMapping,c.defines={},at.getTransfer(u)===dt&&(c.defines.SRGB_TRANSFER="");const A=e_[f];A&&(c.defines[A]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=E.texture,S.setRenderTarget(m),S.render(h,d),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),l.dispose(),c.dispose()}}const id=new Wt,El=new Ss(1,1),sd=new Lh,rd=new Gp,od=new Bh,yu=[],Su=[],bu=new Float32Array(16),Eu=new Float32Array(9),wu=new Float32Array(4);function Cs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=yu[s];if(r===void 0&&(r=new Float32Array(s),yu[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function zt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Bt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Do(n,e){let t=Su[e];t===void 0&&(t=new Int32Array(e),Su[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function n_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function i_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2fv(this.addr,e),Bt(t,e)}}function s_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;n.uniform3fv(this.addr,e),Bt(t,e)}}function r_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4fv(this.addr,e),Bt(t,e)}}function o_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(zt(t,i))return;wu.set(i),n.uniformMatrix2fv(this.addr,!1,wu),Bt(t,i)}}function a_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(zt(t,i))return;Eu.set(i),n.uniformMatrix3fv(this.addr,!1,Eu),Bt(t,i)}}function l_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(zt(t,i))return;bu.set(i),n.uniformMatrix4fv(this.addr,!1,bu),Bt(t,i)}}function c_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function u_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2iv(this.addr,e),Bt(t,e)}}function h_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3iv(this.addr,e),Bt(t,e)}}function d_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4iv(this.addr,e),Bt(t,e)}}function f_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function p_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2uiv(this.addr,e),Bt(t,e)}}function m_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3uiv(this.addr,e),Bt(t,e)}}function g_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4uiv(this.addr,e),Bt(t,e)}}function x_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(El.compareFunction=t.isReversedDepthBuffer()?Wl:Vl,r=El):r=id,t.setTexture2D(e||r,s)}function __(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||rd,s)}function v_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||od,s)}function M_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||sd,s)}function y_(n){switch(n){case 5126:return n_;case 35664:return i_;case 35665:return s_;case 35666:return r_;case 35674:return o_;case 35675:return a_;case 35676:return l_;case 5124:case 35670:return c_;case 35667:case 35671:return u_;case 35668:case 35672:return h_;case 35669:case 35673:return d_;case 5125:return f_;case 36294:return p_;case 36295:return m_;case 36296:return g_;case 35678:case 36198:case 36298:case 36306:case 35682:return x_;case 35679:case 36299:case 36307:return __;case 35680:case 36300:case 36308:case 36293:return v_;case 36289:case 36303:case 36311:case 36292:return M_}}function S_(n,e){n.uniform1fv(this.addr,e)}function b_(n,e){const t=Cs(e,this.size,2);n.uniform2fv(this.addr,t)}function E_(n,e){const t=Cs(e,this.size,3);n.uniform3fv(this.addr,t)}function w_(n,e){const t=Cs(e,this.size,4);n.uniform4fv(this.addr,t)}function T_(n,e){const t=Cs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function A_(n,e){const t=Cs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function R_(n,e){const t=Cs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function C_(n,e){n.uniform1iv(this.addr,e)}function P_(n,e){n.uniform2iv(this.addr,e)}function L_(n,e){n.uniform3iv(this.addr,e)}function D_(n,e){n.uniform4iv(this.addr,e)}function I_(n,e){n.uniform1uiv(this.addr,e)}function N_(n,e){n.uniform2uiv(this.addr,e)}function U_(n,e){n.uniform3uiv(this.addr,e)}function F_(n,e){n.uniform4uiv(this.addr,e)}function O_(n,e,t){const i=this.cache,s=e.length,r=Do(t,s);zt(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=El:o=id;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function z_(n,e,t){const i=this.cache,s=e.length,r=Do(t,s);zt(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||rd,r[o])}function B_(n,e,t){const i=this.cache,s=e.length,r=Do(t,s);zt(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||od,r[o])}function k_(n,e,t){const i=this.cache,s=e.length,r=Do(t,s);zt(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||sd,r[o])}function H_(n){switch(n){case 5126:return S_;case 35664:return b_;case 35665:return E_;case 35666:return w_;case 35674:return T_;case 35675:return A_;case 35676:return R_;case 5124:case 35670:return C_;case 35667:case 35671:return P_;case 35668:case 35672:return L_;case 35669:case 35673:return D_;case 5125:return I_;case 36294:return N_;case 36295:return U_;case 36296:return F_;case 35678:case 36198:case 36298:case 36306:case 35682:return O_;case 35679:case 36299:case 36307:return z_;case 35680:case 36300:case 36308:case 36293:return B_;case 36289:case 36303:case 36311:case 36292:return k_}}class G_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=y_(t.type)}}class V_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=H_(t.type)}}class W_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const va=/(\w+)(\])?(\[|\.)?/g;function Tu(n,e){n.seq.push(e),n.map[e.id]=e}function X_(n,e,t){const i=n.name,s=i.length;for(va.lastIndex=0;;){const r=va.exec(i),o=va.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Tu(t,c===void 0?new G_(a,n,e):new V_(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new W_(a),Tu(t,d)),t=d}}}class ao{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);X_(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Au(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const q_=37297;let Y_=0;function Z_(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Ru=new $e;function $_(n){at._getMatrix(Ru,at.workingColorSpace,n);const e=`mat3( ${Ru.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(n)){case go:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return Xe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Cu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Z_(n.getShaderSource(e),a)}else return r}function K_(n,e){const t=$_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const J_={[xh]:"Linear",[_h]:"Reinhard",[vh]:"Cineon",[Ul]:"ACESFilmic",[yh]:"AgX",[Sh]:"Neutral",[Mh]:"Custom"};function Q_(n,e){const t=J_[e];return t===void 0?(Xe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const jr=new L;function j_(){at.getLuminanceCoefficients(jr);const n=jr.x.toFixed(4),e=jr.y.toFixed(4),t=jr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ev(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($s).join(`
`)}function tv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function nv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function $s(n){return n!==""}function Pu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const iv=/^[ \t]*#include +<([\w\d./]+)>/gm;function wl(n){return n.replace(iv,rv)}const sv=new Map;function rv(n,e){let t=et[e];if(t===void 0){const i=sv.get(e);if(i!==void 0)t=et[i],Xe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return wl(t)}const ov=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Du(n){return n.replace(ov,av)}function av(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Iu(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const lv={[no]:"SHADOWMAP_TYPE_PCF",[qs]:"SHADOWMAP_TYPE_VSM"};function cv(n){return lv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const uv={[Ii]:"ENVMAP_TYPE_CUBE",[ys]:"ENVMAP_TYPE_CUBE",[Po]:"ENVMAP_TYPE_CUBE_UV"};function hv(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":uv[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const dv={[ys]:"ENVMAP_MODE_REFRACTION"};function fv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":dv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const pv={[gh]:"ENVMAP_BLENDING_MULTIPLY",[op]:"ENVMAP_BLENDING_MIX",[ap]:"ENVMAP_BLENDING_ADD"};function mv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":pv[n.combine]||"ENVMAP_BLENDING_NONE"}function gv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function xv(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=cv(t),c=hv(t),h=fv(t),d=mv(t),u=gv(t),f=ev(t),g=tv(r),M=s.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter($s).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter($s).join(`
`),p.length>0&&(p+=`
`)):(m=[Iu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($s).join(`
`),p=[Iu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bn?"#define TONE_MAPPING":"",t.toneMapping!==Bn?et.tonemapping_pars_fragment:"",t.toneMapping!==Bn?Q_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,K_("linearToOutputTexel",t.outputColorSpace),j_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($s).join(`
`)),o=wl(o),o=Pu(o,t),o=Lu(o,t),a=wl(a),a=Pu(a,t),a=Lu(a,t),o=Du(o),a=Du(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Dc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Dc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=y+m+o,_=y+p+a,E=Au(s,s.VERTEX_SHADER,S),b=Au(s,s.FRAGMENT_SHADER,_);s.attachShader(M,E),s.attachShader(M,b),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function A(P){if(n.debug.checkShaderErrors){const I=s.getProgramInfoLog(M)||"",V=s.getShaderInfoLog(E)||"",B=s.getShaderInfoLog(b)||"",N=I.trim(),W=V.trim(),F=B.trim();let Z=!0,j=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,M,E,b);else{const ae=Cu(s,E,"vertex"),re=Cu(s,b,"fragment");rt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+ae+`
`+re)}else N!==""?Xe("WebGLProgram: Program Info Log:",N):(W===""||F==="")&&(j=!1);j&&(P.diagnostics={runnable:Z,programLog:N,vertexShader:{log:W,prefix:m},fragmentShader:{log:F,prefix:p}})}s.deleteShader(E),s.deleteShader(b),x=new ao(s,M),T=nv(s,M)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(M,q_)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Y_++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=E,this.fragmentShader=b,this}let _v=0;class vv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Mv(e),t.set(e,i)),i}}class Mv{constructor(e){this.id=_v++,this.code=e,this.usedTimes=0}}function yv(n){return n===Ni||n===fo||n===po}function Sv(n,e,t,i,s,r){const o=new Yl,a=new vv,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer;let u=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function M(x,T,C,P,I,V){const B=P.fog,N=I.geometry,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,F=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Z=e.get(x.envMap||W,F),j=Z&&Z.mapping===Po?Z.image.height:null,ae=f[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&Xe("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));const re=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,_e=re!==void 0?re.length:0;let qe=0;N.morphAttributes.position!==void 0&&(qe=1),N.morphAttributes.normal!==void 0&&(qe=2),N.morphAttributes.color!==void 0&&(qe=3);let nt,Ke,$,ue;if(ae){const Pe=Un[ae];nt=Pe.vertexShader,Ke=Pe.fragmentShader}else{nt=x.vertexShader,Ke=x.fragmentShader;const Pe=a.getVertexShaderStage(x),Pt=a.getFragmentShaderStage(x);a.update(x,Pe,Pt),$=Pe.id,ue=Pt.id}const se=n.getRenderTarget(),De=n.state.buffers.depth.getReversed(),We=I.isInstancedMesh===!0,Be=I.isBatchedMesh===!0,lt=!!x.map,He=!!x.matcap,ee=!!Z,ie=!!x.aoMap,ne=!!x.lightMap,Se=!!x.bumpMap&&x.wireframe===!1,ve=!!x.normalMap,Ge=!!x.displacementMap,Ne=!!x.emissiveMap,Ye=!!x.metalnessMap,Ze=!!x.roughnessMap,D=x.anisotropy>0,mt=x.clearcoat>0,st=x.dispersion>0,R=x.iridescence>0,v=x.sheen>0,z=x.transmission>0,G=D&&!!x.anisotropyMap,q=mt&&!!x.clearcoatMap,le=mt&&!!x.clearcoatNormalMap,he=mt&&!!x.clearcoatRoughnessMap,Y=R&&!!x.iridescenceMap,Q=R&&!!x.iridescenceThicknessMap,pe=v&&!!x.sheenColorMap,Ue=v&&!!x.sheenRoughnessMap,Me=!!x.specularMap,me=!!x.specularColorMap,ke=!!x.specularIntensityMap,Ve=z&&!!x.transmissionMap,Je=z&&!!x.thicknessMap,U=!!x.gradientMap,de=!!x.alphaMap,K=x.alphaTest>0,ge=!!x.alphaHash,we=!!x.extensions;let te=Bn;x.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(te=n.toneMapping);const Ie={shaderID:ae,shaderType:x.type,shaderName:x.name,vertexShader:nt,fragmentShader:Ke,defines:x.defines,customVertexShaderID:$,customFragmentShaderID:ue,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:Be,batchingColor:Be&&I._colorsTexture!==null,instancing:We,instancingColor:We&&I.instanceColor!==null,instancingMorph:We&&I.morphTexture!==null,outputColorSpace:se===null?n.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:at.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:lt,matcap:He,envMap:ee,envMapMode:ee&&Z.mapping,envMapCubeUVHeight:j,aoMap:ie,lightMap:ne,bumpMap:Se,normalMap:ve,displacementMap:Ge,emissiveMap:Ne,normalMapObjectSpace:ve&&x.normalMapType===up,normalMapTangentSpace:ve&&x.normalMapType===xl,packedNormalMap:ve&&x.normalMapType===xl&&yv(x.normalMap.format),metalnessMap:Ye,roughnessMap:Ze,anisotropy:D,anisotropyMap:G,clearcoat:mt,clearcoatMap:q,clearcoatNormalMap:le,clearcoatRoughnessMap:he,dispersion:st,iridescence:R,iridescenceMap:Y,iridescenceThicknessMap:Q,sheen:v,sheenColorMap:pe,sheenRoughnessMap:Ue,specularMap:Me,specularColorMap:me,specularIntensityMap:ke,transmission:z,transmissionMap:Ve,thicknessMap:Je,gradientMap:U,opaque:x.transparent===!1&&x.blending===ds&&x.alphaToCoverage===!1,alphaMap:de,alphaTest:K,alphaHash:ge,combine:x.combine,mapUv:lt&&g(x.map.channel),aoMapUv:ie&&g(x.aoMap.channel),lightMapUv:ne&&g(x.lightMap.channel),bumpMapUv:Se&&g(x.bumpMap.channel),normalMapUv:ve&&g(x.normalMap.channel),displacementMapUv:Ge&&g(x.displacementMap.channel),emissiveMapUv:Ne&&g(x.emissiveMap.channel),metalnessMapUv:Ye&&g(x.metalnessMap.channel),roughnessMapUv:Ze&&g(x.roughnessMap.channel),anisotropyMapUv:G&&g(x.anisotropyMap.channel),clearcoatMapUv:q&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:le&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&g(x.sheenRoughnessMap.channel),specularMapUv:Me&&g(x.specularMap.channel),specularColorMapUv:me&&g(x.specularColorMap.channel),specularIntensityMapUv:ke&&g(x.specularIntensityMap.channel),transmissionMapUv:Ve&&g(x.transmissionMap.channel),thicknessMapUv:Je&&g(x.thicknessMap.channel),alphaMapUv:de&&g(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(ve||D),vertexNormals:!!N.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!N.attributes.uv&&(lt||de),fog:!!B,useFog:x.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||N.attributes.normal===void 0&&ve===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:De,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:qe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:te,decodeVideoTexture:lt&&x.map.isVideoTexture===!0&&at.getTransfer(x.map.colorSpace)===dt,decodeVideoTextureEmissive:Ne&&x.emissiveMap.isVideoTexture===!0&&at.getTransfer(x.emissiveMap.colorSpace)===dt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===nn,flipSided:x.side===jt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:we&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&x.extensions.multiDraw===!0||Be)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ie.vertexUv1s=l.has(1),Ie.vertexUv2s=l.has(2),Ie.vertexUv3s=l.has(3),l.clear(),Ie}function m(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const C in x.defines)T.push(C),T.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(p(T,x),y(T,x),T.push(n.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function p(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function y(x,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function S(x){const T=f[x.type];let C;if(T){const P=Un[T];C=km.clone(P.uniforms)}else C=x.uniforms;return C}function _(x,T){let C=h.get(T);return C!==void 0?++C.usedTimes:(C=new xv(n,T,x,s),c.push(C),h.set(T,C)),C}function E(x){if(--x.usedTimes===0){const T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function b(x){a.remove(x)}function A(){a.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:S,acquireProgram:_,releaseProgram:E,releaseShaderCache:b,programs:c,dispose:A}}function bv(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Ev(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Nu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Uu(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,g,M,m,p){let y=n[e];return y===void 0?(y={id:u.id,object:u,geometry:f,material:g,materialVariant:o(u),groupOrder:M,renderOrder:u.renderOrder,z:m,group:p},n[e]=y):(y.id=u.id,y.object=u,y.geometry=f,y.material=g,y.materialVariant=o(u),y.groupOrder=M,y.renderOrder=u.renderOrder,y.z=m,y.group=p),e++,y}function l(u,f,g,M,m,p){const y=a(u,f,g,M,m,p);g.transmission>0?i.push(y):g.transparent===!0?s.push(y):t.push(y)}function c(u,f,g,M,m,p){const y=a(u,f,g,M,m,p);g.transmission>0?i.unshift(y):g.transparent===!0?s.unshift(y):t.unshift(y)}function h(u,f,g){t.length>1&&t.sort(u||Ev),i.length>1&&i.sort(f||Nu),s.length>1&&s.sort(f||Nu),g&&(t.reverse(),i.reverse(),s.reverse())}function d(){for(let u=e,f=n.length;u<f;u++){const g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function wv(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Uu,n.set(i,[o])):s>=r.length?(o=new Uu,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Tv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new ot};break;case"SpotLight":t={position:new L,direction:new L,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new L,halfWidth:new L,halfHeight:new L};break}return n[e.id]=t,t}}}function Av(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Rv=0;function Cv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Pv(n){const e=new Tv,t=Av(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);const s=new L,r=new _t,o=new _t;function a(c){let h=0,d=0,u=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let f=0,g=0,M=0,m=0,p=0,y=0,S=0,_=0,E=0,b=0,A=0;c.sort(Cv);for(let T=0,C=c.length;T<C;T++){const P=c[T],I=P.color,V=P.intensity,B=P.distance;let N=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Ni?N=P.shadow.map.texture:N=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=I.r*V,d+=I.g*V,u+=I.b*V;else if(P.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(P.sh.coefficients[W],V);A++}else if(P.isDirectionalLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const F=P.shadow,Z=t.get(P);Z.shadowIntensity=F.intensity,Z.shadowBias=F.bias,Z.shadowNormalBias=F.normalBias,Z.shadowRadius=F.radius,Z.shadowMapSize=F.mapSize,i.directionalShadow[f]=Z,i.directionalShadowMap[f]=N,i.directionalShadowMatrix[f]=P.shadow.matrix,y++}i.directional[f]=W,f++}else if(P.isSpotLight){const W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(I).multiplyScalar(V),W.distance=B,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,i.spot[M]=W;const F=P.shadow;if(P.map&&(i.spotLightMap[E]=P.map,E++,F.updateMatrices(P),P.castShadow&&b++),i.spotLightMatrix[M]=F.matrix,P.castShadow){const Z=t.get(P);Z.shadowIntensity=F.intensity,Z.shadowBias=F.bias,Z.shadowNormalBias=F.normalBias,Z.shadowRadius=F.radius,Z.shadowMapSize=F.mapSize,i.spotShadow[M]=Z,i.spotShadowMap[M]=N,_++}M++}else if(P.isRectAreaLight){const W=e.get(P);W.color.copy(I).multiplyScalar(V),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=W,m++}else if(P.isPointLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const F=P.shadow,Z=t.get(P);Z.shadowIntensity=F.intensity,Z.shadowBias=F.bias,Z.shadowNormalBias=F.normalBias,Z.shadowRadius=F.radius,Z.shadowMapSize=F.mapSize,Z.shadowCameraNear=F.camera.near,Z.shadowCameraFar=F.camera.far,i.pointShadow[g]=Z,i.pointShadowMap[g]=N,i.pointShadowMatrix[g]=P.shadow.matrix,S++}i.point[g]=W,g++}else if(P.isHemisphereLight){const W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(V),W.groundColor.copy(P.groundColor).multiplyScalar(V),i.hemi[p]=W,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const x=i.hash;(x.directionalLength!==f||x.pointLength!==g||x.spotLength!==M||x.rectAreaLength!==m||x.hemiLength!==p||x.numDirectionalShadows!==y||x.numPointShadows!==S||x.numSpotShadows!==_||x.numSpotMaps!==E||x.numLightProbes!==A)&&(i.directional.length=f,i.spot.length=M,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=_+E-b,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=A,x.directionalLength=f,x.pointLength=g,x.spotLength=M,x.rectAreaLength=m,x.hemiLength=p,x.numDirectionalShadows=y,x.numPointShadows=S,x.numSpotShadows=_,x.numSpotMaps=E,x.numLightProbes=A,i.version=Rv++)}function l(c,h){let d=0,u=0,f=0,g=0,M=0;const m=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const S=c[p];if(S.isDirectionalLight){const _=i.directional[d];_.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),d++}else if(S.isSpotLight){const _=i.spot[f];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const _=i.rectArea[g];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(S.width*.5,0,0),_.halfHeight.set(0,S.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const _=i.point[u];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),u++}else if(S.isHemisphereLight){const _=i.hemi[M];_.direction.setFromMatrixPosition(S.matrixWorld),_.direction.transformDirection(m),M++}}}return{setup:a,setupView:l,state:i}}function Fu(n){const e=new Pv(n),t=[],i=[],s=[];function r(u){d.camera=u,t.length=0,i.length=0,s.length=0}function o(u){t.push(u)}function a(u){i.push(u)}function l(u){s.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}const d={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Lv(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Fu(n),e.set(s,[a])):r>=o.length?(a=new Fu(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const Dv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Iv=`uniform sampler2D shadow_pass;
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
}`,Nv=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],Uv=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Ou=new _t,Gs=new L,Ma=new L;function Fv(n,e,t){let i=new Zl;const s=new ce,r=new ce,o=new Rt,a=new Wm,l=new Xm,c={},h=t.maxTextureSize,d={[xi]:jt,[jt]:xi,[nn]:nn},u=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:Dv,fragmentShader:Iv}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new Gt;g.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new J(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=no;let p=this.type;this.render=function(b,A,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===Hf&&(Xe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=no);const T=n.getRenderTarget(),C=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),I=n.state;I.setBlending(ti),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const V=p!==this.type;V&&A.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(N=>N.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,N=b.length;B<N;B++){const W=b[B],F=W.shadow;if(F===void 0){Xe("WebGLShadowMap:",W,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const Z=F.getFrameExtents();s.multiply(Z),r.copy(F.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Z.x),s.x=r.x*Z.x,F.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Z.y),s.y=r.y*Z.y,F.mapSize.y=r.y));const j=n.state.buffers.depth.getReversed();if(F.camera._reversedDepth=j,F.map===null||V===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===qs){if(W.isPointLight){Xe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Hn(s.x,s.y,{format:Ni,type:ii,minFilter:Kt,magFilter:Kt,generateMipmaps:!1}),F.map.texture.name=W.name+".shadowMap",F.map.depthTexture=new Ss(s.x,s.y,Tn),F.map.depthTexture.name=W.name+".shadowMapDepth",F.map.depthTexture.format=si,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Ht,F.map.depthTexture.magFilter=Ht}else W.isPointLight?(F.map=new nd(s.x),F.map.depthTexture=new lm(s.x,Gn)):(F.map=new Hn(s.x,s.y),F.map.depthTexture=new Ss(s.x,s.y,Gn)),F.map.depthTexture.name=W.name+".shadowMap",F.map.depthTexture.format=si,this.type===no?(F.map.depthTexture.compareFunction=j?Wl:Vl,F.map.depthTexture.minFilter=Kt,F.map.depthTexture.magFilter=Kt):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Ht,F.map.depthTexture.magFilter=Ht);F.camera.updateProjectionMatrix()}const ae=F.map.isWebGLCubeRenderTarget?6:1;for(let re=0;re<ae;re++){if(F.map.isWebGLCubeRenderTarget)n.setRenderTarget(F.map,re),n.clear();else{re===0&&(n.setRenderTarget(F.map),n.clear());const _e=F.getViewport(re);o.set(r.x*_e.x,r.y*_e.y,r.x*_e.z,r.y*_e.w),I.viewport(o)}if(W.isPointLight){const _e=F.camera,qe=F.matrix,nt=W.distance||_e.far;nt!==_e.far&&(_e.far=nt,_e.updateProjectionMatrix()),Gs.setFromMatrixPosition(W.matrixWorld),_e.position.copy(Gs),Ma.copy(_e.position),Ma.add(Nv[re]),_e.up.copy(Uv[re]),_e.lookAt(Ma),_e.updateMatrixWorld(),qe.makeTranslation(-Gs.x,-Gs.y,-Gs.z),Ou.multiplyMatrices(_e.projectionMatrix,_e.matrixWorldInverse),F._frustum.setFromProjectionMatrix(Ou,_e.coordinateSystem,_e.reversedDepth)}else F.updateMatrices(W);i=F.getFrustum(),_(A,x,F.camera,W,this.type)}F.isPointLightShadow!==!0&&this.type===qs&&y(F,x),F.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(T,C,P)};function y(b,A){const x=e.update(M);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Hn(s.x,s.y,{format:Ni,type:ii})),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(A,null,x,u,M,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(A,null,x,f,M,null)}function S(b,A,x,T){let C=null;const P=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)C=P;else if(C=x.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const I=C.uuid,V=A.uuid;let B=c[I];B===void 0&&(B={},c[I]=B);let N=B[V];N===void 0&&(N=C.clone(),B[V]=N,A.addEventListener("dispose",E)),C=N}if(C.visible=A.visible,C.wireframe=A.wireframe,T===qs?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:d[A.side],C.alphaMap=A.alphaMap,C.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,C.map=A.map,C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.displacementMap=A.displacementMap,C.displacementScale=A.displacementScale,C.displacementBias=A.displacementBias,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,x.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const I=n.properties.get(C);I.light=x}return C}function _(b,A,x,T,C){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&C===qs)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);const V=e.update(b),B=b.material;if(Array.isArray(B)){const N=V.groups;for(let W=0,F=N.length;W<F;W++){const Z=N[W],j=B[Z.materialIndex];if(j&&j.visible){const ae=S(b,j,T,C);b.onBeforeShadow(n,b,A,x,V,ae,Z),n.renderBufferDirect(x,null,V,ae,b,Z),b.onAfterShadow(n,b,A,x,V,ae,Z)}}}else if(B.visible){const N=S(b,B,T,C);b.onBeforeShadow(n,b,A,x,V,N,null),n.renderBufferDirect(x,null,V,N,b,null),b.onAfterShadow(n,b,A,x,V,N,null)}}const I=b.children;for(let V=0,B=I.length;V<B;V++)_(I[V],A,x,T,C)}function E(b){b.target.removeEventListener("dispose",E);for(const x in c){const T=c[x],C=b.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function Ov(n,e){function t(){let U=!1;const de=new Rt;let K=null;const ge=new Rt(0,0,0,0);return{setMask:function(we){K!==we&&!U&&(n.colorMask(we,we,we,we),K=we)},setLocked:function(we){U=we},setClear:function(we,te,Ie,Pe,Pt){Pt===!0&&(we*=Pe,te*=Pe,Ie*=Pe),de.set(we,te,Ie,Pe),ge.equals(de)===!1&&(n.clearColor(we,te,Ie,Pe),ge.copy(de))},reset:function(){U=!1,K=null,ge.set(-1,0,0,0)}}}function i(){let U=!1,de=!1,K=null,ge=null,we=null;return{setReversed:function(te){if(de!==te){const Ie=e.get("EXT_clip_control");te?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),de=te;const Pe=we;we=null,this.setClear(Pe)}},getReversed:function(){return de},setTest:function(te){te?se(n.DEPTH_TEST):De(n.DEPTH_TEST)},setMask:function(te){K!==te&&!U&&(n.depthMask(te),K=te)},setFunc:function(te){if(de&&(te=Mp[te]),ge!==te){switch(te){case Ia:n.depthFunc(n.NEVER);break;case Na:n.depthFunc(n.ALWAYS);break;case Ua:n.depthFunc(n.LESS);break;case Ms:n.depthFunc(n.LEQUAL);break;case Fa:n.depthFunc(n.EQUAL);break;case Oa:n.depthFunc(n.GEQUAL);break;case za:n.depthFunc(n.GREATER);break;case Ba:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ge=te}},setLocked:function(te){U=te},setClear:function(te){we!==te&&(we=te,de&&(te=1-te),n.clearDepth(te))},reset:function(){U=!1,K=null,ge=null,we=null,de=!1}}}function s(){let U=!1,de=null,K=null,ge=null,we=null,te=null,Ie=null,Pe=null,Pt=null;return{setTest:function(bt){U||(bt?se(n.STENCIL_TEST):De(n.STENCIL_TEST))},setMask:function(bt){de!==bt&&!U&&(n.stencilMask(bt),de=bt)},setFunc:function(bt,Rn,Cn){(K!==bt||ge!==Rn||we!==Cn)&&(n.stencilFunc(bt,Rn,Cn),K=bt,ge=Rn,we=Cn)},setOp:function(bt,Rn,Cn){(te!==bt||Ie!==Rn||Pe!==Cn)&&(n.stencilOp(bt,Rn,Cn),te=bt,Ie=Rn,Pe=Cn)},setLocked:function(bt){U=bt},setClear:function(bt){Pt!==bt&&(n.clearStencil(bt),Pt=bt)},reset:function(){U=!1,de=null,K=null,ge=null,we=null,te=null,Ie=null,Pe=null,Pt=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let h={},d={},u={},f=new WeakMap,g=[],M=null,m=!1,p=null,y=null,S=null,_=null,E=null,b=null,A=null,x=new ot(0,0,0),T=0,C=!1,P=null,I=null,V=null,B=null,N=null;const W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,Z=0;const j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(j)[1]),F=Z>=1):j.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),F=Z>=2);let ae=null,re={};const _e=n.getParameter(n.SCISSOR_BOX),qe=n.getParameter(n.VIEWPORT),nt=new Rt().fromArray(_e),Ke=new Rt().fromArray(qe);function $(U,de,K,ge){const we=new Uint8Array(4),te=n.createTexture();n.bindTexture(U,te),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ie=0;Ie<K;Ie++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(de,0,n.RGBA,1,1,ge,0,n.RGBA,n.UNSIGNED_BYTE,we):n.texImage2D(de+Ie,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,we);return te}const ue={};ue[n.TEXTURE_2D]=$(n.TEXTURE_2D,n.TEXTURE_2D,1),ue[n.TEXTURE_CUBE_MAP]=$(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[n.TEXTURE_2D_ARRAY]=$(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ue[n.TEXTURE_3D]=$(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(n.DEPTH_TEST),o.setFunc(Ms),Se(!1),ve(Rc),se(n.CULL_FACE),ie(ti);function se(U){h[U]!==!0&&(n.enable(U),h[U]=!0)}function De(U){h[U]!==!1&&(n.disable(U),h[U]=!1)}function We(U,de){return u[U]!==de?(n.bindFramebuffer(U,de),u[U]=de,U===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=de),U===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=de),!0):!1}function Be(U,de){let K=g,ge=!1;if(U){K=f.get(de),K===void 0&&(K=[],f.set(de,K));const we=U.textures;if(K.length!==we.length||K[0]!==n.COLOR_ATTACHMENT0){for(let te=0,Ie=we.length;te<Ie;te++)K[te]=n.COLOR_ATTACHMENT0+te;K.length=we.length,ge=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,ge=!0);ge&&n.drawBuffers(K)}function lt(U){return M!==U?(n.useProgram(U),M=U,!0):!1}const He={[Ai]:n.FUNC_ADD,[Vf]:n.FUNC_SUBTRACT,[Wf]:n.FUNC_REVERSE_SUBTRACT};He[Xf]=n.MIN,He[qf]=n.MAX;const ee={[Yf]:n.ZERO,[Zf]:n.ONE,[$f]:n.SRC_COLOR,[La]:n.SRC_ALPHA,[tp]:n.SRC_ALPHA_SATURATE,[jf]:n.DST_COLOR,[Jf]:n.DST_ALPHA,[Kf]:n.ONE_MINUS_SRC_COLOR,[Da]:n.ONE_MINUS_SRC_ALPHA,[ep]:n.ONE_MINUS_DST_COLOR,[Qf]:n.ONE_MINUS_DST_ALPHA,[np]:n.CONSTANT_COLOR,[ip]:n.ONE_MINUS_CONSTANT_COLOR,[sp]:n.CONSTANT_ALPHA,[rp]:n.ONE_MINUS_CONSTANT_ALPHA};function ie(U,de,K,ge,we,te,Ie,Pe,Pt,bt){if(U===ti){m===!0&&(De(n.BLEND),m=!1);return}if(m===!1&&(se(n.BLEND),m=!0),U!==Gf){if(U!==p||bt!==C){if((y!==Ai||E!==Ai)&&(n.blendEquation(n.FUNC_ADD),y=Ai,E=Ai),bt)switch(U){case ds:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Pa:n.blendFunc(n.ONE,n.ONE);break;case Cc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Pc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:rt("WebGLState: Invalid blending: ",U);break}else switch(U){case ds:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Pa:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Cc:rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Pc:rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rt("WebGLState: Invalid blending: ",U);break}S=null,_=null,b=null,A=null,x.set(0,0,0),T=0,p=U,C=bt}return}we=we||de,te=te||K,Ie=Ie||ge,(de!==y||we!==E)&&(n.blendEquationSeparate(He[de],He[we]),y=de,E=we),(K!==S||ge!==_||te!==b||Ie!==A)&&(n.blendFuncSeparate(ee[K],ee[ge],ee[te],ee[Ie]),S=K,_=ge,b=te,A=Ie),(Pe.equals(x)===!1||Pt!==T)&&(n.blendColor(Pe.r,Pe.g,Pe.b,Pt),x.copy(Pe),T=Pt),p=U,C=!1}function ne(U,de){U.side===nn?De(n.CULL_FACE):se(n.CULL_FACE);let K=U.side===jt;de&&(K=!K),Se(K),U.blending===ds&&U.transparent===!1?ie(ti):ie(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const ge=U.stencilWrite;a.setTest(ge),ge&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ne(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?se(n.SAMPLE_ALPHA_TO_COVERAGE):De(n.SAMPLE_ALPHA_TO_COVERAGE)}function Se(U){P!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),P=U)}function ve(U){U!==Bf?(se(n.CULL_FACE),U!==I&&(U===Rc?n.cullFace(n.BACK):U===kf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):De(n.CULL_FACE),I=U}function Ge(U){U!==V&&(F&&n.lineWidth(U),V=U)}function Ne(U,de,K){U?(se(n.POLYGON_OFFSET_FILL),(B!==de||N!==K)&&(B=de,N=K,o.getReversed()&&(de=-de),n.polygonOffset(de,K))):De(n.POLYGON_OFFSET_FILL)}function Ye(U){U?se(n.SCISSOR_TEST):De(n.SCISSOR_TEST)}function Ze(U){U===void 0&&(U=n.TEXTURE0+W-1),ae!==U&&(n.activeTexture(U),ae=U)}function D(U,de,K){K===void 0&&(ae===null?K=n.TEXTURE0+W-1:K=ae);let ge=re[K];ge===void 0&&(ge={type:void 0,texture:void 0},re[K]=ge),(ge.type!==U||ge.texture!==de)&&(ae!==K&&(n.activeTexture(K),ae=K),n.bindTexture(U,de||ue[U]),ge.type=U,ge.texture=de)}function mt(){const U=re[ae];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function st(){try{n.compressedTexImage2D(...arguments)}catch(U){rt("WebGLState:",U)}}function R(){try{n.compressedTexImage3D(...arguments)}catch(U){rt("WebGLState:",U)}}function v(){try{n.texSubImage2D(...arguments)}catch(U){rt("WebGLState:",U)}}function z(){try{n.texSubImage3D(...arguments)}catch(U){rt("WebGLState:",U)}}function G(){try{n.compressedTexSubImage2D(...arguments)}catch(U){rt("WebGLState:",U)}}function q(){try{n.compressedTexSubImage3D(...arguments)}catch(U){rt("WebGLState:",U)}}function le(){try{n.texStorage2D(...arguments)}catch(U){rt("WebGLState:",U)}}function he(){try{n.texStorage3D(...arguments)}catch(U){rt("WebGLState:",U)}}function Y(){try{n.texImage2D(...arguments)}catch(U){rt("WebGLState:",U)}}function Q(){try{n.texImage3D(...arguments)}catch(U){rt("WebGLState:",U)}}function pe(U){return d[U]!==void 0?d[U]:n.getParameter(U)}function Ue(U,de){d[U]!==de&&(n.pixelStorei(U,de),d[U]=de)}function Me(U){nt.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),nt.copy(U))}function me(U){Ke.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),Ke.copy(U))}function ke(U,de){let K=c.get(de);K===void 0&&(K=new WeakMap,c.set(de,K));let ge=K.get(U);ge===void 0&&(ge=n.getUniformBlockIndex(de,U.name),K.set(U,ge))}function Ve(U,de){const ge=c.get(de).get(U);l.get(de)!==ge&&(n.uniformBlockBinding(de,ge,U.__bindingPointIndex),l.set(de,ge))}function Je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},d={},ae=null,re={},u={},f=new WeakMap,g=[],M=null,m=!1,p=null,y=null,S=null,_=null,E=null,b=null,A=null,x=new ot(0,0,0),T=0,C=!1,P=null,I=null,V=null,B=null,N=null,nt.set(0,0,n.canvas.width,n.canvas.height),Ke.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:se,disable:De,bindFramebuffer:We,drawBuffers:Be,useProgram:lt,setBlending:ie,setMaterial:ne,setFlipSided:Se,setCullFace:ve,setLineWidth:Ge,setPolygonOffset:Ne,setScissorTest:Ye,activeTexture:Ze,bindTexture:D,unbindTexture:mt,compressedTexImage2D:st,compressedTexImage3D:R,texImage2D:Y,texImage3D:Q,pixelStorei:Ue,getParameter:pe,updateUBOMapping:ke,uniformBlockBinding:Ve,texStorage2D:le,texStorage3D:he,texSubImage2D:v,texSubImage3D:z,compressedTexSubImage2D:G,compressedTexSubImage3D:q,scissor:Me,viewport:me,reset:Je}}function zv(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ce,h=new WeakMap,d=new Set;let u;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(R,v){return g?new OffscreenCanvas(R,v):xo("canvas")}function m(R,v,z){let G=1;const q=st(R);if((q.width>z||q.height>z)&&(G=z/Math.max(q.width,q.height)),G<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const le=Math.floor(G*q.width),he=Math.floor(G*q.height);u===void 0&&(u=M(le,he));const Y=v?M(le,he):u;return Y.width=le,Y.height=he,Y.getContext("2d").drawImage(R,0,0,le,he),Xe("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+le+"x"+he+")."),Y}else return"data"in R&&Xe("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),R;return R}function p(R){return R.generateMipmaps}function y(R){n.generateMipmap(R)}function S(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(R,v,z,G,q,le=!1){if(R!==null){if(n[R]!==void 0)return n[R];Xe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let he;G&&(he=e.get("EXT_texture_norm16"),he||Xe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=v;if(v===n.RED&&(z===n.FLOAT&&(Y=n.R32F),z===n.HALF_FLOAT&&(Y=n.R16F),z===n.UNSIGNED_BYTE&&(Y=n.R8),z===n.UNSIGNED_SHORT&&he&&(Y=he.R16_EXT),z===n.SHORT&&he&&(Y=he.R16_SNORM_EXT)),v===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(Y=n.R8UI),z===n.UNSIGNED_SHORT&&(Y=n.R16UI),z===n.UNSIGNED_INT&&(Y=n.R32UI),z===n.BYTE&&(Y=n.R8I),z===n.SHORT&&(Y=n.R16I),z===n.INT&&(Y=n.R32I)),v===n.RG&&(z===n.FLOAT&&(Y=n.RG32F),z===n.HALF_FLOAT&&(Y=n.RG16F),z===n.UNSIGNED_BYTE&&(Y=n.RG8),z===n.UNSIGNED_SHORT&&he&&(Y=he.RG16_EXT),z===n.SHORT&&he&&(Y=he.RG16_SNORM_EXT)),v===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(Y=n.RG8UI),z===n.UNSIGNED_SHORT&&(Y=n.RG16UI),z===n.UNSIGNED_INT&&(Y=n.RG32UI),z===n.BYTE&&(Y=n.RG8I),z===n.SHORT&&(Y=n.RG16I),z===n.INT&&(Y=n.RG32I)),v===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),z===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),z===n.UNSIGNED_INT&&(Y=n.RGB32UI),z===n.BYTE&&(Y=n.RGB8I),z===n.SHORT&&(Y=n.RGB16I),z===n.INT&&(Y=n.RGB32I)),v===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),z===n.UNSIGNED_INT&&(Y=n.RGBA32UI),z===n.BYTE&&(Y=n.RGBA8I),z===n.SHORT&&(Y=n.RGBA16I),z===n.INT&&(Y=n.RGBA32I)),v===n.RGB&&(z===n.UNSIGNED_SHORT&&he&&(Y=he.RGB16_EXT),z===n.SHORT&&he&&(Y=he.RGB16_SNORM_EXT),z===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),z===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),v===n.RGBA){const Q=le?go:at.getTransfer(q);z===n.FLOAT&&(Y=n.RGBA32F),z===n.HALF_FLOAT&&(Y=n.RGBA16F),z===n.UNSIGNED_BYTE&&(Y=Q===dt?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT&&he&&(Y=he.RGBA16_EXT),z===n.SHORT&&he&&(Y=he.RGBA16_SNORM_EXT),z===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function E(R,v){let z;return R?v===null||v===Gn||v===or?z=n.DEPTH24_STENCIL8:v===Tn?z=n.DEPTH32F_STENCIL8:v===rr&&(z=n.DEPTH24_STENCIL8,Xe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Gn||v===or?z=n.DEPTH_COMPONENT24:v===Tn?z=n.DEPTH_COMPONENT32F:v===rr&&(z=n.DEPTH_COMPONENT16),z}function b(R,v){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ht&&R.minFilter!==Kt?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function A(R){const v=R.target;v.removeEventListener("dispose",A),T(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&d.delete(v)}function x(R){const v=R.target;v.removeEventListener("dispose",x),P(v)}function T(R){const v=i.get(R);if(v.__webglInit===void 0)return;const z=R.source,G=f.get(z);if(G){const q=G[v.__cacheKey];q.usedTimes--,q.usedTimes===0&&C(R),Object.keys(G).length===0&&f.delete(z)}i.remove(R)}function C(R){const v=i.get(R);n.deleteTexture(v.__webglTexture);const z=R.source,G=f.get(z);delete G[v.__cacheKey],o.memory.textures--}function P(R){const v=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(v.__webglFramebuffer[G]))for(let q=0;q<v.__webglFramebuffer[G].length;q++)n.deleteFramebuffer(v.__webglFramebuffer[G][q]);else n.deleteFramebuffer(v.__webglFramebuffer[G]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[G])}else{if(Array.isArray(v.__webglFramebuffer))for(let G=0;G<v.__webglFramebuffer.length;G++)n.deleteFramebuffer(v.__webglFramebuffer[G]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let G=0;G<v.__webglColorRenderbuffer.length;G++)v.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[G]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const z=R.textures;for(let G=0,q=z.length;G<q;G++){const le=i.get(z[G]);le.__webglTexture&&(n.deleteTexture(le.__webglTexture),o.memory.textures--),i.remove(z[G])}i.remove(R)}let I=0;function V(){I=0}function B(){return I}function N(R){I=R}function W(){const R=I;return R>=s.maxTextures&&Xe("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),I+=1,R}function F(R){const v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function Z(R,v){const z=i.get(R);if(R.isVideoTexture&&D(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&z.__version!==R.version){const G=R.image;if(G===null)Xe("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Xe("WebGLRenderer: Texture marked for update but image is incomplete");else{De(z,R,v);return}}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+v)}function j(R,v){const z=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){De(z,R,v);return}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+v)}function ae(R,v){const z=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){De(z,R,v);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+v)}function re(R,v){const z=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&z.__version!==R.version){We(z,R,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+v)}const _e={[ho]:n.REPEAT,[Qn]:n.CLAMP_TO_EDGE,[ka]:n.MIRRORED_REPEAT},qe={[Ht]:n.NEAREST,[lp]:n.NEAREST_MIPMAP_NEAREST,[Tr]:n.NEAREST_MIPMAP_LINEAR,[Kt]:n.LINEAR,[Ho]:n.LINEAR_MIPMAP_NEAREST,[Pi]:n.LINEAR_MIPMAP_LINEAR},nt={[hp]:n.NEVER,[gp]:n.ALWAYS,[dp]:n.LESS,[Vl]:n.LEQUAL,[fp]:n.EQUAL,[Wl]:n.GEQUAL,[pp]:n.GREATER,[mp]:n.NOTEQUAL};function Ke(R,v){if(v.type===Tn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Kt||v.magFilter===Ho||v.magFilter===Tr||v.magFilter===Pi||v.minFilter===Kt||v.minFilter===Ho||v.minFilter===Tr||v.minFilter===Pi)&&Xe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,_e[v.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,_e[v.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,_e[v.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,qe[v.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,qe[v.minFilter]),v.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,nt[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ht||v.minFilter!==Tr&&v.minFilter!==Pi||v.type===Tn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function $(R,v){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",A));const G=v.source;let q=f.get(G);q===void 0&&(q={},f.set(G,q));const le=F(v);if(le!==R.__cacheKey){q[le]===void 0&&(q[le]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),q[le].usedTimes++;const he=q[R.__cacheKey];he!==void 0&&(q[R.__cacheKey].usedTimes--,he.usedTimes===0&&C(v)),R.__cacheKey=le,R.__webglTexture=q[le].texture}return z}function ue(R,v,z){return Math.floor(Math.floor(R/z)/v)}function se(R,v,z,G){const le=R.updateRanges;if(le.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,z,G,v.data);else{le.sort((Ue,Me)=>Ue.start-Me.start);let he=0;for(let Ue=1;Ue<le.length;Ue++){const Me=le[he],me=le[Ue],ke=Me.start+Me.count,Ve=ue(me.start,v.width,4),Je=ue(Me.start,v.width,4);me.start<=ke+1&&Ve===Je&&ue(me.start+me.count-1,v.width,4)===Ve?Me.count=Math.max(Me.count,me.start+me.count-Me.start):(++he,le[he]=me)}le.length=he+1;const Y=t.getParameter(n.UNPACK_ROW_LENGTH),Q=t.getParameter(n.UNPACK_SKIP_PIXELS),pe=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let Ue=0,Me=le.length;Ue<Me;Ue++){const me=le[Ue],ke=Math.floor(me.start/4),Ve=Math.ceil(me.count/4),Je=ke%v.width,U=Math.floor(ke/v.width),de=Ve,K=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Je),t.pixelStorei(n.UNPACK_SKIP_ROWS,U),t.texSubImage2D(n.TEXTURE_2D,0,Je,U,de,K,z,G,v.data)}R.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Y),t.pixelStorei(n.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(n.UNPACK_SKIP_ROWS,pe)}}function De(R,v,z){let G=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(G=n.TEXTURE_3D);const q=$(R,v),le=v.source;t.bindTexture(G,R.__webglTexture,n.TEXTURE0+z);const he=i.get(le);if(le.version!==he.__version||q===!0){if(t.activeTexture(n.TEXTURE0+z),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const K=at.getPrimaries(at.workingColorSpace),ge=v.colorSpace===mi?null:at.getPrimaries(v.colorSpace),we=v.colorSpace===mi||K===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we)}t.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment);let Q=m(v.image,!1,s.maxTextureSize);Q=mt(v,Q);const pe=r.convert(v.format,v.colorSpace),Ue=r.convert(v.type);let Me=_(v.internalFormat,pe,Ue,v.normalized,v.colorSpace,v.isVideoTexture);Ke(G,v);let me;const ke=v.mipmaps,Ve=v.isVideoTexture!==!0,Je=he.__version===void 0||q===!0,U=le.dataReady,de=b(v,Q);if(v.isDepthTexture)Me=E(v.format===Li,v.type),Je&&(Ve?t.texStorage2D(n.TEXTURE_2D,1,Me,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,Me,Q.width,Q.height,0,pe,Ue,null));else if(v.isDataTexture)if(ke.length>0){Ve&&Je&&t.texStorage2D(n.TEXTURE_2D,de,Me,ke[0].width,ke[0].height);for(let K=0,ge=ke.length;K<ge;K++)me=ke[K],Ve?U&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,me.width,me.height,pe,Ue,me.data):t.texImage2D(n.TEXTURE_2D,K,Me,me.width,me.height,0,pe,Ue,me.data);v.generateMipmaps=!1}else Ve?(Je&&t.texStorage2D(n.TEXTURE_2D,de,Me,Q.width,Q.height),U&&se(v,Q,pe,Ue)):t.texImage2D(n.TEXTURE_2D,0,Me,Q.width,Q.height,0,pe,Ue,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ve&&Je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,Me,ke[0].width,ke[0].height,Q.depth);for(let K=0,ge=ke.length;K<ge;K++)if(me=ke[K],v.format!==An)if(pe!==null)if(Ve){if(U)if(v.layerUpdates.size>0){const we=pu(me.width,me.height,v.format,v.type);for(const te of v.layerUpdates){const Ie=me.data.subarray(te*we/me.data.BYTES_PER_ELEMENT,(te+1)*we/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,te,me.width,me.height,1,pe,Ie)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,me.width,me.height,Q.depth,pe,me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,Me,me.width,me.height,Q.depth,0,me.data,0,0);else Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?U&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,me.width,me.height,Q.depth,pe,Ue,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,K,Me,me.width,me.height,Q.depth,0,pe,Ue,me.data)}else{Ve&&Je&&t.texStorage2D(n.TEXTURE_2D,de,Me,ke[0].width,ke[0].height);for(let K=0,ge=ke.length;K<ge;K++)me=ke[K],v.format!==An?pe!==null?Ve?U&&t.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,me.width,me.height,pe,me.data):t.compressedTexImage2D(n.TEXTURE_2D,K,Me,me.width,me.height,0,me.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?U&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,me.width,me.height,pe,Ue,me.data):t.texImage2D(n.TEXTURE_2D,K,Me,me.width,me.height,0,pe,Ue,me.data)}else if(v.isDataArrayTexture)if(Ve){if(Je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,Me,Q.width,Q.height,Q.depth),U)if(v.layerUpdates.size>0){const K=pu(Q.width,Q.height,v.format,v.type);for(const ge of v.layerUpdates){const we=Q.data.subarray(ge*K/Q.data.BYTES_PER_ELEMENT,(ge+1)*K/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ge,Q.width,Q.height,1,pe,Ue,we)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,pe,Ue,Q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Me,Q.width,Q.height,Q.depth,0,pe,Ue,Q.data);else if(v.isData3DTexture)Ve?(Je&&t.texStorage3D(n.TEXTURE_3D,de,Me,Q.width,Q.height,Q.depth),U&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,pe,Ue,Q.data)):t.texImage3D(n.TEXTURE_3D,0,Me,Q.width,Q.height,Q.depth,0,pe,Ue,Q.data);else if(v.isFramebufferTexture){if(Je)if(Ve)t.texStorage2D(n.TEXTURE_2D,de,Me,Q.width,Q.height);else{let K=Q.width,ge=Q.height;for(let we=0;we<de;we++)t.texImage2D(n.TEXTURE_2D,we,Me,K,ge,0,pe,Ue,null),K>>=1,ge>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in n){const K=n.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),Q.parentNode!==K){K.appendChild(Q),d.add(v),K.onpaint=ge=>{const we=ge.changedElements;for(const te of d)we.includes(te.image)&&(te.needsUpdate=!0)},K.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Q);else{const we=n.RGBA,te=n.RGBA,Ie=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,we,te,Ie,Q)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ke.length>0){if(Ve&&Je){const K=st(ke[0]);t.texStorage2D(n.TEXTURE_2D,de,Me,K.width,K.height)}for(let K=0,ge=ke.length;K<ge;K++)me=ke[K],Ve?U&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,pe,Ue,me):t.texImage2D(n.TEXTURE_2D,K,Me,pe,Ue,me);v.generateMipmaps=!1}else if(Ve){if(Je){const K=st(Q);t.texStorage2D(n.TEXTURE_2D,de,Me,K.width,K.height)}U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,pe,Ue,Q)}else t.texImage2D(n.TEXTURE_2D,0,Me,pe,Ue,Q);p(v)&&y(G),he.__version=le.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function We(R,v,z){if(v.image.length!==6)return;const G=$(R,v),q=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+z);const le=i.get(q);if(q.version!==le.__version||G===!0){t.activeTexture(n.TEXTURE0+z);const he=at.getPrimaries(at.workingColorSpace),Y=v.colorSpace===mi?null:at.getPrimaries(v.colorSpace),Q=v.colorSpace===mi||he===Y?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const pe=v.isCompressedTexture||v.image[0].isCompressedTexture,Ue=v.image[0]&&v.image[0].isDataTexture,Me=[];for(let te=0;te<6;te++)!pe&&!Ue?Me[te]=m(v.image[te],!0,s.maxCubemapSize):Me[te]=Ue?v.image[te].image:v.image[te],Me[te]=mt(v,Me[te]);const me=Me[0],ke=r.convert(v.format,v.colorSpace),Ve=r.convert(v.type),Je=_(v.internalFormat,ke,Ve,v.normalized,v.colorSpace),U=v.isVideoTexture!==!0,de=le.__version===void 0||G===!0,K=q.dataReady;let ge=b(v,me);Ke(n.TEXTURE_CUBE_MAP,v);let we;if(pe){U&&de&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,Je,me.width,me.height);for(let te=0;te<6;te++){we=Me[te].mipmaps;for(let Ie=0;Ie<we.length;Ie++){const Pe=we[Ie];v.format!==An?ke!==null?U?K&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ie,0,0,Pe.width,Pe.height,ke,Pe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ie,Je,Pe.width,Pe.height,0,Pe.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ie,0,0,Pe.width,Pe.height,ke,Ve,Pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ie,Je,Pe.width,Pe.height,0,ke,Ve,Pe.data)}}}else{if(we=v.mipmaps,U&&de){we.length>0&&ge++;const te=st(Me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,Je,te.width,te.height)}for(let te=0;te<6;te++)if(Ue){U?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Me[te].width,Me[te].height,ke,Ve,Me[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Je,Me[te].width,Me[te].height,0,ke,Ve,Me[te].data);for(let Ie=0;Ie<we.length;Ie++){const Pt=we[Ie].image[te].image;U?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ie+1,0,0,Pt.width,Pt.height,ke,Ve,Pt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ie+1,Je,Pt.width,Pt.height,0,ke,Ve,Pt.data)}}else{U?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ke,Ve,Me[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Je,ke,Ve,Me[te]);for(let Ie=0;Ie<we.length;Ie++){const Pe=we[Ie];U?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ie+1,0,0,ke,Ve,Pe.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ie+1,Je,ke,Ve,Pe.image[te])}}}p(v)&&y(n.TEXTURE_CUBE_MAP),le.__version=q.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function Be(R,v,z,G,q,le){const he=r.convert(z.format,z.colorSpace),Y=r.convert(z.type),Q=_(z.internalFormat,he,Y,z.normalized,z.colorSpace),pe=i.get(v),Ue=i.get(z);if(Ue.__renderTarget=v,!pe.__hasExternalTextures){const Me=Math.max(1,v.width>>le),me=Math.max(1,v.height>>le);q===n.TEXTURE_3D||q===n.TEXTURE_2D_ARRAY?t.texImage3D(q,le,Q,Me,me,v.depth,0,he,Y,null):t.texImage2D(q,le,Q,Me,me,0,he,Y,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),Ze(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,q,Ue.__webglTexture,0,Ye(v)):(q===n.TEXTURE_2D||q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,q,Ue.__webglTexture,le),t.bindFramebuffer(n.FRAMEBUFFER,null)}function lt(R,v,z){if(n.bindRenderbuffer(n.RENDERBUFFER,R),v.depthBuffer){const G=v.depthTexture,q=G&&G.isDepthTexture?G.type:null,le=E(v.stencilBuffer,q),he=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ze(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ye(v),le,v.width,v.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ye(v),le,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,le,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,R)}else{const G=v.textures;for(let q=0;q<G.length;q++){const le=G[q],he=r.convert(le.format,le.colorSpace),Y=r.convert(le.type),Q=_(le.internalFormat,he,Y,le.normalized,le.colorSpace);Ze(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ye(v),Q,v.width,v.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ye(v),Q,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Q,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function He(R,v,z){const G=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const q=i.get(v.depthTexture);if(q.__renderTarget=v,(!q.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),G){if(q.__webglInit===void 0&&(q.__webglInit=!0,v.depthTexture.addEventListener("dispose",A)),q.__webglTexture===void 0){q.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),Ke(n.TEXTURE_CUBE_MAP,v.depthTexture);const pe=r.convert(v.depthTexture.format),Ue=r.convert(v.depthTexture.type);let Me;v.depthTexture.format===si?Me=n.DEPTH_COMPONENT24:v.depthTexture.format===Li&&(Me=n.DEPTH24_STENCIL8);for(let me=0;me<6;me++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,Me,v.width,v.height,0,pe,Ue,null)}}else Z(v.depthTexture,0);const le=q.__webglTexture,he=Ye(v),Y=G?n.TEXTURE_CUBE_MAP_POSITIVE_X+z:n.TEXTURE_2D,Q=v.depthTexture.format===Li?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===si)Ze(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,Y,le,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,Q,Y,le,0);else if(v.depthTexture.format===Li)Ze(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,Y,le,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,Q,Y,le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ee(R){const v=i.get(R),z=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){const G=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),G){const q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,G.removeEventListener("dispose",q)};G.addEventListener("dispose",q),v.__depthDisposeCallback=q}v.__boundDepthTexture=G}if(R.depthTexture&&!v.__autoAllocateDepthBuffer)if(z)for(let G=0;G<6;G++)He(v.__webglFramebuffer[G],R,G);else{const G=R.texture.mipmaps;G&&G.length>0?He(v.__webglFramebuffer[0],R,0):He(v.__webglFramebuffer,R,0)}else if(z){v.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[G]),v.__webglDepthbuffer[G]===void 0)v.__webglDepthbuffer[G]=n.createRenderbuffer(),lt(v.__webglDepthbuffer[G],R,!1);else{const q=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=v.__webglDepthbuffer[G];n.bindRenderbuffer(n.RENDERBUFFER,le),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,le)}}else{const G=R.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),lt(v.__webglDepthbuffer,R,!1);else{const q=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,le),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,le)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ie(R,v,z){const G=i.get(R);v!==void 0&&Be(G.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&ee(R)}function ne(R){const v=R.texture,z=i.get(R),G=i.get(v);R.addEventListener("dispose",x);const q=R.textures,le=R.isWebGLCubeRenderTarget===!0,he=q.length>1;if(he||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=v.version,o.memory.textures++),le){z.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer[Y]=[];for(let Q=0;Q<v.mipmaps.length;Q++)z.__webglFramebuffer[Y][Q]=n.createFramebuffer()}else z.__webglFramebuffer[Y]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer=[];for(let Y=0;Y<v.mipmaps.length;Y++)z.__webglFramebuffer[Y]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(he)for(let Y=0,Q=q.length;Y<Q;Y++){const pe=i.get(q[Y]);pe.__webglTexture===void 0&&(pe.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&Ze(R)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Y=0;Y<q.length;Y++){const Q=q[Y];z.__webglColorRenderbuffer[Y]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[Y]);const pe=r.convert(Q.format,Q.colorSpace),Ue=r.convert(Q.type),Me=_(Q.internalFormat,pe,Ue,Q.normalized,Q.colorSpace,R.isXRRenderTarget===!0),me=Ye(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,me,Me,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.RENDERBUFFER,z.__webglColorRenderbuffer[Y])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),lt(z.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(le){t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),Ke(n.TEXTURE_CUBE_MAP,v);for(let Y=0;Y<6;Y++)if(v.mipmaps&&v.mipmaps.length>0)for(let Q=0;Q<v.mipmaps.length;Q++)Be(z.__webglFramebuffer[Y][Q],R,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Q);else Be(z.__webglFramebuffer[Y],R,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);p(v)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let Y=0,Q=q.length;Y<Q;Y++){const pe=q[Y],Ue=i.get(pe);let Me=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Me=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Me,Ue.__webglTexture),Ke(Me,pe),Be(z.__webglFramebuffer,R,pe,n.COLOR_ATTACHMENT0+Y,Me,0),p(pe)&&y(Me)}t.unbindTexture()}else{let Y=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Y=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Y,G.__webglTexture),Ke(Y,v),v.mipmaps&&v.mipmaps.length>0)for(let Q=0;Q<v.mipmaps.length;Q++)Be(z.__webglFramebuffer[Q],R,v,n.COLOR_ATTACHMENT0,Y,Q);else Be(z.__webglFramebuffer,R,v,n.COLOR_ATTACHMENT0,Y,0);p(v)&&y(Y),t.unbindTexture()}R.depthBuffer&&ee(R)}function Se(R){const v=R.textures;for(let z=0,G=v.length;z<G;z++){const q=v[z];if(p(q)){const le=S(R),he=i.get(q).__webglTexture;t.bindTexture(le,he),y(le),t.unbindTexture()}}}const ve=[],Ge=[];function Ne(R){if(R.samples>0){if(Ze(R)===!1){const v=R.textures,z=R.width,G=R.height;let q=n.COLOR_BUFFER_BIT;const le=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=i.get(R),Y=v.length>1;if(Y)for(let pe=0;pe<v.length;pe++)t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);const Q=R.texture.mipmaps;Q&&Q.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let pe=0;pe<v.length;pe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(q|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(q|=n.STENCIL_BUFFER_BIT)),Y){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,he.__webglColorRenderbuffer[pe]);const Ue=i.get(v[pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ue,0)}n.blitFramebuffer(0,0,z,G,0,0,z,G,q,n.NEAREST),l===!0&&(ve.length=0,Ge.length=0,ve.push(n.COLOR_ATTACHMENT0+pe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ve.push(le),Ge.push(le),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ge)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ve))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Y)for(let pe=0;pe<v.length;pe++){t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,he.__webglColorRenderbuffer[pe]);const Ue=i.get(v[pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,Ue,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const v=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function Ye(R){return Math.min(s.maxSamples,R.samples)}function Ze(R){const v=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function D(R){const v=o.render.frame;h.get(R)!==v&&(h.set(R,v),R.update())}function mt(R,v){const z=R.colorSpace,G=R.format,q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==mo&&z!==mi&&(at.getTransfer(z)===dt?(G!==An||q!==un)&&Xe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rt("WebGLTextures: Unsupported texture color space:",z)),v}function st(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=V,this.getTextureUnits=B,this.setTextureUnits=N,this.setTexture2D=Z,this.setTexture2DArray=j,this.setTexture3D=ae,this.setTextureCube=re,this.rebindTextures=ie,this.setupRenderTarget=ne,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=Be,this.useMultisampledRTT=Ze,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Bv(n,e){function t(i,s=mi){let r;const o=at.getTransfer(s);if(i===un)return n.UNSIGNED_BYTE;if(i===Ol)return n.UNSIGNED_SHORT_4_4_4_4;if(i===zl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Th)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ah)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Eh)return n.BYTE;if(i===wh)return n.SHORT;if(i===rr)return n.UNSIGNED_SHORT;if(i===Fl)return n.INT;if(i===Gn)return n.UNSIGNED_INT;if(i===Tn)return n.FLOAT;if(i===ii)return n.HALF_FLOAT;if(i===Rh)return n.ALPHA;if(i===Ch)return n.RGB;if(i===An)return n.RGBA;if(i===si)return n.DEPTH_COMPONENT;if(i===Li)return n.DEPTH_STENCIL;if(i===Bl)return n.RED;if(i===kl)return n.RED_INTEGER;if(i===Ni)return n.RG;if(i===Hl)return n.RG_INTEGER;if(i===Gl)return n.RGBA_INTEGER;if(i===io||i===so||i===ro||i===oo)if(o===dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===io)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===so)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===io)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===so)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ro)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===oo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ha||i===Ga||i===Va||i===Wa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ha)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ga)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Va)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Wa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Xa||i===qa||i===Ya||i===Za||i===$a||i===fo||i===Ka)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Xa||i===qa)return o===dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ya)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Za)return r.COMPRESSED_R11_EAC;if(i===$a)return r.COMPRESSED_SIGNED_R11_EAC;if(i===fo)return r.COMPRESSED_RG11_EAC;if(i===Ka)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ja||i===Qa||i===ja||i===el||i===tl||i===nl||i===il||i===sl||i===rl||i===ol||i===al||i===ll||i===cl||i===ul)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ja)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Qa)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ja)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===el)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===tl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===nl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===il)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===sl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===rl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ol)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===al)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ll)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===cl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ul)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===hl||i===dl||i===fl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===hl)return o===dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===dl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===fl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===pl||i===ml||i===po||i===gl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===pl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ml)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===po)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===gl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===or?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const kv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hv=`
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

}`;class Gv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new kh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new xn({vertexShader:kv,fragmentShader:Hv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new J(new ln(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Vv extends Oi{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null;const M=typeof XRWebGLBinding<"u",m=new Gv,p={},y=t.getContextAttributes();let S=null,_=null;const E=[],b=[],A=new ce;let x=null;const T=new cn;T.viewport=new Rt;const C=new cn;C.viewport=new Rt;const P=[T,C],I=new Qm;let V=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ue=E[$];return ue===void 0&&(ue=new Yo,E[$]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function($){let ue=E[$];return ue===void 0&&(ue=new Yo,E[$]=ue),ue.getGripSpace()},this.getHand=function($){let ue=E[$];return ue===void 0&&(ue=new Yo,E[$]=ue),ue.getHandSpace()};function N($){const ue=b.indexOf($.inputSource);if(ue===-1)return;const se=E[ue];se!==void 0&&(se.update($.inputSource,$.frame,c||o),se.dispatchEvent({type:$.type,data:$.inputSource}))}function W(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",F);for(let $=0;$<E.length;$++){const ue=b[$];ue!==null&&(b[$]=null,E[$].disconnect(ue))}V=null,B=null,m.reset();for(const $ in p)delete p[$];e.setRenderTarget(S),f=null,u=null,d=null,s=null,_=null,Ke.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&Xe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&Xe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",W),s.addEventListener("inputsourceschange",F),y.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(A),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,De=null,We=null;y.depth&&(We=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=y.stencil?Li:si,De=y.stencil?or:Gn);const Be={colorFormat:t.RGBA8,depthFormat:We,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Be),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),_=new Hn(u.textureWidth,u.textureHeight,{format:An,type:un,depthTexture:new Ss(u.textureWidth,u.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const se={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,se),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Hn(f.framebufferWidth,f.framebufferHeight,{format:An,type:un,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ke.setContext(s),Ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function F($){for(let ue=0;ue<$.removed.length;ue++){const se=$.removed[ue],De=b.indexOf(se);De>=0&&(b[De]=null,E[De].disconnect(se))}for(let ue=0;ue<$.added.length;ue++){const se=$.added[ue];let De=b.indexOf(se);if(De===-1){for(let Be=0;Be<E.length;Be++)if(Be>=b.length){b.push(se),De=Be;break}else if(b[Be]===null){b[Be]=se,De=Be;break}if(De===-1)break}const We=E[De];We&&We.connect(se)}}const Z=new L,j=new L;function ae($,ue,se){Z.setFromMatrixPosition(ue.matrixWorld),j.setFromMatrixPosition(se.matrixWorld);const De=Z.distanceTo(j),We=ue.projectionMatrix.elements,Be=se.projectionMatrix.elements,lt=We[14]/(We[10]-1),He=We[14]/(We[10]+1),ee=(We[9]+1)/We[5],ie=(We[9]-1)/We[5],ne=(We[8]-1)/We[0],Se=(Be[8]+1)/Be[0],ve=lt*ne,Ge=lt*Se,Ne=De/(-ne+Se),Ye=Ne*-ne;if(ue.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ye),$.translateZ(Ne),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),We[10]===-1)$.projectionMatrix.copy(ue.projectionMatrix),$.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const Ze=lt+Ne,D=He+Ne,mt=ve-Ye,st=Ge+(De-Ye),R=ee*He/D*Ze,v=ie*He/D*Ze;$.projectionMatrix.makePerspective(mt,st,R,v,Ze,D),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function re($,ue){ue===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ue.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let ue=$.near,se=$.far;m.texture!==null&&(m.depthNear>0&&(ue=m.depthNear),m.depthFar>0&&(se=m.depthFar)),I.near=C.near=T.near=ue,I.far=C.far=T.far=se,(V!==I.near||B!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),V=I.near,B=I.far),I.layers.mask=$.layers.mask|6,T.layers.mask=I.layers.mask&-5,C.layers.mask=I.layers.mask&-3;const De=$.parent,We=I.cameras;re(I,De);for(let Be=0;Be<We.length;Be++)re(We[Be],De);We.length===2?ae(I,T,C):I.projectionMatrix.copy(T.projectionMatrix),_e($,I,De)};function _e($,ue,se){se===null?$.matrix.copy(ue.matrixWorld):($.matrix.copy(se.matrixWorld),$.matrix.invert(),$.matrix.multiply(ue.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ue.projectionMatrix),$.projectionMatrixInverse.copy(ue.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=lr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function($){return p[$]};let qe=null;function nt($,ue){if(h=ue.getViewerPose(c||o),g=ue,h!==null){const se=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let De=!1;se.length!==I.cameras.length&&(I.cameras.length=0,De=!0);for(let He=0;He<se.length;He++){const ee=se[He];let ie=null;if(f!==null)ie=f.getViewport(ee);else{const Se=d.getViewSubImage(u,ee);ie=Se.viewport,He===0&&(e.setRenderTargetTextures(_,Se.colorTexture,Se.depthStencilTexture),e.setRenderTarget(_))}let ne=P[He];ne===void 0&&(ne=new cn,ne.layers.enable(He),ne.viewport=new Rt,P[He]=ne),ne.matrix.fromArray(ee.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(ee.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(ie.x,ie.y,ie.width,ie.height),He===0&&(I.matrix.copy(ne.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),De===!0&&I.cameras.push(ne)}const We=s.enabledFeatures;if(We&&We.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){d=i.getBinding();const He=d.getDepthInformation(se[0]);He&&He.isValid&&He.texture&&m.init(He,s.renderState)}if(We&&We.includes("camera-access")&&M){e.state.unbindTexture(),d=i.getBinding();for(let He=0;He<se.length;He++){const ee=se[He].camera;if(ee){let ie=p[ee];ie||(ie=new kh,p[ee]=ie);const ne=d.getCameraImage(ee);ie.sourceTexture=ne}}}}for(let se=0;se<E.length;se++){const De=b[se],We=E[se];De!==null&&We!==void 0&&We.update(De,ue,c||o)}qe&&qe($,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),g=null}const Ke=new ed;Ke.setAnimationLoop(nt),this.setAnimationLoop=function($){qe=$},this.dispose=function(){}}}const Wv=new _t,ad=new $e;ad.set(-1,0,0,0,1,0,0,0,1);function Xv(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Jh(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,S,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),M(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===jt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===jt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),S=y.envMap,_=y.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(Wv.makeRotationFromEuler(_)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(ad),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===jt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function M(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function qv(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,E){const b=E.program;i.uniformBlockBinding(_,b)}function c(_,E){let b=s[_.id];b===void 0&&(m(_),b=h(_),s[_.id]=b,_.addEventListener("dispose",y));const A=E.program;i.updateUBOMapping(_,A);const x=e.render.frame;r[_.id]!==x&&(u(_),r[_.id]=x)}function h(_){const E=d();_.__bindingPointIndex=E;const b=n.createBuffer(),A=_.__size,x=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,A,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,b),b}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){const E=s[_.id],b=_.uniforms,A=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let x=0,T=b.length;x<T;x++){const C=b[x];if(Array.isArray(C))for(let P=0,I=C.length;P<I;P++)f(C[P],x,P,A);else f(C,x,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(_,E,b,A){if(M(_,E,b,A)===!0){const x=_.__offset,T=_.value;if(Array.isArray(T)){let C=0;for(let P=0;P<T.length;P++){const I=T[P],V=p(I);g(I,_.__data,C),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(C+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,_.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,x,_.__data)}}function g(_,E,b){typeof _=="number"||typeof _=="boolean"?E[0]=_:_.isMatrix3?(E[0]=_.elements[0],E[1]=_.elements[1],E[2]=_.elements[2],E[3]=0,E[4]=_.elements[3],E[5]=_.elements[4],E[6]=_.elements[5],E[7]=0,E[8]=_.elements[6],E[9]=_.elements[7],E[10]=_.elements[8],E[11]=0):ArrayBuffer.isView(_)?E.set(new _.constructor(_.buffer,_.byteOffset,E.length)):_.toArray(E,b)}function M(_,E,b,A){const x=_.value,T=E+"_"+b;if(A[T]===void 0)return typeof x=="number"||typeof x=="boolean"?A[T]=x:ArrayBuffer.isView(x)?A[T]=x.slice():A[T]=x.clone(),!0;{const C=A[T];if(typeof x=="number"||typeof x=="boolean"){if(C!==x)return A[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(C.equals(x)===!1)return C.copy(x),!0}}return!1}function m(_){const E=_.uniforms;let b=0;const A=16;for(let T=0,C=E.length;T<C;T++){const P=Array.isArray(E[T])?E[T]:[E[T]];for(let I=0,V=P.length;I<V;I++){const B=P[I],N=Array.isArray(B.value)?B.value:[B.value];for(let W=0,F=N.length;W<F;W++){const Z=N[W],j=p(Z),ae=b%A,re=ae%j.boundary,_e=ae+re;b+=re,_e!==0&&A-_e<j.storage&&(b+=A-_e),B.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=b,b+=j.storage}}}const x=b%A;return x>0&&(b+=A-x),_.__size=b,_.__cache={},this}function p(_){const E={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(E.boundary=4,E.storage=4):_.isVector2?(E.boundary=8,E.storage=8):_.isVector3||_.isColor?(E.boundary=16,E.storage=12):_.isVector4?(E.boundary=16,E.storage=16):_.isMatrix3?(E.boundary=48,E.storage=48):_.isMatrix4?(E.boundary=64,E.storage=64):_.isTexture?Xe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(E.boundary=16,E.storage=_.byteLength):Xe("WebGLRenderer: Unsupported uniform value type.",_),E}function y(_){const E=_.target;E.removeEventListener("dispose",y);const b=o.indexOf(E.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function S(){for(const _ in s)n.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:S}}const Yv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Dn=null;function Zv(){return Dn===null&&(Dn=new zh(Yv,16,16,Ni,ii),Dn.name="DFG_LUT",Dn.minFilter=Kt,Dn.magFilter=Kt,Dn.wrapS=Qn,Dn.wrapT=Qn,Dn.generateMipmaps=!1,Dn.needsUpdate=!0),Dn}class $v{constructor(e={}){const{canvas:t=_p(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=un}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const M=f,m=new Set([Gl,Hl,kl]),p=new Set([un,Gn,rr,or,Ol,zl]),y=new Uint32Array(4),S=new Int32Array(4),_=new L;let E=null,b=null;const A=[],x=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let P=!1,I=null,V=null,B=null,N=null;this._outputColorSpace=$t;let W=0,F=0,Z=null,j=-1,ae=null;const re=new Rt,_e=new Rt;let qe=null;const nt=new ot(0);let Ke=0,$=t.width,ue=t.height,se=1,De=null,We=null;const Be=new Rt(0,0,$,ue),lt=new Rt(0,0,$,ue);let He=!1;const ee=new Zl;let ie=!1,ne=!1;const Se=new _t,ve=new L,Ge=new Rt,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ye=!1;function Ze(){return Z===null?se:1}let D=i;function mt(w,O){return t.getContext(w,O)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Nl}`),t.addEventListener("webglcontextlost",Pt,!1),t.addEventListener("webglcontextrestored",bt,!1),t.addEventListener("webglcontextcreationerror",Rn,!1),D===null){const O="webgl2";if(D=mt(O,w),D===null)throw mt(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(w){throw rt("WebGLRenderer: "+w.message),w}let st,R,v,z,G,q,le,he,Y,Q,pe,Ue,Me,me,ke,Ve,Je,U,de,K,ge,we,te;function Ie(){st=new Zx(D),st.init(),ge=new Bv(D,st),R=new kx(D,st,e,ge),v=new Ov(D,st),R.reversedDepthBuffer&&u&&v.buffers.depth.setReversed(!0),V=D.createFramebuffer(),B=D.createFramebuffer(),N=D.createFramebuffer(),z=new Jx(D),G=new bv,q=new zv(D,st,v,G,R,ge,z),le=new Yx(C),he=new t0(D),we=new zx(D,he),Y=new $x(D,he,z,we),Q=new jx(D,Y,he,we,z),U=new Qx(D,R,q),ke=new Hx(G),pe=new Sv(C,le,st,R,we,ke),Ue=new Xv(C,G),Me=new wv,me=new Lv(st),Je=new Ox(C,le,v,Q,g,l),Ve=new Fv(C,Q,R),te=new qv(D,z,R,v),de=new Bx(D,st,z),K=new Kx(D,st,z),z.programs=pe.programs,C.capabilities=R,C.extensions=st,C.properties=G,C.renderLists=Me,C.shadowMap=Ve,C.state=v,C.info=z}Ie(),M!==un&&(T=new t_(M,t.width,t.height,a,s,r));const Pe=new Vv(C,D);this.xr=Pe,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const w=st.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=st.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(w){w!==void 0&&(se=w,this.setSize($,ue,!1))},this.getSize=function(w){return w.set($,ue)},this.setSize=function(w,O,X=!0){if(Pe.isPresenting){Xe("WebGLRenderer: Can't change size while VR device is presenting.");return}$=w,ue=O,t.width=Math.floor(w*se),t.height=Math.floor(O*se),X===!0&&(t.style.width=w+"px",t.style.height=O+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set($*se,ue*se).floor()},this.setDrawingBufferSize=function(w,O,X){$=w,ue=O,se=X,t.width=Math.floor(w*X),t.height=Math.floor(O*X),this.setViewport(0,0,w,O)},this.setEffects=function(w){if(M===un){rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let O=0;O<w.length;O++)if(w[O].isOutputPass===!0){Xe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(re)},this.getViewport=function(w){return w.copy(Be)},this.setViewport=function(w,O,X,k){w.isVector4?Be.set(w.x,w.y,w.z,w.w):Be.set(w,O,X,k),v.viewport(re.copy(Be).multiplyScalar(se).round())},this.getScissor=function(w){return w.copy(lt)},this.setScissor=function(w,O,X,k){w.isVector4?lt.set(w.x,w.y,w.z,w.w):lt.set(w,O,X,k),v.scissor(_e.copy(lt).multiplyScalar(se).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(w){v.setScissorTest(He=w)},this.setOpaqueSort=function(w){De=w},this.setTransparentSort=function(w){We=w},this.getClearColor=function(w){return w.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor(...arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha(...arguments)},this.clear=function(w=!0,O=!0,X=!0){let k=0;if(w){let H=!1;if(Z!==null){const Ee=Z.texture.format;H=m.has(Ee)}if(H){const Ee=Z.texture.type,Re=p.has(Ee),be=Je.getClearColor(),Le=Je.getClearAlpha(),Fe=be.r,Qe=be.g,tt=be.b;Re?(y[0]=Fe,y[1]=Qe,y[2]=tt,y[3]=Le,D.clearBufferuiv(D.COLOR,0,y)):(S[0]=Fe,S[1]=Qe,S[2]=tt,S[3]=Le,D.clearBufferiv(D.COLOR,0,S))}else k|=D.COLOR_BUFFER_BIT}O&&(k|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(k|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&D.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),I=w},this.dispose=function(){t.removeEventListener("webglcontextlost",Pt,!1),t.removeEventListener("webglcontextrestored",bt,!1),t.removeEventListener("webglcontextcreationerror",Rn,!1),Je.dispose(),Me.dispose(),me.dispose(),G.dispose(),le.dispose(),Q.dispose(),we.dispose(),te.dispose(),pe.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",hc),Pe.removeEventListener("sessionend",dc),_i.stop()};function Pt(w){w.preventDefault(),_o("WebGLRenderer: Context Lost."),P=!0}function bt(){_o("WebGLRenderer: Context Restored."),P=!1;const w=z.autoReset,O=Ve.enabled,X=Ve.autoUpdate,k=Ve.needsUpdate,H=Ve.type;Ie(),z.autoReset=w,Ve.enabled=O,Ve.autoUpdate=X,Ve.needsUpdate=k,Ve.type=H}function Rn(w){rt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Cn(w){const O=w.target;O.removeEventListener("dispose",Cn),gd(O)}function gd(w){xd(w),G.remove(w)}function xd(w){const O=G.get(w).programs;O!==void 0&&(O.forEach(function(X){pe.releaseProgram(X)}),w.isShaderMaterial&&pe.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,X,k,H,Ee){O===null&&(O=Ne);const Re=H.isMesh&&H.matrixWorld.determinantAffine()<0,be=Md(w,O,X,k,H);v.setMaterial(k,Re);let Le=X.index,Fe=1;if(k.wireframe===!0){if(Le=Y.getWireframeAttribute(X),Le===void 0)return;Fe=2}const Qe=X.drawRange,tt=X.attributes.position;let Oe=Qe.start*Fe,gt=(Qe.start+Qe.count)*Fe;Ee!==null&&(Oe=Math.max(Oe,Ee.start*Fe),gt=Math.min(gt,(Ee.start+Ee.count)*Fe)),Le!==null?(Oe=Math.max(Oe,0),gt=Math.min(gt,Le.count)):tt!=null&&(Oe=Math.max(Oe,0),gt=Math.min(gt,tt.count));const Dt=gt-Oe;if(Dt<0||Dt===1/0)return;we.setup(H,k,be,X,Le);let Lt,Mt=de;if(Le!==null&&(Lt=he.get(Le),Mt=K,Mt.setIndex(Lt)),H.isMesh)k.wireframe===!0?(v.setLineWidth(k.wireframeLinewidth*Ze()),Mt.setMode(D.LINES)):Mt.setMode(D.TRIANGLES);else if(H.isLine){let Xt=k.linewidth;Xt===void 0&&(Xt=1),v.setLineWidth(Xt*Ze()),H.isLineSegments?Mt.setMode(D.LINES):H.isLineLoop?Mt.setMode(D.LINE_LOOP):Mt.setMode(D.LINE_STRIP)}else H.isPoints?Mt.setMode(D.POINTS):H.isSprite&&Mt.setMode(D.TRIANGLES);if(H.isBatchedMesh)if(st.get("WEBGL_multi_draw"))Mt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Xt=H._multiDrawStarts,Ae=H._multiDrawCounts,sn=H._multiDrawCount,ct=Le?he.get(Le).bytesPerElement:1,dn=G.get(k).currentProgram.getUniforms();for(let Pn=0;Pn<sn;Pn++)dn.setValue(D,"_gl_DrawID",Pn),Mt.render(Xt[Pn]/ct,Ae[Pn])}else if(H.isInstancedMesh)Mt.renderInstances(Oe,Dt,H.count);else if(X.isInstancedBufferGeometry){const Xt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ae=Math.min(X.instanceCount,Xt);Mt.renderInstances(Oe,Dt,Ae)}else Mt.render(Oe,Dt)};function uc(w,O,X){w.transparent===!0&&w.side===nn&&w.forceSinglePass===!1?(w.side=jt,w.needsUpdate=!0,vr(w,O,X),w.side=xi,w.needsUpdate=!0,vr(w,O,X),w.side=nn):vr(w,O,X)}this.compile=function(w,O,X=null){X===null&&(X=w),b=me.get(X),b.init(O),x.push(b),X.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(b.pushLight(H),H.castShadow&&b.pushShadow(H))}),w!==X&&w.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(b.pushLight(H),H.castShadow&&b.pushShadow(H))}),b.setupLights();const k=new Set;return w.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const Ee=H.material;if(Ee)if(Array.isArray(Ee))for(let Re=0;Re<Ee.length;Re++){const be=Ee[Re];uc(be,X,H),k.add(be)}else uc(Ee,X,H),k.add(Ee)}),b=x.pop(),k},this.compileAsync=function(w,O,X=null){const k=this.compile(w,O,X);return new Promise(H=>{function Ee(){if(k.forEach(function(Re){G.get(Re).currentProgram.isReady()&&k.delete(Re)}),k.size===0){H(w);return}setTimeout(Ee,10)}st.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Uo=null;function _d(w){Uo&&Uo(w)}function hc(){_i.stop()}function dc(){_i.start()}const _i=new ed;_i.setAnimationLoop(_d),typeof self<"u"&&_i.setContext(self),this.setAnimationLoop=function(w){Uo=w,Pe.setAnimationLoop(w),w===null?_i.stop():_i.start()},Pe.addEventListener("sessionstart",hc),Pe.addEventListener("sessionend",dc),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;I!==null&&I.renderStart(w,O);const X=Pe.enabled===!0&&Pe.isPresenting===!0,k=T!==null&&(Z===null||X)&&T.begin(C,Z);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(O),O=Pe.getCamera()),w.isScene===!0&&w.onBeforeRender(C,w,O,Z),b=me.get(w,x.length),b.init(O),b.state.textureUnits=q.getTextureUnits(),x.push(b),Se.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ee.setFromProjectionMatrix(Se,zn,O.reversedDepth),ne=this.localClippingEnabled,ie=ke.init(this.clippingPlanes,ne),E=Me.get(w,A.length),E.init(),A.push(E),Pe.enabled===!0&&Pe.isPresenting===!0){const Re=C.xr.getDepthSensingMesh();Re!==null&&Fo(Re,O,-1/0,C.sortObjects)}Fo(w,O,0,C.sortObjects),E.finish(),C.sortObjects===!0&&E.sort(De,We,O.reversedDepth),Ye=Pe.enabled===!1||Pe.isPresenting===!1||Pe.hasDepthSensing()===!1,Ye&&Je.addToRenderList(E,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ie===!0&&ke.beginShadows();const H=b.state.shadowsArray;if(Ve.render(H,w,O),ie===!0&&ke.endShadows(),(k&&T.hasRenderPass())===!1){const Re=E.opaque,be=E.transmissive;if(b.setupLights(),O.isArrayCamera){const Le=O.cameras;if(be.length>0)for(let Fe=0,Qe=Le.length;Fe<Qe;Fe++){const tt=Le[Fe];pc(Re,be,w,tt)}Ye&&Je.render(w);for(let Fe=0,Qe=Le.length;Fe<Qe;Fe++){const tt=Le[Fe];fc(E,w,tt,tt.viewport)}}else be.length>0&&pc(Re,be,w,O),Ye&&Je.render(w),fc(E,w,O)}Z!==null&&F===0&&(q.updateMultisampleRenderTarget(Z),q.updateRenderTargetMipmap(Z)),k&&T.end(C),w.isScene===!0&&w.onAfterRender(C,w,O),we.resetDefaultState(),j=-1,ae=null,x.pop(),x.length>0?(b=x[x.length-1],q.setTextureUnits(b.state.textureUnits),ie===!0&&ke.setGlobalState(C.clippingPlanes,b.state.camera)):b=null,A.pop(),A.length>0?E=A[A.length-1]:E=null,I!==null&&I.renderEnd()};function Fo(w,O,X,k){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)X=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLightProbeGrid)b.pushLightProbeGrid(w);else if(w.isLight)b.pushLight(w),w.castShadow&&b.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ee.intersectsSprite(w)){k&&Ge.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Se);const Re=Q.update(w),be=w.material;be.visible&&E.push(w,Re,be,X,Ge.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ee.intersectsObject(w))){const Re=Q.update(w),be=w.material;if(k&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ge.copy(w.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Ge.copy(Re.boundingSphere.center)),Ge.applyMatrix4(w.matrixWorld).applyMatrix4(Se)),Array.isArray(be)){const Le=Re.groups;for(let Fe=0,Qe=Le.length;Fe<Qe;Fe++){const tt=Le[Fe],Oe=be[tt.materialIndex];Oe&&Oe.visible&&E.push(w,Re,Oe,X,Ge.z,tt)}}else be.visible&&E.push(w,Re,be,X,Ge.z,null)}}const Ee=w.children;for(let Re=0,be=Ee.length;Re<be;Re++)Fo(Ee[Re],O,X,k)}function fc(w,O,X,k){const{opaque:H,transmissive:Ee,transparent:Re}=w;b.setupLightsView(X),ie===!0&&ke.setGlobalState(C.clippingPlanes,X),k&&v.viewport(re.copy(k)),H.length>0&&_r(H,O,X),Ee.length>0&&_r(Ee,O,X),Re.length>0&&_r(Re,O,X),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function pc(w,O,X,k){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[k.id]===void 0){const Oe=st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[k.id]=new Hn(1,1,{generateMipmaps:!0,type:Oe?ii:un,minFilter:Pi,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace})}const Ee=b.state.transmissionRenderTarget[k.id],Re=k.viewport||re;Ee.setSize(Re.z*C.transmissionResolutionScale,Re.w*C.transmissionResolutionScale);const be=C.getRenderTarget(),Le=C.getActiveCubeFace(),Fe=C.getActiveMipmapLevel();C.setRenderTarget(Ee),C.getClearColor(nt),Ke=C.getClearAlpha(),Ke<1&&C.setClearColor(16777215,.5),C.clear(),Ye&&Je.render(X);const Qe=C.toneMapping;C.toneMapping=Bn;const tt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),b.setupLightsView(k),ie===!0&&ke.setGlobalState(C.clippingPlanes,k),_r(w,X,k),q.updateMultisampleRenderTarget(Ee),q.updateRenderTargetMipmap(Ee),st.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let gt=0,Dt=O.length;gt<Dt;gt++){const Lt=O[gt],{object:Mt,geometry:Xt,material:Ae,group:sn}=Lt;if(Ae.side===nn&&Mt.layers.test(k.layers)){const ct=Ae.side;Ae.side=jt,Ae.needsUpdate=!0,mc(Mt,X,k,Xt,Ae,sn),Ae.side=ct,Ae.needsUpdate=!0,Oe=!0}}Oe===!0&&(q.updateMultisampleRenderTarget(Ee),q.updateRenderTargetMipmap(Ee))}C.setRenderTarget(be,Le,Fe),C.setClearColor(nt,Ke),tt!==void 0&&(k.viewport=tt),C.toneMapping=Qe}function _r(w,O,X){const k=O.isScene===!0?O.overrideMaterial:null;for(let H=0,Ee=w.length;H<Ee;H++){const Re=w[H],{object:be,geometry:Le,group:Fe}=Re;let Qe=Re.material;Qe.allowOverride===!0&&k!==null&&(Qe=k),be.layers.test(X.layers)&&mc(be,O,X,Le,Qe,Fe)}}function mc(w,O,X,k,H,Ee){w.onBeforeRender(C,O,X,k,H,Ee),w.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),H.onBeforeRender(C,O,X,k,w,Ee),H.transparent===!0&&H.side===nn&&H.forceSinglePass===!1?(H.side=jt,H.needsUpdate=!0,C.renderBufferDirect(X,O,k,H,w,Ee),H.side=xi,H.needsUpdate=!0,C.renderBufferDirect(X,O,k,H,w,Ee),H.side=nn):C.renderBufferDirect(X,O,k,H,w,Ee),w.onAfterRender(C,O,X,k,H,Ee)}function vr(w,O,X){O.isScene!==!0&&(O=Ne);const k=G.get(w),H=b.state.lights,Ee=b.state.shadowsArray,Re=H.state.version,be=pe.getParameters(w,H.state,Ee,O,X,b.state.lightProbeGridArray),Le=pe.getProgramCacheKey(be);let Fe=k.programs;k.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?O.environment:null,k.fog=O.fog;const Qe=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;k.envMap=le.get(w.envMap||k.environment,Qe),k.envMapRotation=k.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,Fe===void 0&&(w.addEventListener("dispose",Cn),Fe=new Map,k.programs=Fe);let tt=Fe.get(Le);if(tt!==void 0){if(k.currentProgram===tt&&k.lightsStateVersion===Re)return xc(w,be),tt}else be.uniforms=pe.getUniforms(w),I!==null&&w.isNodeMaterial&&I.build(w,X,be),w.onBeforeCompile(be,C),tt=pe.acquireProgram(be,Le),Fe.set(Le,tt),k.uniforms=be.uniforms;const Oe=k.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Oe.clippingPlanes=ke.uniform),xc(w,be),k.needsLights=Sd(w),k.lightsStateVersion=Re,k.needsLights&&(Oe.ambientLightColor.value=H.state.ambient,Oe.lightProbe.value=H.state.probe,Oe.directionalLights.value=H.state.directional,Oe.directionalLightShadows.value=H.state.directionalShadow,Oe.spotLights.value=H.state.spot,Oe.spotLightShadows.value=H.state.spotShadow,Oe.rectAreaLights.value=H.state.rectArea,Oe.ltc_1.value=H.state.rectAreaLTC1,Oe.ltc_2.value=H.state.rectAreaLTC2,Oe.pointLights.value=H.state.point,Oe.pointLightShadows.value=H.state.pointShadow,Oe.hemisphereLights.value=H.state.hemi,Oe.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Oe.spotLightMatrix.value=H.state.spotLightMatrix,Oe.spotLightMap.value=H.state.spotLightMap,Oe.pointShadowMatrix.value=H.state.pointShadowMatrix),k.lightProbeGrid=b.state.lightProbeGridArray.length>0,k.currentProgram=tt,k.uniformsList=null,tt}function gc(w){if(w.uniformsList===null){const O=w.currentProgram.getUniforms();w.uniformsList=ao.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function xc(w,O){const X=G.get(w);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.batchingColor=O.batchingColor,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.instancingMorph=O.instancingMorph,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function vd(w,O){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;_.setFromMatrixPosition(O.matrixWorld);for(let X=0,k=w.length;X<k;X++){const H=w[X];if(H.texture!==null&&H.boundingBox.containsPoint(_))return H}return null}function Md(w,O,X,k,H){O.isScene!==!0&&(O=Ne),q.resetTextureUnits();const Ee=O.fog,Re=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?O.environment:null,be=Z===null?C.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:at.workingColorSpace,Le=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Fe=le.get(k.envMap||Re,Le),Qe=k.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,tt=!!X.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Oe=!!X.morphAttributes.position,gt=!!X.morphAttributes.normal,Dt=!!X.morphAttributes.color;let Lt=Bn;k.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Lt=C.toneMapping);const Mt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Xt=Mt!==void 0?Mt.length:0,Ae=G.get(k),sn=b.state.lights;if(ie===!0&&(ne===!0||w!==ae)){const Et=w===ae&&k.id===j;ke.setState(k,w,Et)}let ct=!1;k.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==sn.state.version||Ae.outputColorSpace!==be||H.isBatchedMesh&&Ae.batching===!1||!H.isBatchedMesh&&Ae.batching===!0||H.isBatchedMesh&&Ae.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ae.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ae.instancing===!1||!H.isInstancedMesh&&Ae.instancing===!0||H.isSkinnedMesh&&Ae.skinning===!1||!H.isSkinnedMesh&&Ae.skinning===!0||H.isInstancedMesh&&Ae.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ae.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ae.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ae.instancingMorph===!1&&H.morphTexture!==null||Ae.envMap!==Fe||k.fog===!0&&Ae.fog!==Ee||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ke.numPlanes||Ae.numIntersection!==ke.numIntersection)||Ae.vertexAlphas!==Qe||Ae.vertexTangents!==tt||Ae.morphTargets!==Oe||Ae.morphNormals!==gt||Ae.morphColors!==Dt||Ae.toneMapping!==Lt||Ae.morphTargetsCount!==Xt||!!Ae.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(ct=!0):(ct=!0,Ae.__version=k.version);let dn=Ae.currentProgram;ct===!0&&(dn=vr(k,O,H),I&&k.isNodeMaterial&&I.onUpdateProgram(k,dn,Ae));let Pn=!1,ri=!1,Bi=!1;const yt=dn.getUniforms(),It=Ae.uniforms;if(v.useProgram(dn.program)&&(Pn=!0,ri=!0,Bi=!0),k.id!==j&&(j=k.id,ri=!0),Ae.needsLights){const Et=vd(b.state.lightProbeGridArray,H);Ae.lightProbeGrid!==Et&&(Ae.lightProbeGrid=Et,ri=!0)}if(Pn||ae!==w){v.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),yt.setValue(D,"projectionMatrix",w.projectionMatrix),yt.setValue(D,"viewMatrix",w.matrixWorldInverse);const ai=yt.map.cameraPosition;ai!==void 0&&ai.setValue(D,ve.setFromMatrixPosition(w.matrixWorld)),R.logarithmicDepthBuffer&&yt.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&yt.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),ae!==w&&(ae=w,ri=!0,Bi=!0)}if(Ae.needsLights&&(sn.state.directionalShadowMap.length>0&&yt.setValue(D,"directionalShadowMap",sn.state.directionalShadowMap,q),sn.state.spotShadowMap.length>0&&yt.setValue(D,"spotShadowMap",sn.state.spotShadowMap,q),sn.state.pointShadowMap.length>0&&yt.setValue(D,"pointShadowMap",sn.state.pointShadowMap,q)),H.isSkinnedMesh){yt.setOptional(D,H,"bindMatrix"),yt.setOptional(D,H,"bindMatrixInverse");const Et=H.skeleton;Et&&(Et.boneTexture===null&&Et.computeBoneTexture(),yt.setValue(D,"boneTexture",Et.boneTexture,q))}H.isBatchedMesh&&(yt.setOptional(D,H,"batchingTexture"),yt.setValue(D,"batchingTexture",H._matricesTexture,q),yt.setOptional(D,H,"batchingIdTexture"),yt.setValue(D,"batchingIdTexture",H._indirectTexture,q),yt.setOptional(D,H,"batchingColorTexture"),H._colorsTexture!==null&&yt.setValue(D,"batchingColorTexture",H._colorsTexture,q));const oi=X.morphAttributes;if((oi.position!==void 0||oi.normal!==void 0||oi.color!==void 0)&&U.update(H,X,dn),(ri||Ae.receiveShadow!==H.receiveShadow)&&(Ae.receiveShadow=H.receiveShadow,yt.setValue(D,"receiveShadow",H.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&O.environment!==null&&(It.envMapIntensity.value=O.environmentIntensity),It.dfgLUT!==void 0&&(It.dfgLUT.value=Zv()),ri){if(yt.setValue(D,"toneMappingExposure",C.toneMappingExposure),Ae.needsLights&&yd(It,Bi),Ee&&k.fog===!0&&Ue.refreshFogUniforms(It,Ee),Ue.refreshMaterialUniforms(It,k,se,ue,b.state.transmissionRenderTarget[w.id]),Ae.needsLights&&Ae.lightProbeGrid){const Et=Ae.lightProbeGrid;It.probesSH.value=Et.texture,It.probesMin.value.copy(Et.boundingBox.min),It.probesMax.value.copy(Et.boundingBox.max),It.probesResolution.value.copy(Et.resolution)}ao.upload(D,gc(Ae),It,q)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(ao.upload(D,gc(Ae),It,q),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&yt.setValue(D,"center",H.center),yt.setValue(D,"modelViewMatrix",H.modelViewMatrix),yt.setValue(D,"normalMatrix",H.normalMatrix),yt.setValue(D,"modelMatrix",H.matrixWorld),k.uniformsGroups!==void 0){const Et=k.uniformsGroups;for(let ai=0,ki=Et.length;ai<ki;ai++){const _c=Et[ai];te.update(_c,dn),te.bind(_c,dn)}}return dn}function yd(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function Sd(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(w,O,X){const k=G.get(w);k.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),G.get(w.texture).__webglTexture=O,G.get(w.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:X,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,O){const X=G.get(w);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,X=0){Z=w,W=O,F=X;let k=null,H=!1,Ee=!1;if(w){const be=G.get(w);if(be.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(D.FRAMEBUFFER,be.__webglFramebuffer),re.copy(w.viewport),_e.copy(w.scissor),qe=w.scissorTest,v.viewport(re),v.scissor(_e),v.setScissorTest(qe),j=-1;return}else if(be.__webglFramebuffer===void 0)q.setupRenderTarget(w);else if(be.__hasExternalTextures)q.rebindTextures(w,G.get(w.texture).__webglTexture,G.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Qe=w.depthTexture;if(be.__boundDepthTexture!==Qe){if(Qe!==null&&G.has(Qe)&&(w.width!==Qe.image.width||w.height!==Qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(w)}}const Le=w.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(Ee=!0);const Fe=G.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Fe[O])?k=Fe[O][X]:k=Fe[O],H=!0):w.samples>0&&q.useMultisampledRTT(w)===!1?k=G.get(w).__webglMultisampledFramebuffer:Array.isArray(Fe)?k=Fe[X]:k=Fe,re.copy(w.viewport),_e.copy(w.scissor),qe=w.scissorTest}else re.copy(Be).multiplyScalar(se).floor(),_e.copy(lt).multiplyScalar(se).floor(),qe=He;if(X!==0&&(k=V),v.bindFramebuffer(D.FRAMEBUFFER,k)&&v.drawBuffers(w,k),v.viewport(re),v.scissor(_e),v.setScissorTest(qe),H){const be=G.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,be.__webglTexture,X)}else if(Ee){const be=O;for(let Le=0;Le<w.textures.length;Le++){const Fe=G.get(w.textures[Le]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Le,Fe.__webglTexture,X,be)}}else if(w!==null&&X!==0){const be=G.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,be.__webglTexture,X)}j=-1},this.readRenderTargetPixels=function(w,O,X,k,H,Ee,Re,be=0){if(!(w&&w.isWebGLRenderTarget)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=G.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Re!==void 0&&(Le=Le[Re]),Le){v.bindFramebuffer(D.FRAMEBUFFER,Le);try{const Fe=w.textures[be],Qe=Fe.format,tt=Fe.type;if(w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+be),!R.textureFormatReadable(Qe)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!R.textureTypeReadable(tt)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-k&&X>=0&&X<=w.height-H&&D.readPixels(O,X,k,H,ge.convert(Qe),ge.convert(tt),Ee)}finally{const Fe=Z!==null?G.get(Z).__webglFramebuffer:null;v.bindFramebuffer(D.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(w,O,X,k,H,Ee,Re,be=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=G.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Re!==void 0&&(Le=Le[Re]),Le)if(O>=0&&O<=w.width-k&&X>=0&&X<=w.height-H){v.bindFramebuffer(D.FRAMEBUFFER,Le);const Fe=w.textures[be],Qe=Fe.format,tt=Fe.type;if(w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+be),!R.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!R.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Oe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Oe),D.bufferData(D.PIXEL_PACK_BUFFER,Ee.byteLength,D.STREAM_READ),D.readPixels(O,X,k,H,ge.convert(Qe),ge.convert(tt),0);const gt=Z!==null?G.get(Z).__webglFramebuffer:null;v.bindFramebuffer(D.FRAMEBUFFER,gt);const Dt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await vp(D,Dt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Oe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Ee),D.deleteBuffer(Oe),D.deleteSync(Dt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,O=null,X=0){const k=Math.pow(2,-X),H=Math.floor(w.image.width*k),Ee=Math.floor(w.image.height*k),Re=O!==null?O.x:0,be=O!==null?O.y:0;q.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,X,0,0,Re,be,H,Ee),v.unbindTexture()},this.copyTextureToTexture=function(w,O,X=null,k=null,H=0,Ee=0){let Re,be,Le,Fe,Qe,tt,Oe,gt,Dt;const Lt=w.isCompressedTexture?w.mipmaps[Ee]:w.image;if(X!==null)Re=X.max.x-X.min.x,be=X.max.y-X.min.y,Le=X.isBox3?X.max.z-X.min.z:1,Fe=X.min.x,Qe=X.min.y,tt=X.isBox3?X.min.z:0;else{const It=Math.pow(2,-H);Re=Math.floor(Lt.width*It),be=Math.floor(Lt.height*It),w.isDataArrayTexture?Le=Lt.depth:w.isData3DTexture?Le=Math.floor(Lt.depth*It):Le=1,Fe=0,Qe=0,tt=0}k!==null?(Oe=k.x,gt=k.y,Dt=k.z):(Oe=0,gt=0,Dt=0);const Mt=ge.convert(O.format),Xt=ge.convert(O.type);let Ae;O.isData3DTexture?(q.setTexture3D(O,0),Ae=D.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(q.setTexture2DArray(O,0),Ae=D.TEXTURE_2D_ARRAY):(q.setTexture2D(O,0),Ae=D.TEXTURE_2D),v.activeTexture(D.TEXTURE0),v.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),v.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),v.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);const sn=v.getParameter(D.UNPACK_ROW_LENGTH),ct=v.getParameter(D.UNPACK_IMAGE_HEIGHT),dn=v.getParameter(D.UNPACK_SKIP_PIXELS),Pn=v.getParameter(D.UNPACK_SKIP_ROWS),ri=v.getParameter(D.UNPACK_SKIP_IMAGES);v.pixelStorei(D.UNPACK_ROW_LENGTH,Lt.width),v.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Lt.height),v.pixelStorei(D.UNPACK_SKIP_PIXELS,Fe),v.pixelStorei(D.UNPACK_SKIP_ROWS,Qe),v.pixelStorei(D.UNPACK_SKIP_IMAGES,tt);const Bi=w.isDataArrayTexture||w.isData3DTexture,yt=O.isDataArrayTexture||O.isData3DTexture;if(w.isDepthTexture){const It=G.get(w),oi=G.get(O),Et=G.get(It.__renderTarget),ai=G.get(oi.__renderTarget);v.bindFramebuffer(D.READ_FRAMEBUFFER,Et.__webglFramebuffer),v.bindFramebuffer(D.DRAW_FRAMEBUFFER,ai.__webglFramebuffer);for(let ki=0;ki<Le;ki++)Bi&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,G.get(w).__webglTexture,H,tt+ki),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,G.get(O).__webglTexture,Ee,Dt+ki)),D.blitFramebuffer(Fe,Qe,Re,be,Oe,gt,Re,be,D.DEPTH_BUFFER_BIT,D.NEAREST);v.bindFramebuffer(D.READ_FRAMEBUFFER,null),v.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(H!==0||w.isRenderTargetTexture||G.has(w)){const It=G.get(w),oi=G.get(O);v.bindFramebuffer(D.READ_FRAMEBUFFER,B),v.bindFramebuffer(D.DRAW_FRAMEBUFFER,N);for(let Et=0;Et<Le;Et++)Bi?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,It.__webglTexture,H,tt+Et):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,It.__webglTexture,H),yt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,oi.__webglTexture,Ee,Dt+Et):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,oi.__webglTexture,Ee),H!==0?D.blitFramebuffer(Fe,Qe,Re,be,Oe,gt,Re,be,D.COLOR_BUFFER_BIT,D.NEAREST):yt?D.copyTexSubImage3D(Ae,Ee,Oe,gt,Dt+Et,Fe,Qe,Re,be):D.copyTexSubImage2D(Ae,Ee,Oe,gt,Fe,Qe,Re,be);v.bindFramebuffer(D.READ_FRAMEBUFFER,null),v.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else yt?w.isDataTexture||w.isData3DTexture?D.texSubImage3D(Ae,Ee,Oe,gt,Dt,Re,be,Le,Mt,Xt,Lt.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D(Ae,Ee,Oe,gt,Dt,Re,be,Le,Mt,Lt.data):D.texSubImage3D(Ae,Ee,Oe,gt,Dt,Re,be,Le,Mt,Xt,Lt):w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Ee,Oe,gt,Re,be,Mt,Xt,Lt.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Ee,Oe,gt,Lt.width,Lt.height,Mt,Lt.data):D.texSubImage2D(D.TEXTURE_2D,Ee,Oe,gt,Re,be,Mt,Xt,Lt);v.pixelStorei(D.UNPACK_ROW_LENGTH,sn),v.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ct),v.pixelStorei(D.UNPACK_SKIP_PIXELS,dn),v.pixelStorei(D.UNPACK_SKIP_ROWS,Pn),v.pixelStorei(D.UNPACK_SKIP_IMAGES,ri),Ee===0&&O.generateMipmaps&&D.generateMipmap(Ae),v.unbindTexture()},this.initRenderTarget=function(w){G.get(w).__webglFramebuffer===void 0&&q.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?q.setTextureCube(w,0):w.isData3DTexture?q.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?q.setTexture2DArray(w,0):q.setTexture2D(w,0),v.unbindTexture()},this.resetState=function(){W=0,F=0,Z=null,v.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}}const zu=200,Bu=440,Kv=`
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
`,Jv=`
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
`;function Qv(){const n=new ln(Bu,Bu,zu,zu);n.rotateX(-Math.PI/2);const e=n.attributes.position,t=new Float32Array(e.count);for(let r=0;r<e.count;r++)t[r]=-bn(e.getX(r),e.getZ(r));n.setAttribute("aDepth",new hn(t,1));const i=new xn({uniforms:{uTime:{value:0}},vertexShader:Kv,fragmentShader:Jv}),s=new J(n,i);return s.position.y=0,s.frustumCulled=!1,{mesh:s,update(r){i.uniforms.uTime.value=r}}}const jv=12596780,ku=7,Hu=1,Vs=3.2,Gu=12;function eM(){return new ws({color:jv})}function tM(n){const e=Ro.find(M=>M.kind==="bridge");if(!e)return;const t=uo(vs(e.a)),i=uo(vs(e.b)),s=e.deckY??6,r=new L(i.x-t.x,0,i.z-t.z),o=r.length();if(o<1)return;r.normalize();const a=new L(-r.z,0,r.x),l=(M,m,p)=>new L(t.x+(i.x-t.x)*M+a.x*m,p,t.z+(i.z-t.z)*M+a.z*m),c=M=>M==="x"?Math.atan2(-r.z,r.x):Math.atan2(a.x,a.z),h=eM(),d=new ws({color:16767370}),u=new J(new je(o,Hu,ku),h);u.position.set((t.x+i.x)/2,s-Hu/2,(t.z+i.z)/2),u.rotation.y=c("x"),n.add(u);for(const M of[1/3,2/3]){for(const m of[-Vs,Vs]){const p=new J(new je(1.5,20,1.5),h),y=l(M,m,s+2);p.position.copy(y),p.rotation.y=c("x"),n.add(p)}for(const m of[s+4,s+10]){const p=new J(new je(1,1,Vs*2+1.5),h);p.position.copy(l(M,0,m)),p.rotation.y=c("z"),n.add(p)}}const f=[];for(const M of[-Vs,Vs]){const m=new yo([l(0,M,s+.2),l(.15,M,s+5),l(.3333333333333333,M,s+Gu),l(.5,M,s+2.5),l(.6666666666666666,M,s+Gu),l(.85,M,s+5),l(1,M,s+.2)]);f.push(m),n.add(new J(new ms(m,64,.25,8,!1),h))}for(const M of f){const m=M.getPoints(400);for(let p=6;p<o-3;p+=6){const y=p/o,S=t.x+(i.x-t.x)*y;let _=m[0],E=1/0;for(const x of m){const T=Math.abs(x.x-S);T<E&&(E=T,_=x)}const b=_.y-s;if(b<.5)continue;const A=new J(new xt(.08,.08,b,6),h);A.position.set(S,s+b/2,_.z),n.add(A)}}let g=1;for(let M=6;M<o-3;M+=12){const m=M/o,p=l(m,g*(ku/2-.7),s),y=new J(new xt(.12,.16,4.2,8),h);y.position.set(p.x,s+2.1,p.z),n.add(y);const S=new J(new ht(.32,10,8),d);S.position.set(p.x,s+4.2,p.z),n.add(S),g*=-1}}const[ec,ld,tc,cd]=Fn,Tl=(ec+tc)/2,fr=(ld+cd)/2,ya=(()=>{const n=[];let e=0;for(const t of[fr-10,fr+10])for(let i=ec+2.5;i<=tc-2.5;i+=5){const s=.9+e*37%10/50;n.push({x:i,z:t,s}),e++}return n})(),nM=[{x0:ec,z0:fr-1.5,x1:tc,z1:fr+1.5},{x0:Tl-1.5,z0:ld,x1:Tl+1.5,z1:cd}],iM={x:Tl,z:fr,w:14,d:9,h:5},sM=1e6,bi=3.4;function ud(){return{winLit:[],winUnlit:[],sills:[],doors:[],flowerBoxes:[],petals:[],leaves:[],awnings:[[],[],[]],bays:[]}}function rM(n,e){n.winLit.push(...e.winLit),n.winUnlit.push(...e.winUnlit),n.sills.push(...e.sills),n.doors.push(...e.doors),n.flowerBoxes.push(...e.flowerBoxes),n.petals.push(...e.petals),n.leaves.push(...e.leaves),e.awnings.forEach((t,i)=>n.awnings[i].push(...t)),n.bays.push(...e.bays)}const oM={north:0,south:1,east:2,west:3};function aM(n){const{sx:e,sy:t,sz:i,minY:s,cx:r,cz:o,district:a,seedBase:l,colorIdx:c,bayWindow:h}=n,d=ud(),u=(_,E,b,A,x,T,C,P=0)=>({x:_,y:E,z:b,rotX:P,rotY:A,sx:x,sy:T,sz:C}),f=Math.min(4.2,t*.28),g=t-f,M=Math.max(1,Math.round(g/bi)),m=Math.min(2.6,e*.18),p=Math.min(2.4,bi*.55),y=Math.min(3,bi*.82),S=_=>{const E=_==="north"||_==="south"?e:i,b=E>29?[-.27,.27]:[-.2,.2],A=_==="north"?Math.PI:_==="south"?0:_==="west"?-Math.PI/2:Math.PI/2,x=_==="north"||_==="south",T=_==="north"?-1:_==="south"?1:_==="west"?-1:1,C=(N,W,F)=>x?[r+N,W,o+T*(i*.5+F)]:[r+T*(e*.5+F),W,o+N],P=(N,W)=>{b.forEach((F,Z)=>{const j=$n(l*1e3+oM[_]*100+N*10+Z),ae=m*(.88+j()*.24),re=p*(.88+j()*.24),_e=s+g-re*.5-.35,qe=Math.min(W,_e),[nt,Ke,$]=C(E*F,qe,.055);(j()<.35?d.winLit:d.winUnlit).push(u(nt,Ke,$,A,ae,re,1));const[ue,se,De]=C(E*F,qe-re*.5-.08,.1);if(d.sills.push(u(ue,se,De,x?0:Math.PI/2,ae+.38,.18,.16)),j()<.3){const[We,Be,lt]=C(E*F,qe-re*.5-.35,.28);d.flowerBoxes.push(u(We,Be,lt,x?0:Math.PI/2,ae*.8,.35,.4));for(let He=0;He<3;He++){const[ee,ie,ne]=C(E*F+(He-1)*ae*.22,qe-re*.5-.12,.28);(He%2?d.petals:d.leaves).push(u(ee,ie,ne,0,.14,.14,.14))}}})},[I,V,B]=C(0,s+y*.5,.06);d.doors.push(u(I,V,B,A,Math.min(2.4,E*.13),y,1)),P(0,s+bi*.58);for(let N=1;N<M;N++)P(N,s+bi*N+bi*.58)};if(S("north"),S("south"),S("east"),S("west"),a==="merchant-row"){const _=Math.min(e*.7,10),E=2.2;d.awnings[c%3].push(u(r,s+y+.55,o+i*.5+E*.5-.15,0,_,E,1,-Math.PI/2))}if(h){const _=Math.min(3.2,e*.4),E=bi*.95,b=.8;d.bays.push(u(r,s+E*.5,o+i*.5+b*.5-.05,0,_,E,b))}return d}const lM=n=>-n,gs={x:13,y:12,z:18},wo=2,Vu=(n,e)=>Math.max(-e,Math.min(e,n));function cM(n,e){const t=Vu(n,Ea),i=Vu(e,wa);return{look:[t,wo,i],cam:[t+gs.x,wo+gs.y,i+gs.z]}}function uM(n,e,t,i,s){if(t||s)return e;if(i<=0)return n;const r=1-Math.exp(-i*5);return[n[0]+(e[0]-n[0])*r,n[1]+(e[1]-n[1])*r]}function hM(n,e,t){if(t<=0)return n;const i=Math.atan2(Math.sin(e-n),Math.cos(e-n)),s=i*(1-Math.exp(-t*1.25)),r=i-s;return n+s+Math.sign(r)*Math.max(0,Math.abs(r)-1.35)}const wt=n=>new ws({color:n}),Ci=wt(9262134),en=wt(5189671),eo=wt(16773071),Wu=wt(16112046),dM=wt(1670008),to=wt(13200951),fM=wt(14657867),pM=wt(4948573);function Ft(n,e,t,i=Ci){const s=new J(new je(n,e,t),i);return s.castShadow=s.receiveShadow=!0,s}function pn(n,e,t=Ci,i=10){const s=new J(new xt(n,n,e,i),t);return s.castShadow=s.receiveShadow=!0,s}function ze(n,e,t,i,s){return e.position.set(t,i,s),n.add(e),e}class mM{constructor(){fe(this,"group",new ut);fe(this,"meg",new ut);fe(this,"pip",new ut);fe(this,"tail",new ut);fe(this,"clock",0);fe(this,"disposed",!1);fe(this,"furniture",new Map);fe(this,"facing",0);fe(this,"lastHome",!1);this.group.name="Meg attic room",this.makeRoom(),this.makeBasics(),this.makeStations(),this.makeMeg(),this.makePumpkin(),this.makeFurniture(),this.group.visible=!1}update(e,t,i){if(this.disposed)return;const s=e,r=s.mode==="home";if(this.group.visible=r,!r){this.lastHome=!1;return}const o=Math.min(.05,Math.max(0,t||.016));this.clock+=o;const a=s.homePosition||{x:0,z:0},l=new L(Ys.clamp(a.x,-7.5,7.5),0,Ys.clamp(a.z,-5.5,5.5));this.lastHome?this.meg.position.lerp(l,1-Math.exp(-o*14)):this.meg.position.copy(l),this.lastHome=!0;const c=s.homeFacing;typeof c=="number"?this.facing=c:l.distanceToSquared(this.meg.position)>.001&&(this.facing=Math.atan2(l.x-this.meg.position.x,l.z-this.meg.position.z)),this.meg.rotation.y=this.facing;const h=l.distanceTo(this.meg.position)>.035;this.meg.children.filter(f=>f.name==="limb").forEach((f,g)=>f.rotation.x=i?0:Math.sin(this.clock*11+g*Math.PI)*(h?.55:.08)),this.meg.position.y=i?0:h?Math.abs(Math.sin(this.clock*11))*.045:Math.sin(this.clock*2)*.018;const d=this.meg.position.clone().add(new L(-Math.sin(this.facing)*1.25,0,-Math.cos(this.facing)*1.25));d.x=Ys.clamp(d.x,-7.3,7.3),d.z=Ys.clamp(d.z,-5.3,5.3),this.pip.position.lerp(d,1-Math.exp(-o*4)),this.pip.lookAt(this.meg.position.x,0,this.meg.position.z);const u=this.meg.position.distanceToSquared(new L(4,0,3))<2.7;this.pip.position.y=!i&&u?Math.sin(this.clock*6)*.075:0,this.tail.rotation.z=i?.12:Math.sin(this.clock*(u?5:2))*.34,this.furniture.forEach((f,g)=>f.visible=s.profile.furniture.includes(g))}dispose(){if(this.disposed)return;this.disposed=!0;const e=new Set,t=new Set,i=new Set;this.group.traverse(s=>{const r=s;r.geometry&&e.add(r.geometry),(r.material?Array.isArray(r.material)?r.material:[r.material]:[]).forEach(a=>{t.add(a),Object.values(a).forEach(l=>{l instanceof Wt&&i.add(l)})})}),e.forEach(s=>s.dispose()),t.forEach(s=>s.dispose()),i.forEach(s=>s.dispose()),this.group.clear()}makeRoom(){const e=Ft(18,.25,14,Ci);ze(this.group,e,0,-.13,0);for(let s=-6;s<=6;s+=1){const r=Ft(17.8,.012,.035,en);ze(this.group,r,0,.01,s+.5)}const t=Ft(18,8,.22,Wu);ze(this.group,t,0,4,-7);const i=Ft(.22,8,14,Wu);ze(this.group,i,4,4,0),i.position.x=-9;for(const[s,r,o,a]of[[-8.65,0,.34,14],[0,-6.65,18,.34],[0,-3.9,18,.25]])ze(this.group,Ft(o,.28,a,en),s,7.55,r);for(const s of[-8.4,-4.4,0,4.4,8.4]){const r=Ft(.32,7.6,.35,en);r.rotation.z=s/34,ze(this.group,r,s,3.8,-6.75)}this.makeWindow()}makeWindow(){const e=new ut;ze(this.group,e,2.3,4.7,-6.78);const t=new J(new ln(3.2,2.45),new Nn({color:16764813}));t.position.z=.02,e.add(t);for(const[s,r,o,a]of[[0,0,3.45,.17],[0,0,.16,2.6],[-1.65,0,.16,2.6],[1.65,0,.16,2.6],[0,1.22,3.45,.16]])ze(e,Ft(o,a,.12,en),s,r,.08);for(const s of[-2,2]){const r=new J(new xt(.45,.56,2.65,8),wt(8559016));r.scale.z=.28,ze(e,r,s,0,.22)}const i=Ft(4.5,.18,.55,Ci);ze(e,i,0,-1.38,.32)}makeBasics(){const e=new ut;ze(this.group,e,5.8,0,4.65),ze(e,Ft(4.2,.35,2.6,en),0,.55,0),ze(e,Ft(4,.32,2.35,wt(10249076)),0,.9,0),ze(e,Ft(4.25,2.25,.22,en),0,1.5,1.16),ze(e,Ft(1.55,.26,.8,eo),-.9,1.2,-.55),[[-1.8,-1],[1.8,-1],[-1.8,1],[1.8,1]].forEach(([s,r])=>ze(e,pn(.12,.65,en),s,.25,r));const t=new ut;ze(this.group,t,-5,0,-3),ze(t,Ft(3.3,.22,1.55,Ci),0,1.75,0),[-1.35,1.35].forEach(s=>[-.58,.58].forEach(r=>ze(t,pn(.11,1.7,en),s,.85,r))),ze(t,Ft(.9,.72,1.15,en),-1.05,1.25,0),ze(t,Ft(.62,.12,.88,wt(15982509)),.55,1.93,.03);const i=new ut;ze(this.group,i,-4.2,0,-1.45),ze(i,pn(.48,.16,wt(7314849)),0,1,0),ze(i,pn(.13,1,en),0,.5,0)}makeStations(){const e=new ut;ze(this.group,e,5,0,-3),ze(e,Ft(2.2,.16,.46,en),0,2.55,0),[-.75,0,.75].forEach(s=>{const r=pn(.06,2.35,Ci);r.rotation.z=-.16+s*.1,ze(e,r,s,1.25,0),ze(e,new J(new Zt(.29,.52,7),to),s-.14,.28,0)});const t=new ut;ze(this.group,t,-5,0,3),ze(t,pn(.48,1.15,en),0,.58,0),ze(t,Ft(1.25,.14,.9,wt(6065798)),0,1.2,0),t.rotation.y=-.25;const i=new J(new xt(1.15,1.3,.16,16),wt(14262655));ze(this.group,i,4,.08,3),Ku.forEach(s=>this.group.add(this.label(s.id==="jobs"?"POST":s.id==="decor"?"HOME":s.id.toUpperCase(),s.x,3.3,s.z)))}makeMeg(){const e=this.meg;e.name="Meg",this.group.add(e),ze(e,new J(new ht(.34,12,10),wt(16761758)),0,1.52,0);const t=new J(new ht(.38,12,10,0,Math.PI*2,0,Math.PI*.55),wt(9323307));ze(e,t,0,1.7,.01);const i=new ut;ze(e,i,0,1.94,0),ze(i,new J(new xt(.48,.48,.12,12),wt(4534349)),0,0,0);const s=new J(new Zt(.3,.82,12),wt(4534349));s.rotation.z=-.18,ze(i,s,.06,.39,0),ze(e,new J(new Zt(.48,1.05,12),dM),0,.84,0);for(const[r,o]of[[-.22,.08],[.22,.08]]){const a=pn(.09,.55,en);a.name="limb",ze(e,a,r,.3,o);const l=pn(.075,.58,wt(16761758));l.name="limb",l.rotation.z=r*1.8,ze(e,l,r*1.5,1.06,0)}}makePumpkin(){const e=this.pip;e.name="Pumpkin",this.group.add(e),ze(e,new J(new ht(.43,12,9),eo),0,.48,0),ze(e,new J(new ht(.34,12,9),eo),0,.76,.28);for(const r of[-.2,.2]){const o=new J(new Zt(.16,.36,4),to);ze(e,o,r,1.12,.26);const a=new J(new ht(.045,8,6),wt(2893616));ze(e,a,r*.72,.8,.59)}const t=Ft(.18,.42,.08,to);t.rotation.z=Math.PI/2,ze(e,t,0,.86,.58);const i=new ut;this.tail=i,ze(e,i,0,.51,-.38);const s=new J(new yn(.34,.07,6,12,Math.PI*1.4),to);s.rotation.x=Math.PI/2,ze(i,s,0,.36,-.22)}makeFurniture(){const e=(t,i,s,r)=>{const o=r();o.position.set(i,0,s),o.visible=!1,this.group.add(o),this.furniture.set(t,o)};e("rug",0,-.2,()=>{const t=new J(new xt(2.1,2.1,.05,20),wt(7508365));return t.position.y=.035,t}),e("plant",-7,4.6,()=>{const t=new ut;ze(t,pn(.38,.7,wt(13273941)),0,.35,0);for(let i=0;i<6;i++){const s=new J(new ht(.35,8,6),pM);ze(t,s,Math.sin(i)*.28,1+Math.abs(Math.cos(i))*.25,Math.cos(i)*.28)}return t}),e("shelf",-7.7,-2.2,()=>{const t=new ut;ze(t,Ft(.55,3.1,2.2,en),0,1.55,0);for(let i=.6;i<3;i+=.75)ze(t,Ft(.7,.1,2.1,Ci),0,i,0);return t}),e("lamp",1.8,-4.8,()=>{const t=new ut;ze(t,pn(.1,2.2,fM),0,1.1,0);const i=new J(new Zt(.52,.48,12,1,!0),eo);return ze(t,i,0,2.1,0),t}),e("cushion",1.4,3.5,()=>{const t=new J(new ht(.6,12,7),wt(13858182));return t.scale.y=.32,t.position.y=.18,t}),e("cat-tree",7,2.5,()=>{const t=new ut;return ze(t,pn(.17,2.5,wt(13610617)),0,1.25,0),ze(t,pn(.72,.16,wt(13605991)),0,2.45,0),t})}label(e,t,i,s){const r=document.createElement("canvas");r.width=256,r.height=92;const o=r.getContext("2d");o.fillStyle="#3f2b35",o.roundRect(4,4,248,84,18),o.fill(),o.strokeStyle="#f7d688",o.lineWidth=5,o.roundRect(4,4,248,84,18),o.stroke(),o.fillStyle="#fff3cf",o.font="bold 36px sans-serif",o.textAlign="center",o.textBaseline="middle",o.fillText(e,128,48);const a=new nm(new Uh({map:new cr(r),transparent:!0}));return a.position.set(t,i,s),a.scale.set(1.7,.62,1),a}}function gM(n,e,t){const i=n.mode==="flight"||n.mode==="tutorial",s=Math.hypot(n.player.velocity.x,n.player.velocity.y,n.player.velocity.z),r=i&&!n.paused&&!t;return{bob:r&&n.player.hover&&s<.3?Math.sin(e*1.5)*.035:0,speed:r?Math.min(1,Math.max(0,(s-5)/16.6)):0}}class xM{constructor(e){fe(this,"element",document.createElement("div"));this.element.className="flight-effects",this.element.setAttribute("aria-hidden","true");for(let t=0;t<14;t++){const i=document.createElement("i"),s=t*Math.PI*2/14;i.style.left=`${50+Math.cos(s)*43}%`,i.style.top=`${50+Math.sin(s)*43}%`,i.style.setProperty("--angle",`${s}rad`),i.style.animationDelay=`${-t*.17}s`,this.element.append(i)}e.insertAdjacentElement("afterend",this.element)}update(e,t){this.element.hidden=e<=0,this.element.style.setProperty("--speed",e.toFixed(3)),this.element.classList.toggle("low-quality",t)}dispose(){this.element.remove()}}const _M=[15907014,11063528,15915176,13154528];function Xu(n){const e=new J(new je(n.max.x-n.min.x,n.max.y-n.min.y,n.max.z-n.min.z));return e.position.set((n.min.x+n.max.x)/2,(n.min.y+n.max.y)/2,(n.min.z+n.max.z)/2),e}class vM{constructor(e){fe(this,"scene",new Kp);fe(this,"camera",new cn(62,1,.1,900));fe(this,"renderer");fe(this,"effects");fe(this,"hero",new ut);fe(this,"dropParcel",new ut);fe(this,"glowColumn",new ut);fe(this,"glowMats",[]);fe(this,"lastGlowStopId");fe(this,"targetRing",new ut);fe(this,"clouds",new ut);fe(this,"birds",new ut);fe(this,"boats",[]);fe(this,"clock",0);fe(this,"camPos",new L(0,27,145));fe(this,"camLook",new L(0,18,90));fe(this,"homeLook",new L(0,wo,0));fe(this,"ray",new jm);fe(this,"blockers",[]);fe(this,"outlines",[]);fe(this,"beamGroup",null);fe(this,"beamLight",null);fe(this,"lighthouseLit",!0);fe(this,"sun");fe(this,"disposed",!1);fe(this,"lastMode");fe(this,"lastWidth",-1);fe(this,"lastHeight",-1);fe(this,"lastPixelRatio",-1);fe(this,"followYaw",0);fe(this,"world");fe(this,"water",null);fe(this,"room",new mM);fe(this,"outdoorFog",new vo(12180704,.0035));fe(this,"birdFlock",[]);this.renderer=new $v({canvas:e,antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.effects=new xM(e),this.renderer.outputColorSpace=$t,this.renderer.toneMapping=Ul,this.renderer.toneMappingExposure=1.12,this.renderer.setClearColor(11459048),this.scene.fog=new vo(12180704,.0035),this.camera.position.copy(this.camPos);const t=new qm(14283263,13074296,2.35);this.scene.add(t),this.sun=new Km(16765344,2.5),this.sun.position.set(-80,115,48),this.scene.add(this.sun),this.world=this.makeWorld(),this.scene.add(this.world,this.hero,this.dropParcel,this.glowColumn,this.targetRing,this.clouds,this.birds,this.room.group),this.makeHero(),this.makeDropParcel(),this.makeGlowColumn(),this.makeSkyLife(),this.resize()}resize(){this.lastWidth=-1}render(e,t,i){if(this.disposed)return;const s=e.paused?0:Math.min(.05,Math.max(0,t));this.clock+=s,this.water&&!i.reducedMotion&&this.water.update(this.clock);const r=gM(e,this.clock,i.reducedMotion);this.effects.update(r.speed,i.lowQuality);const o=this.renderer.domElement,a=Math.max(1,o.clientWidth||o.width),l=Math.max(1,o.clientHeight||o.height),c=i.lowQuality?1e6:2e6,h=Math.min(devicePixelRatio||1,Math.sqrt(c/(a*l)));(a!==this.lastWidth||l!==this.lastHeight||h!==this.lastPixelRatio)&&(this.renderer.setPixelRatio(h),this.renderer.setSize(a,l,!1),this.camera.aspect=a/l,this.camera.updateProjectionMatrix(),this.lastWidth=a,this.lastHeight=l,this.lastPixelRatio=h),this.renderer.shadowMap.enabled=!i.lowQuality,this.outlines.forEach(m=>{m.visible=!i.lowQuality});const d=e.mode==="home";if([this.world,this.hero,this.dropParcel,this.glowColumn,this.targetRing,this.clouds,this.birds].forEach(m=>m.visible=!d),this.room.update(e,s,i.reducedMotion),d){this.scene.fog=null,this.renderer.setClearColor(14010030),this.camera.fov=48,this.camera.updateProjectionMatrix();const m=e.homePosition||{x:0,z:0},p=cM(m.x,m.z),y=uM([this.homeLook.x,this.homeLook.z],[p.look[0],p.look[2]],this.lastMode!=="home",s,i.reducedMotion);this.homeLook.set(y[0],wo,y[1]),this.camera.position.set(this.homeLook.x+gs.x,this.homeLook.y+gs.y,this.homeLook.z+gs.z),this.camera.up.set(0,1,0),this.camera.lookAt(this.homeLook),this.lastMode=e.mode,this.renderer.render(this.scene,this.camera);return}this.camera.fov!==62&&(this.camera.fov=62,this.camera.updateProjectionMatrix()),this.scene.fog=this.outdoorFog,this.renderer.setClearColor(11459048);const u=e.player.position,f=new L(u.x,u.y,u.z),g=this.lastMode===void 0||this.lastMode!==e.mode;this.hero.position.copy(f),this.hero.rotation.order="YXZ",this.hero.rotation.y=lM(e.player.yaw),this.hero.rotation.x=e.player.pitch*.4,this.hero.rotation.z=0,this.hero.scale.setScalar(e.mode==="title"||e.mode==="summary"?.86:.62),this.hero.position.y+=r.bob,this.animateSky(i.reducedMotion,s),this.updateBeacon(this.destination(e),i.reducedMotion||e.paused?0:s),this.updateGlowColumn(e,i.reducedMotion),this.updateDropParcel(e,i.reducedMotion?0:s,i.reducedMotion),this.updateCamera(e,f,s,i.reducedMotion,g),this.lastMode=e.mode;const M=e.run?Math.min(1,e.run.elapsed/480):.1;this.sun.color.setHSL(.095-M*.08,.9,.78),this.sun.intensity=2.5-M*.45,this.scene.fog.color.setHSL(.55-M*.48,.42,.82-M*.12),this.renderer.render(this.scene,this.camera)}dispose(){this.effects.dispose(),this.disposed=!0,this.scene.traverse(e=>{const t=e;t.geometry&&t.geometry.dispose();const i=t.material;(Array.isArray(i)?i:[i]).forEach(s=>s==null?void 0:s.dispose())}),this.renderer.dispose()}makeWorld(){const e=new ut,t=oe(16772548),i=Qv();this.water=i,e.add(i.mesh);const s=new ln(440,440,200,200);s.rotateX(-Math.PI/2);const r=s.attributes.position;for(let g=0;g<r.count;g++)r.setY(g,bn(r.getX(g),r.getZ(g)));s.computeVertexNormals();const o=1024,a=document.createElement("canvas");a.width=o,a.height=o;const l=a.getContext("2d"),c=l.createImageData(o,o);c.data.set(Hd(o)),l.putImageData(c,0,0);const h=new cr(a);h.colorSpace=$t,h.anisotropy=4;const d=oe(16777215);d.map=h;const u=new J(s,d);e.add(u);for(const g of Ro){if(g.kind==="bridge")continue;const M=uo(vs(g.a)),m=uo(vs(g.b)),p=new L((M.x+m.x)/2,(M.y+m.y)/2+.15,(M.z+m.z)/2),y=new yo([new L(M.x,M.y+.18,M.z),p,new L(m.x,m.y+.18,m.z)]),S=g.kind==="switchback"?2.2:2.8;e.add(new J(new ms(y,24,S,8,!1),t));const _=[],E=y.getLength();for(let b=0;b<E-2;b+=4)_.push(y.getPointAt(b/E),y.getPointAt(Math.min(1,(b+2)/E)));for(let b=0;b<_.length;b+=2){const A=new yo([_[b],_[b+1]]);e.add(new J(new ms(A,4,.12,6,!1),oe(16774872)))}}tM(e);const f=oe(10117447);return[[-15,50],[-15,70],[-15,90]].forEach(([g,M])=>{const m=new J(new je(24,.7,8),f);m.position.set(g,.8,M),e.add(m)}),[[50,60],[50,80],[50,100]].forEach(([g,M])=>{const m=new J(new je(24,.7,8),f);m.position.set(g,.8,M),e.add(m)}),this.makeBuildings(e),this.makeGreenery(e),this.makeLighthouse(e),this.makeClockTower(e),this.makeObservatoryDome(e),this.makeBakeryDormer(e),this.makeMansionTerraces(e),this.makeBoats(e),this.makeLaundryLines(e),this.makeDockDressing(e),this.makeStreetLamps(e),this.makePark(e),e}makePark(e){const[t,i,s,r]=Fn,o=(t+s)/2,a=(i+r)/2,l=bn(o,a),c=new J(new ln(s-t,r-i),oe(8367708));c.rotation.x=-Math.PI/2,c.position.set(o,l+.1,a),e.add(c);const h=new Nt,d=new an(new xt(.35,.55,4,7),oe(7621174),ya.length),u=new an(new Eo(2.6,1),oe(5085035),ya.length);ya.forEach((_,E)=>{const b=bn(_.x,_.z);h.rotation.set(0,E*2.39996,0),h.scale.setScalar(_.s),h.position.set(_.x,b+2*_.s,_.z),h.updateMatrix(),d.setMatrixAt(E,h.matrix),h.position.set(_.x,b+5.5*_.s,_.z),h.updateMatrix(),u.setMatrixAt(E,h.matrix)}),d.instanceMatrix.needsUpdate=!0,u.instanceMatrix.needsUpdate=!0,e.add(d,u);const f=oe(15260864);for(const _ of nM){const E=new J(new je(_.x1-_.x0,.2,_.z1-_.z0),f);E.position.set((_.x0+_.x1)/2,l+.15,(_.z0+_.z1)/2),e.add(E)}const g=iM,M=new ws({color:13625572,transparent:!0,opacity:.5}),m=new J(new je(g.w,g.h,g.d),M);m.position.set(g.x,l+g.h/2,g.z),e.add(m);const p=g.d/2,y=new J(new ht(p,16,10,0,Math.PI*2,0,Math.PI/2),M);y.position.set(g.x,l+g.h,g.z),e.add(y);const S=oe(8030858);for(let _=0;_<6;_++){const E=new J(new yn(p,.15,6,12,Math.PI),S);E.position.set(g.x,l+g.h,g.z),E.rotation.y=_/6*Math.PI,e.add(E)}}makeLaundryLines(e){const t=oe(4865845),i=[oe(16747434),oe(8370408),oe(16777215),oe(16767306),oe(10147455)],s=[[-25,9,-50,-20,9,-32],[5,11,-50,15,11,-45],[-20,8,-22,15,8,-28]],r=$n(42);s.forEach(([o,a,l,c,h,d])=>{const u=new L(o,a,l),f=new L(c,h,d),g=u.distanceTo(f),M=12;let m=u.clone();for(let y=1;y<=M;y++){const S=y/M,_=u.clone().lerp(f,S);_.y-=Math.sin(S*Math.PI)*.8;const E=m.distanceTo(_),b=new J(new xt(.03,.03,E,4),t);b.position.copy(m).lerp(_,.5),b.lookAt(_),b.rotateX(Math.PI/2),e.add(b),m=_}const p=Math.floor(g/3);for(let y=0;y<p;y++){const S=(y+.7)/(p+.4),_=u.clone().lerp(f,S);_.y-=Math.sin(S*Math.PI)*.8;const E=.9+r()*.5,b=1.1+r()*.5,A=new J(new ln(E,b),i[Math.floor(r()*i.length)]);A.position.set(_.x,_.y-b/2,_.z),A.rotation.y=Math.atan2(f.x-u.x,f.z-u.z)+Math.PI/2,A.material.side=nn,e.add(A)}})}makeDockDressing(e){const t=oe(11040318),i=oe(8016432),s=oe(13218953),r=[[-15,50],[-15,70],[-15,90],[50,60],[50,80],[50,100]],o=$n(7);r.forEach(([a,l])=>{const c=2+Math.floor(o()*3);for(let d=0;d<c;d++){const u=1.1+o()*.5,f=new J(new je(u,u,u),t);f.position.set(a-10+o()*20,1.15+u/2+(d===2?1.4:0),l-3+o()*6),f.rotation.y=o()*.6,f.castShadow=!0,e.add(f)}for(let d=0;d<2;d++){const u=new J(new xt(.65,.65,1.5,10),i);u.position.set(a-8+o()*16,1.9,l-2.5+o()*5),u.castShadow=!0,e.add(u)}const h=new J(new yn(.55,.18,8,16),s);h.position.set(a-6+o()*12,1.25,l-2+o()*4),h.rotation.x=Math.PI/2,e.add(h)})}makeStreetLamps(e){const t=oe(3816002),i=oe(16767370);[[-70,30],[-62,42],[-78,48],[-92,12],[-92,20],[-47,24],[-47,32],[-10,-40],[10,-40],[-10,-55],[10,-55]].forEach(([r,o])=>{const l=new J(new xt(.12,.16,4.2,8),t);l.position.set(r,0+2.1,o),l.castShadow=!0,e.add(l);const c=new J(new Zt(.45,.35,8),t);c.position.set(r,0+4.55,o),e.add(c);const h=new J(new ht(.32,10,8),i);h.position.set(r,0+4.2,o),e.add(h)})}makeBoats(e){const t=oe(9132604),i=oe(5996454),s=oe(7031343),r=oe(16117985),o=new Ml;o.moveTo(0,4.2),o.quadraticCurveTo(1.7,2.5,1.6,0),o.quadraticCurveTo(1.5,-2.5,1,-3.4),o.quadraticCurveTo(0,-3.8,-1,-3.4),o.quadraticCurveTo(-1.5,-2.5,-1.6,0),o.quadraticCurveTo(-1.7,2.5,0,4.2);const a=new bo(o,{depth:1.1,bevelEnabled:!1});a.rotateX(-Math.PI/2);const l=new Ml;l.moveTo(0,4.5),l.quadraticCurveTo(1.95,2.6,1.85,0),l.quadraticCurveTo(1.75,-2.6,1.15,-3.65),l.quadraticCurveTo(0,-4.1,-1.15,-3.65),l.quadraticCurveTo(-1.75,-2.6,-1.85,0),l.quadraticCurveTo(-1.95,2.6,0,4.5);const c=new vl;c.moveTo(0,3.9),c.quadraticCurveTo(1.45,2.4,1.35,0),c.quadraticCurveTo(1.25,-2.4,.85,-3.15),c.quadraticCurveTo(0,-3.5,-.85,-3.15),c.quadraticCurveTo(-1.25,-2.4,-1.35,0),c.quadraticCurveTo(-1.45,2.4,0,3.9),l.holes.push(c);const h=new bo(l,{depth:.28,bevelEnabled:!1});h.rotateX(-Math.PI/2),[[-15,58,.08],[-15,78,-.06],[-15,98,.1],[50,68,-.08],[50,88,.06],[50,108,-.1]].forEach(([u,f,g],M)=>{const m=new ut,p=M%2?i:t,y=new J(a,p);y.position.y=1.1,m.add(y);const S=new J(h,s);S.position.y=1.1,m.add(S);const _=new J(new xt(.12,.16,5.5,6),s);_.position.y=3.8,m.add(_);const E=new J(new je(.3,3.6,1.7),r);E.position.set(0,3.3,-1.2),m.add(E),m.position.set(u,.1,f),m.rotation.y=g,m.userData.phase=M*1.3,m.userData.baseY=.1,e.add(m),this.boats.push(m)})}makeBuildings(e){const t=ud(),i=oe(16768938),s=oe(3501961),r=oe(16767370),o=oe(7358008),a=oe(5085035),l=oe(16747434),c=(u,f,g,M,m,p,y,S,_,E,b,A)=>{const x=Math.min(4.2,f*.28),T=new J(new je(u,f-x,g),oe(b));T.position.set(m,M+(f-x)*.5,p),T.castShadow=!0,T.receiveShadow=!0,e.add(T);const C=u*.5,P=g*.5,I=f*.5-x,V=new L(m,M+f*.5,p),B=new Gt;B.setAttribute("position",new vt([-C,I,-P,C,I,-P,0,f*.5,0,C,I,-P,C,I,P,0,f*.5,0,C,I,P,-C,I,P,0,f*.5,0,-C,I,P,-C,I,-P,0,f*.5,0],3)),B.setIndex([0,2,1,3,5,4,6,8,7,9,11,10]),B.computeVertexNormals();const N=new J(B,oe(A));N.position.copy(V),N.castShadow=!0,e.add(N),rM(t,aM({sx:u,sy:f,sz:g,minY:M,cx:m,cz:p,district:y,seedBase:S,colorIdx:_,bayWindow:E}))};mn.forEach((u,f)=>{const g=u.max.x-u.min.x,M=u.max.y-u.min.y,m=u.max.z-u.min.z,p=new L((u.min.x+u.max.x)/2,(u.min.y+u.max.y)/2,(u.min.z+u.max.z)/2),y=Xu(u);if(this.blockers.push(y),f===vc||f===Mc||f===yc)return;const S=u.district&&yr[u.district]||yr["old-town"];c(g,M,m,u.min.y,p.x,p.z,u.district??"old-town",f,f,!1,S.bodies[f%S.bodies.length],S.roofs[f%S.roofs.length]),u.district==="bungalow-lanes"&&this.makePicketFence(e,u,f),u.district==="mansion-hill"&&this.makeWalledGarden(e,u,f)});const h=nh(),d=ih(h);h.forEach((u,f)=>{const g=bn(u.x+u.w/2,u.z+u.d/2),M=yr[u.district]||yr["old-town"],m=u.palette===0?M.bodies[f%M.bodies.length]:_M[u.palette-1];c(u.w,u.h,u.d,g,u.x+u.w/2,u.z+u.d/2,u.district,sM+f,f,u.bayWindow,m,M.roofs[f%M.roofs.length]),this.blockers.push(Xu(d[f]))}),this.buildFacadeInstances(e,t,{trimMat:i,glassMat:s,litMat:r,doorMat:o,leafMat:a,petalMat:l})}buildFacadeInstances(e,t,i){const s=new ln(1,1),r=new je(1,1,1),o=new ht(1,6,5),a=new Nt,l=(u,f)=>{f.forEach((g,M)=>{a.position.set(g.x,g.y,g.z),a.rotation.set(g.rotX,g.rotY,0),a.scale.set(g.sx,g.sy,g.sz),a.updateMatrix(),u.setMatrixAt(M,a.matrix)}),u.instanceMatrix.needsUpdate=!0,u.frustumCulled=!1,e.add(u)};if(t.winLit.length){const u=new an(s,i.litMat,t.winLit.length);l(u,t.winLit)}if(t.winUnlit.length){const u=new an(s,i.glassMat,t.winUnlit.length);l(u,t.winUnlit)}if(t.doors.length){const u=new an(s,i.doorMat,t.doors.length);l(u,t.doors)}if(t.sills.length){const u=new an(r,i.trimMat,t.sills.length);l(u,t.sills)}if(t.bays.length){const u=new an(r,i.trimMat,t.bays.length);l(u,t.bays)}if(t.flowerBoxes.length){const u=new an(r,i.doorMat,t.flowerBoxes.length);l(u,t.flowerBoxes)}if(t.petals.length){const u=new an(o,i.petalMat,t.petals.length);l(u,t.petals)}if(t.leaves.length){const u=new an(o,i.leafMat,t.leaves.length);l(u,t.leaves)}const c=new ln(1,1,1,1),h=c.attributes.position;for(let u=0;u<h.count;u++)h.getY(u)<0&&h.setZ(u,-.7);c.computeVertexNormals();const d=[["#e86a6a","#f5f0e1"],["#5b7fa6","#f5f0e1"],["#6aa86a","#f5f0e1"]];t.awnings.forEach((u,f)=>{if(!u.length)return;const[g,M]=d[f%d.length],m=document.createElement("canvas");m.width=128,m.height=16;const p=m.getContext("2d");for(let _=0;_<8;_++)p.fillStyle=_%2?g:M,p.fillRect(_*16,0,16,16);const y=new cr(m);y.colorSpace=$t;const S=new an(c,new ws({map:y,side:nn}),u.length);l(S,u)})}makePicketFence(e,t,i){const s=(t.min.x+t.max.x)/2,r=(t.min.z+t.max.z)/2,o=t.max.x-t.min.x,a=t.max.z-t.min.z,l=t.min.y,c=oe(16117985),h=oe(7031343),d=[oe(16747434),oe(16767306),oe(16777215),oe(15231594)],u=4,f=s-o/2-u,g=s+o/2+u,M=r+a/2+u,m=[[f,M,s-1.2,M],[s+1.2,M,g,M],[f,r-a/2,f,M],[g,r-a/2,g,M]],p=[],y=new Nt;m.forEach(([x,T,C,P])=>{const I=Math.hypot(C-x,P-T),V=Math.max(2,Math.floor(I/.38)),B=Math.atan2(C-x,P-T);for(let Z=0;Z<=V;Z++){const j=Z/V;y.position.set(x+(C-x)*j,l+.55,T+(P-T)*j),y.rotation.set(0,B,0),y.updateMatrix(),p.push(y.matrix.clone())}const N=I,W=new J(new je(.08,.12,N),c);W.position.set((x+C)/2,l+.75,(T+P)/2),W.rotation.y=B,e.add(W);const F=W.clone();F.position.y=l+.35,e.add(F)});const S=new je(.14,1.1,.07),_=new an(S,c,p.length);p.forEach((x,T)=>_.setMatrixAt(T,x)),_.instanceMatrix.needsUpdate=!0,e.add(_);const E=new Zt(.1,.18,4),b=new an(E,c,p.length);p.forEach((x,T)=>{const C=new L().setFromMatrixPosition(x);y.position.set(C.x,C.y+.64,C.z),y.rotation.set(0,Math.PI/4,0),y.updateMatrix(),b.setMatrixAt(T,y.matrix)}),b.instanceMatrix.needsUpdate=!0,e.add(b);const A=$n(i*77+5);[-1,1].forEach(x=>{const T=s+x*3.2,C=r+a/2+2.2,P=new J(new je(3.4,.35,1.8),h);P.position.set(T,l+.18,C),e.add(P);for(let I=0;I<7;I++){const V=new J(new ht(.22,7,6),d[Math.floor(A()*d.length)]);V.position.set(T+(A()-.5)*2.8,l+.55,C+(A()-.5)*1.2),e.add(V);const B=new J(new ht(.18,6,5),oe(5085035));B.position.set(T+(A()-.5)*2.8,l+.42,C+(A()-.5)*1.2),e.add(B)}})}makeWalledGarden(e,t,i){const s=(t.min.x+t.max.x)/2;(t.min.z+t.max.z)/2;const r=t.min.y,o=oe(12103840),a=oe(14209216),l=oe(4033119),c=oe(7031343),h=[oe(16747434),oe(16767306),oe(16777215)],d=s<120;let u,f,g;d?(u=[[109,-21,30,.5],[108,11,28,.5],[124,-5,.5,32]],f=[[109,-19.5,26,.8],[108,9.5,24,.8],[122.5,-5,.8,28]],g=[[104,-17.5],[114,-17.5],[104,7.5],[114,7.5]]):(u=[[136,-1,20,.5],[132.5,31,27,.5],[146,15,.5,32]],f=[[136,.5,16,.8],[132.5,29.5,23,.8],[144.5,15,.8,28]],g=[[131,2.8],[139,2.8],[131,27.2],[139,27.2]]);const M=.9;u.forEach(([y,S,_,E])=>{const b=new J(new je(_,M,E),o);b.position.set(y,r+M/2,S),b.castShadow=!0,e.add(b);const A=new J(new je(_+.15,.12,E+.15),a);A.position.set(y,r+M+.06,S),e.add(A)});const m=1;f.forEach(([y,S,_,E])=>{const b=new J(new je(_,m,E),l);b.position.set(y,r+m/2,S),b.castShadow=!0,e.add(b)});const p=$n(i*131+11);g.forEach(([y,S])=>{const _=new J(new je(3.2,.4,2.4),c);_.position.set(y,r+.2,S),e.add(_);for(let E=0;E<8;E++){const b=new J(new ht(.24,7,6),h[Math.floor(p()*h.length)]);b.position.set(y+(p()-.5)*2.6,r+.6,S+(p()-.5)*1.8),e.add(b)}})}makeGreenery(e){const t=oe(7621174),i=oe(5085035),s=oe(4033119),r=oe(16747434),o=$n(1337),a=(h,d)=>{const u=new ut,f=3+o()*2.5,g=new J(new xt(.35,.55,f,7),t);g.position.y=f/2,u.add(g);const M=o()<.5?i:s,m=new J(new Eo(2.2+o()*1.2,1),M);if(m.position.y=f+1.5,u.add(m),u.position.set(h,bn(h,d),d),u.rotation.y=o()*Math.PI*2,e.add(u),o()<.3){const p=new J(new ht(.28,7,6),r);p.position.set(h+.8,bn(h,d)+.5,d+.6),e.add(p)}};let l=0,c=0;for(;l<260&&c<6e3;){c++;const h=(o()-.5)*400,d=60+o()*160;bc(h,d)&&(Tt.some(u=>Math.hypot(h-u.position.x,d-u.position.z)<24)||Math.hypot(h,d)<145||(a(h,d),l++))}for(l=0,c=0;l<60&&c<3e3;){c++;const h=(o()-.5)*400,d=(o()-.5)*400;bc(h,d)&&(Tt.some(u=>Math.hypot(h-u.position.x,d-u.position.z)<24)||h>Fn[0]&&h<Fn[2]&&d>Fn[1]&&d<Fn[3]||Math.hypot(h,d)<100&&o()<.7||d>60&&Math.hypot(h,d)>=145||(a(h,d),l++))}}makeLighthouse(e){const t=mn[3],i=mn[vc],s=(t.min.x+t.max.x)/2,r=(t.min.z+t.max.z)/2,o=new J(new xt(20,24,9,18),oe(9076594));o.position.set(s,t.min.y+2.5,r),o.castShadow=!0,e.add(o);const a=(i.min.x+i.max.x)/2,l=(i.min.z+i.max.z)/2,c=i.min.y,h=new J(new xt(3.6,5.2,26,16),oe(16773332));h.position.set(a,16+c,l),h.castShadow=!0,e.add(h);const d=p=>5.2-(p-3)*(1.6/26);for(const p of[8,14,20,26]){const y=new J(new xt(d(p+1.1)+.15,d(p-1.1)+.15,2.2,16),oe(13786193));y.position.set(a,p+c,l),e.add(y)}const u=new J(new xt(4.6,4.6,1.2,16),oe(4089472));u.position.set(a,29.6+c,l),e.add(u);const f=new J(new xt(2.6,2.6,3.4,12),new Nn({color:16771501}));f.position.set(a,31.8+c,l),e.add(f);const g=new J(new Zt(3.4,2.6,12),oe(13194062));g.position.set(a,34.8+c,l),e.add(g);const M=new ut;M.position.set(a,31.8+c,l);const m=new Nn({color:16768910,transparent:!0,opacity:.28,depthWrite:!1,side:nn});[0,Math.PI].forEach(p=>{const y=new J(new Zt(3.2,26,12,1,!0),m);y.rotation.z=Math.PI/2,y.rotation.y=p,y.position.set(Math.cos(p)*13,0,-Math.sin(p)*13),M.add(y)}),e.add(M),this.beamGroup=M,this.beamLight=new Zm(16768146,60,90),this.beamLight.position.set(a,32+c,l),e.add(this.beamLight),this.setLighthouseLit(!0)}setLighthouseLit(e){this.lighthouseLit=e,this.beamGroup&&(this.beamGroup.visible=e),this.beamLight&&(this.beamLight.intensity=e?60:0)}makeClockTower(e){const t=mn[Mc],i=(t.min.x+t.max.x)/2,s=(t.min.z+t.max.z)/2,r=t.min.y,o=oe(13935988),a=oe(11951167),l=oe(16768938),c=new J(new je(8,20,8),o);c.position.set(i,r+10,s),c.castShadow=!0,e.add(c);const h=new J(new je(8.6,3,8.6),o);h.position.set(i,r+21.5,s),h.castShadow=!0,e.add(h);const d=oe(2763317),u=[[0,-4.32,Math.PI],[0,4.32,0],[-4.32,0,-Math.PI/2],[4.32,0,Math.PI/2]];for(const[m,p,y]of u){const S=new J(new xt(2.2,2.2,.3,24),new Nn({color:16314584}));S.rotation.x=Math.PI/2,S.rotation.z=y,S.position.set(i+m,r+17,s+p),e.add(S);const _=new Nn({color:2763317}),E=new J(new je(.18,1.1,.1),_);E.position.set(i+m*1.02,r+17.3,s+p*1.02),E.rotation.z=-.6,E.rotation.y=y,e.add(E);const b=new J(new je(.14,1.6,.1),_);b.position.set(i+m*1.02,r+17.2,s+p*1.02),b.rotation.z=.9,b.rotation.y=y,e.add(b);const A=new J(new ln(2.4,2),d);A.position.set(i+m*1.01,r+21.5,s+p*1.01),A.rotation.y=y,e.add(A)}const f=new Zt(6.2,5,4),g=new J(f,a);g.position.set(i,r+25.5,s),g.rotation.y=Math.PI/4,g.castShadow=!0,e.add(g);const M=new J(new ht(.5,10,8),l);M.position.set(i,r+28.2,s),e.add(M);for(const[m,p]of[[-1,-1],[1,-1],[-1,1],[1,1]]){const y=new J(new je(.7,20,.7),l);y.position.set(i+m*3.8,r+10,s+p*3.8),e.add(y)}}makeObservatoryDome(e){const t=mn[yc],i=(t.min.x+t.max.x)/2,s=(t.min.z+t.max.z)/2,r=t.min.y,o=oe(9079442),a=oe(6064762),l=new J(new xt(4.5,4.8,3,18),o);l.position.set(i,r+1.5,s),l.castShadow=!0,e.add(l);const c=new J(new ht(4.5,20,12,0,Math.PI*2,0,Math.PI/2),a);c.position.set(i,r+3,s),c.castShadow=!0,e.add(c);const h=new J(new je(1.2,3.5,.4),oe(1710629));h.position.set(i,r+4.85,s+4.1),h.rotation.x=-.25,e.add(h);const d=new J(new ht(.4,8,6),oe(9071162));d.position.set(i,r+7.7,s),e.add(d)}makeBakeryDormer(e){const t=mn[0],i=(t.min.x+t.max.x)/2,s=(t.min.z+t.max.z)/2,r=i,o=s-8,a=t.max.x-t.min.x,l=t.max.y-t.min.y,c=t.max.z-t.min.z,h=Math.min(4.2,l*.28),d=Math.max(0,Math.min(1-Math.abs(r-i)/(a/2),1-Math.abs(o-s)/(c/2))),u=t.max.y-h+d*h,f=oe(16049320),g=oe(9132602),M=new J(new je(4.5,2.6,3),f);M.position.set(r,u+1.3,o),M.castShadow=!0,e.add(M);const m=new J(new ln(2.6,1.6),new Nn({color:16767114}));m.position.set(r,u+1.3,o+1.52),e.add(m);const p=new J(new je(3,2,.15),g);p.position.set(r,u+1.3,o+1.45),e.add(p),m.position.z=o+1.54;const y=new Gt;y.setAttribute("position",new vt([-2.45,0,-1.7,2.45,0,-1.7,0,.2,0,2.45,0,-1.7,2.45,0,1.7,0,.2,0,2.45,0,1.7,-2.45,0,1.7,0,.2,0,-2.45,0,1.7,-2.45,0,-1.7,0,.2,0],3)),y.setIndex([0,2,1,3,5,4,6,8,7,9,11,10]),y.computeVertexNormals();const S=new J(y,g);S.position.set(r,u+2.6,o),S.castShadow=!0,e.add(S)}makeMansionTerraces(e){const t=oe(10132114),i=oe(6989930),s=(r,o,a,l,c,h)=>{const d=l-a,u=new J(new je(o-r,d,h-c),t);u.position.set((r+o)/2,a+d/2,(c+h)/2),u.castShadow=!0,u.receiveShadow=!0,e.add(u);const f=new J(new je(o-r-.6,.25,h-c-.6),i);f.position.set((r+o)/2,l+.12,(c+h)/2),f.receiveShadow=!0,e.add(f)};for(const r of[17,18]){const o=mn[r],a=o.min.y;s(o.min.x,o.max.x,a,a+1.5,o.max.z,o.max.z+4.5),s(o.min.x+4,o.max.x-4,a,a+3,o.max.z+2.25,o.max.z+4.5)}}makeHero(){const e=new Nn({color:3746621,side:jt}),t=(l,c,h,d)=>{const u=new J(l,c);u.position.set(h.x,h.y,h.z),d&&u.scale.set(d.x,d.y,d.z),this.hero.add(u);const f=new J(l,e);return f.scale.setScalar(1.045),u.add(f),this.outlines.push(f),u},i=t(new xt(.16,.21,8.6,10),oe(8736825),{x:0,y:.15,z:.35});i.rotation.x=Math.PI/2;const s=t(new yn(.62,.105,7,14,Math.PI*1.25),oe(7946799),{x:0,y:.58,z:-4.05});s.rotation.z=Math.PI*.18,[3,3.3].forEach(l=>t(new yn(.34,.1,6,12),oe(5583662),{x:0,y:.15,z:l}));for(let l=0;l<21;l++){const c=(l-10)/10,h=new Vh(new L(c*.25,.15,3),new L(c*1.5,-.05+Math.cos(l)*.16,5.8-Math.abs(c)*.35));t(new ms(h,1,.11,5,!1),oe(l%2?13869914:15780216),{x:0,y:0,z:0})}t(new Zt(1.75,4.3,9),oe(1535606),{x:0,y:4,z:-.25}),t(new ht(1.15,14,10),oe(16762531),{x:0,y:6.5,z:-.35}),t(new Zt(2.05,4.6,11),oe(2443608),{x:0,y:9,z:-.35}),t(new yn(1.55,.28,7,16),oe(2443608),{x:0,y:7.25,z:-.35},{x:1,y:1,z:1}).rotation.x=Math.PI/2,[-1,1].forEach(l=>{const c=t(new xt(.34,.48,2.2,7),oe(2443608),{x:l*.72,y:2.35,z:.05});c.rotation.z=l*.36;const h=t(new xt(.28,.35,1.75,7),oe(2443608),{x:l*1.12,y:1.15,z:-.08});h.rotation.z=-l*.62,t(new ht(.46,8,7),oe(5716276),{x:l*1.48,y:.52,z:-.47},{x:1,y:.65,z:1.45})}),[-.75,-.38,.38,.75].forEach((l,c)=>t(new ht(.45,8,7),oe(10308914),{x:l,y:6.75-c%2*.42,z:-1.15})),[-.4,.4].forEach(l=>t(new ht(.14,8,7),oe(2504770),{x:l,y:6.65,z:-1.43}));const r=oe(15914671);t(new ht(1.02,12,9),r,{x:0,y:2,z:1.48}),t(new ht(.78,12,9),r,{x:0,y:2.78,z:2.08}),[-.48,.48].forEach(l=>t(new Zt(.38,.78,3),oe(14721900),{x:l,y:3.55,z:2.2})),[-.26,.26].forEach(l=>t(new ht(.12,7,6),oe(2572625),{x:l,y:2.88,z:2.88})),[-.42,.42].forEach(l=>t(new ht(.19,7,6),r,{x:l,y:1.27,z:2.12},{x:1,y:.7,z:1.15}));const o=t(new yn(.79,.075,6,12),oe(12929874),{x:0,y:2.45,z:2.06});o.rotation.x=Math.PI/2;const a=t(new yn(1,.17,7,12,Math.PI*.8),oe(15914671),{x:0,y:2,z:.95});a.rotation.x=Math.PI/2}makeSkyLife(){const e=oe(16776171);for(let t=0;t<12;t++){const i=new ut;for(let s=0;s<4;s++){const r=new J(new ht(3+s%2*1.5,10,7),e);r.position.set(s*3,Math.sin(s)*.8,0),i.add(r)}i.position.set(-190+t*47%380,38+t%4*16,-155+t*71%320),this.clouds.add(i)}this.makeBirds()}makeBirds(){const e=oe(16119280),t=oe(14277081),i=oe(15242044),s=$n(1234);for(let r=0;r<12;r++){const o=new ut,a=new J(new ht(.45,10,8),e);a.scale.set(.7,.6,1.6),o.add(a);const l=new J(new ht(.26,10,8),e);l.position.set(0,.22,.75),o.add(l);const c=new J(new Zt(.09,.35,8),i);c.position.set(0,.18,1.05),c.rotation.x=Math.PI/2,o.add(c);const h=new J(new je(.5,.07,.6),t);h.position.set(0,.05,-.85),o.add(h);const d=g=>{const M=new ut;M.position.set(g*.28,.12,.1);const m=new J(new je(1.5,.07,.65),t);m.position.x=g*.85;const p=new J(new je(.7,.06,.45),t);return p.position.x=g*1.85,M.add(m,p),o.add(M),M},u=d(-1),f=d(1);o.position.set(-30+s()*80,28+s()*12,45+s()*55),this.birds.add(o),this.birdFlock.push({group:o,left:u,right:f,vel:new L((s()-.5)*8,0,(s()-.5)*8),phase:s()*Math.PI*2})}}updateBirds(e){const t=this.birdFlock.length;if(!t||e<=0)return;const i=14,s=9,r=4.5,o=26,a=new L,l=new L;for(let c=0;c<t;c++){const h=this.birdFlock[c],d=new L,u=new L,f=new L;let g=0;for(let b=0;b<t;b++){if(c===b)continue;const A=this.birdFlock[b],x=h.group.position.distanceTo(A.group.position);x<i&&x>.001&&(g++,l.copy(h.group.position).sub(A.group.position).divideScalar(x*x),d.add(l),u.add(A.vel),f.add(A.group.position))}a.set(0,0,0),g>0&&(d.divideScalar(g).normalize().multiplyScalar(s).sub(h.vel),d.clampLength(0,o),u.divideScalar(g).normalize().multiplyScalar(s).sub(h.vel),u.clampLength(0,o),f.divideScalar(g).sub(h.group.position).normalize().multiplyScalar(s).sub(h.vel),f.clampLength(0,o),a.addScaledVector(d,1.6).addScaledVector(u,1).addScaledVector(f,.9));const M=33-h.group.position.y;a.y+=Ys.clamp(M*2.2,-o*.6,o*.6),a.x+=Math.sin(this.clock*.9+h.phase)*4+Math.sin(this.clock*.23+h.phase*2.1)*3,a.z+=Math.cos(this.clock*.7+h.phase*1.3)*4+Math.cos(this.clock*.31+h.phase*.7)*3,h.vel.addScaledVector(a,e);const m=h.vel.length();m>s?h.vel.multiplyScalar(s/m):m<r&&m>.001&&h.vel.multiplyScalar(r/m),h.group.position.addScaledVector(h.vel,e);const p=h.group.position.clone().add(h.vel);h.group.lookAt(p);const y=(this.clock*.35+h.phase*.15)%1;let S,_;y<.58?(S=.75,_=0):(S=.06,_=.18);const E=_+Math.sin(this.clock*11+h.phase)*S;h.left.rotation.z=E,h.right.rotation.z=-E}}animateSky(e,t){e||(this.clouds.children.forEach((i,s)=>{i.position.x+=.012*(1+s%3),i.position.x>205&&(i.position.x=-205)}),this.updateBirds(t),this.beamGroup&&this.lighthouseLit&&(this.beamGroup.rotation.y+=.015),this.boats.forEach(i=>{const s=i.userData.baseY??.35;i.position.y=s+Math.sin(this.clock*1.2+i.userData.phase)*.18,i.rotation.z=Math.sin(this.clock*.9+i.userData.phase)*.03}))}destination(e){var i,s,r;if(e.mode==="tutorial")return Tt.find(o=>o.id==="harbor-cafe")||Tt[1];const t=(i=e.run)!=null&&i.returning?"home":(r=(s=e.run)==null?void 0:s.job)==null?void 0:r.to;return Tt.find(o=>o.id===t)||Tt.find(o=>o.id==="home")||Tt[0]}updateBeacon(e,t){if(e&&(this.targetRing.position.set(e.position.x,Math.max(3,e.position.y+.6),e.position.z),this.targetRing.rotation.y+=t*.8,!this.targetRing.children.length)){const i=new J(new yn(4.5,.25,8,28),oe(16770203));i.rotation.x=Math.PI/2,this.targetRing.add(i);const s=new J(new xt(.08,.26,8,8,1,!0),new Nn({color:16771234,transparent:!0,opacity:.16,depthWrite:!1,side:nn}));s.position.y=4,this.targetRing.add(s)}}makeGlowColumn(){const t=[{rTop:ch,rBottom:2.4,opacity:.2},{rTop:1.7,rBottom:1.1,opacity:.32}];for(const i of t){const s=new xt(i.rTop,i.rBottom,90,24,1,!0),r=new xn({transparent:!0,depthWrite:!1,blending:Pa,side:nn,uniforms:{uHeight:{value:90},uOpacity:{value:i.opacity},uPulse:{value:1}},vertexShader:`varying float vH; uniform float uHeight;
void main(){ vH = position.y / uHeight + .5; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }`,fragmentShader:`varying float vH; uniform float uOpacity; uniform float uPulse;
void main(){ float a = pow(clamp(1. - vH, 0., 1.), 1.7) * uOpacity * uPulse;
  gl_FragColor = vec4(1., .62, .22, a); }`}),o=new J(s,r);o.position.y=90/2,this.glowColumn.add(o),this.glowMats.push(r)}this.glowColumn.visible=!1}updateGlowColumn(e,t){const i=Co(e),s=!!i;if(this.glowColumn.visible=s,!s||!i){this.lastGlowStopId=void 0;return}this.lastGlowStopId!==i.id&&(this.lastGlowStopId=i.id,this.glowColumn.position.set(i.position.x,i.position.y,i.position.z));const r=e.haloFade>0?Math.max(0,Math.min(1,e.haloFade/oh)):1,o=(t?1:.86+.14*Math.sin(this.clock*2.4))*r;for(const a of this.glowMats)a.uniforms.uPulse.value=o}makeDropParcel(){const e=new J(new je(1.5,1.1,1.5),oe(13208927)),t=oe(12929874),i=new J(new je(1.56,1.16,.34),t),s=new J(new je(.34,1.16,1.56),t),r=new J(new ht(.3,8,6),t);r.position.y=.68,r.scale.set(1.4,.7,1.4),this.dropParcel.add(e,i,s,r),this.dropParcel.visible=!1}updateDropParcel(e,t,i){const s=e.drop,r=s?Tt.find(u=>u.id===s.stopId):void 0,o=!!s&&!!r&&s.parcel;if(this.dropParcel.visible=o,!o||!s||!r)return;const a=i?1:Math.min(1,s.t/rh),l=a*a,c=e.player.position,h=r.position.y+.7,d=Math.max(c.y-1.4,h);this.dropParcel.position.set(c.x+(r.position.x-c.x)*l,d+(h-d)*l,c.z+(r.position.z-c.z)*l),i||(this.dropParcel.rotation.y+=t*4)}updateCamera(e,t,i,s,r){let o,a;if(e.mode==="title"||e.mode==="summary"){const l=s?0:this.clock*.035;o=new L(-92+Math.sin(l)*8,48,146+Math.cos(l)*7),a=new L(18,13,65)}else{this.followYaw=r?e.player.yaw:hM(this.followYaw,e.player.yaw,i);const l=this.followYaw,c=new L(-Math.sin(l)*26,12,Math.cos(l)*26);o=t.clone().add(c),a=t.clone().add(new L(Math.sin(l)*5,2,-Math.cos(l)*5));const h=t.clone().add(new L(0,2,0)),d=o.clone().sub(h),u=d.length();this.blockers.forEach(g=>g.updateWorldMatrix(!0,!1)),this.ray.set(h,d.normalize());const f=this.ray.intersectObjects(this.blockers,!1)[0];f&&f.distance<u&&o.copy(h).add(d.setLength(Math.max(7,f.distance-1)))}this.camPos.copy(o),this.camLook.copy(a),this.camera.position.copy(this.camPos),this.camera.up.set(0,1,0),this.camera.lookAt(this.camLook)}}function oe(n){return new ws({color:n,map:MM(),gradientMap:yM()})}let Ei,ls;function MM(){if(Ei)return Ei;const n=document.createElement("canvas");n.width=n.height=Ks;const e=n.getContext("2d");e.fillStyle="rgba(255,255,255,.9)",e.fillRect(0,0,Ks,Ks);for(const t of Yd(Wd))e.fillStyle=`rgba(85,55,45,${t.alpha})`,e.fillRect(t.x,t.y,1,1);return Ei=new cr(n),Ei.colorSpace=$t,Ei.wrapS=Ei.wrapT=ho,Ei}function yM(){if(ls)return ls;const n=document.createElement("canvas");n.width=1,n.height=3;const e=n.getContext("2d");return e.fillStyle="#202020",e.fillRect(0,0,1,1),e.fillStyle="#9a9a9a",e.fillRect(0,1,1,1),e.fillStyle="#fff",e.fillRect(0,2,1,1),ls=new cr(n),ls.minFilter=ls.magFilter=Ht,ls}const SM=()=>({lastKey:null,dismissedKey:null});function bM(n,e,t){return`${n}|${e}|${t}`}function EM(n,e,t,i,s,r){const o=bM(e,t,s),a=o===n.lastKey?n:{lastKey:o,dismissedKey:null};return{hidden:!(e.includes("tutorial")||i!==""||e==="flight"&&(r??1/0)<=120)||a.dismissedKey===o,next:a}}function wM(n){return{...n,dismissedKey:n.lastKey}}const pi=n=>`<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${{star:'<path d="m12 2 2.8 6.5L22 9l-5.4 4.7 1.6 7.1-6.2-3.7-6.2 3.7 1.6-7.1L2 9l7.2-.5Z"/>',envelope:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/>',pause:'<path d="M7 4h3v16H7zm7 0h3v16h-3z"/>',sound:'<path d="M4 10h4l5-4v12l-5-4H4zM16 9c1 .8 1 5.2 0 6m2-9c3 2.6 3 9.4 0 12"/>',fullscreen:'<path d="M4 9V5h4m8 0h4v4M20 15v4h-4M8 19H4v-4"/>',home:'<path d="m3 11 9-8 9 8v9h-6v-6H9v6H3z"/>'}[n]}</svg>`,cs=n=>`${Math.max(0,Math.round(n))} coins`,TM=n=>n===void 0||!Number.isFinite(n)?"--:--":`${Math.floor(Math.max(0,Math.ceil(n))/60).toString().padStart(2,"0")}:${(Math.max(0,Math.ceil(n))%60).toString().padStart(2,"0")}`;class AM{constructor(e,t){fe(this,"el",{});fe(this,"previousRevision",-1);fe(this,"offersKey","");fe(this,"tip",SM());e.classList.add("meg-ui"),e.innerHTML=`
<header class="gamebar"><div class="gamebar-brand">MEG’S <span>Delivery Service</span></div><div class="sun-pill"><i></i>Nightfall in <b id="countdown">--:--</b></div><div class="gamebar-actions"><button class="icon-button" id="audio-btn" aria-label="Mute audio">${pi("sound")}</button><button class="icon-button" id="pause-btn" aria-label="Pause flight">${pi("pause")}</button></div></header><main class="screen-layer">
<section class="title-card panel" id="title-card"><div class="eyebrow">${pi("star")} A LITTLE WITCH. A BIG SKY.</div><h1>MEG’S<br><em>Delivery</em> Service</h1><p class="premise">Take on a parcel, then return home <b>before nightfall</b> to bank your earnings.</p><p class="key-hint desktop-hint">Steer with <kbd>WASD</kbd> / arrows · rise with <kbd>W</kbd> · hover with <kbd>Space</kbd></p><p class="key-hint touch-hint">Touch anywhere to fly · release the stick to slow down</p><button id="start-btn" class="primary-button">Learn to fly <span>→</span></button><div class="title-controls"><button id="quality-btn">Quality: <b>High</b></button><button id="motion-btn">Motion: <b>Full</b></button><button id="fullscreen-btn">${pi("fullscreen")} Fullscreen</button></div><footer>MADE OF LITTLE ADVENTURES <span class="desktop-hint">⌨</span><span class="touch-hint">touch to fly</span> <span class="build-sha">build 69b5a39</span></footer></section>
<section class="offers-card panel menu-card" id="offers-card"><div class="eyebrow">${pi("envelope")} TODAY’S POST</div><h2>Choose a delivery</h2><p>Nightfall is already on its way. Pick one parcel and make it home with your earnings.</p><div class="offer-balances"><span>Satchel <b id="offer-earnings">0 coins</b></span><span>Banked <b id="offer-banked">0 coins</b></span></div><div id="offer-list" class="offer-list"></div><button id="return-home-btn" class="secondary-button">Return home</button></section>
<section class="summary-card panel menu-card" id="summary-card"><div class="eyebrow">${pi("star")} DAY’S END</div><h2 id="summary-heading">A lovely landing.</h2><p id="summary-copy"></p><div class="summary-stats"><div><span>Deliveries</span><b id="summary-deliveries">0</b></div><div><span>Earnings saved</span><b id="summary-earnings">0 coins</b></div></div><button id="next-day-btn" class="primary-button">Another day <span>→</span></button></section>
<section class="flight-hud" id="flight-hud"><div class="destination-card panel"><div class="eyebrow">${pi("envelope")} <span id="target-label">Next delivery</span></div><strong id="target-name">The village</strong><div class="target-direction"><span class="compass-arrow" id="target-arrow"></span><span id="target-distance">— m away</span></div></div><div class="tutorial-bubble" id="tutorial-bubble"><button class="bubble-close" id="bubble-close" aria-label="Dismiss tip">×</button><b>Pumpkin says:</b> <span id="tutorial-text"></span></div><div class="flight-readout panel"><span><b id="speed-value">0</b> m/s</span><span class="satchel-readout">Satchel <b id="flight-earnings">0</b></span></div></section>
<section class="pause-card panel menu-card" id="pause-card"><div class="eyebrow">${pi("star")} TAKING A BREATHER</div><h2>The sky will wait.</h2><p id="pause-reason"></p><p class="key-hint desktop-hint">When you return: <kbd>WASD</kbd> or arrows to steer · <kbd>Q</kbd>/<kbd>E</kbd> for speed</p><p class="key-hint touch-hint">When you return: touch anywhere to fly · release the stick to slow down</p><button id="resume-btn" class="primary-button">Continue flying <span>→</span></button><button id="unstuck-btn" class="secondary-button">Unstuck me</button><div class="title-controls"><button id="pause-quality-btn">Quality</button><button id="pause-motion-btn">Motion</button></div></section></main>`;const i=r=>e.querySelector(`#${r}`);["title-card","offers-card","summary-card","flight-hud","pause-card","countdown","pause-reason","target-name","target-distance","target-arrow","target-label","tutorial-bubble","tutorial-text","bubble-close","speed-value","flight-earnings","audio-btn","pause-btn","resume-btn","unstuck-btn","quality-btn","motion-btn","pause-quality-btn","pause-motion-btn","offer-list","return-home-btn","offer-earnings","offer-banked","summary-heading","summary-copy","summary-deliveries","summary-earnings","next-day-btn","start-btn"].forEach(r=>this.el[r]=i(r));const s=(r,o)=>i(r).onclick=a=>{o(),a.currentTarget.blur()};s("start-btn",t.start),s("pause-btn",t.pause),s("resume-btn",t.resume),s("unstuck-btn",t.unstuck),s("audio-btn",t.mute),i("bubble-close").onclick=r=>{this.tip=wM(this.tip),this.el["tutorial-bubble"].hidden=!0,r.currentTarget.blur()},s("return-home-btn",()=>{var r;return(r=t.returnHome)==null?void 0:r.call(t)}),s("next-day-btn",()=>{var r;return(r=t.nextDay)==null?void 0:r.call(t)}),[i("quality-btn"),i("pause-quality-btn")].forEach(r=>r.onclick=t.quality),[i("motion-btn"),i("pause-motion-btn")].forEach(r=>r.onclick=t.motion),i("fullscreen-btn").onclick=t.fullscreen,i("offer-list").onclick=r=>{var a;const o=r.target.closest("[data-job]");o&&((a=t.chooseJob)==null||a.call(t,+o.dataset.job),o.blur())}}render(e,t){var h,d,u;const i=["offers","summary"].includes(e.mode),s=e.mode==="title",r=!s&&e.paused;this.el["title-card"].hidden=!s,this.el["offers-card"].hidden=e.mode!=="offers"||r,this.el["summary-card"].hidden=e.mode!=="summary"||r,this.el["flight-hud"].hidden=s||i||r,this.el["pause-card"].hidden=!r,this.el.countdown.textContent=TM(t.timeRemaining),this.el.countdown.className=t.timeRemaining!==void 0&&t.timeRemaining<=30?"urgent":t.timeRemaining!==void 0&&t.timeRemaining<=60?"warning":"",this.el["start-btn"].innerHTML=`${e.profile.tutorialDone?"Start a delivery day":"Learn to fly"} <span>→</span>`,this.el["target-name"].textContent=t.targetName,this.el["target-distance"].textContent=t.targetDistance>0?`${Math.round(t.targetDistance)} m away`:"Right here",this.el["target-label"].textContent=(h=e.run)!=null&&h.returning?"Return home":"Next delivery",this.el["target-arrow"].style.transform=`rotate(${t.targetBearing??0}deg)`,this.el["speed-value"].textContent=String(Math.round(t.speed)),this.el["audio-btn"].classList.toggle("is-muted",t.muted),this.el["audio-btn"].setAttribute("aria-label",t.muted?"Unmute audio":"Mute audio"),this.el["quality-btn"].innerHTML=`Quality: <b>${t.lowQuality?"Low":"High"}</b>`,this.el["motion-btn"].innerHTML=`Motion: <b>${t.reducedMotion?"Low":"Full"}</b>`,this.el["tutorial-text"].textContent=t.status||e.message||"Let’s take the scenic route!";const o=t.status||e.message||"",a=EM(this.tip,e.mode,e.tutorialStage,t.status,o,t.timeRemaining);this.tip=a.next,this.el["tutorial-bubble"].hidden=a.hidden,this.el["flight-earnings"].textContent=cs(((d=e.run)==null?void 0:d.earnings)??0),this.el["offer-earnings"].textContent=cs(((u=e.run)==null?void 0:u.earnings)??0),this.el["offer-banked"].textContent=cs(e.profile.coins),this.renderOffers(e);const l=e.summary,c=(l==null?void 0:l.success)??!1;this.el["summary-heading"].textContent=c?"A lovely landing.":"Rescued from nightfall.",this.el["summary-copy"].textContent=c?`You banked ${cs((l==null?void 0:l.earnings)??0)} after ${(l==null?void 0:l.deliveries)??0} deliveries.`:"The unbanked satchel was lost, but tomorrow brings another chance.",this.el["summary-deliveries"].textContent=String((l==null?void 0:l.deliveries)??0),this.el["summary-earnings"].textContent=cs((l==null?void 0:l.earnings)??0),this.el["next-day-btn"].innerHTML=`${c?"Another day":"Back home"} <span>→</span>`,this.previousRevision!==e.revision&&(this.el["pause-reason"].textContent=e.pauseReason||"Rest your wings whenever you need.",this.previousRevision=e.revision)}renderOffers(e){var s,r;if(e.mode!=="offers")return;this.el["return-home-btn"].hidden=(((s=e.run)==null?void 0:s.deliveries)??0)===0;const t=(((r=e.run)==null?void 0:r.offers)??[]).slice(0,2),i=t.map(o=>`${o.to}:${o.parcel}:${o.payout}`).join("|");i!==this.offersKey&&(this.offersKey=i,this.el["offer-list"].innerHTML=t.map((o,a)=>{const l=Tt.find(h=>h.id===o.to),c=l?Math.hypot(l.position.x-e.player.position.x,l.position.z-e.player.position.z):0;return`<button class="offer-button" data-job="${a}"><span><b>${(l==null?void 0:l.name)??o.to}</b><small>${c<115?"Short":"Long"} route · ${o.parcel} · ${Math.round(c)} m</small></span><strong>${cs(o.payout)} <i>→</i></strong></button>`}).join(""))}}class RM{constructor(e,t,i=()=>!0){fe(this,"keys",new Set);fe(this,"stick",{x:0,y:0});fe(this,"stickPointer",null);fe(this,"cutPending",!1);fe(this,"keydown");fe(this,"keyup");fe(this,"canvas");fe(this,"joystick");fe(this,"stickEnabled");this.canvas=e,this.stickEnabled=i,this.keydown=s=>{if(this.inControl(s.target))return;const r=s.key.toLowerCase();["arrowleft","arrowright","arrowup","arrowdown","w","a","s","d","q","e"," ","enter","escape","p","f"].includes(r)&&s.preventDefault(),!s.repeat&&r===" "&&t.hover(),!s.repeat&&r==="enter"&&t.interact(),!s.repeat&&(r==="escape"||r==="p")&&t.pause(),!s.repeat&&r==="f"&&t.fullscreen(),this.keys.add(r)},this.keyup=s=>this.keys.delete(s.key.toLowerCase()),window.addEventListener("keydown",this.keydown),window.addEventListener("keyup",this.keyup),e.addEventListener("blur",()=>this.clear()),this.joystick=document.querySelector("#joystick")||void 0,this.joystick&&(this.joystick.hidden=!0),this.bindTouch()}sample(){const e=(a,l)=>Number(this.keys.has(a)||this.keys.has(l)),t=e("arrowright","d")-e("arrowleft","a")+this.stick.x,i=e("arrowup","w")-e("arrowdown","s")-this.stick.y,s=this.stickPointer!==null,r=e("e","e")-e("q","q")+(s?1:0),o=this.cutPending;return this.cutPending=!1,{turn:Math.max(-1,Math.min(1,t)),climb:Math.max(-1,Math.min(1,i)),throttle:Math.max(-1,Math.min(1,r)),cutThrottle:o}}clear(){this.keys.clear(),this.stickPointer=null,this.stick.x=this.stick.y=0,this.cutPending=!1,this.joystick&&(this.joystick.style.removeProperty("--stick-x"),this.joystick.style.removeProperty("--stick-y"),this.joystick.classList.remove("is-dragging"),this.joystick.hidden=!0)}dispose(){window.removeEventListener("keydown",this.keydown),window.removeEventListener("keyup",this.keyup),this.clear()}inControl(e){return e instanceof Element&&!!e.closest('input, button, select, textarea, [contenteditable="true"]')}bindTouch(){if(!this.joystick)return;const e=this.joystick,t=o=>{const a=e.getBoundingClientRect(),l=a.width*.34,c=o.clientX-(a.left+a.width/2),h=o.clientY-(a.top+a.height/2),d=Math.max(l,Math.hypot(c,h));this.stick.x=c/d,this.stick.y=h/d,e.style.setProperty("--stick-x",`${this.stick.x*l}px`),e.style.setProperty("--stick-y",`${this.stick.y*l}px`)},i=o=>{if(o.pointerType==="mouse"||this.stickPointer!==null||!this.stickEnabled())return;this.stickPointer=o.pointerId;try{this.canvas.setPointerCapture(o.pointerId)}catch{}const a=e.offsetWidth/2||56;e.style.left=`${o.clientX-a}px`,e.style.top=`${o.clientY-a}px`,e.hidden=!1,e.classList.add("is-dragging"),t(o)},s=o=>{o.pointerId===this.stickPointer&&t(o)},r=o=>{o.pointerId===this.stickPointer&&(this.stickPointer=null,this.stick.x=this.stick.y=0,e.style.removeProperty("--stick-x"),e.style.removeProperty("--stick-y"),e.classList.remove("is-dragging"),e.hidden=!0,this.cutPending=!0)};this.canvas.addEventListener("pointerdown",i),this.canvas.addEventListener("pointermove",s),this.canvas.addEventListener("pointerup",r),this.canvas.addEventListener("pointercancel",r),this.canvas.addEventListener("lostpointercapture",r)}}class CM{constructor(e,t){fe(this,"root");fe(this,"key","");this.actions=t,this.root=document.createElement("section"),this.root.className="home-interface",e.append(this.root),this.root.addEventListener("click",i=>{const s=i.target.closest("button");s&&(s.dataset.action==="interact"?t.interact():s.dataset.action==="close"?t.close():s.dataset.action==="start"?t.start():s.dataset.upgrade?t.upgrade(s.dataset.upgrade):s.dataset.furnish&&t.furnish(s.dataset.furnish),s.blur())})}render(e){if(this.root.hidden=e.mode!=="home"||e.paused,this.root.hidden)return;const t=Ll(e),i=JSON.stringify([e.homePanel,t==null?void 0:t.id,e.profile.coins,e.profile.upgrades,e.profile.furniture,e.message]);if(i===this.key)return;this.key=i;const s=e.profile,r=`<div class="eyebrow">MEG'S ROOM</div><h2>Welcome home, Meg.</h2><p class="home-wallet">${s.coins} coins saved · ${s.furniture.length}/6 cozy touches</p>`,o=`<button class="context-button" data-action="interact" ${t?"":"disabled"}>${t?`Visit ${t.name}`:"Explore your room"} <kbd>Enter</kbd></button>`;if(e.homePanel==="none"){const l=`<aside class="room-guide panel">${r}<p>Walk to the Job Board, Broom Workshop, or Decor Corner.</p>${o}</aside>`;this.root.innerHTML=`${l}${Ld(s)?'<div class="completion-ribbon">✦ Every little corner feels like home. Keep flying, little witch.</div>':""}`;return}let a="";e.homePanel==="jobs"&&(a='<div class="eyebrow">A NEW DELIVERY DAY</div><h2>The town is waiting.</h2><p>Choose your first delivery — pick the route that suits you. You have eight minutes to make deliveries and return home. Anything still in your satchel at nightfall will be lost.</p><button class="primary-button" data-action="start">See today’s deliveries →</button>'),e.homePanel==="brooms"&&(a=`<div class="eyebrow">THE BROOM STAND · ${s.coins} COINS</div><h2>A little more magic.</h2><div class="shop-list">${["speed","handling","braking"].map(l=>{const c=s.upgrades[l],h=c===0?60:120,d={speed:"Fly 10% faster per level",handling:"Turn 20% more responsively per level",braking:"Slow down 20% faster per level"}[l];return`<button data-upgrade="${l}" ${c===2||s.coins<h?"disabled":""}><span><b>${l[0].toUpperCase()+l.slice(1)}</b><small>${d} · ${c}/2</small></span><strong>${c===2?"Mastered":`${h} coins`}</strong></button>`}).join("")}</div>`),e.homePanel==="decor"&&(a=`<div class="eyebrow">THE HOME CATALOGUE · ${s.coins} COINS</div><h2>Make yourself at home.</h2><div class="shop-list">${Cl.map(l=>`<button data-furnish="${l.id}" ${s.furniture.includes(l.id)||s.coins<l.cost?"disabled":""}><span><b>${l.name}</b><small>${l.description}</small></span><strong>${s.furniture.includes(l.id)?"At home":`${l.cost} coins`}</strong></button>`).join("")}</div>`),e.homePanel==="cat"&&(a='<div class="eyebrow">PUMPKIN’S CORNER</div><h2>A very good copilot.</h2><p>Pumpkin leans into your hand and purrs. The best part of any delivery day is coming home together.</p><div class="purr">♡ purr… purr… ♡</div>'),this.root.innerHTML=`<section class="menu-card panel room-menu">${a}<button class="secondary-button" data-action="close">Back to your room</button></section>`}}function hd(n,e,t){return e?!1:n==="flight"||n==="tutorial"?!0:n==="home"&&t==="none"}function dd(n){return n.haloFade>0||n.descent!=null||n.drop!=null}class PM{constructor(e){fe(this,"root");this.root=document.createElement("div"),this.root.className="touch-controls",this.root.id="touch-controls",this.root.innerHTML='<div id="joystick" class="joystick" hidden><i></i></div>',e.append(this.root)}render(e){this.root.hidden=dd(e)||!hd(e.mode,e.paused,e.homePanel)}}const Ws="megs-delivery-save-v1",LM=["title","tutorial","flight","offers","home","summary"],DM=["none","jobs","brooms","decor","cat"],Al=new Set(Tt.map(n=>n.id)),qu=new Set(["rug","plant","shelf","lamp","cushion","cat-tree"]),IM=new Set([20,35,50]),NM=1e5,On=n=>typeof n=="object"&&n!==null&&!Array.isArray(n),tn=(n,e=-1/0,t=1/0)=>typeof n=="number"&&Number.isFinite(n)&&n>=e&&n<=t,En=(n,e=0,t=Number.MAX_SAFE_INTEGER)=>Number.isInteger(n)&&tn(n,e,t),Di=(n,e=160)=>typeof n=="string"&&n.length<=e,Yu=(n,e=500)=>On(n)&&tn(n.x,-e,e)&&tn(n.y,-e,e)&&tn(n.z,-e,e);function Zu(n){return!On(n)||!Di(n.from,64)||!Di(n.to,64)||!Al.has(n.from)||!Al.has(n.to)||n.from===n.to||!IM.has(n.payout)||!Di(n.label,80)||!Di(n.parcel,100)?null:{from:n.from,to:n.to,payout:n.payout,label:n.label,parcel:n.parcel}}function UM(n){return!On(n)||!En(n.coins)||!On(n.upgrades)||!En(n.upgrades.speed,0,2)||!En(n.upgrades.handling,0,2)||!En(n.upgrades.braking,0,2)||!Array.isArray(n.furniture)||n.furniture.length>qu.size||!n.furniture.every(e=>typeof e=="string"&&qu.has(e))||new Set(n.furniture).size!==n.furniture.length||typeof n.tutorialDone!="boolean"||!En(n.runs)||!En(n.deliveries)?null:{coins:n.coins,upgrades:{speed:n.upgrades.speed,handling:n.upgrades.handling,braking:n.upgrades.braking},furniture:[...n.furniture],tutorialDone:n.tutorialDone,runs:n.runs,deliveries:n.deliveries}}function FM(n){if(n===null)return null;if(!On(n)||!En(n.seed,-Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER)||!tn(n.elapsed,0,480)||!tn(n.earnings,0)||!En(n.deliveries)||typeof n.returning!="boolean"||!Di(n.lastStop,64)||!Al.has(n.lastStop)||!Array.isArray(n.offers)||n.offers.length>2)return;const e=n.job===null?null:Zu(n.job),t=n.offers.map(Zu);if(!(n.job!==null&&!e||t.some(i=>!i)||new Set(t.map(i=>i.to)).size!==t.length))return{seed:n.seed,elapsed:n.elapsed,earnings:n.earnings,deliveries:n.deliveries,job:e,offers:t,returning:n.returning,lastStop:n.lastStop}}function Sa(n){if(typeof n!="string"||n.length>NM)return null;let e;try{e=JSON.parse(n)}catch{return null}if(!On(e)||e.version!==1||!On(e.state))return null;const t=e.state;if(!LM.includes(t.mode)||!On(t.player)||!Yu(t.player.position)||!tn(t.player.yaw)||!tn(t.player.pitch,-Math.PI/2,Math.PI/2)||!tn(t.player.speed,0,30)||!tn(t.player.throttle,0,30)||typeof t.player.hover!="boolean"||!Yu(t.player.velocity,50))return null;const i=UM(t.profile),s=FM(t.run),r=t.homeFacing===void 0?0:t.homeFacing,o=t.homePanel===void 0?"none":t.homePanel;if(!i||s===void 0||typeof t.paused!="boolean"||!Di(t.pauseReason)||!Di(t.message,500)||!En(t.tutorialStage,0,10)||!On(t.homePosition)||!tn(t.homePosition.x)||!tn(t.homePosition.z)||!tn(r,-10,10)||!DM.includes(o)||!En(t.revision))return null;let a=null;if(t.summary!==null){if(!On(t.summary)||typeof t.summary.success!="boolean"||!tn(t.summary.earnings,0)||!En(t.summary.deliveries))return null;a={success:t.summary.success,earnings:t.summary.earnings,deliveries:t.summary.deliveries}}const l=t.mode;if((l==="title"||l==="tutorial"||l==="home"||l==="summary")&&s!==null||l==="flight"&&(!s||!s.job&&!s.returning)||l==="offers"&&(!s||s.job!==null||s.returning||s.offers.length!==2)||l==="summary"&&!a||l!=="summary"&&a||l==="home"&&(Math.abs(t.homePosition.x)>8||Math.abs(t.homePosition.z)>6))return null;const c={position:{...t.player.position},yaw:t.player.yaw,pitch:t.player.pitch,speed:t.player.speed,throttle:t.player.throttle,hover:!1,velocity:{...t.player.velocity},brakeHold:t.player.brakeHold===!0},h={mode:l,player:c,profile:i,run:s,paused:t.paused,pauseReason:t.pauseReason,message:t.message,tutorialStage:t.tutorialStage,homePosition:{x:t.homePosition.x,z:t.homePosition.z},homeFacing:r,homePanel:o,summary:a,revision:t.revision};return h.drop=null,h.descent=null,h.haloFade=0,(h.mode==="tutorial"||h.mode==="flight"||h.mode==="offers")&&(h.paused=!0,h.pauseReason="Welcome back"),(h.mode==="title"||h.mode==="home")&&(h.paused=!1,h.pauseReason=""),h}function OM(n){return JSON.stringify({version:1,state:n})}class zM{constructor(){fe(this,"releaseLock");fe(this,"generation",0);fe(this,"writable",!1);fe(this,"status","");fe(this,"memory")}get message(){return this.status}get canSave(){return this.writable}async acquire(){this.release();const e=++this.generation,t=this.storage();if(!t)return this.session("Saved games are unavailable in this browser.");const i=typeof navigator>"u"?void 0:navigator.locks;if(!i)try{const s=t.getItem(Ws),r=s===null?void 0:Sa(s);return s!==null&&!r?(this.status="Saved game could not be read. It was left untouched.",{kind:"invalid",message:this.status}):this.session("This browser cannot safely share saved games; playing in this tab only.",r??void 0)}catch{return this.session("Saved games are unavailable in this browser.")}return new Promise(s=>{i.request("megs-delivery-save",{ifAvailable:!0},r=>{var h;if(e!==this.generation||!r){s({kind:"readonly",message:"Saved game is open in another tab. Retry after closing it."});return}let o;const a=new Promise(d=>{o=d});this.releaseLock=()=>{this.releaseLock=void 0,this.writable=!1,o()};let l;try{l=t.getItem(Ws)}catch{return(h=this.releaseLock)==null||h.call(this),s(this.session("Saved games are unavailable in this browser.")),a}const c=l===null?void 0:Sa(l)??void 0;return l!==null&&!c?(this.status="Saved game could not be read. It was left untouched.",s({kind:"invalid",message:this.status}),a):(this.writable=!0,this.memory=c,this.status="Saved game ready.",s({kind:"ready",state:c,message:this.status}),a)}).catch(()=>s(this.session("Saved games are unavailable in this browser.")))})}save(e){if(!this.writable)return!1;const t=this.storage();if(!t)return this.writable=!1,this.status="Saving is unavailable in this browser.",!1;try{return t.setItem(Ws,OM(e)),this.memory=e,this.status="Saved.",!0}catch{return this.memory=e,this.writable=!1,this.status="Could not save; progress remains in this tab.",!1}}release(){var e;this.generation++,(e=this.releaseLock)==null||e.call(this),this.writable=!1}continueSession(){this.release(),this.memory=void 0,this.status="Continuing with a fresh session."}discardUnreadable(){try{const e=this.storage(),t=e==null?void 0:e.getItem(Ws);t!=null&&!Sa(t)&&(e==null||e.removeItem(Ws))}catch{}this.writable=!0,this.memory=void 0,this.status="Discarded the unreadable save."}storage(){try{return typeof localStorage>"u"?void 0:localStorage}catch{return}}session(e,t){return this.writable=!1,this.memory=t,this.status=e,{kind:"session",state:t,message:e}}}class BM{constructor(){fe(this,"context");fe(this,"master");fe(this,"ambience");fe(this,"ambienceSources",[]);fe(this,"tones",new Set);fe(this,"muted",!0);fe(this,"disposed",!1);fe(this,"snapshot");fe(this,"nextNote",0);fe(this,"lastActive",!1);fe(this,"operationPending",!1)}setMuted(e){this.disposed||(this.muted=e,!(!e&&!this.ensureContext())&&this.reconcile())}update(e,t){const i=this.snapshot,s=this.takeSnapshot(e);this.snapshot=s,this.lastActive=!(t||e.paused||typeof document<"u"&&document.hidden),!(this.muted||this.disposed||!this.context)&&(this.reconcile(),!(!this.canPlay()||this.context.state!=="running")&&(this.playMelody(),i&&(s.deliveries>i.deliveries&&this.deliveryCue(),s.coins<i.coins&&(s.upgrades!==i.upgrades||s.furniture!==i.furniture)&&this.purchaseCue(),i.homePanel!=="cat"&&s.homePanel==="cat"&&this.purrCue())))}dispose(){if(!this.disposed){this.disposed=!0,this.lastActive=!1,this.clearAmbience();for(const e of this.tones){try{e.stop()}catch{}e.disconnect()}this.tones.clear(),this.context&&this.context.state!=="closed"&&this.context.close().catch(()=>{}),this.context=void 0,this.master=void 0}}debugState(){var e;return{context:((e=this.context)==null?void 0:e.state)??"unavailable",muted:this.muted}}ensureContext(){if(this.context)return this.context;const e=typeof window>"u"?void 0:window.AudioContext||window.webkitAudioContext;if(e)try{const t=new e,i=t.createGain();return i.gain.value=1e-4,i.connect(t.destination),this.context=t,this.master=i,t}catch{return}}canPlay(){return!this.disposed&&!this.muted&&this.lastActive}reconcile(){const e=this.context;if(!e||e.state==="closed")return;const t=this.canPlay();if(t&&e.state==="running"){this.startAmbience();return}if(!t&&this.master){const s=e.currentTime;this.master.gain.cancelScheduledValues(s),this.master.gain.setTargetAtTime(1e-4,s,.025)}if(this.operationPending||(t?e.state!=="suspended":e.state!=="running"))return;this.operationPending=!0,(t?e.resume.bind(e):e.suspend.bind(e))().catch(()=>{}).then(()=>{this.operationPending=!1,this.canPlay()&&e.state==="running"&&this.startAmbience(),this.reconcile()})}startAmbience(){const e=this.context,t=this.master;if(!e||!t||e.state!=="running"||!this.canPlay())return;const i=e.currentTime;if(t.gain.cancelScheduledValues(i),t.gain.setTargetAtTime(.14,i,.08),this.ambience)return;const s=e.createGain(),r=e.createOscillator(),o=e.createOscillator(),a=e.createGain();s.gain.value=.035,s.connect(t),r.type="sine",r.frequency.value=82,o.type="sine",o.frequency.value=.09,a.gain.value=11,o.connect(a).connect(r.frequency),r.connect(s),r.start(),o.start(),this.ambience=s,this.ambienceSources=[r,o]}clearAmbience(){var e;for(const t of this.ambienceSources){try{t.stop()}catch{}t.disconnect()}this.ambienceSources=[],(e=this.ambience)==null||e.disconnect(),this.ambience=void 0}playMelody(){const e=this.context;if(!e||e.currentTime<this.nextNote)return;const t=[261.63,329.63,392,523.25,440,329.63];this.tone(t[Math.floor(e.currentTime*1.7%t.length)],.11,.045,"sine"),this.nextNote=e.currentTime+1.45}deliveryCue(){this.tone(659.25,.08,.09,"triangle"),this.tone(783.99,.19,.07,"triangle",.09)}purchaseCue(){this.tone(523.25,.06,.08,"sine"),this.tone(783.99,.16,.075,"sine",.07)}purrCue(){this.tone(110,.48,.055,"sine"),this.tone(164.81,.42,.035,"sine",.08)}tone(e,t,i,s,r=0){const o=this.context,a=this.master;if(!o||!a||o.state!=="running"||!this.canPlay())return;const l=o.currentTime+r,c=o.createOscillator(),h=o.createGain();c.type=s,c.frequency.value=e,h.gain.setValueAtTime(1e-4,l),h.gain.exponentialRampToValueAtTime(i,l+.018),h.gain.exponentialRampToValueAtTime(1e-4,l+t),c.connect(h).connect(a),this.tones.add(c),c.onended=()=>{this.tones.delete(c),c.disconnect(),h.disconnect()},c.start(l),c.stop(l+t+.03)}takeSnapshot(e){var t;return{deliveries:Math.max(e.profile.deliveries,((t=e.run)==null?void 0:t.deliveries)??0),coins:e.profile.coins,upgrades:`${e.profile.upgrades.speed}:${e.profile.upgrades.handling}:${e.profile.upgrades.braking}`,furniture:e.profile.furniture.join("|"),homePanel:e.homePanel}}}const Io=document.querySelector("#game"),gr=document.querySelector("#app"),kM=new URLSearchParams(location.search),nc=kM.get("test")==="1";let Te=Il(),lo=!0,To=matchMedia("(pointer: coarse)").matches;const ic=matchMedia("(pointer: coarse)").matches;Te.coarsePointer=ic;let tr=matchMedia("(prefers-reduced-motion: reduce)").matches,pr,St,jn=0,co=0,Ts=!1;const xs=new zM,No=new BM;let At=!1,ei="loading",_s="Opening your little world…",nr=null,$u;function HM(n,e=8e3){nr=n,clearTimeout($u),$u=setTimeout(()=>{nr=null,pt(0)},e)}let ba=0;function xr(n="Take a little breather."){uh(Te,!0,n),St==null||St.clear(),jn=0,Ot(),pt(0)}function Rl(){!At||document.hidden||Ts||(uh(Te,!1),St==null||St.clear(),jn=0,co=performance.now(),Ot(),pt(0))}function fd(){var n,e,t;document.fullscreenElement?(n=document.exitFullscreen)==null||n.call(document):(t=(e=document.documentElement).requestFullscreen)==null||t.call(e).catch(()=>{})}const GM=new AM(gr,{start(){var n;At&&(Te.profile.tutorialDone?Ta(Te):wf(Te),St==null||St.clear(),(n=document.activeElement)==null||n.blur(),Ot(),pt(0))},pause:()=>xr(),resume:Rl,unstuck(){if(!At)return;const n=Te.player.position;let e=Tt[0],t=1/0;for(const i of Tt){const s=(i.position.x-n.x)**2+(i.position.z-n.z)**2;s<t&&(t=s,e=i)}Te.player.position={x:e.position.x,y:e.position.y+5,z:e.position.z},Te.player.velocity={x:0,y:0,z:0},Te.player.speed=0,Te.player.throttle=0,Rl(),St==null||St.clear(),Ot(),pt(0)},mute(){lo=!lo,No.setMuted(lo),pt(0)},quality(){To=!To,pt(0)},motion(){tr=!tr,pt(0)},fullscreen:fd,chooseJob(n){At&&(Pf(Te,n),St.clear(),Ot(),pt(0))},returnHome(){At&&(Lf(Te),St.clear(),Ot(),pt(0))},nextDay(){At&&(Ta(Te),St.clear(),Ot(),pt(0))}}),VM=new CM(gr,{interact(){At&&(hh(Te),St.clear(),Ot(),pt(0))},close(){At&&(Ju(Te),St.clear(),Ot(),pt(0))},start(){At&&(Cf(Te,nc?42:void 0),St.clear(),Ot(),pt(0))},upgrade(n){At&&(Cd(Te,n),Ot(),pt(0))},furnish(n){At&&(Pd(Te,n),Ot(),pt(0))}}),WM=new PM(gr),Jn=document.createElement("aside");Jn.className="save-status";Jn.setAttribute("aria-live","polite");gr.append(Jn);Jn.addEventListener("click",n=>{const e=n.target.closest("button");(e==null?void 0:e.dataset.save)==="retry"&&sc()});try{pr=new vM(Io)}catch{throw gr.innerHTML='<main class="compatibility"><h1>A little more sky, please.</h1><p>Meg needs a browser with WebGL 2 and hardware acceleration. Try a current browser with graphics acceleration enabled.</p></main>',new Error("WebGL 2 is unavailable.")}St=new RM(Io,{hover:()=>{At&&(Tf(Te),Ot(),pt(0))},interact:()=>{!At||Te.mode!=="home"||(hh(Te),Ot(),pt(0))},pause:()=>{At&&(Te.mode==="home"&&Te.homePanel!=="none"?(Ju(Te),Ot(),pt(0)):Te.paused?Rl():xr())},fullscreen:fd},()=>ic&&!dd(Te)&&hd(Te.mode,Te.paused,Te.homePanel));function Ot(){!At||!xs.canSave||xs.save(Te)||(ei="session",_s=xs.message)}async function sc(){At=!1,ei="loading",_s="Opening your little world…",pt(0);const n=await xs.acquire();if(n.kind==="invalid"){xs.discardUnreadable(),Te=Il(),Te.coarsePointer=ic,At=!0,ei="ready",_s="",Ot(),HM("Your saved game could not be read, so it was discarded and a new game was started."),St==null||St.clear(),jn=0,pt(0);return}ei=n.kind,_s=n.message,n.state&&(Te=n.state),At=n.kind==="ready"||n.kind==="session",St==null||St.clear(),jn=0,pt(0)}function pt(n){if(No.update(Te,!At||Ts),document.body.classList.toggle("reduced-motion",tr),!pr||Ts)return;pr.render(Te,n,{reducedMotion:tr,lowQuality:To});const e=fh(Te)??Tt[0];GM.render(Te,{muted:lo,lowQuality:To,reducedMotion:tr,targetName:e.name,targetDistance:Math.hypot(e.position.x-Te.player.position.x,e.position.z-Te.player.position.z),targetBearing:Df(Te.player.position,e.position,Te.player.yaw),speed:Te.player.speed,status:"",timeRemaining:Te.run?Math.max(0,480-Te.run.elapsed):void 0}),VM.render(Te),WM.render(Te),At||(document.querySelector(".home-interface").hidden=!0),Te.mode==="home"&&(document.querySelector("#flight-hud").hidden=!0),document.querySelector("#start-btn").disabled=!At,Te.profile.tutorialDone&&(document.querySelector("#start-btn").innerHTML="Come on in <span>→</span>"),document.querySelector("#next-day-btn").innerHTML="Back to your room <span>→</span>",document.querySelector(".sun-pill").hidden=!Te.run,Jn.hidden=ei==="ready"&&nr===null;const t=ei+_s+(nr??"");Jn.dataset.key!==t&&(Jn.dataset.key=t,Jn.textContent=ei==="ready"?nr??"":_s,ei==="readonly"&&Jn.insertAdjacentHTML("beforeend",'<br><button data-save="retry">Retry</button>'))}function pd(n){if(!At||Te.paused||document.hidden||Ts){jn=0,pt(0);return}const e=Te.mode;for(jn+=Math.max(0,n)/1e3;jn+1e-10>=1/60;)Of(Te,St.sample(),1/60),jn-=1/60;ba+=n,(ba>=5e3||e!==Te.mode)&&(Ot(),ba=0),pt(Math.min(n/1e3,.1))}function md(n){const e=co?Math.min(n-co,100):0;co=n,nc||pd(e),requestAnimationFrame(md)}window.addEventListener("resize",()=>{pr.resize(),pt(0)});document.addEventListener("visibilitychange",()=>{document.hidden&&xr("Welcome back. Ready to fly?")});window.addEventListener("blur",()=>{St.clear(),Te.mode!=="title"&&xr()});Io.addEventListener("webglcontextlost",n=>{n.preventDefault(),xr("The sky is taking a moment."),Ts=!0});Io.addEventListener("webglcontextrestored",()=>{Ts=!1,pt(0)});window.addEventListener("pagehide",()=>{Ot(),At=!1,No.update(Te,!0),xs.release()});window.addEventListener("pageshow",n=>{n.persisted&&sc()});Object.assign(window,{advanceTime:n=>pd(n),render_game_to_text:()=>{var n,e;return JSON.stringify({coordinates:"x right/east, y up, z south; yaw 0 faces -z",mode:Te.mode,paused:Te.paused,player:Te.player,tutorialStage:Te.tutorialStage,message:Te.message,run:Te.run,profile:Te.profile,stops:Tt,nearby:((n=ir(Te))==null?void 0:n.id)??null,homePosition:Te.homePosition,homePanel:Te.homePanel,station:(e=Ll(Te))==null?void 0:e.id,saveKind:ei})}});nc&&Object.assign(window,{__game:{get state(){return Te},get ready(){return At},reset(){Te=Il(),jn=0,pt(0)},draw:()=>pt(0),audio:()=>No.debugState(),persist:Ot,renderer:()=>pr}});pt(0);requestAnimationFrame(md);sc();
