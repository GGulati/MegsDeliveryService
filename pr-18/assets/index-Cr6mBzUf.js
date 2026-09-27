var ah=Object.defineProperty;var oh=(n,e,t)=>e in n?ah(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var ue=(n,e,t)=>oh(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Vc=[{id:"jobs",name:"Job Board",x:-5,z:-3},{id:"brooms",name:"Broom Workshop",x:5,z:-3},{id:"decor",name:"Decor Corner",x:-5,z:3},{id:"cat",name:"Pumpkin",x:4,z:3}],Oo=[{id:"rug",name:"Woven Rug",cost:30,description:"A soft landing for tired feet."},{id:"plant",name:"Moonleaf Plant",cost:40,description:"A little green for Meg's room."},{id:"shelf",name:"Parcel Shelf",cost:50,description:"A home for souvenirs and parcels."},{id:"lamp",name:"Warm Lamp",cost:60,description:"A cozy glow after a long shift."},{id:"cushion",name:"Window Cushion",cost:70,description:"The perfect reading nook."},{id:"cat-tree",name:"Cat Tree",cost:80,description:"Pumpkin's new favorite perch."}],Bo=[{id:"speed",name:"Swift Bristles",description:"Raises top speed by 10% per level."},{id:"handling",name:"Responsive Handle",description:"Raises turn rate by 20% per level."},{id:"braking",name:"Cloud Brake",description:"Raises hover braking by 20% per level."}],Oa=7.5,Ba=5.5,lh=2.4,ch=3.5,Yr=(n,e,t)=>Math.max(e,Math.min(t,n));function za(n){n.mode="home",n.run=null,n.paused=!1,n.pauseReason="",n.homePosition={x:0,z:3},n.homeFacing=0,n.homePanel="none",n.message="Back at Meg's room.",n.revision++}function Wc(n){n.mode!=="home"||n.homePanel==="none"||(n.homePanel="none",n.revision++)}function zo(n){if(n.mode==="home")return Vc.find(e=>Math.hypot(n.homePosition.x-e.x,n.homePosition.z-e.z)<=lh)}function uh(n){if(n.mode!=="home"||n.paused)return;const e=zo(n);e&&(n.homePanel=e.id,n.message=e.id==="cat"?"Pumpkin purrs.":`${e.name} opened.`,n.revision++)}function hh(n,e,t){if(n.mode!=="home"||n.paused||n.homePanel!=="none"||!Number.isFinite(t)||t<=0)return;const i=Yr(e.turn,-1,1),r=-Yr(e.climb,-1,1),s=Math.hypot(i,r);if(s>0){const a=ch*t/Math.max(1,s);n.homePosition.x=Yr(n.homePosition.x+i*a,-Oa,Oa),n.homePosition.z=Yr(n.homePosition.z+r*a,-Ba,Ba),n.homeFacing=Math.atan2(i,r)}n.revision++}function dh(n,e){if(n.paused||n.mode!=="home"||n.homePanel!=="brooms"||!mh(e))return!1;const t=n.profile.upgrades[e];if(t>=2)return!1;const i=t===0?60:120;return n.profile.coins<i?!1:(n.profile.coins-=i,n.profile.upgrades[e]=t+1,n.message=`${Bo.find(r=>r.id===e).name} upgraded.`,n.revision++,!0)}function fh(n,e){if(n.paused||n.mode!=="home"||n.homePanel!=="decor")return!1;const t=Oo.find(i=>i.id===e);return!t||n.profile.furniture.includes(e)||n.profile.coins<t.cost?!1:(n.profile.coins-=t.cost,n.profile.furniture.push(e),n.message=`${t.name} added to the room.`,n.revision++,!0)}function ph(n){return Oo.every(e=>n.furniture.includes(e.id))&&Bo.every(e=>n.upgrades[e.id]>=2)}function mh(n){return Bo.some(e=>e.id===n)}const Er=175,Ci=[[20,-25],[30,-18],[40,-5],[46,12],[50,30],[54,50],[56,70],[60,90],[63,105],[66,120],[70,140],[76,160],[82,180],[88,200],[95,220],[45,220],[40,200],[34,180],[26,160],[16,140],[6,120],[-2,100],[-8,82],[-14,65],[-18,45],[-20,25],[-16,5],[-6,-12],[6,-22]];function hr(n,e){let t=!1;for(let i=0,r=Ci.length-1;i<Ci.length;r=i++){const s=Ci[i][0],a=Ci[i][1],o=Ci[r][0],l=Ci[r][1];a>e!=l>e&&n<(o-s)*(e-a)/(l-a)+s&&(t=!t)}return t}const yt=[{id:"home",name:"Bakery Attic",subtitle:"Home — borrowed attic",position:{x:-70,y:20,z:40},color:"#f9cf68"},{id:"harbor-cafe",name:"Harbor Cafe",subtitle:"Tutorial delivery",position:{x:-45,y:18,z:65},color:"#63c7dc"},{id:"market",name:"Sunset Market",subtitle:"Fresh parcels",position:{x:-10,y:23,z:-50},color:"#e88869"},{id:"lighthouse",name:"The Lighthouse",subtitle:"Beacon House",position:{x:82,y:16,z:106},color:"#f4e5b8"},{id:"marina",name:"Marina Works",subtitle:"Dockside roof",position:{x:80,y:20,z:70},color:"#79b9a0"},{id:"observatory",name:"Hill Observatory",subtitle:"East hill pad",position:{x:115,y:33,z:-55},color:"#ad91d1"},{id:"cliffside",name:"Cliffside Books",subtitle:"West avenue",position:{x:-125,y:26,z:30},color:"#db92a7"}],ko=[{min:{x:-82,y:3,z:28},max:{x:-58,y:18,z:52}},{min:{x:-59,y:3,z:51},max:{x:-31,y:16,z:79}},{min:{x:-25,y:3,z:-64},max:{x:5,y:21,z:-36}},{min:{x:72,y:3,z:96},max:{x:92,y:13,z:116}},{min:{x:65,y:3,z:55},max:{x:95,y:18,z:85}},{min:{x:100,y:3,z:-70},max:{x:130,y:31,z:-40}},{min:{x:-140,y:3,z:15},max:{x:-110,y:24,z:45}},{min:{x:83,y:3,z:113},max:{x:93,y:29,z:123}}],gh=ko.length-1,_h=[{min:{x:15,y:0,z:168},max:{x:100,y:100,z:172}}];function vh(n){let e=n>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const xh=.5*(Math.sqrt(3)-1),dr=(3-Math.sqrt(3))/6;class Xc{constructor(e){ue(this,"perm");const t=vh(e),i=new Uint8Array(256);for(let r=0;r<256;r++)i[r]=r;for(let r=255;r>0;r--){const s=Math.floor(t()*(r+1));[i[r],i[s]]=[i[s],i[r]]}this.perm=new Uint8Array(512);for(let r=0;r<512;r++)this.perm[r]=i[r&255]}noise(e,t){const i=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]];let r=0,s=0,a=0;const o=(e+t)*xh,l=Math.floor(e+o),c=Math.floor(t+o),u=(l+c)*dr,d=e-(l-u),h=t-(c-u);let f,v;d>h?(f=1,v=0):(f=0,v=1);const y=d-f+dr,m=h-v+dr,p=d-1+2*dr,E=h-1+2*dr,A=l&255,x=c&255;let T=.5-d*d-h*h;if(T>=0){T*=T;const g=i[this.perm[A+this.perm[x]]&7];r=T*T*(g[0]*d+g[1]*h)}let b=.5-y*y-m*m;if(b>=0){b*=b;const g=i[this.perm[A+f+this.perm[x+v]]&7];s=b*b*(g[0]*y+g[1]*m)}let R=.5-p*p-E*E;if(R>=0){R*=R;const g=i[this.perm[A+1+this.perm[x+1]]&7];a=R*R*(g[0]*p+g[1]*E)}return 70*(r+s+a)}}const qc=1337,Mh=new Xc(qc),ka=new Xc(qc+1);function Yc(n,e,t=5){let i=0,r=.5,s=1;for(let a=0;a<t;a++)i+=r*Mh.noise(n*s,e*s),r*=.5,s*=2;return i}function yh(n,e,t,i){const r=ka.noise(n*t+5.2,e*t+1.3),s=ka.noise(n*t+1.7,e*t+9.1);return[n+r*i,e+s*i]}function Ar(n,e,t){const i=Math.min(1,Math.max(0,(t-n)/(e-n)));return i*i*(3-2*i)}function gn(n,e){const t=175+ka.noise(n*.01+3.7,8.2)*35,i=Ar(t-15,t+45,e);let r=0;hr(n,e)?r=e<t+25?1:0:(hr(n+6,e)||hr(n-6,e)||hr(n,e+6)||hr(n,e-6))&&e<t+20&&(r=.45);const[s,a]=yh(n,e,.015,18),o=(Yc(s*.02,a*.02)*.5+.5)*8,l=Math.hypot(n,e),c=Ar(145,175,l),u=o*c*(1-r),d=Math.min(r*-3.5,i*-12);return{h:u+d,bayT:r,oceanT:i}}function Zi(n,e){return gn(n,e).h}const Sh=[.918,.851,.659],bh=[.498,.682,.431],Al=[.541,.498,.447],Js=[.72,.68,.52];function Qs(n,e,t){return[n[0]+(e[0]-n[0])*t,n[1]+(e[1]-n[1])*t,n[2]+(e[2]-n[2])*t]}function Eh(n,e){const{h:t,bayT:i,oceanT:r}=gn(n,e);if(t<.2||t>4.5||i>0||r>.05)return!1;const s=1.5,a=(gn(n+s,e).h-gn(n-s,e).h)/(2*s),o=(gn(n,e+s).h-gn(n,e-s).h)/(2*s);return!(Math.hypot(a,o)>.5)}function Th(n,e){const{h:t,bayT:i,oceanT:r}=gn(n,e),s=1.5,a=(gn(n+s,e).h-gn(n-s,e).h)/(2*s),o=(gn(n,e+s).h-gn(n,e-s).h)/(2*s),l=Math.hypot(a,o),c=Math.max(i,Ar(.02,.25,r));let u=Qs(bh,Al,Ar(3,5.5,t));u=Qs(u,Sh,c*(t>-1?1:0)),t<-1&&(u=[Js[0],Js[1],Js[2]]);const d=Ar(.45,.75,l);d>0&&(u=Qs(u,Al,d));const h=1+Yc(n*.08+11.3,e*.08+7.9)*.07;return[u[0]*h,u[1]*h,u[2]*h]}const pn=1,wh=3,Ah=100,Rh=18,Ch=2.2,Ph=7,Lh=12,Dh=5,Ih=.5,Bn=480,Uh=3.5,$c=.9,Kc=.45,Nh=3.5,Fh=1.5,Oh=3,Bh=.8,Rl=.2,zh=3,kh=8,Gh=2,Zc=6;function Hh(n,e){return Math.max(Zc,Dh+Ih*n)*(1+e*.2)}const Cl=2,Vh=20,Wh=.05,Jc=.5,Qc=3.6,En=(n,e,t)=>Math.max(e,Math.min(t,n)),Ga=n=>{const e=En(n,0,1);return e*e*(3-2*e)},Pl=45;function Xh(n,e){const t=Math.hypot(n.x,n.z),i=Er-pn-Pl;if(t<=i)return;const r=Ga((t-i)/Pl),s=n.x/t,a=n.z/t,o=e.x*s+e.z*a;if(o<=0)return;const l=o*(1-r);e.x+=s*(l-o),e.z+=a*(l-o)}const qh=n=>Math.hypot(n.x,n.y,n.z);function Go(n=yt[0].position){return{position:{...n},yaw:0,pitch:0,speed:9,throttle:9,hover:!1,velocity:{x:0,y:0,z:-9},brakeHold:!1}}function Ho(){return{mode:"title",player:Go(),profile:{coins:0,upgrades:{speed:0,handling:0,braking:0},furniture:[],tutorialDone:!1,runs:0,deliveries:0},run:null,paused:!1,pauseReason:"",message:"",tutorialStage:0,drop:null,descent:null,haloFade:0,homePosition:{x:0,z:3},homeFacing:0,homePanel:"none",summary:null,revision:0,coarsePointer:!1}}function Yh(n){n.mode="tutorial",n.paused=!1,n.pauseReason="",n.player=Go(),n.tutorialStage=0,n.drop=null,n.descent=null,n.haloFade=0,n.message="Steer toward the glowing Harbor Cafe pad.",n.revision++}function $h(n){n.paused||n.mode!=="tutorial"&&n.mode!=="flight"||(n.player.hover=!n.player.hover,n.revision++)}function jc(n,e,t=""){n.paused=e,n.pauseReason=e?t:"",n.revision++}function Nr(n){const e=n.player;if(!(e.speed>=Uh))return yt.find(t=>{const i=e.position.x-t.position.x,r=e.position.z-t.position.z;return Math.hypot(i,r)<=Qc&&e.position.y>=t.position.y})}function eu(n){var t;if(n.paused)return;if(n.mode==="home"){uh(n);return}if(n.drop||n.descent||n.haloFade>0)return;if(n.mode==="tutorial"){if(((t=Nr(n))==null?void 0:t.id)!=="harbor-cafe")return;Ha(n,yt.find(i=>i.id==="harbor-cafe"));return}if(n.mode!=="flight"||!n.run)return;if(n.run.elapsed>=Bn){Fr(n,!1);return}const e=Nr(n);e&&Ha(n,e)}function Kh(n,e){n.player.brakeHold=!1,n.haloFade=0,n.drop={stopId:e.id,t:0,parcel:e.id!=="home"},tu(n),n.message=e.id==="home"?"Banking your earnings…":"Parcel away!",n.revision++}function tu(n){n.player.speed=0,n.player.hover=!0,n.player.velocity={x:0,y:0,z:0}}function Zh(n,e){var r;if(n.player.hover=!1,n.player.throttle=0,n.mode==="tutorial"){n.profile.tutorialDone=!0,n.message="Practice complete",n.mode="title",n.tutorialStage=3,n.revision++;return}const t=n.run;if(!t||t.elapsed>=Bn){Fr(n,!1);return}const i=yt.find(s=>s.id===e);if(i){if(i.id==="home"){const s=t.earnings,a=t.deliveries;Fr(n,!0),n.summary=null,za(n),n.message=`Shift complete — banked ${s} coins after ${a} ${a===1?"delivery":"deliveries"}.`;return}((r=t.job)==null?void 0:r.to)===i.id&&(t.earnings+=t.job.payout,t.deliveries++,n.profile.deliveries++,t.job=null,t.lastStop=i.id,t.offers=iu(t.seed,t.deliveries,i.id),t.returning=!1,n.mode="offers",n.message="Delivered! Choose the next parcel or return home.",n.revision++)}}function Jh(n,e=Date.now()){if(n.paused||n.run||n.mode!=="title"&&n.mode!=="summary"&&n.mode!=="home")return;const t=Number.isFinite(e)?Math.floor(e):Date.now();n.player=Go(),n.run={seed:t,elapsed:0,earnings:0,deliveries:0,job:null,offers:iu(t,0,"home"),returning:!1,lastStop:"home"},n.summary=null,n.homePanel="none",n.drop=null,n.descent=null,n.haloFade=0,n.mode="offers",n.message="Choose your first delivery of the day.",n.revision++}function Qh(n,e){if(n.paused||n.mode!=="offers"||!n.run||!Number.isInteger(e))return;const t=n.run.offers[e];t&&(n.run.job=t,n.run.offers=[],n.run.returning=!1,n.mode="flight",n.message=`Delivery: ${td(t.to)}.`,n.revision++)}function jh(n){n.paused||n.mode!=="offers"||!n.run||n.run.deliveries===0||(n.run.job=null,n.run.offers=[],n.run.returning=!0,n.mode="flight",n.message="Return to Meg's Rooftop to bank your earnings.",n.revision++)}function Fr(n,e){const t=n.run;if(!t)return;n.drop=null,n.descent=null,n.haloFade=0;const i=e?t.earnings:0;n.summary={success:e,earnings:i,deliveries:t.deliveries},e&&(n.profile.coins+=i),n.profile.runs++,n.run=null,n.mode="summary",n.player.speed=0,n.player.throttle=0,n.player.hover=!0,n.player.velocity={x:0,y:0,z:0},n.message=e?"Shift complete. Earnings banked!":"Rescue called. Unbanked earnings were lost.",n.revision++}function nu(n){if(n.mode==="tutorial")return yt.find(e=>e.id==="harbor-cafe");if(n.run)return yt.find(e=>{var t;return e.id===(n.run.returning?"home":(t=n.run.job)==null?void 0:t.to)})}function ed(n,e,t){return(Math.atan2(e.x-n.x,-(e.z-n.z))-t)*180/Math.PI}function td(n){var e;return((e=yt.find(t=>t.id===n))==null?void 0:e.name)??n}function Vs(n){if(!(n.drop||n.descent)&&!(n.mode!=="tutorial"&&n.mode!=="flight"))return nu(n)}function fr(n){let e=n|0;return e=Math.imul(e^e>>>16,73244475),e=Math.imul(e^e>>>16,73244475),(e^e>>>16)>>>0}function iu(n,e,t){let i=fr(n^fr(e)^fr(t.length));const r=yt.find(c=>c.id===t),s=yt.filter(c=>c.id!=="home"&&c.id!==t).map(c=>({stop:c,distance:Math.hypot(c.position.x-r.position.x,c.position.z-r.position.z)})).sort((c,u)=>c.distance-u.distance);i=fr(i+1);const a=s[i%Math.min(2,s.length)],o=s.slice(-Math.min(2,s.length));i=fr(i+2);const l=o[i%o.length];return[a,l].sort((c,u)=>c.distance-u.distance).map(({stop:c,distance:u},d)=>{const h=u<100?20:u<180?35:50;return{from:t,to:c.id,payout:h,label:d===0?"Short hop":"Long haul",parcel:"Delivery parcel"}})}function nd(n,e){let t;for(const i of[...ko,..._h]){const r={x:i.min.x-pn,y:i.min.y-pn,z:i.min.z-pn},s={x:i.max.x+pn,y:i.max.y+pn,z:i.max.z+pn};let a=0,o=1,l={x:0,y:0,z:0};for(const c of["x","y","z"]){const u=n[c],d=e[c];if(Math.abs(d)<1e-9){if(u<r[c]||u>s[c]){a=2;break}continue}const h=(r[c]-u)/d,f=(s[c]-u)/d,v=Math.min(h,f),y=Math.max(h,f);if(v>a&&(a=v,l={x:0,y:0,z:0},l[c]=h<f?-1:1),o=Math.min(o,y),a>o)break}a>=0&&a<=1&&a<=o&&(!t||a<t.t)&&(t={t:a,normal:l})}return t}function ru(n,e){var t;return n.mode==="tutorial"?e.id==="harbor-cafe":n.mode!=="flight"||!n.run?!1:e.id==="home"?n.run.returning&&!n.run.job:((t=n.run.job)==null?void 0:t.to)===e.id}function id(n){if(n.drop||n.descent||n.haloFade>0||n.mode!=="tutorial"&&n.mode!=="flight"||Math.abs(n.player.speed)>Jc)return;const e=Vs(n),t=e?Nr(n):void 0;!t||t.id!==e.id||!ru(n,t)||(n.haloFade=Kc)}function rd(n){const e=Vs(n),t=e?Nr(n):void 0;!t||t.id!==e.id||!ru(n,t)||Math.abs(n.player.speed)>Jc||Ha(n,t)}function Ha(n,e){const t=n.player.position.x-e.position.x,i=n.player.position.z-e.position.z,r=Math.hypot(t,i),s=Math.atan2(i,t),a=Math.atan2(-Math.sin(s),-Math.cos(s)),o=Math.abs(Math.atan2(Math.sin(a-n.player.yaw),Math.cos(a-n.player.yaw)));n.descent={stopId:e.id,startY:n.player.position.y,angle:s,radius0:r,orbitR:Math.max(r,Oh),dir:o<=Math.PI/2?1:-1,t:0},n.player.brakeHold=!1,tu(n),n.message="Descending…",n.revision++}function sd(n,e,t){if(n.mode==="home"){hh(n,e,t);return}if(n.paused||n.mode!=="tutorial"&&n.mode!=="flight"&&n.mode!=="offers"||!Number.isFinite(t)||t<=0)return;if(n.drop){if(n.mode!=="flight"&&n.mode!=="tutorial")n.drop=null;else{if(n.drop.t+=Math.max(0,t),n.drop.t>=$c){const g=n.drop.stopId;n.drop=null,Zh(n,g)}n.revision++}return}const i=Math.max(0,t);if(n.haloFade>0&&(n.haloFade=Math.max(0,n.haloFade-i),n.haloFade===0&&rd(n),n.revision++,n.haloFade>0||n.drop||n.descent))return;if(n.descent){const g=yt.find(S=>S.id===n.descent.stopId);if(n.mode!=="flight"&&n.mode!=="tutorial"||!g)n.descent=null,n.player.hover=!1;else{const S=g.position.y+Nh;if(n.player.position.y-S<=.05)n.descent=null,Kh(n,g);else{const P=n.descent,L=n.player.position.x,U=n.player.position.z,V=Math.min(kh,Math.max(Gh,(n.player.position.y-S)*1.5));n.player.position.y=Math.max(S,n.player.position.y-V*i),P.t+=i,P.angle+=P.dir*Fh*i;const Y=P.radius0+(P.orbitR-P.radius0)*Ga(P.t/Bh),O=Math.max(0,(n.player.position.y-S)/Math.max(.001,P.startY-S)),X=O>=Rl?1:Ga(O/Rl),B=Y*X,$=g.position.x+Math.cos(P.angle)*B,j=g.position.z+Math.sin(P.angle)*B,ne=$-L,re=j-U;if(Math.hypot(ne,re)>.75*i){const _e=Math.atan2(ne,-re),qe=Math.atan2(Math.sin(_e-n.player.yaw),Math.cos(_e-n.player.yaw)),lt=zh*i;n.player.yaw+=Math.max(-lt,Math.min(lt,qe))}n.player.position.x=$,n.player.position.z=j,n.revision++}}return}if(n.run&&(n.mode==="flight"||n.mode==="offers")){if(n.run.elapsed>=Bn-1e-9){n.run.elapsed=Bn,Fr(n,!1);return}const g=n.run.elapsed;if(n.run.elapsed=Math.min(Bn,g+i),n.run.elapsed>=Bn-1e-9){n.run.elapsed=Bn,Fr(n,!1);return}if(ad(n,g),n.mode==="offers"){n.revision++;return}}const r=n.player,s=En(e.turn,-1,1),a=En(e.climb,-1,1),o=Rh*(1+n.profile.upgrades.speed*.1),l=Ch*(1+n.profile.upgrades.handling*.2),c=Hh(r.speed,n.profile.upgrades.braking);r.yaw+=s*l*i,r.pitch+=(a*.38-r.pitch)*Math.min(1,7*i),e.cutThrottle&&(r.throttle=0),r.throttle=En(r.throttle+En(e.throttle,-1,1)*Ph*i,0,o);let u,d=1/0;const h=r.hover?void 0:Vs(n);if(h){const g=h.position.x-r.position.x,S=h.position.z-r.position.z;d=Math.hypot(g,S),d<Cl?(u=0,r.brakeHold=!0):r.brakeHold&&d<Vh?u=0:d>1e-6&&(r.velocity.x*g+r.velocity.z*S)/d>.5&&(u=Math.sqrt(2*Zc*d)),u===void 0&&(r.brakeHold=!1)}else r.brakeHold=!1;const f=r.throttle>Wh?r.throttle:r.speed,v=r.hover?0:u===void 0?r.throttle:Math.min(u,f);r.speed=En(r.speed+En(v-r.speed,-c*i,Lh*i),0,o),Math.abs(r.speed)<.01&&(r.speed=0),r.brakeHold&&r.speed===0&&(r.brakeHold=!1,d>=Cl&&(r.throttle=0));const y={x:Math.sin(r.yaw),z:-Math.cos(r.yaw)},m=r.hover?0:a*Math.max(r.speed,3)*.7,p={x:y.x*r.speed*i,y:m*i,z:y.z*r.speed*i};Xh(r.position,p);const E=r.position.x,A=r.position.y,x=r.position.z,T=nd(r.position,p);if(T&&(T.normal.x||T.normal.y||T.normal.z)){const g=Math.max(0,T.t-1e-4);r.position.x+=p.x*g,r.position.y+=p.y*g,r.position.z+=p.z*g;const S=1-g;T.normal.x||(r.position.x+=p.x*S),T.normal.y||(r.position.y+=p.y*S),T.normal.z||(r.position.z+=p.z*S)}else T||(r.position.x+=p.x,r.position.y+=p.y,r.position.z+=p.z);r.position.x=En(r.position.x,-Er+pn,Er-pn);const b=Math.max(Zi(r.position.x,r.position.z),0)+wh;r.position.y=En(r.position.y,b,Ah),r.position.z=En(r.position.z,-Er+pn,Er-pn),r.velocity={x:(r.position.x-E)/i,y:(r.position.y-A)/i,z:(r.position.z-x)/i};const R=qh({x:r.position.x-E,y:r.position.y-A,z:r.position.z-x});n.mode==="tutorial"&&n.tutorialStage===0&&R>.1?(n.tutorialStage=1,n.message=n.coarsePointer?"Release the stick to slow down and hover.":"Press Space to slow down and hover."):n.mode==="tutorial"&&n.tutorialStage===1&&Math.abs(r.speed)<.5&&(n.tutorialStage=2,n.message="Nice and steady. Drift over the glowing Harbor Cafe pad — the parcel drops itself."),id(n),n.revision++}function ad(n,e){const t=Bn-n.run.elapsed,i=Bn-e;i>30&&t<=30?n.message="30 seconds left — return home before nightfall!":i>60&&t<=60?n.message="One minute left — Meg needs to head home.":i>120&&t<=120&&(n.message="Two minutes left — finish up before nightfall.")}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vo="185",od=0,Ll=1,ld=2,Ss=1,cd=2,Tr=3,li=0,qt=1,ln=2,Vn=0,Ji=1,Va=2,Dl=3,Il=4,ud=5,gi=100,hd=101,dd=102,fd=103,pd=104,md=200,gd=201,_d=202,vd=203,Wa=204,Xa=205,xd=206,Md=207,yd=208,Sd=209,bd=210,Ed=211,Td=212,wd=213,Ad=214,qa=0,Ya=1,$a=2,ir=3,Ka=4,Za=5,Ja=6,Qa=7,su=0,Rd=1,Cd=2,Cn=0,au=1,ou=2,lu=3,Wo=4,cu=5,uu=6,hu=7,du=300,bi=301,rr=302,js=303,ea=304,Ws=306,Ps=1e3,kn=1001,ja=1002,Ut=1003,Pd=1004,$r=1005,Ht=1006,ta=1007,xi=1008,nn=1009,fu=1010,pu=1011,Or=1012,Xo=1013,Ln=1014,An=1015,Yn=1016,qo=1017,Yo=1018,Br=1020,mu=35902,gu=35899,_u=1021,vu=1022,vn=1023,$n=1026,Mi=1027,xu=1028,$o=1029,Ei=1030,Ko=1031,Zo=1033,bs=33776,Es=33777,Ts=33778,ws=33779,eo=35840,to=35841,no=35842,io=35843,ro=36196,so=37492,ao=37496,oo=37488,lo=37489,Ls=37490,co=37491,uo=37808,ho=37809,fo=37810,po=37811,mo=37812,go=37813,_o=37814,vo=37815,xo=37816,Mo=37817,yo=37818,So=37819,bo=37820,Eo=37821,To=36492,wo=36494,Ao=36495,Ro=36283,Co=36284,Ds=36285,Po=36286,Ld=3200,Lo=0,Dd=1,ai="",Zt="srgb",Is="srgb-linear",Us="linear",je="srgb",Pi=7680,Ul=519,Id=512,Ud=513,Nd=514,Jo=515,Fd=516,Od=517,Qo=518,Bd=519,Do=35044,Nl="300 es",Rn=2e3,zr=2001;function zd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ns(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function kd(){const n=Ns("canvas");return n.style.display="block",n}const Fl={};function Fs(...n){const e="THREE."+n.shift();console.log(e,...n)}function Mu(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function De(...n){n=Mu(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function We(...n){n=Mu(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Qi(...n){const e=n.join(" ");e in Fl||(Fl[e]=!0,De(...n))}function Gd(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Hd={[qa]:Ya,[$a]:Ja,[Ka]:Qa,[ir]:Za,[Ya]:qa,[Ja]:$a,[Qa]:Ka,[Za]:ir};class wi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ol=1234567;const Rr=Math.PI/180,kr=180/Math.PI;function Wn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function Ge(n,e,t){return Math.max(e,Math.min(t,n))}function jo(n,e){return(n%e+e)%e}function Vd(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Wd(n,e,t){return n!==e?(t-n)/(e-n):0}function Cr(n,e,t){return(1-t)*n+t*e}function Xd(n,e,t,i){return Cr(n,e,1-Math.exp(-t*i))}function qd(n,e=1){return e-Math.abs(jo(n,e*2)-e)}function Yd(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function $d(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Kd(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Zd(n,e){return n+Math.random()*(e-n)}function Jd(n){return n*(.5-Math.random())}function Qd(n){n!==void 0&&(Ol=n);let e=Ol+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jd(n){return n*Rr}function ef(n){return n*kr}function tf(n){return(n&n-1)===0&&n!==0}function nf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function rf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function sf(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),u=a((e+i)/2),d=s((e-i)/2),h=a((e-i)/2),f=s((i-e)/2),v=a((i-e)/2);switch(r){case"XYX":n.set(o*u,l*d,l*h,o*c);break;case"YZY":n.set(l*h,o*u,l*d,o*c);break;case"ZXZ":n.set(l*d,l*h,o*u,o*c);break;case"XZX":n.set(o*u,l*v,l*f,o*c);break;case"YXY":n.set(l*f,o*u,l*v,o*c);break;case"ZYZ":n.set(l*v,l*f,o*u,o*c);break;default:De("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function _n(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function et(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Kr={DEG2RAD:Rr,RAD2DEG:kr,generateUUID:Wn,clamp:Ge,euclideanModulo:jo,mapLinear:Vd,inverseLerp:Wd,lerp:Cr,damp:Xd,pingpong:qd,smoothstep:Yd,smootherstep:$d,randInt:Kd,randFloat:Zd,randFloatSpread:Jd,seededRandom:Qd,degToRad:jd,radToDeg:ef,isPowerOfTwo:tf,ceilPowerOfTwo:nf,floorPowerOfTwo:rf,setQuaternionFromProperEuler:sf,normalize:et,denormalize:_n},fl=class fl{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ge(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};fl.prototype.isVector2=!0;let ye=fl;class lr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3],h=s[a+0],f=s[a+1],v=s[a+2],y=s[a+3];if(d!==y||l!==h||c!==f||u!==v){let m=l*h+c*f+u*v+d*y;m<0&&(h=-h,f=-f,v=-v,y=-y,m=-m);let p=1-o;if(m<.9995){const E=Math.acos(m),A=Math.sin(E);p=Math.sin(p*E)/A,o=Math.sin(o*E)/A,l=l*p+h*o,c=c*p+f*o,u=u*p+v*o,d=d*p+y*o}else{l=l*p+h*o,c=c*p+f*o,u=u*p+v*o,d=d*p+y*o;const E=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=E,c*=E,u*=E,d*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[a],h=s[a+1],f=s[a+2],v=s[a+3];return e[t]=o*v+u*d+l*f-c*h,e[t+1]=l*v+u*h+c*d-o*f,e[t+2]=c*v+u*f+o*h-l*d,e[t+3]=u*v-o*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),d=o(s/2),h=l(i/2),f=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=h*u*d+c*f*v,this._y=c*f*d-h*u*v,this._z=c*u*v+h*f*d,this._w=c*u*d-h*f*v;break;case"YXZ":this._x=h*u*d+c*f*v,this._y=c*f*d-h*u*v,this._z=c*u*v-h*f*d,this._w=c*u*d+h*f*v;break;case"ZXY":this._x=h*u*d-c*f*v,this._y=c*f*d+h*u*v,this._z=c*u*v+h*f*d,this._w=c*u*d-h*f*v;break;case"ZYX":this._x=h*u*d-c*f*v,this._y=c*f*d+h*u*v,this._z=c*u*v-h*f*d,this._w=c*u*d+h*f*v;break;case"YZX":this._x=h*u*d+c*f*v,this._y=c*f*d+h*u*v,this._z=c*u*v-h*f*d,this._w=c*u*d-h*f*v;break;case"XZY":this._x=h*u*d-c*f*v,this._y=c*f*d-h*u*v,this._z=c*u*v+h*f*d,this._w=c*u*d+h*f*v;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+o+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-r)*f}else if(i>o&&i>d){const f=2*Math.sqrt(1+i-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-i-d);this._w=(s-c)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-i-o);this._w=(a-r)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ge(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const pl=class pl{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),d=2*(s*i-a*t);return this.x=t+l*c+a*d-o*u,this.y=i+l*u+o*c-s*d,this.z=r+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return na.copy(this).projectOnVector(e),this.sub(na)}reflect(e){return this.sub(na.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ge(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};pl.prototype.isVector3=!0;let C=pl;const na=new C,Bl=new lr,ml=class ml{constructor(e,t,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],f=i[5],v=i[8],y=r[0],m=r[3],p=r[6],E=r[1],A=r[4],x=r[7],T=r[2],b=r[5],R=r[8];return s[0]=a*y+o*E+l*T,s[3]=a*m+o*A+l*b,s[6]=a*p+o*x+l*R,s[1]=c*y+u*E+d*T,s[4]=c*m+u*A+d*b,s[7]=c*p+u*x+d*R,s[2]=h*y+f*E+v*T,s[5]=h*m+f*A+v*b,s[8]=h*p+f*x+v*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*s,f=c*s-a*l,v=t*d+i*h+r*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=d*y,e[1]=(r*c-u*i)*y,e[2]=(o*i-r*a)*y,e[3]=h*y,e[4]=(u*t-r*l)*y,e[5]=(r*s-o*t)*y,e[6]=f*y,e[7]=(i*l-c*t)*y,e[8]=(a*t-i*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Qi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ia.makeScale(e,t)),this}rotate(e){return Qi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ia.makeRotation(-e)),this}translate(e,t){return Qi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ia.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ml.prototype.isMatrix3=!0;let Ue=ml;const ia=new Ue,zl=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kl=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function af(){const n={enabled:!0,workingColorSpace:Is,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===je&&(r.r=Xn(r.r),r.g=Xn(r.g),r.b=Xn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===je&&(r.r=ji(r.r),r.g=ji(r.g),r.b=ji(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ai?Us:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Qi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Qi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Is]:{primaries:e,whitePoint:i,transfer:Us,toXYZ:zl,fromXYZ:kl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Zt},outputColorSpaceConfig:{drawingBufferColorSpace:Zt}},[Zt]:{primaries:e,whitePoint:i,transfer:je,toXYZ:zl,fromXYZ:kl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Zt}}}),n}const Xe=af();function Xn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ji(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Li;class of{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Li===void 0&&(Li=Ns("canvas")),Li.width=e.width,Li.height=e.height;const r=Li.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Li}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ns("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Xn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Xn(t[i]/255)*255):t[i]=Xn(t[i]);return{data:t,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let lf=0;class el{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=Wn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ra(r[a].image)):s.push(ra(r[a]))}else s=ra(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ra(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?of.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}let cf=0;const sa=new C;class Ot extends wi{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,i=kn,r=kn,s=Ht,a=xi,o=vn,l=nn,c=Ot.DEFAULT_ANISOTROPY,u=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=Wn(),this.name="",this.source=new el(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(sa).x}get height(){return this.source.getSize(sa).y}get depth(){return this.source.getSize(sa).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){De(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){De(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==du)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ps:e.x=e.x-Math.floor(e.x);break;case kn:e.x=e.x<0?0:1;break;case ja:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ps:e.y=e.y-Math.floor(e.y);break;case kn:e.y=e.y<0?0:1;break;case ja:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=du;Ot.DEFAULT_ANISOTROPY=1;const gl=class gl{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],v=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-y)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+y)<.1&&Math.abs(v+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,x=(f+1)/2,T=(p+1)/2,b=(u+h)/4,R=(d+y)/4,g=(v+m)/4;return A>x&&A>T?A<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(A),r=b/i,s=R/i):x>T?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=b/r,s=g/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=R/s,r=g/s),this.set(i,r,s,t),this}let E=Math.sqrt((m-v)*(m-v)+(d-y)*(d-y)+(h-u)*(h-u));return Math.abs(E)<.001&&(E=1),this.x=(m-v)/E,this.y=(d-y)/E,this.z=(h-u)/E,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this.w=Ge(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this.w=Ge(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};gl.prototype.isVector4=!0;let ft=gl;class uf extends wi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new Ot(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Ht,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new el(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pn extends uf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class yu extends Ot{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class hf extends Ot{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Hs=class Hs{constructor(e,t,i,r,s,a,o,l,c,u,d,h,f,v,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,d,h,f,v,y,m)}set(e,t,i,r,s,a,o,l,c,u,d,h,f,v,y,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=v,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Hs().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Di.setFromMatrixColumn(e,0).length(),s=1/Di.setFromMatrixColumn(e,1).length(),a=1/Di.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=a*u,f=a*d,v=o*u,y=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+v*c,t[5]=h-y*c,t[9]=-o*l,t[2]=y-h*c,t[6]=v+f*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,f=l*d,v=c*u,y=c*d;t[0]=h+y*o,t[4]=v*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-v,t[6]=y+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,f=l*d,v=c*u,y=c*d;t[0]=h-y*o,t[4]=-a*d,t[8]=v+f*o,t[1]=f+v*o,t[5]=a*u,t[9]=y-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,f=a*d,v=o*u,y=o*d;t[0]=l*u,t[4]=v*c-f,t[8]=h*c+y,t[1]=l*d,t[5]=y*c+h,t[9]=f*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,f=a*c,v=o*l,y=o*c;t[0]=l*u,t[4]=y-h*d,t[8]=v*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*d+v,t[10]=h-y*d}else if(e.order==="XZY"){const h=a*l,f=a*c,v=o*l,y=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+y,t[5]=a*u,t[9]=f*d-v,t[2]=v*d-f,t[6]=o*u,t[10]=y*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(df,e,ff)}lookAt(e,t,i){const r=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),jn.crossVectors(i,Qt),jn.lengthSq()===0&&(Math.abs(i.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),jn.crossVectors(i,Qt)),jn.normalize(),Zr.crossVectors(Qt,jn),r[0]=jn.x,r[4]=Zr.x,r[8]=Qt.x,r[1]=jn.y,r[5]=Zr.y,r[9]=Qt.y,r[2]=jn.z,r[6]=Zr.z,r[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],f=i[13],v=i[2],y=i[6],m=i[10],p=i[14],E=i[3],A=i[7],x=i[11],T=i[15],b=r[0],R=r[4],g=r[8],S=r[12],P=r[1],L=r[5],U=r[9],V=r[13],Y=r[2],O=r[6],X=r[10],B=r[14],$=r[3],j=r[7],ne=r[11],re=r[15];return s[0]=a*b+o*P+l*Y+c*$,s[4]=a*R+o*L+l*O+c*j,s[8]=a*g+o*U+l*X+c*ne,s[12]=a*S+o*V+l*B+c*re,s[1]=u*b+d*P+h*Y+f*$,s[5]=u*R+d*L+h*O+f*j,s[9]=u*g+d*U+h*X+f*ne,s[13]=u*S+d*V+h*B+f*re,s[2]=v*b+y*P+m*Y+p*$,s[6]=v*R+y*L+m*O+p*j,s[10]=v*g+y*U+m*X+p*ne,s[14]=v*S+y*V+m*B+p*re,s[3]=E*b+A*P+x*Y+T*$,s[7]=E*R+A*L+x*O+T*j,s[11]=E*g+A*U+x*X+T*ne,s[15]=E*S+A*V+x*B+T*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],v=e[3],y=e[7],m=e[11],p=e[15],E=l*f-c*h,A=o*f-c*d,x=o*h-l*d,T=a*f-c*u,b=a*h-l*u,R=a*d-o*u;return t*(y*E-m*A+p*x)-i*(v*E-m*T+p*b)+r*(v*A-y*T+p*R)-s*(v*x-y*b+m*R)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-i*(s*u-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],v=e[12],y=e[13],m=e[14],p=e[15],E=t*o-i*a,A=t*l-r*a,x=t*c-s*a,T=i*l-r*o,b=i*c-s*o,R=r*c-s*l,g=u*y-d*v,S=u*m-h*v,P=u*p-f*v,L=d*m-h*y,U=d*p-f*y,V=h*p-f*m,Y=E*V-A*U+x*L+T*P-b*S+R*g;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/Y;return e[0]=(o*V-l*U+c*L)*O,e[1]=(r*U-i*V-s*L)*O,e[2]=(y*R-m*b+p*T)*O,e[3]=(h*b-d*R-f*T)*O,e[4]=(l*P-a*V-c*S)*O,e[5]=(t*V-r*P+s*S)*O,e[6]=(m*x-v*R-p*A)*O,e[7]=(u*R-h*x+f*A)*O,e[8]=(a*U-o*P+c*g)*O,e[9]=(i*P-t*U-s*g)*O,e[10]=(v*b-y*x+p*E)*O,e[11]=(d*x-u*b-f*E)*O,e[12]=(o*S-a*L-l*g)*O,e[13]=(t*L-i*S+r*g)*O,e[14]=(y*A-v*T-m*E)*O,e[15]=(u*T-d*A+h*E)*O,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,h=s*c,f=s*u,v=s*d,y=a*u,m=a*d,p=o*d,E=l*c,A=l*u,x=l*d,T=i.x,b=i.y,R=i.z;return r[0]=(1-(y+p))*T,r[1]=(f+x)*T,r[2]=(v-A)*T,r[3]=0,r[4]=(f-x)*b,r[5]=(1-(h+p))*b,r[6]=(m+E)*b,r[7]=0,r[8]=(v+A)*R,r[9]=(m-E)*R,r[10]=(1-(h+y))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let a=Di.set(r[0],r[1],r[2]).length();const o=Di.set(r[4],r[5],r[6]).length(),l=Di.set(r[8],r[9],r[10]).length();s<0&&(a=-a),hn.copy(this);const c=1/a,u=1/o,d=1/l;return hn.elements[0]*=c,hn.elements[1]*=c,hn.elements[2]*=c,hn.elements[4]*=u,hn.elements[5]*=u,hn.elements[6]*=u,hn.elements[8]*=d,hn.elements[9]*=d,hn.elements[10]*=d,t.setFromRotationMatrix(hn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,a,o=Rn,l=!1){const c=this.elements,u=2*s/(t-e),d=2*s/(i-r),h=(t+e)/(t-e),f=(i+r)/(i-r);let v,y;if(l)v=s/(a-s),y=a*s/(a-s);else if(o===Rn)v=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(o===zr)v=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Rn,l=!1){const c=this.elements,u=2/(t-e),d=2/(i-r),h=-(t+e)/(t-e),f=-(i+r)/(i-r);let v,y;if(l)v=1/(a-s),y=a/(a-s);else if(o===Rn)v=-2/(a-s),y=-(a+s)/(a-s);else if(o===zr)v=-1/(a-s),y=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=v,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Hs.prototype.isMatrix4=!0;let ut=Hs;const Di=new C,hn=new ut,df=new C(0,0,0),ff=new C(1,1,1),jn=new C,Zr=new C,Qt=new C,Gl=new ut,Hl=new lr;class Ti{constructor(e=0,t=0,i=0,r=Ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ge(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Gl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hl.setFromEuler(this),this.setFromQuaternion(Hl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ti.DEFAULT_ORDER="XYZ";class tl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pf=0;const Vl=new C,Ii=new lr,Dn=new ut,Jr=new C,pr=new C,mf=new C,gf=new lr,Wl=new C(1,0,0),Xl=new C(0,1,0),ql=new C(0,0,1),Yl={type:"added"},_f={type:"removed"},Ui={type:"childadded",child:null},aa={type:"childremoved",child:null};class Nt extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=Wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DEFAULT_UP.clone();const e=new C,t=new Ti,i=new lr,r=new C(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new Ue}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=Nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ii.setFromAxisAngle(e,t),this.quaternion.multiply(Ii),this}rotateOnWorldAxis(e,t){return Ii.setFromAxisAngle(e,t),this.quaternion.premultiply(Ii),this}rotateX(e){return this.rotateOnAxis(Wl,e)}rotateY(e){return this.rotateOnAxis(Xl,e)}rotateZ(e){return this.rotateOnAxis(ql,e)}translateOnAxis(e,t){return Vl.copy(e).applyQuaternion(this.quaternion),this.position.add(Vl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wl,e)}translateY(e){return this.translateOnAxis(Xl,e)}translateZ(e){return this.translateOnAxis(ql,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Jr.copy(e):Jr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(pr,Jr,this.up):Dn.lookAt(Jr,pr,this.up),this.quaternion.setFromRotationMatrix(Dn),r&&(Dn.extractRotation(r.matrixWorld),Ii.setFromRotationMatrix(Dn),this.quaternion.premultiply(Ii.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(We("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yl),Ui.child=e,this.dispatchEvent(Ui),Ui.child=null):We("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_f),aa.child=e,this.dispatchEvent(aa),aa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yl),Ui.child=e,this.dispatchEvent(Ui),Ui.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,e,mf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,gf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Nt.DEFAULT_UP=new C(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Je extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vf={type:"move"};class oa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const y of e.hand.values()){const m=t.getJointPose(y,i),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,v=.005;c.inputState.pinching&&h>f+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(vf)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Je;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Su={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},Qr={h:0,s:0,l:0};function la(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ve{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Xe.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Xe.workingColorSpace){if(e=jo(e,1),t=Ge(t,0,1),i=Ge(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=la(a,s,e+1/3),this.g=la(a,s,e),this.b=la(a,s,e-1/3)}return Xe.colorSpaceToWorking(this,r),this}setStyle(e,t=Zt){function i(s){s!==void 0&&parseFloat(s)<1&&De("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:De("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zt){const i=Su[e.toLowerCase()];return i!==void 0?this.setHex(i,t):De("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xn(e.r),this.g=Xn(e.g),this.b=Xn(e.b),this}copyLinearToSRGB(e){return this.r=ji(e.r),this.g=ji(e.g),this.b=ji(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zt){return Xe.workingToColorSpace(kt.copy(this),e),Math.round(Ge(kt.r*255,0,255))*65536+Math.round(Ge(kt.g*255,0,255))*256+Math.round(Ge(kt.b*255,0,255))}getHexString(e=Zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.workingToColorSpace(kt.copy(this),t);const i=kt.r,r=kt.g,s=kt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Xe.workingColorSpace){return Xe.workingToColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=Zt){Xe.workingToColorSpace(kt.copy(this),e);const t=kt.r,i=kt.g,r=kt.b;return e!==Zt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ei),this.setHSL(ei.h+e,ei.s+t,ei.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ei),e.getHSL(Qr);const i=Cr(ei.h,Qr.h,t),r=Cr(ei.s,Qr.s,t),s=Cr(ei.l,Qr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new Ve;Ve.NAMES=Su;class Os{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ve(e),this.density=t}clone(){return new Os(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class xf extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const dn=new C,In=new C,ca=new C,Un=new C,Ni=new C,Fi=new C,$l=new C,ua=new C,ha=new C,da=new C,fa=new ft,pa=new ft,ma=new ft;class cn{constructor(e=new C,t=new C,i=new C){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),dn.subVectors(e,t),r.cross(dn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){dn.subVectors(r,t),In.subVectors(i,t),ca.subVectors(e,t);const a=dn.dot(dn),o=dn.dot(In),l=dn.dot(ca),c=In.dot(In),u=In.dot(ca),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,f=(c*l-o*u)*h,v=(a*u-o*l)*h;return s.set(1-f-v,v,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Un)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Un.x),l.addScaledVector(a,Un.y),l.addScaledVector(o,Un.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return fa.setScalar(0),pa.setScalar(0),ma.setScalar(0),fa.fromBufferAttribute(e,t),pa.fromBufferAttribute(e,i),ma.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(fa,s.x),a.addScaledVector(pa,s.y),a.addScaledVector(ma,s.z),a}static isFrontFacing(e,t,i,r){return dn.subVectors(i,t),In.subVectors(e,t),dn.cross(In).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return dn.subVectors(this.c,this.b),In.subVectors(this.a,this.b),dn.cross(In).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return cn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return cn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Ni.subVectors(r,i),Fi.subVectors(s,i),ua.subVectors(e,i);const l=Ni.dot(ua),c=Fi.dot(ua);if(l<=0&&c<=0)return t.copy(i);ha.subVectors(e,r);const u=Ni.dot(ha),d=Fi.dot(ha);if(u>=0&&d<=u)return t.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Ni,a);da.subVectors(e,s);const f=Ni.dot(da),v=Fi.dot(da);if(v>=0&&f<=v)return t.copy(s);const y=f*c-l*v;if(y<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(i).addScaledVector(Fi,o);const m=u*v-f*d;if(m<=0&&d-u>=0&&f-v>=0)return $l.subVectors(s,r),o=(d-u)/(d-u+(f-v)),t.copy(r).addScaledVector($l,o);const p=1/(m+y+h);return a=y*p,o=h*p,t.copy(i).addScaledVector(Ni,a).addScaledVector(Fi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Hr{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,fn):fn.fromBufferAttribute(s,a),fn.applyMatrix4(e.matrixWorld),this.expandByPoint(fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),jr.copy(i.boundingBox)),jr.applyMatrix4(e.matrixWorld),this.union(jr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fn),fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mr),es.subVectors(this.max,mr),Oi.subVectors(e.a,mr),Bi.subVectors(e.b,mr),zi.subVectors(e.c,mr),ti.subVectors(Bi,Oi),ni.subVectors(zi,Bi),ui.subVectors(Oi,zi);let t=[0,-ti.z,ti.y,0,-ni.z,ni.y,0,-ui.z,ui.y,ti.z,0,-ti.x,ni.z,0,-ni.x,ui.z,0,-ui.x,-ti.y,ti.x,0,-ni.y,ni.x,0,-ui.y,ui.x,0];return!ga(t,Oi,Bi,zi,es)||(t=[1,0,0,0,1,0,0,0,1],!ga(t,Oi,Bi,zi,es))?!1:(ts.crossVectors(ti,ni),t=[ts.x,ts.y,ts.z],ga(t,Oi,Bi,zi,es))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Nn=[new C,new C,new C,new C,new C,new C,new C,new C],fn=new C,jr=new Hr,Oi=new C,Bi=new C,zi=new C,ti=new C,ni=new C,ui=new C,mr=new C,es=new C,ts=new C,hi=new C;function ga(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){hi.fromArray(n,s);const o=r.x*Math.abs(hi.x)+r.y*Math.abs(hi.y)+r.z*Math.abs(hi.z),l=e.dot(hi),c=t.dot(hi),u=i.dot(hi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Et=new C,ns=new ye;let Mf=0;class rn extends wi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Mf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Do,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ns.fromBufferAttribute(this,t),ns.applyMatrix3(e),this.setXY(t,ns.x,ns.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=_n(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=et(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_n(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_n(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_n(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_n(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),i=et(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),i=et(i,this.array),r=et(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),i=et(i,this.array),r=et(r,this.array),s=et(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Do&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class bu extends rn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Eu extends rn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ht extends rn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const yf=new Hr,gr=new C,_a=new C;class nl{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):yf.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gr.subVectors(e,this.center);const t=gr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(gr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_a.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gr.copy(e.center).add(_a)),this.expandByPoint(gr.copy(e.center).sub(_a))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Sf=0;const an=new ut,va=new Nt,ki=new C,jt=new Hr,_r=new Hr,Dt=new C;class Vt extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=Wn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zd(e)?Eu:bu)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ue().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,i){return an.makeTranslation(e,t,i),this.applyMatrix4(an),this}scale(e,t,i){return an.makeScale(e,t,i),this.applyMatrix4(an),this}lookAt(e){return va.lookAt(e),va.updateMatrix(),this.applyMatrix4(va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ki).negate(),this.translate(ki.x,ki.y,ki.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ht(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];jt.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&We('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const i=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];_r.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(jt.min,_r.min),jt.expandByPoint(Dt),Dt.addVectors(jt.max,_r.max),jt.expandByPoint(Dt)):(jt.expandByPoint(_r.min),jt.expandByPoint(_r.max))}jt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Dt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Dt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Dt.fromBufferAttribute(o,c),l&&(ki.fromBufferAttribute(e,c),Dt.add(ki)),r=Math.max(r,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&We('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){We("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new rn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let g=0;g<i.count;g++)o[g]=new C,l[g]=new C;const c=new C,u=new C,d=new C,h=new ye,f=new ye,v=new ye,y=new C,m=new C;function p(g,S,P){c.fromBufferAttribute(i,g),u.fromBufferAttribute(i,S),d.fromBufferAttribute(i,P),h.fromBufferAttribute(s,g),f.fromBufferAttribute(s,S),v.fromBufferAttribute(s,P),u.sub(c),d.sub(c),f.sub(h),v.sub(h);const L=1/(f.x*v.y-v.x*f.y);isFinite(L)&&(y.copy(u).multiplyScalar(v.y).addScaledVector(d,-f.y).multiplyScalar(L),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-v.x).multiplyScalar(L),o[g].add(y),o[S].add(y),o[P].add(y),l[g].add(m),l[S].add(m),l[P].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let g=0,S=E.length;g<S;++g){const P=E[g],L=P.start,U=P.count;for(let V=L,Y=L+U;V<Y;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const A=new C,x=new C,T=new C,b=new C;function R(g){T.fromBufferAttribute(r,g),b.copy(T);const S=o[g];A.copy(S),A.sub(T.multiplyScalar(T.dot(S))).normalize(),x.crossVectors(b,S);const L=x.dot(l[g])<0?-1:1;a.setXYZW(g,A.x,A.y,A.z,L)}for(let g=0,S=E.length;g<S;++g){const P=E[g],L=P.start,U=P.count;for(let V=L,Y=L+U;V<Y;V+=3)R(e.getX(V+0)),R(e.getX(V+1)),R(e.getX(V+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new rn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const r=new C,s=new C,a=new C,o=new C,l=new C,c=new C,u=new C,d=new C;if(e)for(let h=0,f=e.count;h<f;h+=3){const v=e.getX(h+0),y=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let f=0,v=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*u;for(let p=0;p<u;p++)h[v++]=c[f++]}return new rn(h,u,d)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vt,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=e(h,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Do,this.updateRanges=[],this.version=0,this.uuid=Wn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Wt=new C;class Bs{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=_n(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=et(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=_n(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=_n(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=_n(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=_n(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),i=et(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),i=et(i,this.array),r=et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),i=et(i,this.array),r=et(r,this.array),s=et(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Fs("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new rn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Bs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Fs("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Ef=0;class cr extends wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=Wn(),this.name="",this.type="Material",this.blending=Ji,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wa,this.blendDst=Xa,this.blendEquation=gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ul,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pi,this.stencilZFail=Pi,this.stencilZPass=Pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){De(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){De(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ji&&(i.blending=this.blending),this.side!==li&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wa&&(i.blendSrc=this.blendSrc),this.blendDst!==Xa&&(i.blendDst=this.blendDst),this.blendEquation!==gi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ir&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ul&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Pi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Pi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ve().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ye().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ye().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Tu extends cr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Gi;const vr=new C,Hi=new C,Vi=new C,Wi=new ye,xr=new ye,wu=new ut,is=new C,Mr=new C,rs=new C,Kl=new ye,xa=new ye,Zl=new ye;class Tf extends Nt{constructor(e=new Tu){if(super(),this.isSprite=!0,this.type="Sprite",Gi===void 0){Gi=new Vt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new bf(t,5);Gi.setIndex([0,1,2,0,2,3]),Gi.setAttribute("position",new Bs(i,3,0,!1)),Gi.setAttribute("uv",new Bs(i,2,3,!1))}this.geometry=Gi,this.material=e,this.center=new ye(.5,.5),this.count=1}raycast(e,t){e.camera===null&&We('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hi.setFromMatrixScale(this.matrixWorld),wu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Vi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hi.multiplyScalar(-Vi.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;ss(is.set(-.5,-.5,0),Vi,a,Hi,r,s),ss(Mr.set(.5,-.5,0),Vi,a,Hi,r,s),ss(rs.set(.5,.5,0),Vi,a,Hi,r,s),Kl.set(0,0),xa.set(1,0),Zl.set(1,1);let o=e.ray.intersectTriangle(is,Mr,rs,!1,vr);if(o===null&&(ss(Mr.set(-.5,.5,0),Vi,a,Hi,r,s),xa.set(0,1),o=e.ray.intersectTriangle(is,rs,Mr,!1,vr),o===null))return;const l=e.ray.origin.distanceTo(vr);l<e.near||l>e.far||t.push({distance:l,point:vr.clone(),uv:cn.getInterpolation(vr,is,Mr,rs,Kl,xa,Zl,new ye),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ss(n,e,t,i,r,s){Wi.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(xr.x=s*Wi.x-r*Wi.y,xr.y=r*Wi.x+s*Wi.y):xr.copy(Wi),n.copy(e),n.x+=xr.x,n.y+=xr.y,n.applyMatrix4(wu)}const Fn=new C,Ma=new C,as=new C,ii=new C,ya=new C,os=new C,Sa=new C;class Au{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fn.copy(this.origin).addScaledVector(this.direction,t),Fn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ma.copy(e).add(t).multiplyScalar(.5),as.copy(t).sub(e).normalize(),ii.copy(this.origin).sub(Ma);const s=e.distanceTo(t)*.5,a=-this.direction.dot(as),o=ii.dot(this.direction),l=-ii.dot(as),c=ii.lengthSq(),u=Math.abs(1-a*a);let d,h,f,v;if(u>0)if(d=a*l-o,h=a*o-l,v=s*u,d>=0)if(h>=-v)if(h<=v){const y=1/u;d*=y,h*=y,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-v?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c):h<=v?(d=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Ma).addScaledVector(as,h),f}intersectSphere(e,t){Fn.subVectors(e.center,this.origin);const i=Fn.dot(this.direction),r=Fn.dot(Fn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Fn)!==null}intersectTriangle(e,t,i,r,s){ya.subVectors(t,e),os.subVectors(i,e),Sa.crossVectors(ya,os);let a=this.direction.dot(Sa),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ii.subVectors(this.origin,e);const l=o*this.direction.dot(os.crossVectors(ii,os));if(l<0)return null;const c=o*this.direction.dot(ya.cross(ii));if(c<0||l+c>a)return null;const u=-o*ii.dot(Sa);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yi extends cr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=su,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Jl=new ut,di=new Au,ls=new nl,Ql=new C,cs=new C,us=new C,hs=new C,ba=new C,ds=new C,jl=new C,fs=new C;class Me extends Nt{constructor(e=new Vt,t=new yi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ds.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(ba.fromBufferAttribute(d,e),a?ds.addScaledVector(ba,u):ds.addScaledVector(ba.sub(t),u))}t.add(ds)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ls.copy(i.boundingSphere),ls.applyMatrix4(s),di.copy(e.ray).recast(e.near),!(ls.containsPoint(di.origin)===!1&&(di.intersectSphere(ls,Ql)===null||di.origin.distanceToSquared(Ql)>(e.far-e.near)**2))&&(Jl.copy(s).invert(),di.copy(e.ray).applyMatrix4(Jl),!(i.boundingBox!==null&&di.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,di)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,y=h.length;v<y;v++){const m=h[v],p=a[m.materialIndex],E=Math.max(m.start,f.start),A=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=E,T=A;x<T;x+=3){const b=o.getX(x),R=o.getX(x+1),g=o.getX(x+2);r=ps(this,p,e,i,c,u,d,b,R,g),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=v,p=y;m<p;m+=3){const E=o.getX(m),A=o.getX(m+1),x=o.getX(m+2);r=ps(this,a,e,i,c,u,d,E,A,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,y=h.length;v<y;v++){const m=h[v],p=a[m.materialIndex],E=Math.max(m.start,f.start),A=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=E,T=A;x<T;x+=3){const b=x,R=x+1,g=x+2;r=ps(this,p,e,i,c,u,d,b,R,g),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=v,p=y;m<p;m+=3){const E=m,A=m+1,x=m+2;r=ps(this,a,e,i,c,u,d,E,A,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function wf(n,e,t,i,r,s,a,o){let l;if(e.side===qt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===li,o),l===null)return null;fs.copy(o),fs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(fs);return c<t.near||c>t.far?null:{distance:c,point:fs.clone(),object:n}}function ps(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,cs),n.getVertexPosition(l,us),n.getVertexPosition(c,hs);const u=wf(n,e,t,i,cs,us,hs,jl);if(u){const d=new C;cn.getBarycoord(jl,cs,us,hs,d),r&&(u.uv=cn.getInterpolatedAttribute(r,o,l,c,d,new ye)),s&&(u.uv1=cn.getInterpolatedAttribute(s,o,l,c,d,new ye)),a&&(u.normal=cn.getInterpolatedAttribute(a,o,l,c,d,new C),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new C,materialIndex:0};cn.getNormal(cs,us,hs,h.normal),u.face=h,u.barycoord=d}return u}class Af extends Ot{constructor(e=null,t=1,i=1,r,s,a,o,l,c=Ut,u=Ut,d,h){super(null,a,o,l,c,u,r,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ea=new C,Rf=new C,Cf=new Ue;class mi{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ea.subVectors(i,t).cross(Rf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(Ea),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Cf.getNormalMatrix(e),r=this.coplanarPoint(Ea).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fi=new nl,Pf=new ye(.5,.5),ms=new C;class il{constructor(e=new mi,t=new mi,i=new mi,r=new mi,s=new mi,a=new mi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Rn,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],d=s[5],h=s[6],f=s[7],v=s[8],y=s[9],m=s[10],p=s[11],E=s[12],A=s[13],x=s[14],T=s[15];if(r[0].setComponents(c-a,f-u,p-v,T-E).normalize(),r[1].setComponents(c+a,f+u,p+v,T+E).normalize(),r[2].setComponents(c+o,f+d,p+y,T+A).normalize(),r[3].setComponents(c-o,f-d,p-y,T-A).normalize(),i)r[4].setComponents(l,h,m,x).normalize(),r[5].setComponents(c-l,f-h,p-m,T-x).normalize();else if(r[4].setComponents(c-l,f-h,p-m,T-x).normalize(),t===Rn)r[5].setComponents(c+l,f+h,p+m,T+x).normalize();else if(t===zr)r[5].setComponents(l,h,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(e){fi.center.set(0,0,0);const t=Pf.distanceTo(e.center);return fi.radius=.7071067811865476+t,fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ms.x=r.normal.x>0?e.max.x:e.min.x,ms.y=r.normal.y>0?e.max.y:e.min.y,ms.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ms)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ru extends Ot{constructor(e=[],t=bi,i,r,s,a,o,l,c,u){super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rl extends Ot{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class sr extends Ot{constructor(e,t,i=Ln,r,s,a,o=Ut,l=Ut,c,u=$n,d=1){if(u!==$n&&u!==Mi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new el(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Lf extends sr{constructor(e,t=Ln,i=bi,r,s,a=Ut,o=Ut,l,c=$n){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,r,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Cu extends Ot{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Gt extends Vt{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,f=0;v("z","y","x",-1,-1,i,t,e,a,s,0),v("z","y","x",1,-1,i,t,-e,a,s,1),v("x","z","y",1,1,e,i,t,r,a,2),v("x","z","y",1,-1,e,i,-t,r,a,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(u,3)),this.setAttribute("uv",new ht(d,2));function v(y,m,p,E,A,x,T,b,R,g,S){const P=x/R,L=T/g,U=x/2,V=T/2,Y=b/2,O=R+1,X=g+1;let B=0,$=0;const j=new C;for(let ne=0;ne<X;ne++){const re=ne*L-V;for(let _e=0;_e<O;_e++){const qe=_e*P-U;j[y]=qe*E,j[m]=re*A,j[p]=Y,c.push(j.x,j.y,j.z),j[y]=0,j[m]=0,j[p]=b>0?1:-1,u.push(j.x,j.y,j.z),d.push(_e/R),d.push(1-ne/g),B+=1}}for(let ne=0;ne<g;ne++)for(let re=0;re<R;re++){const _e=h+re+O*ne,qe=h+re+O*(ne+1),lt=h+(re+1)+O*(ne+1),Ke=h+(re+1)+O*ne;l.push(_e,qe,Ke),l.push(qe,lt,Ke),$+=6}o.addGroup(f,$,S),f+=$,h+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Rt extends Vt{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],h=[],f=[];let v=0;const y=[],m=i/2;let p=0;E(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new ht(d,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(f,2));function E(){const x=new C,T=new C;let b=0;const R=(t-e)/i;for(let g=0;g<=s;g++){const S=[],P=g/s,L=P*(t-e)+e;for(let U=0;U<=r;U++){const V=U/r,Y=V*l+o,O=Math.sin(Y),X=Math.cos(Y);T.x=L*O,T.y=-P*i+m,T.z=L*X,d.push(T.x,T.y,T.z),x.set(O,R,X).normalize(),h.push(x.x,x.y,x.z),f.push(V,1-P),S.push(v++)}y.push(S)}for(let g=0;g<r;g++)for(let S=0;S<s;S++){const P=y[S][g],L=y[S+1][g],U=y[S+1][g+1],V=y[S][g+1];(e>0||S!==0)&&(u.push(P,L,V),b+=3),(t>0||S!==s-1)&&(u.push(L,U,V),b+=3)}c.addGroup(p,b,0),p+=b}function A(x){const T=v,b=new ye,R=new C;let g=0;const S=x===!0?e:t,P=x===!0?1:-1;for(let U=1;U<=r;U++)d.push(0,m*P,0),h.push(0,P,0),f.push(.5,.5),v++;const L=v;for(let U=0;U<=r;U++){const Y=U/r*l+o,O=Math.cos(Y),X=Math.sin(Y);R.x=S*X,R.y=m*P,R.z=S*O,d.push(R.x,R.y,R.z),h.push(0,P,0),b.x=O*.5+.5,b.y=X*.5*P+.5,f.push(b.x,b.y),v++}for(let U=0;U<r;U++){const V=T+U,Y=L+U;x===!0?u.push(Y,Y+1,V):u.push(Y+1,Y,V),g+=3}c.addGroup(p,g,x===!0?1:2),p+=g}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class en extends Rt{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new en(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class sl extends Vt{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],a=[];o(r),c(i),u(),this.setAttribute("position",new ht(s,3)),this.setAttribute("normal",new ht(s.slice(),3)),this.setAttribute("uv",new ht(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(E){const A=new C,x=new C,T=new C;for(let b=0;b<t.length;b+=3)f(t[b+0],A),f(t[b+1],x),f(t[b+2],T),l(A,x,T,E)}function l(E,A,x,T){const b=T+1,R=[];for(let g=0;g<=b;g++){R[g]=[];const S=E.clone().lerp(x,g/b),P=A.clone().lerp(x,g/b),L=b-g;for(let U=0;U<=L;U++)U===0&&g===b?R[g][U]=S:R[g][U]=S.clone().lerp(P,U/L)}for(let g=0;g<b;g++)for(let S=0;S<2*(b-g)-1;S++){const P=Math.floor(S/2);S%2===0?(h(R[g][P+1]),h(R[g+1][P]),h(R[g][P])):(h(R[g][P+1]),h(R[g+1][P+1]),h(R[g+1][P]))}}function c(E){const A=new C;for(let x=0;x<s.length;x+=3)A.x=s[x+0],A.y=s[x+1],A.z=s[x+2],A.normalize().multiplyScalar(E),s[x+0]=A.x,s[x+1]=A.y,s[x+2]=A.z}function u(){const E=new C;for(let A=0;A<s.length;A+=3){E.x=s[A+0],E.y=s[A+1],E.z=s[A+2];const x=m(E)/2/Math.PI+.5,T=p(E)/Math.PI+.5;a.push(x,1-T)}v(),d()}function d(){for(let E=0;E<a.length;E+=6){const A=a[E+0],x=a[E+2],T=a[E+4],b=Math.max(A,x,T),R=Math.min(A,x,T);b>.9&&R<.1&&(A<.2&&(a[E+0]+=1),x<.2&&(a[E+2]+=1),T<.2&&(a[E+4]+=1))}}function h(E){s.push(E.x,E.y,E.z)}function f(E,A){const x=E*3;A.x=e[x+0],A.y=e[x+1],A.z=e[x+2]}function v(){const E=new C,A=new C,x=new C,T=new C,b=new ye,R=new ye,g=new ye;for(let S=0,P=0;S<s.length;S+=9,P+=6){E.set(s[S+0],s[S+1],s[S+2]),A.set(s[S+3],s[S+4],s[S+5]),x.set(s[S+6],s[S+7],s[S+8]),b.set(a[P+0],a[P+1]),R.set(a[P+2],a[P+3]),g.set(a[P+4],a[P+5]),T.copy(E).add(A).add(x).divideScalar(3);const L=m(T);y(b,P+0,E,L),y(R,P+2,A,L),y(g,P+4,x,L)}}function y(E,A,x,T){T<0&&E.x===1&&(a[A]=E.x-1),x.x===0&&x.z===0&&(a[A]=T/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function p(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sl(e.vertices,e.indices,e.radius,e.detail)}}class Kn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){De("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const s=i.length;let a;t?a=t:a=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(s-1);const u=i[r],h=i[r+1]-u,f=(a-u)/h;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new ye:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new C,r=[],s=[],a=[],o=new C,l=new ut;for(let f=0;f<=e;f++){const v=f/e;r[f]=this.getTangentAt(v,new C)}s[0]=new C,a[0]=new C;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),d=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),h<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(r[f-1],r[f]),o.length()>Number.EPSILON){o.normalize();const v=Math.acos(Ge(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,v))}a[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(Ge(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let v=1;v<=e;v++)s[v].applyMatrix4(l.makeRotationAxis(r[v],f*v)),a[v].crossVectors(r[v],s[v])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Pu extends Kn{constructor(e=0,t=0,i=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ye){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Df extends Pu{constructor(e,t,i,r,s,a){super(e,t,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function al(){let n=0,e=0,t=0,i=0;function r(s,a,o,l){n=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,d){let h=(a-s)/c-(o-s)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+d)+(l-o)/d;h*=u,f*=u,r(a,o,h,f)},calc:function(s){const a=s*s,o=a*s;return n+e*s+t*a+i*o}}}const ec=new C,tc=new C,Ta=new al,wa=new al,Aa=new al;class Lu extends Kn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new C){const i=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=r[(o-1)%s]:(tc.subVectors(r[0],r[1]).add(r[0]),c=tc);const d=r[o%s],h=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(ec.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=ec),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);y<1e-4&&(y=1),v<1e-4&&(v=y),m<1e-4&&(m=y),Ta.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,v,y,m),wa.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,v,y,m),Aa.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,v,y,m)}else this.curveType==="catmullrom"&&(Ta.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),wa.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),Aa.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return i.set(Ta.calc(l),wa.calc(l),Aa.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new C().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function nc(n,e,t,i,r){const s=(i-e)*.5,a=(r-t)*.5,o=n*n,l=n*o;return(2*t-2*i+s+a)*l+(-3*t+3*i-2*s-a)*o+s*n+t}function If(n,e){const t=1-n;return t*t*e}function Uf(n,e){return 2*(1-n)*n*e}function Nf(n,e){return n*n*e}function Pr(n,e,t,i){return If(n,e)+Uf(n,t)+Nf(n,i)}function Ff(n,e){const t=1-n;return t*t*t*e}function Of(n,e){const t=1-n;return 3*t*t*n*e}function Bf(n,e){return 3*(1-n)*n*n*e}function zf(n,e){return n*n*n*e}function Lr(n,e,t,i,r){return Ff(n,e)+Of(n,t)+Bf(n,i)+zf(n,r)}class kf extends Kn{constructor(e=new ye,t=new ye,i=new ye,r=new ye){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ye){const i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Lr(e,r.x,s.x,a.x,o.x),Lr(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Gf extends Kn{constructor(e=new C,t=new C,i=new C,r=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new C){const i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Lr(e,r.x,s.x,a.x,o.x),Lr(e,r.y,s.y,a.y,o.y),Lr(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Hf extends Kn{constructor(e=new ye,t=new ye){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ye){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ye){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Du extends Kn{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Vf extends Kn{constructor(e=new ye,t=new ye,i=new ye){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ye){const i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(Pr(e,r.x,s.x,a.x),Pr(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Iu extends Kn{constructor(e=new C,t=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new C){const i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(Pr(e,r.x,s.x,a.x),Pr(e,r.y,s.y,a.y),Pr(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wf extends Kn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ye){const i=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],u=r[a>r.length-2?r.length-1:a+1],d=r[a>r.length-3?r.length-1:a+2];return i.set(nc(o,l.x,c.x,u.x,d.x),nc(o,l.y,c.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new ye().fromArray(r))}return this}}var Xf=Object.freeze({__proto__:null,ArcCurve:Df,CatmullRomCurve3:Lu,CubicBezierCurve:kf,CubicBezierCurve3:Gf,EllipseCurve:Pu,LineCurve:Hf,LineCurve3:Du,QuadraticBezierCurve:Vf,QuadraticBezierCurve3:Iu,SplineCurve:Wf});class ol extends sl{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ol(e.radius,e.detail)}}class qn extends Vt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,d=e/o,h=t/l,f=[],v=[],y=[],m=[];for(let p=0;p<u;p++){const E=p*h-a;for(let A=0;A<c;A++){const x=A*d-s;v.push(x,-E,0),y.push(0,0,1),m.push(A/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<o;E++){const A=E+c*p,x=E+c*(p+1),T=E+1+c*(p+1),b=E+1+c*p;f.push(A,x,b),f.push(x,T,b)}this.setIndex(f),this.setAttribute("position",new ht(v,3)),this.setAttribute("normal",new ht(y,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qn(e.width,e.height,e.widthSegments,e.heightSegments)}}class wt extends Vt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new C,h=new C,f=[],v=[],y=[],m=[];for(let p=0;p<=i;p++){const E=[],A=p/i,x=a+A*o,T=e*Math.cos(x),b=Math.sqrt(e*e-T*T);let R=0;p===0&&a===0?R=.5/t:p===i&&l===Math.PI&&(R=-.5/t);for(let g=0;g<=t;g++){const S=g/t,P=r+S*s;d.x=-b*Math.cos(P),d.y=T,d.z=b*Math.sin(P),v.push(d.x,d.y,d.z),h.copy(d).normalize(),y.push(h.x,h.y,h.z),m.push(S+R,1-A),E.push(c++)}u.push(E)}for(let p=0;p<i;p++)for(let E=0;E<t;E++){const A=u[p][E+1],x=u[p][E],T=u[p+1][E],b=u[p+1][E+1];(p!==0||a>0)&&f.push(A,x,b),(p!==i-1||l<Math.PI)&&f.push(x,T,b)}this.setIndex(f),this.setAttribute("position",new ht(v,3)),this.setAttribute("normal",new ht(y,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class On extends Vt{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);const l=[],c=[],u=[],d=[],h=new C,f=new C,v=new C;for(let y=0;y<=i;y++){const m=a+y/i*o;for(let p=0;p<=r;p++){const E=p/r*s;f.x=(e+t*Math.cos(m))*Math.cos(E),f.y=(e+t*Math.cos(m))*Math.sin(E),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),h.x=e*Math.cos(E),h.y=e*Math.sin(E),v.subVectors(f,h).normalize(),u.push(v.x,v.y,v.z),d.push(p/r),d.push(y/i)}}for(let y=1;y<=i;y++)for(let m=1;m<=r;m++){const p=(r+1)*y+m-1,E=(r+1)*(y-1)+m-1,A=(r+1)*(y-1)+m,x=(r+1)*y+m;l.push(p,E,x),l.push(E,A,x)}this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(u,3)),this.setAttribute("uv",new ht(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new On(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class zs extends Vt{constructor(e=new Iu(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new C,l=new C,c=new ye;let u=new C;const d=[],h=[],f=[],v=[];y(),this.setIndex(v),this.setAttribute("position",new ht(d,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(f,2));function y(){for(let A=0;A<t;A++)m(A);m(s===!1?t:0),E(),p()}function m(A){u=e.getPointAt(A/t,u);const x=a.normals[A],T=a.binormals[A];for(let b=0;b<=r;b++){const R=b/r*Math.PI*2,g=Math.sin(R),S=-Math.cos(R);l.x=S*x.x+g*T.x,l.y=S*x.y+g*T.y,l.z=S*x.z+g*T.z,l.normalize(),h.push(l.x,l.y,l.z),o.x=u.x+i*l.x,o.y=u.y+i*l.y,o.z=u.z+i*l.z,d.push(o.x,o.y,o.z)}}function p(){for(let A=1;A<=t;A++)for(let x=1;x<=r;x++){const T=(r+1)*(A-1)+(x-1),b=(r+1)*A+(x-1),R=(r+1)*A+x,g=(r+1)*(A-1)+x;v.push(T,b,g),v.push(b,R,g)}}function E(){for(let A=0;A<=t;A++)for(let x=0;x<=r;x++)c.x=A/t,c.y=x/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new zs(new Xf[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function ar(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(ic(r))r.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(ic(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Xt(n){const e={};for(let t=0;t<n.length;t++){const i=ar(n[t]);for(const r in i)e[r]=i[r]}return e}function ic(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function qf(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Uu(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const Yf={clone:ar,merge:Xt};var $f=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class un extends cr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$f,this.fragmentShader=Kf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ar(e.uniforms),this.uniformsGroups=qf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new Ve().setHex(r.value);break;case"v2":this.uniforms[i].value=new ye().fromArray(r.value);break;case"v3":this.uniforms[i].value=new C().fromArray(r.value);break;case"v4":this.uniforms[i].value=new ft().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ue().fromArray(r.value);break;case"m4":this.uniforms[i].value=new ut().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Zf extends un{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Nu extends cr{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ve(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lo,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Jf extends cr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ld,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Qf extends cr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ll extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class jf extends ll{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Ra=new ut,rc=new C,sc=new C;class Fu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ye(512,512),this.mapType=nn,this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new il,this._frameExtents=new ye(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;rc.setFromMatrixPosition(e.matrixWorld),t.position.copy(rc),sc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(sc),t.updateMatrixWorld(),Ra.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ra,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===zr||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ra)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const gs=new C,_s=new lr,Sn=new C;class Ou extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(gs,_s,Sn),Sn.x===1&&Sn.y===1&&Sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(gs,_s,Sn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(gs,_s,Sn),Sn.x===1&&Sn.y===1&&Sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(gs,_s,Sn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ri=new C,ac=new ye,oc=new ye;class tn extends Ou{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=kr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Rr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return kr*2*Math.atan(Math.tan(Rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ri.x,ri.y).multiplyScalar(-e/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ri.x,ri.y).multiplyScalar(-e/ri.z)}getViewSize(e,t){return this.getViewBounds(e,ac,oc),t.subVectors(oc,ac)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Rr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class ep extends Fu{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0}}class tp extends ll{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new ep}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class cl extends Ou{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class np extends Fu{constructor(){super(new cl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ip extends ll{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new np}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Xi=-90,qi=1;class rp extends Nt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new tn(Xi,qi,e,t);r.layers=this.layers,this.add(r);const s=new tn(Xi,qi,e,t);s.layers=this.layers,this.add(s);const a=new tn(Xi,qi,e,t);a.layers=this.layers,this.add(a);const o=new tn(Xi,qi,e,t);o.layers=this.layers,this.add(o);const l=new tn(Xi,qi,e,t);l.layers=this.layers,this.add(l);const c=new tn(Xi,qi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Rn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===zr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class sp extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const lc=new ut;class ap{constructor(e,t,i=0,r=1/0){this.ray=new Au(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new tl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):We("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return lc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(lc),this}intersectObject(e,t=!0,i=[]){return Io(e,this,i,t),i.sort(cc),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Io(e[r],this,i,t);return i.sort(cc),i}}function cc(n,e){return n.distance-e.distance}function Io(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)Io(s[a],e,t,!0)}}const _l=class _l{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};_l.prototype.isMatrix2=!0;let uc=_l;function hc(n,e,t,i){const r=op(i);switch(t){case _u:return n*e;case xu:return n*e/r.components*r.byteLength;case $o:return n*e/r.components*r.byteLength;case Ei:return n*e*2/r.components*r.byteLength;case Ko:return n*e*2/r.components*r.byteLength;case vu:return n*e*3/r.components*r.byteLength;case vn:return n*e*4/r.components*r.byteLength;case Zo:return n*e*4/r.components*r.byteLength;case bs:case Es:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ts:case ws:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case to:case io:return Math.max(n,16)*Math.max(e,8)/4;case eo:case no:return Math.max(n,8)*Math.max(e,8)/2;case ro:case so:case oo:case lo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ao:case Ls:case co:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case uo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ho:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case fo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case po:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case mo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case go:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case _o:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case vo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case xo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Mo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case yo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case So:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case bo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Eo:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case To:case wo:case Ao:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ro:case Co:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ds:case Po:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function op(n){switch(n){case nn:case fu:return{byteLength:1,components:1};case Or:case pu:case Yn:return{byteLength:2,components:1};case qo:case Yo:return{byteLength:2,components:4};case Ln:case Xo:case An:return{byteLength:4,components:1};case mu:case gu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vo}}));typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vo);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Bu(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function lp(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,u);else{d.sort((f,v)=>f.start-v.start);let h=0;for(let f=1;f<d.length;f++){const v=d[h],y=d[f];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++h,d[h]=y)}d.length=h+1;for(let f=0,v=d.length;f<v;f++){const y=d[f];n.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var cp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,up=`#ifdef USE_ALPHAHASH
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
#endif`,hp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mp=`#ifdef USE_AOMAP
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
#endif`,gp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_p=`#ifdef USE_BATCHING
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
#endif`,vp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sp=`#ifdef USE_IRIDESCENCE
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
#endif`,bp=`#ifdef USE_BUMPMAP
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
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ap=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Cp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Pp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Lp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Dp=`#define PI 3.141592653589793
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
} // validated`,Ip=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Up=`vec3 transformedNormal = objectNormal;
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
#endif`,Np=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Op=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zp="gl_FragColor = linearToOutputTexel( gl_FragColor );",kp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gp=`#ifdef USE_ENVMAP
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
#endif`,Hp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Vp=`#ifdef USE_ENVMAP
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
#endif`,Wp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xp=`#ifdef USE_ENVMAP
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
#endif`,qp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$p=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zp=`#ifdef USE_GRADIENTMAP
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
}`,Jp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,em=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,tm=`#ifdef USE_ENVMAP
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
#endif`,nm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,im=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,am=`PhysicalMaterial material;
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
#endif`,om=`uniform sampler2D dfgLUT;
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
}`,lm=`
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
#endif`,cm=`#if defined( RE_IndirectDiffuse )
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
#endif`,um=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,dm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_m=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xm=`#if defined( USE_POINTS_UV )
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
#endif`,Mm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ym=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Em=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tm=`#ifdef USE_MORPHTARGETS
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
#endif`,wm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Am=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Rm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Dm=`#ifdef USE_NORMALMAP
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
#endif`,Im=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Um=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Om=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,km=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ym=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$m=`float getShadowMask() {
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
}`,Km=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zm=`#ifdef USE_SKINNING
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
#endif`,Jm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qm=`#ifdef USE_SKINNING
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
#endif`,jm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,e0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,t0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,n0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,i0=`#ifdef USE_TRANSMISSION
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
#endif`,r0=`#ifdef USE_TRANSMISSION
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
#endif`,s0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const c0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,u0=`uniform sampler2D t2D;
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
}`,h0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,f0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m0=`#include <common>
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
}`,g0=`#if DEPTH_PACKING == 3200
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
}`,_0=`#define DISTANCE
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
}`,v0=`#define DISTANCE
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
}`,x0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,M0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y0=`uniform float scale;
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
}`,S0=`uniform vec3 diffuse;
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
}`,b0=`#include <common>
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
}`,E0=`uniform vec3 diffuse;
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
}`,T0=`#define LAMBERT
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
}`,w0=`#define LAMBERT
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
}`,A0=`#define MATCAP
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
}`,R0=`#define MATCAP
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
}`,C0=`#define NORMAL
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
}`,P0=`#define NORMAL
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
}`,L0=`#define PHONG
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
}`,D0=`#define PHONG
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
}`,I0=`#define STANDARD
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
}`,U0=`#define STANDARD
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
}`,N0=`#define TOON
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
}`,F0=`#define TOON
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
}`,O0=`uniform float size;
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
}`,B0=`uniform vec3 diffuse;
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
}`,z0=`#include <common>
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
}`,k0=`uniform vec3 color;
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
}`,G0=`uniform float rotation;
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
}`,H0=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:cp,alphahash_pars_fragment:up,alphamap_fragment:hp,alphamap_pars_fragment:dp,alphatest_fragment:fp,alphatest_pars_fragment:pp,aomap_fragment:mp,aomap_pars_fragment:gp,batching_pars_vertex:_p,batching_vertex:vp,begin_vertex:xp,beginnormal_vertex:Mp,bsdfs:yp,iridescence_fragment:Sp,bumpmap_pars_fragment:bp,clipping_planes_fragment:Ep,clipping_planes_pars_fragment:Tp,clipping_planes_pars_vertex:wp,clipping_planes_vertex:Ap,color_fragment:Rp,color_pars_fragment:Cp,color_pars_vertex:Pp,color_vertex:Lp,common:Dp,cube_uv_reflection_fragment:Ip,defaultnormal_vertex:Up,displacementmap_pars_vertex:Np,displacementmap_vertex:Fp,emissivemap_fragment:Op,emissivemap_pars_fragment:Bp,colorspace_fragment:zp,colorspace_pars_fragment:kp,envmap_fragment:Gp,envmap_common_pars_fragment:Hp,envmap_pars_fragment:Vp,envmap_pars_vertex:Wp,envmap_physical_pars_fragment:tm,envmap_vertex:Xp,fog_vertex:qp,fog_pars_vertex:Yp,fog_fragment:$p,fog_pars_fragment:Kp,gradientmap_pars_fragment:Zp,lightmap_pars_fragment:Jp,lights_lambert_fragment:Qp,lights_lambert_pars_fragment:jp,lights_pars_begin:em,lights_toon_fragment:nm,lights_toon_pars_fragment:im,lights_phong_fragment:rm,lights_phong_pars_fragment:sm,lights_physical_fragment:am,lights_physical_pars_fragment:om,lights_fragment_begin:lm,lights_fragment_maps:cm,lights_fragment_end:um,lightprobes_pars_fragment:hm,logdepthbuf_fragment:dm,logdepthbuf_pars_fragment:fm,logdepthbuf_pars_vertex:pm,logdepthbuf_vertex:mm,map_fragment:gm,map_pars_fragment:_m,map_particle_fragment:vm,map_particle_pars_fragment:xm,metalnessmap_fragment:Mm,metalnessmap_pars_fragment:ym,morphinstance_vertex:Sm,morphcolor_vertex:bm,morphnormal_vertex:Em,morphtarget_pars_vertex:Tm,morphtarget_vertex:wm,normal_fragment_begin:Am,normal_fragment_maps:Rm,normal_pars_fragment:Cm,normal_pars_vertex:Pm,normal_vertex:Lm,normalmap_pars_fragment:Dm,clearcoat_normal_fragment_begin:Im,clearcoat_normal_fragment_maps:Um,clearcoat_pars_fragment:Nm,iridescence_pars_fragment:Fm,opaque_fragment:Om,packing:Bm,premultiplied_alpha_fragment:zm,project_vertex:km,dithering_fragment:Gm,dithering_pars_fragment:Hm,roughnessmap_fragment:Vm,roughnessmap_pars_fragment:Wm,shadowmap_pars_fragment:Xm,shadowmap_pars_vertex:qm,shadowmap_vertex:Ym,shadowmask_pars_fragment:$m,skinbase_vertex:Km,skinning_pars_vertex:Zm,skinning_vertex:Jm,skinnormal_vertex:Qm,specularmap_fragment:jm,specularmap_pars_fragment:e0,tonemapping_fragment:t0,tonemapping_pars_fragment:n0,transmission_fragment:i0,transmission_pars_fragment:r0,uv_pars_fragment:s0,uv_pars_vertex:a0,uv_vertex:o0,worldpos_vertex:l0,background_vert:c0,background_frag:u0,backgroundCube_vert:h0,backgroundCube_frag:d0,cube_vert:f0,cube_frag:p0,depth_vert:m0,depth_frag:g0,distance_vert:_0,distance_frag:v0,equirect_vert:x0,equirect_frag:M0,linedashed_vert:y0,linedashed_frag:S0,meshbasic_vert:b0,meshbasic_frag:E0,meshlambert_vert:T0,meshlambert_frag:w0,meshmatcap_vert:A0,meshmatcap_frag:R0,meshnormal_vert:C0,meshnormal_frag:P0,meshphong_vert:L0,meshphong_frag:D0,meshphysical_vert:I0,meshphysical_frag:U0,meshtoon_vert:N0,meshtoon_frag:F0,points_vert:O0,points_frag:B0,shadow_vert:z0,shadow_frag:k0,sprite_vert:G0,sprite_frag:H0},de={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},Tn={basic:{uniforms:Xt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Xt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ve(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Xt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Xt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Xt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Ve(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Xt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Xt([de.points,de.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Xt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Xt([de.common,de.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Xt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Xt([de.sprite,de.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:Xt([de.common,de.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:Xt([de.lights,de.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Tn.physical={uniforms:Xt([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const vs={r:0,b:0,g:0},V0=new ut,zu=new Ue;zu.set(-1,0,0,0,1,0,0,0,1);function W0(n,e,t,i,r,s){const a=new Ve(0);let o=r===!0?0:1,l,c,u=null,d=0,h=null;function f(E){let A=E.isScene===!0?E.background:null;if(A&&A.isTexture){const x=E.backgroundBlurriness>0;A=e.get(A,x)}return A}function v(E){let A=!1;const x=f(E);x===null?m(a,o):x&&x.isColor&&(m(x,1),A=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(E,A){const x=f(A);x&&(x.isCubeTexture||x.mapping===Ws)?(c===void 0&&(c=new Me(new Gt(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:ar(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(V0.makeRotationFromEuler(A.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(zu),c.material.toneMapped=Xe.getTransfer(x.colorSpace)!==je,(u!==x||d!==x.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,h=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Me(new qn(2,2),new un({name:"BackgroundMaterial",uniforms:ar(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=Xe.getTransfer(x.colorSpace)!==je,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,h=n.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function m(E,A){E.getRGB(vs,Uu(n)),t.buffers.color.setClear(vs.r,vs.g,vs.b,A,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,A=1){a.set(E),o=A,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,m(a,o)},render:v,addToRenderList:y,dispose:p}}function X0(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(L,U,V,Y,O){let X=!1;const B=d(L,Y,V,U);s!==B&&(s=B,c(s.object)),X=f(L,Y,V,O),X&&v(L,Y,V,O),O!==null&&e.update(O,n.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,x(L,U,V,Y),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return n.createVertexArray()}function c(L){return n.bindVertexArray(L)}function u(L){return n.deleteVertexArray(L)}function d(L,U,V,Y){const O=Y.wireframe===!0;let X=i[U.id];X===void 0&&(X={},i[U.id]=X);const B=L.isInstancedMesh===!0?L.id:0;let $=X[B];$===void 0&&($={},X[B]=$);let j=$[V.id];j===void 0&&(j={},$[V.id]=j);let ne=j[O];return ne===void 0&&(ne=h(l()),j[O]=ne),ne}function h(L){const U=[],V=[],Y=[];for(let O=0;O<t;O++)U[O]=0,V[O]=0,Y[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:V,attributeDivisors:Y,object:L,attributes:{},index:null}}function f(L,U,V,Y){const O=s.attributes,X=U.attributes;let B=0;const $=V.getAttributes();for(const j in $)if($[j].location>=0){const re=O[j];let _e=X[j];if(_e===void 0&&(j==="instanceMatrix"&&L.instanceMatrix&&(_e=L.instanceMatrix),j==="instanceColor"&&L.instanceColor&&(_e=L.instanceColor)),re===void 0||re.attribute!==_e||_e&&re.data!==_e.data)return!0;B++}return s.attributesNum!==B||s.index!==Y}function v(L,U,V,Y){const O={},X=U.attributes;let B=0;const $=V.getAttributes();for(const j in $)if($[j].location>=0){let re=X[j];re===void 0&&(j==="instanceMatrix"&&L.instanceMatrix&&(re=L.instanceMatrix),j==="instanceColor"&&L.instanceColor&&(re=L.instanceColor));const _e={};_e.attribute=re,re&&re.data&&(_e.data=re.data),O[j]=_e,B++}s.attributes=O,s.attributesNum=B,s.index=Y}function y(){const L=s.newAttributes;for(let U=0,V=L.length;U<V;U++)L[U]=0}function m(L){p(L,0)}function p(L,U){const V=s.newAttributes,Y=s.enabledAttributes,O=s.attributeDivisors;V[L]=1,Y[L]===0&&(n.enableVertexAttribArray(L),Y[L]=1),O[L]!==U&&(n.vertexAttribDivisor(L,U),O[L]=U)}function E(){const L=s.newAttributes,U=s.enabledAttributes;for(let V=0,Y=U.length;V<Y;V++)U[V]!==L[V]&&(n.disableVertexAttribArray(V),U[V]=0)}function A(L,U,V,Y,O,X,B){B===!0?n.vertexAttribIPointer(L,U,V,O,X):n.vertexAttribPointer(L,U,V,Y,O,X)}function x(L,U,V,Y){y();const O=Y.attributes,X=V.getAttributes(),B=U.defaultAttributeValues;for(const $ in X){const j=X[$];if(j.location>=0){let ne=O[$];if(ne===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(ne=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(ne=L.instanceColor)),ne!==void 0){const re=ne.normalized,_e=ne.itemSize,qe=e.get(ne);if(qe===void 0)continue;const lt=qe.buffer,Ke=qe.type,J=qe.bytesPerElement,se=Ke===n.INT||Ke===n.UNSIGNED_INT||ne.gpuType===Xo;if(ne.isInterleavedBufferAttribute){const ee=ne.data,Ie=ee.stride,Ne=ne.offset;if(ee.isInstancedInterleavedBuffer){for(let Pe=0;Pe<j.locationSize;Pe++)p(j.location+Pe,ee.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Pe=0;Pe<j.locationSize;Pe++)m(j.location+Pe);n.bindBuffer(n.ARRAY_BUFFER,lt);for(let Pe=0;Pe<j.locationSize;Pe++)A(j.location+Pe,_e/j.locationSize,Ke,re,Ie*J,(Ne+_e/j.locationSize*Pe)*J,se)}else{if(ne.isInstancedBufferAttribute){for(let ee=0;ee<j.locationSize;ee++)p(j.location+ee,ne.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ee=0;ee<j.locationSize;ee++)m(j.location+ee);n.bindBuffer(n.ARRAY_BUFFER,lt);for(let ee=0;ee<j.locationSize;ee++)A(j.location+ee,_e/j.locationSize,Ke,re,_e*J,_e/j.locationSize*ee*J,se)}}else if(B!==void 0){const re=B[$];if(re!==void 0)switch(re.length){case 2:n.vertexAttrib2fv(j.location,re);break;case 3:n.vertexAttrib3fv(j.location,re);break;case 4:n.vertexAttrib4fv(j.location,re);break;default:n.vertexAttrib1fv(j.location,re)}}}}E()}function T(){S();for(const L in i){const U=i[L];for(const V in U){const Y=U[V];for(const O in Y){const X=Y[O];for(const B in X)u(X[B].object),delete X[B];delete Y[O]}}delete i[L]}}function b(L){if(i[L.id]===void 0)return;const U=i[L.id];for(const V in U){const Y=U[V];for(const O in Y){const X=Y[O];for(const B in X)u(X[B].object),delete X[B];delete Y[O]}}delete i[L.id]}function R(L){for(const U in i){const V=i[U];for(const Y in V){const O=V[Y];if(O[L.id]===void 0)continue;const X=O[L.id];for(const B in X)u(X[B].object),delete X[B];delete O[L.id]}}}function g(L){for(const U in i){const V=i[U],Y=L.isInstancedMesh===!0?L.id:0,O=V[Y];if(O!==void 0){for(const X in O){const B=O[X];for(const $ in B)u(B[$].object),delete B[$];delete O[X]}delete V[Y],Object.keys(V).length===0&&delete i[U]}}}function S(){P(),a=!0,s!==r&&(s=r,c(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:S,resetDefaultState:P,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfObject:g,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:m,disableUnusedAttributes:E}}function q0(n,e,t){let i;function r(l){i=l}function s(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];t.update(h,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Y0(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==vn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const g=R===Yn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==nn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==An&&!g)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(De("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&De("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:A,maxFragmentUniforms:x,maxSamples:T,samples:b}}function $0(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new mi,o=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||i!==0||r;return r=h,i=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const v=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!r||v===null||v.length===0||s&&!m)s?u(null):c();else{const E=s?0:i,A=E*4;let x=p.clippingState||null;l.value=x,x=u(v,h,A,f);for(let T=0;T!==A;++T)x[T]=t[T];p.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,f,v){const y=d!==null?d.length:0;let m=null;if(y!==0){if(m=l.value,v!==!0||m===null){const p=f+y*4,E=h.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,x=f;A!==y;++A,x+=4)a.copy(d[A]).applyMatrix4(E,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}const oi=4,dc=[.125,.215,.35,.446,.526,.582],_i=20,K0=256,yr=new cl,fc=new Ve;let Ca=null,Pa=0,La=0,Da=!1;const Z0=new C;class pc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=Z0}=s;Ca=this._renderer.getRenderTarget(),Pa=this._renderer.getActiveCubeFace(),La=this._renderer.getActiveMipmapLevel(),Da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_c(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ca,Pa,La),this._renderer.xr.enabled=Da,e.scissorTest=!1,Yi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bi||e.mapping===rr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ca=this._renderer.getRenderTarget(),Pa=this._renderer.getActiveCubeFace(),La=this._renderer.getActiveMipmapLevel(),Da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:Yn,format:vn,colorSpace:Is,depthBuffer:!1},r=mc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mc(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=J0(s)),this._blurMaterial=j0(s,e,t),this._ggxMaterial=Q0(s,e,t)}return r}_compileMaterial(e){const t=new Me(new Vt,e);this._renderer.compile(t,yr)}_sceneToCubeUV(e,t,i,r,s){const l=new tn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(fc),d.toneMapping=Cn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Me(new Gt,new yi({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,m=y.material;let p=!1;const E=e.background;E?E.isColor&&(m.color.copy(E),e.background=null,p=!0):(m.color.copy(fc),p=!0);for(let A=0;A<6;A++){const x=A%3;x===0?(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[A],s.y,s.z)):x===1?(l.up.set(0,0,c[A]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[A],s.z)):(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[A]));const T=this._cubeSize;Yi(r,x*T,A>2?T:0,T,T),d.setRenderTarget(r),p&&d.render(y,l),d.render(e,l)}d.toneMapping=f,d.autoClear=h,e.background=E}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===bi||e.mapping===rr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=_c()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Yi(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,yr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=0+c*1.25,f=d*h,{_lodMax:v}=this,y=this._sizeLods[i],m=3*y*(i>v-oi?i-v+oi:0),p=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=v-t,Yi(s,m,p,3*y,2*y),r.setRenderTarget(s),r.render(o,yr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,Yi(e,m,p,3*y,2*y),r.setRenderTarget(e),r.render(o,yr)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&We("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[r];d.material=c;const h=c.uniforms,f=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*_i-1),y=s/v,m=isFinite(s)?1+Math.floor(u*y):_i;m>_i&&De(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${_i}`);const p=[];let E=0;for(let R=0;R<_i;++R){const g=R/y,S=Math.exp(-g*g/2);p.push(S),R===0?E+=S:R<m&&(E+=2*S)}for(let R=0;R<p.length;R++)p[R]=p[R]/E;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:A}=this;h.dTheta.value=v,h.mipInt.value=A-i;const x=this._sizeLods[r],T=3*x*(r>A-oi?r-A+oi:0),b=4*(this._cubeSize-x);Yi(t,T,b,3*x,2*x),l.setRenderTarget(t),l.render(d,yr)}}function J0(n){const e=[],t=[],i=[];let r=n;const s=n-oi+1+dc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-oi?l=dc[a-n+oi-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,v=6,y=3,m=2,p=1,E=new Float32Array(y*v*f),A=new Float32Array(m*v*f),x=new Float32Array(p*v*f);for(let b=0;b<f;b++){const R=b%3*2/3-1,g=b>2?0:-1,S=[R,g,0,R+2/3,g,0,R+2/3,g+1,0,R,g,0,R+2/3,g+1,0,R,g+1,0];E.set(S,y*v*b),A.set(h,m*v*b);const P=[b,b,b,b,b,b];x.set(P,p*v*b)}const T=new Vt;T.setAttribute("position",new rn(E,y)),T.setAttribute("uv",new rn(A,m)),T.setAttribute("faceIndex",new rn(x,p)),i.push(new Me(T,null)),r>oi&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function mc(n,e,t){const i=new Pn(n,e,t);return i.texture.mapping=Ws,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Yi(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Q0(n,e,t){return new un({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:K0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Xs(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function j0(n,e,t){const i=new Float32Array(_i),r=new C(0,1,0);return new un({name:"SphericalGaussianBlur",defines:{n:_i,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Xs(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function gc(){return new un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xs(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function _c(){return new un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Xs(){return`

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
	`}class ku extends Pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ru(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Gt(5,5,5),s=new un({name:"CubemapFromEquirect",uniforms:ar(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qt,blending:Vn});s.uniforms.tEquirect.value=t;const a=new Me(r,s),o=t.minFilter;return t.minFilter===xi&&(t.minFilter=Ht),new rp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function eg(n){let e=new WeakMap,t=new WeakMap,i=null;function r(h,f=!1){return h==null?null:f?a(h):s(h)}function s(h){if(h&&h.isTexture){const f=h.mapping;if(f===js||f===ea)if(e.has(h)){const v=e.get(h).texture;return o(v,h.mapping)}else{const v=h.image;if(v&&v.height>0){const y=new ku(v.height);return y.fromEquirectangularTexture(n,h),e.set(h,y),h.addEventListener("dispose",c),o(y.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const f=h.mapping,v=f===js||f===ea,y=f===bi||f===rr;if(v||y){let m=t.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new pc(n)),m=v?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const E=h.image;return v&&E&&E.height>0||y&&E&&l(E)?(i===null&&(i=new pc(n)),m=v?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,f){return f===js?h.mapping=bi:f===ea&&(h.mapping=rr),h}function l(h){let f=0;const v=6;for(let y=0;y<v;y++)h[y]!==void 0&&f++;return f===v}function c(h){const f=h.target;f.removeEventListener("dispose",c);const v=e.get(f);v!==void 0&&(e.delete(f),v.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const v=t.get(f);v!==void 0&&(t.delete(f),v.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function tg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Qi("WebGLRenderer: "+i+" extension not supported."),r}}}function ng(n,e,t,i){const r={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",a),delete r[h.id];const f=s.get(h);f&&(e.remove(f),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const f in h)e.update(h[f],n.ARRAY_BUFFER)}function c(d){const h=[],f=d.index,v=d.attributes.position;let y=0;if(v===void 0)return;if(f!==null){const E=f.array;y=f.version;for(let A=0,x=E.length;A<x;A+=3){const T=E[A+0],b=E[A+1],R=E[A+2];h.push(T,b,b,R,R,T)}}else{const E=v.array;y=v.version;for(let A=0,x=E.length/3-1;A<x;A+=3){const T=A+0,b=A+1,R=A+2;h.push(T,b,b,R,R,T)}}const m=new(v.count>=65535?Eu:bu)(h,1);m.version=y;const p=s.get(d);p&&e.remove(p),s.set(d,m)}function u(d){const h=s.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function ig(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,h){n.drawElements(i,h,s,d*a),t.update(h,i,1)}function c(d,h,f){f!==0&&(n.drawElementsInstanced(i,h,s,d*a,f),t.update(h,i,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,d,0,f);let y=0;for(let m=0;m<f;m++)y+=h[m];t.update(y,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function rg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:We("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function sg(n,e,t){const i=new WeakMap,r=new ft;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==d){let P=function(){g.dispose(),i.delete(o),o.removeEventListener("dispose",P)};var f=P;h!==void 0&&h.texture.dispose();const v=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let x=0;v===!0&&(x=1),y===!0&&(x=2),m===!0&&(x=3);let T=o.attributes.position.count*x,b=1;T>e.maxTextureSize&&(b=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const R=new Float32Array(T*b*4*d),g=new yu(R,T,b,d);g.type=An,g.needsUpdate=!0;const S=x*4;for(let L=0;L<d;L++){const U=p[L],V=E[L],Y=A[L],O=T*b*4*L;for(let X=0;X<U.count;X++){const B=X*S;v===!0&&(r.fromBufferAttribute(U,X),R[O+B+0]=r.x,R[O+B+1]=r.y,R[O+B+2]=r.z,R[O+B+3]=0),y===!0&&(r.fromBufferAttribute(V,X),R[O+B+4]=r.x,R[O+B+5]=r.y,R[O+B+6]=r.z,R[O+B+7]=0),m===!0&&(r.fromBufferAttribute(Y,X),R[O+B+8]=r.x,R[O+B+9]=r.y,R[O+B+10]=r.z,R[O+B+11]=Y.itemSize===4?r.w:1)}}h={count:d,texture:g,size:new ye(T,b)},i.set(o,h),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const y=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",y),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function ag(n,e,t,i,r){let s=new WeakMap;function a(c){const u=r.render.frame,d=c.geometry,h=e.get(c,d);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return h}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const og={[au]:"LINEAR_TONE_MAPPING",[ou]:"REINHARD_TONE_MAPPING",[lu]:"CINEON_TONE_MAPPING",[Wo]:"ACES_FILMIC_TONE_MAPPING",[uu]:"AGX_TONE_MAPPING",[hu]:"NEUTRAL_TONE_MAPPING",[cu]:"CUSTOM_TONE_MAPPING"};function lg(n,e,t,i,r,s){const a=new Pn(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new sr(e,t):void 0}),o=new Pn(e,t,{type:Yn,depthBuffer:!1,stencilBuffer:!1}),l=new Vt;l.setAttribute("position",new ht([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ht([0,2,0,0,2,0],2));const c=new Zf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Me(l,c),d=new cl(-1,1,1,-1,0,1);let h=null,f=null,v=!1,y,m=null,p=[],E=!1;this.setSize=function(A,x){a.setSize(A,x),o.setSize(A,x);for(let T=0;T<p.length;T++){const b=p[T];b.setSize&&b.setSize(A,x)}},this.setEffects=function(A){p=A,E=p.length>0&&p[0].isRenderPass===!0;const x=a.width,T=a.height;for(let b=0;b<p.length;b++){const R=p[b];R.setSize&&R.setSize(x,T)}},this.begin=function(A,x){if(v||A.toneMapping===Cn&&p.length===0)return!1;if(m=x,x!==null){const T=x.width,b=x.height;(a.width!==T||a.height!==b)&&this.setSize(T,b)}return E===!1&&A.setRenderTarget(a),y=A.toneMapping,A.toneMapping=Cn,!0},this.hasRenderPass=function(){return E},this.end=function(A,x){A.toneMapping=y,v=!0;let T=a,b=o;for(let R=0;R<p.length;R++){const g=p[R];if(g.enabled!==!1&&(g.render(A,b,T,x),g.needsSwap!==!1)){const S=T;T=b,b=S}}if(h!==A.outputColorSpace||f!==A.toneMapping){h=A.outputColorSpace,f=A.toneMapping,c.defines={},Xe.getTransfer(h)===je&&(c.defines.SRGB_TRANSFER="");const R=og[f];R&&(c.defines[R]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=T.texture,A.setRenderTarget(m),A.render(u,d),m=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}const Gu=new Ot,Uo=new sr(1,1),Hu=new yu,Vu=new hf,Wu=new Ru,vc=[],xc=[],Mc=new Float32Array(16),yc=new Float32Array(9),Sc=new Float32Array(4);function ur(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=vc[r];if(s===void 0&&(s=new Float32Array(r),vc[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Ct(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function qs(n,e){let t=xc[e];t===void 0&&(t=new Int32Array(e),xc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function cg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function ug(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2fv(this.addr,e),Pt(t,e)}}function hg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;n.uniform3fv(this.addr,e),Pt(t,e)}}function dg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4fv(this.addr,e),Pt(t,e)}}function fg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,i))return;Sc.set(i),n.uniformMatrix2fv(this.addr,!1,Sc),Pt(t,i)}}function pg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,i))return;yc.set(i),n.uniformMatrix3fv(this.addr,!1,yc),Pt(t,i)}}function mg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,i))return;Mc.set(i),n.uniformMatrix4fv(this.addr,!1,Mc),Pt(t,i)}}function gg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function _g(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2iv(this.addr,e),Pt(t,e)}}function vg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3iv(this.addr,e),Pt(t,e)}}function xg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4iv(this.addr,e),Pt(t,e)}}function Mg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function yg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2uiv(this.addr,e),Pt(t,e)}}function Sg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3uiv(this.addr,e),Pt(t,e)}}function bg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4uiv(this.addr,e),Pt(t,e)}}function Eg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Uo.compareFunction=t.isReversedDepthBuffer()?Qo:Jo,s=Uo):s=Gu,t.setTexture2D(e||s,r)}function Tg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Vu,r)}function wg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Wu,r)}function Ag(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Hu,r)}function Rg(n){switch(n){case 5126:return cg;case 35664:return ug;case 35665:return hg;case 35666:return dg;case 35674:return fg;case 35675:return pg;case 35676:return mg;case 5124:case 35670:return gg;case 35667:case 35671:return _g;case 35668:case 35672:return vg;case 35669:case 35673:return xg;case 5125:return Mg;case 36294:return yg;case 36295:return Sg;case 36296:return bg;case 35678:case 36198:case 36298:case 36306:case 35682:return Eg;case 35679:case 36299:case 36307:return Tg;case 35680:case 36300:case 36308:case 36293:return wg;case 36289:case 36303:case 36311:case 36292:return Ag}}function Cg(n,e){n.uniform1fv(this.addr,e)}function Pg(n,e){const t=ur(e,this.size,2);n.uniform2fv(this.addr,t)}function Lg(n,e){const t=ur(e,this.size,3);n.uniform3fv(this.addr,t)}function Dg(n,e){const t=ur(e,this.size,4);n.uniform4fv(this.addr,t)}function Ig(n,e){const t=ur(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Ug(n,e){const t=ur(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Ng(n,e){const t=ur(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Fg(n,e){n.uniform1iv(this.addr,e)}function Og(n,e){n.uniform2iv(this.addr,e)}function Bg(n,e){n.uniform3iv(this.addr,e)}function zg(n,e){n.uniform4iv(this.addr,e)}function kg(n,e){n.uniform1uiv(this.addr,e)}function Gg(n,e){n.uniform2uiv(this.addr,e)}function Hg(n,e){n.uniform3uiv(this.addr,e)}function Vg(n,e){n.uniform4uiv(this.addr,e)}function Wg(n,e,t){const i=this.cache,r=e.length,s=qs(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=Uo:a=Gu;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Xg(n,e,t){const i=this.cache,r=e.length,s=qs(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Vu,s[a])}function qg(n,e,t){const i=this.cache,r=e.length,s=qs(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Wu,s[a])}function Yg(n,e,t){const i=this.cache,r=e.length,s=qs(t,r);Ct(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Hu,s[a])}function $g(n){switch(n){case 5126:return Cg;case 35664:return Pg;case 35665:return Lg;case 35666:return Dg;case 35674:return Ig;case 35675:return Ug;case 35676:return Ng;case 5124:case 35670:return Fg;case 35667:case 35671:return Og;case 35668:case 35672:return Bg;case 35669:case 35673:return zg;case 5125:return kg;case 36294:return Gg;case 36295:return Hg;case 36296:return Vg;case 35678:case 36198:case 36298:case 36306:case 35682:return Wg;case 35679:case 36299:case 36307:return Xg;case 35680:case 36300:case 36308:case 36293:return qg;case 36289:case 36303:case 36311:case 36292:return Yg}}class Kg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Rg(t.type)}}class Zg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$g(t.type)}}class Jg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Ia=/(\w+)(\])?(\[|\.)?/g;function bc(n,e){n.seq.push(e),n.map[e.id]=e}function Qg(n,e,t){const i=n.name,r=i.length;for(Ia.lastIndex=0;;){const s=Ia.exec(i),a=Ia.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){bc(t,c===void 0?new Kg(o,n,e):new Zg(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new Jg(o),bc(t,d)),t=d}}}class As{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Qg(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Ec(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const jg=37297;let e_=0;function t_(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Tc=new Ue;function n_(n){Xe._getMatrix(Tc,Xe.workingColorSpace,n);const e=`mat3( ${Tc.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(n)){case Us:return[e,"LinearTransferOETF"];case je:return[e,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function wc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+t_(n.getShaderSource(e),o)}else return s}function i_(n,e){const t=n_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const r_={[au]:"Linear",[ou]:"Reinhard",[lu]:"Cineon",[Wo]:"ACESFilmic",[uu]:"AgX",[hu]:"Neutral",[cu]:"Custom"};function s_(n,e){const t=r_[e];return t===void 0?(De("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const xs=new C;function a_(){Xe.getLuminanceCoefficients(xs);const n=xs.x.toFixed(4),e=xs.y.toFixed(4),t=xs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function o_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wr).join(`
`)}function l_(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function c_(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function wr(n){return n!==""}function Ac(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const u_=/^[ \t]*#include +<([\w\d./]+)>/gm;function No(n){return n.replace(u_,d_)}const h_=new Map;function d_(n,e){let t=ze[e];if(t===void 0){const i=h_.get(e);if(i!==void 0)t=ze[i],De('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return No(t)}const f_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cc(n){return n.replace(f_,p_)}function p_(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Pc(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const m_={[Ss]:"SHADOWMAP_TYPE_PCF",[Tr]:"SHADOWMAP_TYPE_VSM"};function g_(n){return m_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const __={[bi]:"ENVMAP_TYPE_CUBE",[rr]:"ENVMAP_TYPE_CUBE",[Ws]:"ENVMAP_TYPE_CUBE_UV"};function v_(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":__[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const x_={[rr]:"ENVMAP_MODE_REFRACTION"};function M_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":x_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const y_={[su]:"ENVMAP_BLENDING_MULTIPLY",[Rd]:"ENVMAP_BLENDING_MIX",[Cd]:"ENVMAP_BLENDING_ADD"};function S_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":y_[n.combine]||"ENVMAP_BLENDING_NONE"}function b_(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function E_(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=g_(t),c=v_(t),u=M_(t),d=S_(t),h=b_(t),f=o_(t),v=l_(s),y=r.createProgram();let m,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(wr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(wr).join(`
`),p.length>0&&(p+=`
`)):(m=[Pc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wr).join(`
`),p=[Pc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cn?"#define TONE_MAPPING":"",t.toneMapping!==Cn?ze.tonemapping_pars_fragment:"",t.toneMapping!==Cn?s_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,i_("linearToOutputTexel",t.outputColorSpace),a_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wr).join(`
`)),a=No(a),a=Ac(a,t),a=Rc(a,t),o=No(o),o=Ac(o,t),o=Rc(o,t),a=Cc(a),o=Cc(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Nl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const A=E+m+a,x=E+p+o,T=Ec(r,r.VERTEX_SHADER,A),b=Ec(r,r.FRAGMENT_SHADER,x);r.attachShader(y,T),r.attachShader(y,b),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function R(L){if(n.debug.checkShaderErrors){const U=r.getProgramInfoLog(y)||"",V=r.getShaderInfoLog(T)||"",Y=r.getShaderInfoLog(b)||"",O=U.trim(),X=V.trim(),B=Y.trim();let $=!0,j=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,T,b);else{const ne=wc(r,T,"vertex"),re=wc(r,b,"fragment");We("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+O+`
`+ne+`
`+re)}else O!==""?De("WebGLProgram: Program Info Log:",O):(X===""||B==="")&&(j=!1);j&&(L.diagnostics={runnable:$,programLog:O,vertexShader:{log:X,prefix:m},fragmentShader:{log:B,prefix:p}})}r.deleteShader(T),r.deleteShader(b),g=new As(r,y),S=c_(r,y)}let g;this.getUniforms=function(){return g===void 0&&R(this),g};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(y,jg)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=e_++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=T,this.fragmentShader=b,this}let T_=0;class w_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new A_(e),t.set(e,i)),i}}class A_{constructor(e){this.id=T_++,this.code=e,this.usedTimes=0}}function R_(n){return n===Ei||n===Ls||n===Ds}function C_(n,e,t,i,r,s){const a=new tl,o=new w_,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer;let h=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(g){return l.add(g),g===0?"uv":`uv${g}`}function y(g,S,P,L,U,V){const Y=L.fog,O=U.geometry,X=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?L.environment:null,B=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,$=e.get(g.envMap||X,B),j=$&&$.mapping===Ws?$.image.height:null,ne=f[g.type];g.precision!==null&&(h=i.getMaxPrecision(g.precision),h!==g.precision&&De("WebGLProgram.getParameters:",g.precision,"not supported, using",h,"instead."));const re=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,_e=re!==void 0?re.length:0;let qe=0;O.morphAttributes.position!==void 0&&(qe=1),O.morphAttributes.normal!==void 0&&(qe=2),O.morphAttributes.color!==void 0&&(qe=3);let lt,Ke,J,se;if(ne){const Se=Tn[ne];lt=Se.vertexShader,Ke=Se.fragmentShader}else{lt=g.vertexShader,Ke=g.fragmentShader;const Se=o.getVertexShaderStage(g),gt=o.getFragmentShaderStage(g);o.update(g,Se,gt),J=Se.id,se=gt.id}const ee=n.getRenderTarget(),Ie=n.state.buffers.depth.getReversed(),Ne=U.isInstancedMesh===!0,Pe=U.isBatchedMesh===!0,vt=!!g.map,He=!!g.matcap,it=!!$,Ze=!!g.aoMap,Ye=!!g.lightMap,St=!!g.bumpMap&&g.wireframe===!1,At=!!g.normalMap,Lt=!!g.displacementMap,Ft=!!g.emissiveMap,mt=!!g.metalnessMap,bt=!!g.roughnessMap,I=g.anisotropy>0,Yt=g.clearcoat>0,Qe=g.dispersion>0,w=g.iridescence>0,_=g.sheen>0,F=g.transmission>0,G=I&&!!g.anisotropyMap,W=Yt&&!!g.clearcoatMap,te=Yt&&!!g.clearcoatNormalMap,ae=Yt&&!!g.clearcoatRoughnessMap,q=w&&!!g.iridescenceMap,Z=w&&!!g.iridescenceThicknessMap,oe=_&&!!g.sheenColorMap,Te=_&&!!g.sheenRoughnessMap,he=!!g.specularMap,le=!!g.specularColorMap,Ce=!!g.specularIntensityMap,Le=F&&!!g.transmissionMap,Fe=F&&!!g.thicknessMap,D=!!g.gradientMap,ie=!!g.alphaMap,K=g.alphaTest>0,ce=!!g.alphaHash,me=!!g.extensions;let Q=Cn;g.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Q=n.toneMapping);const Ee={shaderID:ne,shaderType:g.type,shaderName:g.name,vertexShader:lt,fragmentShader:Ke,defines:g.defines,customVertexShaderID:J,customFragmentShaderID:se,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:h,batching:Pe,batchingColor:Pe&&U._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&U.instanceColor!==null,instancingMorph:Ne&&U.morphTexture!==null,outputColorSpace:ee===null?n.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Xe.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:vt,matcap:He,envMap:it,envMapMode:it&&$.mapping,envMapCubeUVHeight:j,aoMap:Ze,lightMap:Ye,bumpMap:St,normalMap:At,displacementMap:Lt,emissiveMap:Ft,normalMapObjectSpace:At&&g.normalMapType===Dd,normalMapTangentSpace:At&&g.normalMapType===Lo,packedNormalMap:At&&g.normalMapType===Lo&&R_(g.normalMap.format),metalnessMap:mt,roughnessMap:bt,anisotropy:I,anisotropyMap:G,clearcoat:Yt,clearcoatMap:W,clearcoatNormalMap:te,clearcoatRoughnessMap:ae,dispersion:Qe,iridescence:w,iridescenceMap:q,iridescenceThicknessMap:Z,sheen:_,sheenColorMap:oe,sheenRoughnessMap:Te,specularMap:he,specularColorMap:le,specularIntensityMap:Ce,transmission:F,transmissionMap:Le,thicknessMap:Fe,gradientMap:D,opaque:g.transparent===!1&&g.blending===Ji&&g.alphaToCoverage===!1,alphaMap:ie,alphaTest:K,alphaHash:ce,combine:g.combine,mapUv:vt&&v(g.map.channel),aoMapUv:Ze&&v(g.aoMap.channel),lightMapUv:Ye&&v(g.lightMap.channel),bumpMapUv:St&&v(g.bumpMap.channel),normalMapUv:At&&v(g.normalMap.channel),displacementMapUv:Lt&&v(g.displacementMap.channel),emissiveMapUv:Ft&&v(g.emissiveMap.channel),metalnessMapUv:mt&&v(g.metalnessMap.channel),roughnessMapUv:bt&&v(g.roughnessMap.channel),anisotropyMapUv:G&&v(g.anisotropyMap.channel),clearcoatMapUv:W&&v(g.clearcoatMap.channel),clearcoatNormalMapUv:te&&v(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&v(g.clearcoatRoughnessMap.channel),iridescenceMapUv:q&&v(g.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&v(g.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&v(g.sheenColorMap.channel),sheenRoughnessMapUv:Te&&v(g.sheenRoughnessMap.channel),specularMapUv:he&&v(g.specularMap.channel),specularColorMapUv:le&&v(g.specularColorMap.channel),specularIntensityMapUv:Ce&&v(g.specularIntensityMap.channel),transmissionMapUv:Le&&v(g.transmissionMap.channel),thicknessMapUv:Fe&&v(g.thicknessMap.channel),alphaMapUv:ie&&v(g.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(At||I),vertexNormals:!!O.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!O.attributes.uv&&(vt||ie),fog:!!Y,useFog:g.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||O.attributes.normal===void 0&&At===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ie,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:qe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:g.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Q,decodeVideoTexture:vt&&g.map.isVideoTexture===!0&&Xe.getTransfer(g.map.colorSpace)===je,decodeVideoTextureEmissive:Ft&&g.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(g.emissiveMap.colorSpace)===je,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===ln,flipSided:g.side===qt,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:me&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&g.extensions.multiDraw===!0||Pe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Ee.vertexUv1s=l.has(1),Ee.vertexUv2s=l.has(2),Ee.vertexUv3s=l.has(3),l.clear(),Ee}function m(g){const S=[];if(g.shaderID?S.push(g.shaderID):(S.push(g.customVertexShaderID),S.push(g.customFragmentShaderID)),g.defines!==void 0)for(const P in g.defines)S.push(P),S.push(g.defines[P]);return g.isRawShaderMaterial===!1&&(p(S,g),E(S,g),S.push(n.outputColorSpace)),S.push(g.customProgramCacheKey),S.join()}function p(g,S){g.push(S.precision),g.push(S.outputColorSpace),g.push(S.envMapMode),g.push(S.envMapCubeUVHeight),g.push(S.mapUv),g.push(S.alphaMapUv),g.push(S.lightMapUv),g.push(S.aoMapUv),g.push(S.bumpMapUv),g.push(S.normalMapUv),g.push(S.displacementMapUv),g.push(S.emissiveMapUv),g.push(S.metalnessMapUv),g.push(S.roughnessMapUv),g.push(S.anisotropyMapUv),g.push(S.clearcoatMapUv),g.push(S.clearcoatNormalMapUv),g.push(S.clearcoatRoughnessMapUv),g.push(S.iridescenceMapUv),g.push(S.iridescenceThicknessMapUv),g.push(S.sheenColorMapUv),g.push(S.sheenRoughnessMapUv),g.push(S.specularMapUv),g.push(S.specularColorMapUv),g.push(S.specularIntensityMapUv),g.push(S.transmissionMapUv),g.push(S.thicknessMapUv),g.push(S.combine),g.push(S.fogExp2),g.push(S.sizeAttenuation),g.push(S.morphTargetsCount),g.push(S.morphAttributeCount),g.push(S.numDirLights),g.push(S.numPointLights),g.push(S.numSpotLights),g.push(S.numSpotLightMaps),g.push(S.numHemiLights),g.push(S.numRectAreaLights),g.push(S.numDirLightShadows),g.push(S.numPointLightShadows),g.push(S.numSpotLightShadows),g.push(S.numSpotLightShadowsWithMaps),g.push(S.numLightProbes),g.push(S.shadowMapType),g.push(S.toneMapping),g.push(S.numClippingPlanes),g.push(S.numClipIntersection),g.push(S.depthPacking)}function E(g,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function A(g){const S=f[g.type];let P;if(S){const L=Tn[S];P=Yf.clone(L.uniforms)}else P=g.uniforms;return P}function x(g,S){let P=u.get(S);return P!==void 0?++P.usedTimes:(P=new E_(n,S,g,r),c.push(P),u.set(S,P)),P}function T(g){if(--g.usedTimes===0){const S=c.indexOf(g);c[S]=c[c.length-1],c.pop(),u.delete(g.cacheKey),g.destroy()}}function b(g){o.remove(g)}function R(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:A,acquireProgram:x,releaseProgram:T,releaseShaderCache:b,programs:c,dispose:R}}function P_(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function L_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Lc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Dc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,v,y,m,p){let E=n[e];return E===void 0?(E={id:h.id,object:h,geometry:f,material:v,materialVariant:a(h),groupOrder:y,renderOrder:h.renderOrder,z:m,group:p},n[e]=E):(E.id=h.id,E.object=h,E.geometry=f,E.material=v,E.materialVariant=a(h),E.groupOrder=y,E.renderOrder=h.renderOrder,E.z=m,E.group=p),e++,E}function l(h,f,v,y,m,p){const E=o(h,f,v,y,m,p);v.transmission>0?i.push(E):v.transparent===!0?r.push(E):t.push(E)}function c(h,f,v,y,m,p){const E=o(h,f,v,y,m,p);v.transmission>0?i.unshift(E):v.transparent===!0?r.unshift(E):t.unshift(E)}function u(h,f,v){t.length>1&&t.sort(h||L_),i.length>1&&i.sort(f||Lc),r.length>1&&r.sort(f||Lc),v&&(t.reverse(),i.reverse(),r.reverse())}function d(){for(let h=e,f=n.length;h<f;h++){const v=n[h];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:d,sort:u}}function D_(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Dc,n.set(i,[a])):r>=s.length?(a=new Dc,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function I_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Ve};break;case"SpotLight":t={position:new C,direction:new C,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new C,halfWidth:new C,halfHeight:new C};break}return n[e.id]=t,t}}}function U_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let N_=0;function F_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function O_(n){const e=new I_,t=U_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new C);const r=new C,s=new ut,a=new ut;function o(c){let u=0,d=0,h=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let f=0,v=0,y=0,m=0,p=0,E=0,A=0,x=0,T=0,b=0,R=0;c.sort(F_);for(let S=0,P=c.length;S<P;S++){const L=c[S],U=L.color,V=L.intensity,Y=L.distance;let O=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Ei?O=L.shadow.map.texture:O=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=U.r*V,d+=U.g*V,h+=U.b*V;else if(L.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(L.sh.coefficients[X],V);R++}else if(L.isDirectionalLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const B=L.shadow,$=t.get(L);$.shadowIntensity=B.intensity,$.shadowBias=B.bias,$.shadowNormalBias=B.normalBias,$.shadowRadius=B.radius,$.shadowMapSize=B.mapSize,i.directionalShadow[f]=$,i.directionalShadowMap[f]=O,i.directionalShadowMatrix[f]=L.shadow.matrix,E++}i.directional[f]=X,f++}else if(L.isSpotLight){const X=e.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(U).multiplyScalar(V),X.distance=Y,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,i.spot[y]=X;const B=L.shadow;if(L.map&&(i.spotLightMap[T]=L.map,T++,B.updateMatrices(L),L.castShadow&&b++),i.spotLightMatrix[y]=B.matrix,L.castShadow){const $=t.get(L);$.shadowIntensity=B.intensity,$.shadowBias=B.bias,$.shadowNormalBias=B.normalBias,$.shadowRadius=B.radius,$.shadowMapSize=B.mapSize,i.spotShadow[y]=$,i.spotShadowMap[y]=O,x++}y++}else if(L.isRectAreaLight){const X=e.get(L);X.color.copy(U).multiplyScalar(V),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=X,m++}else if(L.isPointLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){const B=L.shadow,$=t.get(L);$.shadowIntensity=B.intensity,$.shadowBias=B.bias,$.shadowNormalBias=B.normalBias,$.shadowRadius=B.radius,$.shadowMapSize=B.mapSize,$.shadowCameraNear=B.camera.near,$.shadowCameraFar=B.camera.far,i.pointShadow[v]=$,i.pointShadowMap[v]=O,i.pointShadowMatrix[v]=L.shadow.matrix,A++}i.point[v]=X,v++}else if(L.isHemisphereLight){const X=e.get(L);X.skyColor.copy(L.color).multiplyScalar(V),X.groundColor.copy(L.groundColor).multiplyScalar(V),i.hemi[p]=X,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const g=i.hash;(g.directionalLength!==f||g.pointLength!==v||g.spotLength!==y||g.rectAreaLength!==m||g.hemiLength!==p||g.numDirectionalShadows!==E||g.numPointShadows!==A||g.numSpotShadows!==x||g.numSpotMaps!==T||g.numLightProbes!==R)&&(i.directional.length=f,i.spot.length=y,i.rectArea.length=m,i.point.length=v,i.hemi.length=p,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=x+T-b,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=R,g.directionalLength=f,g.pointLength=v,g.spotLength=y,g.rectAreaLength=m,g.hemiLength=p,g.numDirectionalShadows=E,g.numPointShadows=A,g.numSpotShadows=x,g.numSpotMaps=T,g.numLightProbes=R,i.version=N_++)}function l(c,u){let d=0,h=0,f=0,v=0,y=0;const m=u.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){const A=c[p];if(A.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),d++}else if(A.isSpotLight){const x=i.spot[f];x.position.setFromMatrixPosition(A.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),f++}else if(A.isRectAreaLight){const x=i.rectArea[v];x.position.setFromMatrixPosition(A.matrixWorld),x.position.applyMatrix4(m),a.identity(),s.copy(A.matrixWorld),s.premultiply(m),a.extractRotation(s),x.halfWidth.set(A.width*.5,0,0),x.halfHeight.set(0,A.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),v++}else if(A.isPointLight){const x=i.point[h];x.position.setFromMatrixPosition(A.matrixWorld),x.position.applyMatrix4(m),h++}else if(A.isHemisphereLight){const x=i.hemi[y];x.direction.setFromMatrixPosition(A.matrixWorld),x.direction.transformDirection(m),y++}}}return{setup:o,setupView:l,state:i}}function Ic(n){const e=new O_(n),t=[],i=[],r=[];function s(h){d.camera=h,t.length=0,i.length=0,r.length=0}function a(h){t.push(h)}function o(h){i.push(h)}function l(h){r.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}const d={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function B_(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Ic(n),e.set(r,[o])):s>=a.length?(o=new Ic(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const z_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,k_=`uniform sampler2D shadow_pass;
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
}`,G_=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],H_=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],Uc=new ut,Sr=new C,Ua=new C;function V_(n,e,t){let i=new il;const r=new ye,s=new ye,a=new ft,o=new Jf,l=new Qf,c={},u=t.maxTextureSize,d={[li]:qt,[qt]:li,[ln]:ln},h=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:z_,fragmentShader:k_}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const v=new Vt;v.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Me(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ss;let p=this.type;this.render=function(b,R,g){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===cd&&(De("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ss);const S=n.getRenderTarget(),P=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Vn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const V=p!==this.type;V&&R.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(O=>O.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,O=b.length;Y<O;Y++){const X=b[Y],B=X.shadow;if(B===void 0){De("WebGLShadowMap:",X,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const $=B.getFrameExtents();r.multiply($),s.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/$.x),r.x=s.x*$.x,B.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/$.y),r.y=s.y*$.y,B.mapSize.y=s.y));const j=n.state.buffers.depth.getReversed();if(B.camera._reversedDepth=j,B.map===null||V===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Tr){if(X.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Pn(r.x,r.y,{format:Ei,type:Yn,minFilter:Ht,magFilter:Ht,generateMipmaps:!1}),B.map.texture.name=X.name+".shadowMap",B.map.depthTexture=new sr(r.x,r.y,An),B.map.depthTexture.name=X.name+".shadowMapDepth",B.map.depthTexture.format=$n,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ut,B.map.depthTexture.magFilter=Ut}else X.isPointLight?(B.map=new ku(r.x),B.map.depthTexture=new Lf(r.x,Ln)):(B.map=new Pn(r.x,r.y),B.map.depthTexture=new sr(r.x,r.y,Ln)),B.map.depthTexture.name=X.name+".shadowMap",B.map.depthTexture.format=$n,this.type===Ss?(B.map.depthTexture.compareFunction=j?Qo:Jo,B.map.depthTexture.minFilter=Ht,B.map.depthTexture.magFilter=Ht):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ut,B.map.depthTexture.magFilter=Ut);B.camera.updateProjectionMatrix()}const ne=B.map.isWebGLCubeRenderTarget?6:1;for(let re=0;re<ne;re++){if(B.map.isWebGLCubeRenderTarget)n.setRenderTarget(B.map,re),n.clear();else{re===0&&(n.setRenderTarget(B.map),n.clear());const _e=B.getViewport(re);a.set(s.x*_e.x,s.y*_e.y,s.x*_e.z,s.y*_e.w),U.viewport(a)}if(X.isPointLight){const _e=B.camera,qe=B.matrix,lt=X.distance||_e.far;lt!==_e.far&&(_e.far=lt,_e.updateProjectionMatrix()),Sr.setFromMatrixPosition(X.matrixWorld),_e.position.copy(Sr),Ua.copy(_e.position),Ua.add(G_[re]),_e.up.copy(H_[re]),_e.lookAt(Ua),_e.updateMatrixWorld(),qe.makeTranslation(-Sr.x,-Sr.y,-Sr.z),Uc.multiplyMatrices(_e.projectionMatrix,_e.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Uc,_e.coordinateSystem,_e.reversedDepth)}else B.updateMatrices(X);i=B.getFrustum(),x(R,g,B.camera,X,this.type)}B.isPointLightShadow!==!0&&this.type===Tr&&E(B,g),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(S,P,L)};function E(b,R){const g=e.update(y);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Pn(r.x,r.y,{format:Ei,type:Yn})),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(R,null,g,h,y,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(R,null,g,f,y,null)}function A(b,R,g,S){let P=null;const L=g.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)P=L;else if(P=g.isPointLight===!0?l:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const U=P.uuid,V=R.uuid;let Y=c[U];Y===void 0&&(Y={},c[U]=Y);let O=Y[V];O===void 0&&(O=P.clone(),Y[V]=O,R.addEventListener("dispose",T)),P=O}if(P.visible=R.visible,P.wireframe=R.wireframe,S===Tr?P.side=R.shadowSide!==null?R.shadowSide:R.side:P.side=R.shadowSide!==null?R.shadowSide:d[R.side],P.alphaMap=R.alphaMap,P.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,P.map=R.map,P.clipShadows=R.clipShadows,P.clippingPlanes=R.clippingPlanes,P.clipIntersection=R.clipIntersection,P.displacementMap=R.displacementMap,P.displacementScale=R.displacementScale,P.displacementBias=R.displacementBias,P.wireframeLinewidth=R.wireframeLinewidth,P.linewidth=R.linewidth,g.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const U=n.properties.get(P);U.light=g}return P}function x(b,R,g,S,P){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&P===Tr)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,b.matrixWorld);const V=e.update(b),Y=b.material;if(Array.isArray(Y)){const O=V.groups;for(let X=0,B=O.length;X<B;X++){const $=O[X],j=Y[$.materialIndex];if(j&&j.visible){const ne=A(b,j,S,P);b.onBeforeShadow(n,b,R,g,V,ne,$),n.renderBufferDirect(g,null,V,ne,b,$),b.onAfterShadow(n,b,R,g,V,ne,$)}}}else if(Y.visible){const O=A(b,Y,S,P);b.onBeforeShadow(n,b,R,g,V,O,null),n.renderBufferDirect(g,null,V,O,b,null),b.onAfterShadow(n,b,R,g,V,O,null)}}const U=b.children;for(let V=0,Y=U.length;V<Y;V++)x(U[V],R,g,S,P)}function T(b){b.target.removeEventListener("dispose",T);for(const g in c){const S=c[g],P=b.target.uuid;P in S&&(S[P].dispose(),delete S[P])}}}function W_(n,e){function t(){let D=!1;const ie=new ft;let K=null;const ce=new ft(0,0,0,0);return{setMask:function(me){K!==me&&!D&&(n.colorMask(me,me,me,me),K=me)},setLocked:function(me){D=me},setClear:function(me,Q,Ee,Se,gt){gt===!0&&(me*=Se,Q*=Se,Ee*=Se),ie.set(me,Q,Ee,Se),ce.equals(ie)===!1&&(n.clearColor(me,Q,Ee,Se),ce.copy(ie))},reset:function(){D=!1,K=null,ce.set(-1,0,0,0)}}}function i(){let D=!1,ie=!1,K=null,ce=null,me=null;return{setReversed:function(Q){if(ie!==Q){const Ee=e.get("EXT_clip_control");Q?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),ie=Q;const Se=me;me=null,this.setClear(Se)}},getReversed:function(){return ie},setTest:function(Q){Q?ee(n.DEPTH_TEST):Ie(n.DEPTH_TEST)},setMask:function(Q){K!==Q&&!D&&(n.depthMask(Q),K=Q)},setFunc:function(Q){if(ie&&(Q=Hd[Q]),ce!==Q){switch(Q){case qa:n.depthFunc(n.NEVER);break;case Ya:n.depthFunc(n.ALWAYS);break;case $a:n.depthFunc(n.LESS);break;case ir:n.depthFunc(n.LEQUAL);break;case Ka:n.depthFunc(n.EQUAL);break;case Za:n.depthFunc(n.GEQUAL);break;case Ja:n.depthFunc(n.GREATER);break;case Qa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ce=Q}},setLocked:function(Q){D=Q},setClear:function(Q){me!==Q&&(me=Q,ie&&(Q=1-Q),n.clearDepth(Q))},reset:function(){D=!1,K=null,ce=null,me=null,ie=!1}}}function r(){let D=!1,ie=null,K=null,ce=null,me=null,Q=null,Ee=null,Se=null,gt=null;return{setTest:function(at){D||(at?ee(n.STENCIL_TEST):Ie(n.STENCIL_TEST))},setMask:function(at){ie!==at&&!D&&(n.stencilMask(at),ie=at)},setFunc:function(at,xn,Mn){(K!==at||ce!==xn||me!==Mn)&&(n.stencilFunc(at,xn,Mn),K=at,ce=xn,me=Mn)},setOp:function(at,xn,Mn){(Q!==at||Ee!==xn||Se!==Mn)&&(n.stencilOp(at,xn,Mn),Q=at,Ee=xn,Se=Mn)},setLocked:function(at){D=at},setClear:function(at){gt!==at&&(n.clearStencil(at),gt=at)},reset:function(){D=!1,ie=null,K=null,ce=null,me=null,Q=null,Ee=null,Se=null,gt=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},d={},h={},f=new WeakMap,v=[],y=null,m=!1,p=null,E=null,A=null,x=null,T=null,b=null,R=null,g=new Ve(0,0,0),S=0,P=!1,L=null,U=null,V=null,Y=null,O=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,$=0;const j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(j)[1]),B=$>=1):j.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),B=$>=2);let ne=null,re={};const _e=n.getParameter(n.SCISSOR_BOX),qe=n.getParameter(n.VIEWPORT),lt=new ft().fromArray(_e),Ke=new ft().fromArray(qe);function J(D,ie,K,ce){const me=new Uint8Array(4),Q=n.createTexture();n.bindTexture(D,Q),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ee=0;Ee<K;Ee++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(ie,0,n.RGBA,1,1,ce,0,n.RGBA,n.UNSIGNED_BYTE,me):n.texImage2D(ie+Ee,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,me);return Q}const se={};se[n.TEXTURE_2D]=J(n.TEXTURE_2D,n.TEXTURE_2D,1),se[n.TEXTURE_CUBE_MAP]=J(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[n.TEXTURE_2D_ARRAY]=J(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),se[n.TEXTURE_3D]=J(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(n.DEPTH_TEST),a.setFunc(ir),St(!1),At(Ll),ee(n.CULL_FACE),Ze(Vn);function ee(D){u[D]!==!0&&(n.enable(D),u[D]=!0)}function Ie(D){u[D]!==!1&&(n.disable(D),u[D]=!1)}function Ne(D,ie){return h[D]!==ie?(n.bindFramebuffer(D,ie),h[D]=ie,D===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ie),D===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ie),!0):!1}function Pe(D,ie){let K=v,ce=!1;if(D){K=f.get(ie),K===void 0&&(K=[],f.set(ie,K));const me=D.textures;if(K.length!==me.length||K[0]!==n.COLOR_ATTACHMENT0){for(let Q=0,Ee=me.length;Q<Ee;Q++)K[Q]=n.COLOR_ATTACHMENT0+Q;K.length=me.length,ce=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,ce=!0);ce&&n.drawBuffers(K)}function vt(D){return y!==D?(n.useProgram(D),y=D,!0):!1}const He={[gi]:n.FUNC_ADD,[hd]:n.FUNC_SUBTRACT,[dd]:n.FUNC_REVERSE_SUBTRACT};He[fd]=n.MIN,He[pd]=n.MAX;const it={[md]:n.ZERO,[gd]:n.ONE,[_d]:n.SRC_COLOR,[Wa]:n.SRC_ALPHA,[bd]:n.SRC_ALPHA_SATURATE,[yd]:n.DST_COLOR,[xd]:n.DST_ALPHA,[vd]:n.ONE_MINUS_SRC_COLOR,[Xa]:n.ONE_MINUS_SRC_ALPHA,[Sd]:n.ONE_MINUS_DST_COLOR,[Md]:n.ONE_MINUS_DST_ALPHA,[Ed]:n.CONSTANT_COLOR,[Td]:n.ONE_MINUS_CONSTANT_COLOR,[wd]:n.CONSTANT_ALPHA,[Ad]:n.ONE_MINUS_CONSTANT_ALPHA};function Ze(D,ie,K,ce,me,Q,Ee,Se,gt,at){if(D===Vn){m===!0&&(Ie(n.BLEND),m=!1);return}if(m===!1&&(ee(n.BLEND),m=!0),D!==ud){if(D!==p||at!==P){if((E!==gi||T!==gi)&&(n.blendEquation(n.FUNC_ADD),E=gi,T=gi),at)switch(D){case Ji:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Va:n.blendFunc(n.ONE,n.ONE);break;case Dl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Il:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:We("WebGLState: Invalid blending: ",D);break}else switch(D){case Ji:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Va:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Dl:We("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Il:We("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:We("WebGLState: Invalid blending: ",D);break}A=null,x=null,b=null,R=null,g.set(0,0,0),S=0,p=D,P=at}return}me=me||ie,Q=Q||K,Ee=Ee||ce,(ie!==E||me!==T)&&(n.blendEquationSeparate(He[ie],He[me]),E=ie,T=me),(K!==A||ce!==x||Q!==b||Ee!==R)&&(n.blendFuncSeparate(it[K],it[ce],it[Q],it[Ee]),A=K,x=ce,b=Q,R=Ee),(Se.equals(g)===!1||gt!==S)&&(n.blendColor(Se.r,Se.g,Se.b,gt),g.copy(Se),S=gt),p=D,P=!1}function Ye(D,ie){D.side===ln?Ie(n.CULL_FACE):ee(n.CULL_FACE);let K=D.side===qt;ie&&(K=!K),St(K),D.blending===Ji&&D.transparent===!1?Ze(Vn):Ze(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const ce=D.stencilWrite;o.setTest(ce),ce&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ft(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ee(n.SAMPLE_ALPHA_TO_COVERAGE):Ie(n.SAMPLE_ALPHA_TO_COVERAGE)}function St(D){L!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),L=D)}function At(D){D!==od?(ee(n.CULL_FACE),D!==U&&(D===Ll?n.cullFace(n.BACK):D===ld?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ie(n.CULL_FACE),U=D}function Lt(D){D!==V&&(B&&n.lineWidth(D),V=D)}function Ft(D,ie,K){D?(ee(n.POLYGON_OFFSET_FILL),(Y!==ie||O!==K)&&(Y=ie,O=K,a.getReversed()&&(ie=-ie),n.polygonOffset(ie,K))):Ie(n.POLYGON_OFFSET_FILL)}function mt(D){D?ee(n.SCISSOR_TEST):Ie(n.SCISSOR_TEST)}function bt(D){D===void 0&&(D=n.TEXTURE0+X-1),ne!==D&&(n.activeTexture(D),ne=D)}function I(D,ie,K){K===void 0&&(ne===null?K=n.TEXTURE0+X-1:K=ne);let ce=re[K];ce===void 0&&(ce={type:void 0,texture:void 0},re[K]=ce),(ce.type!==D||ce.texture!==ie)&&(ne!==K&&(n.activeTexture(K),ne=K),n.bindTexture(D,ie||se[D]),ce.type=D,ce.texture=ie)}function Yt(){const D=re[ne];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Qe(){try{n.compressedTexImage2D(...arguments)}catch(D){We("WebGLState:",D)}}function w(){try{n.compressedTexImage3D(...arguments)}catch(D){We("WebGLState:",D)}}function _(){try{n.texSubImage2D(...arguments)}catch(D){We("WebGLState:",D)}}function F(){try{n.texSubImage3D(...arguments)}catch(D){We("WebGLState:",D)}}function G(){try{n.compressedTexSubImage2D(...arguments)}catch(D){We("WebGLState:",D)}}function W(){try{n.compressedTexSubImage3D(...arguments)}catch(D){We("WebGLState:",D)}}function te(){try{n.texStorage2D(...arguments)}catch(D){We("WebGLState:",D)}}function ae(){try{n.texStorage3D(...arguments)}catch(D){We("WebGLState:",D)}}function q(){try{n.texImage2D(...arguments)}catch(D){We("WebGLState:",D)}}function Z(){try{n.texImage3D(...arguments)}catch(D){We("WebGLState:",D)}}function oe(D){return d[D]!==void 0?d[D]:n.getParameter(D)}function Te(D,ie){d[D]!==ie&&(n.pixelStorei(D,ie),d[D]=ie)}function he(D){lt.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),lt.copy(D))}function le(D){Ke.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),Ke.copy(D))}function Ce(D,ie){let K=c.get(ie);K===void 0&&(K=new WeakMap,c.set(ie,K));let ce=K.get(D);ce===void 0&&(ce=n.getUniformBlockIndex(ie,D.name),K.set(D,ce))}function Le(D,ie){const ce=c.get(ie).get(D);l.get(ie)!==ce&&(n.uniformBlockBinding(ie,ce,D.__bindingPointIndex),l.set(ie,ce))}function Fe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},ne=null,re={},h={},f=new WeakMap,v=[],y=null,m=!1,p=null,E=null,A=null,x=null,T=null,b=null,R=null,g=new Ve(0,0,0),S=0,P=!1,L=null,U=null,V=null,Y=null,O=null,lt.set(0,0,n.canvas.width,n.canvas.height),Ke.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ee,disable:Ie,bindFramebuffer:Ne,drawBuffers:Pe,useProgram:vt,setBlending:Ze,setMaterial:Ye,setFlipSided:St,setCullFace:At,setLineWidth:Lt,setPolygonOffset:Ft,setScissorTest:mt,activeTexture:bt,bindTexture:I,unbindTexture:Yt,compressedTexImage2D:Qe,compressedTexImage3D:w,texImage2D:q,texImage3D:Z,pixelStorei:Te,getParameter:oe,updateUBOMapping:Ce,uniformBlockBinding:Le,texStorage2D:te,texStorage3D:ae,texSubImage2D:_,texSubImage3D:F,compressedTexSubImage2D:G,compressedTexSubImage3D:W,scissor:he,viewport:le,reset:Fe}}function X_(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ye,u=new WeakMap,d=new Set;let h;const f=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(w,_){return v?new OffscreenCanvas(w,_):Ns("canvas")}function m(w,_,F){let G=1;const W=Qe(w);if((W.width>F||W.height>F)&&(G=F/Math.max(W.width,W.height)),G<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const te=Math.floor(G*W.width),ae=Math.floor(G*W.height);h===void 0&&(h=y(te,ae));const q=_?y(te,ae):h;return q.width=te,q.height=ae,q.getContext("2d").drawImage(w,0,0,te,ae),De("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+te+"x"+ae+")."),q}else return"data"in w&&De("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),w;return w}function p(w){return w.generateMipmaps}function E(w){n.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(w,_,F,G,W,te=!1){if(w!==null){if(n[w]!==void 0)return n[w];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ae;G&&(ae=e.get("EXT_texture_norm16"),ae||De("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=_;if(_===n.RED&&(F===n.FLOAT&&(q=n.R32F),F===n.HALF_FLOAT&&(q=n.R16F),F===n.UNSIGNED_BYTE&&(q=n.R8),F===n.UNSIGNED_SHORT&&ae&&(q=ae.R16_EXT),F===n.SHORT&&ae&&(q=ae.R16_SNORM_EXT)),_===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(q=n.R8UI),F===n.UNSIGNED_SHORT&&(q=n.R16UI),F===n.UNSIGNED_INT&&(q=n.R32UI),F===n.BYTE&&(q=n.R8I),F===n.SHORT&&(q=n.R16I),F===n.INT&&(q=n.R32I)),_===n.RG&&(F===n.FLOAT&&(q=n.RG32F),F===n.HALF_FLOAT&&(q=n.RG16F),F===n.UNSIGNED_BYTE&&(q=n.RG8),F===n.UNSIGNED_SHORT&&ae&&(q=ae.RG16_EXT),F===n.SHORT&&ae&&(q=ae.RG16_SNORM_EXT)),_===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(q=n.RG8UI),F===n.UNSIGNED_SHORT&&(q=n.RG16UI),F===n.UNSIGNED_INT&&(q=n.RG32UI),F===n.BYTE&&(q=n.RG8I),F===n.SHORT&&(q=n.RG16I),F===n.INT&&(q=n.RG32I)),_===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(q=n.RGB8UI),F===n.UNSIGNED_SHORT&&(q=n.RGB16UI),F===n.UNSIGNED_INT&&(q=n.RGB32UI),F===n.BYTE&&(q=n.RGB8I),F===n.SHORT&&(q=n.RGB16I),F===n.INT&&(q=n.RGB32I)),_===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),F===n.UNSIGNED_INT&&(q=n.RGBA32UI),F===n.BYTE&&(q=n.RGBA8I),F===n.SHORT&&(q=n.RGBA16I),F===n.INT&&(q=n.RGBA32I)),_===n.RGB&&(F===n.UNSIGNED_SHORT&&ae&&(q=ae.RGB16_EXT),F===n.SHORT&&ae&&(q=ae.RGB16_SNORM_EXT),F===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(q=n.R11F_G11F_B10F)),_===n.RGBA){const Z=te?Us:Xe.getTransfer(W);F===n.FLOAT&&(q=n.RGBA32F),F===n.HALF_FLOAT&&(q=n.RGBA16F),F===n.UNSIGNED_BYTE&&(q=Z===je?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT&&ae&&(q=ae.RGBA16_EXT),F===n.SHORT&&ae&&(q=ae.RGBA16_SNORM_EXT),F===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function T(w,_){let F;return w?_===null||_===Ln||_===Br?F=n.DEPTH24_STENCIL8:_===An?F=n.DEPTH32F_STENCIL8:_===Or&&(F=n.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Ln||_===Br?F=n.DEPTH_COMPONENT24:_===An?F=n.DEPTH_COMPONENT32F:_===Or&&(F=n.DEPTH_COMPONENT16),F}function b(w,_){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==Ut&&w.minFilter!==Ht?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function R(w){const _=w.target;_.removeEventListener("dispose",R),S(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&d.delete(_)}function g(w){const _=w.target;_.removeEventListener("dispose",g),L(_)}function S(w){const _=i.get(w);if(_.__webglInit===void 0)return;const F=w.source,G=f.get(F);if(G){const W=G[_.__cacheKey];W.usedTimes--,W.usedTimes===0&&P(w),Object.keys(G).length===0&&f.delete(F)}i.remove(w)}function P(w){const _=i.get(w);n.deleteTexture(_.__webglTexture);const F=w.source,G=f.get(F);delete G[_.__cacheKey],a.memory.textures--}function L(w){const _=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(_.__webglFramebuffer[G]))for(let W=0;W<_.__webglFramebuffer[G].length;W++)n.deleteFramebuffer(_.__webglFramebuffer[G][W]);else n.deleteFramebuffer(_.__webglFramebuffer[G]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[G])}else{if(Array.isArray(_.__webglFramebuffer))for(let G=0;G<_.__webglFramebuffer.length;G++)n.deleteFramebuffer(_.__webglFramebuffer[G]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let G=0;G<_.__webglColorRenderbuffer.length;G++)_.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[G]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const F=w.textures;for(let G=0,W=F.length;G<W;G++){const te=i.get(F[G]);te.__webglTexture&&(n.deleteTexture(te.__webglTexture),a.memory.textures--),i.remove(F[G])}i.remove(w)}let U=0;function V(){U=0}function Y(){return U}function O(w){U=w}function X(){const w=U;return w>=r.maxTextures&&De("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),U+=1,w}function B(w){const _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function $(w,_){const F=i.get(w);if(w.isVideoTexture&&I(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&F.__version!==w.version){const G=w.image;if(G===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(F,w,_);return}}else w.isExternalTexture&&(F.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+_)}function j(w,_){const F=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){Ie(F,w,_);return}else w.isExternalTexture&&(F.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+_)}function ne(w,_){const F=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){Ie(F,w,_);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+_)}function re(w,_){const F=i.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&F.__version!==w.version){Ne(F,w,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+_)}const _e={[Ps]:n.REPEAT,[kn]:n.CLAMP_TO_EDGE,[ja]:n.MIRRORED_REPEAT},qe={[Ut]:n.NEAREST,[Pd]:n.NEAREST_MIPMAP_NEAREST,[$r]:n.NEAREST_MIPMAP_LINEAR,[Ht]:n.LINEAR,[ta]:n.LINEAR_MIPMAP_NEAREST,[xi]:n.LINEAR_MIPMAP_LINEAR},lt={[Id]:n.NEVER,[Bd]:n.ALWAYS,[Ud]:n.LESS,[Jo]:n.LEQUAL,[Nd]:n.EQUAL,[Qo]:n.GEQUAL,[Fd]:n.GREATER,[Od]:n.NOTEQUAL};function Ke(w,_){if(_.type===An&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Ht||_.magFilter===ta||_.magFilter===$r||_.magFilter===xi||_.minFilter===Ht||_.minFilter===ta||_.minFilter===$r||_.minFilter===xi)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,_e[_.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,_e[_.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,_e[_.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,qe[_.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,qe[_.minFilter]),_.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,lt[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ut||_.minFilter!==$r&&_.minFilter!==xi||_.type===An&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function J(w,_){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",R));const G=_.source;let W=f.get(G);W===void 0&&(W={},f.set(G,W));const te=B(_);if(te!==w.__cacheKey){W[te]===void 0&&(W[te]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),W[te].usedTimes++;const ae=W[w.__cacheKey];ae!==void 0&&(W[w.__cacheKey].usedTimes--,ae.usedTimes===0&&P(_)),w.__cacheKey=te,w.__webglTexture=W[te].texture}return F}function se(w,_,F){return Math.floor(Math.floor(w/F)/_)}function ee(w,_,F,G){const te=w.updateRanges;if(te.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,F,G,_.data);else{te.sort((Te,he)=>Te.start-he.start);let ae=0;for(let Te=1;Te<te.length;Te++){const he=te[ae],le=te[Te],Ce=he.start+he.count,Le=se(le.start,_.width,4),Fe=se(he.start,_.width,4);le.start<=Ce+1&&Le===Fe&&se(le.start+le.count-1,_.width,4)===Le?he.count=Math.max(he.count,le.start+le.count-he.start):(++ae,te[ae]=le)}te.length=ae+1;const q=t.getParameter(n.UNPACK_ROW_LENGTH),Z=t.getParameter(n.UNPACK_SKIP_PIXELS),oe=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let Te=0,he=te.length;Te<he;Te++){const le=te[Te],Ce=Math.floor(le.start/4),Le=Math.ceil(le.count/4),Fe=Ce%_.width,D=Math.floor(Ce/_.width),ie=Le,K=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Fe),t.pixelStorei(n.UNPACK_SKIP_ROWS,D),t.texSubImage2D(n.TEXTURE_2D,0,Fe,D,ie,K,F,G,_.data)}w.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,q),t.pixelStorei(n.UNPACK_SKIP_PIXELS,Z),t.pixelStorei(n.UNPACK_SKIP_ROWS,oe)}}function Ie(w,_,F){let G=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(G=n.TEXTURE_3D);const W=J(w,_),te=_.source;t.bindTexture(G,w.__webglTexture,n.TEXTURE0+F);const ae=i.get(te);if(te.version!==ae.__version||W===!0){if(t.activeTexture(n.TEXTURE0+F),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const K=Xe.getPrimaries(Xe.workingColorSpace),ce=_.colorSpace===ai?null:Xe.getPrimaries(_.colorSpace),me=_.colorSpace===ai||K===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me)}t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment);let Z=m(_.image,!1,r.maxTextureSize);Z=Yt(_,Z);const oe=s.convert(_.format,_.colorSpace),Te=s.convert(_.type);let he=x(_.internalFormat,oe,Te,_.normalized,_.colorSpace,_.isVideoTexture);Ke(G,_);let le;const Ce=_.mipmaps,Le=_.isVideoTexture!==!0,Fe=ae.__version===void 0||W===!0,D=te.dataReady,ie=b(_,Z);if(_.isDepthTexture)he=T(_.format===Mi,_.type),Fe&&(Le?t.texStorage2D(n.TEXTURE_2D,1,he,Z.width,Z.height):t.texImage2D(n.TEXTURE_2D,0,he,Z.width,Z.height,0,oe,Te,null));else if(_.isDataTexture)if(Ce.length>0){Le&&Fe&&t.texStorage2D(n.TEXTURE_2D,ie,he,Ce[0].width,Ce[0].height);for(let K=0,ce=Ce.length;K<ce;K++)le=Ce[K],Le?D&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,le.width,le.height,oe,Te,le.data):t.texImage2D(n.TEXTURE_2D,K,he,le.width,le.height,0,oe,Te,le.data);_.generateMipmaps=!1}else Le?(Fe&&t.texStorage2D(n.TEXTURE_2D,ie,he,Z.width,Z.height),D&&ee(_,Z,oe,Te)):t.texImage2D(n.TEXTURE_2D,0,he,Z.width,Z.height,0,oe,Te,Z.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Le&&Fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ie,he,Ce[0].width,Ce[0].height,Z.depth);for(let K=0,ce=Ce.length;K<ce;K++)if(le=Ce[K],_.format!==vn)if(oe!==null)if(Le){if(D)if(_.layerUpdates.size>0){const me=hc(le.width,le.height,_.format,_.type);for(const Q of _.layerUpdates){const Ee=le.data.subarray(Q*me/le.data.BYTES_PER_ELEMENT,(Q+1)*me/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,Q,le.width,le.height,1,oe,Ee)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,le.width,le.height,Z.depth,oe,le.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,he,le.width,le.height,Z.depth,0,le.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?D&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,le.width,le.height,Z.depth,oe,Te,le.data):t.texImage3D(n.TEXTURE_2D_ARRAY,K,he,le.width,le.height,Z.depth,0,oe,Te,le.data)}else{Le&&Fe&&t.texStorage2D(n.TEXTURE_2D,ie,he,Ce[0].width,Ce[0].height);for(let K=0,ce=Ce.length;K<ce;K++)le=Ce[K],_.format!==vn?oe!==null?Le?D&&t.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,le.width,le.height,oe,le.data):t.compressedTexImage2D(n.TEXTURE_2D,K,he,le.width,le.height,0,le.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?D&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,le.width,le.height,oe,Te,le.data):t.texImage2D(n.TEXTURE_2D,K,he,le.width,le.height,0,oe,Te,le.data)}else if(_.isDataArrayTexture)if(Le){if(Fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ie,he,Z.width,Z.height,Z.depth),D)if(_.layerUpdates.size>0){const K=hc(Z.width,Z.height,_.format,_.type);for(const ce of _.layerUpdates){const me=Z.data.subarray(ce*K/Z.data.BYTES_PER_ELEMENT,(ce+1)*K/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ce,Z.width,Z.height,1,oe,Te,me)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,oe,Te,Z.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,he,Z.width,Z.height,Z.depth,0,oe,Te,Z.data);else if(_.isData3DTexture)Le?(Fe&&t.texStorage3D(n.TEXTURE_3D,ie,he,Z.width,Z.height,Z.depth),D&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,oe,Te,Z.data)):t.texImage3D(n.TEXTURE_3D,0,he,Z.width,Z.height,Z.depth,0,oe,Te,Z.data);else if(_.isFramebufferTexture){if(Fe)if(Le)t.texStorage2D(n.TEXTURE_2D,ie,he,Z.width,Z.height);else{let K=Z.width,ce=Z.height;for(let me=0;me<ie;me++)t.texImage2D(n.TEXTURE_2D,me,he,K,ce,0,oe,Te,null),K>>=1,ce>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in n){const K=n.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),Z.parentNode!==K){K.appendChild(Z),d.add(_),K.onpaint=ce=>{const me=ce.changedElements;for(const Q of d)me.includes(Q.image)&&(Q.needsUpdate=!0)},K.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Z);else{const me=n.RGBA,Q=n.RGBA,Ee=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,me,Q,Ee,Z)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ce.length>0){if(Le&&Fe){const K=Qe(Ce[0]);t.texStorage2D(n.TEXTURE_2D,ie,he,K.width,K.height)}for(let K=0,ce=Ce.length;K<ce;K++)le=Ce[K],Le?D&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,oe,Te,le):t.texImage2D(n.TEXTURE_2D,K,he,oe,Te,le);_.generateMipmaps=!1}else if(Le){if(Fe){const K=Qe(Z);t.texStorage2D(n.TEXTURE_2D,ie,he,K.width,K.height)}D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,oe,Te,Z)}else t.texImage2D(n.TEXTURE_2D,0,he,oe,Te,Z);p(_)&&E(G),ae.__version=te.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function Ne(w,_,F){if(_.image.length!==6)return;const G=J(w,_),W=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+F);const te=i.get(W);if(W.version!==te.__version||G===!0){t.activeTexture(n.TEXTURE0+F);const ae=Xe.getPrimaries(Xe.workingColorSpace),q=_.colorSpace===ai?null:Xe.getPrimaries(_.colorSpace),Z=_.colorSpace===ai||ae===q?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);const oe=_.isCompressedTexture||_.image[0].isCompressedTexture,Te=_.image[0]&&_.image[0].isDataTexture,he=[];for(let Q=0;Q<6;Q++)!oe&&!Te?he[Q]=m(_.image[Q],!0,r.maxCubemapSize):he[Q]=Te?_.image[Q].image:_.image[Q],he[Q]=Yt(_,he[Q]);const le=he[0],Ce=s.convert(_.format,_.colorSpace),Le=s.convert(_.type),Fe=x(_.internalFormat,Ce,Le,_.normalized,_.colorSpace),D=_.isVideoTexture!==!0,ie=te.__version===void 0||G===!0,K=W.dataReady;let ce=b(_,le);Ke(n.TEXTURE_CUBE_MAP,_);let me;if(oe){D&&ie&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ce,Fe,le.width,le.height);for(let Q=0;Q<6;Q++){me=he[Q].mipmaps;for(let Ee=0;Ee<me.length;Ee++){const Se=me[Ee];_.format!==vn?Ce!==null?D?K&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee,0,0,Se.width,Se.height,Ce,Se.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee,Fe,Se.width,Se.height,0,Se.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee,0,0,Se.width,Se.height,Ce,Le,Se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee,Fe,Se.width,Se.height,0,Ce,Le,Se.data)}}}else{if(me=_.mipmaps,D&&ie){me.length>0&&ce++;const Q=Qe(he[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ce,Fe,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(Te){D?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,he[Q].width,he[Q].height,Ce,Le,he[Q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Fe,he[Q].width,he[Q].height,0,Ce,Le,he[Q].data);for(let Ee=0;Ee<me.length;Ee++){const gt=me[Ee].image[Q].image;D?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee+1,0,0,gt.width,gt.height,Ce,Le,gt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee+1,Fe,gt.width,gt.height,0,Ce,Le,gt.data)}}else{D?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ce,Le,he[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Fe,Ce,Le,he[Q]);for(let Ee=0;Ee<me.length;Ee++){const Se=me[Ee];D?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee+1,0,0,Ce,Le,Se.image[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee+1,Fe,Ce,Le,Se.image[Q])}}}p(_)&&E(n.TEXTURE_CUBE_MAP),te.__version=W.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function Pe(w,_,F,G,W,te){const ae=s.convert(F.format,F.colorSpace),q=s.convert(F.type),Z=x(F.internalFormat,ae,q,F.normalized,F.colorSpace),oe=i.get(_),Te=i.get(F);if(Te.__renderTarget=_,!oe.__hasExternalTextures){const he=Math.max(1,_.width>>te),le=Math.max(1,_.height>>te);W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?t.texImage3D(W,te,Z,he,le,_.depth,0,ae,q,null):t.texImage2D(W,te,Z,he,le,0,ae,q,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),bt(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,W,Te.__webglTexture,0,mt(_)):(W===n.TEXTURE_2D||W>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,W,Te.__webglTexture,te),t.bindFramebuffer(n.FRAMEBUFFER,null)}function vt(w,_,F){if(n.bindRenderbuffer(n.RENDERBUFFER,w),_.depthBuffer){const G=_.depthTexture,W=G&&G.isDepthTexture?G.type:null,te=T(_.stencilBuffer,W),ae=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;bt(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,mt(_),te,_.width,_.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,mt(_),te,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,te,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,w)}else{const G=_.textures;for(let W=0;W<G.length;W++){const te=G[W],ae=s.convert(te.format,te.colorSpace),q=s.convert(te.type),Z=x(te.internalFormat,ae,q,te.normalized,te.colorSpace);bt(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,mt(_),Z,_.width,_.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,mt(_),Z,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Z,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function He(w,_,F){const G=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const W=i.get(_.depthTexture);if(W.__renderTarget=_,(!W.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),G){if(W.__webglInit===void 0&&(W.__webglInit=!0,_.depthTexture.addEventListener("dispose",R)),W.__webglTexture===void 0){W.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),Ke(n.TEXTURE_CUBE_MAP,_.depthTexture);const oe=s.convert(_.depthTexture.format),Te=s.convert(_.depthTexture.type);let he;_.depthTexture.format===$n?he=n.DEPTH_COMPONENT24:_.depthTexture.format===Mi&&(he=n.DEPTH24_STENCIL8);for(let le=0;le<6;le++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,he,_.width,_.height,0,oe,Te,null)}}else $(_.depthTexture,0);const te=W.__webglTexture,ae=mt(_),q=G?n.TEXTURE_CUBE_MAP_POSITIVE_X+F:n.TEXTURE_2D,Z=_.depthTexture.format===Mi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===$n)bt(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,q,te,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,Z,q,te,0);else if(_.depthTexture.format===Mi)bt(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,q,te,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,Z,q,te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function it(w){const _=i.get(w),F=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){const G=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),G){const W=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,G.removeEventListener("dispose",W)};G.addEventListener("dispose",W),_.__depthDisposeCallback=W}_.__boundDepthTexture=G}if(w.depthTexture&&!_.__autoAllocateDepthBuffer)if(F)for(let G=0;G<6;G++)He(_.__webglFramebuffer[G],w,G);else{const G=w.texture.mipmaps;G&&G.length>0?He(_.__webglFramebuffer[0],w,0):He(_.__webglFramebuffer,w,0)}else if(F){_.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[G]),_.__webglDepthbuffer[G]===void 0)_.__webglDepthbuffer[G]=n.createRenderbuffer(),vt(_.__webglDepthbuffer[G],w,!1);else{const W=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=_.__webglDepthbuffer[G];n.bindRenderbuffer(n.RENDERBUFFER,te),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,te)}}else{const G=w.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),vt(_.__webglDepthbuffer,w,!1);else{const W=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,te),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,te)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ze(w,_,F){const G=i.get(w);_!==void 0&&Pe(G.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&it(w)}function Ye(w){const _=w.texture,F=i.get(w),G=i.get(_);w.addEventListener("dispose",g);const W=w.textures,te=w.isWebGLCubeRenderTarget===!0,ae=W.length>1;if(ae||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=_.version,a.memory.textures++),te){F.__webglFramebuffer=[];for(let q=0;q<6;q++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[q]=[];for(let Z=0;Z<_.mipmaps.length;Z++)F.__webglFramebuffer[q][Z]=n.createFramebuffer()}else F.__webglFramebuffer[q]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let q=0;q<_.mipmaps.length;q++)F.__webglFramebuffer[q]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(ae)for(let q=0,Z=W.length;q<Z;q++){const oe=i.get(W[q]);oe.__webglTexture===void 0&&(oe.__webglTexture=n.createTexture(),a.memory.textures++)}if(w.samples>0&&bt(w)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let q=0;q<W.length;q++){const Z=W[q];F.__webglColorRenderbuffer[q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[q]);const oe=s.convert(Z.format,Z.colorSpace),Te=s.convert(Z.type),he=x(Z.internalFormat,oe,Te,Z.normalized,Z.colorSpace,w.isXRRenderTarget===!0),le=mt(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,le,he,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+q,n.RENDERBUFFER,F.__webglColorRenderbuffer[q])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),vt(F.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(te){t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),Ke(n.TEXTURE_CUBE_MAP,_);for(let q=0;q<6;q++)if(_.mipmaps&&_.mipmaps.length>0)for(let Z=0;Z<_.mipmaps.length;Z++)Pe(F.__webglFramebuffer[q][Z],w,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+q,Z);else Pe(F.__webglFramebuffer[q],w,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);p(_)&&E(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let q=0,Z=W.length;q<Z;q++){const oe=W[q],Te=i.get(oe);let he=n.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(he=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,Te.__webglTexture),Ke(he,oe),Pe(F.__webglFramebuffer,w,oe,n.COLOR_ATTACHMENT0+q,he,0),p(oe)&&E(he)}t.unbindTexture()}else{let q=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(q=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(q,G.__webglTexture),Ke(q,_),_.mipmaps&&_.mipmaps.length>0)for(let Z=0;Z<_.mipmaps.length;Z++)Pe(F.__webglFramebuffer[Z],w,_,n.COLOR_ATTACHMENT0,q,Z);else Pe(F.__webglFramebuffer,w,_,n.COLOR_ATTACHMENT0,q,0);p(_)&&E(q),t.unbindTexture()}w.depthBuffer&&it(w)}function St(w){const _=w.textures;for(let F=0,G=_.length;F<G;F++){const W=_[F];if(p(W)){const te=A(w),ae=i.get(W).__webglTexture;t.bindTexture(te,ae),E(te),t.unbindTexture()}}}const At=[],Lt=[];function Ft(w){if(w.samples>0){if(bt(w)===!1){const _=w.textures,F=w.width,G=w.height;let W=n.COLOR_BUFFER_BIT;const te=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=i.get(w),q=_.length>1;if(q)for(let oe=0;oe<_.length;oe++)t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);const Z=w.texture.mipmaps;Z&&Z.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let oe=0;oe<_.length;oe++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(W|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(W|=n.STENCIL_BUFFER_BIT)),q){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ae.__webglColorRenderbuffer[oe]);const Te=i.get(_[oe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Te,0)}n.blitFramebuffer(0,0,F,G,0,0,F,G,W,n.NEAREST),l===!0&&(At.length=0,Lt.length=0,At.push(n.COLOR_ATTACHMENT0+oe),w.depthBuffer&&w.resolveDepthBuffer===!1&&(At.push(te),Lt.push(te),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Lt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,At))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),q)for(let oe=0;oe<_.length;oe++){t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,ae.__webglColorRenderbuffer[oe]);const Te=i.get(_[oe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,Te,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const _=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function mt(w){return Math.min(r.maxSamples,w.samples)}function bt(w){const _=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function I(w){const _=a.render.frame;u.get(w)!==_&&(u.set(w,_),w.update())}function Yt(w,_){const F=w.colorSpace,G=w.format,W=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||F!==Is&&F!==ai&&(Xe.getTransfer(F)===je?(G!==vn||W!==nn)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):We("WebGLTextures: Unsupported texture color space:",F)),_}function Qe(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=V,this.getTextureUnits=Y,this.setTextureUnits=O,this.setTexture2D=$,this.setTexture2DArray=j,this.setTexture3D=ne,this.setTextureCube=re,this.rebindTextures=Ze,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=bt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function q_(n,e){function t(i,r=ai){let s;const a=Xe.getTransfer(r);if(i===nn)return n.UNSIGNED_BYTE;if(i===qo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Yo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===mu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===gu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===fu)return n.BYTE;if(i===pu)return n.SHORT;if(i===Or)return n.UNSIGNED_SHORT;if(i===Xo)return n.INT;if(i===Ln)return n.UNSIGNED_INT;if(i===An)return n.FLOAT;if(i===Yn)return n.HALF_FLOAT;if(i===_u)return n.ALPHA;if(i===vu)return n.RGB;if(i===vn)return n.RGBA;if(i===$n)return n.DEPTH_COMPONENT;if(i===Mi)return n.DEPTH_STENCIL;if(i===xu)return n.RED;if(i===$o)return n.RED_INTEGER;if(i===Ei)return n.RG;if(i===Ko)return n.RG_INTEGER;if(i===Zo)return n.RGBA_INTEGER;if(i===bs||i===Es||i===Ts||i===ws)if(a===je)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===bs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Es)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ts)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ws)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===bs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Es)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ts)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ws)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===eo||i===to||i===no||i===io)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===eo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===to)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===no)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===io)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ro||i===so||i===ao||i===oo||i===lo||i===Ls||i===co)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ro||i===so)return a===je?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ao)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===oo)return s.COMPRESSED_R11_EAC;if(i===lo)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Ls)return s.COMPRESSED_RG11_EAC;if(i===co)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===uo||i===ho||i===fo||i===po||i===mo||i===go||i===_o||i===vo||i===xo||i===Mo||i===yo||i===So||i===bo||i===Eo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===uo)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ho)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===fo)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===po)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===mo)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===go)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===_o)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===vo)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===xo)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Mo)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===yo)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===So)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===bo)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Eo)return a===je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===To||i===wo||i===Ao)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===To)return a===je?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===wo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ao)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ro||i===Co||i===Ds||i===Po)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ro)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Co)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ds)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Po)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Br?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Y_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$_=`
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

}`;class K_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Cu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new un({vertexShader:Y_,fragmentShader:$_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Me(new qn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Z_ extends wi{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,v=null;const y=typeof XRWebGLBinding<"u",m=new K_,p={},E=t.getContextAttributes();let A=null,x=null;const T=[],b=[],R=new ye;let g=null;const S=new tn;S.viewport=new ft;const P=new tn;P.viewport=new ft;const L=[S,P],U=new sp;let V=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let se=T[J];return se===void 0&&(se=new oa,T[J]=se),se.getTargetRaySpace()},this.getControllerGrip=function(J){let se=T[J];return se===void 0&&(se=new oa,T[J]=se),se.getGripSpace()},this.getHand=function(J){let se=T[J];return se===void 0&&(se=new oa,T[J]=se),se.getHandSpace()};function O(J){const se=b.indexOf(J.inputSource);if(se===-1)return;const ee=T[se];ee!==void 0&&(ee.update(J.inputSource,J.frame,c||a),ee.dispatchEvent({type:J.type,data:J.inputSource}))}function X(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",B);for(let J=0;J<T.length;J++){const se=b[J];se!==null&&(b[J]=null,T[J].disconnect(se))}V=null,Y=null,m.reset();for(const J in p)delete p[J];e.setRenderTarget(A),f=null,h=null,d=null,r=null,x=null,Ke.stop(),i.isPresenting=!1,e.setPixelRatio(g),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(A=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",X),r.addEventListener("inputsourceschange",B),E.xrCompatible!==!0&&await t.makeXRCompatible(),g=e.getPixelRatio(),e.getSize(R),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ee=null,Ie=null,Ne=null;E.depth&&(Ne=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=E.stencil?Mi:$n,Ie=E.stencil?Br:Ln);const Pe={colorFormat:t.RGBA8,depthFormat:Ne,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(Pe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new Pn(h.textureWidth,h.textureHeight,{format:vn,type:nn,depthTexture:new sr(h.textureWidth,h.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ee={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,ee),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Pn(f.framebufferWidth,f.framebufferHeight,{format:vn,type:nn,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ke.setContext(r),Ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function B(J){for(let se=0;se<J.removed.length;se++){const ee=J.removed[se],Ie=b.indexOf(ee);Ie>=0&&(b[Ie]=null,T[Ie].disconnect(ee))}for(let se=0;se<J.added.length;se++){const ee=J.added[se];let Ie=b.indexOf(ee);if(Ie===-1){for(let Pe=0;Pe<T.length;Pe++)if(Pe>=b.length){b.push(ee),Ie=Pe;break}else if(b[Pe]===null){b[Pe]=ee,Ie=Pe;break}if(Ie===-1)break}const Ne=T[Ie];Ne&&Ne.connect(ee)}}const $=new C,j=new C;function ne(J,se,ee){$.setFromMatrixPosition(se.matrixWorld),j.setFromMatrixPosition(ee.matrixWorld);const Ie=$.distanceTo(j),Ne=se.projectionMatrix.elements,Pe=ee.projectionMatrix.elements,vt=Ne[14]/(Ne[10]-1),He=Ne[14]/(Ne[10]+1),it=(Ne[9]+1)/Ne[5],Ze=(Ne[9]-1)/Ne[5],Ye=(Ne[8]-1)/Ne[0],St=(Pe[8]+1)/Pe[0],At=vt*Ye,Lt=vt*St,Ft=Ie/(-Ye+St),mt=Ft*-Ye;if(se.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(mt),J.translateZ(Ft),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ne[10]===-1)J.projectionMatrix.copy(se.projectionMatrix),J.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const bt=vt+Ft,I=He+Ft,Yt=At-mt,Qe=Lt+(Ie-mt),w=it*He/I*bt,_=Ze*He/I*bt;J.projectionMatrix.makePerspective(Yt,Qe,w,_,bt,I),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function re(J,se){se===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(se.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let se=J.near,ee=J.far;m.texture!==null&&(m.depthNear>0&&(se=m.depthNear),m.depthFar>0&&(ee=m.depthFar)),U.near=P.near=S.near=se,U.far=P.far=S.far=ee,(V!==U.near||Y!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),V=U.near,Y=U.far),U.layers.mask=J.layers.mask|6,S.layers.mask=U.layers.mask&-5,P.layers.mask=U.layers.mask&-3;const Ie=J.parent,Ne=U.cameras;re(U,Ie);for(let Pe=0;Pe<Ne.length;Pe++)re(Ne[Pe],Ie);Ne.length===2?ne(U,S,P):U.projectionMatrix.copy(S.projectionMatrix),_e(J,U,Ie)};function _e(J,se,ee){ee===null?J.matrix.copy(se.matrixWorld):(J.matrix.copy(ee.matrixWorld),J.matrix.invert(),J.matrix.multiply(se.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(se.projectionMatrix),J.projectionMatrixInverse.copy(se.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=kr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(J){l=J,h!==null&&(h.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(J){return p[J]};let qe=null;function lt(J,se){if(u=se.getViewerPose(c||a),v=se,u!==null){const ee=u.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let Ie=!1;ee.length!==U.cameras.length&&(U.cameras.length=0,Ie=!0);for(let He=0;He<ee.length;He++){const it=ee[He];let Ze=null;if(f!==null)Ze=f.getViewport(it);else{const St=d.getViewSubImage(h,it);Ze=St.viewport,He===0&&(e.setRenderTargetTextures(x,St.colorTexture,St.depthStencilTexture),e.setRenderTarget(x))}let Ye=L[He];Ye===void 0&&(Ye=new tn,Ye.layers.enable(He),Ye.viewport=new ft,L[He]=Ye),Ye.matrix.fromArray(it.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(it.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),He===0&&(U.matrix.copy(Ye.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Ie===!0&&U.cameras.push(Ye)}const Ne=r.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){d=i.getBinding();const He=d.getDepthInformation(ee[0]);He&&He.isValid&&He.texture&&m.init(He,r.renderState)}if(Ne&&Ne.includes("camera-access")&&y){e.state.unbindTexture(),d=i.getBinding();for(let He=0;He<ee.length;He++){const it=ee[He].camera;if(it){let Ze=p[it];Ze||(Ze=new Cu,p[it]=Ze);const Ye=d.getCameraImage(it);Ze.sourceTexture=Ye}}}}for(let ee=0;ee<T.length;ee++){const Ie=b[ee],Ne=T[ee];Ie!==null&&Ne!==void 0&&Ne.update(Ie,se,c||a)}qe&&qe(J,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),v=null}const Ke=new Bu;Ke.setAnimationLoop(lt),this.setAnimationLoop=function(J){qe=J},this.dispose=function(){}}}const J_=new ut,Xu=new Ue;Xu.set(-1,0,0,0,1,0,0,0,1);function Q_(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Uu(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,E,A,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),v(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),y(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,E,A):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===qt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===qt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=e.get(p),A=E.envMap,x=E.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(J_.makeRotationFromEuler(x)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Xu),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=A*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){const E=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function j_(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,T){const b=T.program;i.uniformBlockBinding(x,b)}function c(x,T){let b=r[x.id];b===void 0&&(m(x),b=u(x),r[x.id]=b,x.addEventListener("dispose",E));const R=T.program;i.updateUBOMapping(x,R);const g=e.render.frame;s[x.id]!==g&&(h(x),s[x.id]=g)}function u(x){const T=d();x.__bindingPointIndex=T;const b=n.createBuffer(),R=x.__size,g=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,R,g),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,b),b}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return We("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const T=r[x.id],b=x.uniforms,R=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let g=0,S=b.length;g<S;g++){const P=b[g];if(Array.isArray(P))for(let L=0,U=P.length;L<U;L++)f(P[L],g,L,R);else f(P,g,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(x,T,b,R){if(y(x,T,b,R)===!0){const g=x.__offset,S=x.value;if(Array.isArray(S)){let P=0;for(let L=0;L<S.length;L++){const U=S[L],V=p(U);v(U,x.__data,P),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(P+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(S,x.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,g,x.__data)}}function v(x,T,b){typeof x=="number"||typeof x=="boolean"?T[0]=x:x.isMatrix3?(T[0]=x.elements[0],T[1]=x.elements[1],T[2]=x.elements[2],T[3]=0,T[4]=x.elements[3],T[5]=x.elements[4],T[6]=x.elements[5],T[7]=0,T[8]=x.elements[6],T[9]=x.elements[7],T[10]=x.elements[8],T[11]=0):ArrayBuffer.isView(x)?T.set(new x.constructor(x.buffer,x.byteOffset,T.length)):x.toArray(T,b)}function y(x,T,b,R){const g=x.value,S=T+"_"+b;if(R[S]===void 0)return typeof g=="number"||typeof g=="boolean"?R[S]=g:ArrayBuffer.isView(g)?R[S]=g.slice():R[S]=g.clone(),!0;{const P=R[S];if(typeof g=="number"||typeof g=="boolean"){if(P!==g)return R[S]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(P.equals(g)===!1)return P.copy(g),!0}}return!1}function m(x){const T=x.uniforms;let b=0;const R=16;for(let S=0,P=T.length;S<P;S++){const L=Array.isArray(T[S])?T[S]:[T[S]];for(let U=0,V=L.length;U<V;U++){const Y=L[U],O=Array.isArray(Y.value)?Y.value:[Y.value];for(let X=0,B=O.length;X<B;X++){const $=O[X],j=p($),ne=b%R,re=ne%j.boundary,_e=ne+re;b+=re,_e!==0&&R-_e<j.storage&&(b+=R-_e),Y.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=b,b+=j.storage}}}const g=b%R;return g>0&&(b+=R-g),x.__size=b,x.__cache={},this}function p(x){const T={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(T.boundary=4,T.storage=4):x.isVector2?(T.boundary=8,T.storage=8):x.isVector3||x.isColor?(T.boundary=16,T.storage=12):x.isVector4?(T.boundary=16,T.storage=16):x.isMatrix3?(T.boundary=48,T.storage=48):x.isMatrix4?(T.boundary=64,T.storage=64):x.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(T.boundary=16,T.storage=x.byteLength):De("WebGLRenderer: Unsupported uniform value type.",x),T}function E(x){const T=x.target;T.removeEventListener("dispose",E);const b=a.indexOf(T.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function A(){for(const x in r)n.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:l,update:c,dispose:A}}const ev=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let bn=null;function tv(){return bn===null&&(bn=new Af(ev,16,16,Ei,Yn),bn.name="DFG_LUT",bn.minFilter=Ht,bn.magFilter=Ht,bn.wrapS=kn,bn.wrapT=kn,bn.generateMipmaps=!1,bn.needsUpdate=!0),bn}class nv{constructor(e={}){const{canvas:t=kd(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=nn}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const y=f,m=new Set([Zo,Ko,$o]),p=new Set([nn,Ln,Or,Br,qo,Yo]),E=new Uint32Array(4),A=new Int32Array(4),x=new C;let T=null,b=null;const R=[],g=[];let S=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Cn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let L=!1,U=null,V=null,Y=null,O=null;this._outputColorSpace=Zt;let X=0,B=0,$=null,j=-1,ne=null;const re=new ft,_e=new ft;let qe=null;const lt=new Ve(0);let Ke=0,J=t.width,se=t.height,ee=1,Ie=null,Ne=null;const Pe=new ft(0,0,J,se),vt=new ft(0,0,J,se);let He=!1;const it=new il;let Ze=!1,Ye=!1;const St=new ut,At=new C,Lt=new ft,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let mt=!1;function bt(){return $===null?ee:1}let I=i;function Yt(M,N){return t.getContext(M,N)}try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vo}`),t.addEventListener("webglcontextlost",gt,!1),t.addEventListener("webglcontextrestored",at,!1),t.addEventListener("webglcontextcreationerror",xn,!1),I===null){const N="webgl2";if(I=Yt(N,M),I===null)throw Yt(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(M){throw We("WebGLRenderer: "+M.message),M}let Qe,w,_,F,G,W,te,ae,q,Z,oe,Te,he,le,Ce,Le,Fe,D,ie,K,ce,me,Q;function Ee(){Qe=new tg(I),Qe.init(),ce=new q_(I,Qe),w=new Y0(I,Qe,e,ce),_=new W_(I,Qe),w.reversedDepthBuffer&&h&&_.buffers.depth.setReversed(!0),V=I.createFramebuffer(),Y=I.createFramebuffer(),O=I.createFramebuffer(),F=new rg(I),G=new P_,W=new X_(I,Qe,_,G,w,ce,F),te=new eg(P),ae=new lp(I),me=new X0(I,ae),q=new ng(I,ae,F,me),Z=new ag(I,q,ae,me,F),D=new sg(I,w,W),Ce=new $0(G),oe=new C_(P,te,Qe,w,me,Ce),Te=new Q_(P,G),he=new D_,le=new B_(Qe),Fe=new W0(P,te,_,Z,v,l),Le=new V_(P,Z,w),Q=new j_(I,F,w,_),ie=new q0(I,Qe,F),K=new ig(I,Qe,F),F.programs=oe.programs,P.capabilities=w,P.extensions=Qe,P.properties=G,P.renderLists=he,P.shadowMap=Le,P.state=_,P.info=F}Ee(),y!==nn&&(S=new lg(y,t.width,t.height,o,r,s));const Se=new Z_(P,I);this.xr=Se,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const M=Qe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Qe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(M){M!==void 0&&(ee=M,this.setSize(J,se,!1))},this.getSize=function(M){return M.set(J,se)},this.setSize=function(M,N,H=!0){if(Se.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}J=M,se=N,t.width=Math.floor(M*ee),t.height=Math.floor(N*ee),H===!0&&(t.style.width=M+"px",t.style.height=N+"px"),S!==null&&S.setSize(t.width,t.height),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(J*ee,se*ee).floor()},this.setDrawingBufferSize=function(M,N,H){J=M,se=N,ee=H,t.width=Math.floor(M*H),t.height=Math.floor(N*H),this.setViewport(0,0,M,N)},this.setEffects=function(M){if(y===nn){We("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let N=0;N<M.length;N++)if(M[N].isOutputPass===!0){De("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(re)},this.getViewport=function(M){return M.copy(Pe)},this.setViewport=function(M,N,H,z){M.isVector4?Pe.set(M.x,M.y,M.z,M.w):Pe.set(M,N,H,z),_.viewport(re.copy(Pe).multiplyScalar(ee).round())},this.getScissor=function(M){return M.copy(vt)},this.setScissor=function(M,N,H,z){M.isVector4?vt.set(M.x,M.y,M.z,M.w):vt.set(M,N,H,z),_.scissor(_e.copy(vt).multiplyScalar(ee).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(M){_.setScissorTest(He=M)},this.setOpaqueSort=function(M){Ie=M},this.setTransparentSort=function(M){Ne=M},this.getClearColor=function(M){return M.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(M=!0,N=!0,H=!0){let z=0;if(M){let k=!1;if($!==null){const pe=$.texture.format;k=m.has(pe)}if(k){const pe=$.texture.type,ve=p.has(pe),fe=Fe.getClearColor(),be=Fe.getClearAlpha(),we=fe.r,Oe=fe.g,ke=fe.b;ve?(E[0]=we,E[1]=Oe,E[2]=ke,E[3]=be,I.clearBufferuiv(I.COLOR,0,E)):(A[0]=we,A[1]=Oe,A[2]=ke,A[3]=be,I.clearBufferiv(I.COLOR,0,A))}else z|=I.COLOR_BUFFER_BIT}N&&(z|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(z|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&I.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),U=M},this.dispose=function(){t.removeEventListener("webglcontextlost",gt,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",xn,!1),Fe.dispose(),he.dispose(),le.dispose(),G.dispose(),te.dispose(),Z.dispose(),me.dispose(),Q.dispose(),oe.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",xl),Se.removeEventListener("sessionend",Ml),ci.stop()};function gt(M){M.preventDefault(),Fs("WebGLRenderer: Context Lost."),L=!0}function at(){Fs("WebGLRenderer: Context Restored."),L=!1;const M=F.autoReset,N=Le.enabled,H=Le.autoUpdate,z=Le.needsUpdate,k=Le.type;Ee(),F.autoReset=M,Le.enabled=N,Le.autoUpdate=H,Le.needsUpdate=z,Le.type=k}function xn(M){We("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Mn(M){const N=M.target;N.removeEventListener("dispose",Mn),ju(N)}function ju(M){eh(M),G.remove(M)}function eh(M){const N=G.get(M).programs;N!==void 0&&(N.forEach(function(H){oe.releaseProgram(H)}),M.isShaderMaterial&&oe.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,H,z,k,pe){N===null&&(N=Ft);const ve=k.isMesh&&k.matrixWorld.determinantAffine()<0,fe=ih(M,N,H,z,k);_.setMaterial(z,ve);let be=H.index,we=1;if(z.wireframe===!0){if(be=q.getWireframeAttribute(H),be===void 0)return;we=2}const Oe=H.drawRange,ke=H.attributes.position;let Ae=Oe.start*we,tt=(Oe.start+Oe.count)*we;pe!==null&&(Ae=Math.max(Ae,pe.start*we),tt=Math.min(tt,(pe.start+pe.count)*we)),be!==null?(Ae=Math.max(Ae,0),tt=Math.min(tt,be.count)):ke!=null&&(Ae=Math.max(Ae,0),tt=Math.min(tt,ke.count));const xt=tt-Ae;if(xt<0||xt===1/0)return;me.setup(k,z,fe,H,be);let _t,rt=ie;if(be!==null&&(_t=ae.get(be),rt=K,rt.setIndex(_t)),k.isMesh)z.wireframe===!0?(_.setLineWidth(z.wireframeLinewidth*bt()),rt.setMode(I.LINES)):rt.setMode(I.TRIANGLES);else if(k.isLine){let Bt=z.linewidth;Bt===void 0&&(Bt=1),_.setLineWidth(Bt*bt()),k.isLineSegments?rt.setMode(I.LINES):k.isLineLoop?rt.setMode(I.LINE_LOOP):rt.setMode(I.LINE_STRIP)}else k.isPoints?rt.setMode(I.POINTS):k.isSprite&&rt.setMode(I.TRIANGLES);if(k.isBatchedMesh)if(Qe.get("WEBGL_multi_draw"))rt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Bt=k._multiDrawStarts,ge=k._multiDrawCounts,Jt=k._multiDrawCount,$e=be?ae.get(be).bytesPerElement:1,sn=G.get(z).currentProgram.getUniforms();for(let yn=0;yn<Jt;yn++)sn.setValue(I,"_gl_DrawID",yn),rt.render(Bt[yn]/$e,ge[yn])}else if(k.isInstancedMesh)rt.renderInstances(Ae,xt,k.count);else if(H.isInstancedBufferGeometry){const Bt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,ge=Math.min(H.instanceCount,Bt);rt.renderInstances(Ae,xt,ge)}else rt.render(Ae,xt)};function vl(M,N,H){M.transparent===!0&&M.side===ln&&M.forceSinglePass===!1?(M.side=qt,M.needsUpdate=!0,qr(M,N,H),M.side=li,M.needsUpdate=!0,qr(M,N,H),M.side=ln):qr(M,N,H)}this.compile=function(M,N,H=null){H===null&&(H=M),b=le.get(H),b.init(N),g.push(b),H.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(b.pushLight(k),k.castShadow&&b.pushShadow(k))}),M!==H&&M.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(b.pushLight(k),k.castShadow&&b.pushShadow(k))}),b.setupLights();const z=new Set;return M.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const pe=k.material;if(pe)if(Array.isArray(pe))for(let ve=0;ve<pe.length;ve++){const fe=pe[ve];vl(fe,H,k),z.add(fe)}else vl(pe,H,k),z.add(pe)}),b=g.pop(),z},this.compileAsync=function(M,N,H=null){const z=this.compile(M,N,H);return new Promise(k=>{function pe(){if(z.forEach(function(ve){G.get(ve).currentProgram.isReady()&&z.delete(ve)}),z.size===0){k(M);return}setTimeout(pe,10)}Qe.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let Ks=null;function th(M){Ks&&Ks(M)}function xl(){ci.stop()}function Ml(){ci.start()}const ci=new Bu;ci.setAnimationLoop(th),typeof self<"u"&&ci.setContext(self),this.setAnimationLoop=function(M){Ks=M,Se.setAnimationLoop(M),M===null?ci.stop():ci.start()},Se.addEventListener("sessionstart",xl),Se.addEventListener("sessionend",Ml),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){We("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;U!==null&&U.renderStart(M,N);const H=Se.enabled===!0&&Se.isPresenting===!0,z=S!==null&&($===null||H)&&S.begin(P,$);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(N),N=Se.getCamera()),M.isScene===!0&&M.onBeforeRender(P,M,N,$),b=le.get(M,g.length),b.init(N),b.state.textureUnits=W.getTextureUnits(),g.push(b),St.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),it.setFromProjectionMatrix(St,Rn,N.reversedDepth),Ye=this.localClippingEnabled,Ze=Ce.init(this.clippingPlanes,Ye),T=he.get(M,R.length),T.init(),R.push(T),Se.enabled===!0&&Se.isPresenting===!0){const ve=P.xr.getDepthSensingMesh();ve!==null&&Zs(ve,N,-1/0,P.sortObjects)}Zs(M,N,0,P.sortObjects),T.finish(),P.sortObjects===!0&&T.sort(Ie,Ne,N.reversedDepth),mt=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,mt&&Fe.addToRenderList(T,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ze===!0&&Ce.beginShadows();const k=b.state.shadowsArray;if(Le.render(k,M,N),Ze===!0&&Ce.endShadows(),(z&&S.hasRenderPass())===!1){const ve=T.opaque,fe=T.transmissive;if(b.setupLights(),N.isArrayCamera){const be=N.cameras;if(fe.length>0)for(let we=0,Oe=be.length;we<Oe;we++){const ke=be[we];Sl(ve,fe,M,ke)}mt&&Fe.render(M);for(let we=0,Oe=be.length;we<Oe;we++){const ke=be[we];yl(T,M,ke,ke.viewport)}}else fe.length>0&&Sl(ve,fe,M,N),mt&&Fe.render(M),yl(T,M,N)}$!==null&&B===0&&(W.updateMultisampleRenderTarget($),W.updateRenderTargetMipmap($)),z&&S.end(P),M.isScene===!0&&M.onAfterRender(P,M,N),me.resetDefaultState(),j=-1,ne=null,g.pop(),g.length>0?(b=g[g.length-1],W.setTextureUnits(b.state.textureUnits),Ze===!0&&Ce.setGlobalState(P.clippingPlanes,b.state.camera)):b=null,R.pop(),R.length>0?T=R[R.length-1]:T=null,U!==null&&U.renderEnd()};function Zs(M,N,H,z){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)H=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLightProbeGrid)b.pushLightProbeGrid(M);else if(M.isLight)b.pushLight(M),M.castShadow&&b.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||it.intersectsSprite(M)){z&&Lt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(St);const ve=Z.update(M),fe=M.material;fe.visible&&T.push(M,ve,fe,H,Lt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||it.intersectsObject(M))){const ve=Z.update(M),fe=M.material;if(z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Lt.copy(M.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Lt.copy(ve.boundingSphere.center)),Lt.applyMatrix4(M.matrixWorld).applyMatrix4(St)),Array.isArray(fe)){const be=ve.groups;for(let we=0,Oe=be.length;we<Oe;we++){const ke=be[we],Ae=fe[ke.materialIndex];Ae&&Ae.visible&&T.push(M,ve,Ae,H,Lt.z,ke)}}else fe.visible&&T.push(M,ve,fe,H,Lt.z,null)}}const pe=M.children;for(let ve=0,fe=pe.length;ve<fe;ve++)Zs(pe[ve],N,H,z)}function yl(M,N,H,z){const{opaque:k,transmissive:pe,transparent:ve}=M;b.setupLightsView(H),Ze===!0&&Ce.setGlobalState(P.clippingPlanes,H),z&&_.viewport(re.copy(z)),k.length>0&&Xr(k,N,H),pe.length>0&&Xr(pe,N,H),ve.length>0&&Xr(ve,N,H),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Sl(M,N,H,z){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[z.id]===void 0){const Ae=Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[z.id]=new Pn(1,1,{generateMipmaps:!0,type:Ae?Yn:nn,minFilter:xi,samples:Math.max(4,w.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace})}const pe=b.state.transmissionRenderTarget[z.id],ve=z.viewport||re;pe.setSize(ve.z*P.transmissionResolutionScale,ve.w*P.transmissionResolutionScale);const fe=P.getRenderTarget(),be=P.getActiveCubeFace(),we=P.getActiveMipmapLevel();P.setRenderTarget(pe),P.getClearColor(lt),Ke=P.getClearAlpha(),Ke<1&&P.setClearColor(16777215,.5),P.clear(),mt&&Fe.render(H);const Oe=P.toneMapping;P.toneMapping=Cn;const ke=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),b.setupLightsView(z),Ze===!0&&Ce.setGlobalState(P.clippingPlanes,z),Xr(M,H,z),W.updateMultisampleRenderTarget(pe),W.updateRenderTargetMipmap(pe),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let tt=0,xt=N.length;tt<xt;tt++){const _t=N[tt],{object:rt,geometry:Bt,material:ge,group:Jt}=_t;if(ge.side===ln&&rt.layers.test(z.layers)){const $e=ge.side;ge.side=qt,ge.needsUpdate=!0,bl(rt,H,z,Bt,ge,Jt),ge.side=$e,ge.needsUpdate=!0,Ae=!0}}Ae===!0&&(W.updateMultisampleRenderTarget(pe),W.updateRenderTargetMipmap(pe))}P.setRenderTarget(fe,be,we),P.setClearColor(lt,Ke),ke!==void 0&&(z.viewport=ke),P.toneMapping=Oe}function Xr(M,N,H){const z=N.isScene===!0?N.overrideMaterial:null;for(let k=0,pe=M.length;k<pe;k++){const ve=M[k],{object:fe,geometry:be,group:we}=ve;let Oe=ve.material;Oe.allowOverride===!0&&z!==null&&(Oe=z),fe.layers.test(H.layers)&&bl(fe,N,H,be,Oe,we)}}function bl(M,N,H,z,k,pe){M.onBeforeRender(P,N,H,z,k,pe),M.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),k.onBeforeRender(P,N,H,z,M,pe),k.transparent===!0&&k.side===ln&&k.forceSinglePass===!1?(k.side=qt,k.needsUpdate=!0,P.renderBufferDirect(H,N,z,k,M,pe),k.side=li,k.needsUpdate=!0,P.renderBufferDirect(H,N,z,k,M,pe),k.side=ln):P.renderBufferDirect(H,N,z,k,M,pe),M.onAfterRender(P,N,H,z,k,pe)}function qr(M,N,H){N.isScene!==!0&&(N=Ft);const z=G.get(M),k=b.state.lights,pe=b.state.shadowsArray,ve=k.state.version,fe=oe.getParameters(M,k.state,pe,N,H,b.state.lightProbeGridArray),be=oe.getProgramCacheKey(fe);let we=z.programs;z.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?N.environment:null,z.fog=N.fog;const Oe=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;z.envMap=te.get(M.envMap||z.environment,Oe),z.envMapRotation=z.environment!==null&&M.envMap===null?N.environmentRotation:M.envMapRotation,we===void 0&&(M.addEventListener("dispose",Mn),we=new Map,z.programs=we);let ke=we.get(be);if(ke!==void 0){if(z.currentProgram===ke&&z.lightsStateVersion===ve)return Tl(M,fe),ke}else fe.uniforms=oe.getUniforms(M),U!==null&&M.isNodeMaterial&&U.build(M,H,fe),M.onBeforeCompile(fe,P),ke=oe.acquireProgram(fe,be),we.set(be,ke),z.uniforms=fe.uniforms;const Ae=z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ae.clippingPlanes=Ce.uniform),Tl(M,fe),z.needsLights=sh(M),z.lightsStateVersion=ve,z.needsLights&&(Ae.ambientLightColor.value=k.state.ambient,Ae.lightProbe.value=k.state.probe,Ae.directionalLights.value=k.state.directional,Ae.directionalLightShadows.value=k.state.directionalShadow,Ae.spotLights.value=k.state.spot,Ae.spotLightShadows.value=k.state.spotShadow,Ae.rectAreaLights.value=k.state.rectArea,Ae.ltc_1.value=k.state.rectAreaLTC1,Ae.ltc_2.value=k.state.rectAreaLTC2,Ae.pointLights.value=k.state.point,Ae.pointLightShadows.value=k.state.pointShadow,Ae.hemisphereLights.value=k.state.hemi,Ae.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ae.spotLightMatrix.value=k.state.spotLightMatrix,Ae.spotLightMap.value=k.state.spotLightMap,Ae.pointShadowMatrix.value=k.state.pointShadowMatrix),z.lightProbeGrid=b.state.lightProbeGridArray.length>0,z.currentProgram=ke,z.uniformsList=null,ke}function El(M){if(M.uniformsList===null){const N=M.currentProgram.getUniforms();M.uniformsList=As.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function Tl(M,N){const H=G.get(M);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function nh(M,N){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;x.setFromMatrixPosition(N.matrixWorld);for(let H=0,z=M.length;H<z;H++){const k=M[H];if(k.texture!==null&&k.boundingBox.containsPoint(x))return k}return null}function ih(M,N,H,z,k){N.isScene!==!0&&(N=Ft),W.resetTextureUnits();const pe=N.fog,ve=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?N.environment:null,fe=$===null?P.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Xe.workingColorSpace,be=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,we=te.get(z.envMap||ve,be),Oe=z.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,ke=!!H.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ae=!!H.morphAttributes.position,tt=!!H.morphAttributes.normal,xt=!!H.morphAttributes.color;let _t=Cn;z.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(_t=P.toneMapping);const rt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Bt=rt!==void 0?rt.length:0,ge=G.get(z),Jt=b.state.lights;if(Ze===!0&&(Ye===!0||M!==ne)){const ot=M===ne&&z.id===j;Ce.setState(z,M,ot)}let $e=!1;z.version===ge.__version?(ge.needsLights&&ge.lightsStateVersion!==Jt.state.version||ge.outputColorSpace!==fe||k.isBatchedMesh&&ge.batching===!1||!k.isBatchedMesh&&ge.batching===!0||k.isBatchedMesh&&ge.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&ge.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&ge.instancing===!1||!k.isInstancedMesh&&ge.instancing===!0||k.isSkinnedMesh&&ge.skinning===!1||!k.isSkinnedMesh&&ge.skinning===!0||k.isInstancedMesh&&ge.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&ge.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&ge.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&ge.instancingMorph===!1&&k.morphTexture!==null||ge.envMap!==we||z.fog===!0&&ge.fog!==pe||ge.numClippingPlanes!==void 0&&(ge.numClippingPlanes!==Ce.numPlanes||ge.numIntersection!==Ce.numIntersection)||ge.vertexAlphas!==Oe||ge.vertexTangents!==ke||ge.morphTargets!==Ae||ge.morphNormals!==tt||ge.morphColors!==xt||ge.toneMapping!==_t||ge.morphTargetsCount!==Bt||!!ge.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&($e=!0):($e=!0,ge.__version=z.version);let sn=ge.currentProgram;$e===!0&&(sn=qr(z,N,k),U&&z.isNodeMaterial&&U.onUpdateProgram(z,sn,ge));let yn=!1,Zn=!1,Ai=!1;const st=sn.getUniforms(),Mt=ge.uniforms;if(_.useProgram(sn.program)&&(yn=!0,Zn=!0,Ai=!0),z.id!==j&&(j=z.id,Zn=!0),ge.needsLights){const ot=nh(b.state.lightProbeGridArray,k);ge.lightProbeGrid!==ot&&(ge.lightProbeGrid=ot,Zn=!0)}if(yn||ne!==M){_.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),st.setValue(I,"projectionMatrix",M.projectionMatrix),st.setValue(I,"viewMatrix",M.matrixWorldInverse);const Qn=st.map.cameraPosition;Qn!==void 0&&Qn.setValue(I,At.setFromMatrixPosition(M.matrixWorld)),w.logarithmicDepthBuffer&&st.setValue(I,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&st.setValue(I,"isOrthographic",M.isOrthographicCamera===!0),ne!==M&&(ne=M,Zn=!0,Ai=!0)}if(ge.needsLights&&(Jt.state.directionalShadowMap.length>0&&st.setValue(I,"directionalShadowMap",Jt.state.directionalShadowMap,W),Jt.state.spotShadowMap.length>0&&st.setValue(I,"spotShadowMap",Jt.state.spotShadowMap,W),Jt.state.pointShadowMap.length>0&&st.setValue(I,"pointShadowMap",Jt.state.pointShadowMap,W)),k.isSkinnedMesh){st.setOptional(I,k,"bindMatrix"),st.setOptional(I,k,"bindMatrixInverse");const ot=k.skeleton;ot&&(ot.boneTexture===null&&ot.computeBoneTexture(),st.setValue(I,"boneTexture",ot.boneTexture,W))}k.isBatchedMesh&&(st.setOptional(I,k,"batchingTexture"),st.setValue(I,"batchingTexture",k._matricesTexture,W),st.setOptional(I,k,"batchingIdTexture"),st.setValue(I,"batchingIdTexture",k._indirectTexture,W),st.setOptional(I,k,"batchingColorTexture"),k._colorsTexture!==null&&st.setValue(I,"batchingColorTexture",k._colorsTexture,W));const Jn=H.morphAttributes;if((Jn.position!==void 0||Jn.normal!==void 0||Jn.color!==void 0)&&D.update(k,H,sn),(Zn||ge.receiveShadow!==k.receiveShadow)&&(ge.receiveShadow=k.receiveShadow,st.setValue(I,"receiveShadow",k.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&N.environment!==null&&(Mt.envMapIntensity.value=N.environmentIntensity),Mt.dfgLUT!==void 0&&(Mt.dfgLUT.value=tv()),Zn){if(st.setValue(I,"toneMappingExposure",P.toneMappingExposure),ge.needsLights&&rh(Mt,Ai),pe&&z.fog===!0&&Te.refreshFogUniforms(Mt,pe),Te.refreshMaterialUniforms(Mt,z,ee,se,b.state.transmissionRenderTarget[M.id]),ge.needsLights&&ge.lightProbeGrid){const ot=ge.lightProbeGrid;Mt.probesSH.value=ot.texture,Mt.probesMin.value.copy(ot.boundingBox.min),Mt.probesMax.value.copy(ot.boundingBox.max),Mt.probesResolution.value.copy(ot.resolution)}As.upload(I,El(ge),Mt,W)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(As.upload(I,El(ge),Mt,W),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&st.setValue(I,"center",k.center),st.setValue(I,"modelViewMatrix",k.modelViewMatrix),st.setValue(I,"normalMatrix",k.normalMatrix),st.setValue(I,"modelMatrix",k.matrixWorld),z.uniformsGroups!==void 0){const ot=z.uniformsGroups;for(let Qn=0,Ri=ot.length;Qn<Ri;Qn++){const wl=ot[Qn];Q.update(wl,sn),Q.bind(wl,sn)}}return sn}function rh(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function sh(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(M,N,H){const z=G.get(M);z.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),G.get(M.texture).__webglTexture=N,G.get(M.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:H,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,N){const H=G.get(M);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(M,N=0,H=0){$=M,X=N,B=H;let z=null,k=!1,pe=!1;if(M){const fe=G.get(M);if(fe.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(I.FRAMEBUFFER,fe.__webglFramebuffer),re.copy(M.viewport),_e.copy(M.scissor),qe=M.scissorTest,_.viewport(re),_.scissor(_e),_.setScissorTest(qe),j=-1;return}else if(fe.__webglFramebuffer===void 0)W.setupRenderTarget(M);else if(fe.__hasExternalTextures)W.rebindTextures(M,G.get(M.texture).__webglTexture,G.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Oe=M.depthTexture;if(fe.__boundDepthTexture!==Oe){if(Oe!==null&&G.has(Oe)&&(M.width!==Oe.image.width||M.height!==Oe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(M)}}const be=M.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(pe=!0);const we=G.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(we[N])?z=we[N][H]:z=we[N],k=!0):M.samples>0&&W.useMultisampledRTT(M)===!1?z=G.get(M).__webglMultisampledFramebuffer:Array.isArray(we)?z=we[H]:z=we,re.copy(M.viewport),_e.copy(M.scissor),qe=M.scissorTest}else re.copy(Pe).multiplyScalar(ee).floor(),_e.copy(vt).multiplyScalar(ee).floor(),qe=He;if(H!==0&&(z=V),_.bindFramebuffer(I.FRAMEBUFFER,z)&&_.drawBuffers(M,z),_.viewport(re),_.scissor(_e),_.setScissorTest(qe),k){const fe=G.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+N,fe.__webglTexture,H)}else if(pe){const fe=N;for(let be=0;be<M.textures.length;be++){const we=G.get(M.textures[be]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+be,we.__webglTexture,H,fe)}}else if(M!==null&&H!==0){const fe=G.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,fe.__webglTexture,H)}j=-1},this.readRenderTargetPixels=function(M,N,H,z,k,pe,ve,fe=0){if(!(M&&M.isWebGLRenderTarget)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=G.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ve!==void 0&&(be=be[ve]),be){_.bindFramebuffer(I.FRAMEBUFFER,be);try{const we=M.textures[fe],Oe=we.format,ke=we.type;if(M.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+fe),!w.textureFormatReadable(Oe)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!w.textureTypeReadable(ke)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-z&&H>=0&&H<=M.height-k&&I.readPixels(N,H,z,k,ce.convert(Oe),ce.convert(ke),pe)}finally{const we=$!==null?G.get($).__webglFramebuffer:null;_.bindFramebuffer(I.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(M,N,H,z,k,pe,ve,fe=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=G.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ve!==void 0&&(be=be[ve]),be)if(N>=0&&N<=M.width-z&&H>=0&&H<=M.height-k){_.bindFramebuffer(I.FRAMEBUFFER,be);const we=M.textures[fe],Oe=we.format,ke=we.type;if(M.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+fe),!w.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!w.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ae=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ae),I.bufferData(I.PIXEL_PACK_BUFFER,pe.byteLength,I.STREAM_READ),I.readPixels(N,H,z,k,ce.convert(Oe),ce.convert(ke),0);const tt=$!==null?G.get($).__webglFramebuffer:null;_.bindFramebuffer(I.FRAMEBUFFER,tt);const xt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Gd(I,xt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ae),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,pe),I.deleteBuffer(Ae),I.deleteSync(xt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,N=null,H=0){const z=Math.pow(2,-H),k=Math.floor(M.image.width*z),pe=Math.floor(M.image.height*z),ve=N!==null?N.x:0,fe=N!==null?N.y:0;W.setTexture2D(M,0),I.copyTexSubImage2D(I.TEXTURE_2D,H,0,0,ve,fe,k,pe),_.unbindTexture()},this.copyTextureToTexture=function(M,N,H=null,z=null,k=0,pe=0){let ve,fe,be,we,Oe,ke,Ae,tt,xt;const _t=M.isCompressedTexture?M.mipmaps[pe]:M.image;if(H!==null)ve=H.max.x-H.min.x,fe=H.max.y-H.min.y,be=H.isBox3?H.max.z-H.min.z:1,we=H.min.x,Oe=H.min.y,ke=H.isBox3?H.min.z:0;else{const Mt=Math.pow(2,-k);ve=Math.floor(_t.width*Mt),fe=Math.floor(_t.height*Mt),M.isDataArrayTexture?be=_t.depth:M.isData3DTexture?be=Math.floor(_t.depth*Mt):be=1,we=0,Oe=0,ke=0}z!==null?(Ae=z.x,tt=z.y,xt=z.z):(Ae=0,tt=0,xt=0);const rt=ce.convert(N.format),Bt=ce.convert(N.type);let ge;N.isData3DTexture?(W.setTexture3D(N,0),ge=I.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(W.setTexture2DArray(N,0),ge=I.TEXTURE_2D_ARRAY):(W.setTexture2D(N,0),ge=I.TEXTURE_2D),_.activeTexture(I.TEXTURE0),_.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),_.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),_.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);const Jt=_.getParameter(I.UNPACK_ROW_LENGTH),$e=_.getParameter(I.UNPACK_IMAGE_HEIGHT),sn=_.getParameter(I.UNPACK_SKIP_PIXELS),yn=_.getParameter(I.UNPACK_SKIP_ROWS),Zn=_.getParameter(I.UNPACK_SKIP_IMAGES);_.pixelStorei(I.UNPACK_ROW_LENGTH,_t.width),_.pixelStorei(I.UNPACK_IMAGE_HEIGHT,_t.height),_.pixelStorei(I.UNPACK_SKIP_PIXELS,we),_.pixelStorei(I.UNPACK_SKIP_ROWS,Oe),_.pixelStorei(I.UNPACK_SKIP_IMAGES,ke);const Ai=M.isDataArrayTexture||M.isData3DTexture,st=N.isDataArrayTexture||N.isData3DTexture;if(M.isDepthTexture){const Mt=G.get(M),Jn=G.get(N),ot=G.get(Mt.__renderTarget),Qn=G.get(Jn.__renderTarget);_.bindFramebuffer(I.READ_FRAMEBUFFER,ot.__webglFramebuffer),_.bindFramebuffer(I.DRAW_FRAMEBUFFER,Qn.__webglFramebuffer);for(let Ri=0;Ri<be;Ri++)Ai&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,G.get(M).__webglTexture,k,ke+Ri),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,G.get(N).__webglTexture,pe,xt+Ri)),I.blitFramebuffer(we,Oe,ve,fe,Ae,tt,ve,fe,I.DEPTH_BUFFER_BIT,I.NEAREST);_.bindFramebuffer(I.READ_FRAMEBUFFER,null),_.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(k!==0||M.isRenderTargetTexture||G.has(M)){const Mt=G.get(M),Jn=G.get(N);_.bindFramebuffer(I.READ_FRAMEBUFFER,Y),_.bindFramebuffer(I.DRAW_FRAMEBUFFER,O);for(let ot=0;ot<be;ot++)Ai?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Mt.__webglTexture,k,ke+ot):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Mt.__webglTexture,k),st?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Jn.__webglTexture,pe,xt+ot):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Jn.__webglTexture,pe),k!==0?I.blitFramebuffer(we,Oe,ve,fe,Ae,tt,ve,fe,I.COLOR_BUFFER_BIT,I.NEAREST):st?I.copyTexSubImage3D(ge,pe,Ae,tt,xt+ot,we,Oe,ve,fe):I.copyTexSubImage2D(ge,pe,Ae,tt,we,Oe,ve,fe);_.bindFramebuffer(I.READ_FRAMEBUFFER,null),_.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else st?M.isDataTexture||M.isData3DTexture?I.texSubImage3D(ge,pe,Ae,tt,xt,ve,fe,be,rt,Bt,_t.data):N.isCompressedArrayTexture?I.compressedTexSubImage3D(ge,pe,Ae,tt,xt,ve,fe,be,rt,_t.data):I.texSubImage3D(ge,pe,Ae,tt,xt,ve,fe,be,rt,Bt,_t):M.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,pe,Ae,tt,ve,fe,rt,Bt,_t.data):M.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,pe,Ae,tt,_t.width,_t.height,rt,_t.data):I.texSubImage2D(I.TEXTURE_2D,pe,Ae,tt,ve,fe,rt,Bt,_t);_.pixelStorei(I.UNPACK_ROW_LENGTH,Jt),_.pixelStorei(I.UNPACK_IMAGE_HEIGHT,$e),_.pixelStorei(I.UNPACK_SKIP_PIXELS,sn),_.pixelStorei(I.UNPACK_SKIP_ROWS,yn),_.pixelStorei(I.UNPACK_SKIP_IMAGES,Zn),pe===0&&N.generateMipmaps&&I.generateMipmap(ge),_.unbindTexture()},this.initRenderTarget=function(M){G.get(M).__webglFramebuffer===void 0&&W.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?W.setTextureCube(M,0):M.isData3DTexture?W.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?W.setTexture2DArray(M,0):W.setTexture2D(M,0),_.unbindTexture()},this.resetState=function(){X=0,B=0,$=null,_.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}}const Nc=200,Fc=440,iv=`
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
`,rv=`
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
`;function sv(){const n=new qn(Fc,Fc,Nc,Nc);n.rotateX(-Math.PI/2);const e=n.attributes.position,t=new Float32Array(e.count);for(let s=0;s<e.count;s++)t[s]=-Zi(e.getX(s),e.getZ(s));n.setAttribute("aDepth",new rn(t,1));const i=new un({uniforms:{uTime:{value:0}},vertexShader:iv,fragmentShader:rv}),r=new Me(n,i);return r.position.y=0,r.frustumCulled=!1,{mesh:r,update(s){i.uniforms.uTime.value=s}}}const av=1836670420,ov=110,Dr=32,lv=.07;function qu(n){let e=n>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function cv(n){const e=qu(n),t=[];for(let i=0;i<ov;i++){const r=e()*lv,s=e()*Dr,a=e()*Dr;t.push({x:s,y:a,alpha:r})}return t}const uv=n=>-n,er={x:13,y:12,z:18},ks=2,Oc=(n,e)=>Math.max(-e,Math.min(e,n));function hv(n,e){const t=Oc(n,Oa),i=Oc(e,Ba);return{look:[t,ks,i],cam:[t+er.x,ks+er.y,i+er.z]}}function dv(n,e,t,i,r){if(t||r)return e;if(i<=0)return n;const s=1-Math.exp(-i*5);return[n[0]+(e[0]-n[0])*s,n[1]+(e[1]-n[1])*s]}function fv(n,e,t){if(t<=0)return n;const i=Math.atan2(Math.sin(e-n),Math.cos(e-n)),r=i*(1-Math.exp(-t*1.25)),s=i-r;return n+r+Math.sign(s)*Math.max(0,Math.abs(s)-1.35)}const ct=n=>new Nu({color:n}),vi=ct(9262134),$t=ct(5189671),Ms=ct(16773071),Bc=ct(16112046),pv=ct(1670008),ys=ct(13200951),mv=ct(14657867),gv=ct(4948573);function Tt(n,e,t,i=vi){const r=new Me(new Gt(n,e,t),i);return r.castShadow=r.receiveShadow=!0,r}function on(n,e,t=vi,i=10){const r=new Me(new Rt(n,n,e,i),t);return r.castShadow=r.receiveShadow=!0,r}function Re(n,e,t,i,r){return e.position.set(t,i,r),n.add(e),e}class _v{constructor(){ue(this,"group",new Je);ue(this,"meg",new Je);ue(this,"pip",new Je);ue(this,"tail",new Je);ue(this,"clock",0);ue(this,"disposed",!1);ue(this,"furniture",new Map);ue(this,"facing",0);ue(this,"lastHome",!1);this.group.name="Meg attic room",this.makeRoom(),this.makeBasics(),this.makeStations(),this.makeMeg(),this.makePumpkin(),this.makeFurniture(),this.group.visible=!1}update(e,t,i){if(this.disposed)return;const r=e,s=r.mode==="home";if(this.group.visible=s,!s){this.lastHome=!1;return}const a=Math.min(.05,Math.max(0,t||.016));this.clock+=a;const o=r.homePosition||{x:0,z:0},l=new C(Kr.clamp(o.x,-7.5,7.5),0,Kr.clamp(o.z,-5.5,5.5));this.lastHome?this.meg.position.lerp(l,1-Math.exp(-a*14)):this.meg.position.copy(l),this.lastHome=!0;const c=r.homeFacing;typeof c=="number"?this.facing=c:l.distanceToSquared(this.meg.position)>.001&&(this.facing=Math.atan2(l.x-this.meg.position.x,l.z-this.meg.position.z)),this.meg.rotation.y=this.facing;const u=l.distanceTo(this.meg.position)>.035;this.meg.children.filter(f=>f.name==="limb").forEach((f,v)=>f.rotation.x=i?0:Math.sin(this.clock*11+v*Math.PI)*(u?.55:.08)),this.meg.position.y=i?0:u?Math.abs(Math.sin(this.clock*11))*.045:Math.sin(this.clock*2)*.018;const d=this.meg.position.clone().add(new C(-Math.sin(this.facing)*1.25,0,-Math.cos(this.facing)*1.25));d.x=Kr.clamp(d.x,-7.3,7.3),d.z=Kr.clamp(d.z,-5.3,5.3),this.pip.position.lerp(d,1-Math.exp(-a*4)),this.pip.lookAt(this.meg.position.x,0,this.meg.position.z);const h=this.meg.position.distanceToSquared(new C(4,0,3))<2.7;this.pip.position.y=!i&&h?Math.sin(this.clock*6)*.075:0,this.tail.rotation.z=i?.12:Math.sin(this.clock*(h?5:2))*.34,this.furniture.forEach((f,v)=>f.visible=r.profile.furniture.includes(v))}dispose(){if(this.disposed)return;this.disposed=!0;const e=new Set,t=new Set,i=new Set;this.group.traverse(r=>{const s=r;s.geometry&&e.add(s.geometry),(s.material?Array.isArray(s.material)?s.material:[s.material]:[]).forEach(o=>{t.add(o),Object.values(o).forEach(l=>{l instanceof Ot&&i.add(l)})})}),e.forEach(r=>r.dispose()),t.forEach(r=>r.dispose()),i.forEach(r=>r.dispose()),this.group.clear()}makeRoom(){const e=Tt(18,.25,14,vi);Re(this.group,e,0,-.13,0);for(let r=-6;r<=6;r+=1){const s=Tt(17.8,.012,.035,$t);Re(this.group,s,0,.01,r+.5)}const t=Tt(18,8,.22,Bc);Re(this.group,t,0,4,-7);const i=Tt(.22,8,14,Bc);Re(this.group,i,4,4,0),i.position.x=-9;for(const[r,s,a,o]of[[-8.65,0,.34,14],[0,-6.65,18,.34],[0,-3.9,18,.25]])Re(this.group,Tt(a,.28,o,$t),r,7.55,s);for(const r of[-8.4,-4.4,0,4.4,8.4]){const s=Tt(.32,7.6,.35,$t);s.rotation.z=r/34,Re(this.group,s,r,3.8,-6.75)}this.makeWindow()}makeWindow(){const e=new Je;Re(this.group,e,2.3,4.7,-6.78);const t=new Me(new qn(3.2,2.45),new yi({color:16764813}));t.position.z=.02,e.add(t);for(const[r,s,a,o]of[[0,0,3.45,.17],[0,0,.16,2.6],[-1.65,0,.16,2.6],[1.65,0,.16,2.6],[0,1.22,3.45,.16]])Re(e,Tt(a,o,.12,$t),r,s,.08);for(const r of[-2,2]){const s=new Me(new Rt(.45,.56,2.65,8),ct(8559016));s.scale.z=.28,Re(e,s,r,0,.22)}const i=Tt(4.5,.18,.55,vi);Re(e,i,0,-1.38,.32)}makeBasics(){const e=new Je;Re(this.group,e,5.8,0,4.65),Re(e,Tt(4.2,.35,2.6,$t),0,.55,0),Re(e,Tt(4,.32,2.35,ct(10249076)),0,.9,0),Re(e,Tt(4.25,2.25,.22,$t),0,1.5,1.16),Re(e,Tt(1.55,.26,.8,Ms),-.9,1.2,-.55),[[-1.8,-1],[1.8,-1],[-1.8,1],[1.8,1]].forEach(([r,s])=>Re(e,on(.12,.65,$t),r,.25,s));const t=new Je;Re(this.group,t,-5,0,-3),Re(t,Tt(3.3,.22,1.55,vi),0,1.75,0),[-1.35,1.35].forEach(r=>[-.58,.58].forEach(s=>Re(t,on(.11,1.7,$t),r,.85,s))),Re(t,Tt(.9,.72,1.15,$t),-1.05,1.25,0),Re(t,Tt(.62,.12,.88,ct(15982509)),.55,1.93,.03);const i=new Je;Re(this.group,i,-4.2,0,-1.45),Re(i,on(.48,.16,ct(7314849)),0,1,0),Re(i,on(.13,1,$t),0,.5,0)}makeStations(){const e=new Je;Re(this.group,e,5,0,-3),Re(e,Tt(2.2,.16,.46,$t),0,2.55,0),[-.75,0,.75].forEach(r=>{const s=on(.06,2.35,vi);s.rotation.z=-.16+r*.1,Re(e,s,r,1.25,0),Re(e,new Me(new en(.29,.52,7),ys),r-.14,.28,0)});const t=new Je;Re(this.group,t,-5,0,3),Re(t,on(.48,1.15,$t),0,.58,0),Re(t,Tt(1.25,.14,.9,ct(6065798)),0,1.2,0),t.rotation.y=-.25;const i=new Me(new Rt(1.15,1.3,.16,16),ct(14262655));Re(this.group,i,4,.08,3),Vc.forEach(r=>this.group.add(this.label(r.id==="jobs"?"POST":r.id==="decor"?"HOME":r.id.toUpperCase(),r.x,3.3,r.z)))}makeMeg(){const e=this.meg;e.name="Meg",this.group.add(e),Re(e,new Me(new wt(.34,12,10),ct(16761758)),0,1.52,0);const t=new Me(new wt(.38,12,10,0,Math.PI*2,0,Math.PI*.55),ct(9323307));Re(e,t,0,1.7,.01);const i=new Je;Re(e,i,0,1.94,0),Re(i,new Me(new Rt(.48,.48,.12,12),ct(4534349)),0,0,0);const r=new Me(new en(.3,.82,12),ct(4534349));r.rotation.z=-.18,Re(i,r,.06,.39,0),Re(e,new Me(new en(.48,1.05,12),pv),0,.84,0);for(const[s,a]of[[-.22,.08],[.22,.08]]){const o=on(.09,.55,$t);o.name="limb",Re(e,o,s,.3,a);const l=on(.075,.58,ct(16761758));l.name="limb",l.rotation.z=s*1.8,Re(e,l,s*1.5,1.06,0)}}makePumpkin(){const e=this.pip;e.name="Pumpkin",this.group.add(e),Re(e,new Me(new wt(.43,12,9),Ms),0,.48,0),Re(e,new Me(new wt(.34,12,9),Ms),0,.76,.28);for(const s of[-.2,.2]){const a=new Me(new en(.16,.36,4),ys);Re(e,a,s,1.12,.26);const o=new Me(new wt(.045,8,6),ct(2893616));Re(e,o,s*.72,.8,.59)}const t=Tt(.18,.42,.08,ys);t.rotation.z=Math.PI/2,Re(e,t,0,.86,.58);const i=new Je;this.tail=i,Re(e,i,0,.51,-.38);const r=new Me(new On(.34,.07,6,12,Math.PI*1.4),ys);r.rotation.x=Math.PI/2,Re(i,r,0,.36,-.22)}makeFurniture(){const e=(t,i,r,s)=>{const a=s();a.position.set(i,0,r),a.visible=!1,this.group.add(a),this.furniture.set(t,a)};e("rug",0,-.2,()=>{const t=new Me(new Rt(2.1,2.1,.05,20),ct(7508365));return t.position.y=.035,t}),e("plant",-7,4.6,()=>{const t=new Je;Re(t,on(.38,.7,ct(13273941)),0,.35,0);for(let i=0;i<6;i++){const r=new Me(new wt(.35,8,6),gv);Re(t,r,Math.sin(i)*.28,1+Math.abs(Math.cos(i))*.25,Math.cos(i)*.28)}return t}),e("shelf",-7.7,-2.2,()=>{const t=new Je;Re(t,Tt(.55,3.1,2.2,$t),0,1.55,0);for(let i=.6;i<3;i+=.75)Re(t,Tt(.7,.1,2.1,vi),0,i,0);return t}),e("lamp",1.8,-4.8,()=>{const t=new Je;Re(t,on(.1,2.2,mv),0,1.1,0);const i=new Me(new en(.52,.48,12,1,!0),Ms);return Re(t,i,0,2.1,0),t}),e("cushion",1.4,3.5,()=>{const t=new Me(new wt(.6,12,7),ct(13858182));return t.scale.y=.32,t.position.y=.18,t}),e("cat-tree",7,2.5,()=>{const t=new Je;return Re(t,on(.17,2.5,ct(13610617)),0,1.25,0),Re(t,on(.72,.16,ct(13605991)),0,2.45,0),t})}label(e,t,i,r){const s=document.createElement("canvas");s.width=256,s.height=92;const a=s.getContext("2d");a.fillStyle="#3f2b35",a.roundRect(4,4,248,84,18),a.fill(),a.strokeStyle="#f7d688",a.lineWidth=5,a.roundRect(4,4,248,84,18),a.stroke(),a.fillStyle="#fff3cf",a.font="bold 36px sans-serif",a.textAlign="center",a.textBaseline="middle",a.fillText(e,128,48);const o=new Tf(new Tu({map:new rl(s),transparent:!0}));return o.position.set(t,i,r),o.scale.set(1.7,.62,1),o}}function vv(n,e,t){const i=n.mode==="flight"||n.mode==="tutorial",r=Math.hypot(n.player.velocity.x,n.player.velocity.y,n.player.velocity.z),s=i&&!n.paused&&!t;return{bob:s&&n.player.hover&&r<.3?Math.sin(e*1.5)*.035:0,speed:s?Math.min(1,Math.max(0,(r-5)/16.6)):0}}class xv{constructor(e){ue(this,"element",document.createElement("div"));this.element.className="flight-effects",this.element.setAttribute("aria-hidden","true");for(let t=0;t<14;t++){const i=document.createElement("i"),r=t*Math.PI*2/14;i.style.left=`${50+Math.cos(r)*43}%`,i.style.top=`${50+Math.sin(r)*43}%`,i.style.setProperty("--angle",`${r}rad`),i.style.animationDelay=`${-t*.17}s`,this.element.append(i)}e.insertAdjacentElement("afterend",this.element)}update(e,t){this.element.hidden=e<=0,this.element.style.setProperty("--speed",e.toFixed(3)),this.element.classList.toggle("low-quality",t)}dispose(){this.element.remove()}}class Mv{constructor(e){ue(this,"scene",new xf);ue(this,"camera",new tn(62,1,.1,900));ue(this,"renderer");ue(this,"effects");ue(this,"hero",new Je);ue(this,"dropParcel",new Je);ue(this,"glowColumn",new Je);ue(this,"glowMats",[]);ue(this,"lastGlowStopId");ue(this,"targetRing",new Je);ue(this,"clouds",new Je);ue(this,"birds",new Je);ue(this,"clock",0);ue(this,"camPos",new C(0,27,145));ue(this,"camLook",new C(0,18,90));ue(this,"homeLook",new C(0,ks,0));ue(this,"ray",new ap);ue(this,"blockers",[]);ue(this,"outlines",[]);ue(this,"beamGroup",null);ue(this,"beamLight",null);ue(this,"lighthouseLit",!0);ue(this,"sun");ue(this,"disposed",!1);ue(this,"lastMode");ue(this,"lastWidth",-1);ue(this,"lastHeight",-1);ue(this,"lastPixelRatio",-1);ue(this,"followYaw",0);ue(this,"world");ue(this,"water",null);ue(this,"room",new _v);ue(this,"outdoorFog",new Os(12180704,.0035));this.renderer=new nv({canvas:e,antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.effects=new xv(e),this.renderer.outputColorSpace=Zt,this.renderer.toneMapping=Wo,this.renderer.toneMappingExposure=1.12,this.renderer.setClearColor(11459048),this.scene.fog=new Os(12180704,.0035),this.camera.position.copy(this.camPos);const t=new jf(14283263,13074296,2.35);this.scene.add(t),this.sun=new ip(16765344,2.5),this.sun.position.set(-80,115,48),this.scene.add(this.sun),this.world=this.makeWorld(),this.scene.add(this.world,this.hero,this.dropParcel,this.glowColumn,this.targetRing,this.clouds,this.birds,this.room.group),this.makeHero(),this.makeDropParcel(),this.makeGlowColumn(),this.makeSkyLife(),this.resize()}resize(){this.lastWidth=-1}render(e,t,i){if(this.disposed)return;const r=e.paused?0:Math.min(.05,Math.max(0,t));this.clock+=r,this.water&&!i.reducedMotion&&this.water.update(this.clock);const s=vv(e,this.clock,i.reducedMotion);this.effects.update(s.speed,i.lowQuality);const a=this.renderer.domElement,o=Math.max(1,a.clientWidth||a.width),l=Math.max(1,a.clientHeight||a.height),c=i.lowQuality?1e6:2e6,u=Math.min(devicePixelRatio||1,Math.sqrt(c/(o*l)));(o!==this.lastWidth||l!==this.lastHeight||u!==this.lastPixelRatio)&&(this.renderer.setPixelRatio(u),this.renderer.setSize(o,l,!1),this.camera.aspect=o/l,this.camera.updateProjectionMatrix(),this.lastWidth=o,this.lastHeight=l,this.lastPixelRatio=u),this.renderer.shadowMap.enabled=!i.lowQuality,this.outlines.forEach(m=>{m.visible=!i.lowQuality});const d=e.mode==="home";if([this.world,this.hero,this.dropParcel,this.glowColumn,this.targetRing,this.clouds,this.birds].forEach(m=>m.visible=!d),this.room.update(e,r,i.reducedMotion),d){this.scene.fog=null,this.renderer.setClearColor(14010030),this.camera.fov=48,this.camera.updateProjectionMatrix();const m=e.homePosition||{x:0,z:0},p=hv(m.x,m.z),E=dv([this.homeLook.x,this.homeLook.z],[p.look[0],p.look[2]],this.lastMode!=="home",r,i.reducedMotion);this.homeLook.set(E[0],ks,E[1]),this.camera.position.set(this.homeLook.x+er.x,this.homeLook.y+er.y,this.homeLook.z+er.z),this.camera.up.set(0,1,0),this.camera.lookAt(this.homeLook),this.lastMode=e.mode,this.renderer.render(this.scene,this.camera);return}this.camera.fov!==62&&(this.camera.fov=62,this.camera.updateProjectionMatrix()),this.scene.fog=this.outdoorFog,this.renderer.setClearColor(11459048);const h=e.player.position,f=new C(h.x,h.y,h.z),v=this.lastMode===void 0||this.lastMode!==e.mode;this.hero.position.copy(f),this.hero.rotation.order="YXZ",this.hero.rotation.y=uv(e.player.yaw),this.hero.rotation.x=e.player.pitch*.4,this.hero.rotation.z=0,this.hero.scale.setScalar(e.mode==="title"||e.mode==="summary"?.86:.62),this.hero.position.y+=s.bob,this.animateSky(i.reducedMotion),this.updateBeacon(this.destination(e),i.reducedMotion||e.paused?0:r),this.updateGlowColumn(e,i.reducedMotion),this.updateDropParcel(e,i.reducedMotion?0:r,i.reducedMotion),this.updateCamera(e,f,r,i.reducedMotion,v),this.lastMode=e.mode;const y=e.run?Math.min(1,e.run.elapsed/480):.1;this.sun.color.setHSL(.095-y*.08,.9,.78),this.sun.intensity=2.5-y*.45,this.scene.fog.color.setHSL(.55-y*.48,.42,.82-y*.12),this.renderer.render(this.scene,this.camera)}dispose(){this.effects.dispose(),this.disposed=!0,this.scene.traverse(e=>{const t=e;t.geometry&&t.geometry.dispose();const i=t.material;(Array.isArray(i)?i:[i]).forEach(r=>r==null?void 0:r.dispose())}),this.renderer.dispose()}makeWorld(){const e=new Je,t=Be(16772548),i=sv();this.water=i,e.add(i.mesh);const r=new qn(440,440,200,200);r.rotateX(-Math.PI/2);const s=r.attributes.position,a=new Float32Array(s.count*3);for(let u=0;u<s.count;u++){const d=s.getX(u),h=s.getZ(u);s.setY(u,Zi(d,h));const[f,v,y]=Th(d,h);a[u*3]=f,a[u*3+1]=v,a[u*3+2]=y}r.setAttribute("color",new rn(a,3)),r.computeVertexNormals();const o=Be(16777215);o.vertexColors=!0;const l=new Me(r,o);e.add(l),[[[-150,0,90],[-116,0,40],[-80,0,-10],[-70,0,-70],[-40,0,-110],[0,0,-120]],[[150,0,90],[110,0,50],[90,0,0],[106,0,-60],[60,0,-110],[0,0,-120]]].forEach(u=>{const d=new Lu(u.map(([h,,f])=>new C(h,Zi(h,f)+.18,f)));e.add(new Me(new zs(d,64,2.8,8,!1),t))});const c=Be(10117447);return[[-15,50],[-15,70],[-15,90]].forEach(([u,d])=>{const h=new Me(new Gt(24,.7,8),c);h.position.set(u,.8,d),e.add(h)}),[[50,60],[50,80],[50,100]].forEach(([u,d])=>{const h=new Me(new Gt(24,.7,8),c);h.position.set(u,.8,d),e.add(h)}),this.makeBuildings(e),this.makeGreenery(e),this.makeLighthouse(e),e}makeBuildings(e){const t=[16308397,7911854,8409452,15970667,14475973],i=[11947333,4089472,12806723,7032955];ko.forEach((r,s)=>{const a=r.max.x-r.min.x,o=r.max.y-r.min.y,l=r.max.z-r.min.z,c=new C((r.min.x+r.max.x)/2,(r.min.y+r.max.y)/2,(r.min.z+r.max.z)/2),u=new Me(new Gt(a,o,l));if(u.position.copy(c),this.blockers.push(u),s===gh)return;const d=Math.min(4.2,o*.28),h=new Me(new Gt(a,o-d,l),Be(t[s%t.length]));h.position.set(c.x,r.min.y+(o-d)*.5,c.z),h.castShadow=!0,h.receiveShadow=!0,e.add(h);const f=a*.5,v=l*.5,y=o*.5-d,m=new Vt;m.setAttribute("position",new ht([-f,y,-v,f,y,-v,0,o*.5,0,f,y,-v,f,y,v,0,o*.5,0,f,y,v,-f,y,v,0,o*.5,0,-f,y,v,-f,y,-v,0,o*.5,0],3)),m.setIndex([0,2,1,3,5,4,6,8,7,9,11,10]),m.computeVertexNormals();const p=new Me(m,Be(i[s%i.length]));p.position.copy(c),p.castShadow=!0,e.add(p);const E=Be(16768938),A=Be(3501961),x=Be(7358008),T=Math.min(2.6,a*.18),b=Math.min(2.7,o*.2),R=S=>{const P=S==="north"||S==="south"?a:l,L=P>29?[-.27,.27]:[-.2,.2],U=S==="north"?Math.PI:S==="south"?0:S==="west"?-Math.PI/2:Math.PI/2,V=S==="north"||S==="south",Y=S==="north"?-1:S==="south"?1:S==="west"?-1:1,O=(B,$,j)=>V?new C(h.position.x+B,$,h.position.z+Y*(l*.5+j)):new C(h.position.x+Y*(a*.5+j),$,h.position.z+B);L.forEach(B=>{const $=O(P*B,c.y+o*.03,.055),j=new Me(new qn(T,b),A);j.position.copy($),j.rotation.y=U,e.add(j);const ne=new Me(new Gt(T+.38,.18,.16),E);ne.position.copy(O(P*B,$.y-b*.5-.08,.1)),V||(ne.rotation.y=Math.PI/2),e.add(ne);const re=new Me(new Gt(T+.42,.22,.5),E);re.position.copy(O(P*B,$.y+b*.5+.18,.18)),V||(re.rotation.y=Math.PI/2),e.add(re)});const X=new Me(new qn(Math.min(2.5,P*.13),Math.min(3.7,o*.3)),x);X.position.copy(O(0,r.min.y+Math.min(3.7,o*.3)*.5,.06)),X.rotation.y=U,e.add(X)};R("north"),R("south"),R("east"),R("west");const g=new Me(new Gt(1.35,Math.min(2.7,d*.7),1.35),Be(15189664));g.position.set(c.x-a*.18,r.max.y-Math.min(2.7,d*.7)*.5,c.z+l*.12),e.add(g)})}makeGreenery(e){const t=Be(7621174),i=Be(5085035),r=Be(16747434),s=qu(1337);let a=0,o=0;for(;a<140&&o<3e3;){o++;const l=(s()-.5)*400,c=(s()-.5)*400;if(!Eh(l,c)||yt.some(v=>Math.hypot(l-v.position.x,c-v.position.z)<24)||Math.hypot(l,c)<100&&s()<.7)continue;const u=new Je,d=3+s()*2.5,h=new Me(new Rt(.35,.55,d,7),t);h.position.y=d/2,u.add(h);const f=new Me(new ol(2.2+s()*1.2,1),i);if(f.position.y=d+1.5,u.add(f),u.position.set(l,Zi(l,c),c),u.rotation.y=s()*Math.PI*2,e.add(u),s()<.3){const v=new Me(new wt(.28,7,6),r);v.position.set(l+.8,Zi(l,c)+.5,c+.6),e.add(v)}a++}}makeLighthouse(e){const r=new Me(new Rt(20,24,9,18),Be(9076594));r.position.set(74,2.5,110),r.castShadow=!0,e.add(r);const s=88,a=118,o=new Me(new Rt(3.6,5.2,26,16),Be(16773332));o.position.set(s,16,a),o.castShadow=!0,e.add(o);const l=v=>5.2-(v-3)*(1.6/26);for(const v of[8,14,20,26]){const y=new Me(new Rt(l(v+1.1)+.15,l(v-1.1)+.15,2.2,16),Be(13786193));y.position.set(s,v,a),e.add(y)}const c=new Me(new Rt(4.6,4.6,1.2,16),Be(4089472));c.position.set(s,29.6,a),e.add(c);const u=new Me(new Rt(2.6,2.6,3.4,12),new yi({color:16771501}));u.position.set(s,31.8,a),e.add(u);const d=new Me(new en(3.4,2.6,12),Be(13194062));d.position.set(s,34.8,a),e.add(d);const h=new Je;h.position.set(s,31.8,a);const f=new yi({color:16768910,transparent:!0,opacity:.28,depthWrite:!1,side:ln});[0,Math.PI].forEach(v=>{const y=new Me(new en(3.2,26,12,1,!0),f);y.rotation.z=Math.PI/2,y.rotation.y=v,y.position.set(Math.cos(v)*13,0,-Math.sin(v)*13),h.add(y)}),e.add(h),this.beamGroup=h,this.beamLight=new tp(16768146,60,90),this.beamLight.position.set(s,32,a),e.add(this.beamLight),this.setLighthouseLit(!0)}setLighthouseLit(e){this.lighthouseLit=e,this.beamGroup&&(this.beamGroup.visible=e),this.beamLight&&(this.beamLight.intensity=e?60:0)}makeHero(){const e=new yi({color:3746621,side:qt}),t=(l,c,u,d)=>{const h=new Me(l,c);h.position.set(u.x,u.y,u.z),d&&h.scale.set(d.x,d.y,d.z),this.hero.add(h);const f=new Me(l,e);return f.scale.setScalar(1.045),h.add(f),this.outlines.push(f),h},i=t(new Rt(.16,.21,8.6,10),Be(8736825),{x:0,y:.15,z:.35});i.rotation.x=Math.PI/2;const r=t(new On(.62,.105,7,14,Math.PI*1.25),Be(7946799),{x:0,y:.58,z:-4.05});r.rotation.z=Math.PI*.18,[3,3.3].forEach(l=>t(new On(.34,.1,6,12),Be(5583662),{x:0,y:.15,z:l}));for(let l=0;l<21;l++){const c=(l-10)/10,u=new Du(new C(c*.25,.15,3),new C(c*1.5,-.05+Math.cos(l)*.16,5.8-Math.abs(c)*.35));t(new zs(u,1,.11,5,!1),Be(l%2?13869914:15780216),{x:0,y:0,z:0})}t(new en(1.75,4.3,9),Be(1535606),{x:0,y:4,z:-.25}),t(new wt(1.15,14,10),Be(16762531),{x:0,y:6.5,z:-.35}),t(new en(2.05,4.6,11),Be(2443608),{x:0,y:9,z:-.35}),t(new On(1.55,.28,7,16),Be(2443608),{x:0,y:7.25,z:-.35},{x:1,y:1,z:1}).rotation.x=Math.PI/2,[-1,1].forEach(l=>{const c=t(new Rt(.34,.48,2.2,7),Be(2443608),{x:l*.72,y:2.35,z:.05});c.rotation.z=l*.36;const u=t(new Rt(.28,.35,1.75,7),Be(2443608),{x:l*1.12,y:1.15,z:-.08});u.rotation.z=-l*.62,t(new wt(.46,8,7),Be(5716276),{x:l*1.48,y:.52,z:-.47},{x:1,y:.65,z:1.45})}),[-.75,-.38,.38,.75].forEach((l,c)=>t(new wt(.45,8,7),Be(10308914),{x:l,y:6.75-c%2*.42,z:-1.15})),[-.4,.4].forEach(l=>t(new wt(.14,8,7),Be(2504770),{x:l,y:6.65,z:-1.43}));const s=Be(15914671);t(new wt(1.02,12,9),s,{x:0,y:2,z:1.48}),t(new wt(.78,12,9),s,{x:0,y:2.78,z:2.08}),[-.48,.48].forEach(l=>t(new en(.38,.78,3),Be(14721900),{x:l,y:3.55,z:2.2})),[-.26,.26].forEach(l=>t(new wt(.12,7,6),Be(2572625),{x:l,y:2.88,z:2.88})),[-.42,.42].forEach(l=>t(new wt(.19,7,6),s,{x:l,y:1.27,z:2.12},{x:1,y:.7,z:1.15}));const a=t(new On(.79,.075,6,12),Be(12929874),{x:0,y:2.45,z:2.06});a.rotation.x=Math.PI/2;const o=t(new On(1,.17,7,12,Math.PI*.8),Be(15914671),{x:0,y:2,z:.95});o.rotation.x=Math.PI/2}makeSkyLife(){const e=Be(16776171);for(let i=0;i<12;i++){const r=new Je;for(let s=0;s<4;s++){const a=new Me(new wt(3+s%2*1.5,10,7),e);a.position.set(s*3,Math.sin(s)*.8,0),r.add(a)}r.position.set(-190+i*47%380,38+i%4*16,-155+i*71%320),this.clouds.add(r)}const t=Be(5782864);for(let i=0;i<9;i++){const r=new Je;[-1,1].forEach(s=>{const a=new Me(new en(.65,2,3),t);a.rotation.z=s*.9,a.position.x=s*.55,r.add(a)}),r.position.set(-80+i*16,34+i%3*4,-45-i*11),this.birds.add(r)}}animateSky(e){e||(this.clouds.children.forEach((t,i)=>{t.position.x+=.012*(1+i%3),t.position.x>205&&(t.position.x=-205)}),this.birds.children.forEach((t,i)=>{t.position.x+=.035,t.rotation.z=Math.sin(this.clock*5+i)*.18}),this.beamGroup&&this.lighthouseLit&&(this.beamGroup.rotation.y+=.015))}destination(e){var i,r,s;if(e.mode==="tutorial")return yt.find(a=>a.id==="harbor-cafe")||yt[1];const t=(i=e.run)!=null&&i.returning?"home":(s=(r=e.run)==null?void 0:r.job)==null?void 0:s.to;return yt.find(a=>a.id===t)||yt.find(a=>a.id==="home")||yt[0]}updateBeacon(e,t){if(e&&(this.targetRing.position.set(e.position.x,Math.max(3,e.position.y+.6),e.position.z),this.targetRing.rotation.y+=t*.8,!this.targetRing.children.length)){const i=new Me(new On(4.5,.25,8,28),Be(16770203));i.rotation.x=Math.PI/2,this.targetRing.add(i);const r=new Me(new Rt(.08,.26,8,8,1,!0),new yi({color:16771234,transparent:!0,opacity:.16,depthWrite:!1,side:ln}));r.position.y=4,this.targetRing.add(r)}}makeGlowColumn(){const t=[{rTop:Qc,rBottom:2.4,opacity:.2},{rTop:1.7,rBottom:1.1,opacity:.32}];for(const i of t){const r=new Rt(i.rTop,i.rBottom,90,24,1,!0),s=new un({transparent:!0,depthWrite:!1,blending:Va,side:ln,uniforms:{uHeight:{value:90},uOpacity:{value:i.opacity},uPulse:{value:1}},vertexShader:`varying float vH; uniform float uHeight;
void main(){ vH = position.y / uHeight + .5; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }`,fragmentShader:`varying float vH; uniform float uOpacity; uniform float uPulse;
void main(){ float a = pow(clamp(1. - vH, 0., 1.), 1.7) * uOpacity * uPulse;
  gl_FragColor = vec4(1., .62, .22, a); }`}),a=new Me(r,s);a.position.y=90/2,this.glowColumn.add(a),this.glowMats.push(s)}this.glowColumn.visible=!1}updateGlowColumn(e,t){const i=Vs(e),r=!!i;if(this.glowColumn.visible=r,!r||!i){this.lastGlowStopId=void 0;return}this.lastGlowStopId!==i.id&&(this.lastGlowStopId=i.id,this.glowColumn.position.set(i.position.x,i.position.y,i.position.z));const s=e.haloFade>0?Math.max(0,Math.min(1,e.haloFade/Kc)):1,a=(t?1:.86+.14*Math.sin(this.clock*2.4))*s;for(const o of this.glowMats)o.uniforms.uPulse.value=a}makeDropParcel(){const e=new Me(new Gt(1.5,1.1,1.5),Be(13208927)),t=Be(12929874),i=new Me(new Gt(1.56,1.16,.34),t),r=new Me(new Gt(.34,1.16,1.56),t),s=new Me(new wt(.3,8,6),t);s.position.y=.68,s.scale.set(1.4,.7,1.4),this.dropParcel.add(e,i,r,s),this.dropParcel.visible=!1}updateDropParcel(e,t,i){const r=e.drop,s=r?yt.find(h=>h.id===r.stopId):void 0,a=!!r&&!!s&&r.parcel;if(this.dropParcel.visible=a,!a||!r||!s)return;const o=i?1:Math.min(1,r.t/$c),l=o*o,c=e.player.position,u=s.position.y+.7,d=Math.max(c.y-1.4,u);this.dropParcel.position.set(c.x+(s.position.x-c.x)*l,d+(u-d)*l,c.z+(s.position.z-c.z)*l),i||(this.dropParcel.rotation.y+=t*4)}updateCamera(e,t,i,r,s){let a,o;if(e.mode==="title"||e.mode==="summary"){const l=r?0:this.clock*.035;a=new C(-92+Math.sin(l)*8,48,146+Math.cos(l)*7),o=new C(18,13,65)}else{this.followYaw=s?e.player.yaw:fv(this.followYaw,e.player.yaw,i);const l=this.followYaw,c=new C(-Math.sin(l)*26,12,Math.cos(l)*26);a=t.clone().add(c),o=t.clone().add(new C(Math.sin(l)*5,2,-Math.cos(l)*5));const u=t.clone().add(new C(0,2,0)),d=a.clone().sub(u),h=d.length();this.blockers.forEach(v=>v.updateWorldMatrix(!0,!1)),this.ray.set(u,d.normalize());const f=this.ray.intersectObjects(this.blockers,!1)[0];f&&f.distance<h&&a.copy(u).add(d.setLength(Math.max(7,f.distance-1)))}this.camPos.copy(a),this.camLook.copy(o),this.camera.position.copy(this.camPos),this.camera.up.set(0,1,0),this.camera.lookAt(this.camLook)}}function Be(n){return new Nu({color:n,map:yv(),gradientMap:Sv()})}let pi,$i;function yv(){if(pi)return pi;const n=document.createElement("canvas");n.width=n.height=Dr;const e=n.getContext("2d");e.fillStyle="rgba(255,255,255,.9)",e.fillRect(0,0,Dr,Dr);for(const t of cv(av))e.fillStyle=`rgba(85,55,45,${t.alpha})`,e.fillRect(t.x,t.y,1,1);return pi=new rl(n),pi.colorSpace=Zt,pi.wrapS=pi.wrapT=Ps,pi}function Sv(){if($i)return $i;const n=document.createElement("canvas");n.width=1,n.height=3;const e=n.getContext("2d");return e.fillStyle="#202020",e.fillRect(0,0,1,1),e.fillStyle="#9a9a9a",e.fillRect(0,1,1,1),e.fillStyle="#fff",e.fillRect(0,2,1,1),$i=new rl(n),$i.minFilter=$i.magFilter=Ut,$i}const bv=()=>({lastKey:null,dismissedKey:null});function Ev(n,e,t){return`${n}|${e}|${t}`}function Tv(n,e,t,i,r,s){const a=Ev(e,t,r),o=a===n.lastKey?n:{lastKey:a,dismissedKey:null};return{hidden:!(e.includes("tutorial")||i!==""||e==="flight"&&(s??1/0)<=120)||o.dismissedKey===a,next:o}}function wv(n){return{...n,dismissedKey:n.lastKey}}const si=n=>`<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${{star:'<path d="m12 2 2.8 6.5L22 9l-5.4 4.7 1.6 7.1-6.2-3.7-6.2 3.7 1.6-7.1L2 9l7.2-.5Z"/>',envelope:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/>',pause:'<path d="M7 4h3v16H7zm7 0h3v16h-3z"/>',sound:'<path d="M4 10h4l5-4v12l-5-4H4zM16 9c1 .8 1 5.2 0 6m2-9c3 2.6 3 9.4 0 12"/>',fullscreen:'<path d="M4 9V5h4m8 0h4v4M20 15v4h-4M8 19H4v-4"/>',home:'<path d="m3 11 9-8 9 8v9h-6v-6H9v6H3z"/>'}[n]}</svg>`,Ki=n=>`${Math.max(0,Math.round(n))} coins`,Av=n=>n===void 0||!Number.isFinite(n)?"--:--":`${Math.floor(Math.max(0,Math.ceil(n))/60).toString().padStart(2,"0")}:${(Math.max(0,Math.ceil(n))%60).toString().padStart(2,"0")}`;class Rv{constructor(e,t){ue(this,"el",{});ue(this,"previousRevision",-1);ue(this,"offersKey","");ue(this,"tip",bv());e.classList.add("meg-ui"),e.innerHTML=`
<header class="gamebar"><div class="gamebar-brand">MEG’S <span>Delivery Service</span></div><div class="sun-pill"><i></i>Nightfall in <b id="countdown">--:--</b></div><div class="gamebar-actions"><button class="icon-button" id="audio-btn" aria-label="Mute audio">${si("sound")}</button><button class="icon-button" id="pause-btn" aria-label="Pause flight">${si("pause")}</button></div></header><main class="screen-layer">
<section class="title-card panel" id="title-card"><div class="eyebrow">${si("star")} A LITTLE WITCH. A BIG SKY.</div><h1>MEG’S<br><em>Delivery</em> Service</h1><p class="premise">Take on a parcel, then return home <b>before nightfall</b> to bank your earnings.</p><p class="key-hint desktop-hint">Steer with <kbd>WASD</kbd> / arrows · rise with <kbd>W</kbd> · hover with <kbd>Space</kbd></p><p class="key-hint touch-hint">Touch anywhere to fly · release the stick to slow down</p><button id="start-btn" class="primary-button">Learn to fly <span>→</span></button><div class="title-controls"><button id="quality-btn">Quality: <b>High</b></button><button id="motion-btn">Motion: <b>Full</b></button><button id="fullscreen-btn">${si("fullscreen")} Fullscreen</button></div><footer>MADE OF LITTLE ADVENTURES <span class="desktop-hint">⌨</span><span class="touch-hint">touch to fly</span> <span class="build-sha">build 35d45ca</span></footer></section>
<section class="offers-card panel menu-card" id="offers-card"><div class="eyebrow">${si("envelope")} TODAY’S POST</div><h2>Choose a delivery</h2><p>Nightfall is already on its way. Pick one parcel and make it home with your earnings.</p><div class="offer-balances"><span>Satchel <b id="offer-earnings">0 coins</b></span><span>Banked <b id="offer-banked">0 coins</b></span></div><div id="offer-list" class="offer-list"></div><button id="return-home-btn" class="secondary-button">Return home</button></section>
<section class="summary-card panel menu-card" id="summary-card"><div class="eyebrow">${si("star")} DAY’S END</div><h2 id="summary-heading">A lovely landing.</h2><p id="summary-copy"></p><div class="summary-stats"><div><span>Deliveries</span><b id="summary-deliveries">0</b></div><div><span>Earnings saved</span><b id="summary-earnings">0 coins</b></div></div><button id="next-day-btn" class="primary-button">Another day <span>→</span></button></section>
<section class="flight-hud" id="flight-hud"><div class="destination-card panel"><div class="eyebrow">${si("envelope")} <span id="target-label">Next delivery</span></div><strong id="target-name">The village</strong><div class="target-direction"><span class="compass-arrow" id="target-arrow"></span><span id="target-distance">— m away</span></div></div><div class="tutorial-bubble" id="tutorial-bubble"><button class="bubble-close" id="bubble-close" aria-label="Dismiss tip">×</button><b>Pumpkin says:</b> <span id="tutorial-text"></span></div><div class="flight-readout panel"><span><b id="speed-value">0</b> m/s</span><span class="satchel-readout">Satchel <b id="flight-earnings">0</b></span></div></section>
<section class="pause-card panel menu-card" id="pause-card"><div class="eyebrow">${si("star")} TAKING A BREATHER</div><h2>The sky will wait.</h2><p id="pause-reason"></p><p class="key-hint desktop-hint">When you return: <kbd>WASD</kbd> or arrows to steer · <kbd>Q</kbd>/<kbd>E</kbd> for speed</p><p class="key-hint touch-hint">When you return: touch anywhere to fly · release the stick to slow down</p><button id="resume-btn" class="primary-button">Continue flying <span>→</span></button><div class="title-controls"><button id="pause-quality-btn">Quality</button><button id="pause-motion-btn">Motion</button></div></section></main>`;const i=s=>e.querySelector(`#${s}`);["title-card","offers-card","summary-card","flight-hud","pause-card","countdown","pause-reason","target-name","target-distance","target-arrow","target-label","tutorial-bubble","tutorial-text","bubble-close","speed-value","flight-earnings","audio-btn","pause-btn","resume-btn","quality-btn","motion-btn","pause-quality-btn","pause-motion-btn","offer-list","return-home-btn","offer-earnings","offer-banked","summary-heading","summary-copy","summary-deliveries","summary-earnings","next-day-btn","start-btn"].forEach(s=>this.el[s]=i(s));const r=(s,a)=>i(s).onclick=o=>{a(),o.currentTarget.blur()};r("start-btn",t.start),r("pause-btn",t.pause),r("resume-btn",t.resume),r("audio-btn",t.mute),i("bubble-close").onclick=s=>{this.tip=wv(this.tip),this.el["tutorial-bubble"].hidden=!0,s.currentTarget.blur()},r("return-home-btn",()=>{var s;return(s=t.returnHome)==null?void 0:s.call(t)}),r("next-day-btn",()=>{var s;return(s=t.nextDay)==null?void 0:s.call(t)}),[i("quality-btn"),i("pause-quality-btn")].forEach(s=>s.onclick=t.quality),[i("motion-btn"),i("pause-motion-btn")].forEach(s=>s.onclick=t.motion),i("fullscreen-btn").onclick=t.fullscreen,i("offer-list").onclick=s=>{var o;const a=s.target.closest("[data-job]");a&&((o=t.chooseJob)==null||o.call(t,+a.dataset.job),a.blur())}}render(e,t){var u,d,h;const i=["offers","summary"].includes(e.mode),r=e.mode==="title",s=!r&&e.paused;this.el["title-card"].hidden=!r,this.el["offers-card"].hidden=e.mode!=="offers"||s,this.el["summary-card"].hidden=e.mode!=="summary"||s,this.el["flight-hud"].hidden=r||i||s,this.el["pause-card"].hidden=!s,this.el.countdown.textContent=Av(t.timeRemaining),this.el.countdown.className=t.timeRemaining!==void 0&&t.timeRemaining<=30?"urgent":t.timeRemaining!==void 0&&t.timeRemaining<=60?"warning":"",this.el["start-btn"].innerHTML=`${e.profile.tutorialDone?"Start a delivery day":"Learn to fly"} <span>→</span>`,this.el["target-name"].textContent=t.targetName,this.el["target-distance"].textContent=t.targetDistance>0?`${Math.round(t.targetDistance)} m away`:"Right here",this.el["target-label"].textContent=(u=e.run)!=null&&u.returning?"Return home":"Next delivery",this.el["target-arrow"].style.transform=`rotate(${t.targetBearing??0}deg)`,this.el["speed-value"].textContent=String(Math.round(t.speed)),this.el["audio-btn"].classList.toggle("is-muted",t.muted),this.el["audio-btn"].setAttribute("aria-label",t.muted?"Unmute audio":"Mute audio"),this.el["quality-btn"].innerHTML=`Quality: <b>${t.lowQuality?"Low":"High"}</b>`,this.el["motion-btn"].innerHTML=`Motion: <b>${t.reducedMotion?"Low":"Full"}</b>`,this.el["tutorial-text"].textContent=t.status||e.message||"Let’s take the scenic route!";const a=t.status||e.message||"",o=Tv(this.tip,e.mode,e.tutorialStage,t.status,a,t.timeRemaining);this.tip=o.next,this.el["tutorial-bubble"].hidden=o.hidden,this.el["flight-earnings"].textContent=Ki(((d=e.run)==null?void 0:d.earnings)??0),this.el["offer-earnings"].textContent=Ki(((h=e.run)==null?void 0:h.earnings)??0),this.el["offer-banked"].textContent=Ki(e.profile.coins),this.renderOffers(e);const l=e.summary,c=(l==null?void 0:l.success)??!1;this.el["summary-heading"].textContent=c?"A lovely landing.":"Rescued from nightfall.",this.el["summary-copy"].textContent=c?`You banked ${Ki((l==null?void 0:l.earnings)??0)} after ${(l==null?void 0:l.deliveries)??0} deliveries.`:"The unbanked satchel was lost, but tomorrow brings another chance.",this.el["summary-deliveries"].textContent=String((l==null?void 0:l.deliveries)??0),this.el["summary-earnings"].textContent=Ki((l==null?void 0:l.earnings)??0),this.el["next-day-btn"].innerHTML=`${c?"Another day":"Back home"} <span>→</span>`,this.previousRevision!==e.revision&&(this.el["pause-reason"].textContent=e.pauseReason||"Rest your wings whenever you need.",this.previousRevision=e.revision)}renderOffers(e){var r,s;if(e.mode!=="offers")return;this.el["return-home-btn"].hidden=(((r=e.run)==null?void 0:r.deliveries)??0)===0;const t=(((s=e.run)==null?void 0:s.offers)??[]).slice(0,2),i=t.map(a=>`${a.to}:${a.parcel}:${a.payout}`).join("|");i!==this.offersKey&&(this.offersKey=i,this.el["offer-list"].innerHTML=t.map((a,o)=>{const l=yt.find(u=>u.id===a.to),c=l?Math.hypot(l.position.x-e.player.position.x,l.position.z-e.player.position.z):0;return`<button class="offer-button" data-job="${o}"><span><b>${(l==null?void 0:l.name)??a.to}</b><small>${c<115?"Short":"Long"} route · ${a.parcel} · ${Math.round(c)} m</small></span><strong>${Ki(a.payout)} <i>→</i></strong></button>`}).join(""))}}class Cv{constructor(e,t,i=()=>!0){ue(this,"keys",new Set);ue(this,"stick",{x:0,y:0});ue(this,"stickPointer",null);ue(this,"cutPending",!1);ue(this,"keydown");ue(this,"keyup");ue(this,"canvas");ue(this,"joystick");ue(this,"stickEnabled");this.canvas=e,this.stickEnabled=i,this.keydown=r=>{if(this.inControl(r.target))return;const s=r.key.toLowerCase();["arrowleft","arrowright","arrowup","arrowdown","w","a","s","d","q","e"," ","enter","escape","p","f"].includes(s)&&r.preventDefault(),!r.repeat&&s===" "&&t.hover(),!r.repeat&&s==="enter"&&t.interact(),!r.repeat&&(s==="escape"||s==="p")&&t.pause(),!r.repeat&&s==="f"&&t.fullscreen(),this.keys.add(s)},this.keyup=r=>this.keys.delete(r.key.toLowerCase()),window.addEventListener("keydown",this.keydown),window.addEventListener("keyup",this.keyup),e.addEventListener("blur",()=>this.clear()),this.joystick=document.querySelector("#joystick")||void 0,this.joystick&&(this.joystick.hidden=!0),this.bindTouch()}sample(){const e=(o,l)=>Number(this.keys.has(o)||this.keys.has(l)),t=e("arrowright","d")-e("arrowleft","a")+this.stick.x,i=e("arrowup","w")-e("arrowdown","s")-this.stick.y,r=this.stickPointer!==null,s=e("e","e")-e("q","q")+(r?1:0),a=this.cutPending;return this.cutPending=!1,{turn:Math.max(-1,Math.min(1,t)),climb:Math.max(-1,Math.min(1,i)),throttle:Math.max(-1,Math.min(1,s)),cutThrottle:a}}clear(){this.keys.clear(),this.stickPointer=null,this.stick.x=this.stick.y=0,this.cutPending=!1,this.joystick&&(this.joystick.style.removeProperty("--stick-x"),this.joystick.style.removeProperty("--stick-y"),this.joystick.classList.remove("is-dragging"),this.joystick.hidden=!0)}dispose(){window.removeEventListener("keydown",this.keydown),window.removeEventListener("keyup",this.keyup),this.clear()}inControl(e){return e instanceof Element&&!!e.closest('input, button, select, textarea, [contenteditable="true"]')}bindTouch(){if(!this.joystick)return;const e=this.joystick,t=a=>{const o=e.getBoundingClientRect(),l=o.width*.34,c=a.clientX-(o.left+o.width/2),u=a.clientY-(o.top+o.height/2),d=Math.max(l,Math.hypot(c,u));this.stick.x=c/d,this.stick.y=u/d,e.style.setProperty("--stick-x",`${this.stick.x*l}px`),e.style.setProperty("--stick-y",`${this.stick.y*l}px`)},i=a=>{if(a.pointerType==="mouse"||this.stickPointer!==null||!this.stickEnabled())return;this.stickPointer=a.pointerId;try{this.canvas.setPointerCapture(a.pointerId)}catch{}const o=e.offsetWidth/2||56;e.style.left=`${a.clientX-o}px`,e.style.top=`${a.clientY-o}px`,e.hidden=!1,e.classList.add("is-dragging"),t(a)},r=a=>{a.pointerId===this.stickPointer&&t(a)},s=a=>{a.pointerId===this.stickPointer&&(this.stickPointer=null,this.stick.x=this.stick.y=0,e.style.removeProperty("--stick-x"),e.style.removeProperty("--stick-y"),e.classList.remove("is-dragging"),e.hidden=!0,this.cutPending=!0)};this.canvas.addEventListener("pointerdown",i),this.canvas.addEventListener("pointermove",r),this.canvas.addEventListener("pointerup",s),this.canvas.addEventListener("pointercancel",s),this.canvas.addEventListener("lostpointercapture",s)}}class Pv{constructor(e,t){ue(this,"root");ue(this,"key","");this.actions=t,this.root=document.createElement("section"),this.root.className="home-interface",e.append(this.root),this.root.addEventListener("click",i=>{const r=i.target.closest("button");r&&(r.dataset.action==="interact"?t.interact():r.dataset.action==="close"?t.close():r.dataset.action==="start"?t.start():r.dataset.upgrade?t.upgrade(r.dataset.upgrade):r.dataset.furnish&&t.furnish(r.dataset.furnish),r.blur())})}render(e){if(this.root.hidden=e.mode!=="home"||e.paused,this.root.hidden)return;const t=zo(e),i=JSON.stringify([e.homePanel,t==null?void 0:t.id,e.profile.coins,e.profile.upgrades,e.profile.furniture,e.message]);if(i===this.key)return;this.key=i;const r=e.profile,s=`<div class="eyebrow">MEG'S ROOM</div><h2>Welcome home, Meg.</h2><p class="home-wallet">${r.coins} coins saved · ${r.furniture.length}/6 cozy touches</p>`,a=`<button class="context-button" data-action="interact" ${t?"":"disabled"}>${t?`Visit ${t.name}`:"Explore your room"} <kbd>Enter</kbd></button>`;if(e.homePanel==="none"){const l=`<aside class="room-guide panel">${s}<p>Walk to the Job Board, Broom Workshop, or Decor Corner.</p>${a}</aside>`;this.root.innerHTML=`${l}${ph(r)?'<div class="completion-ribbon">✦ Every little corner feels like home. Keep flying, little witch.</div>':""}`;return}let o="";e.homePanel==="jobs"&&(o='<div class="eyebrow">A NEW DELIVERY DAY</div><h2>The town is waiting.</h2><p>Choose your first delivery — pick the route that suits you. You have eight minutes to make deliveries and return home. Anything still in your satchel at nightfall will be lost.</p><button class="primary-button" data-action="start">See today’s deliveries →</button>'),e.homePanel==="brooms"&&(o=`<div class="eyebrow">THE BROOM STAND · ${r.coins} COINS</div><h2>A little more magic.</h2><div class="shop-list">${["speed","handling","braking"].map(l=>{const c=r.upgrades[l],u=c===0?60:120,d={speed:"Fly 10% faster per level",handling:"Turn 20% more responsively per level",braking:"Slow down 20% faster per level"}[l];return`<button data-upgrade="${l}" ${c===2||r.coins<u?"disabled":""}><span><b>${l[0].toUpperCase()+l.slice(1)}</b><small>${d} · ${c}/2</small></span><strong>${c===2?"Mastered":`${u} coins`}</strong></button>`}).join("")}</div>`),e.homePanel==="decor"&&(o=`<div class="eyebrow">THE HOME CATALOGUE · ${r.coins} COINS</div><h2>Make yourself at home.</h2><div class="shop-list">${Oo.map(l=>`<button data-furnish="${l.id}" ${r.furniture.includes(l.id)||r.coins<l.cost?"disabled":""}><span><b>${l.name}</b><small>${l.description}</small></span><strong>${r.furniture.includes(l.id)?"At home":`${l.cost} coins`}</strong></button>`).join("")}</div>`),e.homePanel==="cat"&&(o='<div class="eyebrow">PUMPKIN’S CORNER</div><h2>A very good copilot.</h2><p>Pumpkin leans into your hand and purrs. The best part of any delivery day is coming home together.</p><div class="purr">♡ purr… purr… ♡</div>'),this.root.innerHTML=`<section class="menu-card panel room-menu">${o}<button class="secondary-button" data-action="close">Back to your room</button></section>`}}function Yu(n,e,t){return e?!1:n==="flight"||n==="tutorial"?!0:n==="home"&&t==="none"}function $u(n){return n.haloFade>0||n.descent!=null||n.drop!=null}class Lv{constructor(e){ue(this,"root");this.root=document.createElement("div"),this.root.className="touch-controls",this.root.id="touch-controls",this.root.innerHTML='<div id="joystick" class="joystick" hidden><i></i></div>',e.append(this.root)}render(e){this.root.hidden=$u(e)||!Yu(e.mode,e.paused,e.homePanel)}}const br="megs-delivery-save-v1",Dv=["title","tutorial","flight","offers","home","summary"],Iv=["none","jobs","brooms","decor","cat"],Fo=new Set(yt.map(n=>n.id)),zc=new Set(["rug","plant","shelf","lamp","cushion","cat-tree"]),Uv=new Set([20,35,50]),Nv=1e5,wn=n=>typeof n=="object"&&n!==null&&!Array.isArray(n),Kt=(n,e=-1/0,t=1/0)=>typeof n=="number"&&Number.isFinite(n)&&n>=e&&n<=t,mn=(n,e=0,t=Number.MAX_SAFE_INTEGER)=>Number.isInteger(n)&&Kt(n,e,t),Si=(n,e=160)=>typeof n=="string"&&n.length<=e,kc=(n,e=500)=>wn(n)&&Kt(n.x,-e,e)&&Kt(n.y,-e,e)&&Kt(n.z,-e,e);function Gc(n){return!wn(n)||!Si(n.from,64)||!Si(n.to,64)||!Fo.has(n.from)||!Fo.has(n.to)||n.from===n.to||!Uv.has(n.payout)||!Si(n.label,80)||!Si(n.parcel,100)?null:{from:n.from,to:n.to,payout:n.payout,label:n.label,parcel:n.parcel}}function Fv(n){return!wn(n)||!mn(n.coins)||!wn(n.upgrades)||!mn(n.upgrades.speed,0,2)||!mn(n.upgrades.handling,0,2)||!mn(n.upgrades.braking,0,2)||!Array.isArray(n.furniture)||n.furniture.length>zc.size||!n.furniture.every(e=>typeof e=="string"&&zc.has(e))||new Set(n.furniture).size!==n.furniture.length||typeof n.tutorialDone!="boolean"||!mn(n.runs)||!mn(n.deliveries)?null:{coins:n.coins,upgrades:{speed:n.upgrades.speed,handling:n.upgrades.handling,braking:n.upgrades.braking},furniture:[...n.furniture],tutorialDone:n.tutorialDone,runs:n.runs,deliveries:n.deliveries}}function Ov(n){if(n===null)return null;if(!wn(n)||!mn(n.seed,-Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER)||!Kt(n.elapsed,0,480)||!Kt(n.earnings,0)||!mn(n.deliveries)||typeof n.returning!="boolean"||!Si(n.lastStop,64)||!Fo.has(n.lastStop)||!Array.isArray(n.offers)||n.offers.length>2)return;const e=n.job===null?null:Gc(n.job),t=n.offers.map(Gc);if(!(n.job!==null&&!e||t.some(i=>!i)||new Set(t.map(i=>i.to)).size!==t.length))return{seed:n.seed,elapsed:n.elapsed,earnings:n.earnings,deliveries:n.deliveries,job:e,offers:t,returning:n.returning,lastStop:n.lastStop}}function Na(n){if(typeof n!="string"||n.length>Nv)return null;let e;try{e=JSON.parse(n)}catch{return null}if(!wn(e)||e.version!==1||!wn(e.state))return null;const t=e.state;if(!Dv.includes(t.mode)||!wn(t.player)||!kc(t.player.position)||!Kt(t.player.yaw)||!Kt(t.player.pitch,-Math.PI/2,Math.PI/2)||!Kt(t.player.speed,0,30)||!Kt(t.player.throttle,0,30)||typeof t.player.hover!="boolean"||!kc(t.player.velocity,50))return null;const i=Fv(t.profile),r=Ov(t.run),s=t.homeFacing===void 0?0:t.homeFacing,a=t.homePanel===void 0?"none":t.homePanel;if(!i||r===void 0||typeof t.paused!="boolean"||!Si(t.pauseReason)||!Si(t.message,500)||!mn(t.tutorialStage,0,10)||!wn(t.homePosition)||!Kt(t.homePosition.x)||!Kt(t.homePosition.z)||!Kt(s,-10,10)||!Iv.includes(a)||!mn(t.revision))return null;let o=null;if(t.summary!==null){if(!wn(t.summary)||typeof t.summary.success!="boolean"||!Kt(t.summary.earnings,0)||!mn(t.summary.deliveries))return null;o={success:t.summary.success,earnings:t.summary.earnings,deliveries:t.summary.deliveries}}const l=t.mode;if((l==="title"||l==="tutorial"||l==="home"||l==="summary")&&r!==null||l==="flight"&&(!r||!r.job&&!r.returning)||l==="offers"&&(!r||r.job!==null||r.returning||r.offers.length!==2)||l==="summary"&&!o||l!=="summary"&&o||l==="home"&&(Math.abs(t.homePosition.x)>8||Math.abs(t.homePosition.z)>6))return null;const c={position:{...t.player.position},yaw:t.player.yaw,pitch:t.player.pitch,speed:t.player.speed,throttle:t.player.throttle,hover:!1,velocity:{...t.player.velocity},brakeHold:t.player.brakeHold===!0},u={mode:l,player:c,profile:i,run:r,paused:t.paused,pauseReason:t.pauseReason,message:t.message,tutorialStage:t.tutorialStage,homePosition:{x:t.homePosition.x,z:t.homePosition.z},homeFacing:s,homePanel:a,summary:o,revision:t.revision};return u.drop=null,u.descent=null,u.haloFade=0,(u.mode==="tutorial"||u.mode==="flight"||u.mode==="offers")&&(u.paused=!0,u.pauseReason="Welcome back"),(u.mode==="title"||u.mode==="home")&&(u.paused=!1,u.pauseReason=""),u}function Bv(n){return JSON.stringify({version:1,state:n})}class zv{constructor(){ue(this,"releaseLock");ue(this,"generation",0);ue(this,"writable",!1);ue(this,"status","");ue(this,"memory")}get message(){return this.status}get canSave(){return this.writable}async acquire(){this.release();const e=++this.generation,t=this.storage();if(!t)return this.session("Saved games are unavailable in this browser.");const i=typeof navigator>"u"?void 0:navigator.locks;if(!i)try{const r=t.getItem(br),s=r===null?void 0:Na(r);return r!==null&&!s?(this.status="Saved game could not be read. It was left untouched.",{kind:"invalid",message:this.status}):this.session("This browser cannot safely share saved games; playing in this tab only.",s??void 0)}catch{return this.session("Saved games are unavailable in this browser.")}return new Promise(r=>{i.request("megs-delivery-save",{ifAvailable:!0},s=>{var u;if(e!==this.generation||!s){r({kind:"readonly",message:"Saved game is open in another tab. Retry after closing it."});return}let a;const o=new Promise(d=>{a=d});this.releaseLock=()=>{this.releaseLock=void 0,this.writable=!1,a()};let l;try{l=t.getItem(br)}catch{return(u=this.releaseLock)==null||u.call(this),r(this.session("Saved games are unavailable in this browser.")),o}const c=l===null?void 0:Na(l)??void 0;return l!==null&&!c?(this.status="Saved game could not be read. It was left untouched.",r({kind:"invalid",message:this.status}),o):(this.writable=!0,this.memory=c,this.status="Saved game ready.",r({kind:"ready",state:c,message:this.status}),o)}).catch(()=>r(this.session("Saved games are unavailable in this browser.")))})}save(e){if(!this.writable)return!1;const t=this.storage();if(!t)return this.writable=!1,this.status="Saving is unavailable in this browser.",!1;try{return t.setItem(br,Bv(e)),this.memory=e,this.status="Saved.",!0}catch{return this.memory=e,this.writable=!1,this.status="Could not save; progress remains in this tab.",!1}}release(){var e;this.generation++,(e=this.releaseLock)==null||e.call(this),this.writable=!1}continueSession(){this.release(),this.memory=void 0,this.status="Continuing with a fresh session."}discardUnreadable(){try{const e=this.storage(),t=e==null?void 0:e.getItem(br);t!=null&&!Na(t)&&(e==null||e.removeItem(br))}catch{}this.writable=!0,this.memory=void 0,this.status="Discarded the unreadable save."}storage(){try{return typeof localStorage>"u"?void 0:localStorage}catch{return}}session(e,t){return this.writable=!1,this.memory=t,this.status=e,{kind:"session",state:t,message:e}}}class kv{constructor(){ue(this,"context");ue(this,"master");ue(this,"ambience");ue(this,"ambienceSources",[]);ue(this,"tones",new Set);ue(this,"muted",!0);ue(this,"disposed",!1);ue(this,"snapshot");ue(this,"nextNote",0);ue(this,"lastActive",!1);ue(this,"operationPending",!1)}setMuted(e){this.disposed||(this.muted=e,!(!e&&!this.ensureContext())&&this.reconcile())}update(e,t){const i=this.snapshot,r=this.takeSnapshot(e);this.snapshot=r,this.lastActive=!(t||e.paused||typeof document<"u"&&document.hidden),!(this.muted||this.disposed||!this.context)&&(this.reconcile(),!(!this.canPlay()||this.context.state!=="running")&&(this.playMelody(),i&&(r.deliveries>i.deliveries&&this.deliveryCue(),r.coins<i.coins&&(r.upgrades!==i.upgrades||r.furniture!==i.furniture)&&this.purchaseCue(),i.homePanel!=="cat"&&r.homePanel==="cat"&&this.purrCue())))}dispose(){if(!this.disposed){this.disposed=!0,this.lastActive=!1,this.clearAmbience();for(const e of this.tones){try{e.stop()}catch{}e.disconnect()}this.tones.clear(),this.context&&this.context.state!=="closed"&&this.context.close().catch(()=>{}),this.context=void 0,this.master=void 0}}debugState(){var e;return{context:((e=this.context)==null?void 0:e.state)??"unavailable",muted:this.muted}}ensureContext(){if(this.context)return this.context;const e=typeof window>"u"?void 0:window.AudioContext||window.webkitAudioContext;if(e)try{const t=new e,i=t.createGain();return i.gain.value=1e-4,i.connect(t.destination),this.context=t,this.master=i,t}catch{return}}canPlay(){return!this.disposed&&!this.muted&&this.lastActive}reconcile(){const e=this.context;if(!e||e.state==="closed")return;const t=this.canPlay();if(t&&e.state==="running"){this.startAmbience();return}if(!t&&this.master){const r=e.currentTime;this.master.gain.cancelScheduledValues(r),this.master.gain.setTargetAtTime(1e-4,r,.025)}if(this.operationPending||(t?e.state!=="suspended":e.state!=="running"))return;this.operationPending=!0,(t?e.resume.bind(e):e.suspend.bind(e))().catch(()=>{}).then(()=>{this.operationPending=!1,this.canPlay()&&e.state==="running"&&this.startAmbience(),this.reconcile()})}startAmbience(){const e=this.context,t=this.master;if(!e||!t||e.state!=="running"||!this.canPlay())return;const i=e.currentTime;if(t.gain.cancelScheduledValues(i),t.gain.setTargetAtTime(.14,i,.08),this.ambience)return;const r=e.createGain(),s=e.createOscillator(),a=e.createOscillator(),o=e.createGain();r.gain.value=.035,r.connect(t),s.type="sine",s.frequency.value=82,a.type="sine",a.frequency.value=.09,o.gain.value=11,a.connect(o).connect(s.frequency),s.connect(r),s.start(),a.start(),this.ambience=r,this.ambienceSources=[s,a]}clearAmbience(){var e;for(const t of this.ambienceSources){try{t.stop()}catch{}t.disconnect()}this.ambienceSources=[],(e=this.ambience)==null||e.disconnect(),this.ambience=void 0}playMelody(){const e=this.context;if(!e||e.currentTime<this.nextNote)return;const t=[261.63,329.63,392,523.25,440,329.63];this.tone(t[Math.floor(e.currentTime*1.7%t.length)],.11,.045,"sine"),this.nextNote=e.currentTime+1.45}deliveryCue(){this.tone(659.25,.08,.09,"triangle"),this.tone(783.99,.19,.07,"triangle",.09)}purchaseCue(){this.tone(523.25,.06,.08,"sine"),this.tone(783.99,.16,.075,"sine",.07)}purrCue(){this.tone(110,.48,.055,"sine"),this.tone(164.81,.42,.035,"sine",.08)}tone(e,t,i,r,s=0){const a=this.context,o=this.master;if(!a||!o||a.state!=="running"||!this.canPlay())return;const l=a.currentTime+s,c=a.createOscillator(),u=a.createGain();c.type=r,c.frequency.value=e,u.gain.setValueAtTime(1e-4,l),u.gain.exponentialRampToValueAtTime(i,l+.018),u.gain.exponentialRampToValueAtTime(1e-4,l+t),c.connect(u).connect(o),this.tones.add(c),c.onended=()=>{this.tones.delete(c),c.disconnect(),u.disconnect()},c.start(l),c.stop(l+t+.03)}takeSnapshot(e){var t;return{deliveries:Math.max(e.profile.deliveries,((t=e.run)==null?void 0:t.deliveries)??0),coins:e.profile.coins,upgrades:`${e.profile.upgrades.speed}:${e.profile.upgrades.handling}:${e.profile.upgrades.braking}`,furniture:e.profile.furniture.join("|"),homePanel:e.homePanel}}}const Ys=document.querySelector("#game"),Vr=document.querySelector("#app"),Gv=new URLSearchParams(location.search),ul=Gv.get("test")==="1";let xe=Ho(),Rs=!0,Gs=matchMedia("(pointer: coarse)").matches;const hl=matchMedia("(pointer: coarse)").matches;xe.coarsePointer=hl;let Ir=matchMedia("(prefers-reduced-motion: reduce)").matches,Gr,dt,Gn=0,Cs=0,or=!1;const tr=new zv,$s=new kv;let pt=!1,Hn="loading",nr="Opening your little world…",Ur=null,Hc;function Hv(n,e=8e3){Ur=n,clearTimeout(Hc),Hc=setTimeout(()=>{Ur=null,nt(0)},e)}let Fa=0;function Wr(n="Take a little breather."){jc(xe,!0,n),dt==null||dt.clear(),Gn=0,It(),nt(0)}function Ku(){!pt||document.hidden||or||(jc(xe,!1),dt==null||dt.clear(),Gn=0,Cs=performance.now(),It(),nt(0))}function Zu(){var n,e,t;document.fullscreenElement?(n=document.exitFullscreen)==null||n.call(document):(t=(e=document.documentElement).requestFullscreen)==null||t.call(e).catch(()=>{})}const Vv=new Rv(Vr,{start(){var n;pt&&(xe.profile.tutorialDone?za(xe):Yh(xe),dt==null||dt.clear(),(n=document.activeElement)==null||n.blur(),It(),nt(0))},pause:()=>Wr(),resume:Ku,mute(){Rs=!Rs,$s.setMuted(Rs),nt(0)},quality(){Gs=!Gs,nt(0)},motion(){Ir=!Ir,nt(0)},fullscreen:Zu,chooseJob(n){pt&&(Qh(xe,n),dt.clear(),It(),nt(0))},returnHome(){pt&&(jh(xe),dt.clear(),It(),nt(0))},nextDay(){pt&&(za(xe),dt.clear(),It(),nt(0))}}),Wv=new Pv(Vr,{interact(){pt&&(eu(xe),dt.clear(),It(),nt(0))},close(){pt&&(Wc(xe),dt.clear(),It(),nt(0))},start(){pt&&(Jh(xe,ul?42:void 0),dt.clear(),It(),nt(0))},upgrade(n){pt&&(dh(xe,n),It(),nt(0))},furnish(n){pt&&(fh(xe,n),It(),nt(0))}}),Xv=new Lv(Vr),zn=document.createElement("aside");zn.className="save-status";zn.setAttribute("aria-live","polite");Vr.append(zn);zn.addEventListener("click",n=>{const e=n.target.closest("button");(e==null?void 0:e.dataset.save)==="retry"&&dl()});try{Gr=new Mv(Ys)}catch{throw Vr.innerHTML='<main class="compatibility"><h1>A little more sky, please.</h1><p>Meg needs a browser with WebGL 2 and hardware acceleration. Try a current browser with graphics acceleration enabled.</p></main>',new Error("WebGL 2 is unavailable.")}dt=new Cv(Ys,{hover:()=>{pt&&($h(xe),It(),nt(0))},interact:()=>{!pt||xe.mode!=="home"||(eu(xe),It(),nt(0))},pause:()=>{pt&&(xe.mode==="home"&&xe.homePanel!=="none"?(Wc(xe),It(),nt(0)):xe.paused?Ku():Wr())},fullscreen:Zu},()=>hl&&!$u(xe)&&Yu(xe.mode,xe.paused,xe.homePanel));function It(){!pt||!tr.canSave||tr.save(xe)||(Hn="session",nr=tr.message)}async function dl(){pt=!1,Hn="loading",nr="Opening your little world…",nt(0);const n=await tr.acquire();if(n.kind==="invalid"){tr.discardUnreadable(),xe=Ho(),xe.coarsePointer=hl,pt=!0,Hn="ready",nr="",It(),Hv("Your saved game could not be read, so it was discarded and a new game was started."),dt==null||dt.clear(),Gn=0,nt(0);return}Hn=n.kind,nr=n.message,n.state&&(xe=n.state),pt=n.kind==="ready"||n.kind==="session",dt==null||dt.clear(),Gn=0,nt(0)}function nt(n){if($s.update(xe,!pt||or),document.body.classList.toggle("reduced-motion",Ir),!Gr||or)return;Gr.render(xe,n,{reducedMotion:Ir,lowQuality:Gs});const e=nu(xe)??yt[0];Vv.render(xe,{muted:Rs,lowQuality:Gs,reducedMotion:Ir,targetName:e.name,targetDistance:Math.hypot(e.position.x-xe.player.position.x,e.position.z-xe.player.position.z),targetBearing:ed(xe.player.position,e.position,xe.player.yaw),speed:xe.player.speed,status:"",timeRemaining:xe.run?Math.max(0,480-xe.run.elapsed):void 0}),Wv.render(xe),Xv.render(xe),pt||(document.querySelector(".home-interface").hidden=!0),xe.mode==="home"&&(document.querySelector("#flight-hud").hidden=!0),document.querySelector("#start-btn").disabled=!pt,xe.profile.tutorialDone&&(document.querySelector("#start-btn").innerHTML="Come on in <span>→</span>"),document.querySelector("#next-day-btn").innerHTML="Back to your room <span>→</span>",document.querySelector(".sun-pill").hidden=!xe.run,zn.hidden=Hn==="ready"&&Ur===null;const t=Hn+nr+(Ur??"");zn.dataset.key!==t&&(zn.dataset.key=t,zn.textContent=Hn==="ready"?Ur??"":nr,Hn==="readonly"&&zn.insertAdjacentHTML("beforeend",'<br><button data-save="retry">Retry</button>'))}function Ju(n){if(!pt||xe.paused||document.hidden||or){Gn=0,nt(0);return}const e=xe.mode;for(Gn+=Math.max(0,n)/1e3;Gn+1e-10>=1/60;)sd(xe,dt.sample(),1/60),Gn-=1/60;Fa+=n,(Fa>=5e3||e!==xe.mode)&&(It(),Fa=0),nt(Math.min(n/1e3,.1))}function Qu(n){const e=Cs?Math.min(n-Cs,100):0;Cs=n,ul||Ju(e),requestAnimationFrame(Qu)}window.addEventListener("resize",()=>{Gr.resize(),nt(0)});document.addEventListener("visibilitychange",()=>{document.hidden&&Wr("Welcome back. Ready to fly?")});window.addEventListener("blur",()=>{dt.clear(),xe.mode!=="title"&&Wr()});Ys.addEventListener("webglcontextlost",n=>{n.preventDefault(),Wr("The sky is taking a moment."),or=!0});Ys.addEventListener("webglcontextrestored",()=>{or=!1,nt(0)});window.addEventListener("pagehide",()=>{It(),pt=!1,$s.update(xe,!0),tr.release()});window.addEventListener("pageshow",n=>{n.persisted&&dl()});Object.assign(window,{advanceTime:n=>Ju(n),render_game_to_text:()=>{var n,e;return JSON.stringify({coordinates:"x right/east, y up, z south; yaw 0 faces -z",mode:xe.mode,paused:xe.paused,player:xe.player,tutorialStage:xe.tutorialStage,message:xe.message,run:xe.run,profile:xe.profile,stops:yt,nearby:((n=Nr(xe))==null?void 0:n.id)??null,homePosition:xe.homePosition,homePanel:xe.homePanel,station:(e=zo(xe))==null?void 0:e.id,saveKind:Hn})}});ul&&Object.assign(window,{__game:{get state(){return xe},get ready(){return pt},reset(){xe=Ho(),Gn=0,nt(0)},draw:()=>nt(0),audio:()=>$s.debugState(),persist:It,renderer:()=>Gr}});nt(0);requestAnimationFrame(Qu);dl();
