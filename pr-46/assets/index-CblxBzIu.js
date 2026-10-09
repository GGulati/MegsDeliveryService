var ip=Object.defineProperty;var sp=(i,t,e)=>t in i?ip(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var G=(i,t,e)=>sp(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();class rp{constructor(){G(this,"current",null)}show(t){const e=this.current;this.current=t;try{this.current.enter()}catch(n){throw this.current=e,n}e&&e.exit()}update(t){var e,n;(n=(e=this.current)==null?void 0:e.update)==null||n.call(e,t)}render(){var t,e;(e=(t=this.current)==null?void 0:t.render)==null||e.call(t)}get active(){return this.current}}const ir=230,me=[-40,-195,40,-155],ts=[[20,-25],[30,-18],[40,-5],[46,12],[50,30],[54,50],[56,70],[60,90],[63,105],[66,120],[70,140],[76,160],[82,180],[88,200],[95,220],[45,220],[40,200],[34,180],[26,160],[16,140],[6,120],[-2,100],[-8,82],[-14,65],[-18,45],[-20,25],[-16,5],[-6,-12],[6,-22]];function rn(i,t){let e=!1;for(let n=0,s=ts.length-1;n<ts.length;s=n++){const r=ts[n][0],o=ts[n][1],a=ts[s][0],c=ts[s][1];o>t!=c>t&&i<(a-r)*(t-o)/(c-o)+r&&(e=!e)}return e}const op=24,ap=8,nh=[[-11,50],[-6,70],[1,90],[49,60],[50,80],[60,120]],cp=[[-11,58],[-6,78],[1,82],[50,68],[50,88],[60,128]],ki=[[-86.5,-191.5,-60,-163.5],[-60,-191.5,-33.5,-163.5]],Te=[{id:"home",name:"Bakery Attic",subtitle:"Home — borrowed attic",position:{x:-25,y:30,z:-48},color:"#f9cf68"},{id:"clocktower",name:"Clocktower Spire",subtitle:"Old town landmark",position:{x:-50,y:40,z:-48},color:"#f4e5b8"},{id:"cobblers",name:"Cobbler's Corner",subtitle:"Old town shop",position:{x:-88,y:33,z:-88},color:"#e88869"},{id:"tinkers",name:"Tinker's Attic",subtitle:"Old town rooftop",position:{x:-40,y:27,z:-88},color:"#63c7dc"},{id:"bellfounders",name:"Bellfounder's Yard",subtitle:"Old town workshop",position:{x:0,y:27,z:-88},color:"#ad91d1"},{id:"market",name:"Sunset Market",subtitle:"Old town market",position:{x:40,y:28,z:-88},color:"#e88869"},{id:"harbor-cafe",name:"Harbor Cafe",subtitle:"Merchant row cafe",position:{x:5,y:23,z:-48},color:"#63c7dc"},{id:"chandlery",name:"Chandlery Loft",subtitle:"Merchant row shop",position:{x:30,y:23,z:-48},color:"#79b9a0"},{id:"dockmaster",name:"Dockmaster's Office",subtitle:"Harbor docks",position:{x:-80,y:18,z:150},color:"#e88869"},{id:"tavern",name:"Net & Anchor Tavern",subtitle:"Harbor waterfront",position:{x:102,y:20,z:125},color:"#db92a7"},{id:"ferry",name:"Ferry Landing",subtitle:"Harbor pier",position:{x:-55,y:12,z:98},color:"#63c7dc"},{id:"marina",name:"Marina Works",subtitle:"Dockside roof",position:{x:102,y:12,z:70},color:"#79b9a0"},{id:"ropemakers",name:"Ropemaker's Wharf",subtitle:"Harbor wharf",position:{x:102,y:14,z:20},color:"#ad91d1"},{id:"garden-gate",name:"Garden Gate Cottage",subtitle:"Bungalow lanes",position:{x:-115,y:46,z:-178},color:"#79b9a0"},{id:"willow-lane",name:"Willow Lane Bungalow",subtitle:"Bungalow lanes",position:{x:50,y:30,z:-178},color:"#f9cf68"},{id:"cliffside",name:"Cliffside Books",subtitle:"Bungalow lanes",position:{x:68,y:29,z:-178},color:"#db92a7"},{id:"hearthside",name:"Hearthside Cottage",subtitle:"Bungalow lanes",position:{x:-115,y:29,z:-150},color:"#e88869"},{id:"hilltop-manor",name:"Hilltop Manor",subtitle:"Mansion hill",position:{x:-70,y:36,z:-178},color:"#f4e5b8"},{id:"rosewood",name:"Rosewood Villa",subtitle:"Mansion hill",position:{x:-50,y:36,z:-178},color:"#db92a7"},{id:"observatory",name:"Hill Observatory",subtitle:"Observatory rise",position:{x:130,y:53,z:-55},color:"#ad91d1"},{id:"starwatch",name:"Starwatch Dome",subtitle:"Observatory rise",position:{x:140,y:35,z:-90},color:"#63c7dc"},{id:"beacon",name:"Beacon House",subtitle:"Observatory rise",position:{x:122,y:59,z:-63},color:"#f4e5b8"},{id:"lighthouse",name:"Lighthouse Keeper's Cottage",subtitle:"Headland",position:{x:130,y:15,z:140},color:"#f9cf68"}],on=[{min:{x:-37,y:10,z:-60},max:{x:-13,y:28,z:-36},district:"merchant-row"},{min:{x:-94,y:.12,z:136},max:{x:-66,y:16.12,z:164},district:"harbor"},{min:{x:-103,y:10,z:-102},max:{x:-73,y:31,z:-74},district:"old-town"},{min:{x:120,y:0,z:130},max:{x:140,y:13,z:150},district:"lighthouse-headland"},{min:{x:87,y:0,z:110},max:{x:117,y:18,z:140},district:"harbor"},{min:{x:115,y:20,z:-70},max:{x:145,y:51,z:-40},district:"observatory-rise"},{min:{x:-130,y:20,z:-192.5},max:{x:-100,y:44,z:-162.5},district:"bungalow-lanes"},{min:{x:-65,y:0,z:88},max:{x:-45,y:10,z:108},district:"harbor"},{min:{x:-65,y:0,z:38},max:{x:-45,y:12,z:58},district:"harbor"},{min:{x:94,y:0,z:61},max:{x:110,y:10,z:79},district:"harbor"},{min:{x:92,y:0,z:10},max:{x:112,y:12,z:30},district:"harbor"},{min:{x:-50,y:10,z:-98.5},max:{x:-30,y:25,z:-78.5},district:"old-town"},{min:{x:-10,y:10,z:-98.5},max:{x:10,y:25,z:-78.5},district:"old-town"},{min:{x:30,y:10,z:-98.5},max:{x:50,y:26,z:-78.5},district:"old-town"},{min:{x:-50,y:9.19,z:-130.5},max:{x:-30,y:25.19,z:-113.5},district:"old-town"},{min:{x:22.5,y:10,z:-55},max:{x:37.5,y:21,z:-41},district:"merchant-row"},{min:{x:-2.5,y:10,z:-55.5},max:{x:12.5,y:21,z:-40.5},district:"merchant-row"},{min:{x:-80,y:20,z:-187.5},max:{x:-60,y:34,z:-167.5},district:"mansion-hill"},{min:{x:-57.5,y:20,z:-187.5},max:{x:-42.5,y:34,z:-167.5},district:"mansion-hill"},{min:{x:42.5,y:20,z:-185},max:{x:57.5,y:28,z:-170},district:"bungalow-lanes"},{min:{x:60.5,y:20,z:-185},max:{x:75.5,y:27,z:-170},district:"bungalow-lanes"},{min:{x:-122.5,y:19.28,z:-157},max:{x:-107.5,y:27.28,z:-143},district:"bungalow-lanes"},{min:{x:133.5,y:19.26,z:-97.5},max:{x:146.5,y:33.26,z:-82.5},district:"observatory-rise"},{min:{x:-55,y:10,z:-53},max:{x:-45,y:38,z:-43},district:"old-town"},{min:{x:117.5,y:48.5,z:-67.5},max:{x:126.5,y:57,z:-58.5},district:"observatory-rise"},{min:{x:125,y:-.22,z:153},max:{x:135,y:28.78,z:163}}],Lr={harbor:{bodies:[4873579,7043714,6048314,12099704],roofs:[3820117,3095365]},"old-town":{bodies:[13935988,15258808,13219990],roofs:[11951167,4877148]},"merchant-row":{bodies:[11065544,16049320,15247544,15784120],roofs:[9132602,7031338]},"mansion-hill":{bodies:[15790312,10139802],roofs:[3817290]},"bungalow-lanes":{bodies:[8034923,9136970,11033674],roofs:[6048314,4865845]},"observatory-rise":{bodies:[9079442],roofs:[6064762,2767452]},"lighthouse-headland":{bodies:[15266024],roofs:[13948116]}},ih=on.length-1,sh=on.length-3,rh=on.length-2,lp=[{min:{x:15,y:0,z:168},max:{x:100,y:100,z:172}}];function oh(i,t,e,n,s,r,o,a){const c=[],l=o/2;for(let h=0;h<a;h++){const d=h/a,u=(h+1)/a,f=i+(n-i)*d,g=i+(n-i)*u,v=t+(s-t)*d,p=t+(s-t)*u,m=e+(r-e)*d,M=e+(r-e)*u;c.push({min:{x:Math.min(f,g)-l,y:Math.min(m,M)-.5,z:Math.min(v,p)-l},max:{x:Math.max(f,g)+l,y:Math.max(m,M)+.5,z:Math.max(v,p)+l}})}return c}const hp=[{min:{x:-15,y:5.4,z:100-4.4},max:{x:73,y:6.8,z:100+4.4}},...oh(-25,70,0,-15,100,6,8.8,6),...oh(73,100,6,85,85,0,8.8,4)],yd=[{id:"jobs",name:"Job Board",x:-5,z:-3},{id:"brooms",name:"Broom Workshop",x:5,z:-3},{id:"decor",name:"Decor Corner",x:-5,z:3},{id:"cat",name:"Pumpkin",x:4,z:3}],ll=[{id:"rug",name:"Woven Rug",cost:30,description:"A soft landing for tired feet."},{id:"plant",name:"Moonleaf Plant",cost:40,description:"A little green for Meg's room."},{id:"shelf",name:"Parcel Shelf",cost:50,description:"A home for souvenirs and parcels."},{id:"lamp",name:"Warm Lamp",cost:60,description:"A cozy glow after a long shift."},{id:"cushion",name:"Window Cushion",cost:70,description:"The perfect reading nook."},{id:"cat-tree",name:"Cat Tree",cost:80,description:"Pumpkin's new favorite perch."}],Zo=[{id:"speed",name:"Swift Bristles",description:"Raises top speed by 10% per level."},{id:"handling",name:"Responsive Handle",description:"Raises turn rate by 20% per level."},{id:"braking",name:"Cloud Brake",description:"Raises hover braking by 20% per level."},{id:"capacity",name:"Parcel Satchel",description:"+1 job offer slot per level."},{id:"glide",name:"Glide Feathers",description:"+10% turn rate at cruising speed per level."}],hl={speed:[{id:"tailwind",name:"Tailwind",description:"+15% top speed."},{id:"quickstart",name:"Quickstart",description:"+30% acceleration."}],handling:[{id:"tight-turns",name:"Tight Turns",description:"+25% turn rate."},{id:"stable-hover",name:"Stable Hover",description:"Hover engages 30% faster."}],braking:[{id:"feather-touch",name:"Feather Touch",description:"No speed penalty on bumpy landings."},{id:"quick-stop",name:"Quick Stop",description:"+30% brake deceleration."}],capacity:[{id:"deep-satchel",name:"Deep Satchel",description:"+1 job offer slot."},{id:"careful-packer",name:"Careful Packer",description:"No speed penalty on bumpy landings."}],glide:[{id:"dive-bomber",name:"Dive Bomber",description:"+30% speed on steep dives."},{id:"cloud-surfer",name:"Cloud Surfer",description:"+25% turn rate above 60m."}]},wo=120,Qa=7.5,ja=5.5,up=2.4,Md=1.5,ah={x:1.4,z:3.5},ch={x:7,z:2.5},dp=2e3;let lh=-1/0;const fp=3.5,Dr=(i,t,e)=>Math.max(t,Math.min(e,i));function tc(i){i.mode="home",i.run=null,i.paused=!1,i.pauseReason="",i.homePosition={x:0,z:3},i.homeFacing=0,i.homePanel="none",i.homeSitting=!1,i.message="Back at Meg's room.",i.revision++}function hh(i){i.mode!=="home"||i.homePanel==="none"||(i.homePanel="none",i.revision++)}function bd(i){if(i.mode==="home")return yd.find(t=>Math.hypot(i.homePosition.x-t.x,i.homePosition.z-t.z)<=up)}function pp(i){if(i.mode!=="home"||i.paused)return;if(i.homeSitting){uh(i);return}if(uh(i)||mp(i))return;const t=bd(i);t&&(i.homePanel=t.id,i.message=t.id==="cat"?"Pumpkin purrs.":`${t.name} opened.`,i.revision++)}function uh(i){return i.mode!=="home"||i.paused||!i.profile.furniture.includes("cushion")||!i.homeSitting&&Math.hypot(i.homePosition.x-ah.x,i.homePosition.z-ah.z)>Md?!1:(i.homeSitting=!i.homeSitting,i.message=i.homeSitting?"A well-earned rest.":"Back on your feet.",i.revision++,!0)}function mp(i,t=Date.now()){return i.mode!=="home"||i.paused||!i.profile.furniture.includes("cat-tree")||Math.hypot(i.homePosition.x-ch.x,i.homePosition.z-ch.z)>Md||t-lh<dp?!1:(lh=t,i.petCount++,i.message="Pumpkin purrs.",i.revision++,!0)}function gp(i,t,e){if(i.mode!=="home"||i.paused||i.homePanel!=="none"||i.homeSitting||!Number.isFinite(e)||e<=0)return;const n=Dr(t.turn,-1,1),s=-Dr(t.climb,-1,1),r=Math.hypot(n,s);if(r>0){const o=fp*e/Math.max(1,r);i.homePosition.x=Dr(i.homePosition.x+n*o,-Qa,Qa),i.homePosition.z=Dr(i.homePosition.z+s*o,-ja,ja),i.homeFacing=Math.atan2(n,s)}i.revision++}function xp(i,t){if(i.paused||i.mode!=="home"||i.homePanel!=="brooms"||!Sd(t))return!1;const e=i.profile.upgrades[t];if(e>=2)return!1;const n=e===0?60:120;return i.profile.coins<n?!1:(i.profile.coins-=n,i.profile.upgrades[t]=e+1,i.message=`${Zo.find(s=>s.id===t).name} upgraded.`,i.revision++,!0)}function vp(i,t,e){if(i.paused||i.mode!=="home"||i.homePanel!=="brooms"||!Sd(t))return!1;const s=hl[t].find(r=>r.id===e);return!s||i.profile.upgrades[t]<2||i.profile.upgrades.capstones[t]===e||i.profile.coins<wo?!1:(i.profile.coins-=wo,i.profile.upgrades.capstones[t]=e,i.message=`${s.name} chosen.`,i.revision++,!0)}function _p(i,t){if(i.upgrades[t]<2)return null;const e=i.upgrades.capstones[t];return hl[t].map(n=>({id:n.id,name:n.name,description:n.description,cost:wo,active:e===n.id,affordable:i.coins>=wo}))}function yp(i,t){if(i.paused||i.mode!=="home"||i.homePanel!=="decor")return!1;const e=ll.find(n=>n.id===t);return!e||i.profile.furniture.includes(t)||i.profile.coins<e.cost?!1:(i.profile.coins-=e.cost,i.profile.furniture.push(t),i.message=`${e.name} added to the room.`,i.revision++,!0)}function Mp(i){return ll.every(t=>i.furniture.includes(t.id))&&Zo.every(t=>i.upgrades[t.id]>=2)}function Sd(i){return Zo.some(t=>t.id===i)}const Eo="megs-delivery-save-v1-slot",wd="megs-delivery-save-v1",Ed="megs-delivery-last-slot-v1",Nr="megs-delivery-save-lock-v1",bp=3e4;function Sp(i){var e,n,s,r;const t=`${Eo}${i}`;try{const o=localStorage.getItem(t);if(!o){if(i===1){const c=localStorage.getItem(wd);if(c){const l=To(c);if(l)return{slotId:i,exists:!0,timestamp:Date.now(),deliveries:((e=l.profile)==null?void 0:e.deliveries)??0,coins:((n=l.profile)==null?void 0:n.coins)??0}}}return{slotId:i,exists:!1}}const a=To(o);return a?{slotId:i,exists:!0,timestamp:Date.now(),deliveries:((s=a.profile)==null?void 0:s.deliveries)??0,coins:((r=a.profile)==null?void 0:r.coins)??0}:{slotId:i,exists:!1}}catch{return{slotId:i,exists:!1}}}function wp(){try{const i=parseInt(localStorage.getItem(Ed)??"1",10);return i>=1&&i<=3?i:1}catch{return 1}}function Ep(i){try{localStorage.setItem(Ed,String(i))}catch{}}function Tp(){try{const i=localStorage.getItem(wd),t=localStorage.getItem(`${Eo}1`);i&&!t&&localStorage.setItem(`${Eo}1`,i)}catch{}}const Ap=["title","tutorial","flight","offers","home","summary"],Cp=["none","jobs","brooms","decor","cat"],ec=new Set(Te.map(i=>i.id)),dh=new Set(["rug","plant","shelf","lamp","cushion","cat-tree"]),Rp=new Set([20,35,50]),Pp=1e5,Nn=i=>typeof i=="object"&&i!==null&&!Array.isArray(i),cn=(i,t=-1/0,e=1/0)=>typeof i=="number"&&Number.isFinite(i)&&i>=t&&i<=e,ln=(i,t=0,e=Number.MAX_SAFE_INTEGER)=>Number.isInteger(i)&&cn(i,t,e),Bi=(i,t=160)=>typeof i=="string"&&i.length<=t,fh=(i,t=500)=>Nn(i)&&cn(i.x,-t,t)&&cn(i.y,-t,t)&&cn(i.z,-t,t);function ph(i){return!Nn(i)||!Bi(i.from,64)||!Bi(i.to,64)||!ec.has(i.from)||!ec.has(i.to)||i.from===i.to||!Rp.has(i.payout)||!Bi(i.label,80)||!Bi(i.parcel,100)?null:{from:i.from,to:i.to,payout:i.payout,label:i.label,parcel:i.parcel}}function Ip(i){if(!Nn(i)||!ln(i.coins)||!Nn(i.upgrades)||!ln(i.upgrades.speed,0,2)||!ln(i.upgrades.handling,0,2)||!ln(i.upgrades.braking,0,2)||!Array.isArray(i.furniture)||i.furniture.length>dh.size||!i.furniture.every(s=>typeof s=="string"&&dh.has(s))||new Set(i.furniture).size!==i.furniture.length||typeof i.tutorialDone!="boolean"||!ln(i.runs)||!ln(i.deliveries))return null;const t=ln(i.upgrades.capacity,0,2)?i.upgrades.capacity:0,e=ln(i.upgrades.glide,0,2)?i.upgrades.glide:0,n={};if(Nn(i.upgrades.capstones))for(const[s,r]of Object.entries(i.upgrades.capstones)){const o=hl[s];typeof r=="string"&&(o!=null&&o.some(a=>a.id===r))&&(n[s]=r)}return{coins:i.coins,upgrades:{speed:i.upgrades.speed,handling:i.upgrades.handling,braking:i.upgrades.braking,capacity:t,glide:e,capstones:n},furniture:[...i.furniture],tutorialDone:i.tutorialDone,runs:i.runs,deliveries:i.deliveries}}function Lp(i){if(i===null)return null;if(!Nn(i)||!ln(i.seed,-Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER)||!cn(i.elapsed,0,360)||!cn(i.earnings,0)||!ln(i.deliveries)||typeof i.returning!="boolean"||!Bi(i.lastStop,64)||!ec.has(i.lastStop)||!Array.isArray(i.offers)||i.offers.length>2)return;const t=i.job===null?null:ph(i.job),e=i.offers.map(ph);if(i.job!==null&&!t||e.some(s=>!s)||new Set(e.map(s=>s.to)).size!==e.length)return;const n=Array.isArray(i.recentStops)?i.recentStops:[];return{seed:i.seed,elapsed:i.elapsed,earnings:i.earnings,deliveries:i.deliveries,job:t,offers:e,returning:i.returning,lastStop:i.lastStop,recentStops:n}}function To(i){if(typeof i!="string"||i.length>Pp)return null;let t;try{t=JSON.parse(i)}catch{return null}if(!Nn(t)||t.version!==1||!Nn(t.state))return null;const e=t.state;if(!Ap.includes(e.mode)||!Nn(e.player)||!fh(e.player.position)||!cn(e.player.yaw)||!cn(e.player.pitch,-Math.PI/2,Math.PI/2)||!cn(e.player.speed,0,30)||!cn(e.player.throttle,0,30)||typeof e.player.hover!="boolean"||!fh(e.player.velocity,50))return null;const n=Ip(e.profile),s=Lp(e.run),r=e.homeFacing===void 0?0:e.homeFacing,o=e.homePanel===void 0?"none":e.homePanel;if(!n||s===void 0||typeof e.paused!="boolean"||!Bi(e.pauseReason)||!Bi(e.message,500)||!ln(e.tutorialStage,0,10)||!Nn(e.homePosition)||!cn(e.homePosition.x)||!cn(e.homePosition.z)||!cn(r,-10,10)||!Cp.includes(o)||!ln(e.revision))return null;let a=null;if(e.summary!==null){if(!Nn(e.summary)||typeof e.summary.success!="boolean"||!cn(e.summary.earnings,0)||!ln(e.summary.deliveries))return null;a={success:e.summary.success,earnings:e.summary.earnings,deliveries:e.summary.deliveries}}const c=e.mode;if((c==="title"||c==="tutorial"||c==="home"||c==="summary")&&s!==null||c==="flight"&&(!s||!s.job&&!s.returning)||c==="offers"&&(!s||s.job!==null||s.returning||s.offers.length!==2)||c==="summary"&&!a||c!=="summary"&&a||c==="home"&&(Math.abs(e.homePosition.x)>8||Math.abs(e.homePosition.z)>6))return null;const l={position:{...e.player.position},yaw:e.player.yaw,pitch:e.player.pitch,speed:e.player.speed,throttle:e.player.throttle,hover:!1,velocity:{...e.player.velocity},brakeHold:e.player.brakeHold===!0},h={mode:c,player:l,profile:n,run:s,paused:e.paused,pauseReason:e.pauseReason,message:e.message,tutorialStage:e.tutorialStage,homePosition:{x:e.homePosition.x,z:e.homePosition.z},homeFacing:r,homePanel:o,homeSitting:!1,petCount:0,summary:a,revision:e.revision,seed:ln(e.seed,0,2147483647)?e.seed:Math.floor(Math.random()*2147483647)};return h.drop=null,h.descent=null,h.haloFade=0,(h.mode==="tutorial"||h.mode==="flight"||h.mode==="offers")&&(h.paused=!0,h.pauseReason="Welcome back"),(h.mode==="title"||h.mode==="home")&&(h.paused=!1,h.pauseReason=""),h}function Dp(i){return JSON.stringify({version:1,state:i})}function Np(i){var t;try{const e=JSON.parse(i),n=(t=e==null?void 0:e.state)==null?void 0:t.seed;return!(typeof n=="number"&&Number.isInteger(n)&&n>=0&&n<=2147483647)}catch{return!1}}class Up{constructor(){G(this,"releaseLock");G(this,"generation",0);G(this,"writable",!1);G(this,"status","");G(this,"memory");G(this,"tabId",`${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`);G(this,"slotId",1)}setSlot(t){this.slotId=Math.min(3,Math.max(1,t))}saveKey(){return`${Eo}${this.slotId}`}get message(){return this.status}get canSave(){return this.writable}writeLock(t){try{t.setItem(Nr,JSON.stringify({tabId:this.tabId,timestamp:Date.now()}))}catch{}}async acquire(){var s;this.release(),++this.generation;const t=this.storage();if(!t)return this.session("Saved games are unavailable in this browser.");try{const r=t.getItem(Nr);if(r!==null)try{const o=JSON.parse(r),a=typeof o.timestamp=="number"?Date.now()-o.timestamp:1/0;if(typeof o.tabId=="string"&&o.tabId!==this.tabId&&a<bp)return{kind:"readonly",message:"Saved game is open in another tab. Retry after closing it."}}catch{}this.writeLock(t),this.releaseLock=()=>{this.releaseLock=void 0;try{const o=t.getItem(Nr);o!==null&&JSON.parse(o).tabId===this.tabId&&t.removeItem(Nr)}catch{}this.writable=!1}}catch{return this.session("Saved games are unavailable in this browser.")}let e;try{e=t.getItem(this.saveKey())}catch{return(s=this.releaseLock)==null||s.call(this),this.session("Saved games are unavailable in this browser.")}const n=e===null?void 0:To(e)??void 0;return e!==null&&!n?(this.status="Saved game could not be read. It was left untouched.",{kind:"invalid",message:this.status}):(this.writable=!0,this.memory=n,this.status="Saved game ready.",{kind:"ready",state:n,message:this.status,seedMigrated:e!==null&&Np(e)})}save(t){if(!this.writable)return!1;const e=this.storage();if(!e)return this.writable=!1,this.status="Saving is unavailable in this browser.",!1;try{return e.setItem(this.saveKey(),Dp(t)),this.writeLock(e),this.memory=t,this.status="Saved.",!0}catch{return this.memory=t,this.writable=!1,this.status="Could not save; progress remains in this tab.",!1}}release(){var t;this.generation++,(t=this.releaseLock)==null||t.call(this),this.writable=!1}continueSession(){this.release(),this.memory=void 0,this.status="Continuing with a fresh session."}discardUnreadable(){try{const t=this.storage(),e=t==null?void 0:t.getItem(this.saveKey());e!=null&&!To(e)&&(t==null||t.removeItem(this.saveKey()))}catch{}this.writable=!0,this.memory=void 0,this.status="Discarded the unreadable save."}storage(){try{return typeof localStorage>"u"?void 0:localStorage}catch{return}}session(t,e){return this.writable=!1,this.memory=e,this.status=t,{kind:"session",state:e,message:t}}}const Td="megs-delivery-service:muted";function sr(){try{return localStorage.getItem(Td)==="1"}catch{return!0}}function Ad(i){try{localStorage.setItem(Td,i?"1":"0")}catch{}}function Fp(i){return 1-Math.pow(1-i,3)}function zp(i,t,e){if(e<=0)return{x:i.x,y:i.y};if(e>=1)return{x:t.x,y:t.y};const n=Fp(e),s=Math.sin(n*Math.PI)*60;return{x:i.x+(t.x-i.x)*n,y:i.y+(t.y-i.y)*n-s}}const mh=500,Op=100,kp=10;class gh{constructor(){G(this,"coins",[])}get activeCount(){return this.coins.length}spawn(t,e,n,s){const r=Math.min(n,kp);for(let o=0;o<r;o++)this.coins.push({start:t,end:e,delay:o*Op,startTime:s});return n-r}update(t){let e=0;return this.coins=this.coins.filter(n=>t-n.startTime-n.delay>=mh?(e++,!1):!0),e}positions(t){return this.coins.map(e=>{const n=t-e.startTime-e.delay,s=Math.max(0,Math.min(1,n/mh));return zp(e.start,e.end,s)})}debugCoins(){return this.coins.map(t=>({delay:t.delay}))}}const Bp=()=>({lastKey:null,dismissedKey:null});function Hp(i,t,e){return`${i}|${t}|${e}`}function Gp(i,t,e,n,s,r){const o=Hp(t,e,s),a=o===i.lastKey?i:{lastKey:o,dismissedKey:null};return{hidden:!(t.includes("tutorial")||n!==""||t==="flight"&&(r??1/0)<=120)||a.dismissedKey===o,next:a}}function Vp(i){return{...i,dismissedKey:i.lastKey}}const wn=i=>`<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${{star:'<path d="m12 2 2.8 6.5L22 9l-5.4 4.7 1.6 7.1-6.2-3.7-6.2 3.7 1.6-7.1L2 9l7.2-.5Z"/>',envelope:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/>',pause:'<path d="M7 4h3v16H7zm7 0h3v16h-3z"/>',sound:'<path d="M4 10h4l5-4v12l-5-4H4zM16 9c1 .8 1 5.2 0 6m2-9c3 2.6 3 9.4 0 12"/>',"sound-off":'<path d="M4 10h4l5-4v12l-5-4H4z"/><path d="M16 9l6 6M22 9l-6 6"/>',fullscreen:'<path d="M4 9V5h4m8 0h4v4M20 15v4h-4M8 19H4v-4"/>',home:'<path d="m3 11 9-8 9 8v9h-6v-6H9v6H3z"/>'}[i]}</svg>`,es=i=>`${Math.max(0,Math.round(i))} coins`;class Wp{constructor(t,e){G(this,"el",{});G(this,"previousRevision",-1);G(this,"offersKey","");G(this,"tip",Bp());G(this,"lastCoinCount",-1);G(this,"lastEarnings",0);G(this,"displayedCoins",0);G(this,"coinAnim",new gh);G(this,"coinRemainder",0);t.classList.add("meg-ui"),t.innerHTML=`
<header class="gamebar"><div class="gamebar-brand">MEG’S <span>Delivery Service</span></div><div class="gamebar-actions"><button class="icon-button" id="pause-btn" aria-label="Pause flight">${wn("pause")}</button></div></header><main class="screen-layer">
<section class="title-card panel" id="title-card"><div class="eyebrow">${wn("star")} A LITTLE WITCH. A BIG SKY.</div><h1>MEG’S<br><em>Delivery</em> Service</h1><p class="premise">Take on a parcel, then return home <b>before nightfall</b> to bank your earnings.</p><p class="key-hint desktop-hint">Steer with <kbd>WASD</kbd> / arrows · rise with <kbd>W</kbd> · hover with <kbd>Space</kbd></p><p class="key-hint touch-hint">Touch anywhere to fly · release the stick to slow down</p><button id="start-btn" class="primary-button">Learn to fly <span>→</span></button><div class="title-controls"><button id="fullscreen-btn">${wn("fullscreen")} Fullscreen</button><button id="mute-btn-title" class="icon-button icon-button-sm" aria-label="Mute audio">${wn("sound")}</button></div><footer>MADE OF LITTLE ADVENTURES <span class="desktop-hint">⌨</span><span class="touch-hint">touch to fly</span> <span class="build-sha">build 71711bf</span></footer></section>
<section class="offers-card panel menu-card" id="offers-card"><div class="eyebrow">${wn("envelope")} TODAY’S POST</div><h2>Choose a delivery</h2><p>Nightfall is already on its way. Pick one parcel and make it home with your earnings.</p><div class="offer-balances"><span>Satchel <b id="offer-earnings">0 coins</b></span><span>Banked <b id="offer-banked">0 coins</b></span></div><div id="offer-list" class="offer-list"></div><button id="return-home-btn" class="secondary-button">Return home</button></section>
<section class="summary-card panel menu-card" id="summary-card"><div class="eyebrow">${wn("star")} DAY’S END</div><h2 id="summary-heading">A lovely landing.</h2><p id="summary-copy"></p><div class="summary-stats"><div><span>Deliveries</span><b id="summary-deliveries">0</b></div><div><span>Earnings saved</span><b id="summary-earnings">0 coins</b></div></div><button id="next-day-btn" class="primary-button">Another day <span>→</span></button></section>
<section class="flight-hud" id="flight-hud"><div class="coin-counter panel" id="coin-counter"><span class="coin-icon" aria-hidden="true">●</span><b id="coin-count">0</b></div><div id="coin-layer" class="coin-layer"></div><div class="destination-card panel"><div class="eyebrow">${wn("envelope")} <span id="target-label">Next delivery</span></div><strong id="target-name">The village</strong><div class="target-direction"><span class="compass-arrow" id="target-arrow"></span><span id="target-distance">— m away</span><svg class="hourglass" id="hourglass" viewBox="0 0 40 48" aria-hidden="true"><defs><clipPath id="top-bulb"><polygon points="9,6 31,6 20,24"/></clipPath><clipPath id="bottom-bulb"><polygon points="9,42 31,42 20,24"/></clipPath></defs><path d="M9 6 H31 L20 24 L31 42 H9 L20 24 Z" fill="#fffdf5" fill-opacity="0.35" stroke="#55402e" stroke-width="2.5" stroke-linejoin="round"/><rect id="sand-top" x="9" y="6" width="22" height="18" fill="#e8b64c" clip-path="url(#top-bulb)"/><rect id="sand-bottom" x="9" y="42" width="22" height="0" fill="#e8b64c" clip-path="url(#bottom-bulb)"/><line class="sand-stream" x1="20" y1="24" x2="20" y2="30" stroke="#e8b64c" stroke-width="1.6" stroke-linecap="round"/><circle class="grain" cx="20" cy="22" r="1.3" fill="#e8b64c"/><circle class="grain grain-2" cx="20" cy="22" r="1" fill="#e8b64c"/><circle class="grain grain-3" cx="20" cy="22" r="1.1" fill="#e8b64c"/><line x1="6" y1="6" x2="34" y2="6" stroke="#55402e" stroke-width="3.5" stroke-linecap="round"/><line x1="6" y1="42" x2="34" y2="42" stroke="#55402e" stroke-width="3.5" stroke-linecap="round"/></svg></div></div><div class="tutorial-bubble" id="tutorial-bubble"><button class="bubble-close" id="bubble-close" aria-label="Dismiss tip">×</button><b>Pumpkin says:</b> <span id="tutorial-text"></span></div><div class="flight-readout panel"><span><b id="speed-value">0</b> m/s</span><span class="satchel-readout">Satchel <b id="flight-earnings">0</b></span></div></section>
<section class="pause-card panel menu-card" id="pause-card"><div class="eyebrow">${wn("star")} TAKING A BREATHER<button id="mute-btn-pause" class="icon-button icon-button-sm" aria-label="Mute audio" style="margin-left:auto">${wn("sound")}</button></div><h2>The sky will wait.</h2><p id="pause-reason"></p><p class="key-hint desktop-hint">When you return: <kbd>WASD</kbd> or arrows to steer · <kbd>Q</kbd>/<kbd>E</kbd> for speed</p><p class="key-hint touch-hint">When you return: touch anywhere to fly · release the stick to slow down</p><button id="resume-btn" class="primary-button">Continue flying <span>→</span></button><button id="unstuck-btn" class="secondary-button">Unstuck me</button></section></main>`;const n=r=>t.querySelector(`#${r}`);["title-card","offers-card","summary-card","flight-hud","pause-card","hourglass","sand-top","sand-bottom","pause-reason","target-name","target-distance","target-arrow","target-label","tutorial-bubble","tutorial-text","bubble-close","speed-value","flight-earnings","coin-counter","coin-count","coin-layer","mute-btn-title","mute-btn-pause","pause-btn","resume-btn","unstuck-btn","offer-list","return-home-btn","offer-earnings","offer-banked","summary-heading","summary-copy","summary-deliveries","summary-earnings","next-day-btn","start-btn"].forEach(r=>this.el[r]=n(r));const s=(r,o)=>n(r).onclick=a=>{o(),a.currentTarget.blur()};s("start-btn",e.start),s("pause-btn",e.pause),s("resume-btn",e.resume),s("unstuck-btn",e.unstuck),s("mute-btn-title",e.mute),s("mute-btn-pause",e.mute),n("bubble-close").onclick=r=>{this.tip=Vp(this.tip),this.el["tutorial-bubble"].hidden=!0,r.currentTarget.blur()},s("return-home-btn",()=>{var r;return(r=e.returnHome)==null?void 0:r.call(e)}),s("next-day-btn",()=>{var r;return(r=e.nextDay)==null?void 0:r.call(e)}),n("fullscreen-btn").onclick=e.fullscreen,n("offer-list").onclick=r=>{var a;const o=r.target.closest("[data-job]");o&&((a=e.chooseJob)==null||a.call(e,+o.dataset.job),o.blur())}}coinCounterPosition(){const t=this.el["coin-counter"];if(!t||t.hidden)return null;const e=t.getBoundingClientRect();return{x:e.left+e.width/2,y:e.top+e.height/2}}render(t,e){var v,p,m,M;const n=["offers","summary"].includes(t.mode),s=t.mode==="title",r=!s&&t.paused;if(this.el["title-card"].hidden=!s,this.el["offers-card"].hidden=t.mode!=="offers"||r,this.el["summary-card"].hidden=t.mode!=="summary"||r,this.el["flight-hud"].hidden=s||n||r,this.el["pause-card"].hidden=!r,e.timeRemaining!==void 0){const y=Math.max(0,Math.min(1,e.timeRemaining/360));this.el["sand-top"].setAttribute("height",(18*y).toFixed(1));const _=18*(1-y);this.el["sand-bottom"].setAttribute("height",_.toFixed(1)),this.el["sand-bottom"].setAttribute("y",(42-_).toFixed(1))}this.el.hourglass.classList.toggle("pulse",e.timeRemaining!==void 0&&e.timeRemaining<=60),this.el.hourglass.classList.toggle("empty",e.timeRemaining!==void 0&&e.timeRemaining<=0),this.el["start-btn"].innerHTML=`${t.profile.tutorialDone?"Start a delivery day":"Learn to fly"} <span>→</span>`,this.el["target-name"].textContent=e.targetName,this.el["target-distance"].textContent=e.targetDistance>0?`${Math.round(e.targetDistance)} m away`:"Right here",this.el["target-label"].textContent=(v=t.run)!=null&&v.returning?"Return home":"Next delivery",this.el["target-arrow"].style.transform=`rotate(${e.targetBearing??0}deg)`,this.el["speed-value"].textContent=String(Math.round(e.speed));for(const y of["mute-btn-title","mute-btn-pause"]){const _=this.el[y];_.classList.toggle("is-muted",e.muted),_.setAttribute("aria-label",e.muted?"Unmute audio":"Mute audio"),_.innerHTML=wn(e.muted?"sound-off":"sound")}this.el["tutorial-text"].textContent=e.status||t.message||"Let’s take the scenic route!";const o=e.status||t.message||"",a=Gp(this.tip,t.mode,t.tutorialStage,e.status,o,e.timeRemaining);this.tip=a.next,this.el["tutorial-bubble"].hidden=a.hidden,this.el["flight-earnings"].textContent=es(((p=t.run)==null?void 0:p.earnings)??0),this.el["offer-earnings"].textContent=es(((m=t.run)==null?void 0:m.earnings)??0),this.el["offer-banked"].textContent=es(t.profile.coins),this.renderOffers(t);const c=((M=t.run)==null?void 0:M.earnings)??0,l=typeof performance<"u"?performance.now():Date.now();if(t.run&&c>this.lastEarnings){const y=c-this.lastEarnings,_=this.coinCounterPosition();if(_){let T={x:window.innerWidth/2,y:window.innerHeight*.7};const E=Te.find(b=>b.id===t.run.lastStop);if(E&&e.project){const b=e.project(E.position.x,E.position.y??0,E.position.z);b&&(T=b)}this.coinRemainder=this.coinAnim.spawn(T,_,y,l)}else this.displayedCoins=c}else c<this.displayedCoins&&(this.displayedCoins=c,this.coinAnim=new gh,this.coinRemainder=0);this.lastEarnings=c;const h=this.coinAnim.update(l);if(h>0){this.displayedCoins+=h;const y=this.el["coin-counter"];y.classList.remove("coin-pop"),y.offsetWidth,y.classList.add("coin-pop")}this.coinRemainder>0&&this.coinAnim.activeCount===0&&(this.displayedCoins+=this.coinRemainder,this.coinRemainder=0),this.displayedCoins!==this.lastCoinCount&&(this.lastCoinCount=this.displayedCoins,this.el["coin-count"].textContent=String(Math.max(0,Math.round(this.displayedCoins))));const d=this.el["coin-layer"],u=this.coinAnim.positions(l);for(;d.children.length<u.length;){const y=document.createElement("span");y.className="coin-sprite",y.textContent="●",d.appendChild(y)}for(;d.children.length>u.length;)d.removeChild(d.lastChild);u.forEach((y,_)=>{const T=d.children[_];T.style.transform=`translate(${y.x}px,${y.y}px)`});const f=t.summary,g=(f==null?void 0:f.success)??!1;this.el["summary-heading"].textContent=g?"A lovely landing.":"Rescued from nightfall.",this.el["summary-copy"].textContent=g?`You banked ${es((f==null?void 0:f.earnings)??0)} after ${(f==null?void 0:f.deliveries)??0} deliveries.`:"The unbanked satchel was lost, but tomorrow brings another chance.",this.el["summary-deliveries"].textContent=String((f==null?void 0:f.deliveries)??0),this.el["summary-earnings"].textContent=es((f==null?void 0:f.earnings)??0),this.el["next-day-btn"].innerHTML=`${g?"Another day":"Back home"} <span>→</span>`,this.previousRevision!==t.revision&&(this.el["pause-reason"].textContent=t.pauseReason||"Rest your wings whenever you need.",this.previousRevision=t.revision)}renderOffers(t){var s,r;if(t.mode!=="offers")return;this.el["return-home-btn"].hidden=(((s=t.run)==null?void 0:s.deliveries)??0)===0;const e=(((r=t.run)==null?void 0:r.offers)??[]).slice(0,2),n=e.map(o=>`${o.to}:${o.parcel}:${o.payout}`).join("|");n!==this.offersKey&&(this.offersKey=n,this.el["offer-list"].innerHTML=e.map((o,a)=>{const c=Te.find(h=>h.id===o.to),l=c?Math.hypot(c.position.x-t.player.position.x,c.position.z-t.player.position.z):0;return`<button class="offer-button" data-job="${a}"><span><b>${(c==null?void 0:c.name)??o.to}</b><small>${l<115?"Short":"Long"} route · ${o.parcel} · ${Math.round(l)} m</small></span><strong>${es(o.payout)} <i>→</i></strong></button>`}).join(""))}}function Xp(i){let t=i>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const qp=.5*(Math.sqrt(3)-1),Vs=(3-Math.sqrt(3))/6;class Cd{constructor(t){G(this,"perm");const e=Xp(t),n=new Uint8Array(256);for(let s=0;s<256;s++)n[s]=s;for(let s=255;s>0;s--){const r=Math.floor(e()*(s+1));[n[s],n[r]]=[n[r],n[s]]}this.perm=new Uint8Array(512);for(let s=0;s<512;s++)this.perm[s]=n[s&255]}noise(t,e){const n=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]];let s=0,r=0,o=0;const a=(t+e)*qp,c=Math.floor(t+a),l=Math.floor(e+a),h=(c+l)*Vs,d=t-(c-h),u=e-(l-h);let f,g;d>u?(f=1,g=0):(f=0,g=1);const v=d-f+Vs,p=u-g+Vs,m=d-1+2*Vs,M=u-1+2*Vs,y=c&255,_=l&255;let T=.5-d*d-u*u;if(T>=0){T*=T;const x=n[this.perm[y+this.perm[_]]&7];s=T*T*(x[0]*d+x[1]*u)}let E=.5-v*v-p*p;if(E>=0){E*=E;const x=n[this.perm[y+f+this.perm[_+g]]&7];r=E*E*(x[0]*v+x[1]*p)}let b=.5-m*m-M*M;if(b>=0){b*=b;const x=n[this.perm[y+1+this.perm[_+1]]&7];o=b*b*(x[0]*m+x[1]*M)}return 70*(s+r+o)}}const Rd=1337,Yp=new Cd(Rd),nc=new Cd(Rd+1);function Pd(i,t,e=5){let n=0,s=.5,r=1;for(let o=0;o<e;o++)n+=s*Yp.noise(i*r,t*r),s*=.5,r*=2;return n}function $p(i,t,e,n){const s=nc.noise(i*e+5.2,t*e+1.3),r=nc.noise(i*e+1.7,t*e+9.1);return[i+s*n,t+r*n]}function Dn(i,t,e){const n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)}const ul=[{name:"waterfront",y:0,rects:[[-95,-15,5,175],[50,-35,150,175]]},{name:"midtown",y:10,rects:[[-115,-135,75,-15]]},{name:"upper",y:20,rects:[[-135,-215,135,-135],[55,-135,155,-35]]}];function Ui(i,t){const e=175+nc.noise(i*.01+3.7,8.2)*35,n=Dn(e-15,e+45,t);let s=0;rn(i,t)?s=t<e+25?1:0:(rn(i+6,t)||rn(i-6,t)||rn(i,t+6)||rn(i,t-6))&&t<e+20&&(s=.45);const[r,o]=$p(i,t,.015,18),a=(Pd(r*.02,o*.02)*.5+.5)*8,c=Math.hypot(i,t),l=Dn(145,175,c),h=a*l*(1-s);let d=0,u=0;for(const m of ul)for(const[M,y,_,T]of m.rects){const E=Dn(M-20,M+20,i)*(1-Dn(_-20,_+20,i)),b=Dn(y-20,y+20,t)*(1-Dn(T-20,T+20,t)),x=E*b;x>u&&(u=x,d=m.y)}const f=s<.5&&n<.5?1:0,g=d*u+h*(1-u),v=h*(1-f)+g*f,p=Math.min(s*-3.5,n*-12);return{h:v+p,bayT:s,oceanT:n,tierCover:u}}function Me(i,t){return Ui(i,t).h}const Zp=[.918,.851,.659],Kp=[.498,.682,.431],xh=[.541,.498,.447],Jp=[.72,.68,.52];function Ur(i,t,e){return[i[0]+(t[0]-i[0])*e,i[1]+(t[1]-i[1])*e,i[2]+(t[2]-i[2])*e]}function vh(i,t){const{h:e,bayT:n,oceanT:s,tierCover:r}=Ui(i,t);if(e<.2||e>4.5&&r<.5||n>0||s>.05)return!1;const o=1.5,a=(Ui(i+o,t).h-Ui(i-o,t).h)/(2*o),c=(Ui(i,t+o).h-Ui(i,t-o).h)/(2*o);return!(Math.hypot(a,c)>.5)}function Qp(i){const t=new Float32Array(i*i),e=new Float32Array(i*i),n=new Float32Array(i*i),s=new Float32Array(i*i),r=440/(i-1);for(let a=0;a<i;a++)for(let c=0;c<i;c++){const l=(c/(i-1)-.5)*440,h=(.5-a/(i-1))*440,d=Ui(l,h),u=a*i+c;t[u]=d.h,e[u]=d.bayT,n[u]=d.oceanT,s[u]=d.tierCover}const o=new Uint8ClampedArray(i*i*4);for(let a=0;a<i;a++)for(let c=0;c<i;c++){const l=a*i+c,h=(c/(i-1)-.5)*440,d=(.5-a/(i-1))*440,u=Math.max(1,Math.round(1.5/r)),f=t[a*i+Math.max(c-u,0)],g=t[a*i+Math.min(c+u,i-1)],v=t[Math.max(a-u,0)*i+c],p=t[Math.min(a+u,i-1)*i+c],m=Math.hypot((g-f)/(2*u*r),(p-v)/(2*u*r)),[M,y,_]=jp(t[l],e[l],n[l],m,h,d,s[l]),T=l*4;o[T]=M,o[T+1]=y,o[T+2]=_,o[T+3]=255}return o}function jp(i,t,e,n,s,r,o){const a=Math.max(t,Dn(.02,.25,e));let c=Ur(Kp,xh,Dn(3,5.5,i)*(1-o));c=Ur(c,Zp,a*Dn(-1.5,-.3,i));const l=Dn(-.8,-1.6,i);c=Ur(c,Jp,l);const h=Dn(.45,.75,n);h>0&&(c=Ur(c,xh,h));const d=1+Pd(s*.08+11.3,r*.08+7.9,3)*.07;return[Math.round(c[0]*d*255),Math.round(c[1]*d*255),Math.round(c[2]*d*255)]}const Ft=(i,t,e,n,s)=>({id:i,x:t,z:e,y:n,noIntersect:s}),dl=[Ft("ww1",-75,10),Ft("ww2",-75,70),Ft("ww3",-75,130),Ft("ww1b",-35,10),Ft("ww2b",-35,70),Ft("ww3b",-35,130),Ft("we1",85,-10),Ft("we2",85,50),Ft("we3",85,85),Ft("we1b",120,-10),Ft("we2b",120,50),Ft("bl-w",-15,100,6),Ft("bl-e",73,100,6),Ft("sw1",-75,-8),Ft("sw2",-95,-25),Ft("sw3",-65,-42),Ft("sw4",-90,-58),Ft("se1",85,-28),Ft("se2",105,-45),Ft("se3",75,-60),Ft("se4",95,-75),Ft("m1",-60,-72),Ft("m2",-20,-72),Ft("m3",20,-72),Ft("m4",60,-72),Ft("m5",-60,-105),Ft("m6",-20,-105),Ft("m7",20,-105),Ft("m8",60,-105),Ft("uc1",20,-120),Ft("uc2",-5,-135),Ft("uc3",15,-150),Ft("uc2sb1",25,-137,void 0,!0),Ft("uc2sb2",-5,-147,void 0,!0),Ft("u1",-90,-160),Ft("u2",-30,-160),Ft("u3",30,-160),Ft("u4",90,-160),Ft("u5",90,-195),Ft("u6",30,-195),Ft("u7",-30,-195),Ft("u8",-90,-195),Ft("ob1",95,-100),Ft("ob2",110,-70),Ft("mn1",-100,-25),Ft("mn2",-68,-25),Ft("mn3",-20,-25),Ft("mn4",20,-25),Ft("mn5",60,-25),Ft("ms1",-100,-120),Ft("ms2",-60,-120),Ft("ms3",-20,-120),Ft("ms5",60,-120),Ft("ue1",100,-160),Ft("ue2",100,-195),Ft("ui5",130,-160),Ft("ob3",125,-100),Ft("wx1",-25,10),Ft("wx2",-25,70),Ft("wx3",-15,130),Ft("ex1",65,-10),Ft("ex2",65,50),Ft("ex3",65,110,0)],Et=(i,t,e="street",n)=>({a:i,b:t,kind:e,deckY:n}),Ge=[Et("ww1","ww2"),Et("ww2","ww3"),Et("ww1b","ww2b"),Et("ww2b","ww3b"),Et("ww1","ww1b"),Et("ww2","ww2b"),Et("ww3","ww3b"),Et("we1","we2"),Et("we2","we3"),Et("we1b","we2b"),Et("we1","we1b"),Et("we2","we2b"),Et("wx2","bl-w"),Et("bl-w","bl-e","bridge",6),Et("bl-e","we3"),Et("ww1","sw1","switchback"),Et("sw1","sw2","switchback"),Et("sw2","sw3","switchback"),Et("sw3","sw4","switchback"),Et("sw4","m1","switchback"),Et("we1","se1","switchback"),Et("se2","se3","switchback"),Et("se3","se4","switchback"),Et("se4","m4","switchback"),Et("m1","m2"),Et("m2","m3"),Et("m3","m4"),Et("m5","m6"),Et("m6","m7"),Et("m7","m8"),Et("m1","m5"),Et("m2","m6"),Et("m3","m7"),Et("m4","m8"),Et("m3","uc1","switchback"),Et("uc1","uc2","switchback"),Et("uc2","uc2sb1","switchback"),Et("uc2sb1","uc2sb2","switchback"),Et("uc2sb2","uc3","switchback"),Et("uc3","u3","switchback"),Et("se4","ob1"),Et("ob1","ob2"),Et("mn1","mn2"),Et("mn2","mn3"),Et("mn3","mn4"),Et("mn4","mn5"),Et("mn5","se1"),Et("mn5","m4"),Et("ms1","ms2"),Et("ms3","uc1"),Et("uc1","ms5"),Et("ms2","m5"),Et("uc1","m7"),Et("u1","u2"),Et("u2","u3"),Et("u3","u4"),Et("u4","u5"),Et("u5","u6"),Et("u6","u7"),Et("u7","u8"),Et("u8","u1"),Et("u4","ue1"),Et("ue1","ue2"),Et("ue2","u5"),Et("u4","ui5"),Et("ob1","ob3"),Et("wx1","wx2"),Et("wx2","wx3"),Et("ww1b","wx1"),Et("ww2b","wx2"),Et("ww3b","wx3"),Et("ex1","ex2"),Et("ex2","ex3"),Et("we1","ex1"),Et("we2","ex2")];Ge.filter(i=>i.kind==="bridge").map(i=>[i.a,i.b]);function pe(i){const t=dl.find(e=>e.id===i);if(!t)throw new Error(`unknown road node ${i}`);return t}function Oe(i){return{x:i.x,y:i.y??Me(i.x,i.z),z:i.z}}function tm(){const i=new Map;for(const t of dl)i.set(t.id,[]);for(const t of Ge)i.get(t.a).push(t.b),i.get(t.b).push(t.a);return i}const em=1836670420,nm=110,dr=32,im=.07;function hn(i){let t=i>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function sm(i){const t=hn(i),e=[];for(let n=0;n<nm;n++){const s=t()*im,r=t()*dr,o=t()*dr;e.push({x:r,y:o,alpha:s})}return e}const rm=20260927,_h=5;function Ao(i,t,e,n){const s=i+e/2,r=t+n/2,o=[Me(i,t),Me(i+e,t),Me(i,t+n),Me(i+e,t+n),Me(s,r)],a=Math.min(...o);return a<ic?null:{minH:a,maxH:Math.max(...o)}}const yh={harbor:{w:[9,16],d:[8,14],floors:[1,2],bayWindow:!1,palettes:[0]},"old-town":{w:[8,14],d:[8,12],floors:[2,4],bayWindow:!0,palettes:[0]},"merchant-row":{w:[8,14],d:[8,12],floors:[2,3],bayWindow:!0,palettes:[0]},"bungalow-lanes":{w:[8,12],d:[8,12],floors:[1,1],bayWindow:!1,palettes:[1,2,3,4]}},ic=-.4,om=2.8,am=.7,Qn=om+am,Fr=2,ns=275,Mh=3.4,bh=4.4;function di(i,t,e,n,s,r,o,a){return i<o&&e>s&&t<a&&n>r}function rr(i,t,e,n,s,r,o,a){const c=e-i,l=n-t,h=o-s,d=a-r,u=c*d-l*h;if(Math.abs(u)<1e-9)return!1;const f=((s-i)*d-(r-t)*h)/u,g=((s-i)*l-(r-t)*c)/u;return f>=0&&f<=1&&g>=0&&g<=1}function Sh(i,t,e,n,s,r,o,a){return i>=s&&i<=o&&t>=r&&t<=a||e>=s&&e<=o&&n>=r&&n<=a?!0:rr(i,t,e,n,s,r,o,r)||rr(i,t,e,n,o,r,o,a)||rr(i,t,e,n,o,a,s,a)||rr(i,t,e,n,s,a,s,r)}function sa(i,t,e,n,s,r){const o=s-e,a=r-n,c=o*o+a*a,l=c>0?Math.max(0,Math.min(1,((i-e)*o+(t-n)*a)/c)):0,h=e+o*l-i,d=n+a*l-t;return h*h+d*d}function cm(i,t,e,n,s,r,o,a){const c=[[s,r,o,r],[o,r,o,a],[o,a,s,a],[s,a,s,r]];if(i>=s&&i<=o&&t>=r&&t<=a||e>=s&&e<=o&&n>=r&&n<=a)return 0;for(const[h,d,u,f]of c)if(rr(i,t,e,n,h,d,u,f))return 0;let l=1/0;for(const[h,d]of[[s,r],[o,r],[o,a],[s,a]])l=Math.min(l,sa(h,d,i,t,e,n));for(const[h,d,u,f]of c)l=Math.min(l,sa(i,t,h,d,u,f)),l=Math.min(l,sa(e,n,h,d,u,f));return Math.sqrt(l)}function wh(i,t){for(const e of ul)for(const[n,s,r,o]of e.rects)if(i>=n&&i<r&&t>=s&&t<o)return e}function Eh(i,t,e,n,s,r,o){const a=Math.max(n,Math.min(i,r)),c=Math.max(s,Math.min(t,o)),l=i-a,h=t-c;return l*l+h*h<e*e}function Co(){const i=hn(rm),t=[],e=on.map(h=>({x0:h.min.x-Fr,z0:h.min.z-Fr,x1:h.max.x+Fr,z1:h.max.z+Fr})),n=on[3],s=(n.min.x+n.max.x)/2,r=(n.min.z+n.max.z)/2,o=26,a=Ge.filter(h=>h.kind!=="bridge").map(h=>{const d=pe(h.a),u=pe(h.b);return{x0:d.x,z0:d.z,x1:u.x,z1:u.z}});let c=0;for(const h of Ge){if(h.kind==="bridge")continue;const d=pe(h.a),u=pe(h.b),f=u.x-d.x,g=u.z-d.z,v=Math.hypot(f,g);if(v<10)continue;const p=f/v,m=g/v,M=-m,y=p;let _=5;for(;_<v-5&&t.length<ns;){const T=d.x+p*_,E=d.z+m*_,b=wh(T,E);if(!b){_+=6;continue}const x=b.name==="waterfront"?"harbor":b.name==="midtown"?"midtown-mix":"bungalow-lanes",w=x==="midtown-mix"?c%2===0?"old-town":"merchant-row":x,A=yh[w],C=A.w[0]+i()*(A.w[1]-A.w[0]),L=A.d[0]+i()*(A.d[1]-A.d[0]),N=A.floors[0]+Math.floor(i()*(A.floors[1]-A.floors[0]+1)),F=A.palettes[Math.floor(i()*A.palettes.length)],P=i()<.5?1:-1,z=(C*Math.abs(p)+L*Math.abs(m))/2,U=(C*Math.abs(M)+L*Math.abs(y))/2;for(const B of[P,-P]){if(t.length>=ns)break;let W=!1;for(const j of[.5,2.5,4.5,6.5,8.5]){if(W||t.length>=ns)break;const X=Qn+U+j,et=T+M*B*X,Nt=E+y*B*X,It=et-C/2,Mt=Nt-L/2;if(!wh(et,Nt)||Me(et,Nt)<ic||rn(It,Mt)||rn(It+C,Mt)||rn(It,Mt+L)||rn(It+C,Mt+L))continue;const Z=Ao(It,Mt,C,L);if(!Z||Z.maxH-Z.minH>_h||di(It,Mt,It+C,Mt+L,me[0],me[1],me[2],me[3])||ki.some(dt=>di(It,Mt,It+C,Mt+L,dt[0],dt[1],dt[2],dt[3]))||Eh(s,r,o,It,Mt,It+C,Mt+L)||e.some(dt=>di(It,Mt,It+C,Mt+L,dt.x0,dt.z0,dt.x1,dt.z1))||t.some(dt=>di(It,Mt,It+C,Mt+L,dt.x,dt.z,dt.x+dt.w,dt.z+dt.d)))continue;const lt=It-Qn,st=Mt-Qn,pt=It+C+Qn,Ct=Mt+L+Qn;a.some(dt=>Sh(dt.x0,dt.z0,dt.x1,dt.z1,lt,st,pt,Ct))||(x==="midtown-mix"&&c++,t.push({x:It,z:Mt,w:C,d:L,h:Math.max(N*Mh,bh),floors:N,district:w,bayWindow:A.bayWindow,palette:F}),W=!0)}}_+=2*z+2}}const l=4;for(const h of ul)for(const[d,u,f,g]of h.rects){const v=h.name==="waterfront"?"harbor":h.name==="midtown"?"midtown-mix":"bungalow-lanes";for(let p=d+l/2;p<f&&t.length<ns;p+=l)for(let m=u+l/2;m<g&&t.length<ns;m+=l)for(let M=0;M<9&&t.length<ns;M++){const y=(i()-.5)*l*.9,_=(i()-.5)*l*.9,T=v==="midtown-mix"?c%2===0?"old-town":"merchant-row":v,E=yh[T],b=E.w[0]+i()*(E.w[1]-E.w[0]),x=E.d[0]+i()*(E.d[1]-E.d[0]),w=E.floors[0]+Math.floor(i()*(E.floors[1]-E.floors[0]+1)),A=E.palettes[Math.floor(i()*E.palettes.length)],C=p+y,L=m+_,N=C-b/2,F=L-x/2;let P=!1;for(const X of a)if(cm(X.x0,X.z0,X.x1,X.z1,N,F,N+b,F+x)<=15){P=!0;break}if(!P||Me(C,L)<ic||rn(N,F)||rn(N+b,F)||rn(N,F+x)||rn(N+b,F+x))continue;const z=Ao(N,F,b,x);if(!z||z.maxH-z.minH>_h||di(N,F,N+b,F+x,me[0],me[1],me[2],me[3])||ki.some(X=>di(N,F,N+b,F+x,X[0],X[1],X[2],X[3]))||Eh(s,r,o,N,F,N+b,F+x)||e.some(X=>di(N,F,N+b,F+x,X.x0,X.z0,X.x1,X.z1))||t.some(X=>di(N,F,N+b,F+x,X.x,X.z,X.x+X.w,X.z+X.d)))continue;const U=N-Qn,B=F-Qn,W=N+b+Qn,j=F+x+Qn;a.some(X=>Sh(X.x0,X.z0,X.x1,X.z1,U,B,W,j))||(v==="midtown-mix"&&c++,t.push({x:N,z:F,w:b,d:x,h:Math.max(w*Mh,bh),floors:w,district:T,bayWindow:E.bayWindow,palette:A}))}}return t}function Id(i){return i.map(t=>{const e=Ao(t.x,t.z,t.w,t.d),n=e?e.maxH:Me(t.x+t.w/2,t.z+t.d/2);return{min:{x:t.x,y:n,z:t.z},max:{x:t.x+t.w,y:n+t.h,z:t.z+t.d},district:t.district}})}const qe=1,lm=3,hm=100,um=18,dm=2.2,fm=7,pm=12,mm=Id(Co()),Ld=[...on,...mm,...lp,...hp],gm=5,xm=.5,En=360,vm=3.5,Dd=.9,Nd=.45,_m=3.5,ym=1.5,Mm=3,bm=.8,Th=.2,Sm=3,wm=8,Em=2,Ud=6;function Tm(i,t){return Math.max(Ud,gm+xm*i)*(1+t*.2)}const Ah=2,Am=20,Cm=.05,Fd=.5,zd=3.6,Wn=(i,t,e)=>Math.max(t,Math.min(e,i)),sc=i=>{const t=Wn(i,0,1);return t*t*(3-2*t)},Ch=45;function Rm(i,t){const e=Math.hypot(i.x,i.z),n=ir-qe-Ch;if(e<=n)return;const s=sc((e-n)/Ch),r=i.x/e,o=i.z/e,a=t.x*r+t.z*o;if(a<=0)return;const c=a*(1-s);t.x+=r*(c-a),t.z+=o*(c-a)}const Pm=i=>Math.hypot(i.x,i.y,i.z);function fl(i=Te[0].position){return{position:{...i},yaw:0,pitch:0,speed:9,throttle:9,hover:!1,velocity:{x:0,y:0,z:-9},brakeHold:!1}}function fr(){return{mode:"title",player:fl(),profile:{coins:0,upgrades:{speed:0,handling:0,braking:0,capacity:0,glide:0,capstones:{}},furniture:[],tutorialDone:!1,runs:0,deliveries:0},run:null,paused:!1,pauseReason:"",message:"",tutorialStage:0,drop:null,descent:null,haloFade:0,homePosition:{x:0,z:3},homeFacing:0,homePanel:"none",homeSitting:!1,petCount:0,summary:null,revision:0,seed:Math.floor(Math.random()*2147483647),coarsePointer:!1}}function Im(i){i.mode="tutorial",i.paused=!1,i.pauseReason="",i.player=fl(),i.tutorialStage=0,i.drop=null,i.descent=null,i.haloFade=0,i.message="Steer toward the glowing Harbor Cafe pad.",i.revision++}function Lm(i){i.paused||i.mode!=="tutorial"&&i.mode!=="flight"||(i.player.hover=!i.player.hover,i.revision++)}function rc(i,t,e=""){i.paused=t,i.pauseReason=t?e:"",i.revision++}function Ro(i){const t=i.player;if(!(t.speed>=vm))return Te.find(e=>{const n=t.position.x-e.position.x,s=t.position.z-e.position.z;return Math.hypot(n,s)<=zd&&t.position.y>=e.position.y})}function Rh(i){var e;if(i.paused)return;if(i.mode==="home"){pp(i);return}if(i.drop||i.descent||i.haloFade>0)return;if(i.mode==="tutorial"){if(((e=Ro(i))==null?void 0:e.id)!=="harbor-cafe")return;oc(i,Te.find(n=>n.id==="harbor-cafe"));return}if(i.mode!=="flight"||!i.run)return;if(i.run.elapsed>=En){yr(i,!1);return}const t=Ro(i);t&&oc(i,t)}function Dm(i,t){i.player.brakeHold=!1,i.haloFade=0,i.drop={stopId:t.id,t:0,parcel:t.id!=="home"},Od(i),i.message=t.id==="home"?"Banking your earnings…":"Parcel away!",i.revision++}function Od(i){i.player.speed=0,i.player.hover=!0,i.player.velocity={x:0,y:0,z:0}}function Nm(i,t){var s;if(i.player.hover=!1,i.player.throttle=0,i.mode==="tutorial"){i.profile.tutorialDone=!0,i.message="Practice complete",i.mode="title",i.tutorialStage=3,i.revision++;return}const e=i.run;if(!e||e.elapsed>=En){yr(i,!1);return}const n=Te.find(r=>r.id===t);if(n){if(n.id==="home"){const r=e.earnings,o=e.deliveries;yr(i,!0),i.summary=null,tc(i),i.message=`Shift complete — banked ${r} coins after ${o} ${o===1?"delivery":"deliveries"}.`;return}((s=e.job)==null?void 0:s.to)===n.id&&(e.earnings+=e.job.payout,e.deliveries++,i.profile.deliveries++,e.job=null,e.lastStop=n.id,e.recentStops=[...e.recentStops,n.id].slice(-3),e.offers=Bd(e.seed,e.deliveries,n.id,e.recentStops,Hd(i)),e.returning=!1,i.mode="offers",i.message="Delivered! Choose the next parcel or return home.",i.revision++)}}function Um(i,t=Date.now()){if(i.paused||i.run||i.mode!=="title"&&i.mode!=="summary"&&i.mode!=="home")return;const e=Number.isFinite(t)?Math.floor(t):Date.now();i.player=fl(),i.run={seed:e,elapsed:0,earnings:0,deliveries:0,job:null,offers:Bd(e,0,"home",[],Hd(i)),returning:!1,lastStop:"home",recentStops:[]},i.summary=null,i.homePanel="none",i.drop=null,i.descent=null,i.haloFade=0,i.mode="offers",i.message="Choose your first delivery of the day.",i.revision++}function Fm(i,t){if(i.paused||i.mode!=="offers"||!i.run||!Number.isInteger(t))return;const e=i.run.offers[t];e&&(i.run.job=e,i.run.offers=[],i.run.returning=!1,i.mode="flight",i.message=`Delivery: ${km(e.to)}.`,i.revision++)}function zm(i){i.paused||i.mode!=="offers"||!i.run||i.run.deliveries===0||(i.run.job=null,i.run.offers=[],i.run.returning=!0,i.mode="flight",i.message="Return to Meg's Rooftop to bank your earnings.",i.revision++)}function yr(i,t){const e=i.run;if(!e)return;i.drop=null,i.descent=null,i.haloFade=0;const n=t?e.earnings:0;i.summary={success:t,earnings:n,deliveries:e.deliveries},t&&(i.profile.coins+=n),i.profile.runs++,i.run=null,i.mode="summary",i.player.speed=0,i.player.throttle=0,i.player.hover=!0,i.player.velocity={x:0,y:0,z:0},i.message=t?"Shift complete. Earnings banked!":"Rescue called. Unbanked earnings were lost.",i.revision++}function kd(i){if(i.mode==="tutorial")return Te.find(t=>t.id==="harbor-cafe");if(i.run)return Te.find(t=>{var e;return t.id===(i.run.returning?"home":(e=i.run.job)==null?void 0:e.to)})}function Om(i,t,e){return(Math.atan2(t.x-i.x,-(t.z-i.z))-e)*180/Math.PI}function km(i){var t;return((t=Te.find(e=>e.id===i))==null?void 0:t.name)??i}function Ko(i){if(!(i.drop||i.descent)&&!(i.mode!=="tutorial"&&i.mode!=="flight"))return kd(i)}function is(i){let t=i|0;return t=Math.imul(t^t>>>16,73244475),t=Math.imul(t^t>>>16,73244475),(t^t>>>16)>>>0}function Bm(i){let t=0;for(let e=0;e<i.length;e++)t=Math.imul(t^i.charCodeAt(e),1540483477),t^=t>>>13;return t>>>0}function Bd(i,t,e,n,s=2){let r=is(i^is(t)^Bm(e));const o=Te.find(b=>b.id===e),a=new Set(["home",e,...n]),c=Te.filter(b=>!a.has(b.id)).map(b=>({stop:b,distance:Math.hypot(b.position.x-o.position.x,b.position.z-o.position.z)})),l=c.filter(b=>b.distance<130),h=c.filter(b=>b.distance>=130&&b.distance<=260),d=c.filter(b=>b.distance>260),u=[{name:"Short hop",items:l},{name:"Medium run",items:h},{name:"Long haul",items:d}].filter(b=>b.items.length>0),f=(b,x)=>(r=is(r+x),b[r%b.length]);r=is(r+1);const g=r%u.length;let v=g;if(u.length>1){let b=0;for(;v===g;)b++,r=is(r+2+b),v=r%u.length}const p=f(u[g].items,10);if(c.length===1){const b=w=>w<130?20:w<=260?35:50,x=p.distance<130?"Short hop":p.distance<=260?"Medium run":"Long haul";return[{from:e,to:p.stop.id,payout:b(p.distance),label:x,parcel:"Delivery parcel"}]}let m=f(u[v].items,20);if(m.stop.id===p.stop.id){const b=u[v].items.filter(x=>x.stop.id!==p.stop.id);if(b.length>0)m=f(b,30);else{const x=u.filter((w,A)=>A!==v&&w.items.length>0);x.length>0&&(m=f(x[0].items,30))}}const M=[p,m],y=new Set(M.map(b=>b.stop.id)),_=new Set([g,v]);let T=0;for(;M.length<s&&T<s*20;){T++,r=is(r+100+T);const b=r%u.length;if(_.has(b)&&_.size<u.length)continue;_.add(b);const x=u[b].items.filter(C=>!y.has(C.stop.id)),w=x.length>0?x:c.filter(C=>!y.has(C.stop.id));if(w.length===0)break;const A=f(w,40+T*10);y.add(A.stop.id),M.push(A)}const E=b=>b<130?20:b<=260?35:50;return M.sort((b,x)=>b.distance-x.distance).map(({stop:b,distance:x})=>{const w=x<130?"Short hop":x<=260?"Medium run":"Long haul";return{from:e,to:b.id,payout:E(x),label:w,parcel:"Delivery parcel"}})}function Hd(i){const t=i.profile.upgrades;let e=2+t.capacity;return t.capstones.capacity==="deep-satchel"&&(e+=1),e}function Hm(i,t){const e=i.profile.upgrades,n=(l,h)=>e.capstones[l]===h,s=i.player;let r=um*(1+e.speed*.1);n("speed","tailwind")&&(r*=1.15),n("glide","dive-bomber")&&t<-5&&(r*=1.3);let o=dm*(1+e.handling*.2);s.speed>r*.5&&(o*=1+e.glide*.1),n("handling","tight-turns")&&(o*=1.25),n("glide","cloud-surfer")&&s.position.y>60&&(o*=1.25);let a=Tm(s.speed,e.braking);n("braking","quick-stop")&&(a*=1.3),s.hover&&n("handling","stable-hover")&&(a*=1.43);let c=pm;return n("speed","quickstart")&&(c*=1.3),{maxSpeed:r,turnRate:o,brakeRate:a,accel:c}}function Gm(i,t){let e;for(const n of Ld){const s={x:n.min.x-qe,y:n.min.y-qe,z:n.min.z-qe},r={x:n.max.x+qe,y:n.max.y+qe,z:n.max.z+qe};let o=-1e-9,a=1,c={x:0,y:0,z:0};for(const l of["x","y","z"]){const h=i[l],d=t[l];if(Math.abs(d)<1e-9){if(h<s[l]||h>r[l]){o=2;break}continue}const u=(s[l]-h)/d,f=(r[l]-h)/d,g=Math.min(u,f),v=Math.max(u,f);if(g>o&&(o=g,c={x:0,y:0,z:0},c[l]=u<f?-1:1),a=Math.min(a,v),o>a)break}o>=0&&o<=1&&o<=a&&(!e||o<e.t)&&(e={t:o,normal:c})}return e}function Gd(i,t){var e;return i.mode==="tutorial"?t.id==="harbor-cafe":i.mode!=="flight"||!i.run?!1:t.id==="home"?i.run.returning&&!i.run.job:((e=i.run.job)==null?void 0:e.to)===t.id}function Vm(i){if(i.drop||i.descent||i.haloFade>0||i.mode!=="tutorial"&&i.mode!=="flight"||Math.abs(i.player.speed)>Fd)return;const t=Ko(i),e=t?Ro(i):void 0;!e||e.id!==t.id||!Gd(i,e)||(i.haloFade=Nd)}function Wm(i){const t=Ko(i),e=t?Ro(i):void 0;!e||e.id!==t.id||!Gd(i,e)||Math.abs(i.player.speed)>Fd||oc(i,e)}function oc(i,t){const e=i.player.position.x-t.position.x,n=i.player.position.z-t.position.z,s=Math.hypot(e,n),r=Math.atan2(n,e),o=Math.atan2(-Math.sin(r),-Math.cos(r)),a=Math.abs(Math.atan2(Math.sin(o-i.player.yaw),Math.cos(o-i.player.yaw)));i.descent={stopId:t.id,startY:i.player.position.y,angle:r,radius0:s,orbitR:Math.max(s,Mm),dir:a<=Math.PI/2?1:-1,t:0},i.player.brakeHold=!1,Od(i),i.message="Descending…",i.revision++}function Xm(i,t,e){if(i.mode==="home"){gp(i,t,e);return}if(i.paused||i.mode!=="tutorial"&&i.mode!=="flight"&&i.mode!=="offers"||!Number.isFinite(e)||e<=0)return;if(i.drop){if(i.mode!=="flight"&&i.mode!=="tutorial")i.drop=null;else{if(i.drop.t+=Math.max(0,e),i.drop.t>=Dd){const N=i.drop.stopId;i.drop=null,Nm(i,N)}i.revision++}return}const n=Math.max(0,e);if(i.haloFade>0&&(i.haloFade=Math.max(0,i.haloFade-n),i.haloFade===0&&Wm(i),i.revision++,i.haloFade>0||i.drop||i.descent))return;if(i.descent){const N=Te.find(F=>F.id===i.descent.stopId);if(i.mode!=="flight"&&i.mode!=="tutorial"||!N)i.descent=null,i.player.hover=!1;else{const F=N.position.y+_m;if(i.player.position.y-F<=.05)i.descent=null,Dm(i,N);else{const P=i.descent,z=i.player.position.x,U=i.player.position.z,B=Math.min(wm,Math.max(Em,(i.player.position.y-F)*1.5));i.player.position.y=Math.max(F,i.player.position.y-B*n),P.t+=n,P.angle+=P.dir*ym*n;const W=P.radius0+(P.orbitR-P.radius0)*sc(P.t/bm),j=Math.max(0,(i.player.position.y-F)/Math.max(.001,P.startY-F)),X=j>=Th?1:sc(j/Th),et=W*X,Nt=N.position.x+Math.cos(P.angle)*et,It=N.position.z+Math.sin(P.angle)*et,Mt=Nt-z,Z=It-U;if(Math.hypot(Mt,Z)>.75*n){const lt=Math.atan2(Mt,-Z),st=Math.atan2(Math.sin(lt-i.player.yaw),Math.cos(lt-i.player.yaw)),pt=Sm*n;i.player.yaw+=Math.max(-pt,Math.min(pt,st))}i.player.position.x=Nt,i.player.position.z=It,i.revision++}}return}if(i.run&&(i.mode==="flight"||i.mode==="offers")){if(i.run.elapsed>=En-1e-9){i.run.elapsed=En,yr(i,!1);return}const N=i.run.elapsed;if(i.run.elapsed=Math.min(En,N+n),i.run.elapsed>=En-1e-9){i.run.elapsed=En,yr(i,!1);return}if(qm(i,N),i.mode==="offers"){i.revision++;return}}const s=i.player,r=Wn(t.turn,-1,1),o=Wn(t.climb,-1,1),a=s.hover?0:o*Math.max(s.speed,3)*.7,{maxSpeed:c,turnRate:l,brakeRate:h,accel:d}=Hm(i,a);s.yaw+=r*l*n,s.pitch+=(o*.38-s.pitch)*Math.min(1,7*n),t.cutThrottle&&(s.throttle=0),s.throttle=Wn(s.throttle+Wn(t.throttle,-1,1)*fm*n,0,c);let u,f=1/0;const g=s.hover?void 0:Ko(i);if(g){const N=g.position.x-s.position.x,F=g.position.z-s.position.z;f=Math.hypot(N,F),f<Ah?(u=0,s.brakeHold=!0):s.brakeHold&&f<Am?u=0:f>1e-6&&(s.velocity.x*N+s.velocity.z*F)/f>.5&&(u=Math.sqrt(2*Ud*f)),u===void 0&&(s.brakeHold=!1)}else s.brakeHold=!1;const v=s.throttle>Cm?s.throttle:s.speed,p=s.hover?0:u===void 0?s.throttle:Math.min(u,v);s.speed=Wn(s.speed+Wn(p-s.speed,-h*n,d*n),0,c),Math.abs(s.speed)<.01&&(s.speed=0),s.brakeHold&&s.speed===0&&(s.brakeHold=!1,f>=Ah&&(s.throttle=0));const m={x:Math.sin(s.yaw),z:-Math.cos(s.yaw)},M=s.hover?0:o*Math.max(s.speed,3)*.7,y={x:m.x*s.speed*n,y:M*n,z:m.z*s.speed*n};Rm(s.position,y);const _=s.position.x,T=s.position.y,E=s.position.z;let b={...y},x=0;for(let N=0;N<3;N++){const F=Gm(s.position,b);if(!F){s.position.x+=b.x,s.position.y+=b.y,s.position.z+=b.z;break}if(!(F.normal.x||F.normal.y||F.normal.z))break;F.normal.y>.7&&b.y<0&&(x=Math.max(x,-b.y/n));const P=Math.max(0,F.t-1e-4);s.position.x+=b.x*P,s.position.y+=b.y*P,s.position.z+=b.z*P;const z=1-P;if(b={x:F.normal.x?0:b.x*z,y:F.normal.y?0:b.y*z,z:F.normal.z?0:b.z*z},!b.x&&!b.y&&!b.z)break}for(let N=0;N<4;N++){let F=!1;for(const P of Ld){const z=P.min.x-qe,U=P.max.x+qe,B=P.min.y-qe,W=P.max.y+qe,j=P.min.z-qe,X=P.max.z+qe,et=s.position;if(et.x<=z||et.x>=U||et.y<=B||et.y>=W||et.z<=j||et.z>=X)continue;const Nt=et.x-z,It=U-et.x,Mt=et.y-B,Z=W-et.y,lt=et.z-j,st=X-et.z,pt=Math.min(Nt,It,Mt,Z,lt,st),Ct=.02;pt===Nt?et.x=z-Ct:pt===It?et.x=U+Ct:pt===Mt?et.y=B-Ct:pt===Z?et.y=W+Ct:pt===lt?et.z=j-Ct:et.z=X+Ct,F=!0}if(!F)break}s.position.x=Wn(s.position.x,-ir+qe,ir-qe);const w=Math.max(Me(s.position.x,s.position.z),0)+lm,A=s.position.y;s.position.y=Wn(s.position.y,w,hm),A<w&&(x=Math.max(x,(w-A)/n));const C=i.profile.upgrades.capstones.braking==="feather-touch"||i.profile.upgrades.capstones.capacity==="careful-packer";x>8&&!C&&(s.speed*=.6,s.throttle=Math.min(s.throttle,s.speed)),s.position.z=Wn(s.position.z,-ir+qe,ir-qe),s.velocity={x:(s.position.x-_)/n,y:(s.position.y-T)/n,z:(s.position.z-E)/n};const L=Pm({x:s.position.x-_,y:s.position.y-T,z:s.position.z-E});i.mode==="tutorial"&&i.tutorialStage===0&&L>.1?(i.tutorialStage=1,i.message=i.coarsePointer?"Release the stick to slow down and hover.":"Press Space to slow down and hover."):i.mode==="tutorial"&&i.tutorialStage===1&&Math.abs(s.speed)<.5&&(i.tutorialStage=2,i.message="Nice and steady. Drift over the glowing Harbor Cafe pad — the parcel drops itself."),Vm(i),i.revision++}function qm(i,t){const e=En-i.run.elapsed,n=En-t;n>30&&e<=30?i.message="30 seconds left — return home before nightfall!":n>60&&e<=60?i.message="One minute left — Meg needs to head home.":n>120&&e<=120&&(i.message="Two minutes left — finish up before nightfall.")}class Vd{constructor(t,e,n){G(this,"root");G(this,"el",null);G(this,"onSelect");G(this,"audio");G(this,"menuState");this.root=t,this.onSelect=e,this.audio=n,this.menuState=fr()}update(t){this.audio.update(this.menuState,!1)}enter(){var s;Tp(),this.audio.resetSnapshot();const t=wp(),e=[1,2,3].map(Sp),n=e.find(r=>r.slotId===t);this.el=document.createElement("main"),this.el.className="menu-screen",this.el.innerHTML=`
      <div class="menu-card">
        <h1>Meg's Delivery Service</h1>
        <p class="menu-tagline">A little witch. A big sky.</p>
        ${n!=null&&n.exists?`
          <button class="menu-btn primary" data-action="continue" data-slot="${t}">
            Continue <span>→</span>
            <small>Slot ${t} · ${n.deliveries??0} deliveries · ${n.coins??0} coins</small>
          </button>
        `:""}
        <button class="menu-btn" data-action="new">
          New Game <span>→</span>
          <small>Start fresh in an empty slot</small>
        </button>
        <div class="slot-list">
          ${e.map(r=>`
            <button class="slot-btn ${r.exists?"":"empty"}" data-action="slot" data-slot="${r.slotId}" ${r.exists?"":"disabled"}>
              <b>Slot ${r.slotId}</b>
              ${r.exists?`<small>${r.deliveries??0} deliveries · ${r.coins??0} coins<br>${r.timestamp?new Date(r.timestamp).toLocaleDateString():""}</small>`:"<small>Empty</small>"}
            </button>
          `).join("")}
        </div>
        <div style="display:flex;justify-content:center;margin-top:18px">
          <button class="icon-button icon-button-sm" data-action="mute" aria-label="${sr()?"Unmute audio":"Mute audio"}">${wn(sr()?"sound-off":"sound")}</button>
        </div>
      </div>
    `,this.el.addEventListener("click",r=>{const o=r.target.closest("button[data-action]");if(!o)return;this.audio.setMuted(sr()),this.audio.sfx("ui_click");const a=o.getAttribute("data-action"),c=parseInt(o.getAttribute("data-slot")??"1",10);if(a==="mute"){const l=!sr();Ad(l),this.audio.setMuted(l),o.setAttribute("aria-label",l?"Unmute audio":"Mute audio"),o.innerHTML=wn(l?"sound-off":"sound");return}if(a==="continue")this.onSelect(c,!1);else if(a==="slot")this.onSelect(c,!1);else if(a==="new"){const l=e.find(h=>!h.exists);this.onSelect(l?l.slotId:1,!0)}}),this.root.appendChild(this.el),(s=document.getElementById("boot-loader"))==null||s.remove()}exit(){var t;(t=this.el)==null||t.remove(),this.el=null}}class Ym{constructor(t,e){G(this,"root");G(this,"el",null);G(this,"label",null);G(this,"audio");G(this,"menuState",fr());this.root=t,this.audio=e}update(t){this.audio.update(this.menuState,!1)}enter(){this.el=document.createElement("div"),this.el.className="loading-screen",this.el.innerHTML=`
      <div class="loading-card">
        <div class="bl-spin"></div>
        <p class="loading-label">Loading…</p>
      </div>
    `,this.label=this.el.querySelector(".loading-label"),this.root.appendChild(this.el)}setStage(t){this.label&&(this.label.textContent=t)}exit(){var t;(t=this.el)==null||t.remove(),this.el=null,this.label=null}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pl="185",$m=0,Ph=1,Zm=2,vo=1,Km=2,or=3,Si=0,en=1,ze=2,ri=0,Ps=1,Po=2,Ih=3,Lh=4,Jm=5,Fi=100,Qm=101,jm=102,t0=103,e0=104,n0=200,i0=201,s0=202,r0=203,ac=204,cc=205,o0=206,a0=207,c0=208,l0=209,h0=210,u0=211,d0=212,f0=213,p0=214,lc=0,hc=1,uc=2,Us=3,dc=4,fc=5,pc=6,mc=7,Wd=0,m0=1,g0=2,Yn=0,Xd=1,qd=2,Yd=3,ml=4,$d=5,Zd=6,Kd=7,Jd=300,Wi=301,Fs=302,ra=303,oa=304,Jo=306,Mr=1e3,si=1001,gc=1002,Ve=1003,x0=1004,zr=1005,tn=1006,aa=1007,Mi=1008,_n=1009,Qd=1010,jd=1011,br=1012,gl=1013,Kn=1014,Fn=1015,ai=1016,xl=1017,vl=1018,Sr=1020,tf=35902,ef=35899,nf=1021,sf=1022,zn=1023,ci=1026,Hi=1027,_l=1028,yl=1029,Xi=1030,Ml=1031,bl=1033,_o=33776,yo=33777,Mo=33778,bo=33779,xc=35840,vc=35841,_c=35842,yc=35843,Mc=36196,bc=37492,Sc=37496,wc=37488,Ec=37489,Io=37490,Tc=37491,Ac=37808,Cc=37809,Rc=37810,Pc=37811,Ic=37812,Lc=37813,Dc=37814,Nc=37815,Uc=37816,Fc=37817,zc=37818,Oc=37819,kc=37820,Bc=37821,Hc=36492,Gc=36494,Vc=36495,Wc=36283,Xc=36284,Lo=36285,qc=36286,v0=3200,Yc=0,_0=1,yi="",$e="srgb",Do="srgb-linear",No="linear",xe="srgb",ss=7680,Dh=519,y0=512,M0=513,b0=514,Sl=515,S0=516,w0=517,wl=518,E0=519,$c=35044,Nh="300 es",qn=2e3,wr=2001;function T0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Uo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function A0(){const i=Uo("canvas");return i.style.display="block",i}const Uh={};function Fo(...i){const t="THREE."+i.shift();console.log(t,...i)}function rf(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Qt(...i){i=rf(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ce(...i){i=rf(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Is(...i){const t=i.join(" ");t in Uh||(Uh[t]=!0,Qt(...i))}function C0(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const R0={[lc]:hc,[uc]:pc,[dc]:mc,[Us]:fc,[hc]:lc,[pc]:uc,[mc]:dc,[fc]:Us};class Zi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Fh=1234567;const pr=Math.PI/180,Er=180/Math.PI;function $n(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Je[i&255]+Je[i>>8&255]+Je[i>>16&255]+Je[i>>24&255]+"-"+Je[t&255]+Je[t>>8&255]+"-"+Je[t>>16&15|64]+Je[t>>24&255]+"-"+Je[e&63|128]+Je[e>>8&255]+"-"+Je[e>>16&255]+Je[e>>24&255]+Je[n&255]+Je[n>>8&255]+Je[n>>16&255]+Je[n>>24&255]).toLowerCase()}function ae(i,t,e){return Math.max(t,Math.min(e,i))}function El(i,t){return(i%t+t)%t}function P0(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function I0(i,t,e){return i!==t?(e-i)/(t-i):0}function mr(i,t,e){return(1-e)*i+e*t}function L0(i,t,e,n){return mr(i,t,1-Math.exp(-e*n))}function D0(i,t=1){return t-Math.abs(El(i,t*2)-t)}function N0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function U0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function F0(i,t){return i+Math.floor(Math.random()*(t-i+1))}function z0(i,t){return i+Math.random()*(t-i)}function O0(i){return i*(.5-Math.random())}function k0(i){i!==void 0&&(Fh=i);let t=Fh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function B0(i){return i*pr}function H0(i){return i*Er}function G0(i){return(i&i-1)===0&&i!==0}function V0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function W0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function X0(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*d,c*u,a*l);break;case"YZY":i.set(c*u,a*h,c*d,a*l);break;case"ZXZ":i.set(c*d,c*u,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*h,a*l);break;default:Qt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Un(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ve(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Xe={DEG2RAD:pr,RAD2DEG:Er,generateUUID:$n,clamp:ae,euclideanModulo:El,mapLinear:P0,inverseLerp:I0,lerp:mr,damp:L0,pingpong:D0,smoothstep:N0,smootherstep:U0,randInt:F0,randFloat:z0,randFloatSpread:O0,seededRandom:k0,degToRad:B0,radToDeg:H0,isPowerOfTwo:G0,ceilPowerOfTwo:V0,floorPowerOfTwo:W0,setQuaternionFromProperEuler:X0,normalize:ve,denormalize:Un},Gl=class Gl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Gl.prototype.isVector2=!0;let ft=Gl;class Bs{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(d!==v||c!==u||l!==f||h!==g){let p=c*u+l*f+h*g+d*v;p<0&&(u=-u,f=-f,g=-g,v=-v,p=-p);let m=1-a;if(p<.9995){const M=Math.acos(p),y=Math.sin(M);m=Math.sin(m*M)/y,a=Math.sin(a*M)/y,c=c*m+u*a,l=l*m+f*a,h=h*m+g*a,d=d*m+v*a}else{c=c*m+u*a,l=l*m+f*a,h=h*m+g*a,d=d*m+v*a;const M=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=M,l*=M,h*=M,d*=M}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*d+c*f-l*u,t[e+1]=c*g+h*u+l*d-a*f,t[e+2]=l*g+h*f+a*u-c*d,t[e+3]=h*g-a*d-c*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),d=a(r/2),u=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"YZX":this._x=u*h*d+l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d-u*f*g;break;case"XZY":this._x=u*h*d-l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d+u*f*g;break;default:Qt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ae(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){const l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Vl=class Vl{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+c*l+o*d-a*h,this.y=n+c*h+a*l-r*d,this.z=s+c*d+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ca.copy(this).projectOnVector(t),this.sub(ca)}reflect(t){return this.sub(ca.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Vl.prototype.isVector3=!0;let D=Vl;const ca=new D,zh=new Bs,Wl=class Wl{constructor(t,e,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],v=s[0],p=s[3],m=s[6],M=s[1],y=s[4],_=s[7],T=s[2],E=s[5],b=s[8];return r[0]=o*v+a*M+c*T,r[3]=o*p+a*y+c*E,r[6]=o*m+a*_+c*b,r[1]=l*v+h*M+d*T,r[4]=l*p+h*y+d*E,r[7]=l*m+h*_+d*b,r[2]=u*v+f*M+g*T,r[5]=u*p+f*y+g*E,r[8]=u*m+f*_+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*o-a*l,u=a*c-h*r,f=l*r-o*c,g=e*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=d*v,t[1]=(s*l-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=u*v,t[4]=(h*e-s*c)*v,t[5]=(s*r-a*e)*v,t[6]=f*v,t[7]=(n*c-l*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return Is("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(la.makeScale(t,e)),this}rotate(t){return Is("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(la.makeRotation(-t)),this}translate(t,e){return Is("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(la.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Wl.prototype.isMatrix3=!0;let te=Wl;const la=new te,Oh=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kh=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function q0(){const i={enabled:!0,workingColorSpace:Do,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===xe&&(s.r=oi(s.r),s.g=oi(s.g),s.b=oi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===xe&&(s.r=Ls(s.r),s.g=Ls(s.g),s.b=Ls(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===yi?No:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Is("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Is("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Do]:{primaries:t,whitePoint:n,transfer:No,toXYZ:Oh,fromXYZ:kh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:$e},outputColorSpaceConfig:{drawingBufferColorSpace:$e}},[$e]:{primaries:t,whitePoint:n,transfer:xe,toXYZ:Oh,fromXYZ:kh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:$e}}}),i}const le=q0();function oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ls(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let rs;class Y0{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{rs===void 0&&(rs=Uo("canvas")),rs.width=t.width,rs.height=t.height;const s=rs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=rs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Uo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=oi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(oi(e[n]/255)*255):e[n]=oi(e[n]);return{data:e,width:t.width,height:t.height}}else return Qt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let $0=0;class Tl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$0++}),this.uuid=$n(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ha(s[o].image)):r.push(ha(s[o]))}else r=ha(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ha(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Y0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Qt("Texture: Unable to serialize Texture."),{})}let Z0=0;const ua=new D;class Ze extends Zi{constructor(t=Ze.DEFAULT_IMAGE,e=Ze.DEFAULT_MAPPING,n=si,s=si,r=tn,o=Mi,a=zn,c=_n,l=Ze.DEFAULT_ANISOTROPY,h=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Z0++}),this.uuid=$n(),this.name="",this.source=new Tl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ua).x}get height(){return this.source.getSize(ua).y}get depth(){return this.source.getSize(ua).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Qt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Qt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Mr:t.x=t.x-Math.floor(t.x);break;case si:t.x=t.x<0?0:1;break;case gc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Mr:t.y=t.y-Math.floor(t.y);break;case si:t.y=t.y<0?0:1;break;case gc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=Jd;Ze.DEFAULT_ANISOTROPY=1;const Xl=class Xl{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],g=c[9],v=c[2],p=c[6],m=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,_=(f+1)/2,T=(m+1)/2,E=(h+u)/4,b=(d+v)/4,x=(g+p)/4;return y>_&&y>T?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=E/n,r=b/n):_>T?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=E/s,r=x/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=b/r,s=x/r),this.set(n,s,r,e),this}let M=Math.sqrt((p-g)*(p-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(d-v)/M,this.z=(u-h)/M,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this.w=ae(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this.w=ae(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Xl.prototype.isVector4=!0;let Ce=Xl;class K0 extends Zi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ce(0,0,t,e),this.scissorTest=!1,this.viewport=new Ce(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:n.depth},r=new Ze(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:tn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Tl(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zn extends K0{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class of extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class J0 extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $o=class $o{constructor(t,e,n,s,r,o,a,c,l,h,d,u,f,g,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,d,u,f,g,v,p)}set(t,e,n,s,r,o,a,c,l,h,d,u,f,g,v,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $o().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/os.setFromMatrixColumn(t,0).length(),r=1/os.setFromMatrixColumn(t,1).length(),o=1/os.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=o*h,f=o*d,g=a*h,v=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+g*l,e[5]=u-v*l,e[9]=-a*c,e[2]=v-u*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const u=c*h,f=c*d,g=l*h,v=l*d;e[0]=u+v*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=v+u*a,e[10]=o*c}else if(t.order==="ZXY"){const u=c*h,f=c*d,g=l*h,v=l*d;e[0]=u-v*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=v-u*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const u=o*h,f=o*d,g=a*h,v=a*d;e[0]=c*h,e[4]=g*l-f,e[8]=u*l+v,e[1]=c*d,e[5]=v*l+u,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const u=o*c,f=o*l,g=a*c,v=a*l;e[0]=c*h,e[4]=v-u*d,e[8]=g*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*d+g,e[10]=u-v*d}else if(t.order==="XZY"){const u=o*c,f=o*l,g=a*c,v=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+v,e[5]=o*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*h,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Q0,t,j0)}lookAt(t,e,n){const s=this.elements;return fn.subVectors(t,e),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),fi.crossVectors(n,fn),fi.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),fi.crossVectors(n,fn)),fi.normalize(),Or.crossVectors(fn,fi),s[0]=fi.x,s[4]=Or.x,s[8]=fn.x,s[1]=fi.y,s[5]=Or.y,s[9]=fn.y,s[2]=fi.z,s[6]=Or.z,s[10]=fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],v=n[6],p=n[10],m=n[14],M=n[3],y=n[7],_=n[11],T=n[15],E=s[0],b=s[4],x=s[8],w=s[12],A=s[1],C=s[5],L=s[9],N=s[13],F=s[2],P=s[6],z=s[10],U=s[14],B=s[3],W=s[7],j=s[11],X=s[15];return r[0]=o*E+a*A+c*F+l*B,r[4]=o*b+a*C+c*P+l*W,r[8]=o*x+a*L+c*z+l*j,r[12]=o*w+a*N+c*U+l*X,r[1]=h*E+d*A+u*F+f*B,r[5]=h*b+d*C+u*P+f*W,r[9]=h*x+d*L+u*z+f*j,r[13]=h*w+d*N+u*U+f*X,r[2]=g*E+v*A+p*F+m*B,r[6]=g*b+v*C+p*P+m*W,r[10]=g*x+v*L+p*z+m*j,r[14]=g*w+v*N+p*U+m*X,r[3]=M*E+y*A+_*F+T*B,r[7]=M*b+y*C+_*P+T*W,r[11]=M*x+y*L+_*z+T*j,r[15]=M*w+y*N+_*U+T*X,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],v=t[7],p=t[11],m=t[15],M=c*f-l*u,y=a*f-l*d,_=a*u-c*d,T=o*f-l*h,E=o*u-c*h,b=o*d-a*h;return e*(v*M-p*y+m*_)-n*(g*M-p*T+m*E)+s*(g*y-v*T+m*b)-r*(g*_-v*E+p*b)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],h=t[10];return e*(o*h-a*l)-n*(r*h-a*c)+s*(r*l-o*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],v=t[13],p=t[14],m=t[15],M=e*a-n*o,y=e*c-s*o,_=e*l-r*o,T=n*c-s*a,E=n*l-r*a,b=s*l-r*c,x=h*v-d*g,w=h*p-u*g,A=h*m-f*g,C=d*p-u*v,L=d*m-f*v,N=u*m-f*p,F=M*N-y*L+_*C+T*A-E*w+b*x;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/F;return t[0]=(a*N-c*L+l*C)*P,t[1]=(s*L-n*N-r*C)*P,t[2]=(v*b-p*E+m*T)*P,t[3]=(u*E-d*b-f*T)*P,t[4]=(c*A-o*N-l*w)*P,t[5]=(e*N-s*A+r*w)*P,t[6]=(p*_-g*b-m*y)*P,t[7]=(h*b-u*_+f*y)*P,t[8]=(o*L-a*A+l*x)*P,t[9]=(n*A-e*L-r*x)*P,t[10]=(g*E-v*_+m*M)*P,t[11]=(d*_-h*E-f*M)*P,t[12]=(a*w-o*C-c*x)*P,t[13]=(e*C-n*w+s*x)*P,t[14]=(v*y-g*T-p*M)*P,t[15]=(h*T-d*y+u*M)*P,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,d=a+a,u=r*l,f=r*h,g=r*d,v=o*h,p=o*d,m=a*d,M=c*l,y=c*h,_=c*d,T=n.x,E=n.y,b=n.z;return s[0]=(1-(v+m))*T,s[1]=(f+_)*T,s[2]=(g-y)*T,s[3]=0,s[4]=(f-_)*E,s[5]=(1-(u+m))*E,s[6]=(p+M)*E,s[7]=0,s[8]=(g+y)*b,s[9]=(p-M)*b,s[10]=(1-(u+v))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=os.set(s[0],s[1],s[2]).length();const a=os.set(s[4],s[5],s[6]).length(),c=os.set(s[8],s[9],s[10]).length();r<0&&(o=-o),An.copy(this);const l=1/o,h=1/a,d=1/c;return An.elements[0]*=l,An.elements[1]*=l,An.elements[2]*=l,An.elements[4]*=h,An.elements[5]*=h,An.elements[6]*=h,An.elements[8]*=d,An.elements[9]*=d,An.elements[10]*=d,e.setFromRotationMatrix(An),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,s,r,o,a=qn,c=!1){const l=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let g,v;if(c)g=r/(o-r),v=o*r/(o-r);else if(a===qn)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===wr)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=qn,c=!1){const l=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s);let g,v;if(c)g=1/(o-r),v=o/(o-r);else if(a===qn)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===wr)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};$o.prototype.isMatrix4=!0;let _e=$o;const os=new D,An=new _e,Q0=new D(0,0,0),j0=new D(1,1,1),fi=new D,Or=new D,fn=new D,Bh=new _e,Hh=new Bs;class qi{constructor(t=0,e=0,n=0,s=qi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ae(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ae(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ae(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ae(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Qt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Bh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Hh.setFromEuler(this),this.setFromQuaternion(Hh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qi.DEFAULT_ORDER="XYZ";class Al{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let tg=0;const Gh=new D,as=new Bs,jn=new _e,kr=new D,Ws=new D,eg=new D,ng=new Bs,Vh=new D(1,0,0),Wh=new D(0,1,0),Xh=new D(0,0,1),qh={type:"added"},ig={type:"removed"},cs={type:"childadded",child:null},da={type:"childremoved",child:null};class Le extends Zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tg++}),this.uuid=$n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Le.DEFAULT_UP.clone();const t=new D,e=new qi,n=new Bs,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _e},normalMatrix:{value:new te}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=Le.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Al,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.multiply(as),this}rotateOnWorldAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.premultiply(as),this}rotateX(t){return this.rotateOnAxis(Vh,t)}rotateY(t){return this.rotateOnAxis(Wh,t)}rotateZ(t){return this.rotateOnAxis(Xh,t)}translateOnAxis(t,e){return Gh.copy(t).applyQuaternion(this.quaternion),this.position.add(Gh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vh,t)}translateY(t){return this.translateOnAxis(Wh,t)}translateZ(t){return this.translateOnAxis(Xh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?kr.copy(t):kr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(Ws,kr,this.up):jn.lookAt(kr,Ws,this.up),this.quaternion.setFromRotationMatrix(jn),s&&(jn.extractRotation(s.matrixWorld),as.setFromRotationMatrix(jn),this.quaternion.premultiply(as.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ce("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(qh),cs.child=t,this.dispatchEvent(cs),cs.child=null):ce("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ig),da.child=t,this.dispatchEvent(da),da.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(qh),cs.child=t,this.dispatchEvent(cs),cs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,t,eg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,ng,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Le.DEFAULT_UP=new D(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class re extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sg={type:"move"};class fa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const v of t.hand.values()){const p=e.getJointPose(v,n),m=this._getHandJoint(l,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sg)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new re;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const af={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},Br={h:0,s:0,l:0};function pa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class $t{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=le.workingColorSpace){if(t=El(t,1),e=ae(e,0,1),n=ae(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=pa(o,r,t+1/3),this.g=pa(o,r,t),this.b=pa(o,r,t-1/3)}return le.colorSpaceToWorking(this,s),this}setStyle(t,e=$e){function n(r){r!==void 0&&parseFloat(r)<1&&Qt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Qt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Qt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$e){const n=af[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Qt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=oi(t.r),this.g=oi(t.g),this.b=oi(t.b),this}copyLinearToSRGB(t){return this.r=Ls(t.r),this.g=Ls(t.g),this.b=Ls(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$e){return le.workingToColorSpace(Qe.copy(this),t),Math.round(ae(Qe.r*255,0,255))*65536+Math.round(ae(Qe.g*255,0,255))*256+Math.round(ae(Qe.b*255,0,255))}getHexString(t=$e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.workingToColorSpace(Qe.copy(this),e);const n=Qe.r,s=Qe.g,r=Qe.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=le.workingColorSpace){return le.workingToColorSpace(Qe.copy(this),e),t.r=Qe.r,t.g=Qe.g,t.b=Qe.b,t}getStyle(t=$e){le.workingToColorSpace(Qe.copy(this),t);const e=Qe.r,n=Qe.g,s=Qe.b;return t!==$e?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(pi),this.setHSL(pi.h+t,pi.s+e,pi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(pi),t.getHSL(Br);const n=mr(pi.h,Br.h,e),s=mr(pi.s,Br.s,e),r=mr(pi.l,Br.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qe=new $t;$t.NAMES=af;class zo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new $t(t),this.density=e}clone(){return new zo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class rg extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qi,this.environmentIntensity=1,this.environmentRotation=new qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Cn=new D,ti=new D,ma=new D,ei=new D,ls=new D,hs=new D,Yh=new D,ga=new D,xa=new D,va=new D,_a=new Ce,ya=new Ce,Ma=new Ce;class Tn{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Cn.subVectors(t,e),s.cross(Cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Cn.subVectors(s,e),ti.subVectors(n,e),ma.subVectors(t,e);const o=Cn.dot(Cn),a=Cn.dot(ti),c=Cn.dot(ma),l=ti.dot(ti),h=ti.dot(ma),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(l*c-a*h)*u,g=(o*h-a*c)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,ei)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ei.x),c.addScaledVector(o,ei.y),c.addScaledVector(a,ei.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return _a.setScalar(0),ya.setScalar(0),Ma.setScalar(0),_a.fromBufferAttribute(t,e),ya.fromBufferAttribute(t,n),Ma.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(_a,r.x),o.addScaledVector(ya,r.y),o.addScaledVector(Ma,r.z),o}static isFrontFacing(t,e,n,s){return Cn.subVectors(n,e),ti.subVectors(t,e),Cn.cross(ti).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Cn.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Cn.cross(ti).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Tn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Tn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Tn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Tn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Tn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;ls.subVectors(s,n),hs.subVectors(r,n),ga.subVectors(t,n);const c=ls.dot(ga),l=hs.dot(ga);if(c<=0&&l<=0)return e.copy(n);xa.subVectors(t,s);const h=ls.dot(xa),d=hs.dot(xa);if(h>=0&&d<=h)return e.copy(s);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(ls,o);va.subVectors(t,r);const f=ls.dot(va),g=hs.dot(va);if(g>=0&&f<=g)return e.copy(r);const v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(hs,a);const p=h*g-f*d;if(p<=0&&d-h>=0&&f-g>=0)return Yh.subVectors(r,s),a=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(Yh,a);const m=1/(p+v+u);return o=v*m,a=u*m,e.copy(n).addScaledVector(ls,o).addScaledVector(hs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ki{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Rn):Rn.fromBufferAttribute(r,o),Rn.applyMatrix4(t.matrixWorld),this.expandByPoint(Rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Hr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Hr.copy(n.boundingBox)),Hr.applyMatrix4(t.matrixWorld),this.union(Hr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Rn),Rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Xs),Gr.subVectors(this.max,Xs),us.subVectors(t.a,Xs),ds.subVectors(t.b,Xs),fs.subVectors(t.c,Xs),mi.subVectors(ds,us),gi.subVectors(fs,ds),Ti.subVectors(us,fs);let e=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-Ti.z,Ti.y,mi.z,0,-mi.x,gi.z,0,-gi.x,Ti.z,0,-Ti.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-Ti.y,Ti.x,0];return!ba(e,us,ds,fs,Gr)||(e=[1,0,0,0,1,0,0,0,1],!ba(e,us,ds,fs,Gr))?!1:(Vr.crossVectors(mi,gi),e=[Vr.x,Vr.y,Vr.z],ba(e,us,ds,fs,Gr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ni),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ni=[new D,new D,new D,new D,new D,new D,new D,new D],Rn=new D,Hr=new Ki,us=new D,ds=new D,fs=new D,mi=new D,gi=new D,Ti=new D,Xs=new D,Gr=new D,Vr=new D,Ai=new D;function ba(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ai.fromArray(i,r);const a=s.x*Math.abs(Ai.x)+s.y*Math.abs(Ai.y)+s.z*Math.abs(Ai.z),c=t.dot(Ai),l=e.dot(Ai),h=n.dot(Ai);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Ue=new D,Wr=new ft;let og=0;class We extends Zi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:og++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=$c,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Wr.fromBufferAttribute(this,e),Wr.applyMatrix3(t),this.setXY(e,Wr.x,Wr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Un(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ve(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Un(e,this.array)),e}setX(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Un(e,this.array)),e}setY(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Un(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Un(e,this.array)),e}setW(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),s=ve(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),s=ve(s,this.array),r=ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==$c&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class cf extends We{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class lf extends We{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Kt extends We{constructor(t,e,n){super(new Float32Array(t),e,n)}}const ag=new Ki,qs=new D,Sa=new D;class Hs{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ag.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qs.subVectors(t,this.center);const e=qs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(qs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Sa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qs.copy(t.center).add(Sa)),this.expandByPoint(qs.copy(t.center).sub(Sa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let cg=0;const Mn=new _e,wa=new Le,ps=new D,pn=new Ki,Ys=new Ki,He=new D;class ge extends Zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cg++}),this.uuid=$n(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(T0(t)?lf:cf)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new te().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Mn.makeRotationFromQuaternion(t),this.applyMatrix4(Mn),this}rotateX(t){return Mn.makeRotationX(t),this.applyMatrix4(Mn),this}rotateY(t){return Mn.makeRotationY(t),this.applyMatrix4(Mn),this}rotateZ(t){return Mn.makeRotationZ(t),this.applyMatrix4(Mn),this}translate(t,e,n){return Mn.makeTranslation(t,e,n),this.applyMatrix4(Mn),this}scale(t,e,n){return Mn.makeScale(t,e,n),this.applyMatrix4(Mn),this}lookAt(t){return wa.lookAt(t),wa.updateMatrix(),this.applyMatrix4(wa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Kt(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Qt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ki);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(pn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ys.setFromBufferAttribute(a),this.morphTargetsRelative?(He.addVectors(pn.min,Ys.min),pn.expandByPoint(He),He.addVectors(pn.max,Ys.max),pn.expandByPoint(He)):(pn.expandByPoint(Ys.min),pn.expandByPoint(Ys.max))}pn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)He.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(He));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)He.fromBufferAttribute(a,l),c&&(ps.fromBufferAttribute(t,l),He.add(ps)),s=Math.max(s,n.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new We(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],c=[];for(let x=0;x<n.count;x++)a[x]=new D,c[x]=new D;const l=new D,h=new D,d=new D,u=new ft,f=new ft,g=new ft,v=new D,p=new D;function m(x,w,A){l.fromBufferAttribute(n,x),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,A),u.fromBufferAttribute(r,x),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,A),h.sub(l),d.sub(l),f.sub(u),g.sub(u);const C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(C),p.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(C),a[x].add(v),a[w].add(v),a[A].add(v),c[x].add(p),c[w].add(p),c[A].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let x=0,w=M.length;x<w;++x){const A=M[x],C=A.start,L=A.count;for(let N=C,F=C+L;N<F;N+=3)m(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const y=new D,_=new D,T=new D,E=new D;function b(x){T.fromBufferAttribute(s,x),E.copy(T);const w=a[x];y.copy(w),y.sub(T.multiplyScalar(T.dot(w))).normalize(),_.crossVectors(E,w);const C=_.dot(c[x])<0?-1:1;o.setXYZW(x,y.x,y.y,y.z,C)}for(let x=0,w=M.length;x<w;++x){const A=M[x],C=A.start,L=A.count;for(let N=C,F=C+L;N<F;N+=3)b(t.getX(N+0)),b(t.getX(N+1)),b(t.getX(N+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new We(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const s=new D,r=new D,o=new D,a=new D,c=new D,l=new D,h=new D,d=new D;if(t)for(let u=0,f=t.count;u<f;u+=3){const g=t.getX(u+0),v=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,p),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h);let f=0,g=0;for(let v=0,p=c.length;v<p;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*h;for(let m=0;m<h;m++)u[g++]=l[f++]}return new We(u,h,d)}if(this.index===null)return Qt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ge,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){const u=l[h],f=t(u,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class lg{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=$c,this.updateRanges=[],this.version=0,this.uuid=$n()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const nn=new D;class Oo{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix4(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyNormalMatrix(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.transformDirection(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Un(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ve(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Un(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Un(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Un(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Un(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),s=ve(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),s=ve(s,this.array),r=ve(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Fo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new We(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Oo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Fo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let hg=0;class Ji extends Zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hg++}),this.uuid=$n(),this.name="",this.type="Material",this.blending=Ps,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ac,this.blendDst=cc,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=Us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Qt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Qt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(n.blending=this.blending),this.side!==Si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ac&&(n.blendSrc=this.blendSrc),this.blendDst!==cc&&(n.blendDst=this.blendDst),this.blendEquation!==Fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Us&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new $t().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ft().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ft().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ko extends Ji{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new $t(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ms;const $s=new D,gs=new D,xs=new D,vs=new ft,Zs=new ft,hf=new _e,Xr=new D,Ks=new D,qr=new D,$h=new ft,Ea=new ft,Zh=new ft;class Bo extends Le{constructor(t=new ko){if(super(),this.isSprite=!0,this.type="Sprite",ms===void 0){ms=new ge;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new lg(e,5);ms.setIndex([0,1,2,0,2,3]),ms.setAttribute("position",new Oo(n,3,0,!1)),ms.setAttribute("uv",new Oo(n,2,3,!1))}this.geometry=ms,this.material=t,this.center=new ft(.5,.5),this.count=1}raycast(t,e){t.camera===null&&ce('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),gs.setFromMatrixScale(this.matrixWorld),hf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),xs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&gs.multiplyScalar(-xs.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Yr(Xr.set(-.5,-.5,0),xs,o,gs,s,r),Yr(Ks.set(.5,-.5,0),xs,o,gs,s,r),Yr(qr.set(.5,.5,0),xs,o,gs,s,r),$h.set(0,0),Ea.set(1,0),Zh.set(1,1);let a=t.ray.intersectTriangle(Xr,Ks,qr,!1,$s);if(a===null&&(Yr(Ks.set(-.5,.5,0),xs,o,gs,s,r),Ea.set(0,1),a=t.ray.intersectTriangle(Xr,qr,Ks,!1,$s),a===null))return;const c=t.ray.origin.distanceTo($s);c<t.near||c>t.far||e.push({distance:c,point:$s.clone(),uv:Tn.getInterpolation($s,Xr,Ks,qr,$h,Ea,Zh,new ft),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Yr(i,t,e,n,s,r){vs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Zs.x=r*vs.x-s*vs.y,Zs.y=s*vs.x+r*vs.y):Zs.copy(vs),i.copy(t),i.x+=Zs.x,i.y+=Zs.y,i.applyMatrix4(hf)}const ii=new D,Ta=new D,$r=new D,xi=new D,Aa=new D,Zr=new D,Ca=new D;class Cl{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ii.copy(this.origin).addScaledVector(this.direction,e),ii.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ta.copy(t).add(e).multiplyScalar(.5),$r.copy(e).sub(t).normalize(),xi.copy(this.origin).sub(Ta);const r=t.distanceTo(e)*.5,o=-this.direction.dot($r),a=xi.dot(this.direction),c=-xi.dot($r),l=xi.lengthSq(),h=Math.abs(1-o*o);let d,u,f,g;if(h>0)if(d=o*c-a,u=o*a-c,g=r*h,d>=0)if(u>=-g)if(u<=g){const v=1/h;d*=v,u*=v,f=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ta).addScaledVector($r,u),f}intersectSphere(t,e){ii.subVectors(t.center,this.origin);const n=ii.dot(this.direction),s=ii.dot(ii)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ii)!==null}intersectTriangle(t,e,n,s,r){Aa.subVectors(e,t),Zr.subVectors(n,t),Ca.crossVectors(Aa,Zr);let o=this.direction.dot(Ca),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;xi.subVectors(this.origin,t);const c=a*this.direction.dot(Zr.crossVectors(xi,Zr));if(c<0)return null;const l=a*this.direction.dot(Aa.cross(xi));if(l<0||c+l>o)return null;const h=-a*xi.dot(Ca);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gn extends Ji{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.combine=Wd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Kh=new _e,Ci=new Cl,Kr=new Hs,Jh=new D,Jr=new D,Qr=new D,jr=new D,Ra=new D,to=new D,Qh=new D,eo=new D;class J extends Le{constructor(t=new ge,e=new gn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){to.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],d=r[c];h!==0&&(Ra.fromBufferAttribute(d,t),o?to.addScaledVector(Ra,h):to.addScaledVector(Ra.sub(e),h))}e.add(to)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(r),Ci.copy(t.ray).recast(t.near),!(Kr.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(Kr,Jh)===null||Ci.origin.distanceToSquared(Jh)>(t.far-t.near)**2))&&(Kh.copy(r).invert(),Ci.copy(t.ray).applyMatrix4(Kh),!(n.boundingBox!==null&&Ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ci)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){const p=u[g],m=o[p.materialIndex],M=Math.max(p.start,f.start),y=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let _=M,T=y;_<T;_+=3){const E=a.getX(_),b=a.getX(_+1),x=a.getX(_+2);s=no(this,m,t,n,l,h,d,E,b,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){const M=a.getX(p),y=a.getX(p+1),_=a.getX(p+2);s=no(this,o,t,n,l,h,d,M,y,_),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){const p=u[g],m=o[p.materialIndex],M=Math.max(p.start,f.start),y=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let _=M,T=y;_<T;_+=3){const E=_,b=_+1,x=_+2;s=no(this,m,t,n,l,h,d,E,b,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){const M=p,y=p+1,_=p+2;s=no(this,o,t,n,l,h,d,M,y,_),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function ug(i,t,e,n,s,r,o,a){let c;if(t.side===en?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Si,a),c===null)return null;eo.copy(a),eo.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(eo);return l<e.near||l>e.far?null:{distance:l,point:eo.clone(),object:i}}function no(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Jr),i.getVertexPosition(c,Qr),i.getVertexPosition(l,jr);const h=ug(i,t,e,n,Jr,Qr,jr,Qh);if(h){const d=new D;Tn.getBarycoord(Qh,Jr,Qr,jr,d),s&&(h.uv=Tn.getInterpolatedAttribute(s,a,c,l,d,new ft)),r&&(h.uv1=Tn.getInterpolatedAttribute(r,a,c,l,d,new ft)),o&&(h.normal=Tn.getInterpolatedAttribute(o,a,c,l,d,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new D,materialIndex:0};Tn.getNormal(Jr,Qr,jr,u.normal),h.face=u,h.barycoord=d}return h}class uf extends Ze{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Ve,h=Ve,d,u){super(null,o,a,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jh extends We{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const _s=new _e,tu=new _e,io=[],eu=new Ki,dg=new _e,Js=new J,Qs=new Hs;class mn extends J{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new jh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,dg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ki),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,_s),eu.copy(t.boundingBox).applyMatrix4(_s),this.boundingBox.union(eu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,_s),Qs.copy(t.boundingSphere).applyMatrix4(_s),this.boundingSphere.union(Qs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Js.geometry=this.geometry,Js.material=this.material,Js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qs.copy(this.boundingSphere),Qs.applyMatrix4(n),t.ray.intersectsSphere(Qs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,_s),tu.multiplyMatrices(n,_s),Js.matrixWorld=tu,Js.raycast(t,io);for(let o=0,a=io.length;o<a;o++){const c=io[o];c.instanceId=r,c.object=this,e.push(c)}io.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new jh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new uf(new Float32Array(s*this.count),s,this.count,_l,Fn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Pa=new D,fg=new D,pg=new te;class Ni{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Pa.subVectors(n,e).cross(fg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(Pa),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||pg.getNormalMatrix(t),s=this.coplanarPoint(Pa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ri=new Hs,mg=new ft(.5,.5),so=new D;class Rl{constructor(t=new Ni,e=new Ni,n=new Ni,s=new Ni,r=new Ni,o=new Ni){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=qn,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],v=r[9],p=r[10],m=r[11],M=r[12],y=r[13],_=r[14],T=r[15];if(s[0].setComponents(l-o,f-h,m-g,T-M).normalize(),s[1].setComponents(l+o,f+h,m+g,T+M).normalize(),s[2].setComponents(l+a,f+d,m+v,T+y).normalize(),s[3].setComponents(l-a,f-d,m-v,T-y).normalize(),n)s[4].setComponents(c,u,p,_).normalize(),s[5].setComponents(l-c,f-u,m-p,T-_).normalize();else if(s[4].setComponents(l-c,f-u,m-p,T-_).normalize(),e===qn)s[5].setComponents(l+c,f+u,m+p,T+_).normalize();else if(e===wr)s[5].setComponents(c,u,p,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(t){Ri.center.set(0,0,0);const e=mg.distanceTo(t.center);return Ri.radius=.7071067811865476+e,Ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(so.x=s.normal.x>0?t.max.x:t.min.x,so.y=s.normal.y>0?t.max.y:t.min.y,so.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(so)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class gg extends Ji{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const nu=new _e,Zc=new Cl,ro=new Hs,oo=new D;class xg extends Le{constructor(t=new ge,e=new gg){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(s),ro.radius+=r,t.ray.intersectsSphere(ro)===!1)return;nu.copy(s).invert(),Zc.copy(t.ray).applyMatrix4(nu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){const u=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=u,v=f;g<v;g++){const p=l.getX(g);oo.fromBufferAttribute(d,p),iu(oo,p,c,s,t,e,this)}}else{const u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,v=f;g<v;g++)oo.fromBufferAttribute(d,g),iu(oo,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function iu(i,t,e,n,s,r,o){const a=Zc.distanceSqToPoint(i);if(a<e){const c=new D;Zc.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class df extends Ze{constructor(t=[],e=Wi,n,s,r,o,a,c,l,h){super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class wi extends Ze{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class zs extends Ze{constructor(t,e,n=Kn,s,r,o,a=Ve,c=Ve,l,h=ci,d=1){if(h!==ci&&h!==Hi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:d};super(u,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Tl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class vg extends zs{constructor(t,e=Kn,n=Wi,s,r,o=Ve,a=Ve,c,l=ci){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class ff extends Ze{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Jt extends ge{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Kt(l,3)),this.setAttribute("normal",new Kt(h,3)),this.setAttribute("uv",new Kt(d,2));function g(v,p,m,M,y,_,T,E,b,x,w){const A=_/b,C=T/x,L=_/2,N=T/2,F=E/2,P=b+1,z=x+1;let U=0,B=0;const W=new D;for(let j=0;j<z;j++){const X=j*C-N;for(let et=0;et<P;et++){const Nt=et*A-L;W[v]=Nt*M,W[p]=X*y,W[m]=F,l.push(W.x,W.y,W.z),W[v]=0,W[p]=0,W[m]=E>0?1:-1,h.push(W.x,W.y,W.z),d.push(et/b),d.push(1-j/x),U+=1}}for(let j=0;j<x;j++)for(let X=0;X<b;X++){const et=u+X+P*j,Nt=u+X+P*(j+1),It=u+(X+1)+P*(j+1),Mt=u+(X+1)+P*j;c.push(et,Nt,Mt),c.push(Nt,It,Mt),B+=6}a.addGroup(f,B,w),f+=B,u+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Ho extends ge{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const o=[],a=[],c=[],l=[],h=e/2,d=Math.PI/2*t,u=e,f=2*d+u,g=n*2+r,v=s+1,p=new D,m=new D;for(let M=0;M<=g;M++){let y=0,_=0,T=0,E=0;if(M<=n){const w=M/n,A=w*Math.PI/2;_=-h-t*Math.cos(A),T=t*Math.sin(A),E=-t*Math.cos(A),y=w*d}else if(M<=n+r){const w=(M-n)/r;_=-h+w*e,T=t,E=0,y=d+w*u}else{const w=(M-n-r)/n,A=w*Math.PI/2;_=h+t*Math.sin(A),T=t*Math.cos(A),E=t*Math.sin(A),y=d+u+w*d}const b=Math.max(0,Math.min(1,y/f));let x=0;M===0?x=.5/s:M===g&&(x=-.5/s);for(let w=0;w<=s;w++){const A=w/s,C=A*Math.PI*2,L=Math.sin(C),N=Math.cos(C);m.x=-T*N,m.y=_,m.z=T*L,a.push(m.x,m.y,m.z),p.set(-T*N,E,T*L),p.normalize(),c.push(p.x,p.y,p.z),l.push(A+x,b)}if(M>0){const w=(M-1)*v;for(let A=0;A<s;A++){const C=w+A,L=w+A+1,N=M*v+A,F=M*v+A+1;o.push(C,L,N),o.push(L,F,N)}}}this.setIndex(o),this.setAttribute("position",new Kt(a,3)),this.setAttribute("normal",new Kt(c,3)),this.setAttribute("uv",new Kt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ho(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class Pl extends ge{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new D,h=new ft;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const f=n+d/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Kt(o,3)),this.setAttribute("normal",new Kt(a,3)),this.setAttribute("uv",new Kt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pl(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class fe extends ge{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],u=[],f=[];let g=0;const v=[],p=n/2;let m=0;M(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Kt(d,3)),this.setAttribute("normal",new Kt(u,3)),this.setAttribute("uv",new Kt(f,2));function M(){const _=new D,T=new D;let E=0;const b=(e-t)/n;for(let x=0;x<=r;x++){const w=[],A=x/r,C=A*(e-t)+t;for(let L=0;L<=s;L++){const N=L/s,F=N*c+a,P=Math.sin(F),z=Math.cos(F);T.x=C*P,T.y=-A*n+p,T.z=C*z,d.push(T.x,T.y,T.z),_.set(P,b,z).normalize(),u.push(_.x,_.y,_.z),f.push(N,1-A),w.push(g++)}v.push(w)}for(let x=0;x<s;x++)for(let w=0;w<r;w++){const A=v[w][x],C=v[w+1][x],L=v[w+1][x+1],N=v[w][x+1];(t>0||w!==0)&&(h.push(A,C,N),E+=3),(e>0||w!==r-1)&&(h.push(C,L,N),E+=3)}l.addGroup(m,E,0),m+=E}function y(_){const T=g,E=new ft,b=new D;let x=0;const w=_===!0?t:e,A=_===!0?1:-1;for(let L=1;L<=s;L++)d.push(0,p*A,0),u.push(0,A,0),f.push(.5,.5),g++;const C=g;for(let L=0;L<=s;L++){const F=L/s*c+a,P=Math.cos(F),z=Math.sin(F);b.x=w*z,b.y=p*A,b.z=w*P,d.push(b.x,b.y,b.z),u.push(0,A,0),E.x=P*.5+.5,E.y=z*.5*A+.5,f.push(E.x,E.y),g++}for(let L=0;L<s;L++){const N=T+L,F=C+L;_===!0?h.push(F,F+1,N):h.push(F+1,F,N),x+=3}l.addGroup(m,x,_===!0?1:2),m+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class je extends fe{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new je(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Il extends ge{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new Kt(r,3)),this.setAttribute("normal",new Kt(r.slice(),3)),this.setAttribute("uv",new Kt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const y=new D,_=new D,T=new D;for(let E=0;E<e.length;E+=3)f(e[E+0],y),f(e[E+1],_),f(e[E+2],T),c(y,_,T,M)}function c(M,y,_,T){const E=T+1,b=[];for(let x=0;x<=E;x++){b[x]=[];const w=M.clone().lerp(_,x/E),A=y.clone().lerp(_,x/E),C=E-x;for(let L=0;L<=C;L++)L===0&&x===E?b[x][L]=w:b[x][L]=w.clone().lerp(A,L/C)}for(let x=0;x<E;x++)for(let w=0;w<2*(E-x)-1;w++){const A=Math.floor(w/2);w%2===0?(u(b[x][A+1]),u(b[x+1][A]),u(b[x][A])):(u(b[x][A+1]),u(b[x+1][A+1]),u(b[x+1][A]))}}function l(M){const y=new D;for(let _=0;_<r.length;_+=3)y.x=r[_+0],y.y=r[_+1],y.z=r[_+2],y.normalize().multiplyScalar(M),r[_+0]=y.x,r[_+1]=y.y,r[_+2]=y.z}function h(){const M=new D;for(let y=0;y<r.length;y+=3){M.x=r[y+0],M.y=r[y+1],M.z=r[y+2];const _=p(M)/2/Math.PI+.5,T=m(M)/Math.PI+.5;o.push(_,1-T)}g(),d()}function d(){for(let M=0;M<o.length;M+=6){const y=o[M+0],_=o[M+2],T=o[M+4],E=Math.max(y,_,T),b=Math.min(y,_,T);E>.9&&b<.1&&(y<.2&&(o[M+0]+=1),_<.2&&(o[M+2]+=1),T<.2&&(o[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function f(M,y){const _=M*3;y.x=t[_+0],y.y=t[_+1],y.z=t[_+2]}function g(){const M=new D,y=new D,_=new D,T=new D,E=new ft,b=new ft,x=new ft;for(let w=0,A=0;w<r.length;w+=9,A+=6){M.set(r[w+0],r[w+1],r[w+2]),y.set(r[w+3],r[w+4],r[w+5]),_.set(r[w+6],r[w+7],r[w+8]),E.set(o[A+0],o[A+1]),b.set(o[A+2],o[A+3]),x.set(o[A+4],o[A+5]),T.copy(M).add(y).add(_).divideScalar(3);const C=p(T);v(E,A+0,M,C),v(b,A+2,y,C),v(x,A+4,_,C)}}function v(M,y,_,T){T<0&&M.x===1&&(o[y]=M.x-1),_.x===0&&_.z===0&&(o[y]=T/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Il(t.vertices,t.indices,t.radius,t.detail)}}class Jn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Qt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new ft:new D);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new D,s=[],r=[],o=[],a=new D,c=new _e;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new D)}r[0]=new D,o[0]=new D;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ae(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ae(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ll extends Jn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ft){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*h-f*d+this.aX,l=u*d+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class _g extends Ll{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Dl(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,d){let u=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+d)+(c-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const su=new D,ru=new D,Ia=new Dl,La=new Dl,Da=new Dl;class Qo extends Jn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(ru.subVectors(s[0],s[1]).add(s[0]),l=ru);const d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(su.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=su),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),Ia.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,g,v,p),La.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,g,v,p),Da.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,g,v,p)}else this.curveType==="catmullrom"&&(Ia.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),La.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),Da.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(Ia.calc(c),La.calc(c),Da.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ou(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function yg(i,t){const e=1-i;return e*e*t}function Mg(i,t){return 2*(1-i)*i*t}function bg(i,t){return i*i*t}function gr(i,t,e,n){return yg(i,t)+Mg(i,e)+bg(i,n)}function Sg(i,t){const e=1-i;return e*e*e*t}function wg(i,t){const e=1-i;return 3*e*e*i*t}function Eg(i,t){return 3*(1-i)*i*i*t}function Tg(i,t){return i*i*i*t}function xr(i,t,e,n,s){return Sg(i,t)+wg(i,e)+Eg(i,n)+Tg(i,s)}class pf extends Jn{constructor(t=new ft,e=new ft,n=new ft,s=new ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ft){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(xr(t,s.x,r.x,o.x,a.x),xr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ag extends Jn{constructor(t=new D,e=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new D){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(xr(t,s.x,r.x,o.x,a.x),xr(t,s.y,r.y,o.y,a.y),xr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class mf extends Jn{constructor(t=new ft,e=new ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ft){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gf extends Jn{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xf extends Jn{constructor(t=new ft,e=new ft,n=new ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ft){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(gr(t,s.x,r.x,o.x),gr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vf extends Jn{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(gr(t,s.x,r.x,o.x),gr(t,s.y,r.y,o.y),gr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _f extends Jn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ft){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(ou(a,c.x,l.x,h.x,d.x),ou(a,c.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ft().fromArray(s))}return this}}var Go=Object.freeze({__proto__:null,ArcCurve:_g,CatmullRomCurve3:Qo,CubicBezierCurve:pf,CubicBezierCurve3:Ag,EllipseCurve:Ll,LineCurve:mf,LineCurve3:gf,QuadraticBezierCurve:xf,QuadraticBezierCurve3:vf,SplineCurve:_f});class Cg extends Jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Go[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Go[s.type]().fromJSON(s))}return this}}class Kc extends Cg{constructor(t){super(),this.type="Path",this.currentPoint=new ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new mf(this.currentPoint.clone(),new ft(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new xf(this.currentPoint.clone(),new ft(t,e),new ft(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new pf(this.currentPoint.clone(),new ft(t,e),new ft(n,s),new ft(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new _f(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new Ll(t,e,n,s,r,o,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Jc extends Kc{constructor(t){super(t),this.uuid=$n(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Kc().fromJSON(s))}return this}}function Rg(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=yf(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=Ng(i,t,r,e)),i.length>80*e){a=i[0],c=i[1];let h=a,d=c;for(let u=e;u<s;u+=e){const f=i[u],g=i[u+1];f<a&&(a=f),g<c&&(c=g),f>h&&(h=f),g>d&&(d=g)}l=Math.max(h-a,d-c),l=l!==0?32767/l:0}return Tr(r,o,e,a,c,l,0),o}function yf(i,t,e,n,s){let r;if(s===Xg(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=au(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=au(o/n|0,i[o],i[o+1],r);return r&&Os(r,r.next)&&(Cr(r),r=r.next),r}function Yi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Os(e,e.next)||Re(e.prev,e,e.next)===0)){if(Cr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Tr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&kg(i,n,s,r);let a=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(r?Ig(i,n,s,r):Pg(i)){t.push(c.i,i.i,l.i),Cr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Lg(Yi(i),t),Tr(i,t,e,n,s,r,2)):o===2&&Dg(i,t,e,n,s,r):Tr(Yi(i),t,e,n,s,r,1);break}}}function Pg(i){const t=i.prev,e=i,n=i.next;if(Re(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=Math.min(s,r,o),d=Math.min(a,c,l),u=Math.max(s,r,o),f=Math.max(a,c,l);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&ar(s,a,r,c,o,l,g.x,g.y)&&Re(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Ig(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Re(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,d=r.y,u=o.y,f=Math.min(a,c,l),g=Math.min(h,d,u),v=Math.max(a,c,l),p=Math.max(h,d,u),m=Qc(f,g,t,e,n),M=Qc(v,p,t,e,n);let y=i.prevZ,_=i.nextZ;for(;y&&y.z>=m&&_&&_.z<=M;){if(y.x>=f&&y.x<=v&&y.y>=g&&y.y<=p&&y!==s&&y!==o&&ar(a,h,c,d,l,u,y.x,y.y)&&Re(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=f&&_.x<=v&&_.y>=g&&_.y<=p&&_!==s&&_!==o&&ar(a,h,c,d,l,u,_.x,_.y)&&Re(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=m;){if(y.x>=f&&y.x<=v&&y.y>=g&&y.y<=p&&y!==s&&y!==o&&ar(a,h,c,d,l,u,y.x,y.y)&&Re(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=M;){if(_.x>=f&&_.x<=v&&_.y>=g&&_.y<=p&&_!==s&&_!==o&&ar(a,h,c,d,l,u,_.x,_.y)&&Re(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Lg(i,t){let e=i;do{const n=e.prev,s=e.next.next;!Os(n,s)&&bf(n,e,e.next,s)&&Ar(n,s)&&Ar(s,n)&&(t.push(n.i,e.i,s.i),Cr(e),Cr(e.next),e=i=s),e=e.next}while(e!==i);return Yi(e)}function Dg(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Gg(o,a)){let c=Sf(o,a);o=Yi(o,o.next),c=Yi(c,c.next),Tr(o,t,e,n,s,r,0),Tr(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Ng(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=yf(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(Hg(l))}s.sort(Ug);for(let r=0;r<s.length;r++)e=Fg(s[r],e);return e}function Ug(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Fg(i,t){const e=zg(i,t);if(!e)return t;const n=Sf(e,i);return Yi(n,n.next),Yi(e,e.next)}function zg(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(Os(i,e))return e;do{if(Os(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,c=o.x,l=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Mf(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){const d=Math.abs(s-e.y)/(n-e.x);Ar(e,i)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&Og(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function Og(i,t){return Re(i.prev,i,t.prev)<0&&Re(t.next,i,i.next)<0}function kg(i,t,e,n){let s=i;do s.z===0&&(s.z=Qc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Bg(s)}function Bg(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Qc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Hg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Mf(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function ar(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Mf(i,t,e,n,s,r,o,a)}function Gg(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Vg(i,t)&&(Ar(i,t)&&Ar(t,i)&&Wg(i,t)&&(Re(i.prev,i,t.prev)||Re(i,t.prev,t))||Os(i,t)&&Re(i.prev,i,i.next)>0&&Re(t.prev,t,t.next)>0)}function Re(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Os(i,t){return i.x===t.x&&i.y===t.y}function bf(i,t,e,n){const s=co(Re(i,t,e)),r=co(Re(i,t,n)),o=co(Re(e,n,i)),a=co(Re(e,n,t));return!!(s!==r&&o!==a||s===0&&ao(i,e,t)||r===0&&ao(i,n,t)||o===0&&ao(e,i,n)||a===0&&ao(e,t,n))}function ao(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function co(i){return i>0?1:i<0?-1:0}function Vg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&bf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ar(i,t){return Re(i.prev,i,i.next)<0?Re(i,t,i.next)>=0&&Re(i,i.prev,t)>=0:Re(i,t,i.prev)<0||Re(i,i.next,t)<0}function Wg(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Sf(i,t){const e=jc(i.i,i.x,i.y),n=jc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function au(i,t,e,n){const s=jc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Cr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function jc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Xg(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class qg{static triangulate(t,e,n=2){return Rg(t,e,n)}}class Ts{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Ts.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];cu(t),lu(n,t);let o=t.length;e.forEach(cu);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,lu(n,e[c]);const a=qg.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function cu(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function lu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Vo extends ge{constructor(t=new Jc([new ft(.5,.5),new ft(-.5,.5),new ft(-.5,-.5),new ft(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new Kt(s,3)),this.setAttribute("uv",new Kt(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Yg;let y,_=!1,T,E,b,x;if(m){y=m.getSpacedPoints(h),_=!0,u=!1;const rt=m.isCatmullRomCurve3?m.closed:!1;T=m.computeFrenetFrames(h,rt),E=new D,b=new D,x=new D}u||(p=0,f=0,g=0,v=0);const w=a.extractPoints(l);let A=w.shape;const C=w.holes;if(!Ts.isClockWise(A)){A=A.reverse();for(let rt=0,ct=C.length;rt<ct;rt++){const ot=C[rt];Ts.isClockWise(ot)&&(C[rt]=ot.reverse())}}function N(rt){const ot=10000000000000001e-36;let xt=rt[0];for(let vt=1;vt<=rt.length;vt++){const Gt=vt%rt.length,zt=rt[Gt],mt=zt.x-xt.x,Ot=zt.y-xt.y,O=mt*mt+Ot*Ot,he=Math.max(Math.abs(zt.x),Math.abs(zt.y),Math.abs(xt.x),Math.abs(xt.y)),Ut=ot*he*he;if(O<=Ut){rt.splice(Gt,1),vt--;continue}xt=zt}}N(A),C.forEach(N);const F=C.length,P=A;for(let rt=0;rt<F;rt++){const ct=C[rt];A=A.concat(ct)}function z(rt,ct,ot){return ct||ce("ExtrudeGeometry: vec does not exist"),rt.clone().addScaledVector(ct,ot)}const U=A.length;function B(rt,ct,ot){let xt,vt,Gt;const zt=rt.x-ct.x,mt=rt.y-ct.y,Ot=ot.x-rt.x,O=ot.y-rt.y,he=zt*zt+mt*mt,Ut=zt*O-mt*Ot;if(Math.abs(Ut)>Number.EPSILON){const I=Math.sqrt(he),S=Math.sqrt(Ot*Ot+O*O),V=ct.x-mt/I,q=ct.y+zt/I,Q=ot.x-O/S,ut=ot.y+Ot/S,gt=((Q-V)*O-(ut-q)*Ot)/(zt*O-mt*Ot);xt=V+zt*gt-rt.x,vt=q+mt*gt-rt.y;const tt=xt*xt+vt*vt;if(tt<=2)return new ft(xt,vt);Gt=Math.sqrt(tt/2)}else{let I=!1;zt>Number.EPSILON?Ot>Number.EPSILON&&(I=!0):zt<-Number.EPSILON?Ot<-Number.EPSILON&&(I=!0):Math.sign(mt)===Math.sign(O)&&(I=!0),I?(xt=-mt,vt=zt,Gt=Math.sqrt(he)):(xt=zt,vt=mt,Gt=Math.sqrt(he/2))}return new ft(xt/Gt,vt/Gt)}const W=[];for(let rt=0,ct=P.length,ot=ct-1,xt=rt+1;rt<ct;rt++,ot++,xt++)ot===ct&&(ot=0),xt===ct&&(xt=0),W[rt]=B(P[rt],P[ot],P[xt]);const j=[];let X,et=W.concat();for(let rt=0,ct=F;rt<ct;rt++){const ot=C[rt];X=[];for(let xt=0,vt=ot.length,Gt=vt-1,zt=xt+1;xt<vt;xt++,Gt++,zt++)Gt===vt&&(Gt=0),zt===vt&&(zt=0),X[xt]=B(ot[xt],ot[Gt],ot[zt]);j.push(X),et=et.concat(X)}let Nt;if(p===0)Nt=Ts.triangulateShape(P,C);else{const rt=[],ct=[];for(let ot=0;ot<p;ot++){const xt=ot/p,vt=f*Math.cos(xt*Math.PI/2),Gt=g*Math.sin(xt*Math.PI/2)+v;for(let zt=0,mt=P.length;zt<mt;zt++){const Ot=z(P[zt],W[zt],Gt);pt(Ot.x,Ot.y,-vt),xt===0&&rt.push(Ot)}for(let zt=0,mt=F;zt<mt;zt++){const Ot=C[zt];X=j[zt];const O=[];for(let he=0,Ut=Ot.length;he<Ut;he++){const I=z(Ot[he],X[he],Gt);pt(I.x,I.y,-vt),xt===0&&O.push(I)}xt===0&&ct.push(O)}}Nt=Ts.triangulateShape(rt,ct)}const It=Nt.length,Mt=g+v;for(let rt=0;rt<U;rt++){const ct=u?z(A[rt],et[rt],Mt):A[rt];_?(b.copy(T.normals[0]).multiplyScalar(ct.x),E.copy(T.binormals[0]).multiplyScalar(ct.y),x.copy(y[0]).add(b).add(E),pt(x.x,x.y,x.z)):pt(ct.x,ct.y,0)}for(let rt=1;rt<=h;rt++)for(let ct=0;ct<U;ct++){const ot=u?z(A[ct],et[ct],Mt):A[ct];_?(b.copy(T.normals[rt]).multiplyScalar(ot.x),E.copy(T.binormals[rt]).multiplyScalar(ot.y),x.copy(y[rt]).add(b).add(E),pt(x.x,x.y,x.z)):pt(ot.x,ot.y,d/h*rt)}for(let rt=p-1;rt>=0;rt--){const ct=rt/p,ot=f*Math.cos(ct*Math.PI/2),xt=g*Math.sin(ct*Math.PI/2)+v;for(let vt=0,Gt=P.length;vt<Gt;vt++){const zt=z(P[vt],W[vt],xt);pt(zt.x,zt.y,d+ot)}for(let vt=0,Gt=C.length;vt<Gt;vt++){const zt=C[vt];X=j[vt];for(let mt=0,Ot=zt.length;mt<Ot;mt++){const O=z(zt[mt],X[mt],xt);_?pt(O.x,O.y+y[h-1].y,y[h-1].x+ot):pt(O.x,O.y,d+ot)}}}Z(),lt();function Z(){const rt=s.length/3;if(u){let ct=0,ot=U*ct;for(let xt=0;xt<It;xt++){const vt=Nt[xt];Ct(vt[2]+ot,vt[1]+ot,vt[0]+ot)}ct=h+p*2,ot=U*ct;for(let xt=0;xt<It;xt++){const vt=Nt[xt];Ct(vt[0]+ot,vt[1]+ot,vt[2]+ot)}}else{for(let ct=0;ct<It;ct++){const ot=Nt[ct];Ct(ot[2],ot[1],ot[0])}for(let ct=0;ct<It;ct++){const ot=Nt[ct];Ct(ot[0]+U*h,ot[1]+U*h,ot[2]+U*h)}}n.addGroup(rt,s.length/3-rt,0)}function lt(){const rt=s.length/3;let ct=0;st(P,ct),ct+=P.length;for(let ot=0,xt=C.length;ot<xt;ot++){const vt=C[ot];st(vt,ct),ct+=vt.length}n.addGroup(rt,s.length/3-rt,1)}function st(rt,ct){let ot=rt.length;for(;--ot>=0;){const xt=ot;let vt=ot-1;vt<0&&(vt=rt.length-1);for(let Gt=0,zt=h+p*2;Gt<zt;Gt++){const mt=U*Gt,Ot=U*(Gt+1),O=ct+xt+mt,he=ct+vt+mt,Ut=ct+vt+Ot,I=ct+xt+Ot;dt(O,he,Ut,I)}}}function pt(rt,ct,ot){c.push(rt),c.push(ct),c.push(ot)}function Ct(rt,ct,ot){ee(rt),ee(ct),ee(ot);const xt=s.length/3,vt=M.generateTopUV(n,s,xt-3,xt-2,xt-1);Wt(vt[0]),Wt(vt[1]),Wt(vt[2])}function dt(rt,ct,ot,xt){ee(rt),ee(ct),ee(xt),ee(ct),ee(ot),ee(xt);const vt=s.length/3,Gt=M.generateSideWallUV(n,s,vt-6,vt-3,vt-2,vt-1);Wt(Gt[0]),Wt(Gt[1]),Wt(Gt[3]),Wt(Gt[1]),Wt(Gt[2]),Wt(Gt[3])}function ee(rt){s.push(c[rt*3+0]),s.push(c[rt*3+1]),s.push(c[rt*3+2])}function Wt(rt){r.push(rt.x),r.push(rt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return $g(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Go[s.type]().fromJSON(s)),new Vo(n,t.options)}}const Yg={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new ft(r,o),new ft(a,c),new ft(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[s*3],f=t[s*3+1],g=t[s*3+2],v=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ft(o,1-c),new ft(l,1-d),new ft(u,1-g),new ft(v,1-m)]:[new ft(a,1-c),new ft(h,1-d),new ft(f,1-g),new ft(p,1-m)]}};function $g(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class vr extends Il{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new vr(t.radius,t.detail)}}class xn extends ge{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,d=t/a,u=e/c,f=[],g=[],v=[],p=[];for(let m=0;m<h;m++){const M=m*u-o;for(let y=0;y<l;y++){const _=y*d-r;g.push(_,-M,0),v.push(0,0,1),p.push(y/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let M=0;M<a;M++){const y=M+l*m,_=M+l*(m+1),T=M+1+l*(m+1),E=M+1+l*m;f.push(y,_,E),f.push(_,T,E)}this.setIndex(f),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(v,3)),this.setAttribute("uv",new Kt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xn(t.width,t.height,t.widthSegments,t.heightSegments)}}class ue extends ge{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],d=new D,u=new D,f=[],g=[],v=[],p=[];for(let m=0;m<=n;m++){const M=[],y=m/n,_=o+y*a,T=t*Math.cos(_),E=Math.sqrt(t*t-T*T);let b=0;m===0&&o===0?b=.5/e:m===n&&c===Math.PI&&(b=-.5/e);for(let x=0;x<=e;x++){const w=x/e,A=s+w*r;d.x=-E*Math.cos(A),d.y=T,d.z=E*Math.sin(A),g.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),p.push(w+b,1-y),M.push(l++)}h.push(M)}for(let m=0;m<n;m++)for(let M=0;M<e;M++){const y=h[m][M+1],_=h[m][M],T=h[m+1][M],E=h[m+1][M+1];(m!==0||o>0)&&f.push(y,_,E),(m!==n-1||c<Math.PI)&&f.push(_,T,E)}this.setIndex(f),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(v,3)),this.setAttribute("uv",new Kt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ue(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ln extends ge{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);const c=[],l=[],h=[],d=[],u=new D,f=new D,g=new D;for(let v=0;v<=n;v++){const p=o+v/n*a;for(let m=0;m<=s;m++){const M=m/s*r;f.x=(t+e*Math.cos(p))*Math.cos(M),f.y=(t+e*Math.cos(p))*Math.sin(M),f.z=e*Math.sin(p),l.push(f.x,f.y,f.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(m/s),d.push(v/n)}}for(let v=1;v<=n;v++)for(let p=1;p<=s;p++){const m=(s+1)*v+p-1,M=(s+1)*(v-1)+p-1,y=(s+1)*(v-1)+p,_=(s+1)*v+p;c.push(m,M,_),c.push(M,y,_)}this.setIndex(c),this.setAttribute("position",new Kt(l,3)),this.setAttribute("normal",new Kt(h,3)),this.setAttribute("uv",new Kt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ln(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class jo extends ge{constructor(t=new vf(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new D,c=new D,l=new ft;let h=new D;const d=[],u=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new Kt(d,3)),this.setAttribute("normal",new Kt(u,3)),this.setAttribute("uv",new Kt(f,2));function v(){for(let y=0;y<e;y++)p(y);p(r===!1?e:0),M(),m()}function p(y){h=t.getPointAt(y/e,h);const _=o.normals[y],T=o.binormals[y];for(let E=0;E<=s;E++){const b=E/s*Math.PI*2,x=Math.sin(b),w=-Math.cos(b);c.x=w*_.x+x*T.x,c.y=w*_.y+x*T.y,c.z=w*_.z+x*T.z,c.normalize(),u.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,d.push(a.x,a.y,a.z)}}function m(){for(let y=1;y<=e;y++)for(let _=1;_<=s;_++){const T=(s+1)*(y-1)+(_-1),E=(s+1)*y+(_-1),b=(s+1)*y+_,x=(s+1)*(y-1)+_;g.push(T,E,x),g.push(E,b,x)}}function M(){for(let y=0;y<=e;y++)for(let _=0;_<=s;_++)l.x=y/e,l.y=_/s,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new jo(new Go[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function ks(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(hu(s))s.isRenderTargetTexture?(Qt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(hu(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function sn(i){const t={};for(let e=0;e<i.length;e++){const n=ks(i[e]);for(const s in n)t[s]=n[s]}return t}function hu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Zg(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function wf(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}const Kg={clone:ks,merge:sn};var Jg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class un extends Ji{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jg,this.fragmentShader=Qg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ks(t.uniforms),this.uniformsGroups=Zg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new $t().setHex(s.value);break;case"v2":this.uniforms[n].value=new ft().fromArray(s.value);break;case"v3":this.uniforms[n].value=new D().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ce().fromArray(s.value);break;case"m3":this.uniforms[n].value=new te().fromArray(s.value);break;case"m4":this.uniforms[n].value=new _e().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class jg extends un{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class On extends Ji{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new $t(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yc,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class tx extends Ji{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=v0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ex extends Ji{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Nl extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new $t(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class nx extends Nl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $t(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Na=new _e,uu=new D,du=new D;class Ef{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.mapType=_n,this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rl,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new Ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;uu.setFromMatrixPosition(t.matrixWorld),e.position.copy(uu),du.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(du),e.updateMatrixWorld(),Na.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Na,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===wr||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Na)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const lo=new D,ho=new Bs,Gn=new D;class Tf extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(lo,ho,Gn),Gn.x===1&&Gn.y===1&&Gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lo,ho,Gn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(lo,ho,Gn),Gn.x===1&&Gn.y===1&&Gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lo,ho,Gn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const vi=new D,fu=new ft,pu=new ft;class vn extends Tf{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Er*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(pr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Er*2*Math.atan(Math.tan(pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(vi.x,vi.y).multiplyScalar(-t/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vi.x,vi.y).multiplyScalar(-t/vi.z)}getViewSize(t,e){return this.getViewBounds(t,fu,pu),e.subVectors(pu,fu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(pr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class ix extends Ef{constructor(){super(new vn(90,1,.5,500)),this.isPointLightShadow=!0}}class Af extends Nl{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ix}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Ul extends Tf{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class sx extends Ef{constructor(){super(new Ul(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rx extends Nl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new sx}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const ys=-90,Ms=1;class ox extends Le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new vn(ys,Ms,t,e);s.layers=this.layers,this.add(s);const r=new vn(ys,Ms,t,e);r.layers=this.layers,this.add(r);const o=new vn(ys,Ms,t,e);o.layers=this.layers,this.add(o);const a=new vn(ys,Ms,t,e);a.layers=this.layers,this.add(a);const c=new vn(ys,Ms,t,e);c.layers=this.layers,this.add(c);const l=new vn(ys,Ms,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===wr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ax extends vn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const mu=new _e;class cx{constructor(t,e,n=0,s=1/0){this.ray=new Cl(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Al,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ce("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return mu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(mu),this}intersectObject(t,e=!0,n=[]){return tl(t,this,n,e),n.sort(gu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)tl(t[s],this,n,e);return n.sort(gu),n}}function gu(i,t){return i.distance-t.distance}function tl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)tl(r[o],t,e,!0)}}const ql=class ql{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};ql.prototype.isMatrix2=!0;let xu=ql;function vu(i,t,e,n){const s=lx(n);switch(e){case nf:return i*t;case _l:return i*t/s.components*s.byteLength;case yl:return i*t/s.components*s.byteLength;case Xi:return i*t*2/s.components*s.byteLength;case Ml:return i*t*2/s.components*s.byteLength;case sf:return i*t*3/s.components*s.byteLength;case zn:return i*t*4/s.components*s.byteLength;case bl:return i*t*4/s.components*s.byteLength;case _o:case yo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Mo:case bo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case vc:case yc:return Math.max(i,16)*Math.max(t,8)/4;case xc:case _c:return Math.max(i,8)*Math.max(t,8)/2;case Mc:case bc:case wc:case Ec:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Sc:case Io:case Tc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ac:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Cc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Rc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Pc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ic:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Lc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Dc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Nc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Uc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Fc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case zc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Oc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case kc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Bc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Hc:case Gc:case Vc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Wc:case Xc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Lo:case qc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function lx(i){switch(i){case _n:case Qd:return{byteLength:1,components:1};case br:case jd:case ai:return{byteLength:2,components:1};case xl:case vl:return{byteLength:2,components:4};case Kn:case gl:case Fn:return{byteLength:4,components:1};case tf:case ef:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pl}}));typeof window<"u"&&(window.__THREE__?Qt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pl);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Cf(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function hx(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){const h=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const v=d[f];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var ux=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dx=`#ifdef USE_ALPHAHASH
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
#endif`,fx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,px=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xx=`#ifdef USE_AOMAP
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
#endif`,vx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_x=`#ifdef USE_BATCHING
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
#endif`,yx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wx=`#ifdef USE_IRIDESCENCE
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
#endif`,Ex=`#ifdef USE_BUMPMAP
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
#endif`,Tx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ax=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Px=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ix=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Lx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Dx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Nx=`#define PI 3.141592653589793
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
} // validated`,Ux=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Fx=`vec3 transformedNormal = objectNormal;
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
#endif`,zx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ox=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vx=`#ifdef USE_ENVMAP
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
#endif`,Wx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Xx=`#ifdef USE_ENVMAP
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
#endif`,qx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yx=`#ifdef USE_ENVMAP
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
#endif`,$x=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qx=`#ifdef USE_GRADIENTMAP
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
}`,jx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ev=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,iv=`#ifdef USE_ENVMAP
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
#endif`,sv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ov=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,av=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cv=`PhysicalMaterial material;
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
#endif`,lv=`uniform sampler2D dfgLUT;
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
}`,hv=`
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
#endif`,uv=`#if defined( RE_IndirectDiffuse )
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
#endif`,dv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fv=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,pv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_v=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mv=`#if defined( USE_POINTS_UV )
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
#endif`,bv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ev=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Av=`#ifdef USE_MORPHTARGETS
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
#endif`,Cv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Pv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Iv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Nv=`#ifdef USE_NORMALMAP
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
#endif`,Uv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ov=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$v=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Kv=`float getShadowMask() {
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
}`,Jv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qv=`#ifdef USE_SKINNING
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
#endif`,jv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,t_=`#ifdef USE_SKINNING
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
#endif`,e_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,n_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,i_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,s_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,r_=`#ifdef USE_TRANSMISSION
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
#endif`,o_=`#ifdef USE_TRANSMISSION
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
#endif`,a_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const u_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,d_=`uniform sampler2D t2D;
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
}`,f_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,m_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x_=`#include <common>
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
}`,v_=`#if DEPTH_PACKING == 3200
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
}`,__=`#define DISTANCE
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
}`,y_=`#define DISTANCE
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
}`,M_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,b_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S_=`uniform float scale;
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
}`,w_=`uniform vec3 diffuse;
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
}`,E_=`#include <common>
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
}`,T_=`uniform vec3 diffuse;
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
}`,A_=`#define LAMBERT
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
}`,C_=`#define LAMBERT
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
}`,R_=`#define MATCAP
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
}`,P_=`#define MATCAP
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
}`,I_=`#define NORMAL
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
}`,L_=`#define NORMAL
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
}`,D_=`#define PHONG
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
}`,N_=`#define PHONG
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
}`,U_=`#define STANDARD
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
}`,F_=`#define STANDARD
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
}`,z_=`#define TOON
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
}`,O_=`#define TOON
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
}`,k_=`uniform float size;
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
}`,B_=`uniform vec3 diffuse;
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
}`,H_=`#include <common>
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
}`,G_=`uniform vec3 color;
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
}`,V_=`uniform float rotation;
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
}`,W_=`uniform vec3 diffuse;
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
}`,se={alphahash_fragment:ux,alphahash_pars_fragment:dx,alphamap_fragment:fx,alphamap_pars_fragment:px,alphatest_fragment:mx,alphatest_pars_fragment:gx,aomap_fragment:xx,aomap_pars_fragment:vx,batching_pars_vertex:_x,batching_vertex:yx,begin_vertex:Mx,beginnormal_vertex:bx,bsdfs:Sx,iridescence_fragment:wx,bumpmap_pars_fragment:Ex,clipping_planes_fragment:Tx,clipping_planes_pars_fragment:Ax,clipping_planes_pars_vertex:Cx,clipping_planes_vertex:Rx,color_fragment:Px,color_pars_fragment:Ix,color_pars_vertex:Lx,color_vertex:Dx,common:Nx,cube_uv_reflection_fragment:Ux,defaultnormal_vertex:Fx,displacementmap_pars_vertex:zx,displacementmap_vertex:Ox,emissivemap_fragment:kx,emissivemap_pars_fragment:Bx,colorspace_fragment:Hx,colorspace_pars_fragment:Gx,envmap_fragment:Vx,envmap_common_pars_fragment:Wx,envmap_pars_fragment:Xx,envmap_pars_vertex:qx,envmap_physical_pars_fragment:iv,envmap_vertex:Yx,fog_vertex:$x,fog_pars_vertex:Zx,fog_fragment:Kx,fog_pars_fragment:Jx,gradientmap_pars_fragment:Qx,lightmap_pars_fragment:jx,lights_lambert_fragment:tv,lights_lambert_pars_fragment:ev,lights_pars_begin:nv,lights_toon_fragment:sv,lights_toon_pars_fragment:rv,lights_phong_fragment:ov,lights_phong_pars_fragment:av,lights_physical_fragment:cv,lights_physical_pars_fragment:lv,lights_fragment_begin:hv,lights_fragment_maps:uv,lights_fragment_end:dv,lightprobes_pars_fragment:fv,logdepthbuf_fragment:pv,logdepthbuf_pars_fragment:mv,logdepthbuf_pars_vertex:gv,logdepthbuf_vertex:xv,map_fragment:vv,map_pars_fragment:_v,map_particle_fragment:yv,map_particle_pars_fragment:Mv,metalnessmap_fragment:bv,metalnessmap_pars_fragment:Sv,morphinstance_vertex:wv,morphcolor_vertex:Ev,morphnormal_vertex:Tv,morphtarget_pars_vertex:Av,morphtarget_vertex:Cv,normal_fragment_begin:Rv,normal_fragment_maps:Pv,normal_pars_fragment:Iv,normal_pars_vertex:Lv,normal_vertex:Dv,normalmap_pars_fragment:Nv,clearcoat_normal_fragment_begin:Uv,clearcoat_normal_fragment_maps:Fv,clearcoat_pars_fragment:zv,iridescence_pars_fragment:Ov,opaque_fragment:kv,packing:Bv,premultiplied_alpha_fragment:Hv,project_vertex:Gv,dithering_fragment:Vv,dithering_pars_fragment:Wv,roughnessmap_fragment:Xv,roughnessmap_pars_fragment:qv,shadowmap_pars_fragment:Yv,shadowmap_pars_vertex:$v,shadowmap_vertex:Zv,shadowmask_pars_fragment:Kv,skinbase_vertex:Jv,skinning_pars_vertex:Qv,skinning_vertex:jv,skinnormal_vertex:t_,specularmap_fragment:e_,specularmap_pars_fragment:n_,tonemapping_fragment:i_,tonemapping_pars_fragment:s_,transmission_fragment:r_,transmission_pars_fragment:o_,uv_pars_fragment:a_,uv_pars_vertex:c_,uv_vertex:l_,worldpos_vertex:h_,background_vert:u_,background_frag:d_,backgroundCube_vert:f_,backgroundCube_frag:p_,cube_vert:m_,cube_frag:g_,depth_vert:x_,depth_frag:v_,distance_vert:__,distance_frag:y_,equirect_vert:M_,equirect_frag:b_,linedashed_vert:S_,linedashed_frag:w_,meshbasic_vert:E_,meshbasic_frag:T_,meshlambert_vert:A_,meshlambert_frag:C_,meshmatcap_vert:R_,meshmatcap_frag:P_,meshnormal_vert:I_,meshnormal_frag:L_,meshphong_vert:D_,meshphong_frag:N_,meshphysical_vert:U_,meshphysical_frag:F_,meshtoon_vert:z_,meshtoon_frag:O_,points_vert:k_,points_frag:B_,shadow_vert:H_,shadow_frag:G_,sprite_vert:V_,sprite_frag:W_},Tt={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},Xn={basic:{uniforms:sn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:sn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new $t(0)},envMapIntensity:{value:1}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:sn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:sn([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:sn([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new $t(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:sn([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:sn([Tt.points,Tt.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:sn([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:sn([Tt.common,Tt.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:sn([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:sn([Tt.sprite,Tt.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distance:{uniforms:sn([Tt.common,Tt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distance_vert,fragmentShader:se.distance_frag},shadow:{uniforms:sn([Tt.lights,Tt.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};Xn.physical={uniforms:sn([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};const uo={r:0,b:0,g:0},X_=new _e,Rf=new te;Rf.set(-1,0,0,0,1,0,0,0,1);function q_(i,t,e,n,s,r){const o=new $t(0);let a=s===!0?0:1,c,l,h=null,d=0,u=null;function f(M){let y=M.isScene===!0?M.background:null;if(y&&y.isTexture){const _=M.backgroundBlurriness>0;y=t.get(y,_)}return y}function g(M){let y=!1;const _=f(M);_===null?p(o,a):_&&_.isColor&&(p(_,1),y=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||y)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(M,y){const _=f(y);_&&(_.isCubeTexture||_.mapping===Jo)?(l===void 0&&(l=new J(new Jt(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:ks(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,E,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=_,l.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(X_.makeRotationFromEuler(y.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Rf),l.material.toneMapped=le.getTransfer(_.colorSpace)!==xe,(h!==_||d!==_.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,d=_.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new J(new xn(2,2),new un({name:"BackgroundMaterial",uniforms:ks(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=le.getTransfer(_.colorSpace)!==xe,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,y){M.getRGB(uo,wf(i)),e.buffers.color.setClear(uo.r,uo.g,uo.b,y,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,y=1){o.set(M),a=y,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,p(o,a)},render:g,addToRenderList:v,dispose:m}}function Y_(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,o=!1;function a(C,L,N,F,P){let z=!1;const U=d(C,F,N,L);r!==U&&(r=U,l(r.object)),z=f(C,F,N,P),z&&g(C,F,N,P),P!==null&&t.update(P,i.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,_(C,L,N,F),P!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(P).buffer))}function c(){return i.createVertexArray()}function l(C){return i.bindVertexArray(C)}function h(C){return i.deleteVertexArray(C)}function d(C,L,N,F){const P=F.wireframe===!0;let z=n[L.id];z===void 0&&(z={},n[L.id]=z);const U=C.isInstancedMesh===!0?C.id:0;let B=z[U];B===void 0&&(B={},z[U]=B);let W=B[N.id];W===void 0&&(W={},B[N.id]=W);let j=W[P];return j===void 0&&(j=u(c()),W[P]=j),j}function u(C){const L=[],N=[],F=[];for(let P=0;P<e;P++)L[P]=0,N[P]=0,F[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:N,attributeDivisors:F,object:C,attributes:{},index:null}}function f(C,L,N,F){const P=r.attributes,z=L.attributes;let U=0;const B=N.getAttributes();for(const W in B)if(B[W].location>=0){const X=P[W];let et=z[W];if(et===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(et=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(et=C.instanceColor)),X===void 0||X.attribute!==et||et&&X.data!==et.data)return!0;U++}return r.attributesNum!==U||r.index!==F}function g(C,L,N,F){const P={},z=L.attributes;let U=0;const B=N.getAttributes();for(const W in B)if(B[W].location>=0){let X=z[W];X===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(X=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(X=C.instanceColor));const et={};et.attribute=X,X&&X.data&&(et.data=X.data),P[W]=et,U++}r.attributes=P,r.attributesNum=U,r.index=F}function v(){const C=r.newAttributes;for(let L=0,N=C.length;L<N;L++)C[L]=0}function p(C){m(C,0)}function m(C,L){const N=r.newAttributes,F=r.enabledAttributes,P=r.attributeDivisors;N[C]=1,F[C]===0&&(i.enableVertexAttribArray(C),F[C]=1),P[C]!==L&&(i.vertexAttribDivisor(C,L),P[C]=L)}function M(){const C=r.newAttributes,L=r.enabledAttributes;for(let N=0,F=L.length;N<F;N++)L[N]!==C[N]&&(i.disableVertexAttribArray(N),L[N]=0)}function y(C,L,N,F,P,z,U){U===!0?i.vertexAttribIPointer(C,L,N,P,z):i.vertexAttribPointer(C,L,N,F,P,z)}function _(C,L,N,F){v();const P=F.attributes,z=N.getAttributes(),U=L.defaultAttributeValues;for(const B in z){const W=z[B];if(W.location>=0){let j=P[B];if(j===void 0&&(B==="instanceMatrix"&&C.instanceMatrix&&(j=C.instanceMatrix),B==="instanceColor"&&C.instanceColor&&(j=C.instanceColor)),j!==void 0){const X=j.normalized,et=j.itemSize,Nt=t.get(j);if(Nt===void 0)continue;const It=Nt.buffer,Mt=Nt.type,Z=Nt.bytesPerElement,lt=Mt===i.INT||Mt===i.UNSIGNED_INT||j.gpuType===gl;if(j.isInterleavedBufferAttribute){const st=j.data,pt=st.stride,Ct=j.offset;if(st.isInstancedInterleavedBuffer){for(let dt=0;dt<W.locationSize;dt++)m(W.location+dt,st.meshPerAttribute);C.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let dt=0;dt<W.locationSize;dt++)p(W.location+dt);i.bindBuffer(i.ARRAY_BUFFER,It);for(let dt=0;dt<W.locationSize;dt++)y(W.location+dt,et/W.locationSize,Mt,X,pt*Z,(Ct+et/W.locationSize*dt)*Z,lt)}else{if(j.isInstancedBufferAttribute){for(let st=0;st<W.locationSize;st++)m(W.location+st,j.meshPerAttribute);C.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let st=0;st<W.locationSize;st++)p(W.location+st);i.bindBuffer(i.ARRAY_BUFFER,It);for(let st=0;st<W.locationSize;st++)y(W.location+st,et/W.locationSize,Mt,X,et*Z,et/W.locationSize*st*Z,lt)}}else if(U!==void 0){const X=U[B];if(X!==void 0)switch(X.length){case 2:i.vertexAttrib2fv(W.location,X);break;case 3:i.vertexAttrib3fv(W.location,X);break;case 4:i.vertexAttrib4fv(W.location,X);break;default:i.vertexAttrib1fv(W.location,X)}}}}M()}function T(){w();for(const C in n){const L=n[C];for(const N in L){const F=L[N];for(const P in F){const z=F[P];for(const U in z)h(z[U].object),delete z[U];delete F[P]}}delete n[C]}}function E(C){if(n[C.id]===void 0)return;const L=n[C.id];for(const N in L){const F=L[N];for(const P in F){const z=F[P];for(const U in z)h(z[U].object),delete z[U];delete F[P]}}delete n[C.id]}function b(C){for(const L in n){const N=n[L];for(const F in N){const P=N[F];if(P[C.id]===void 0)continue;const z=P[C.id];for(const U in z)h(z[U].object),delete z[U];delete P[C.id]}}}function x(C){for(const L in n){const N=n[L],F=C.isInstancedMesh===!0?C.id:0,P=N[F];if(P!==void 0){for(const z in P){const U=P[z];for(const B in U)h(U[B].object),delete U[B];delete P[z]}delete N[F],Object.keys(N).length===0&&delete n[L]}}}function w(){A(),o=!0,r!==s&&(r=s,l(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:A,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:b,initAttributes:v,enableAttribute:p,disableUnusedAttributes:M}}function $_(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function o(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function a(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let f=0;f<h;f++)u+=l[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Z_(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(b){return!(b!==zn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const x=b===ai&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==_n&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Fn&&!x)}function c(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(Qt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Qt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:_,maxSamples:T,samples:E}}function K_(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Ni,a=new te,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,m=i.get(d);if(!s||g===null||g.length===0||r&&!p)r?h(null):l();else{const M=r?0:n,y=M*4;let _=m.clippingState||null;c.value=_,_=h(g,u,y,f);for(let T=0;T!==y;++T)_[T]=e[T];m.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){const v=d!==null?d.length:0;let p=null;if(v!==0){if(p=c.value,g!==!0||p===null){const m=f+v*4,M=u.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let y=0,_=f;y!==v;++y,_+=4)o.copy(d[y]).applyMatrix4(M,a),o.normal.toArray(p,_),p[_+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}const bi=4,_u=[.125,.215,.35,.446,.526,.582],zi=20,J_=256,js=new Ul,yu=new $t;let Ua=null,Fa=0,za=0,Oa=!1;const Q_=new D;class Mu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=Q_}=r;Ua=this._renderer.getRenderTarget(),Fa=this._renderer.getActiveCubeFace(),za=this._renderer.getActiveMipmapLevel(),Oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Su(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ua,Fa,za),this._renderer.xr.enabled=Oa,t.scissorTest=!1,bs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Wi||t.mapping===Fs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ua=this._renderer.getRenderTarget(),Fa=this._renderer.getActiveCubeFace(),za=this._renderer.getActiveMipmapLevel(),Oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:ai,format:zn,colorSpace:Do,depthBuffer:!1},s=bu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bu(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=j_(r)),this._blurMaterial=ey(r,t,e),this._ggxMaterial=ty(r,t,e)}return s}_compileMaterial(t){const e=new J(new ge,t);this._renderer.compile(e,js)}_sceneToCubeUV(t,e,n,s,r){const c=new vn(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(yu),d.toneMapping=Yn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new J(new Jt,new gn({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,p=v.material;let m=!1;const M=t.background;M?M.isColor&&(p.color.copy(M),t.background=null,m=!0):(p.color.copy(yu),m=!0);for(let y=0;y<6;y++){const _=y%3;_===0?(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[y],r.y,r.z)):_===1?(c.up.set(0,0,l[y]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[y],r.z)):(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[y]));const T=this._cubeSize;bs(s,_*T,y>2?T:0,T,T),d.setRenderTarget(s),m&&d.render(v,c),d.render(t,c)}d.toneMapping=f,d.autoClear=u,t.background=M}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Wi||t.mapping===Fs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=wu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Su());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;bs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,js)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const c=o.uniforms,l=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),u=0+l*1.25,f=d*u,{_lodMax:g}=this,v=this._sizeLods[n],p=3*v*(n>g-bi?n-g+bi:0),m=4*(this._cubeSize-v);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=g-e,bs(r,p,m,3*v,2*v),s.setRenderTarget(r),s.render(a,js),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,bs(t,p,m,3*v,2*v),s.setRenderTarget(t),s.render(a,js)}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&ce("blur direction must be either latitudinal or longitudinal!");const h=3,d=this._lodMeshes[s];d.material=l;const u=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*zi-1),v=r/g,p=isFinite(r)?1+Math.floor(h*v):zi;p>zi&&Qt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${zi}`);const m=[];let M=0;for(let b=0;b<zi;++b){const x=b/v,w=Math.exp(-x*x/2);m.push(w),b===0?M+=w:b<p&&(M+=2*w)}for(let b=0;b<m.length;b++)m[b]=m[b]/M;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=m,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:y}=this;u.dTheta.value=g,u.mipInt.value=y-n;const _=this._sizeLods[s],T=3*_*(s>y-bi?s-y+bi:0),E=4*(this._cubeSize-_);bs(e,T,E,3*_,2*_),c.setRenderTarget(e),c.render(d,js)}}function j_(i){const t=[],e=[],n=[];let s=i;const r=i-bi+1+_u.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-bi?c=_u[o-i+bi-1]:o===0&&(c=0),e.push(c);const l=1/(a-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,v=3,p=2,m=1,M=new Float32Array(v*g*f),y=new Float32Array(p*g*f),_=new Float32Array(m*g*f);for(let E=0;E<f;E++){const b=E%3*2/3-1,x=E>2?0:-1,w=[b,x,0,b+2/3,x,0,b+2/3,x+1,0,b,x,0,b+2/3,x+1,0,b,x+1,0];M.set(w,v*g*E),y.set(u,p*g*E);const A=[E,E,E,E,E,E];_.set(A,m*g*E)}const T=new ge;T.setAttribute("position",new We(M,v)),T.setAttribute("uv",new We(y,p)),T.setAttribute("faceIndex",new We(_,m)),n.push(new J(T,null)),s>bi&&s--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function bu(i,t,e){const n=new Zn(i,t,e);return n.texture.mapping=Jo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function bs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function ty(i,t,e){return new un({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:J_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ta(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function ey(i,t,e){const n=new Float32Array(zi),s=new D(0,1,0);return new un({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ta(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Su(){return new un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ta(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function wu(){return new un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function ta(){return`

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
	`}class Pf extends Zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new df(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Jt(5,5,5),r=new un({name:"CubemapFromEquirect",uniforms:ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:ri});r.uniforms.tEquirect.value=e;const o=new J(s,r),a=e.minFilter;return e.minFilter===Mi&&(e.minFilter=tn),new ox(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}function ny(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===ra||f===oa)if(t.has(u)){const g=t.get(u).texture;return a(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const v=new Pf(g.height);return v.fromEquirectangularTexture(i,u),t.set(u,v),u.addEventListener("dispose",l),a(v.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){const f=u.mapping,g=f===ra||f===oa,v=f===Wi||f===Fs;if(g||v){let p=e.get(u);const m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new Mu(i)),p=g?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{const M=u.image;return g&&M&&M.height>0||v&&M&&c(M)?(n===null&&(n=new Mu(i)),p=g?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function a(u,f){return f===ra?u.mapping=Wi:f===oa&&(u.mapping=Fs),u}function c(u){let f=0;const g=6;for(let v=0;v<g;v++)u[v]!==void 0&&f++;return f===g}function l(u){const f=u.target;f.removeEventListener("dispose",l);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function iy(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Is("WebGLRenderer: "+n+" extension not supported."),s}}}function sy(i,t,e,n){const s={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete s[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function c(d){const u=d.attributes;for(const f in u)t.update(u[f],i.ARRAY_BUFFER)}function l(d){const u=[],f=d.index,g=d.attributes.position;let v=0;if(g===void 0)return;if(f!==null){const M=f.array;v=f.version;for(let y=0,_=M.length;y<_;y+=3){const T=M[y+0],E=M[y+1],b=M[y+2];u.push(T,E,E,b,b,T)}}else{const M=g.array;v=g.version;for(let y=0,_=M.length/3-1;y<_;y+=3){const T=y+0,E=y+1,b=y+2;u.push(T,E,E,b,b,T)}}const p=new(g.count>=65535?lf:cf)(u,1);p.version=v;const m=r.get(d);m&&t.remove(m),r.set(d,p)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function ry(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,u){i.drawElements(n,u,r,d*o),e.update(u,n,1)}function l(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*o,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let v=0;for(let p=0;p<f;p++)v+=u[p];e.update(v,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function oy(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:ce("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ay(i,t,e){const n=new WeakMap,s=new Ce;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let A=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",A)};var f=A;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),p===!0&&(_=3);let T=a.attributes.position.count*_,E=1;T>t.maxTextureSize&&(E=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const b=new Float32Array(T*E*4*d),x=new of(b,T,E,d);x.type=Fn,x.needsUpdate=!0;const w=_*4;for(let C=0;C<d;C++){const L=m[C],N=M[C],F=y[C],P=T*E*4*C;for(let z=0;z<L.count;z++){const U=z*w;g===!0&&(s.fromBufferAttribute(L,z),b[P+U+0]=s.x,b[P+U+1]=s.y,b[P+U+2]=s.z,b[P+U+3]=0),v===!0&&(s.fromBufferAttribute(N,z),b[P+U+4]=s.x,b[P+U+5]=s.y,b[P+U+6]=s.z,b[P+U+7]=0),p===!0&&(s.fromBufferAttribute(F,z),b[P+U+8]=s.x,b[P+U+9]=s.y,b[P+U+10]=s.z,b[P+U+11]=F.itemSize===4?s.w:1)}}u={count:d,texture:x,size:new ft(T,E)},n.set(a,u),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const v=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function cy(i,t,e,n,s){let r=new WeakMap;function o(l){const h=s.render.frame,d=l.geometry,u=t.get(l,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}const ly={[Xd]:"LINEAR_TONE_MAPPING",[qd]:"REINHARD_TONE_MAPPING",[Yd]:"CINEON_TONE_MAPPING",[ml]:"ACES_FILMIC_TONE_MAPPING",[Zd]:"AGX_TONE_MAPPING",[Kd]:"NEUTRAL_TONE_MAPPING",[$d]:"CUSTOM_TONE_MAPPING"};function hy(i,t,e,n,s,r){const o=new Zn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new zs(t,e):void 0}),a=new Zn(t,e,{type:ai,depthBuffer:!1,stencilBuffer:!1}),c=new ge;c.setAttribute("position",new Kt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Kt([0,2,0,0,2,0],2));const l=new jg({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new J(c,l),d=new Ul(-1,1,1,-1,0,1);let u=null,f=null,g=!1,v,p=null,m=[],M=!1;this.setSize=function(y,_){o.setSize(y,_),a.setSize(y,_);for(let T=0;T<m.length;T++){const E=m[T];E.setSize&&E.setSize(y,_)}},this.setEffects=function(y){m=y,M=m.length>0&&m[0].isRenderPass===!0;const _=o.width,T=o.height;for(let E=0;E<m.length;E++){const b=m[E];b.setSize&&b.setSize(_,T)}},this.begin=function(y,_){if(g||y.toneMapping===Yn&&m.length===0)return!1;if(p=_,_!==null){const T=_.width,E=_.height;(o.width!==T||o.height!==E)&&this.setSize(T,E)}return M===!1&&y.setRenderTarget(o),v=y.toneMapping,y.toneMapping=Yn,!0},this.hasRenderPass=function(){return M},this.end=function(y,_){y.toneMapping=v,g=!0;let T=o,E=a;for(let b=0;b<m.length;b++){const x=m[b];if(x.enabled!==!1&&(x.render(y,E,T,_),x.needsSwap!==!1)){const w=T;T=E,E=w}}if(u!==y.outputColorSpace||f!==y.toneMapping){u=y.outputColorSpace,f=y.toneMapping,l.defines={},le.getTransfer(u)===xe&&(l.defines.SRGB_TRANSFER="");const b=ly[f];b&&(l.defines[b]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=T.texture,y.setRenderTarget(p),y.render(h,d),p=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),c.dispose(),l.dispose()}}const If=new Ze,el=new zs(1,1),Lf=new of,Df=new J0,Nf=new df,Eu=[],Tu=[],Au=new Float32Array(16),Cu=new Float32Array(9),Ru=new Float32Array(4);function Gs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Eu[s];if(r===void 0&&(r=new Float32Array(s),Eu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ke(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ea(i,t){let e=Tu[t];e===void 0&&(e=new Int32Array(t),Tu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function uy(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function dy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2fv(this.addr,t),Be(e,t)}}function fy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ke(e,t))return;i.uniform3fv(this.addr,t),Be(e,t)}}function py(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4fv(this.addr,t),Be(e,t)}}function my(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(ke(e,n))return;Ru.set(n),i.uniformMatrix2fv(this.addr,!1,Ru),Be(e,n)}}function gy(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(ke(e,n))return;Cu.set(n),i.uniformMatrix3fv(this.addr,!1,Cu),Be(e,n)}}function xy(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(ke(e,n))return;Au.set(n),i.uniformMatrix4fv(this.addr,!1,Au),Be(e,n)}}function vy(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function _y(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2iv(this.addr,t),Be(e,t)}}function yy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3iv(this.addr,t),Be(e,t)}}function My(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4iv(this.addr,t),Be(e,t)}}function by(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Sy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2uiv(this.addr,t),Be(e,t)}}function wy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3uiv(this.addr,t),Be(e,t)}}function Ey(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4uiv(this.addr,t),Be(e,t)}}function Ty(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(el.compareFunction=e.isReversedDepthBuffer()?wl:Sl,r=el):r=If,e.setTexture2D(t||r,s)}function Ay(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Df,s)}function Cy(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Nf,s)}function Ry(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Lf,s)}function Py(i){switch(i){case 5126:return uy;case 35664:return dy;case 35665:return fy;case 35666:return py;case 35674:return my;case 35675:return gy;case 35676:return xy;case 5124:case 35670:return vy;case 35667:case 35671:return _y;case 35668:case 35672:return yy;case 35669:case 35673:return My;case 5125:return by;case 36294:return Sy;case 36295:return wy;case 36296:return Ey;case 35678:case 36198:case 36298:case 36306:case 35682:return Ty;case 35679:case 36299:case 36307:return Ay;case 35680:case 36300:case 36308:case 36293:return Cy;case 36289:case 36303:case 36311:case 36292:return Ry}}function Iy(i,t){i.uniform1fv(this.addr,t)}function Ly(i,t){const e=Gs(t,this.size,2);i.uniform2fv(this.addr,e)}function Dy(i,t){const e=Gs(t,this.size,3);i.uniform3fv(this.addr,e)}function Ny(i,t){const e=Gs(t,this.size,4);i.uniform4fv(this.addr,e)}function Uy(i,t){const e=Gs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Fy(i,t){const e=Gs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function zy(i,t){const e=Gs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Oy(i,t){i.uniform1iv(this.addr,t)}function ky(i,t){i.uniform2iv(this.addr,t)}function By(i,t){i.uniform3iv(this.addr,t)}function Hy(i,t){i.uniform4iv(this.addr,t)}function Gy(i,t){i.uniform1uiv(this.addr,t)}function Vy(i,t){i.uniform2uiv(this.addr,t)}function Wy(i,t){i.uniform3uiv(this.addr,t)}function Xy(i,t){i.uniform4uiv(this.addr,t)}function qy(i,t,e){const n=this.cache,s=t.length,r=ea(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=el:o=If;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Yy(i,t,e){const n=this.cache,s=t.length,r=ea(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Df,r[o])}function $y(i,t,e){const n=this.cache,s=t.length,r=ea(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Nf,r[o])}function Zy(i,t,e){const n=this.cache,s=t.length,r=ea(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Lf,r[o])}function Ky(i){switch(i){case 5126:return Iy;case 35664:return Ly;case 35665:return Dy;case 35666:return Ny;case 35674:return Uy;case 35675:return Fy;case 35676:return zy;case 5124:case 35670:return Oy;case 35667:case 35671:return ky;case 35668:case 35672:return By;case 35669:case 35673:return Hy;case 5125:return Gy;case 36294:return Vy;case 36295:return Wy;case 36296:return Xy;case 35678:case 36198:case 36298:case 36306:case 35682:return qy;case 35679:case 36299:case 36307:return Yy;case 35680:case 36300:case 36308:case 36293:return $y;case 36289:case 36303:case 36311:case 36292:return Zy}}class Jy{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Py(e.type)}}class Qy{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ky(e.type)}}class jy{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const ka=/(\w+)(\])?(\[|\.)?/g;function Pu(i,t){i.seq.push(t),i.map[t.id]=t}function tM(i,t,e){const n=i.name,s=n.length;for(ka.lastIndex=0;;){const r=ka.exec(n),o=ka.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Pu(e,l===void 0?new Jy(a,i,t):new Qy(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new jy(a),Pu(e,d)),e=d}}}class So{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);tM(a,c,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Iu(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const eM=37297;let nM=0;function iM(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Lu=new te;function sM(i){le._getMatrix(Lu,le.workingColorSpace,i);const t=`mat3( ${Lu.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(i)){case No:return[t,"LinearTransferOETF"];case xe:return[t,"sRGBTransferOETF"];default:return Qt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Du(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+iM(i.getShaderSource(t),a)}else return r}function rM(i,t){const e=sM(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const oM={[Xd]:"Linear",[qd]:"Reinhard",[Yd]:"Cineon",[ml]:"ACESFilmic",[Zd]:"AgX",[Kd]:"Neutral",[$d]:"Custom"};function aM(i,t){const e=oM[t];return e===void 0?(Qt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const fo=new D;function cM(){le.getLuminanceCoefficients(fo);const i=fo.x.toFixed(4),t=fo.y.toFixed(4),e=fo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cr).join(`
`)}function hM(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function uM(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function cr(i){return i!==""}function Nu(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Uu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const dM=/^[ \t]*#include +<([\w\d./]+)>/gm;function nl(i){return i.replace(dM,pM)}const fM=new Map;function pM(i,t){let e=se[t];if(e===void 0){const n=fM.get(t);if(n!==void 0)e=se[n],Qt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return nl(e)}const mM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fu(i){return i.replace(mM,gM)}function gM(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zu(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const xM={[vo]:"SHADOWMAP_TYPE_PCF",[or]:"SHADOWMAP_TYPE_VSM"};function vM(i){return xM[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const _M={[Wi]:"ENVMAP_TYPE_CUBE",[Fs]:"ENVMAP_TYPE_CUBE",[Jo]:"ENVMAP_TYPE_CUBE_UV"};function yM(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":_M[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const MM={[Fs]:"ENVMAP_MODE_REFRACTION"};function bM(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":MM[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const SM={[Wd]:"ENVMAP_BLENDING_MULTIPLY",[m0]:"ENVMAP_BLENDING_MIX",[g0]:"ENVMAP_BLENDING_ADD"};function wM(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":SM[i.combine]||"ENVMAP_BLENDING_NONE"}function EM(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function TM(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=vM(e),l=yM(e),h=bM(e),d=wM(e),u=EM(e),f=lM(e),g=hM(r),v=s.createProgram();let p,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(cr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(cr).join(`
`),m.length>0&&(m+=`
`)):(p=[zu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cr).join(`
`),m=[zu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Yn?"#define TONE_MAPPING":"",e.toneMapping!==Yn?se.tonemapping_pars_fragment:"",e.toneMapping!==Yn?aM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,rM("linearToOutputTexel",e.outputColorSpace),cM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(cr).join(`
`)),o=nl(o),o=Nu(o,e),o=Uu(o,e),a=nl(a),a=Nu(a,e),a=Uu(a,e),o=Fu(o),a=Fu(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Nh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Nh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=M+p+o,_=M+m+a,T=Iu(s,s.VERTEX_SHADER,y),E=Iu(s,s.FRAGMENT_SHADER,_);s.attachShader(v,T),s.attachShader(v,E),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function b(C){if(i.debug.checkShaderErrors){const L=s.getProgramInfoLog(v)||"",N=s.getShaderInfoLog(T)||"",F=s.getShaderInfoLog(E)||"",P=L.trim(),z=N.trim(),U=F.trim();let B=!0,W=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,T,E);else{const j=Du(s,T,"vertex"),X=Du(s,E,"fragment");ce("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+P+`
`+j+`
`+X)}else P!==""?Qt("WebGLProgram: Program Info Log:",P):(z===""||U==="")&&(W=!1);W&&(C.diagnostics={runnable:B,programLog:P,vertexShader:{log:z,prefix:p},fragmentShader:{log:U,prefix:m}})}s.deleteShader(T),s.deleteShader(E),x=new So(s,v),w=uM(s,v)}let x;this.getUniforms=function(){return x===void 0&&b(this),x};let w;this.getAttributes=function(){return w===void 0&&b(this),w};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(v,eM)),A},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=nM++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=E,this}let AM=0;class CM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new RM(t),e.set(t,n)),n}}class RM{constructor(t){this.id=AM++,this.code=t,this.usedTimes=0}}function PM(i){return i===Xi||i===Io||i===Lo}function IM(i,t,e,n,s,r){const o=new Al,a=new CM,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer;let u=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function v(x,w,A,C,L,N){const F=C.fog,P=L.geometry,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,U=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,B=t.get(x.envMap||z,U),W=B&&B.mapping===Jo?B.image.height:null,j=f[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&Qt("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));const X=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,et=X!==void 0?X.length:0;let Nt=0;P.morphAttributes.position!==void 0&&(Nt=1),P.morphAttributes.normal!==void 0&&(Nt=2),P.morphAttributes.color!==void 0&&(Nt=3);let It,Mt,Z,lt;if(j){const kt=Xn[j];It=kt.vertexShader,Mt=kt.fragmentShader}else{It=x.vertexShader,Mt=x.fragmentShader;const kt=a.getVertexShaderStage(x),Pe=a.getFragmentShaderStage(x);a.update(x,kt,Pe),Z=kt.id,lt=Pe.id}const st=i.getRenderTarget(),pt=i.state.buffers.depth.getReversed(),Ct=L.isInstancedMesh===!0,dt=L.isBatchedMesh===!0,ee=!!x.map,Wt=!!x.matcap,rt=!!B,ct=!!x.aoMap,ot=!!x.lightMap,xt=!!x.bumpMap&&x.wireframe===!1,vt=!!x.normalMap,Gt=!!x.displacementMap,zt=!!x.emissiveMap,mt=!!x.metalnessMap,Ot=!!x.roughnessMap,O=x.anisotropy>0,he=x.clearcoat>0,Ut=x.dispersion>0,I=x.iridescence>0,S=x.sheen>0,V=x.transmission>0,q=O&&!!x.anisotropyMap,Q=he&&!!x.clearcoatMap,ut=he&&!!x.clearcoatNormalMap,gt=he&&!!x.clearcoatRoughnessMap,tt=I&&!!x.iridescenceMap,nt=I&&!!x.iridescenceThicknessMap,yt=S&&!!x.sheenColorMap,Bt=S&&!!x.sheenRoughnessMap,_t=!!x.specularMap,bt=!!x.specularColorMap,Yt=!!x.specularIntensityMap,Zt=V&&!!x.transmissionMap,ne=V&&!!x.thicknessMap,k=!!x.gradientMap,St=!!x.alphaMap,it=x.alphaTest>0,wt=!!x.alphaHash,Pt=!!x.extensions;let at=Yn;x.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(at=i.toneMapping);const Vt={shaderID:j,shaderType:x.type,shaderName:x.name,vertexShader:It,fragmentShader:Mt,defines:x.defines,customVertexShaderID:Z,customFragmentShaderID:lt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:dt,batchingColor:dt&&L._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&L.instanceColor!==null,instancingMorph:Ct&&L.morphTexture!==null,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:le.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ee,matcap:Wt,envMap:rt,envMapMode:rt&&B.mapping,envMapCubeUVHeight:W,aoMap:ct,lightMap:ot,bumpMap:xt,normalMap:vt,displacementMap:Gt,emissiveMap:zt,normalMapObjectSpace:vt&&x.normalMapType===_0,normalMapTangentSpace:vt&&x.normalMapType===Yc,packedNormalMap:vt&&x.normalMapType===Yc&&PM(x.normalMap.format),metalnessMap:mt,roughnessMap:Ot,anisotropy:O,anisotropyMap:q,clearcoat:he,clearcoatMap:Q,clearcoatNormalMap:ut,clearcoatRoughnessMap:gt,dispersion:Ut,iridescence:I,iridescenceMap:tt,iridescenceThicknessMap:nt,sheen:S,sheenColorMap:yt,sheenRoughnessMap:Bt,specularMap:_t,specularColorMap:bt,specularIntensityMap:Yt,transmission:V,transmissionMap:Zt,thicknessMap:ne,gradientMap:k,opaque:x.transparent===!1&&x.blending===Ps&&x.alphaToCoverage===!1,alphaMap:St,alphaTest:it,alphaHash:wt,combine:x.combine,mapUv:ee&&g(x.map.channel),aoMapUv:ct&&g(x.aoMap.channel),lightMapUv:ot&&g(x.lightMap.channel),bumpMapUv:xt&&g(x.bumpMap.channel),normalMapUv:vt&&g(x.normalMap.channel),displacementMapUv:Gt&&g(x.displacementMap.channel),emissiveMapUv:zt&&g(x.emissiveMap.channel),metalnessMapUv:mt&&g(x.metalnessMap.channel),roughnessMapUv:Ot&&g(x.roughnessMap.channel),anisotropyMapUv:q&&g(x.anisotropyMap.channel),clearcoatMapUv:Q&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ut&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&g(x.sheenRoughnessMap.channel),specularMapUv:_t&&g(x.specularMap.channel),specularColorMapUv:bt&&g(x.specularColorMap.channel),specularIntensityMapUv:Yt&&g(x.specularIntensityMap.channel),transmissionMapUv:Zt&&g(x.transmissionMap.channel),thicknessMapUv:ne&&g(x.thicknessMap.channel),alphaMapUv:St&&g(x.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(vt||O),vertexNormals:!!P.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!P.attributes.uv&&(ee||St),fog:!!F,useFog:x.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||P.attributes.normal===void 0&&vt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:pt,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:Nt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:at,decodeVideoTexture:ee&&x.map.isVideoTexture===!0&&le.getTransfer(x.map.colorSpace)===xe,decodeVideoTextureEmissive:zt&&x.emissiveMap.isVideoTexture===!0&&le.getTransfer(x.emissiveMap.colorSpace)===xe,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ze,flipSided:x.side===en,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Pt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pt&&x.extensions.multiDraw===!0||dt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Vt.vertexUv1s=c.has(1),Vt.vertexUv2s=c.has(2),Vt.vertexUv3s=c.has(3),c.clear(),Vt}function p(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const A in x.defines)w.push(A),w.push(x.defines[A]);return x.isRawShaderMaterial===!1&&(m(w,x),M(w,x),w.push(i.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function m(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function M(x,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function y(x){const w=f[x.type];let A;if(w){const C=Xn[w];A=Kg.clone(C.uniforms)}else A=x.uniforms;return A}function _(x,w){let A=h.get(w);return A!==void 0?++A.usedTimes:(A=new TM(i,w,x,s),l.push(A),h.set(w,A)),A}function T(x){if(--x.usedTimes===0){const w=l.indexOf(x);l[w]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function E(x){a.remove(x)}function b(){a.dispose()}return{getParameters:v,getProgramCacheKey:p,getUniforms:y,acquireProgram:_,releaseProgram:T,releaseShaderCache:E,programs:l,dispose:b}}function LM(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function DM(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Ou(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ku(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,g,v,p,m){let M=i[t];return M===void 0?(M={id:u.id,object:u,geometry:f,material:g,materialVariant:o(u),groupOrder:v,renderOrder:u.renderOrder,z:p,group:m},i[t]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=g,M.materialVariant=o(u),M.groupOrder=v,M.renderOrder=u.renderOrder,M.z=p,M.group=m),t++,M}function c(u,f,g,v,p,m){const M=a(u,f,g,v,p,m);g.transmission>0?n.push(M):g.transparent===!0?s.push(M):e.push(M)}function l(u,f,g,v,p,m){const M=a(u,f,g,v,p,m);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):e.unshift(M)}function h(u,f,g){e.length>1&&e.sort(u||DM),n.length>1&&n.sort(f||Ou),s.length>1&&s.sort(f||Ou),g&&(e.reverse(),n.reverse(),s.reverse())}function d(){for(let u=t,f=i.length;u<f;u++){const g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:d,sort:h}}function NM(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new ku,i.set(n,[o])):s>=r.length?(o=new ku,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function UM(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new $t};break;case"SpotLight":e={position:new D,direction:new D,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new $t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":e={color:new $t,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function FM(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let zM=0;function OM(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function kM(i){const t=new UM,e=FM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);const s=new D,r=new _e,o=new _e;function a(l){let h=0,d=0,u=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,g=0,v=0,p=0,m=0,M=0,y=0,_=0,T=0,E=0,b=0;l.sort(OM);for(let w=0,A=l.length;w<A;w++){const C=l[w],L=C.color,N=C.intensity,F=C.distance;let P=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Xi?P=C.shadow.map.texture:P=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=L.r*N,d+=L.g*N,u+=L.b*N;else if(C.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(C.sh.coefficients[z],N);b++}else if(C.isDirectionalLight){const z=t.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const U=C.shadow,B=e.get(C);B.shadowIntensity=U.intensity,B.shadowBias=U.bias,B.shadowNormalBias=U.normalBias,B.shadowRadius=U.radius,B.shadowMapSize=U.mapSize,n.directionalShadow[f]=B,n.directionalShadowMap[f]=P,n.directionalShadowMatrix[f]=C.shadow.matrix,M++}n.directional[f]=z,f++}else if(C.isSpotLight){const z=t.get(C);z.position.setFromMatrixPosition(C.matrixWorld),z.color.copy(L).multiplyScalar(N),z.distance=F,z.coneCos=Math.cos(C.angle),z.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),z.decay=C.decay,n.spot[v]=z;const U=C.shadow;if(C.map&&(n.spotLightMap[T]=C.map,T++,U.updateMatrices(C),C.castShadow&&E++),n.spotLightMatrix[v]=U.matrix,C.castShadow){const B=e.get(C);B.shadowIntensity=U.intensity,B.shadowBias=U.bias,B.shadowNormalBias=U.normalBias,B.shadowRadius=U.radius,B.shadowMapSize=U.mapSize,n.spotShadow[v]=B,n.spotShadowMap[v]=P,_++}v++}else if(C.isRectAreaLight){const z=t.get(C);z.color.copy(L).multiplyScalar(N),z.halfWidth.set(C.width*.5,0,0),z.halfHeight.set(0,C.height*.5,0),n.rectArea[p]=z,p++}else if(C.isPointLight){const z=t.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),z.distance=C.distance,z.decay=C.decay,C.castShadow){const U=C.shadow,B=e.get(C);B.shadowIntensity=U.intensity,B.shadowBias=U.bias,B.shadowNormalBias=U.normalBias,B.shadowRadius=U.radius,B.shadowMapSize=U.mapSize,B.shadowCameraNear=U.camera.near,B.shadowCameraFar=U.camera.far,n.pointShadow[g]=B,n.pointShadowMap[g]=P,n.pointShadowMatrix[g]=C.shadow.matrix,y++}n.point[g]=z,g++}else if(C.isHemisphereLight){const z=t.get(C);z.skyColor.copy(C.color).multiplyScalar(N),z.groundColor.copy(C.groundColor).multiplyScalar(N),n.hemi[m]=z,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Tt.LTC_FLOAT_1,n.rectAreaLTC2=Tt.LTC_FLOAT_2):(n.rectAreaLTC1=Tt.LTC_HALF_1,n.rectAreaLTC2=Tt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const x=n.hash;(x.directionalLength!==f||x.pointLength!==g||x.spotLength!==v||x.rectAreaLength!==p||x.hemiLength!==m||x.numDirectionalShadows!==M||x.numPointShadows!==y||x.numSpotShadows!==_||x.numSpotMaps!==T||x.numLightProbes!==b)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+T-E,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=b,x.directionalLength=f,x.pointLength=g,x.spotLength=v,x.rectAreaLength=p,x.hemiLength=m,x.numDirectionalShadows=M,x.numPointShadows=y,x.numSpotShadows=_,x.numSpotMaps=T,x.numLightProbes=b,n.version=zM++)}function c(l,h){let d=0,u=0,f=0,g=0,v=0;const p=h.matrixWorldInverse;for(let m=0,M=l.length;m<M;m++){const y=l[m];if(y.isDirectionalLight){const _=n.directional[d];_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(p),d++}else if(y.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(p),_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(p),f++}else if(y.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(p),o.identity(),r.copy(y.matrixWorld),r.premultiply(p),o.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const _=n.point[u];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(p),u++}else if(y.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(p),v++}}}return{setup:a,setupView:c,state:n}}function Bu(i){const t=new kM(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function c(u){s.push(u)}function l(){t.setup(e)}function h(u){t.setupView(e,u)}const d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function BM(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Bu(i),t.set(s,[a])):r>=o.length?(a=new Bu(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const HM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GM=`uniform sampler2D shadow_pass;
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
}`,VM=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],WM=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Hu=new _e,tr=new D,Ba=new D;function XM(i,t,e){let n=new Rl;const s=new ft,r=new ft,o=new Ce,a=new tx,c=new ex,l={},h=e.maxTextureSize,d={[Si]:en,[en]:Si,[ze]:ze},u=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:HM,fragmentShader:GM}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new ge;g.setAttribute("position",new We(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new J(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vo;let m=this.type;this.render=function(E,b,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===Km&&(Qt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=vo);const w=i.getRenderTarget(),A=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),L=i.state;L.setBlending(ri),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const N=m!==this.type;N&&b.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(P=>P.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,P=E.length;F<P;F++){const z=E[F],U=z.shadow;if(U===void 0){Qt("WebGLShadowMap:",z,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);const B=U.getFrameExtents();s.multiply(B),r.copy(U.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/B.x),s.x=r.x*B.x,U.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/B.y),s.y=r.y*B.y,U.mapSize.y=r.y));const W=i.state.buffers.depth.getReversed();if(U.camera._reversedDepth=W,U.map===null||N===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===or){if(z.isPointLight){Qt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new Zn(s.x,s.y,{format:Xi,type:ai,minFilter:tn,magFilter:tn,generateMipmaps:!1}),U.map.texture.name=z.name+".shadowMap",U.map.depthTexture=new zs(s.x,s.y,Fn),U.map.depthTexture.name=z.name+".shadowMapDepth",U.map.depthTexture.format=ci,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Ve,U.map.depthTexture.magFilter=Ve}else z.isPointLight?(U.map=new Pf(s.x),U.map.depthTexture=new vg(s.x,Kn)):(U.map=new Zn(s.x,s.y),U.map.depthTexture=new zs(s.x,s.y,Kn)),U.map.depthTexture.name=z.name+".shadowMap",U.map.depthTexture.format=ci,this.type===vo?(U.map.depthTexture.compareFunction=W?wl:Sl,U.map.depthTexture.minFilter=tn,U.map.depthTexture.magFilter=tn):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Ve,U.map.depthTexture.magFilter=Ve);U.camera.updateProjectionMatrix()}const j=U.map.isWebGLCubeRenderTarget?6:1;for(let X=0;X<j;X++){if(U.map.isWebGLCubeRenderTarget)i.setRenderTarget(U.map,X),i.clear();else{X===0&&(i.setRenderTarget(U.map),i.clear());const et=U.getViewport(X);o.set(r.x*et.x,r.y*et.y,r.x*et.z,r.y*et.w),L.viewport(o)}if(z.isPointLight){const et=U.camera,Nt=U.matrix,It=z.distance||et.far;It!==et.far&&(et.far=It,et.updateProjectionMatrix()),tr.setFromMatrixPosition(z.matrixWorld),et.position.copy(tr),Ba.copy(et.position),Ba.add(VM[X]),et.up.copy(WM[X]),et.lookAt(Ba),et.updateMatrixWorld(),Nt.makeTranslation(-tr.x,-tr.y,-tr.z),Hu.multiplyMatrices(et.projectionMatrix,et.matrixWorldInverse),U._frustum.setFromProjectionMatrix(Hu,et.coordinateSystem,et.reversedDepth)}else U.updateMatrices(z);n=U.getFrustum(),_(b,x,U.camera,z,this.type)}U.isPointLightShadow!==!0&&this.type===or&&M(U,x),U.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(w,A,C)};function M(E,b){const x=t.update(v);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Zn(s.x,s.y,{format:Xi,type:ai})),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(b,null,x,u,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(b,null,x,f,v,null)}function y(E,b,x,w){let A=null;const C=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)A=C;else if(A=x.isPointLight===!0?c:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const L=A.uuid,N=b.uuid;let F=l[L];F===void 0&&(F={},l[L]=F);let P=F[N];P===void 0&&(P=A.clone(),F[N]=P,b.addEventListener("dispose",T)),A=P}if(A.visible=b.visible,A.wireframe=b.wireframe,w===or?A.side=b.shadowSide!==null?b.shadowSide:b.side:A.side=b.shadowSide!==null?b.shadowSide:d[b.side],A.alphaMap=b.alphaMap,A.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,A.map=b.map,A.clipShadows=b.clipShadows,A.clippingPlanes=b.clippingPlanes,A.clipIntersection=b.clipIntersection,A.displacementMap=b.displacementMap,A.displacementScale=b.displacementScale,A.displacementBias=b.displacementBias,A.wireframeLinewidth=b.wireframeLinewidth,A.linewidth=b.linewidth,x.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const L=i.properties.get(A);L.light=x}return A}function _(E,b,x,w,A){if(E.visible===!1)return;if(E.layers.test(b.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&A===or)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);const N=t.update(E),F=E.material;if(Array.isArray(F)){const P=N.groups;for(let z=0,U=P.length;z<U;z++){const B=P[z],W=F[B.materialIndex];if(W&&W.visible){const j=y(E,W,w,A);E.onBeforeShadow(i,E,b,x,N,j,B),i.renderBufferDirect(x,null,N,j,E,B),E.onAfterShadow(i,E,b,x,N,j,B)}}}else if(F.visible){const P=y(E,F,w,A);E.onBeforeShadow(i,E,b,x,N,P,null),i.renderBufferDirect(x,null,N,P,E,null),E.onAfterShadow(i,E,b,x,N,P,null)}}const L=E.children;for(let N=0,F=L.length;N<F;N++)_(L[N],b,x,w,A)}function T(E){E.target.removeEventListener("dispose",T);for(const x in l){const w=l[x],A=E.target.uuid;A in w&&(w[A].dispose(),delete w[A])}}}function qM(i,t){function e(){let k=!1;const St=new Ce;let it=null;const wt=new Ce(0,0,0,0);return{setMask:function(Pt){it!==Pt&&!k&&(i.colorMask(Pt,Pt,Pt,Pt),it=Pt)},setLocked:function(Pt){k=Pt},setClear:function(Pt,at,Vt,kt,Pe){Pe===!0&&(Pt*=kt,at*=kt,Vt*=kt),St.set(Pt,at,Vt,kt),wt.equals(St)===!1&&(i.clearColor(Pt,at,Vt,kt),wt.copy(St))},reset:function(){k=!1,it=null,wt.set(-1,0,0,0)}}}function n(){let k=!1,St=!1,it=null,wt=null,Pt=null;return{setReversed:function(at){if(St!==at){const Vt=t.get("EXT_clip_control");at?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT),St=at;const kt=Pt;Pt=null,this.setClear(kt)}},getReversed:function(){return St},setTest:function(at){at?st(i.DEPTH_TEST):pt(i.DEPTH_TEST)},setMask:function(at){it!==at&&!k&&(i.depthMask(at),it=at)},setFunc:function(at){if(St&&(at=R0[at]),wt!==at){switch(at){case lc:i.depthFunc(i.NEVER);break;case hc:i.depthFunc(i.ALWAYS);break;case uc:i.depthFunc(i.LESS);break;case Us:i.depthFunc(i.LEQUAL);break;case dc:i.depthFunc(i.EQUAL);break;case fc:i.depthFunc(i.GEQUAL);break;case pc:i.depthFunc(i.GREATER);break;case mc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}wt=at}},setLocked:function(at){k=at},setClear:function(at){Pt!==at&&(Pt=at,St&&(at=1-at),i.clearDepth(at))},reset:function(){k=!1,it=null,wt=null,Pt=null,St=!1}}}function s(){let k=!1,St=null,it=null,wt=null,Pt=null,at=null,Vt=null,kt=null,Pe=null;return{setTest:function(we){k||(we?st(i.STENCIL_TEST):pt(i.STENCIL_TEST))},setMask:function(we){St!==we&&!k&&(i.stencilMask(we),St=we)},setFunc:function(we,kn,Bn){(it!==we||wt!==kn||Pt!==Bn)&&(i.stencilFunc(we,kn,Bn),it=we,wt=kn,Pt=Bn)},setOp:function(we,kn,Bn){(at!==we||Vt!==kn||kt!==Bn)&&(i.stencilOp(we,kn,Bn),at=we,Vt=kn,kt=Bn)},setLocked:function(we){k=we},setClear:function(we){Pe!==we&&(i.clearStencil(we),Pe=we)},reset:function(){k=!1,St=null,it=null,wt=null,Pt=null,at=null,Vt=null,kt=null,Pe=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},d={},u={},f=new WeakMap,g=[],v=null,p=!1,m=null,M=null,y=null,_=null,T=null,E=null,b=null,x=new $t(0,0,0),w=0,A=!1,C=null,L=null,N=null,F=null,P=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,B=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(W)[1]),U=B>=1):W.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),U=B>=2);let j=null,X={};const et=i.getParameter(i.SCISSOR_BOX),Nt=i.getParameter(i.VIEWPORT),It=new Ce().fromArray(et),Mt=new Ce().fromArray(Nt);function Z(k,St,it,wt){const Pt=new Uint8Array(4),at=i.createTexture();i.bindTexture(k,at),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Vt=0;Vt<it;Vt++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(St,0,i.RGBA,1,1,wt,0,i.RGBA,i.UNSIGNED_BYTE,Pt):i.texImage2D(St+Vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pt);return at}const lt={};lt[i.TEXTURE_2D]=Z(i.TEXTURE_2D,i.TEXTURE_2D,1),lt[i.TEXTURE_CUBE_MAP]=Z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[i.TEXTURE_2D_ARRAY]=Z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),lt[i.TEXTURE_3D]=Z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),st(i.DEPTH_TEST),o.setFunc(Us),xt(!1),vt(Ph),st(i.CULL_FACE),ct(ri);function st(k){h[k]!==!0&&(i.enable(k),h[k]=!0)}function pt(k){h[k]!==!1&&(i.disable(k),h[k]=!1)}function Ct(k,St){return u[k]!==St?(i.bindFramebuffer(k,St),u[k]=St,k===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=St),k===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=St),!0):!1}function dt(k,St){let it=g,wt=!1;if(k){it=f.get(St),it===void 0&&(it=[],f.set(St,it));const Pt=k.textures;if(it.length!==Pt.length||it[0]!==i.COLOR_ATTACHMENT0){for(let at=0,Vt=Pt.length;at<Vt;at++)it[at]=i.COLOR_ATTACHMENT0+at;it.length=Pt.length,wt=!0}}else it[0]!==i.BACK&&(it[0]=i.BACK,wt=!0);wt&&i.drawBuffers(it)}function ee(k){return v!==k?(i.useProgram(k),v=k,!0):!1}const Wt={[Fi]:i.FUNC_ADD,[Qm]:i.FUNC_SUBTRACT,[jm]:i.FUNC_REVERSE_SUBTRACT};Wt[t0]=i.MIN,Wt[e0]=i.MAX;const rt={[n0]:i.ZERO,[i0]:i.ONE,[s0]:i.SRC_COLOR,[ac]:i.SRC_ALPHA,[h0]:i.SRC_ALPHA_SATURATE,[c0]:i.DST_COLOR,[o0]:i.DST_ALPHA,[r0]:i.ONE_MINUS_SRC_COLOR,[cc]:i.ONE_MINUS_SRC_ALPHA,[l0]:i.ONE_MINUS_DST_COLOR,[a0]:i.ONE_MINUS_DST_ALPHA,[u0]:i.CONSTANT_COLOR,[d0]:i.ONE_MINUS_CONSTANT_COLOR,[f0]:i.CONSTANT_ALPHA,[p0]:i.ONE_MINUS_CONSTANT_ALPHA};function ct(k,St,it,wt,Pt,at,Vt,kt,Pe,we){if(k===ri){p===!0&&(pt(i.BLEND),p=!1);return}if(p===!1&&(st(i.BLEND),p=!0),k!==Jm){if(k!==m||we!==A){if((M!==Fi||T!==Fi)&&(i.blendEquation(i.FUNC_ADD),M=Fi,T=Fi),we)switch(k){case Ps:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Po:i.blendFunc(i.ONE,i.ONE);break;case Ih:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Lh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ce("WebGLState: Invalid blending: ",k);break}else switch(k){case Ps:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Po:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ih:ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lh:ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ce("WebGLState: Invalid blending: ",k);break}y=null,_=null,E=null,b=null,x.set(0,0,0),w=0,m=k,A=we}return}Pt=Pt||St,at=at||it,Vt=Vt||wt,(St!==M||Pt!==T)&&(i.blendEquationSeparate(Wt[St],Wt[Pt]),M=St,T=Pt),(it!==y||wt!==_||at!==E||Vt!==b)&&(i.blendFuncSeparate(rt[it],rt[wt],rt[at],rt[Vt]),y=it,_=wt,E=at,b=Vt),(kt.equals(x)===!1||Pe!==w)&&(i.blendColor(kt.r,kt.g,kt.b,Pe),x.copy(kt),w=Pe),m=k,A=!1}function ot(k,St){k.side===ze?pt(i.CULL_FACE):st(i.CULL_FACE);let it=k.side===en;St&&(it=!it),xt(it),k.blending===Ps&&k.transparent===!1?ct(ri):ct(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);const wt=k.stencilWrite;a.setTest(wt),wt&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),zt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function xt(k){C!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),C=k)}function vt(k){k!==$m?(st(i.CULL_FACE),k!==L&&(k===Ph?i.cullFace(i.BACK):k===Zm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pt(i.CULL_FACE),L=k}function Gt(k){k!==N&&(U&&i.lineWidth(k),N=k)}function zt(k,St,it){k?(st(i.POLYGON_OFFSET_FILL),(F!==St||P!==it)&&(F=St,P=it,o.getReversed()&&(St=-St),i.polygonOffset(St,it))):pt(i.POLYGON_OFFSET_FILL)}function mt(k){k?st(i.SCISSOR_TEST):pt(i.SCISSOR_TEST)}function Ot(k){k===void 0&&(k=i.TEXTURE0+z-1),j!==k&&(i.activeTexture(k),j=k)}function O(k,St,it){it===void 0&&(j===null?it=i.TEXTURE0+z-1:it=j);let wt=X[it];wt===void 0&&(wt={type:void 0,texture:void 0},X[it]=wt),(wt.type!==k||wt.texture!==St)&&(j!==it&&(i.activeTexture(it),j=it),i.bindTexture(k,St||lt[k]),wt.type=k,wt.texture=St)}function he(){const k=X[j];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Ut(){try{i.compressedTexImage2D(...arguments)}catch(k){ce("WebGLState:",k)}}function I(){try{i.compressedTexImage3D(...arguments)}catch(k){ce("WebGLState:",k)}}function S(){try{i.texSubImage2D(...arguments)}catch(k){ce("WebGLState:",k)}}function V(){try{i.texSubImage3D(...arguments)}catch(k){ce("WebGLState:",k)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(k){ce("WebGLState:",k)}}function Q(){try{i.compressedTexSubImage3D(...arguments)}catch(k){ce("WebGLState:",k)}}function ut(){try{i.texStorage2D(...arguments)}catch(k){ce("WebGLState:",k)}}function gt(){try{i.texStorage3D(...arguments)}catch(k){ce("WebGLState:",k)}}function tt(){try{i.texImage2D(...arguments)}catch(k){ce("WebGLState:",k)}}function nt(){try{i.texImage3D(...arguments)}catch(k){ce("WebGLState:",k)}}function yt(k){return d[k]!==void 0?d[k]:i.getParameter(k)}function Bt(k,St){d[k]!==St&&(i.pixelStorei(k,St),d[k]=St)}function _t(k){It.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),It.copy(k))}function bt(k){Mt.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),Mt.copy(k))}function Yt(k,St){let it=l.get(St);it===void 0&&(it=new WeakMap,l.set(St,it));let wt=it.get(k);wt===void 0&&(wt=i.getUniformBlockIndex(St,k.name),it.set(k,wt))}function Zt(k,St){const wt=l.get(St).get(k);c.get(St)!==wt&&(i.uniformBlockBinding(St,wt,k.__bindingPointIndex),c.set(St,wt))}function ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},j=null,X={},u={},f=new WeakMap,g=[],v=null,p=!1,m=null,M=null,y=null,_=null,T=null,E=null,b=null,x=new $t(0,0,0),w=0,A=!1,C=null,L=null,N=null,F=null,P=null,It.set(0,0,i.canvas.width,i.canvas.height),Mt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:st,disable:pt,bindFramebuffer:Ct,drawBuffers:dt,useProgram:ee,setBlending:ct,setMaterial:ot,setFlipSided:xt,setCullFace:vt,setLineWidth:Gt,setPolygonOffset:zt,setScissorTest:mt,activeTexture:Ot,bindTexture:O,unbindTexture:he,compressedTexImage2D:Ut,compressedTexImage3D:I,texImage2D:tt,texImage3D:nt,pixelStorei:Bt,getParameter:yt,updateUBOMapping:Yt,uniformBlockBinding:Zt,texStorage2D:ut,texStorage3D:gt,texSubImage2D:S,texSubImage3D:V,compressedTexSubImage2D:q,compressedTexSubImage3D:Q,scissor:_t,viewport:bt,reset:ne}}function YM(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ft,h=new WeakMap,d=new Set;let u;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(I,S){return g?new OffscreenCanvas(I,S):Uo("canvas")}function p(I,S,V){let q=1;const Q=Ut(I);if((Q.width>V||Q.height>V)&&(q=V/Math.max(Q.width,Q.height)),q<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ut=Math.floor(q*Q.width),gt=Math.floor(q*Q.height);u===void 0&&(u=v(ut,gt));const tt=S?v(ut,gt):u;return tt.width=ut,tt.height=gt,tt.getContext("2d").drawImage(I,0,0,ut,gt),Qt("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ut+"x"+gt+")."),tt}else return"data"in I&&Qt("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),I;return I}function m(I){return I.generateMipmaps}function M(I){i.generateMipmap(I)}function y(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(I,S,V,q,Q,ut=!1){if(I!==null){if(i[I]!==void 0)return i[I];Qt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let gt;q&&(gt=t.get("EXT_texture_norm16"),gt||Qt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let tt=S;if(S===i.RED&&(V===i.FLOAT&&(tt=i.R32F),V===i.HALF_FLOAT&&(tt=i.R16F),V===i.UNSIGNED_BYTE&&(tt=i.R8),V===i.UNSIGNED_SHORT&&gt&&(tt=gt.R16_EXT),V===i.SHORT&&gt&&(tt=gt.R16_SNORM_EXT)),S===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(tt=i.R8UI),V===i.UNSIGNED_SHORT&&(tt=i.R16UI),V===i.UNSIGNED_INT&&(tt=i.R32UI),V===i.BYTE&&(tt=i.R8I),V===i.SHORT&&(tt=i.R16I),V===i.INT&&(tt=i.R32I)),S===i.RG&&(V===i.FLOAT&&(tt=i.RG32F),V===i.HALF_FLOAT&&(tt=i.RG16F),V===i.UNSIGNED_BYTE&&(tt=i.RG8),V===i.UNSIGNED_SHORT&&gt&&(tt=gt.RG16_EXT),V===i.SHORT&&gt&&(tt=gt.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(tt=i.RG8UI),V===i.UNSIGNED_SHORT&&(tt=i.RG16UI),V===i.UNSIGNED_INT&&(tt=i.RG32UI),V===i.BYTE&&(tt=i.RG8I),V===i.SHORT&&(tt=i.RG16I),V===i.INT&&(tt=i.RG32I)),S===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(tt=i.RGB8UI),V===i.UNSIGNED_SHORT&&(tt=i.RGB16UI),V===i.UNSIGNED_INT&&(tt=i.RGB32UI),V===i.BYTE&&(tt=i.RGB8I),V===i.SHORT&&(tt=i.RGB16I),V===i.INT&&(tt=i.RGB32I)),S===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(tt=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(tt=i.RGBA16UI),V===i.UNSIGNED_INT&&(tt=i.RGBA32UI),V===i.BYTE&&(tt=i.RGBA8I),V===i.SHORT&&(tt=i.RGBA16I),V===i.INT&&(tt=i.RGBA32I)),S===i.RGB&&(V===i.UNSIGNED_SHORT&&gt&&(tt=gt.RGB16_EXT),V===i.SHORT&&gt&&(tt=gt.RGB16_SNORM_EXT),V===i.UNSIGNED_INT_5_9_9_9_REV&&(tt=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(tt=i.R11F_G11F_B10F)),S===i.RGBA){const nt=ut?No:le.getTransfer(Q);V===i.FLOAT&&(tt=i.RGBA32F),V===i.HALF_FLOAT&&(tt=i.RGBA16F),V===i.UNSIGNED_BYTE&&(tt=nt===xe?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT&&gt&&(tt=gt.RGBA16_EXT),V===i.SHORT&&gt&&(tt=gt.RGBA16_SNORM_EXT),V===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function T(I,S){let V;return I?S===null||S===Kn||S===Sr?V=i.DEPTH24_STENCIL8:S===Fn?V=i.DEPTH32F_STENCIL8:S===br&&(V=i.DEPTH24_STENCIL8,Qt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Kn||S===Sr?V=i.DEPTH_COMPONENT24:S===Fn?V=i.DEPTH_COMPONENT32F:S===br&&(V=i.DEPTH_COMPONENT16),V}function E(I,S){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==Ve&&I.minFilter!==tn?Math.log2(Math.max(S.width,S.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?S.mipmaps.length:1}function b(I){const S=I.target;S.removeEventListener("dispose",b),w(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&d.delete(S)}function x(I){const S=I.target;S.removeEventListener("dispose",x),C(S)}function w(I){const S=n.get(I);if(S.__webglInit===void 0)return;const V=I.source,q=f.get(V);if(q){const Q=q[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&A(I),Object.keys(q).length===0&&f.delete(V)}n.remove(I)}function A(I){const S=n.get(I);i.deleteTexture(S.__webglTexture);const V=I.source,q=f.get(V);delete q[S.__cacheKey],o.memory.textures--}function C(I){const S=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(S.__webglFramebuffer[q]))for(let Q=0;Q<S.__webglFramebuffer[q].length;Q++)i.deleteFramebuffer(S.__webglFramebuffer[q][Q]);else i.deleteFramebuffer(S.__webglFramebuffer[q]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[q])}else{if(Array.isArray(S.__webglFramebuffer))for(let q=0;q<S.__webglFramebuffer.length;q++)i.deleteFramebuffer(S.__webglFramebuffer[q]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let q=0;q<S.__webglColorRenderbuffer.length;q++)S.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[q]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const V=I.textures;for(let q=0,Q=V.length;q<Q;q++){const ut=n.get(V[q]);ut.__webglTexture&&(i.deleteTexture(ut.__webglTexture),o.memory.textures--),n.remove(V[q])}n.remove(I)}let L=0;function N(){L=0}function F(){return L}function P(I){L=I}function z(){const I=L;return I>=s.maxTextures&&Qt("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),L+=1,I}function U(I){const S=[];return S.push(I.wrapS),S.push(I.wrapT),S.push(I.wrapR||0),S.push(I.magFilter),S.push(I.minFilter),S.push(I.anisotropy),S.push(I.internalFormat),S.push(I.format),S.push(I.type),S.push(I.generateMipmaps),S.push(I.premultiplyAlpha),S.push(I.flipY),S.push(I.unpackAlignment),S.push(I.colorSpace),S.join()}function B(I,S){const V=n.get(I);if(I.isVideoTexture&&O(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&V.__version!==I.version){const q=I.image;if(q===null)Qt("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Qt("WebGLRenderer: Texture marked for update but image is incomplete");else{pt(V,I,S);return}}else I.isExternalTexture&&(V.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+S)}function W(I,S){const V=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&V.__version!==I.version){pt(V,I,S);return}else I.isExternalTexture&&(V.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+S)}function j(I,S){const V=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&V.__version!==I.version){pt(V,I,S);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+S)}function X(I,S){const V=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&V.__version!==I.version){Ct(V,I,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+S)}const et={[Mr]:i.REPEAT,[si]:i.CLAMP_TO_EDGE,[gc]:i.MIRRORED_REPEAT},Nt={[Ve]:i.NEAREST,[x0]:i.NEAREST_MIPMAP_NEAREST,[zr]:i.NEAREST_MIPMAP_LINEAR,[tn]:i.LINEAR,[aa]:i.LINEAR_MIPMAP_NEAREST,[Mi]:i.LINEAR_MIPMAP_LINEAR},It={[y0]:i.NEVER,[E0]:i.ALWAYS,[M0]:i.LESS,[Sl]:i.LEQUAL,[b0]:i.EQUAL,[wl]:i.GEQUAL,[S0]:i.GREATER,[w0]:i.NOTEQUAL};function Mt(I,S){if(S.type===Fn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===tn||S.magFilter===aa||S.magFilter===zr||S.magFilter===Mi||S.minFilter===tn||S.minFilter===aa||S.minFilter===zr||S.minFilter===Mi)&&Qt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,et[S.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,et[S.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,et[S.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,Nt[S.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,Nt[S.minFilter]),S.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,It[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ve||S.minFilter!==zr&&S.minFilter!==Mi||S.type===Fn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Z(I,S){let V=!1;I.__webglInit===void 0&&(I.__webglInit=!0,S.addEventListener("dispose",b));const q=S.source;let Q=f.get(q);Q===void 0&&(Q={},f.set(q,Q));const ut=U(S);if(ut!==I.__cacheKey){Q[ut]===void 0&&(Q[ut]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),Q[ut].usedTimes++;const gt=Q[I.__cacheKey];gt!==void 0&&(Q[I.__cacheKey].usedTimes--,gt.usedTimes===0&&A(S)),I.__cacheKey=ut,I.__webglTexture=Q[ut].texture}return V}function lt(I,S,V){return Math.floor(Math.floor(I/V)/S)}function st(I,S,V,q){const ut=I.updateRanges;if(ut.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,V,q,S.data);else{ut.sort((Bt,_t)=>Bt.start-_t.start);let gt=0;for(let Bt=1;Bt<ut.length;Bt++){const _t=ut[gt],bt=ut[Bt],Yt=_t.start+_t.count,Zt=lt(bt.start,S.width,4),ne=lt(_t.start,S.width,4);bt.start<=Yt+1&&Zt===ne&&lt(bt.start+bt.count-1,S.width,4)===Zt?_t.count=Math.max(_t.count,bt.start+bt.count-_t.start):(++gt,ut[gt]=bt)}ut.length=gt+1;const tt=e.getParameter(i.UNPACK_ROW_LENGTH),nt=e.getParameter(i.UNPACK_SKIP_PIXELS),yt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let Bt=0,_t=ut.length;Bt<_t;Bt++){const bt=ut[Bt],Yt=Math.floor(bt.start/4),Zt=Math.ceil(bt.count/4),ne=Yt%S.width,k=Math.floor(Yt/S.width),St=Zt,it=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ne),e.pixelStorei(i.UNPACK_SKIP_ROWS,k),e.texSubImage2D(i.TEXTURE_2D,0,ne,k,St,it,V,q,S.data)}I.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,tt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,nt),e.pixelStorei(i.UNPACK_SKIP_ROWS,yt)}}function pt(I,S,V){let q=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(q=i.TEXTURE_3D);const Q=Z(I,S),ut=S.source;e.bindTexture(q,I.__webglTexture,i.TEXTURE0+V);const gt=n.get(ut);if(ut.version!==gt.__version||Q===!0){if(e.activeTexture(i.TEXTURE0+V),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const it=le.getPrimaries(le.workingColorSpace),wt=S.colorSpace===yi?null:le.getPrimaries(S.colorSpace),Pt=S.colorSpace===yi||it===wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt)}e.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let nt=p(S.image,!1,s.maxTextureSize);nt=he(S,nt);const yt=r.convert(S.format,S.colorSpace),Bt=r.convert(S.type);let _t=_(S.internalFormat,yt,Bt,S.normalized,S.colorSpace,S.isVideoTexture);Mt(q,S);let bt;const Yt=S.mipmaps,Zt=S.isVideoTexture!==!0,ne=gt.__version===void 0||Q===!0,k=ut.dataReady,St=E(S,nt);if(S.isDepthTexture)_t=T(S.format===Hi,S.type),ne&&(Zt?e.texStorage2D(i.TEXTURE_2D,1,_t,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,_t,nt.width,nt.height,0,yt,Bt,null));else if(S.isDataTexture)if(Yt.length>0){Zt&&ne&&e.texStorage2D(i.TEXTURE_2D,St,_t,Yt[0].width,Yt[0].height);for(let it=0,wt=Yt.length;it<wt;it++)bt=Yt[it],Zt?k&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,bt.width,bt.height,yt,Bt,bt.data):e.texImage2D(i.TEXTURE_2D,it,_t,bt.width,bt.height,0,yt,Bt,bt.data);S.generateMipmaps=!1}else Zt?(ne&&e.texStorage2D(i.TEXTURE_2D,St,_t,nt.width,nt.height),k&&st(S,nt,yt,Bt)):e.texImage2D(i.TEXTURE_2D,0,_t,nt.width,nt.height,0,yt,Bt,nt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Zt&&ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,_t,Yt[0].width,Yt[0].height,nt.depth);for(let it=0,wt=Yt.length;it<wt;it++)if(bt=Yt[it],S.format!==zn)if(yt!==null)if(Zt){if(k)if(S.layerUpdates.size>0){const Pt=vu(bt.width,bt.height,S.format,S.type);for(const at of S.layerUpdates){const Vt=bt.data.subarray(at*Pt/bt.data.BYTES_PER_ELEMENT,(at+1)*Pt/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,at,bt.width,bt.height,1,yt,Vt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,bt.width,bt.height,nt.depth,yt,bt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,it,_t,bt.width,bt.height,nt.depth,0,bt.data,0,0);else Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?k&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,bt.width,bt.height,nt.depth,yt,Bt,bt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,it,_t,bt.width,bt.height,nt.depth,0,yt,Bt,bt.data)}else{Zt&&ne&&e.texStorage2D(i.TEXTURE_2D,St,_t,Yt[0].width,Yt[0].height);for(let it=0,wt=Yt.length;it<wt;it++)bt=Yt[it],S.format!==zn?yt!==null?Zt?k&&e.compressedTexSubImage2D(i.TEXTURE_2D,it,0,0,bt.width,bt.height,yt,bt.data):e.compressedTexImage2D(i.TEXTURE_2D,it,_t,bt.width,bt.height,0,bt.data):Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?k&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,bt.width,bt.height,yt,Bt,bt.data):e.texImage2D(i.TEXTURE_2D,it,_t,bt.width,bt.height,0,yt,Bt,bt.data)}else if(S.isDataArrayTexture)if(Zt){if(ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,_t,nt.width,nt.height,nt.depth),k)if(S.layerUpdates.size>0){const it=vu(nt.width,nt.height,S.format,S.type);for(const wt of S.layerUpdates){const Pt=nt.data.subarray(wt*it/nt.data.BYTES_PER_ELEMENT,(wt+1)*it/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,wt,nt.width,nt.height,1,yt,Bt,Pt)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,yt,Bt,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,_t,nt.width,nt.height,nt.depth,0,yt,Bt,nt.data);else if(S.isData3DTexture)Zt?(ne&&e.texStorage3D(i.TEXTURE_3D,St,_t,nt.width,nt.height,nt.depth),k&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,yt,Bt,nt.data)):e.texImage3D(i.TEXTURE_3D,0,_t,nt.width,nt.height,nt.depth,0,yt,Bt,nt.data);else if(S.isFramebufferTexture){if(ne)if(Zt)e.texStorage2D(i.TEXTURE_2D,St,_t,nt.width,nt.height);else{let it=nt.width,wt=nt.height;for(let Pt=0;Pt<St;Pt++)e.texImage2D(i.TEXTURE_2D,Pt,_t,it,wt,0,yt,Bt,null),it>>=1,wt>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){const it=i.canvas;if(it.hasAttribute("layoutsubtree")||it.setAttribute("layoutsubtree","true"),nt.parentNode!==it){it.appendChild(nt),d.add(S),it.onpaint=wt=>{const Pt=wt.changedElements;for(const at of d)Pt.includes(at.image)&&(at.needsUpdate=!0)},it.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,nt);else{const Pt=i.RGBA,at=i.RGBA,Vt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Pt,at,Vt,nt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Yt.length>0){if(Zt&&ne){const it=Ut(Yt[0]);e.texStorage2D(i.TEXTURE_2D,St,_t,it.width,it.height)}for(let it=0,wt=Yt.length;it<wt;it++)bt=Yt[it],Zt?k&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,yt,Bt,bt):e.texImage2D(i.TEXTURE_2D,it,_t,yt,Bt,bt);S.generateMipmaps=!1}else if(Zt){if(ne){const it=Ut(nt);e.texStorage2D(i.TEXTURE_2D,St,_t,it.width,it.height)}k&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,yt,Bt,nt)}else e.texImage2D(i.TEXTURE_2D,0,_t,yt,Bt,nt);m(S)&&M(q),gt.__version=ut.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function Ct(I,S,V){if(S.image.length!==6)return;const q=Z(I,S),Q=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+V);const ut=n.get(Q);if(Q.version!==ut.__version||q===!0){e.activeTexture(i.TEXTURE0+V);const gt=le.getPrimaries(le.workingColorSpace),tt=S.colorSpace===yi?null:le.getPrimaries(S.colorSpace),nt=S.colorSpace===yi||gt===tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);const yt=S.isCompressedTexture||S.image[0].isCompressedTexture,Bt=S.image[0]&&S.image[0].isDataTexture,_t=[];for(let at=0;at<6;at++)!yt&&!Bt?_t[at]=p(S.image[at],!0,s.maxCubemapSize):_t[at]=Bt?S.image[at].image:S.image[at],_t[at]=he(S,_t[at]);const bt=_t[0],Yt=r.convert(S.format,S.colorSpace),Zt=r.convert(S.type),ne=_(S.internalFormat,Yt,Zt,S.normalized,S.colorSpace),k=S.isVideoTexture!==!0,St=ut.__version===void 0||q===!0,it=Q.dataReady;let wt=E(S,bt);Mt(i.TEXTURE_CUBE_MAP,S);let Pt;if(yt){k&&St&&e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,ne,bt.width,bt.height);for(let at=0;at<6;at++){Pt=_t[at].mipmaps;for(let Vt=0;Vt<Pt.length;Vt++){const kt=Pt[Vt];S.format!==zn?Yt!==null?k?it&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Vt,0,0,kt.width,kt.height,Yt,kt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Vt,ne,kt.width,kt.height,0,kt.data):Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Vt,0,0,kt.width,kt.height,Yt,Zt,kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Vt,ne,kt.width,kt.height,0,Yt,Zt,kt.data)}}}else{if(Pt=S.mipmaps,k&&St){Pt.length>0&&wt++;const at=Ut(_t[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,ne,at.width,at.height)}for(let at=0;at<6;at++)if(Bt){k?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,_t[at].width,_t[at].height,Yt,Zt,_t[at].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,ne,_t[at].width,_t[at].height,0,Yt,Zt,_t[at].data);for(let Vt=0;Vt<Pt.length;Vt++){const Pe=Pt[Vt].image[at].image;k?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Vt+1,0,0,Pe.width,Pe.height,Yt,Zt,Pe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Vt+1,ne,Pe.width,Pe.height,0,Yt,Zt,Pe.data)}}else{k?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Yt,Zt,_t[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,ne,Yt,Zt,_t[at]);for(let Vt=0;Vt<Pt.length;Vt++){const kt=Pt[Vt];k?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Vt+1,0,0,Yt,Zt,kt.image[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Vt+1,ne,Yt,Zt,kt.image[at])}}}m(S)&&M(i.TEXTURE_CUBE_MAP),ut.__version=Q.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function dt(I,S,V,q,Q,ut){const gt=r.convert(V.format,V.colorSpace),tt=r.convert(V.type),nt=_(V.internalFormat,gt,tt,V.normalized,V.colorSpace),yt=n.get(S),Bt=n.get(V);if(Bt.__renderTarget=S,!yt.__hasExternalTextures){const _t=Math.max(1,S.width>>ut),bt=Math.max(1,S.height>>ut);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,ut,nt,_t,bt,S.depth,0,gt,tt,null):e.texImage2D(Q,ut,nt,_t,bt,0,gt,tt,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),Ot(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,Q,Bt.__webglTexture,0,mt(S)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,Q,Bt.__webglTexture,ut),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ee(I,S,V){if(i.bindRenderbuffer(i.RENDERBUFFER,I),S.depthBuffer){const q=S.depthTexture,Q=q&&q.isDepthTexture?q.type:null,ut=T(S.stencilBuffer,Q),gt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ot(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt(S),ut,S.width,S.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt(S),ut,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ut,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,gt,i.RENDERBUFFER,I)}else{const q=S.textures;for(let Q=0;Q<q.length;Q++){const ut=q[Q],gt=r.convert(ut.format,ut.colorSpace),tt=r.convert(ut.type),nt=_(ut.internalFormat,gt,tt,ut.normalized,ut.colorSpace);Ot(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt(S),nt,S.width,S.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt(S),nt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,nt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Wt(I,S,V){const q=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Q=n.get(S.depthTexture);if(Q.__renderTarget=S,(!Q.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,S.depthTexture.addEventListener("dispose",b)),Q.__webglTexture===void 0){Q.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),Mt(i.TEXTURE_CUBE_MAP,S.depthTexture);const yt=r.convert(S.depthTexture.format),Bt=r.convert(S.depthTexture.type);let _t;S.depthTexture.format===ci?_t=i.DEPTH_COMPONENT24:S.depthTexture.format===Hi&&(_t=i.DEPTH24_STENCIL8);for(let bt=0;bt<6;bt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,_t,S.width,S.height,0,yt,Bt,null)}}else B(S.depthTexture,0);const ut=Q.__webglTexture,gt=mt(S),tt=q?i.TEXTURE_CUBE_MAP_POSITIVE_X+V:i.TEXTURE_2D,nt=S.depthTexture.format===Hi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===ci)Ot(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,tt,ut,0,gt):i.framebufferTexture2D(i.FRAMEBUFFER,nt,tt,ut,0);else if(S.depthTexture.format===Hi)Ot(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,tt,ut,0,gt):i.framebufferTexture2D(i.FRAMEBUFFER,nt,tt,ut,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function rt(I){const S=n.get(I),V=I.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==I.depthTexture){const q=I.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),q){const Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,q.removeEventListener("dispose",Q)};q.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=q}if(I.depthTexture&&!S.__autoAllocateDepthBuffer)if(V)for(let q=0;q<6;q++)Wt(S.__webglFramebuffer[q],I,q);else{const q=I.texture.mipmaps;q&&q.length>0?Wt(S.__webglFramebuffer[0],I,0):Wt(S.__webglFramebuffer,I,0)}else if(V){S.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[q]),S.__webglDepthbuffer[q]===void 0)S.__webglDepthbuffer[q]=i.createRenderbuffer(),ee(S.__webglDepthbuffer[q],I,!1);else{const Q=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=S.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ut)}}else{const q=I.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),ee(S.__webglDepthbuffer,I,!1);else{const Q=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ut)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(I,S,V){const q=n.get(I);S!==void 0&&dt(q.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&rt(I)}function ot(I){const S=I.texture,V=n.get(I),q=n.get(S);I.addEventListener("dispose",x);const Q=I.textures,ut=I.isWebGLCubeRenderTarget===!0,gt=Q.length>1;if(gt||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=S.version,o.memory.textures++),ut){V.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[tt]=[];for(let nt=0;nt<S.mipmaps.length;nt++)V.__webglFramebuffer[tt][nt]=i.createFramebuffer()}else V.__webglFramebuffer[tt]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let tt=0;tt<S.mipmaps.length;tt++)V.__webglFramebuffer[tt]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(gt)for(let tt=0,nt=Q.length;tt<nt;tt++){const yt=n.get(Q[tt]);yt.__webglTexture===void 0&&(yt.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&Ot(I)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let tt=0;tt<Q.length;tt++){const nt=Q[tt];V.__webglColorRenderbuffer[tt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[tt]);const yt=r.convert(nt.format,nt.colorSpace),Bt=r.convert(nt.type),_t=_(nt.internalFormat,yt,Bt,nt.normalized,nt.colorSpace,I.isXRRenderTarget===!0),bt=mt(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,_t,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+tt,i.RENDERBUFFER,V.__webglColorRenderbuffer[tt])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),ee(V.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ut){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Mt(i.TEXTURE_CUBE_MAP,S);for(let tt=0;tt<6;tt++)if(S.mipmaps&&S.mipmaps.length>0)for(let nt=0;nt<S.mipmaps.length;nt++)dt(V.__webglFramebuffer[tt][nt],I,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,nt);else dt(V.__webglFramebuffer[tt],I,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0);m(S)&&M(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gt){for(let tt=0,nt=Q.length;tt<nt;tt++){const yt=Q[tt],Bt=n.get(yt);let _t=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(_t=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,Bt.__webglTexture),Mt(_t,yt),dt(V.__webglFramebuffer,I,yt,i.COLOR_ATTACHMENT0+tt,_t,0),m(yt)&&M(_t)}e.unbindTexture()}else{let tt=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(tt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(tt,q.__webglTexture),Mt(tt,S),S.mipmaps&&S.mipmaps.length>0)for(let nt=0;nt<S.mipmaps.length;nt++)dt(V.__webglFramebuffer[nt],I,S,i.COLOR_ATTACHMENT0,tt,nt);else dt(V.__webglFramebuffer,I,S,i.COLOR_ATTACHMENT0,tt,0);m(S)&&M(tt),e.unbindTexture()}I.depthBuffer&&rt(I)}function xt(I){const S=I.textures;for(let V=0,q=S.length;V<q;V++){const Q=S[V];if(m(Q)){const ut=y(I),gt=n.get(Q).__webglTexture;e.bindTexture(ut,gt),M(ut),e.unbindTexture()}}}const vt=[],Gt=[];function zt(I){if(I.samples>0){if(Ot(I)===!1){const S=I.textures,V=I.width,q=I.height;let Q=i.COLOR_BUFFER_BIT;const ut=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=n.get(I),tt=S.length>1;if(tt)for(let yt=0;yt<S.length;yt++)e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer);const nt=I.texture.mipmaps;nt&&nt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let yt=0;yt<S.length;yt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),tt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,gt.__webglColorRenderbuffer[yt]);const Bt=n.get(S[yt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Bt,0)}i.blitFramebuffer(0,0,V,q,0,0,V,q,Q,i.NEAREST),c===!0&&(vt.length=0,Gt.length=0,vt.push(i.COLOR_ATTACHMENT0+yt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(vt.push(ut),Gt.push(ut),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Gt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,vt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),tt)for(let yt=0;yt<S.length;yt++){e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,gt.__webglColorRenderbuffer[yt]);const Bt=n.get(S[yt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,Bt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){const S=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function mt(I){return Math.min(s.maxSamples,I.samples)}function Ot(I){const S=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function O(I){const S=o.render.frame;h.get(I)!==S&&(h.set(I,S),I.update())}function he(I,S){const V=I.colorSpace,q=I.format,Q=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||V!==Do&&V!==yi&&(le.getTransfer(V)===xe?(q!==zn||Q!==_n)&&Qt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ce("WebGLTextures: Unsupported texture color space:",V)),S}function Ut(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=N,this.getTextureUnits=F,this.setTextureUnits=P,this.setTexture2D=B,this.setTexture2DArray=W,this.setTexture3D=j,this.setTextureCube=X,this.rebindTextures=ct,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=Ot,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function $M(i,t){function e(n,s=yi){let r;const o=le.getTransfer(s);if(n===_n)return i.UNSIGNED_BYTE;if(n===xl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===vl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===tf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ef)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Qd)return i.BYTE;if(n===jd)return i.SHORT;if(n===br)return i.UNSIGNED_SHORT;if(n===gl)return i.INT;if(n===Kn)return i.UNSIGNED_INT;if(n===Fn)return i.FLOAT;if(n===ai)return i.HALF_FLOAT;if(n===nf)return i.ALPHA;if(n===sf)return i.RGB;if(n===zn)return i.RGBA;if(n===ci)return i.DEPTH_COMPONENT;if(n===Hi)return i.DEPTH_STENCIL;if(n===_l)return i.RED;if(n===yl)return i.RED_INTEGER;if(n===Xi)return i.RG;if(n===Ml)return i.RG_INTEGER;if(n===bl)return i.RGBA_INTEGER;if(n===_o||n===yo||n===Mo||n===bo)if(o===xe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===_o)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===_o)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===yo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Mo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===bo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xc||n===vc||n===_c||n===yc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===xc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_c)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===yc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Mc||n===bc||n===Sc||n===wc||n===Ec||n===Io||n===Tc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Mc||n===bc)return o===xe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Sc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===wc)return r.COMPRESSED_R11_EAC;if(n===Ec)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Io)return r.COMPRESSED_RG11_EAC;if(n===Tc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ac||n===Cc||n===Rc||n===Pc||n===Ic||n===Lc||n===Dc||n===Nc||n===Uc||n===Fc||n===zc||n===Oc||n===kc||n===Bc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ac)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Cc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Rc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Pc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ic)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Lc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Dc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Nc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Uc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Oc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===kc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bc)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Hc||n===Gc||n===Vc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Hc)return o===xe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Gc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Vc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wc||n===Xc||n===Lo||n===qc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Wc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Xc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Lo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Sr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const ZM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,KM=`
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

}`;class JM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new ff(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new un({vertexShader:ZM,fragmentShader:KM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new J(new xn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class QM extends Zi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,g=null;const v=typeof XRWebGLBinding<"u",p=new JM,m={},M=e.getContextAttributes();let y=null,_=null;const T=[],E=[],b=new ft;let x=null;const w=new vn;w.viewport=new Ce;const A=new vn;A.viewport=new Ce;const C=[w,A],L=new ax;let N=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let lt=T[Z];return lt===void 0&&(lt=new fa,T[Z]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(Z){let lt=T[Z];return lt===void 0&&(lt=new fa,T[Z]=lt),lt.getGripSpace()},this.getHand=function(Z){let lt=T[Z];return lt===void 0&&(lt=new fa,T[Z]=lt),lt.getHandSpace()};function P(Z){const lt=E.indexOf(Z.inputSource);if(lt===-1)return;const st=T[lt];st!==void 0&&(st.update(Z.inputSource,Z.frame,l||o),st.dispatchEvent({type:Z.type,data:Z.inputSource}))}function z(){s.removeEventListener("select",P),s.removeEventListener("selectstart",P),s.removeEventListener("selectend",P),s.removeEventListener("squeeze",P),s.removeEventListener("squeezestart",P),s.removeEventListener("squeezeend",P),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",U);for(let Z=0;Z<T.length;Z++){const lt=E[Z];lt!==null&&(E[Z]=null,T[Z].disconnect(lt))}N=null,F=null,p.reset();for(const Z in m)delete m[Z];t.setRenderTarget(y),f=null,u=null,d=null,s=null,_=null,Mt.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Qt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&Qt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",P),s.addEventListener("selectstart",P),s.addEventListener("selectend",P),s.addEventListener("squeeze",P),s.addEventListener("squeezestart",P),s.addEventListener("squeezeend",P),s.addEventListener("end",z),s.addEventListener("inputsourceschange",U),M.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(b),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let st=null,pt=null,Ct=null;M.depth&&(Ct=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=M.stencil?Hi:ci,pt=M.stencil?Sr:Kn);const dt={colorFormat:e.RGBA8,depthFormat:Ct,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(dt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new Zn(u.textureWidth,u.textureHeight,{format:zn,type:_n,depthTexture:new zs(u.textureWidth,u.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const st={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,st),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Zn(f.framebufferWidth,f.framebufferHeight,{format:zn,type:_n,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Mt.setContext(s),Mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function U(Z){for(let lt=0;lt<Z.removed.length;lt++){const st=Z.removed[lt],pt=E.indexOf(st);pt>=0&&(E[pt]=null,T[pt].disconnect(st))}for(let lt=0;lt<Z.added.length;lt++){const st=Z.added[lt];let pt=E.indexOf(st);if(pt===-1){for(let dt=0;dt<T.length;dt++)if(dt>=E.length){E.push(st),pt=dt;break}else if(E[dt]===null){E[dt]=st,pt=dt;break}if(pt===-1)break}const Ct=T[pt];Ct&&Ct.connect(st)}}const B=new D,W=new D;function j(Z,lt,st){B.setFromMatrixPosition(lt.matrixWorld),W.setFromMatrixPosition(st.matrixWorld);const pt=B.distanceTo(W),Ct=lt.projectionMatrix.elements,dt=st.projectionMatrix.elements,ee=Ct[14]/(Ct[10]-1),Wt=Ct[14]/(Ct[10]+1),rt=(Ct[9]+1)/Ct[5],ct=(Ct[9]-1)/Ct[5],ot=(Ct[8]-1)/Ct[0],xt=(dt[8]+1)/dt[0],vt=ee*ot,Gt=ee*xt,zt=pt/(-ot+xt),mt=zt*-ot;if(lt.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(mt),Z.translateZ(zt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ct[10]===-1)Z.projectionMatrix.copy(lt.projectionMatrix),Z.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{const Ot=ee+zt,O=Wt+zt,he=vt-mt,Ut=Gt+(pt-mt),I=rt*Wt/O*Ot,S=ct*Wt/O*Ot;Z.projectionMatrix.makePerspective(he,Ut,I,S,Ot,O),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function X(Z,lt){lt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(lt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let lt=Z.near,st=Z.far;p.texture!==null&&(p.depthNear>0&&(lt=p.depthNear),p.depthFar>0&&(st=p.depthFar)),L.near=A.near=w.near=lt,L.far=A.far=w.far=st,(N!==L.near||F!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),N=L.near,F=L.far),L.layers.mask=Z.layers.mask|6,w.layers.mask=L.layers.mask&-5,A.layers.mask=L.layers.mask&-3;const pt=Z.parent,Ct=L.cameras;X(L,pt);for(let dt=0;dt<Ct.length;dt++)X(Ct[dt],pt);Ct.length===2?j(L,w,A):L.projectionMatrix.copy(w.projectionMatrix),et(Z,L,pt)};function et(Z,lt,st){st===null?Z.matrix.copy(lt.matrixWorld):(Z.matrix.copy(st.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(lt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(lt.projectionMatrix),Z.projectionMatrixInverse.copy(lt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Er*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(Z){c=Z,u!==null&&(u.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(L)},this.getCameraTexture=function(Z){return m[Z]};let Nt=null;function It(Z,lt){if(h=lt.getViewerPose(l||o),g=lt,h!==null){const st=h.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let pt=!1;st.length!==L.cameras.length&&(L.cameras.length=0,pt=!0);for(let Wt=0;Wt<st.length;Wt++){const rt=st[Wt];let ct=null;if(f!==null)ct=f.getViewport(rt);else{const xt=d.getViewSubImage(u,rt);ct=xt.viewport,Wt===0&&(t.setRenderTargetTextures(_,xt.colorTexture,xt.depthStencilTexture),t.setRenderTarget(_))}let ot=C[Wt];ot===void 0&&(ot=new vn,ot.layers.enable(Wt),ot.viewport=new Ce,C[Wt]=ot),ot.matrix.fromArray(rt.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(rt.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(ct.x,ct.y,ct.width,ct.height),Wt===0&&(L.matrix.copy(ot.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),pt===!0&&L.cameras.push(ot)}const Ct=s.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=n.getBinding();const Wt=d.getDepthInformation(st[0]);Wt&&Wt.isValid&&Wt.texture&&p.init(Wt,s.renderState)}if(Ct&&Ct.includes("camera-access")&&v){t.state.unbindTexture(),d=n.getBinding();for(let Wt=0;Wt<st.length;Wt++){const rt=st[Wt].camera;if(rt){let ct=m[rt];ct||(ct=new ff,m[rt]=ct);const ot=d.getCameraImage(rt);ct.sourceTexture=ot}}}}for(let st=0;st<T.length;st++){const pt=E[st],Ct=T[st];pt!==null&&Ct!==void 0&&Ct.update(pt,lt,l||o)}Nt&&Nt(Z,lt),lt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:lt}),g=null}const Mt=new Cf;Mt.setAnimationLoop(It),this.setAnimationLoop=function(Z){Nt=Z},this.dispose=function(){}}}const jM=new _e,Uf=new te;Uf.set(-1,0,0,0,1,0,0,0,1);function t1(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,wf(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,M,y,_){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,_)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,M,y):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===en&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===en&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const M=t.get(m),y=M.envMap,_=M.envMapRotation;y&&(p.envMap.value=y,p.envMapRotation.value.setFromMatrix4(jM.makeRotationFromEuler(_)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Uf),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,M,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=y*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,M){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===en&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){const M=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function e1(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,T){const E=T.program;n.uniformBlockBinding(_,E)}function l(_,T){let E=s[_.id];E===void 0&&(p(_),E=h(_),s[_.id]=E,_.addEventListener("dispose",M));const b=T.program;n.updateUBOMapping(_,b);const x=t.render.frame;r[_.id]!==x&&(u(_),r[_.id]=x)}function h(_){const T=d();_.__bindingPointIndex=T;const E=i.createBuffer(),b=_.__size,x=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,b,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,E),E}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return ce("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){const T=s[_.id],E=_.uniforms,b=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let x=0,w=E.length;x<w;x++){const A=E[x];if(Array.isArray(A))for(let C=0,L=A.length;C<L;C++)f(A[C],x,C,b);else f(A,x,0,b)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,T,E,b){if(v(_,T,E,b)===!0){const x=_.__offset,w=_.value;if(Array.isArray(w)){let A=0;for(let C=0;C<w.length;C++){const L=w[C],N=m(L);g(L,_.__data,A),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(A+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,_.__data)}}function g(_,T,E){typeof _=="number"||typeof _=="boolean"?T[0]=_:_.isMatrix3?(T[0]=_.elements[0],T[1]=_.elements[1],T[2]=_.elements[2],T[3]=0,T[4]=_.elements[3],T[5]=_.elements[4],T[6]=_.elements[5],T[7]=0,T[8]=_.elements[6],T[9]=_.elements[7],T[10]=_.elements[8],T[11]=0):ArrayBuffer.isView(_)?T.set(new _.constructor(_.buffer,_.byteOffset,T.length)):_.toArray(T,E)}function v(_,T,E,b){const x=_.value,w=T+"_"+E;if(b[w]===void 0)return typeof x=="number"||typeof x=="boolean"?b[w]=x:ArrayBuffer.isView(x)?b[w]=x.slice():b[w]=x.clone(),!0;{const A=b[w];if(typeof x=="number"||typeof x=="boolean"){if(A!==x)return b[w]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(A.equals(x)===!1)return A.copy(x),!0}}return!1}function p(_){const T=_.uniforms;let E=0;const b=16;for(let w=0,A=T.length;w<A;w++){const C=Array.isArray(T[w])?T[w]:[T[w]];for(let L=0,N=C.length;L<N;L++){const F=C[L],P=Array.isArray(F.value)?F.value:[F.value];for(let z=0,U=P.length;z<U;z++){const B=P[z],W=m(B),j=E%b,X=j%W.boundary,et=j+X;E+=X,et!==0&&b-et<W.storage&&(E+=b-et),F.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=E,E+=W.storage}}}const x=E%b;return x>0&&(E+=b-x),_.__size=E,_.__cache={},this}function m(_){const T={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(T.boundary=4,T.storage=4):_.isVector2?(T.boundary=8,T.storage=8):_.isVector3||_.isColor?(T.boundary=16,T.storage=12):_.isVector4?(T.boundary=16,T.storage=16):_.isMatrix3?(T.boundary=48,T.storage=48):_.isMatrix4?(T.boundary=64,T.storage=64):_.isTexture?Qt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(T.boundary=16,T.storage=_.byteLength):Qt("WebGLRenderer: Unsupported uniform value type.",_),T}function M(_){const T=_.target;T.removeEventListener("dispose",M);const E=o.indexOf(T.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function y(){for(const _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:c,update:l,dispose:y}}const n1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Vn=null;function i1(){return Vn===null&&(Vn=new uf(n1,16,16,Xi,ai),Vn.name="DFG_LUT",Vn.minFilter=tn,Vn.magFilter=tn,Vn.wrapS=si,Vn.wrapT=si,Vn.generateMipmaps=!1,Vn.needsUpdate=!0),Vn}class s1{constructor(t={}){const{canvas:e=A0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=_n}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;const v=f,p=new Set([bl,Ml,yl]),m=new Set([_n,Kn,br,Sr,xl,vl]),M=new Uint32Array(4),y=new Int32Array(4),_=new D;let T=null,E=null;const b=[],x=[];let w=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let C=!1,L=null,N=null,F=null,P=null;this._outputColorSpace=$e;let z=0,U=0,B=null,W=-1,j=null;const X=new Ce,et=new Ce;let Nt=null;const It=new $t(0);let Mt=0,Z=e.width,lt=e.height,st=1,pt=null,Ct=null;const dt=new Ce(0,0,Z,lt),ee=new Ce(0,0,Z,lt);let Wt=!1;const rt=new Rl;let ct=!1,ot=!1;const xt=new _e,vt=new D,Gt=new Ce,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let mt=!1;function Ot(){return B===null?st:1}let O=n;function he(R,H){return e.getContext(R,H)}try{const R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${pl}`),e.addEventListener("webglcontextlost",Pe,!1),e.addEventListener("webglcontextrestored",we,!1),e.addEventListener("webglcontextcreationerror",kn,!1),O===null){const H="webgl2";if(O=he(H,R),O===null)throw he(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(R){throw ce("WebGLRenderer: "+R.message),R}let Ut,I,S,V,q,Q,ut,gt,tt,nt,yt,Bt,_t,bt,Yt,Zt,ne,k,St,it,wt,Pt,at;function Vt(){Ut=new iy(O),Ut.init(),wt=new $M(O,Ut),I=new Z_(O,Ut,t,wt),S=new qM(O,Ut),I.reversedDepthBuffer&&u&&S.buffers.depth.setReversed(!0),N=O.createFramebuffer(),F=O.createFramebuffer(),P=O.createFramebuffer(),V=new oy(O),q=new LM,Q=new YM(O,Ut,S,q,I,wt,V),ut=new ny(A),gt=new hx(O),Pt=new Y_(O,gt),tt=new sy(O,gt,V,Pt),nt=new cy(O,tt,gt,Pt,V),k=new ay(O,I,Q),Yt=new K_(q),yt=new IM(A,ut,Ut,I,Pt,Yt),Bt=new t1(A,q),_t=new NM,bt=new BM(Ut),ne=new q_(A,ut,S,nt,g,c),Zt=new XM(A,nt,I),at=new e1(O,V,I,S),St=new $_(O,Ut,V),it=new ry(O,Ut,V),V.programs=yt.programs,A.capabilities=I,A.extensions=Ut,A.properties=q,A.renderLists=_t,A.shadowMap=Zt,A.state=S,A.info=V}Vt(),v!==_n&&(w=new hy(v,e.width,e.height,a,s,r));const kt=new QM(A,O);this.xr=kt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const R=Ut.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ut.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return st},this.setPixelRatio=function(R){R!==void 0&&(st=R,this.setSize(Z,lt,!1))},this.getSize=function(R){return R.set(Z,lt)},this.setSize=function(R,H,K=!0){if(kt.isPresenting){Qt("WebGLRenderer: Can't change size while VR device is presenting.");return}Z=R,lt=H,e.width=Math.floor(R*st),e.height=Math.floor(H*st),K===!0&&(e.style.width=R+"px",e.style.height=H+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,R,H)},this.getDrawingBufferSize=function(R){return R.set(Z*st,lt*st).floor()},this.setDrawingBufferSize=function(R,H,K){Z=R,lt=H,st=K,e.width=Math.floor(R*K),e.height=Math.floor(H*K),this.setViewport(0,0,R,H)},this.setEffects=function(R){if(v===_n){ce("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let H=0;H<R.length;H++)if(R[H].isOutputPass===!0){Qt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(X)},this.getViewport=function(R){return R.copy(dt)},this.setViewport=function(R,H,K,Y){R.isVector4?dt.set(R.x,R.y,R.z,R.w):dt.set(R,H,K,Y),S.viewport(X.copy(dt).multiplyScalar(st).round())},this.getScissor=function(R){return R.copy(ee)},this.setScissor=function(R,H,K,Y){R.isVector4?ee.set(R.x,R.y,R.z,R.w):ee.set(R,H,K,Y),S.scissor(et.copy(ee).multiplyScalar(st).round())},this.getScissorTest=function(){return Wt},this.setScissorTest=function(R){S.setScissorTest(Wt=R)},this.setOpaqueSort=function(R){pt=R},this.setTransparentSort=function(R){Ct=R},this.getClearColor=function(R){return R.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor(...arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha(...arguments)},this.clear=function(R=!0,H=!0,K=!0){let Y=0;if(R){let $=!1;if(B!==null){const Rt=B.texture.format;$=p.has(Rt)}if($){const Rt=B.texture.type,Dt=m.has(Rt),At=ne.getClearColor(),Ht=ne.getClearAlpha(),Xt=At.r,ie=At.g,oe=At.b;Dt?(M[0]=Xt,M[1]=ie,M[2]=oe,M[3]=Ht,O.clearBufferuiv(O.COLOR,0,M)):(y[0]=Xt,y[1]=ie,y[2]=oe,y[3]=Ht,O.clearBufferiv(O.COLOR,0,y))}else Y|=O.COLOR_BUFFER_BIT}H&&(Y|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(Y|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&O.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),L=R},this.dispose=function(){e.removeEventListener("webglcontextlost",Pe,!1),e.removeEventListener("webglcontextrestored",we,!1),e.removeEventListener("webglcontextcreationerror",kn,!1),ne.dispose(),_t.dispose(),bt.dispose(),q.dispose(),ut.dispose(),nt.dispose(),Pt.dispose(),at.dispose(),yt.dispose(),kt.dispose(),kt.removeEventListener("sessionstart",$l),kt.removeEventListener("sessionend",Zl),Ei.stop()};function Pe(R){R.preventDefault(),Fo("WebGLRenderer: Context Lost."),C=!0}function we(){Fo("WebGLRenderer: Context Restored."),C=!1;const R=V.autoReset,H=Zt.enabled,K=Zt.autoUpdate,Y=Zt.needsUpdate,$=Zt.type;Vt(),V.autoReset=R,Zt.enabled=H,Zt.autoUpdate=K,Zt.needsUpdate=Y,Zt.type=$}function kn(R){ce("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Bn(R){const H=R.target;H.removeEventListener("dispose",Bn),Kf(H)}function Kf(R){Jf(R),q.remove(R)}function Jf(R){const H=q.get(R).programs;H!==void 0&&(H.forEach(function(K){yt.releaseProgram(K)}),R.isShaderMaterial&&yt.releaseShaderCache(R))}this.renderBufferDirect=function(R,H,K,Y,$,Rt){H===null&&(H=zt);const Dt=$.isMesh&&$.matrixWorld.determinantAffine()<0,At=tp(R,H,K,Y,$);S.setMaterial(Y,Dt);let Ht=K.index,Xt=1;if(Y.wireframe===!0){if(Ht=tt.getWireframeAttribute(K),Ht===void 0)return;Xt=2}const ie=K.drawRange,oe=K.attributes.position;let qt=ie.start*Xt,ye=(ie.start+ie.count)*Xt;Rt!==null&&(qt=Math.max(qt,Rt.start*Xt),ye=Math.min(ye,(Rt.start+Rt.count)*Xt)),Ht!==null?(qt=Math.max(qt,0),ye=Math.min(ye,Ht.count)):oe!=null&&(qt=Math.max(qt,0),ye=Math.min(ye,oe.count));const De=ye-qt;if(De<0||De===1/0)return;Pt.setup($,Y,At,K,Ht);let Ie,be=St;if(Ht!==null&&(Ie=gt.get(Ht),be=it,be.setIndex(Ie)),$.isMesh)Y.wireframe===!0?(S.setLineWidth(Y.wireframeLinewidth*Ot()),be.setMode(O.LINES)):be.setMode(O.TRIANGLES);else if($.isLine){let Ke=Y.linewidth;Ke===void 0&&(Ke=1),S.setLineWidth(Ke*Ot()),$.isLineSegments?be.setMode(O.LINES):$.isLineLoop?be.setMode(O.LINE_LOOP):be.setMode(O.LINE_STRIP)}else $.isPoints?be.setMode(O.POINTS):$.isSprite&&be.setMode(O.TRIANGLES);if($.isBatchedMesh)if(Ut.get("WEBGL_multi_draw"))be.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Ke=$._multiDrawStarts,Lt=$._multiDrawCounts,dn=$._multiDrawCount,de=Ht?gt.get(Ht).bytesPerElement:1,yn=q.get(Y).currentProgram.getUniforms();for(let Hn=0;Hn<dn;Hn++)yn.setValue(O,"_gl_DrawID",Hn),be.render(Ke[Hn]/de,Lt[Hn])}else if($.isInstancedMesh)be.renderInstances(qt,De,$.count);else if(K.isInstancedBufferGeometry){const Ke=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Lt=Math.min(K.instanceCount,Ke);be.renderInstances(qt,De,Lt)}else be.render(qt,De)};function Yl(R,H,K){R.transparent===!0&&R.side===ze&&R.forceSinglePass===!1?(R.side=en,R.needsUpdate=!0,Ir(R,H,K),R.side=Si,R.needsUpdate=!0,Ir(R,H,K),R.side=ze):Ir(R,H,K)}this.compile=function(R,H,K=null){K===null&&(K=R),E=bt.get(K),E.init(H),x.push(E),K.traverseVisible(function($){$.isLight&&$.layers.test(H.layers)&&(E.pushLight($),$.castShadow&&E.pushShadow($))}),R!==K&&R.traverseVisible(function($){$.isLight&&$.layers.test(H.layers)&&(E.pushLight($),$.castShadow&&E.pushShadow($))}),E.setupLights();const Y=new Set;return R.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Rt=$.material;if(Rt)if(Array.isArray(Rt))for(let Dt=0;Dt<Rt.length;Dt++){const At=Rt[Dt];Yl(At,K,$),Y.add(At)}else Yl(Rt,K,$),Y.add(Rt)}),E=x.pop(),Y},this.compileAsync=function(R,H,K=null){const Y=this.compile(R,H,K);return new Promise($=>{function Rt(){if(Y.forEach(function(Dt){q.get(Dt).currentProgram.isReady()&&Y.delete(Dt)}),Y.size===0){$(R);return}setTimeout(Rt,10)}Ut.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let na=null;function Qf(R){na&&na(R)}function $l(){Ei.stop()}function Zl(){Ei.start()}const Ei=new Cf;Ei.setAnimationLoop(Qf),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(R){na=R,kt.setAnimationLoop(R),R===null?Ei.stop():Ei.start()},kt.addEventListener("sessionstart",$l),kt.addEventListener("sessionend",Zl),this.render=function(R,H){if(H!==void 0&&H.isCamera!==!0){ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;L!==null&&L.renderStart(R,H);const K=kt.enabled===!0&&kt.isPresenting===!0,Y=w!==null&&(B===null||K)&&w.begin(A,B);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),kt.enabled===!0&&kt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(kt.cameraAutoUpdate===!0&&kt.updateCamera(H),H=kt.getCamera()),R.isScene===!0&&R.onBeforeRender(A,R,H,B),E=bt.get(R,x.length),E.init(H),E.state.textureUnits=Q.getTextureUnits(),x.push(E),xt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),rt.setFromProjectionMatrix(xt,qn,H.reversedDepth),ot=this.localClippingEnabled,ct=Yt.init(this.clippingPlanes,ot),T=_t.get(R,b.length),T.init(),b.push(T),kt.enabled===!0&&kt.isPresenting===!0){const Dt=A.xr.getDepthSensingMesh();Dt!==null&&ia(Dt,H,-1/0,A.sortObjects)}ia(R,H,0,A.sortObjects),T.finish(),A.sortObjects===!0&&T.sort(pt,Ct,H.reversedDepth),mt=kt.enabled===!1||kt.isPresenting===!1||kt.hasDepthSensing()===!1,mt&&ne.addToRenderList(T,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ct===!0&&Yt.beginShadows();const $=E.state.shadowsArray;if(Zt.render($,R,H),ct===!0&&Yt.endShadows(),(Y&&w.hasRenderPass())===!1){const Dt=T.opaque,At=T.transmissive;if(E.setupLights(),H.isArrayCamera){const Ht=H.cameras;if(At.length>0)for(let Xt=0,ie=Ht.length;Xt<ie;Xt++){const oe=Ht[Xt];Jl(Dt,At,R,oe)}mt&&ne.render(R);for(let Xt=0,ie=Ht.length;Xt<ie;Xt++){const oe=Ht[Xt];Kl(T,R,oe,oe.viewport)}}else At.length>0&&Jl(Dt,At,R,H),mt&&ne.render(R),Kl(T,R,H)}B!==null&&U===0&&(Q.updateMultisampleRenderTarget(B),Q.updateRenderTargetMipmap(B)),Y&&w.end(A),R.isScene===!0&&R.onAfterRender(A,R,H),Pt.resetDefaultState(),W=-1,j=null,x.pop(),x.length>0?(E=x[x.length-1],Q.setTextureUnits(E.state.textureUnits),ct===!0&&Yt.setGlobalState(A.clippingPlanes,E.state.camera)):E=null,b.pop(),b.length>0?T=b[b.length-1]:T=null,L!==null&&L.renderEnd()};function ia(R,H,K,Y){if(R.visible===!1)return;if(R.layers.test(H.layers)){if(R.isGroup)K=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(H);else if(R.isLightProbeGrid)E.pushLightProbeGrid(R);else if(R.isLight)E.pushLight(R),R.castShadow&&E.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||rt.intersectsSprite(R)){Y&&Gt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(xt);const Dt=nt.update(R),At=R.material;At.visible&&T.push(R,Dt,At,K,Gt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||rt.intersectsObject(R))){const Dt=nt.update(R),At=R.material;if(Y&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Gt.copy(R.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),Gt.copy(Dt.boundingSphere.center)),Gt.applyMatrix4(R.matrixWorld).applyMatrix4(xt)),Array.isArray(At)){const Ht=Dt.groups;for(let Xt=0,ie=Ht.length;Xt<ie;Xt++){const oe=Ht[Xt],qt=At[oe.materialIndex];qt&&qt.visible&&T.push(R,Dt,qt,K,Gt.z,oe)}}else At.visible&&T.push(R,Dt,At,K,Gt.z,null)}}const Rt=R.children;for(let Dt=0,At=Rt.length;Dt<At;Dt++)ia(Rt[Dt],H,K,Y)}function Kl(R,H,K,Y){const{opaque:$,transmissive:Rt,transparent:Dt}=R;E.setupLightsView(K),ct===!0&&Yt.setGlobalState(A.clippingPlanes,K),Y&&S.viewport(X.copy(Y)),$.length>0&&Pr($,H,K),Rt.length>0&&Pr(Rt,H,K),Dt.length>0&&Pr(Dt,H,K),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function Jl(R,H,K,Y){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[Y.id]===void 0){const qt=Ut.has("EXT_color_buffer_half_float")||Ut.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[Y.id]=new Zn(1,1,{generateMipmaps:!0,type:qt?ai:_n,minFilter:Mi,samples:Math.max(4,I.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:le.workingColorSpace})}const Rt=E.state.transmissionRenderTarget[Y.id],Dt=Y.viewport||X;Rt.setSize(Dt.z*A.transmissionResolutionScale,Dt.w*A.transmissionResolutionScale);const At=A.getRenderTarget(),Ht=A.getActiveCubeFace(),Xt=A.getActiveMipmapLevel();A.setRenderTarget(Rt),A.getClearColor(It),Mt=A.getClearAlpha(),Mt<1&&A.setClearColor(16777215,.5),A.clear(),mt&&ne.render(K);const ie=A.toneMapping;A.toneMapping=Yn;const oe=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),E.setupLightsView(Y),ct===!0&&Yt.setGlobalState(A.clippingPlanes,Y),Pr(R,K,Y),Q.updateMultisampleRenderTarget(Rt),Q.updateRenderTargetMipmap(Rt),Ut.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let ye=0,De=H.length;ye<De;ye++){const Ie=H[ye],{object:be,geometry:Ke,material:Lt,group:dn}=Ie;if(Lt.side===ze&&be.layers.test(Y.layers)){const de=Lt.side;Lt.side=en,Lt.needsUpdate=!0,Ql(be,K,Y,Ke,Lt,dn),Lt.side=de,Lt.needsUpdate=!0,qt=!0}}qt===!0&&(Q.updateMultisampleRenderTarget(Rt),Q.updateRenderTargetMipmap(Rt))}A.setRenderTarget(At,Ht,Xt),A.setClearColor(It,Mt),oe!==void 0&&(Y.viewport=oe),A.toneMapping=ie}function Pr(R,H,K){const Y=H.isScene===!0?H.overrideMaterial:null;for(let $=0,Rt=R.length;$<Rt;$++){const Dt=R[$],{object:At,geometry:Ht,group:Xt}=Dt;let ie=Dt.material;ie.allowOverride===!0&&Y!==null&&(ie=Y),At.layers.test(K.layers)&&Ql(At,H,K,Ht,ie,Xt)}}function Ql(R,H,K,Y,$,Rt){R.onBeforeRender(A,H,K,Y,$,Rt),R.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),$.onBeforeRender(A,H,K,Y,R,Rt),$.transparent===!0&&$.side===ze&&$.forceSinglePass===!1?($.side=en,$.needsUpdate=!0,A.renderBufferDirect(K,H,Y,$,R,Rt),$.side=Si,$.needsUpdate=!0,A.renderBufferDirect(K,H,Y,$,R,Rt),$.side=ze):A.renderBufferDirect(K,H,Y,$,R,Rt),R.onAfterRender(A,H,K,Y,$,Rt)}function Ir(R,H,K){H.isScene!==!0&&(H=zt);const Y=q.get(R),$=E.state.lights,Rt=E.state.shadowsArray,Dt=$.state.version,At=yt.getParameters(R,$.state,Rt,H,K,E.state.lightProbeGridArray),Ht=yt.getProgramCacheKey(At);let Xt=Y.programs;Y.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?H.environment:null,Y.fog=H.fog;const ie=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;Y.envMap=ut.get(R.envMap||Y.environment,ie),Y.envMapRotation=Y.environment!==null&&R.envMap===null?H.environmentRotation:R.envMapRotation,Xt===void 0&&(R.addEventListener("dispose",Bn),Xt=new Map,Y.programs=Xt);let oe=Xt.get(Ht);if(oe!==void 0){if(Y.currentProgram===oe&&Y.lightsStateVersion===Dt)return th(R,At),oe}else At.uniforms=yt.getUniforms(R),L!==null&&R.isNodeMaterial&&L.build(R,K,At),R.onBeforeCompile(At,A),oe=yt.acquireProgram(At,Ht),Xt.set(Ht,oe),Y.uniforms=At.uniforms;const qt=Y.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(qt.clippingPlanes=Yt.uniform),th(R,At),Y.needsLights=np(R),Y.lightsStateVersion=Dt,Y.needsLights&&(qt.ambientLightColor.value=$.state.ambient,qt.lightProbe.value=$.state.probe,qt.directionalLights.value=$.state.directional,qt.directionalLightShadows.value=$.state.directionalShadow,qt.spotLights.value=$.state.spot,qt.spotLightShadows.value=$.state.spotShadow,qt.rectAreaLights.value=$.state.rectArea,qt.ltc_1.value=$.state.rectAreaLTC1,qt.ltc_2.value=$.state.rectAreaLTC2,qt.pointLights.value=$.state.point,qt.pointLightShadows.value=$.state.pointShadow,qt.hemisphereLights.value=$.state.hemi,qt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,qt.spotLightMatrix.value=$.state.spotLightMatrix,qt.spotLightMap.value=$.state.spotLightMap,qt.pointShadowMatrix.value=$.state.pointShadowMatrix),Y.lightProbeGrid=E.state.lightProbeGridArray.length>0,Y.currentProgram=oe,Y.uniformsList=null,oe}function jl(R){if(R.uniformsList===null){const H=R.currentProgram.getUniforms();R.uniformsList=So.seqWithValue(H.seq,R.uniforms)}return R.uniformsList}function th(R,H){const K=q.get(R);K.outputColorSpace=H.outputColorSpace,K.batching=H.batching,K.batchingColor=H.batchingColor,K.instancing=H.instancing,K.instancingColor=H.instancingColor,K.instancingMorph=H.instancingMorph,K.skinning=H.skinning,K.morphTargets=H.morphTargets,K.morphNormals=H.morphNormals,K.morphColors=H.morphColors,K.morphTargetsCount=H.morphTargetsCount,K.numClippingPlanes=H.numClippingPlanes,K.numIntersection=H.numClipIntersection,K.vertexAlphas=H.vertexAlphas,K.vertexTangents=H.vertexTangents,K.toneMapping=H.toneMapping}function jf(R,H){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;_.setFromMatrixPosition(H.matrixWorld);for(let K=0,Y=R.length;K<Y;K++){const $=R[K];if($.texture!==null&&$.boundingBox.containsPoint(_))return $}return null}function tp(R,H,K,Y,$){H.isScene!==!0&&(H=zt),Q.resetTextureUnits();const Rt=H.fog,Dt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?H.environment:null,At=B===null?A.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:le.workingColorSpace,Ht=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Xt=ut.get(Y.envMap||Dt,Ht),ie=Y.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,oe=!!K.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),qt=!!K.morphAttributes.position,ye=!!K.morphAttributes.normal,De=!!K.morphAttributes.color;let Ie=Yn;Y.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Ie=A.toneMapping);const be=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Ke=be!==void 0?be.length:0,Lt=q.get(Y),dn=E.state.lights;if(ct===!0&&(ot===!0||R!==j)){const Ee=R===j&&Y.id===W;Yt.setState(Y,R,Ee)}let de=!1;Y.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==dn.state.version||Lt.outputColorSpace!==At||$.isBatchedMesh&&Lt.batching===!1||!$.isBatchedMesh&&Lt.batching===!0||$.isBatchedMesh&&Lt.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Lt.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Lt.instancing===!1||!$.isInstancedMesh&&Lt.instancing===!0||$.isSkinnedMesh&&Lt.skinning===!1||!$.isSkinnedMesh&&Lt.skinning===!0||$.isInstancedMesh&&Lt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Lt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Lt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Lt.instancingMorph===!1&&$.morphTexture!==null||Lt.envMap!==Xt||Y.fog===!0&&Lt.fog!==Rt||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==Yt.numPlanes||Lt.numIntersection!==Yt.numIntersection)||Lt.vertexAlphas!==ie||Lt.vertexTangents!==oe||Lt.morphTargets!==qt||Lt.morphNormals!==ye||Lt.morphColors!==De||Lt.toneMapping!==Ie||Lt.morphTargetsCount!==Ke||!!Lt.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(de=!0):(de=!0,Lt.__version=Y.version);let yn=Lt.currentProgram;de===!0&&(yn=Ir(Y,H,$),L&&Y.isNodeMaterial&&L.onUpdateProgram(Y,yn,Lt));let Hn=!1,li=!1,Qi=!1;const Se=yn.getUniforms(),Ne=Lt.uniforms;if(S.useProgram(yn.program)&&(Hn=!0,li=!0,Qi=!0),Y.id!==W&&(W=Y.id,li=!0),Lt.needsLights){const Ee=jf(E.state.lightProbeGridArray,$);Lt.lightProbeGrid!==Ee&&(Lt.lightProbeGrid=Ee,li=!0)}if(Hn||j!==R){S.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Se.setValue(O,"projectionMatrix",R.projectionMatrix),Se.setValue(O,"viewMatrix",R.matrixWorldInverse);const ui=Se.map.cameraPosition;ui!==void 0&&ui.setValue(O,vt.setFromMatrixPosition(R.matrixWorld)),I.logarithmicDepthBuffer&&Se.setValue(O,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Se.setValue(O,"isOrthographic",R.isOrthographicCamera===!0),j!==R&&(j=R,li=!0,Qi=!0)}if(Lt.needsLights&&(dn.state.directionalShadowMap.length>0&&Se.setValue(O,"directionalShadowMap",dn.state.directionalShadowMap,Q),dn.state.spotShadowMap.length>0&&Se.setValue(O,"spotShadowMap",dn.state.spotShadowMap,Q),dn.state.pointShadowMap.length>0&&Se.setValue(O,"pointShadowMap",dn.state.pointShadowMap,Q)),$.isSkinnedMesh){Se.setOptional(O,$,"bindMatrix"),Se.setOptional(O,$,"bindMatrixInverse");const Ee=$.skeleton;Ee&&(Ee.boneTexture===null&&Ee.computeBoneTexture(),Se.setValue(O,"boneTexture",Ee.boneTexture,Q))}$.isBatchedMesh&&(Se.setOptional(O,$,"batchingTexture"),Se.setValue(O,"batchingTexture",$._matricesTexture,Q),Se.setOptional(O,$,"batchingIdTexture"),Se.setValue(O,"batchingIdTexture",$._indirectTexture,Q),Se.setOptional(O,$,"batchingColorTexture"),$._colorsTexture!==null&&Se.setValue(O,"batchingColorTexture",$._colorsTexture,Q));const hi=K.morphAttributes;if((hi.position!==void 0||hi.normal!==void 0||hi.color!==void 0)&&k.update($,K,yn),(li||Lt.receiveShadow!==$.receiveShadow)&&(Lt.receiveShadow=$.receiveShadow,Se.setValue(O,"receiveShadow",$.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&H.environment!==null&&(Ne.envMapIntensity.value=H.environmentIntensity),Ne.dfgLUT!==void 0&&(Ne.dfgLUT.value=i1()),li){if(Se.setValue(O,"toneMappingExposure",A.toneMappingExposure),Lt.needsLights&&ep(Ne,Qi),Rt&&Y.fog===!0&&Bt.refreshFogUniforms(Ne,Rt),Bt.refreshMaterialUniforms(Ne,Y,st,lt,E.state.transmissionRenderTarget[R.id]),Lt.needsLights&&Lt.lightProbeGrid){const Ee=Lt.lightProbeGrid;Ne.probesSH.value=Ee.texture,Ne.probesMin.value.copy(Ee.boundingBox.min),Ne.probesMax.value.copy(Ee.boundingBox.max),Ne.probesResolution.value.copy(Ee.resolution)}So.upload(O,jl(Lt),Ne,Q)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(So.upload(O,jl(Lt),Ne,Q),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Se.setValue(O,"center",$.center),Se.setValue(O,"modelViewMatrix",$.modelViewMatrix),Se.setValue(O,"normalMatrix",$.normalMatrix),Se.setValue(O,"modelMatrix",$.matrixWorld),Y.uniformsGroups!==void 0){const Ee=Y.uniformsGroups;for(let ui=0,ji=Ee.length;ui<ji;ui++){const eh=Ee[ui];at.update(eh,yn),at.bind(eh,yn)}}return yn}function ep(R,H){R.ambientLightColor.needsUpdate=H,R.lightProbe.needsUpdate=H,R.directionalLights.needsUpdate=H,R.directionalLightShadows.needsUpdate=H,R.pointLights.needsUpdate=H,R.pointLightShadows.needsUpdate=H,R.spotLights.needsUpdate=H,R.spotLightShadows.needsUpdate=H,R.rectAreaLights.needsUpdate=H,R.hemisphereLights.needsUpdate=H}function np(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(R,H,K){const Y=q.get(R);Y.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),q.get(R.texture).__webglTexture=H,q.get(R.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:K,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,H){const K=q.get(R);K.__webglFramebuffer=H,K.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(R,H=0,K=0){B=R,z=H,U=K;let Y=null,$=!1,Rt=!1;if(R){const At=q.get(R);if(At.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(O.FRAMEBUFFER,At.__webglFramebuffer),X.copy(R.viewport),et.copy(R.scissor),Nt=R.scissorTest,S.viewport(X),S.scissor(et),S.setScissorTest(Nt),W=-1;return}else if(At.__webglFramebuffer===void 0)Q.setupRenderTarget(R);else if(At.__hasExternalTextures)Q.rebindTextures(R,q.get(R.texture).__webglTexture,q.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ie=R.depthTexture;if(At.__boundDepthTexture!==ie){if(ie!==null&&q.has(ie)&&(R.width!==ie.image.width||R.height!==ie.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(R)}}const Ht=R.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(Rt=!0);const Xt=q.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Xt[H])?Y=Xt[H][K]:Y=Xt[H],$=!0):R.samples>0&&Q.useMultisampledRTT(R)===!1?Y=q.get(R).__webglMultisampledFramebuffer:Array.isArray(Xt)?Y=Xt[K]:Y=Xt,X.copy(R.viewport),et.copy(R.scissor),Nt=R.scissorTest}else X.copy(dt).multiplyScalar(st).floor(),et.copy(ee).multiplyScalar(st).floor(),Nt=Wt;if(K!==0&&(Y=N),S.bindFramebuffer(O.FRAMEBUFFER,Y)&&S.drawBuffers(R,Y),S.viewport(X),S.scissor(et),S.setScissorTest(Nt),$){const At=q.get(R.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+H,At.__webglTexture,K)}else if(Rt){const At=H;for(let Ht=0;Ht<R.textures.length;Ht++){const Xt=q.get(R.textures[Ht]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Ht,Xt.__webglTexture,K,At)}}else if(R!==null&&K!==0){const At=q.get(R.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,At.__webglTexture,K)}W=-1},this.readRenderTargetPixels=function(R,H,K,Y,$,Rt,Dt,At=0){if(!(R&&R.isWebGLRenderTarget)){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=q.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Dt!==void 0&&(Ht=Ht[Dt]),Ht){S.bindFramebuffer(O.FRAMEBUFFER,Ht);try{const Xt=R.textures[At],ie=Xt.format,oe=Xt.type;if(R.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+At),!I.textureFormatReadable(ie)){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!I.textureTypeReadable(oe)){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=R.width-Y&&K>=0&&K<=R.height-$&&O.readPixels(H,K,Y,$,wt.convert(ie),wt.convert(oe),Rt)}finally{const Xt=B!==null?q.get(B).__webglFramebuffer:null;S.bindFramebuffer(O.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(R,H,K,Y,$,Rt,Dt,At=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=q.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Dt!==void 0&&(Ht=Ht[Dt]),Ht)if(H>=0&&H<=R.width-Y&&K>=0&&K<=R.height-$){S.bindFramebuffer(O.FRAMEBUFFER,Ht);const Xt=R.textures[At],ie=Xt.format,oe=Xt.type;if(R.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+At),!I.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!I.textureTypeReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,qt),O.bufferData(O.PIXEL_PACK_BUFFER,Rt.byteLength,O.STREAM_READ),O.readPixels(H,K,Y,$,wt.convert(ie),wt.convert(oe),0);const ye=B!==null?q.get(B).__webglFramebuffer:null;S.bindFramebuffer(O.FRAMEBUFFER,ye);const De=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await C0(O,De,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,qt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Rt),O.deleteBuffer(qt),O.deleteSync(De),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,H=null,K=0){const Y=Math.pow(2,-K),$=Math.floor(R.image.width*Y),Rt=Math.floor(R.image.height*Y),Dt=H!==null?H.x:0,At=H!==null?H.y:0;Q.setTexture2D(R,0),O.copyTexSubImage2D(O.TEXTURE_2D,K,0,0,Dt,At,$,Rt),S.unbindTexture()},this.copyTextureToTexture=function(R,H,K=null,Y=null,$=0,Rt=0){let Dt,At,Ht,Xt,ie,oe,qt,ye,De;const Ie=R.isCompressedTexture?R.mipmaps[Rt]:R.image;if(K!==null)Dt=K.max.x-K.min.x,At=K.max.y-K.min.y,Ht=K.isBox3?K.max.z-K.min.z:1,Xt=K.min.x,ie=K.min.y,oe=K.isBox3?K.min.z:0;else{const Ne=Math.pow(2,-$);Dt=Math.floor(Ie.width*Ne),At=Math.floor(Ie.height*Ne),R.isDataArrayTexture?Ht=Ie.depth:R.isData3DTexture?Ht=Math.floor(Ie.depth*Ne):Ht=1,Xt=0,ie=0,oe=0}Y!==null?(qt=Y.x,ye=Y.y,De=Y.z):(qt=0,ye=0,De=0);const be=wt.convert(H.format),Ke=wt.convert(H.type);let Lt;H.isData3DTexture?(Q.setTexture3D(H,0),Lt=O.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(Q.setTexture2DArray(H,0),Lt=O.TEXTURE_2D_ARRAY):(Q.setTexture2D(H,0),Lt=O.TEXTURE_2D),S.activeTexture(O.TEXTURE0),S.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,H.flipY),S.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),S.pixelStorei(O.UNPACK_ALIGNMENT,H.unpackAlignment);const dn=S.getParameter(O.UNPACK_ROW_LENGTH),de=S.getParameter(O.UNPACK_IMAGE_HEIGHT),yn=S.getParameter(O.UNPACK_SKIP_PIXELS),Hn=S.getParameter(O.UNPACK_SKIP_ROWS),li=S.getParameter(O.UNPACK_SKIP_IMAGES);S.pixelStorei(O.UNPACK_ROW_LENGTH,Ie.width),S.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ie.height),S.pixelStorei(O.UNPACK_SKIP_PIXELS,Xt),S.pixelStorei(O.UNPACK_SKIP_ROWS,ie),S.pixelStorei(O.UNPACK_SKIP_IMAGES,oe);const Qi=R.isDataArrayTexture||R.isData3DTexture,Se=H.isDataArrayTexture||H.isData3DTexture;if(R.isDepthTexture){const Ne=q.get(R),hi=q.get(H),Ee=q.get(Ne.__renderTarget),ui=q.get(hi.__renderTarget);S.bindFramebuffer(O.READ_FRAMEBUFFER,Ee.__webglFramebuffer),S.bindFramebuffer(O.DRAW_FRAMEBUFFER,ui.__webglFramebuffer);for(let ji=0;ji<Ht;ji++)Qi&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,q.get(R).__webglTexture,$,oe+ji),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,q.get(H).__webglTexture,Rt,De+ji)),O.blitFramebuffer(Xt,ie,Dt,At,qt,ye,Dt,At,O.DEPTH_BUFFER_BIT,O.NEAREST);S.bindFramebuffer(O.READ_FRAMEBUFFER,null),S.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if($!==0||R.isRenderTargetTexture||q.has(R)){const Ne=q.get(R),hi=q.get(H);S.bindFramebuffer(O.READ_FRAMEBUFFER,F),S.bindFramebuffer(O.DRAW_FRAMEBUFFER,P);for(let Ee=0;Ee<Ht;Ee++)Qi?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ne.__webglTexture,$,oe+Ee):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ne.__webglTexture,$),Se?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,hi.__webglTexture,Rt,De+Ee):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,hi.__webglTexture,Rt),$!==0?O.blitFramebuffer(Xt,ie,Dt,At,qt,ye,Dt,At,O.COLOR_BUFFER_BIT,O.NEAREST):Se?O.copyTexSubImage3D(Lt,Rt,qt,ye,De+Ee,Xt,ie,Dt,At):O.copyTexSubImage2D(Lt,Rt,qt,ye,Xt,ie,Dt,At);S.bindFramebuffer(O.READ_FRAMEBUFFER,null),S.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Se?R.isDataTexture||R.isData3DTexture?O.texSubImage3D(Lt,Rt,qt,ye,De,Dt,At,Ht,be,Ke,Ie.data):H.isCompressedArrayTexture?O.compressedTexSubImage3D(Lt,Rt,qt,ye,De,Dt,At,Ht,be,Ie.data):O.texSubImage3D(Lt,Rt,qt,ye,De,Dt,At,Ht,be,Ke,Ie):R.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Rt,qt,ye,Dt,At,be,Ke,Ie.data):R.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Rt,qt,ye,Ie.width,Ie.height,be,Ie.data):O.texSubImage2D(O.TEXTURE_2D,Rt,qt,ye,Dt,At,be,Ke,Ie);S.pixelStorei(O.UNPACK_ROW_LENGTH,dn),S.pixelStorei(O.UNPACK_IMAGE_HEIGHT,de),S.pixelStorei(O.UNPACK_SKIP_PIXELS,yn),S.pixelStorei(O.UNPACK_SKIP_ROWS,Hn),S.pixelStorei(O.UNPACK_SKIP_IMAGES,li),Rt===0&&H.generateMipmaps&&O.generateMipmap(Lt),S.unbindTexture()},this.initRenderTarget=function(R){q.get(R).__webglFramebuffer===void 0&&Q.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Q.setTextureCube(R,0):R.isData3DTexture?Q.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Q.setTexture2DArray(R,0):Q.setTexture2D(R,0),S.unbindTexture()},this.resetState=function(){z=0,U=0,B=null,S.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}}function r1(i){const t=document.createElement("canvas");t.width=i,t.height=i;const e=t.getContext("2d"),n=e.createImageData(i,i),s=[8,24,8,16],r=s.map(a=>{const c=[];for(let l=0;l<a*a;l++)c.push(Math.random());return c}),o=(a,c,l)=>{const h=s[a],d=r[a],u=c/i*h,f=l/i*h,g=Math.floor(u),v=Math.floor(f),p=u-g,m=f-v,M=p*p*(3-2*p),y=m*m*(3-2*m),_=(T,E)=>d[(E%h+h)%h*h+(T%h+h)%h];return _(g,v)*(1-M)*(1-y)+_(g+1,v)*M*(1-y)+_(g,v+1)*(1-M)*y+_(g+1,v+1)*M*y};for(let a=0;a<i;a++)for(let c=0;c<i;c++){const l=(a*i+c)*4;for(let h=0;h<4;h++)n.data[l+h]=Math.floor(o(h,c,a)*255)}return e.putImageData(n,0,0),t}const Wo=-.5,o1=4,Gu=440,a1=2,c1=.35+.18+.08,l1=`
attribute float aDepth;
varying float vDepth;   // depth in meters (baked, static)
varying vec3 vWorldPos;
varying vec3 vWaveN;    // analytic wave normal, shore-pinned
varying float vWaveH;   // normalized wave height -1..1 (SSS peak mask)
varying vec2 vNoiseUv1; // vertex-panned (free interpolation)
varying vec2 vNoiseUv2;
uniform float uTime;
void main() {
  vec4 wp0 = modelMatrix * vec4(position, 1.0);
  vec2 p = wp0.xz;
  float t = uTime;
  // Three dreamy summed sines, vertical only. Slow phases for calm water.
  float h = 0.0;
  vec2 g = vec2(0.0);
  { // primary swell into the bay: A=0.35, wavelength 16m
    vec2 dir = normalize(vec2(0.15, 1.0));
    float k = 6.28318 / 16.0;
    float ph = dot(dir, p) * k + t * 0.9;
    h += 0.35 * sin(ph);
    g += dir * (0.35 * k * cos(ph));
  }
  { // secondary: A=0.18, wavelength 8m, ~40 degrees off
    vec2 dir = normalize(vec2(0.83, 0.55));
    float k = 6.28318 / 8.0;
    float ph = dot(dir, p) * k + t * 1.3;
    h += 0.18 * sin(ph);
    g += dir * (0.18 * k * cos(ph));
  }
  { // ripple: A=0.08, wavelength 7m, cross direction
    vec2 dir = normalize(vec2(-0.6, 0.8));
    float k = 6.28318 / 7.0;
    float ph = dot(dir, p) * k + t * 1.9;
    h += 0.08 * sin(ph);
    g += dir * (0.08 * k * cos(ph));
  }
  float shorePin = smoothstep(0.0, ${a1.toFixed(1)}, aDepth);
  vWaveH = clamp(h / ${c1.toFixed(3)}, -1.0, 1.0);
  vec3 waveN = normalize(vec3(-g.x, 1.0, -g.y));
  vWaveN = normalize(mix(vec3(0.0, 1.0, 0.0), waveN, shorePin));
  vec3 displaced = position;
  displaced.y += h * shorePin;
  vec4 wp = modelMatrix * vec4(displaced, 1.0);
  vWorldPos = wp.xyz;
  vDepth = aDepth;
  // Roystan mobile trick: pan noise UVs in the vertex shader (free).
  vec2 baseUv = wp0.xz * 0.02;
  vNoiseUv1 = baseUv + vec2(t * 0.008, t * 0.005);
  vNoiseUv2 = baseUv * 2.3 - vec2(t * 0.006, -t * 0.004);
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,h1=`
precision highp float;
varying float vDepth;
varying vec3 vWorldPos;
varying vec3 vWaveN;
varying float vWaveH;
varying vec2 vNoiseUv1;
varying vec2 vNoiseUv2;
uniform float uTime;
uniform vec3 uShallow;   // tropical turquoise
uniform vec3 uMid;       // blue
uniform vec3 uDeep;      // navy
uniform vec3 uFoamColor; // near-white
uniform vec3 uSssColor;  // subsurface turquoise glow
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform float uSunI;     // day-cycle sun intensity
uniform vec3 uSkyColor;   // horizon color for fresnel
uniform sampler2D uNoise;
uniform vec3 uCamPos;

vec2 vhash22(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.xx + p3.yz) * p3.zy);
}
// Single-octave voronoi, returns vec2(F1, F2) distances.
vec2 voro12(vec2 p) {
  vec2 ip = floor(p);
  vec2 fp = fract(p);
  float f1 = 8.0;
  float f2 = 8.0;
  for (int j = -1; j <= 1; j++) {
    for (int i = -1; i <= 1; i++) {
      vec2 g = vec2(float(i), float(j));
      vec2 o = vhash22(ip + g);
      vec2 r = g + o - fp;
      float d = dot(r, r);
      if (d < f1) { f2 = f1; f1 = d; }
      else if (d < f2) { f2 = d; }
    }
  }
  return sqrt(vec2(f1, f2));
}

void main() {
  // Hard discard where terrain is above water (matches pre-PR#36 behavior).
  // This avoids z-fighting/coplanar alpha-blend artifacts at the shoreline.
  if (vDepth < 0.02) discard;
  float d = clamp(vDepth / ${o1}.0, 0.0, 1.0);
  vec3 V = normalize(uCamPos - vWorldPos);
  // uSunI ranges ~1.6-2.4 over the day cycle; normalize so mix factors and
  // multipliers stay in [0,1] instead of extrapolating past target colors.
  float sunN = clamp(uSunI / 2.4, 0.0, 1.0);

  // --- Base color: 3-stop depth ramp, lighting-driven (never gradient-fill) ---
  vec3 col = mix(uShallow, uMid, smoothstep(0.0, 0.45, d));
  col = mix(col, uDeep, smoothstep(0.35, 1.0, d));

  // Subsurface fake (Sea of Thieves): peaks are thinner so light travels a
  // shorter path — wave crests and the sun side glow turquoise.
  float peakMask = smoothstep(0.15, 0.9, vWaveH);
  float sunSide = pow(max(dot(V, uSunDir), 0.0), 2.0);
  float deepMask = smoothstep(0.35, 0.9, d);
  col = mix(col, uSssColor * (0.55 + 0.45 * sunSide),
            peakMask * 0.55 * sunN * (1.0 - deepMask));
  // Constant luminous lift in the shallows.
  col = mix(col, uSssColor, (1.0 - smoothstep(0.0, 0.35, d)) * 0.25 * sunN);

  // --- Normals: analytic wave normal + noise perturbation (free channels) ---
  vec4 nz1 = texture2D(uNoise, vNoiseUv1);
  vec4 nz2 = texture2D(uNoise, vNoiseUv2);
  vec2 flow = texture2D(uNoise, vWorldPos.xz * 0.008).bg * 2.0 - 1.0;
  vec3 N = normalize(vWaveN + vec3((nz1.r - 0.5) * 0.55, 0.0, (nz2.r - 0.5) * 0.55));

  // --- Foam layer 1: marching bands (Alisavakis) — 4 lines flowing shoreward ---
  float foamDiff = clamp(vDepth / 1.6, 0.0, 1.0); // 0 at shoreline
  float march = sin((foamDiff + uTime * 0.10) * 25.1327); // 8PI: 4 lines
  float lineMask = clamp(march, 0.0, 1.0) * (1.0 - foamDiff); // kills deep banding
  float foamTex = nz1.r;
  float thresh = foamDiff - lineMask * 0.45;
  float foamMarch = smoothstep(thresh - 0.04, thresh + 0.04,
                               foamTex * (1.0 - foamDiff * 0.35) + lineMask * 0.18);

  // --- Foam layer 2: Wind Waker voronoi "fishing net", flow-distorted ---
  vec2 wuv1 = vWorldPos.xz * 0.10 + flow * 0.6 + vec2(uTime * 0.010, uTime * 0.006);
  vec2 wuv2 = vWorldPos.xz * 0.21 + flow * 0.4 + vec2(-uTime * 0.008, uTime * 0.011);
  // slight rotation on the second grid kills visible tiling
  wuv2 = mat2(0.94, -0.34, 0.34, 0.94) * wuv2;
  vec2 f12a = voro12(wuv1);
  vec2 f12b = voro12(wuv2);
  float net1 = 1.0 - smoothstep(0.0, 0.16, f12a.y - f12a.x);
  float net2 = 1.0 - smoothstep(0.0, 0.16, f12b.y - f12b.x);
  float netMask = smoothstep(0.05, 0.30, d) * (1.0 - smoothstep(0.60, 1.0, d));
  float foamNet = max(net1, net2 * 0.8) * netMask;
  // Dark blue underlayer gives the net painterly depth.
  float netDark = max(1.0 - smoothstep(0.0, 0.34, f12a.y - f12a.x),
                      1.0 - smoothstep(0.0, 0.34, f12b.y - f12b.x)) * netMask;
  col = mix(col, uDeep * 0.55 + uFoamColor * 0.12, netDark * 0.5);

  // --- Foam layer 3: ebbing contact ring at the waterline ---
  float ebb = 0.5 + 0.5 * sin(uTime * 0.8);
  float ringD = 0.10 + ebb * 0.10;
  float foamRing = (1.0 - smoothstep(0.0, ringD, vDepth))
                 * smoothstep(0.0, 0.015, vDepth)
                 * (0.55 + 0.45 * foamTex);

  // --- Fresnel to sky at grazing angles (stronger in deep water) ---
  float fres = 0.02 + 0.98 * pow(1.0 - max(dot(N, V), 0.0), 5.0);
  col = mix(col, uSkyColor, clamp(fres * 0.6, 0.0, 1.0) * smoothstep(0.05, 0.7, d));

  // --- Composite white foam ---
  float foamAll = clamp(foamMarch + foamNet + foamRing, 0.0, 1.0);
  vec3 foamCol = uFoamColor * (0.92 + 0.08 * foamTex);
  col = mix(col, foamCol, foamAll);

  // --- Sparkles: tight sun glint gated by high-freq noise, distance-faded ---
  vec3 Hv = normalize(uSunDir + V);
  float ndh = max(dot(N, Hv), 0.0);
  float sparkleGate = smoothstep(0.90, 0.995, nz2.g);
  float sparkle = pow(ndh, 700.0) * sparkleGate * sunN;
  float glint = pow(ndh, 120.0) * 0.22 * sunN;
  // Foam is matte: no glint under foam. Sparkles dance over everything.
  col += uSunColor * (sparkle * 2.5 + glint * (1.0 - foamAll));

  gl_FragColor = vec4(col, 1.0);
}
`;function u1(i){return new un({vertexShader:l1,fragmentShader:h1,uniforms:{uTime:{value:0},uShallow:{value:new $t(5235649)},uMid:{value:new $t(2793432)},uDeep:{value:new $t(997998)},uFoamColor:{value:new $t(16055295)},uSssColor:{value:new $t(9434584)},uSunDir:{value:new D(.4,.8,.3).normalize()},uSunColor:{value:new $t(16773849)},uSunI:{value:1},uSkyColor:{value:new $t(11459048)},uNoise:{value:i},uCamPos:{value:new D}}})}function d1(){const i=r1(256),t=new wi(i);t.wrapS=t.wrapT=Mr,t.generateMipmaps=!0,t.minFilter=Mi;const e=u1(t),n=new xn(Gu,Gu,200,200);n.rotateX(-Math.PI/2);const s=n.attributes.position,r=new Float32Array(s.count);for(let a=0;a<s.count;a++){const c=s.getX(a),l=s.getZ(a);r[a]=Wo-Me(c,l)}n.setAttribute("aDepth",new We(r,1));const o=new J(n,e);return o.position.y=Wo,o.renderOrder=1,o.userData.material=e,o.userData.noiseTex=t,o}function f1(i,t,e,n){const s=i.userData.material;s&&s.uniforms&&s.uniforms.uTime&&(s.uniforms.uTime.value=t,s.uniforms.uCamPos.value.copy(e),n&&(s.uniforms.uSunDir.value.copy(n.sunDir),s.uniforms.uSunColor.value.copy(n.sunColor),s.uniforms.uSunI.value=n.sunIntensity,s.uniforms.uSkyColor.value.copy(n.skyColor)));const r=i.userData.sparkles,o=r==null?void 0:r.material;o&&o.uniforms&&o.uniforms.uTime&&(o.uniforms.uTime.value=t,n&&(o.uniforms.uSunColor.value.copy(n.sunColor),o.uniforms.uSunI.value=n.sunIntensity))}const p1=`
attribute float aPhase;
attribute float aScale;
attribute float aDepth;
varying float vTw;
varying float vFade;
uniform float uTime;
void main() {
  vec3 p = position;
  p.x += sin(uTime * 0.12 + aPhase) * 1.5;
  p.z += cos(uTime * 0.10 + aPhase * 1.7) * 1.5;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  float tw = 0.5 + 0.5 * sin(uTime * (1.2 + fract(aPhase) * 2.0) + aPhase * 7.0);
  vTw = tw;
  float dist = max(1.0, -mv.z);
  vFade = smoothstep(0.4, 0.8, aDepth);
  gl_PointSize = aScale * 130.0 / dist * (0.6 + 0.4 * tw);
  gl_Position = projectionMatrix * mv;
}
`,m1=`
precision highp float;
varying float vTw;
varying float vFade;
uniform vec3 uSunColor;
uniform float uSunI;
void main() {
  if (vFade <= 0.001) discard;
  vec2 pc = abs(gl_PointCoord - 0.5);
  float barX = (1.0 - smoothstep(0.0, 0.05, pc.y)) * (1.0 - smoothstep(0.0, 0.5, pc.x));
  float barY = (1.0 - smoothstep(0.0, 0.05, pc.x)) * (1.0 - smoothstep(0.0, 0.5, pc.y));
  float core = 1.0 - smoothstep(0.0, 0.16, length(pc));
  float star = clamp(barX * 0.7 + barY * 0.7 + core, 0.0, 1.0);
  float sunN = clamp(uSunI / 2.4, 0.0, 1.0);
  float a = star * smoothstep(0.25, 0.85, vTw) * vFade * sunN;
  if (a <= 0.003) discard;
  gl_FragColor = vec4(uSunColor * 1.2, a);
}
`;function g1(i=140){const t=new Float32Array(i*3),e=new Float32Array(i),n=new Float32Array(i),s=new Float32Array(i);let r=0,o=0;for(;r<i&&o<6e3;){o++;const h=(Math.random()*2-1)*150,d=(Math.random()*2-1)*150,u=Wo-Me(h,d);u<.5||u>3.2||(t[r*3]=h,t[r*3+1]=.3,t[r*3+2]=d,e[r]=Math.random()*Math.PI*2,n[r]=.5+Math.random()*.8,s[r]=u,r++)}const a=new ge;a.setAttribute("position",new We(t,3)),a.setAttribute("aPhase",new We(e,1)),a.setAttribute("aScale",new We(n,1)),a.setAttribute("aDepth",new We(s,1));const c=new un({vertexShader:p1,fragmentShader:m1,uniforms:{uTime:{value:0},uSunColor:{value:new $t(16773849)},uSunI:{value:1}},transparent:!0,depthWrite:!1,blending:Po}),l=new xg(a,c);return l.frustumCulled=!1,l.renderOrder=2,l}function x1(i){const t=i;t.onBeforeCompile=e=>{e.uniforms.uCausticTime={value:0},e.uniforms.uCausticSun={value:1},e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vCausticXZ;
varying float vCausticDepth;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vCausticXZ = position.xz;
vCausticDepth = (${Wo.toFixed(2)}) - position.y;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uCausticTime;
uniform float uCausticSun;
varying vec2 vCausticXZ;
varying float vCausticDepth;
vec2 chash22(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.xx + p3.yz) * p3.zy);
}
float cf1(vec2 p) {
  vec2 ip = floor(p);
  vec2 fp = fract(p);
  float f1 = 8.0;
  for (int j = -1; j <= 1; j++) {
    for (int i = -1; i <= 1; i++) {
      vec2 g = vec2(float(i), float(j));
      vec2 r = g + chash22(ip + g) - fp;
      f1 = min(f1, dot(r, r));
    }
  }
  return sqrt(f1);
}`).replace("#include <map_fragment>",`#include <map_fragment>
{
  float cd = vCausticDepth;
  float cmask = (1.0 - smoothstep(0.0, 1.6, cd)) * smoothstep(0.0, 0.06, cd);
  if (cmask > 0.002) {
    vec2 cuv1 = vCausticXZ * 0.33 + vec2(uCausticTime * 0.030, uCausticTime * 0.017);
    vec2 cuv2 = vCausticXZ * 0.29 - vec2(uCausticTime * 0.022, -uCausticTime * 0.025);
    float ca = 1.0 - clamp(abs(cf1(cuv1) - cf1(cuv2)) * 2.4, 0.0, 1.0);
    ca = ca * ca * ca;
    diffuseColor.rgb += vec3(0.55, 0.9, 0.85) * ca * cmask * 0.4 * uCausticSun;
  }
}`),t.userData.causticShader=e},t.customProgramCacheKey=()=>"ground-caustics-v1"}const Ye=1e-9;function Ha(i){let t=0;for(let e=0;e<i.length;e++){const[n,s]=i[e],[r,o]=i[(e+1)%i.length];t+=n*o-r*s}return Math.abs(t)/2}function Vu(i,t){const[e,n]=i;let s=!1;for(let r=0,o=t.length-1;r<t.length;o=r++){const[a,c]=t[r],[l,h]=t[o];c>n!=h>n&&e<(l-a)*(n-c)/(h-c)+a&&(s=!s)}return s}function v1(i,t,e,n){const s=(l,h,d)=>(h[0]-l[0])*(d[1]-l[1])-(h[1]-l[1])*(d[0]-l[0]),r=s(e,n,i),o=s(e,n,t),a=s(i,t,e),c=s(i,t,n);return(r>Ye&&o<-Ye||r<-Ye&&o>Ye)&&(a>Ye&&c<-Ye||a<-Ye&&c>Ye)}function _1(i,t){for(const e of i)if(Vu(e,t))return!0;for(const e of t)if(Vu(e,i))return!0;for(let e=0;e<i.length;e++)for(let n=0;n<t.length;n++)if(v1(i[e],i[(e+1)%i.length],t[n],t[(n+1)%t.length]))return!0;return!1}function y1(i,t){const e=u=>{let f=0,g=0;for(const[v,p]of u)f+=v,g+=p;return[f/u.length,g/u.length]},[n,s]=e(i),[r,o]=e(t),a=(n+r)/2,c=(s+o)/2,l=(u,f)=>{const g=Math.cos(f),v=Math.sin(f);let p=0;for(let m=0;m<u.length;m++){const[M,y]=u[m],[_,T]=u[(m+1)%u.length],E=_-M,b=T-y,x=g*b-v*E;if(Math.abs(x)<Ye)continue;const w=((M-a)*b-(y-c)*E)/x,A=((M-a)*v-(y-c)*g)/x;w>Ye&&A>-Ye&&A<1+Ye&&(p=Math.max(p,w)),-w>Ye&&-A>-Ye&&-A<1+Ye&&(p=Math.max(p,-w))}return p},h=72,d=[];for(let u=0;u<h;u++){const f=u/h*Math.PI*2,g=Math.max(l(i,f),l(t,f));d.push([a+Math.cos(f)*g,c+Math.sin(f)*g])}return d}function M1(i,t){let e=i;for(let n=0;n<t.length;n++){const[s,r]=t[n],[o,a]=t[(n+1)%t.length],c=e;if(e=[],c.length===0)break;const l=u=>(o-s)*(u[1]-r)-(a-r)*(u[0]-s)>=-Ye,h=(u,f)=>{const g=f[0]-u[0],v=f[1]-u[1],p=(o-s)*v-(a-r)*g;if(Math.abs(p)<Ye)return u;const m=((o-s)*(u[1]-r)-(a-r)*(u[0]-s))/p;return[u[0]+g*m,u[1]+v*m]};let d=c[c.length-1];for(const u of c)l(u)?(l(d)||e.push(h(d,u)),e.push(u)):l(d)&&e.push(h(d,u)),d=u}return e}function po(i,t){if(!_1(i,t))return!1;const e=M1(i,t),n=Ha(e),s=Math.min(Ha(i),Ha(t));return n>s*.01}function b1(i,t,e,n,s){let r=0;for(let o=0;o<s.length;o++){const[a,c]=s[o],[l,h]=s[(o+1)%s.length],d=l-a,u=h-c,f=e*u-n*d;if(Math.abs(f)<1e-9)continue;const g=((a-i)*u-(c-t)*d)/f,v=((a-i)*n-(c-t)*e)/f;g>1e-6&&v>=-1e-6&&v<=1+1e-6&&(r=Math.max(r,g)),-g>1e-6&&-v>=-1e-6&&-v<=1+1e-6&&(r=Math.max(r,-g))}return r}const S1=8.8,w1=4.4,lr=2.4,hr=3.2,As=4.4;function Fl(i){return i.kind==="switchback"?w1:S1}const Wu=new Map;function $i(i){let t=Wu.get(i);if(!t){const e=Oe(pe(i.a)),n=Oe(pe(i.b)),s=new D((e.x+n.x)/2,(e.y+n.y)/2+.15,(e.z+n.z)/2);t=new Qo([new D(e.x,e.y+.18,e.z),s,new D(n.x,n.y+.18,n.z)]),Wu.set(i,t)}return t}const _i=new D,er=new D;function Xo(i,t){const e=$i(i),n=Fl(i)/2;e.getPointAt(t,_i),e.getTangentAt(t,er);const s=Math.hypot(er.x,er.z)||1,r=-er.z/s,o=er.x/s;return Math.max(_i.y,Me(_i.x,_i.z),Me(_i.x+r*n,_i.z+o*n),Me(_i.x-r*n,_i.z-o*n))+.15}const Pn=64,E1=Math.tan(18*Math.PI/180),Xu=new Map;function Ff(i,t){let e=Xu.get(i);if(!e){const a=$i(i).getLength()/Pn,c=E1*a,l=new Float32Array(Pn+1);l[0]=Xo(i,0);for(let h=1;h<=Pn;h++)l[h]=Math.max(Xo(i,h/Pn),l[h-1]-c);e=new Float32Array(Pn+1),e[Pn]=l[Pn];for(let h=Pn-1;h>=0;h--)e[h]=Math.max(l[h],e[h+1]-c);Xu.set(i,e)}const n=Math.max(0,Math.min(Pn,t*Pn)),s=Math.min(Pn-1,Math.floor(n)),r=n-s;return e[s]*(1-r)+e[s+1]*r}let Ss=null;function T1(){if(Ss)return Ss;Ss=new Map;for(const i of Ge){if(i.kind==="bridge")continue;const t=[[i.a,0],[i.b,1]];for(const[e,n]of t){const s=Ff(i,n);Ss.set(e,Math.max(Ss.get(e)??-1/0,s))}}return Ss}function zl(i,t){const e=T1(),n=e.get(i.a)??Xo(i,0),s=e.get(i.b)??Xo(i,1);return Math.max(Ff(i,t),n+(s-n)*t)}const A1=.8,zf=new Set(["bl-w","bl-e"]);function C1(i){const t=Oe(pe(i)),e=[];for(const n of Ge){if(n.kind==="bridge"&&!zf.has(i)||n.a!==i&&n.b!==i)continue;const s=Oe(pe(n.a===i?n.b:n.a)),r=s.x-t.x,o=s.z-t.z,a=Math.hypot(r,o)||1;e.push({e:n,dx:r/a,dz:o/a,hw:Fl(n)/2,len:a,ox:s.x,oz:s.z})}return e}function Ga(i,t,e,n){const s=Oe(pe(t)),r=i.ox-s.x,o=i.oz-s.z,a=r*r+o*o||1,c=Math.min(1,Math.max(0,((e-s.x)*r+(n-s.z)*o)/a));return zl(i.e,i.e.a===t?c:1-c)}function R1(i){let t=6;for(let n=0;n<i.length;n++)for(let s=n+1;s<i.length;s++){const r=i[n],o=i[s],a=Math.min(1,Math.max(-1,r.dx*o.dx+r.dz*o.dz)),c=Math.acos(a),l=Math.min(Math.PI,Math.max(Math.PI/15,c));t=Math.max(t,(r.hw+o.hw)/Math.sin(l))}let e=1/0;for(const n of i)e=Math.min(e,n.len);return Math.min(t,e*.9,14)}let bn=null;function P1(i,t,e,n,s){const r=(n.z-s.z)*(e.x-s.x)+(s.x-n.x)*(e.z-s.z);if(Math.abs(r)<1e-12)return null;const o=((n.z-s.z)*(i-s.x)+(s.x-n.x)*(t-s.z))/r,a=((s.z-e.z)*(i-s.x)+(e.x-s.x)*(t-s.z))/r,c=1-o-a;return o<-1e-9||a<-1e-9||c<-1e-9?null:o*e.h+a*n.h+c*s.h}function Ol(i,t,e,n){for(const[o,a,c]of t){const l=P1(e,n,o,a,c);if(l!==null)return l}let s=i[0],r=1/0;for(const o of i){const a=(o.x-e)*(o.x-e)+(o.z-n)*(o.z-n);a<r&&(r=a,s=o)}return s.h}function qu(i,t,e){return Ol(i.ring,i.tris,t,e)}function kl(){if(bn)return bn;const i=new Set;for(const r of Ge)r.kind!=="bridge"&&(i.add(r.a),i.add(r.b));for(const r of zf)i.add(r);const t=new Map;for(const r of i){if(pe(r).noIntersect)continue;const o=C1(r);if(o.length<2)continue;if(o.length===2){const d=Math.min(1,Math.max(-1,o[0].dx*o[1].dx+o[0].dz*o[1].dz)),u=Math.acos(d);if(u<Math.PI/12||u>Math.PI-Math.PI/12)continue}const a=R1(o),c=Oe(pe(r));let l=1/0,h=-1/0;for(const d of o){const u=Ga(d,r,c.x,c.z);l=Math.min(l,u),h=Math.max(h,u)}h-l>A1||t.set(r,{dirs:o,stubLen:a})}const e=new Map;for(const[r,{stubLen:o}]of t)e.set(r,o);for(let r=0;r<10;r++){let o=!1;for(const a of Ge){if(a.kind==="bridge")continue;const c=e.get(a.a),l=e.get(a.b);if(c===void 0||l===void 0)continue;const h=Oe(pe(a.a)),d=Oe(pe(a.b)),u=Math.hypot(d.x-h.x,d.z-h.z)||1,f=Math.max(u-1,u*.5);if(c+l>f){const g=f/(c+l);e.set(a.a,c*g),e.set(a.b,l*g),o=!0}}if(!o)break}bn=[];for(const[r,{dirs:o}]of t){const a=e.get(r),c=b=>a,l=Oe(pe(r)),h=72,d=[];for(let b=0;b<h;b++)d.push(b/h*Math.PI*2);for(const b of o){const x=Math.atan2(b.dz,b.dx),w=Math.atan2(b.hw,c(b.e)),A=C=>(C%(Math.PI*2)+Math.PI*2)%(Math.PI*2);d.push(A(x),A(x+w),A(x-w))}d.sort((b,x)=>b-x);const u=[];for(const b of d)(u.length===0||Math.abs(b-u[u.length-1])>1e-9)&&u.push(b);const f=new Float64Array(u.length),g=new Int32Array(u.length);for(let b=0;b<u.length;b++){const x=u[b],w=Math.cos(x),A=Math.sin(x);let C=0,L=-1,N=1/0;for(let F=0;F<o.length;F++){const P=o[F],z=c(P.e),U=w*P.dx+A*P.dz,B=Math.abs(w*-P.dz+A*P.dx);let W;U>1e-6?W=Math.min(P.hw/Math.max(B,1e-6),z/U):W=Math.min(P.hw,z);const j=Math.acos(Math.max(-1,Math.min(1,U)));if(j<1e-7){C=W,L=F,N=j;break}(W>C+1e-9||Math.abs(W-C)<=1e-9&&j<N)&&(C=W,L=F,N=j)}f[b]=Math.max(C,.5),g[b]=L}const v=Math.max(...o.map(b=>Ga(b,r,l.x,l.z))),p=[];for(let b=0;b<u.length;b++){const x=u[b],w=l.x+Math.cos(x)*f[b],A=l.z+Math.sin(x)*f[b],C=g[b],L=(C>=0?Ga(o[C],r,w,A):v)+.02;p.push({x:w,z:A,h:L})}const m={x:l.x,z:l.z,h:v+.02},M=[];for(let b=0;b<u.length;b++)M.push([m,p[b],p[(b+1)%u.length]]);let y=-1/0;for(const b of p)y=Math.max(y,b.h);y=Math.max(y,m.h);const _=b=>(b%(Math.PI*2)+Math.PI*2)%(Math.PI*2),T=(b,x)=>{const w=_(Math.atan2(x,b));for(let A=0;A<u.length;A++)if(Math.abs(u[A]-w)<1e-9)return f[A];return a},E=o.map(b=>{const x=T(b.dx,b.dz),w=_(Math.atan2(b.dz,b.dx));let A=v+.02;for(let C=0;C<u.length;C++)if(Math.abs(u[C]-w)<1e-9){A=p[C].h;break}return{edge:b.e,dx:b.dx,dz:b.dz,hw:b.hw,clip:x,stub:a,clipHeight:A}});bn.push({nodeId:r,ring:p,tris:M,legs:E,height:y})}const n=r=>{let o=1/0,a=-1/0;for(const c of r.ring)o=Math.min(o,c.h),a=Math.max(a,c.h);return[o,a]},s=(r,o)=>{const[a,c]=n(r),[l,h]=n(o);if(c<l-1||h<a-1)return!1;for(const d of o.ring)if(sl(r,d.x,d.z))return!0;for(const d of r.ring)if(sl(o,d.x,d.z))return!0;return!1};for(let r=0;r<10;r++){let o=!1;for(let a=0;a<bn.length&&!o;a++)for(let c=a+1;c<bn.length&&!o;c++){const l=bn[a],h=bn[c];if(!s(l,h))continue;const d=l.ring.map(P=>[P.x,P.z]),u=h.ring.map(P=>[P.x,P.z]),f=y1(d,u),g=[...l.ring,...h.ring],v=(P,z)=>{let U=g[0],B=1/0;for(const W of g){const j=(W.x-P)*(W.x-P)+(W.z-z)*(W.z-z);j<B&&(B=j,U=W)}return U.h},p=f.map(([P,z])=>({x:P,z,h:v(P,z)})),m=Math.max(...p.map(P=>P.h)),M=P=>{let z=0,U=0;for(const B of P)z+=B.x,U+=B.z;return[z/P.length,U/P.length]},[y,_]=M(l.ring),[T,E]=M(h.ring),b=(y+T)/2,x=(_+E)/2,w={x:b,z:x,h:v(b,x)},A=[];for(let P=0;P<p.length;P++)A.push([w,p[P],p[(P+1)%p.length]]);const C=new Set,L=[],N=[...l.mergedIds??[l.nodeId],...h.mergedIds??[h.nodeId]];for(const P of[...l.legs,...h.legs]){if(C.has(P.edge))continue;C.add(P.edge);const z=N.find(X=>P.edge.a===X||P.edge.b===X)??N[0],U=Oe(pe(z)),B=b1(U.x,U.z,P.dx,P.dz,f),W=B>0?B:P.clip,j=Ol(p,A,U.x+P.dx*W,U.z+P.dz*W);L.push({...P,clip:W,clipHeight:j})}const F={nodeId:`${l.nodeId}+${h.nodeId}`,ring:p,tris:A,legs:L,height:m,mergedIds:N};bn[a]=F,bn.splice(c,1),o=!0}if(!o)break}_r=new Map;for(const r of bn){const o=r.mergedIds??[r.nodeId];for(const a of r.legs){let c=_r.get(a.edge);c||(c={a:null,b:null},_r.set(a.edge,c));const l={dist:a.clip,height:a.clipHeight};o.includes(a.edge.a)?c.a=l:o.includes(a.edge.b)?c.b=l:a.edge.a===r.nodeId?c.a=l:c.b=l}}return bn}let _r=null;function qo(i){return _r||kl(),_r.get(i)??{a:null,b:null}}function Yu(i,t,e){const n=$i(i),s=Oe(pe(t==="a"?i.a:i.b));let r=0,o=1;for(let c=0;c<40;c++){const l=(r+o)/2,h=n.getPointAt(t==="a"?l:1-l);Math.hypot(h.x-s.x,h.z-s.z)<e?r=l:o=l}const a=(r+o)/2;return t==="a"?a:1-a}const I1=3;function $u(i){const t=Math.max(0,Math.min(1,i));return t*t*(3-2*t)}const Zu=new Map;function L1(i){let t=Zu.get(i);return t===void 0&&(t=$i(i).getLength(),Zu.set(i,t)),t}function il(i,t){const e=zl(i,t),{a:n,b:s}=qo(i);if(!n&&!s)return e;const r=L1(i),o=t*r,a=r-(n?n.dist:0)-(s?s.dist:0),c=Math.max(1e-6,Math.min(I1,a/2));if(n&&o<n.dist+c){const l=$u((o-n.dist)/c);return n.height*(1-l)+e*l}if(s&&o>r-s.dist-c){const l=$u((r-s.dist-o)/c);return s.height*(1-l)+e*l}return e}const mo=1.5;function Va(i,t,e,n){const s=il(i,t);let r=1/0,o=0,a=null,c=!1;for(const d of kl()){if(!d.legs.some(f=>f.edge===i))continue;const u=U1(d,e,n);if(u>0){c=!0;const f=Ol(d.ring,d.tris,e,n);a=a===null?f:Math.max(a,f)}Math.abs(u)<Math.abs(r)&&(r=u,o=D1(d,e,n))}if(!c&&r<-mo)return s;if(c&&r>mo)return a;if(r===1/0)return s;const l=F1(-mo,mo,r);return s+((c?a:o)-s)*l}function D1(i,t,e){const n=i.ring;let s=1/0,r=n[0].h;for(let o=0,a=n.length-1;o<n.length;a=o++){const c=n[a].x,l=n[a].z,h=n[o].x,d=n[o].z,u=h-c,f=d-l,g=u*u+f*f||1,v=Math.max(0,Math.min(1,((t-c)*u+(e-l)*f)/g)),p=c+u*v,m=l+f*v,M=(t-p)*(t-p)+(e-m)*(e-m);M<s&&(s=M,r=n[a].h+(n[o].h-n[a].h)*v)}return r}function Wa(i,t,e){const n=t[0]-i[0],s=t[1]-i[1],r=Math.hypot(n,s)||1,o=-s/r*e/2,a=n/r*e/2;return[[i[0]+o,i[1]+a],[i[0]-o,i[1]-a],[t[0]-o,t[1]-a],[t[0]+o,t[1]+a]]}function N1(i){const t=Oe(pe(i.nodeId)),e=[],n=[],s=(h,d,u,f)=>[t.x+h*u-d*f,t.z+d*u+h*f];for(const h of i.legs){const{dx:d,dz:u,hw:f,stub:g}=h,v=Math.min(lr,f-.3);if(v>.5){const y=Math.max(g-1.3,.5);e.push([s(d,u,y-.225,-v),s(d,u,y-.225,v),s(d,u,y+.225,v),s(d,u,y+.225,-v)])}const p=f>3?5:3,m=2*f-1,M=Math.max(g-3,1);for(let y=0;y<p;y++){const _=-m/2+m*(y+.5)/p;e.push([s(d,u,M-1,_-.28),s(d,u,M-1,_+.28),s(d,u,M+1,_+.28),s(d,u,M+1,_-.28)])}}const r=[...i.legs].sort((h,d)=>Math.atan2(h.dz,h.dx)-Math.atan2(d.dz,d.dx));for(let h=0;h<r.length;h++){const d=r[h],u=r[(h+1)%r.length];if(d.hw<As-.01||u.hw<As-.01)continue;const f=Math.atan2(d.dz,d.dx);let v=Math.atan2(u.dz,u.dx)-f;if(v<=0&&(v+=Math.PI*2),v>Math.PI)continue;const p=(hr+As)/2,m=-d.dz,M=d.dx,y=u.dz,_=-u.dx,T=[t.x+d.dx*(d.stub-.7)+m*p,t.z+d.dz*(d.stub-.7)+M*p],E=[t.x+u.dx*(u.stub-.7)+y*p,t.z+u.dz*(u.stub-.7)+_*p],b=1;if(v>Math.PI-Math.PI/12){n.push(Wa(T,E,b));continue}if(v<Math.PI/6)continue;const x=As,w=u.dx*d.dz-d.dx*u.dz;if(Math.abs(w)<1e-6)continue;const A=x*(-(y-m)*u.dz+u.dx*(_-M))/w,C=t.x+d.dx*A+m*x,L=t.z+d.dz*A+M*x,N=f+v/2,F=Math.hypot(C-t.x,L-t.z),P=Math.min(F-.4,.85*Math.min(d.stub,u.stub));if(P<1.2)continue;const z=[t.x+Math.cos(N)*P,t.z+Math.sin(N)*P];n.push(Wa(T,z,b),Wa(z,E,b))}let a=(h=>{const d=[];for(const u of h){let f=!1;for(const g of d)if(po(u,g)){f=!0;break}f||d.push(u)}return d})(e),c=!1;for(let h=0;h<a.length&&!c;h++)for(let d=h+1;d<a.length&&!c;d++)po(a[h],a[d])&&(c=!0);c&&(a=[]);const l=[];for(const h of n){let d=!1;for(const u of a)if(po(h,u)){d=!0;break}if(!d){for(const u of l)if(po(h,u)){d=!0;break}}d||l.push(h)}return{white:a,walk:[]}}function sl(i,t,e){const n=i.ring;let s=!1;for(let r=0,o=n.length-1;r<n.length;o=r++){const a=n[r].x,c=n[r].z,l=n[o].x,h=n[o].z;c>e!=h>e&&t<(l-a)*(e-c)/(h-c)+a&&(s=!s)}return s}function U1(i,t,e){const n=i.ring;let s=1/0;for(let o=0,a=n.length-1;o<n.length;a=o++){const c=n[a].x,l=n[a].z,h=n[o].x,d=n[o].z,u=h-c,f=d-l,g=u*u+f*f||1,v=Math.max(0,Math.min(1,((t-c)*u+(e-l)*f)/g)),p=c+u*v,m=l+f*v,M=t-p,y=e-m,_=M*M+y*y;_<s&&(s=_)}const r=Math.sqrt(s);return sl(i,t,e)?r:-r}function F1(i,t,e){const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)}const z1=12596780,Xa=7,Ku=1,nr=3.2,Ju=12;function O1(){return new On({color:z1})}function k1(i){var b,x;const t=Ge.find(w=>w.kind==="bridge");if(!t)return;const e=Oe(pe(t.a)),n=Oe(pe(t.b)),s=zl(t,.5)-.1,r=new D(n.x-e.x,0,n.z-e.z),o=r.length();if(o<1)return;r.normalize();const a=new D(-r.z,0,r.x),c=(w,A,C)=>new D(e.x+(n.x-e.x)*w+a.x*A,C,e.z+(n.z-e.z)*w+a.z*A),l=w=>w==="x"?Math.atan2(-r.z,r.x):Math.atan2(a.x,a.z),h=O1(),d=new On({color:16767370}),u=qo(t),f=((b=u.a)==null?void 0:b.dist)??0,g=((x=u.b)==null?void 0:x.dist)??0,v=Math.max(o-f-g,1),p=e.x+r.x*(f+v/2),m=e.z+r.z*(f+v/2),M=new J(new Jt(v,Ku,Xa),h);M.position.set(p,s-Ku/2,m),M.rotation.y=l("x"),i.add(M);const y=new On({color:3815994}),_=new J(new Jt(v,.1,Xa-1),y);_.position.set(p,s+.05,m),_.rotation.y=l("x"),i.add(_);for(const w of[1/3,2/3]){for(const A of[-nr,nr]){const C=new J(new Jt(1.5,20,1.5),h),L=c(w,A,s+2);C.position.copy(L),C.rotation.y=l("x"),i.add(C)}for(const A of[s+4,s+10]){const C=new J(new Jt(1,1,nr*2+1.5),h);C.position.copy(c(w,0,A)),C.rotation.y=l("z"),i.add(C)}}const T=[];for(const w of[-nr,nr]){const A=new Qo([c(0,w,s+.2),c(.15,w,s+5),c(.3333333333333333,w,s+Ju),c(.5,w,s+2.5),c(.6666666666666666,w,s+Ju),c(.85,w,s+5),c(1,w,s+.2)]);T.push(A),i.add(new J(new jo(A,64,.25,8,!1),h))}for(const w of T){const A=w.getPoints(400);for(let C=f+3;C<o-g-3;C+=6){const L=C/o,N=e.x+(n.x-e.x)*L;let F=A[0],P=1/0;for(const B of A){const W=Math.abs(B.x-N);W<P&&(P=W,F=B)}const z=F.y-s;if(z<.5)continue;const U=new J(new fe(.08,.08,z,6),h);U.position.set(N,s+z/2,F.z),i.add(U)}}let E=1;for(let w=f+6;w<o-g-3;w+=12){const A=w/o,C=c(A,E*(Xa/2-.7),s),L=new J(new fe(.12,.16,4.2,8),h);L.position.set(C.x,s+2.1,C.z),i.add(L);const N=new J(new ue(.32,10,8),d);N.position.set(C.x,s+4.2,C.z),i.add(N),E*=-1}}const[Bl,Of,Hl,kf]=me,rl=(Bl+Hl)/2,Rr=(Of+kf)/2,qa=(()=>{const i=[];let t=0;for(const e of[Rr-10,Rr+10])for(let n=Bl+2.5;n<=Hl-2.5;n+=5){const s=.9+t*37%10/50;i.push({x:n,z:e,s}),t++}return i})(),B1=[{x0:Bl,z0:Rr-1.5,x1:Hl,z1:Rr+1.5},{x0:rl-1.5,z0:Of,x1:rl+1.5,z1:kf}],H1={x:rl,z:Rr,w:14,d:9,h:5},G1=1e6,Pi=3.4;function Bf(){return{winLit:[],winUnlit:[],sills:[],doors:[],flowerBoxes:[],petals:[],leaves:[],awnings:[[],[],[]],bays:[]}}function V1(i,t){i.winLit.push(...t.winLit),i.winUnlit.push(...t.winUnlit),i.sills.push(...t.sills),i.doors.push(...t.doors),i.flowerBoxes.push(...t.flowerBoxes),i.petals.push(...t.petals),i.leaves.push(...t.leaves),t.awnings.forEach((e,n)=>i.awnings[n].push(...e)),i.bays.push(...t.bays)}const W1={north:0,south:1,east:2,west:3};function X1(i){const{sx:t,sy:e,sz:n,minY:s,cx:r,cz:o,district:a,seedBase:c,colorIdx:l,bayWindow:h}=i,d=Bf(),u=(_,T,E,b,x,w,A,C=0)=>({x:_,y:T,z:E,rotX:C,rotY:b,sx:x,sy:w,sz:A}),f=Math.min(4.2,e*.28),g=e-f,v=Math.max(1,Math.round(g/Pi)),p=Math.min(2.6,t*.18),m=Math.min(2.4,Pi*.55),M=Math.min(3,Pi*.82),y=_=>{const T=_==="north"||_==="south"?t:n,E=T>29?[-.27,.27]:[-.2,.2],b=_==="north"?Math.PI:_==="south"?0:_==="west"?-Math.PI/2:Math.PI/2,x=_==="north"||_==="south",w=_==="north"?-1:_==="south"?1:_==="west"?-1:1,A=(P,z,U)=>x?[r+P,z,o+w*(n*.5+U)]:[r+w*(t*.5+U),z,o+P],C=(P,z)=>{E.forEach((U,B)=>{const W=hn(c*1e3+W1[_]*100+P*10+B),j=p*(.88+W()*.24),X=m*(.88+W()*.24),et=s+g-X*.5-.35,Nt=Math.min(z,et),[It,Mt,Z]=A(T*U,Nt,.055);(W()<.35?d.winLit:d.winUnlit).push(u(It,Mt,Z,b,j,X,1));const[lt,st,pt]=A(T*U,Nt-X*.5-.08,.1);if(d.sills.push(u(lt,st,pt,x?0:Math.PI/2,j+.38,.18,.16)),W()<.3){const[Ct,dt,ee]=A(T*U,Nt-X*.5-.35,.28);d.flowerBoxes.push(u(Ct,dt,ee,x?0:Math.PI/2,j*.8,.35,.4));for(let Wt=0;Wt<3;Wt++){const[rt,ct,ot]=A(T*U+(Wt-1)*j*.22,Nt-X*.5-.12,.28);(Wt%2?d.petals:d.leaves).push(u(rt,ct,ot,0,.14,.14,.14))}}})},[L,N,F]=A(0,s+M*.5,.06);d.doors.push(u(L,N,F,b,Math.min(2.4,T*.13),M,1)),C(0,s+Pi*.58);for(let P=1;P<v;P++)C(P,s+Pi*P+Pi*.58)};if(y("north"),y("south"),y("east"),y("west"),a==="merchant-row"){const _=Math.min(t*.7,10),T=2.2;d.awnings[l%3].push(u(r,s+M+.55,o+n*.5+T*.5-.15,0,_,T,1,-Math.PI/2))}if(h){const _=Math.min(3.2,t*.4),T=Pi*.95,E=.8;d.bays.push(u(r,s+T*.5,o+n*.5+E*.5-.05,0,_,T,E))}return d}function ht(i){return new On({color:i,map:q1(),gradientMap:Y1()})}let Ii,ws;function q1(){if(Ii)return Ii;const i=document.createElement("canvas");i.width=i.height=dr;const t=i.getContext("2d");t.fillStyle="rgba(255,255,255,.9)",t.fillRect(0,0,dr,dr);for(const e of sm(em))t.fillStyle=`rgba(85,55,45,${e.alpha})`,t.fillRect(e.x,e.y,1,1);return Ii=new wi(i),Ii.colorSpace=$e,Ii.wrapS=Ii.wrapT=Mr,Ii}function Y1(){if(ws)return ws;const i=document.createElement("canvas");i.width=1,i.height=3;const t=i.getContext("2d");return t.fillStyle="#202020",t.fillRect(0,0,1,1),t.fillStyle="#9a9a9a",t.fillRect(0,1,1,1),t.fillStyle="#fff",t.fillRect(0,2,1,1),ws=new wi(i),ws.minFilter=ws.magFilter=Ve,ws}function $1(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new ge;let l=0;for(let h=0;h<i.length;++h){const d=i[h];let u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0;const d=[];for(let u=0;u<i.length;++u){const f=i[u].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+h);h+=i[u].attributes.position.count}c.setIndex(d)}for(const h in r){const d=Qu(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(const h in o){const d=o[h][0].length;if(d!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<d;++u){const f=[];for(let v=0;v<o[h].length;++v)f.push(o[h][v][u]);const g=Qu(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}}return c}function Qu(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){const h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new We(o,e,n);let c=0;for(let l=0;l<i.length;++l){const h=i[l];if(h.isInterleavedBufferAttribute){const d=c/e;for(let u=0,f=h.count;u<f;u++)for(let g=0;g<e;g++){const v=h.getComponent(u,g);a.setComponent(u+d,g,v)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}let Ya=null;function Z1(){if(Ya)return Ya;const i=[];for(const n of Te)i.push({name:n.name,x:n.position.x,z:n.position.z});for(const n of Co())i.push({name:"house",x:n.x+n.w/2,z:n.z+n.d/2});const t=new Set,e=[];for(const n of i){let s="",r=1/0;for(const o of dl){const a=o.x-n.x,c=o.z-n.z,l=a*a+c*c;l<r&&(r=l,s=o.id)}s&&r<3600&&!t.has(s)&&(t.add(s),e.push({...n,nodeId:s}))}return Ya=e,e}let $a={withBridge:null,noBridge:null};function K1(i=!1){const t=i?"withBridge":"noBridge";if($a[t])return $a[t];const e=new Map,n=(s,r,o)=>{e.has(s)||e.set(s,[]);const a=Oe(pe(s)),c=Oe(pe(r));e.get(s).push({to:r,edge:o,w:Math.hypot(a.x-c.x,a.z-c.z)})};for(const s of Ge)s.kind==="bridge"&&!i||(n(s.a,s.b,s),n(s.b,s.a,s));return $a[t]=e,e}function J1(i,t,e=!1){if(i===t)return[];const n=K1(e),s=new Map([[i,0]]),r=new Map,o=new Set;for(;;){let l=null,h=1/0;for(const[d,u]of s)!o.has(d)&&u<h&&(h=u,l=d);if(l===null)return null;if(l===t)break;o.add(l);for(const d of n.get(l)??[]){const u=h+d.w;u<(s.get(d.to)??1/0)&&(s.set(d.to,u),r.set(d.to,{edge:d.edge,from:l}))}}const a=[];let c=t;for(;c!==i;){const l=r.get(c);if(!l)return null;a.unshift(l.edge),c=l.from}return a}const ju=16,Q1=44;let Cs=null;function Hf(){if(Cs)return Cs;const i=new Ho(.07,.4,4,8);return i.translate(0,-.25,0),Cs={carBody:new Jt(1.9,.9,4.2),carCabin:new Jt(1.7,.65,2),wheel:new fe(.35,.35,.3,10),pedBody:new Ho(.22,.9,4,10),pedHead:new ue(.2,12,10),pedArm:i},Cs}let Rs=null;function Gf(){if(Rs)return Rs;const i=t=>ht(t);return Rs={glass:i(1714746),tire:i(2236962),carRed:i(13904426),carBlue:i(3829413),carGray:i(9145227),carBlack:i(2763306),carGreen:i(4881497),carBrown:i(9132587),carCream:i(15261904),carPink:i(16731558),carYellow:i(16767306),carPurple:i(10309119),carTeal:i(5111688),skin1:i(16762531),skin2:i(15245418),skin3:i(13007434),skin4:i(9067066),cloth1:i(3829413),cloth2:i(13904426),cloth3:i(4885355),cloth4:i(9132587),cloth5:i(8010362),cloth6:i(15261904),pants:i(2767434)},Rs}let go=null;function td(){if(go)return go;const i=t=>{const e=document.createElement("canvas");e.width=256,e.height=128;const n=e.getContext("2d");n.fillStyle="white",n.strokeStyle="#333",n.lineWidth=6;const s=24,r=10,o=10,a=236,c=80;n.beginPath(),typeof n.roundRect=="function"?n.roundRect(r,o,a,c,s):(n.moveTo(r+s,o),n.arcTo(r+a,o,r+a,o+c,s),n.arcTo(r+a,o+c,r,o+c,s),n.arcTo(r,o+c,r,o,s),n.arcTo(r,o,r+a,o,s),n.closePath()),n.fill(),n.stroke(),n.beginPath(),n.moveTo(110,88),n.lineTo(128,118),n.lineTo(146,88),n.closePath(),n.fill(),n.stroke(),n.fillStyle="#222",n.font="bold 44px sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText(t,128,52);const l=new wi(e);return l.colorSpace=$e,l};return go={"Hello!":i("Hello!"),"Hi!":i("Hi!"),"Ahhh!":i("Ahhh!")},go}function j1(i,t){const e=new re,n=hn(t),s=Hf(),r=Gf();let o,a=4.2,c=.9;switch(i){case"beetle":o=[r.carPink,r.carYellow,r.carPurple,r.carTeal][Math.floor(n()*4)],a=3.6,c=1;break;case"sports":o=r.carRed,a=4,c=.65;break;case"truck":o=[r.carGreen,r.carBrown,r.carBlue][Math.floor(n()*3)],a=4.8,c=1.1;break;case"van":o=[r.carCream,r.carBlue,r.carYellow][Math.floor(n()*3)],a=4.6,c=1.4;break;default:o=[r.carBlue,r.carGray,r.carBlack,r.carRed,r.carGreen][Math.floor(n()*5)]}const l=[],h=new Jt(1.9,c,a);h.translate(0,.55+c/2,0),l.push(h);const d=[[-.85,a*.32],[.85,a*.32],[-.85,-a*.32],[.85,-a*.32]];for(const[v,p]of d){const m=s.wheel.clone();m.rotateZ(Math.PI/2),m.translate(v,.35,p),l.push(m)}const u=$1(l);l.forEach(v=>v.dispose());const f=new J(u,o);f.castShadow=!0,e.add(f);const g=new J(s.carCabin,r.glass);if(g.position.set(0,.55+c+.3,i==="truck"?a*.25:0),g.scale.z=a/4.2,g.castShadow=!0,e.add(g),i==="beetle"){const v=new Pl(.3,12),p=new gn({color:16777215});for(const m of[1,-1]){const M=new J(v,p);M.position.set(m*.97,1.1,0),M.rotation.y=m*Math.PI/2,e.add(M)}}return e}function tb(i){const t=new re,e=hn(i),n=Hf(),s=Gf(),r=[s.skin1,s.skin2,s.skin3,s.skin4][Math.floor(e()*4)],o=[s.cloth1,s.cloth2,s.cloth3,s.cloth4,s.cloth5,s.cloth6][Math.floor(e()*6)],a=new J(n.pedBody,o);a.position.y=.85,a.castShadow=!0,t.add(a);const c=new J(n.pedHead,r);c.position.y=1.55,c.castShadow=!0,t.add(c);const l=new J(n.pedArm,o);l.position.set(.32,1.25,0),l.rotation.z=-.15,t.add(l);const h=new J(n.pedArm,o);return h.position.set(-.32,1.25,0),h.rotation.z=.15,t.add(h),{group:t,armR:l}}function Li(i,t){for(const e of on)if(i>e.min.x-1&&i<e.max.x+1&&t>e.min.z-1&&t<e.max.z+1)return!1;return!(ki.some(e=>i>e[0]&&i<e[2]&&t>e[1]&&t<e[3])||rn(i,t))}const In=class In{constructor(t,e=Math.floor(Math.random()*2147483647)){G(this,"cars",[]);G(this,"peds",[]);G(this,"graph",tm());G(this,"group",new re);G(this,"rng");G(this,"seed");G(this,"tmpP",new D);G(this,"tmpT",new D);G(this,"tmpV",new D);this.scene=t,this.seed=e,this.rng=hn(e),t.add(this.group),this.spawnCars(),this.spawnPeds()}orientToTangent(t,e){t.rotation.order="YXZ",t.rotation.y=Math.atan2(e.x,e.z),t.rotation.x=-Math.asin(Xe.clamp(e.y,-1,1))}makeCurve(t){return $i(t)}spawnCars(){const t=hn((this.seed^2654435769)>>>0),e=Ge.filter(o=>{if(o.kind==="bridge"||o.kind==="switchback")return!1;const a=pe(o.a),c=pe(o.b);return Math.abs(a.x)<120&&Math.abs(c.x)<120&&Math.abs(a.z)<120&&Math.abs(c.z)<120}),n=e.length>0?e:Ge.filter(o=>o.kind!=="bridge"),s=["beetle","sports"],r=["sedan","sedan","sedan","sedan","sedan","sedan","truck","truck","truck","van","van","van","sedan","sedan"];for(let o=s.length;o<ju;o++)s.push(r[(o-s.length)%r.length]);for(let o=s.length-1;o>0;o--){const a=Math.floor(t()*(o+1));[s[o],s[a]]=[s[a],s[o]]}for(let o=0;o<ju;o++){const a=n[Math.floor(t()*n.length)],c=this.makeCurve(a),l=s[o],h=j1(l,1e3+o);this.group.add(h);const d=l==="sports"?12:8+t()*4;this.cars.push({edge:a,t:t(),dir:t()<.5?1:-1,speed:d,baseSpeed:d,cruiseSpeed:d,variant:l,group:h,curve:c,edgeLen:c.getLength(),offX:0,offZ:0,turnSlowT:0,destNode:null,route:[],dwellT:0,dwellNode:null})}}spawnPeds(){const t=hn((this.seed^2246822507)>>>0),e=td(),n=Ge.filter(s=>{if(s.kind==="bridge"||s.kind==="switchback")return!1;const r=pe(s.a),o=pe(s.b);return Math.abs(r.x)<130&&Math.abs(o.x)<130&&Math.abs(r.z)<130&&Math.abs(o.z)<130});for(let s=0;s<Q1;s++){const r=s>=30;let o=null,a=0,c=0;if(r){let y=0;for(;y++<50&&(a=me[0]+t()*(me[2]-me[0]),c=me[1]+t()*(me[3]-me[1]),!Li(a,c)););y>=50&&(a=(me[0]+me[2])/2,c=(me[1]+me[3])/2)}else o=n[Math.floor(t()*n.length)];const{group:l,armR:h}=tb(2e3+s),d=o?this.makeCurve(o):new Qo([new D(a,0,c),new D(a+1,0,c)]);let u=0,f=1,g=0,v=0;if(!r&&o){u=t(),d.getPointAt(u,this.tmpP),d.getTangentAt(u,this.tmpT),f=t()<.5?1:-1;const y=_=>{const T=-this.tmpT.z*4*_,E=this.tmpT.x*4*_,b=this.tmpP.x+T,x=this.tmpP.z+E;return!rn(b,x)&&Li(b,x)};if(!y(f)){const _=f===1?-1:1;y(_)&&(f=_)}g=-this.tmpT.z*4*f,v=this.tmpT.x*4*f,a=this.tmpP.x+g,c=this.tmpP.z+v}const p=!r&&o?Va(o,u,a,c):Me(a,c);l.position.set(a,p,c),this.group.add(l);const m=new Bo(new ko({map:e["Hello!"],transparent:!0,opacity:0,depthTest:!1}));m.scale.set(1.5,.75,1),m.position.set(a,p+2.2,c),m.visible=!1,this.group.add(m);const M=1.2+t()*.6;this.peds.push({edge:o,t:u,dir:t()<.5?1:-1,side:f,offX:g,offZ:v,speed:M,baseSpeed:M,inPark:r,parkTarget:new D(a,0,c),pos:new D(a,p,c),vel:new D,group:l,armR:h,bubble:m,greetCd:0,startleCd:0,bubbleT:0,hopT:0,waveT:0,stuckT:0,lastPos:new D(a,p,c),curve:d,edgeLen:d.getLength(),destNode:null,route:[],dwellT:0,dwellNode:null}),r&&this.pickParkTarget(this.peds[this.peds.length-1],t)}}pickParkTarget(t,e){let n=0;for(;n++<30;){const s=me[0]+e()*(me[2]-me[0]),r=me[1]+e()*(me[3]-me[1]);if(Li(s,r)){t.parkTarget.set(s,0,r);return}}t.parkTarget.copy(t.pos)}update(t,e,n,s,r){for(const o of this.cars)this.updateCar(o,t);for(const o of this.peds)this.updatePed(o,t,e,n,s,r)}nextEdge(t,e,n=!1){const s=Ge.filter(o=>(n||o.kind!=="bridge")&&(o.a===e||o.b===e)&&!(o.a===t.a&&o.b===t.b)),r=s.length>0?s[Math.floor(this.rng()*s.length)]:t;return r.a===e?{edge:r,dir:1,t:0}:{edge:r,dir:-1,t:1}}assignTrip(t,e){const n=Z1(),s="variant"in t;for(let r=0;r<8;r++){const o=n[this.rng()*n.length|0];if(o.nodeId===e)continue;const a=J1(e,o.nodeId,s);if(a&&a.length>0){t.destNode=o.nodeId,t.route=a;return}}t.destNode=null,t.route=[]}mountEdge(t,e,n,s,r){t.edge=e,s!==void 0?(t.dir=s,t.t=r):e.a===n?(t.dir=1,t.t=0):(t.dir=-1,t.t=1),t.curve=this.makeCurve(e),t.edgeLen=t.curve.getLength(),t.turnSlowT!==void 0&&(t.turnSlowT=0)}arriveNode(t,e){if(t.route.length>0){const r=t.route[0];if(r.a===e||r.b===e)return t.route.shift(),this.mountEdge(t,r,e),"route";t.route=[],t.destNode=null}if(t.destNode!==null&&e===t.destNode)return t.dwellT=2+this.rng()*3,t.dwellNode=e,t.t=Xe.clamp(t.t,0,1),"dwell";const n="variant"in t;if(t.destNode===null&&this.assignTrip(t,e),t.route.length>0){const r=t.route.shift();return this.mountEdge(t,r,e),"route"}const s=this.nextEdge(t.edge,e,n);return this.mountEdge(t,s.edge,e,s.dir,s.t),"wander"}beginNextLeg(t){const e=t.dwellNode??(t.dir===1?t.edge.b:t.edge.a);if(t.dwellNode=null,this.assignTrip(t,e),t.route.length>0){const n=t.route.shift();this.mountEdge(t,n,e)}else{const n="variant"in t,s=this.nextEdge(t.edge,e,n);this.mountEdge(t,s.edge,e,s.dir,s.t)}}carFollowSpeed(t){let s=t.baseSpeed;for(const r of this.cars){if(r===t||r.dwellT>0||r.edge!==t.edge||r.dir!==t.dir)continue;const o=(r.t-t.t)*t.dir*t.edgeLen;if(!(o<=0||o>7)){if(o<3.5)return 0;s=Math.min(s,r.speed*(o/7))}}return s}carDistToNode(t,e){if(t.dir===1){if(t.edge.b===e)return(1-t.t)*t.edgeLen;if(t.edge.a===e)return t.t*t.edgeLen}else{if(t.edge.a===e)return t.t*t.edgeLen;if(t.edge.b===e)return(1-t.t)*t.edgeLen}return 1/0}carIntersectionSpeed(t){const e=In.YIELD_ZONE,n=In.YIELD_STOP,s=In.YIELD_SLOW,r=t.dir===1?t.edge.b:t.edge.a,o=(t.dir===1?1-t.t:t.t)*t.edgeLen;if(o>s)return t.baseSpeed;const a=this.cars.indexOf(t);for(const c of this.cars){if(c===t||c.dwellT>0)continue;const l=this.carDistToNode(c,r);if(l>e)continue;const h=c.dir===1&&c.edge.a===r||c.dir===-1&&c.edge.b===r;let d=!1;if(h||l<o-.5?d=!0:Math.abs(l-o)<=.5&&(d=this.cars.indexOf(c)<a),d)return o<=n?0:t.baseSpeed*Math.max(0,(o-n)/(s-n))}return t.baseSpeed}carPedYieldSpeed(t){const e=In.YIELD_ZONE,n=In.YIELD_STOP,s=In.YIELD_SLOW,r=(t.dir===1?1-t.t:t.t)*t.edgeLen;return(t.dir===1?t.t:1-t.t)*t.edgeLen<=e&&this.pedInCarPath(t,8)?0:r>s||!this.pedInCarPath(t,r+8)?t.baseSpeed:r<=n?0:t.baseSpeed*Math.max(0,(r-n)/(s-n))}pedInCarPath(t,e){const n=Xe.clamp(t.t,0,1);t.curve.getPointAt(n,this.tmpP),t.curve.getTangentAt(n,this.tmpT),t.dir===-1&&this.tmpT.negate();const s=this.tmpT.x,r=this.tmpT.z,o=this.tmpP.x+t.offX+s*2.4,a=this.tmpP.z+t.offZ+r*2.4,c=-r,l=s;for(const h of this.peds){if(h.inPark||h.dwellT>0)continue;const d=h.pos.x-o,u=h.pos.z-a,f=d*s+u*r;if(f<0||f>e)continue;const g=d*c+u*l,v=Math.abs(g);if(v<2)return!0;if(v<4.5){const p=-(h.vel.x*c+h.vel.z*l)*Math.sign(g);if(p>.1){const m=f/Math.max(t.speed,.5);if(v-p*m<2.2)return!0}}}return!1}pedInNodeZone(t,e){const n=pe(t),s=e*e;for(const r of this.peds){if(r.inPark||r.dwellT>0)continue;const o=r.pos.x-n.x,a=r.pos.z-n.z;if(o*o+a*a<=s)return!0}return!1}pedFollowSpeed(t){let s=t.baseSpeed;for(const r of this.peds){if(r===t||r.inPark||r.dwellT>0||r.edge!==t.edge||r.dir!==t.dir||r.side!==t.side)continue;const o=(r.t-t.t)*t.dir*t.edgeLen;if(!(o<=0||o>2.5)){if(o<1.2)return 0;s=Math.min(s,r.speed*(o/2.5))}}return s}updateCar(t,e){if(t.dwellT>0){t.dwellT-=e,t.dwellT<=0&&(this.beginNextLeg(t),t.baseSpeed=t.cruiseSpeed*(t.edge.kind==="switchback"?.6:1),t.speed=t.baseSpeed);return}t.speed=this.carFollowSpeed(t),t.speed=Math.min(t.speed,this.carIntersectionSpeed(t)),t.speed=Math.min(t.speed,this.carPedYieldSpeed(t)),t.turnSlowT>0&&(t.turnSlowT-=e,t.speed=Math.min(t.speed,t.baseSpeed*.5));const n=Xe.clamp(t.t,0,1);t.curve.getTangentAt(n,this.tmpT),t.dir===-1&&this.tmpT.negate();const s=-this.tmpT.z*1.4,r=this.tmpT.x*1.4,o=s-t.offX,a=r-t.offZ,c=Math.hypot(o,a),l=t.speed*e,h=Math.min(c,l);let d,u,f=0,g=0;if(h>1e-9){f=o/c,g=a/c;const T=(o*this.tmpT.x+a*this.tmpT.z)/c,E=Math.max(0,1-T*T);u=h,d=-u*T+Math.sqrt(Math.max(0,l*l-u*u*E)),d=Math.min(Math.max(0,d),l)}else u=0,d=l;const v=t.t;t.t+=t.dir*d/t.edgeLen;let p=!1;if(t.dir===1&&v<1&&t.t>=1||t.dir===-1&&v>0&&t.t<=0){const T=t.dir===1?t.edge.b:t.edge.a,E=Xe.clamp(t.t,0,1);t.curve.getTangentAt(E,this.tmpT),t.dir===-1&&this.tmpT.negate();const b=this.tmpT.x,x=this.tmpT.z;this.arriveNode(t,T);const w=Xe.clamp(t.t,0,1);t.curve.getTangentAt(w,this.tmpT),t.dir===-1&&this.tmpT.negate(),b*this.tmpT.x+x*this.tmpT.z<.819&&(t.turnSlowT=1.5),t.baseSpeed=t.cruiseSpeed*(t.edge.kind==="switchback"?.6:1),t.speed=t.baseSpeed,p=!0}const m=Xe.clamp(t.t,0,1);t.curve.getPointAt(m,this.tmpP),t.curve.getTangentAt(m,this.tmpT),t.dir===-1&&this.tmpT.negate(),!p&&u>0&&(t.offX+=f*u,t.offZ+=g*u);const M=this.tmpP.x+t.offX,y=this.tmpP.z+t.offZ,_=Va(t.edge,m,M,y);t.group.position.set(M,_,y),this.orientToTangent(t.group,this.tmpT)}updatePed(t,e,n,s,r,o){t.inPark?this.updateParkPed(t,e):this.updateSidewalkPed(t,e);const a=n.x-t.pos.x,c=n.z-t.pos.z,l=Math.hypot(a,c),h=n.y-t.pos.y,d=td();if(l<6&&h<10&&h>-2&&(s>15||r<-8)?o>t.startleCd&&(t.startleCd=o+12,t.bubble.material.map=d["Ahhh!"],t.bubble.material.needsUpdate=!0,t.bubbleT=2,t.bubble.visible=!0,t.hopT=.4,t.waveT=0):l<12&&h>0&&h<8&&s<10&&o>t.greetCd&&(t.greetCd=o+8,t.bubble.material.map=d["Hello!"],t.bubble.material.needsUpdate=!0,t.bubbleT=2,t.bubble.visible=!0,t.waveT=2),t.bubbleT>0){t.bubbleT-=e;const u=t.bubble.material;u.opacity=Math.min(1,t.bubbleT/.3,(2-t.bubbleT)/.3),t.bubble.position.set(t.pos.x,t.pos.y+2.2,t.pos.z),t.bubbleT<=0&&(t.bubble.visible=!1)}if(t.hopT>0){t.hopT-=e;const u=1-t.hopT/.4;t.group.position.y=t.pos.y+Math.sin(u*Math.PI)*.3}t.waveT>0?(t.waveT-=e,t.armR.rotation.z=-2.2+Math.sin(o*12)*.3):t.armR.rotation.z=-.15}updateSidewalkPed(t,e){if(t.dwellT>0){t.dwellT-=e,t.dwellT<=0&&this.beginNextLeg(t);return}t.speed=this.pedFollowSpeed(t);const n=Xe.clamp(t.t,0,1);t.curve.getTangentAt(n,this.tmpT),t.dir===-1&&this.tmpT.negate();const s=-this.tmpT.z,r=this.tmpT.x,o=s*t.side*4,a=r*t.side*4,c=o-t.offX,l=a-t.offZ,h=Math.hypot(c,l),d=t.speed*e;let u=Math.min(h,d),f=0,g=0,v=0,p=0;if(u>1e-9){t.curve.getPointAt(n,this.tmpP);const A=c/h,C=l/h,L=this.tmpP.x+t.offX+A*u,N=this.tmpP.z+t.offZ+C*u;Li(L,N)?(f=A,g=C,v=this.tmpP.x,p=this.tmpP.z):u=0}let m,M;if(u>1e-9){const A=(c*this.tmpT.x+l*this.tmpT.z)/h,C=Math.max(0,1-A*A);M=u,m=-M*A+Math.sqrt(Math.max(0,d*d-M*M*C)),m=Math.min(Math.max(0,m),d)}else M=0,m=d;const y=t.t;t.t+=t.dir*m/t.edgeLen;let _=!1;if(t.dir===1&&y<1&&t.t>=1||t.dir===-1&&y>0&&t.t<=0){const A=t.dir===1?t.edge.b:t.edge.a,C=Xe.clamp(t.t,0,1);t.curve.getTangentAt(C,this.tmpT),t.dir===-1&&this.tmpT.negate();const L=this.tmpT.x,N=this.tmpT.z;this.arriveNode(t,A);const F=Xe.clamp(t.t,0,1);if(t.curve.getTangentAt(F,this.tmpT),t.dir===-1&&this.tmpT.negate(),L*this.tmpT.x+N*this.tmpT.z>.819&&this.rng()<.15){t.curve.getPointAt(F,this.tmpP);const z=t.side*-1,U=this.tmpP.x+-this.tmpT.z*z*4,B=this.tmpP.z+this.tmpT.x*z*4;Li(U,B)&&(t.side=z)}_=!0}if(!_&&M>0){const A=v+t.offX+f*M,C=p+t.offZ+g*M;Li(A,C)&&(t.offX+=f*M,t.offZ+=g*M)}const T=Xe.clamp(t.t,0,1);t.curve.getPointAt(T,this.tmpP),t.curve.getTangentAt(T,this.tmpT),t.dir===-1&&this.tmpT.negate();const E=this.tmpP.x+t.offX,b=this.tmpP.z+t.offZ,w=Va(t.edge,T,E,b)-t.pos.y;if(t.pos.set(E,t.pos.y+Xe.clamp(w,-4*e,4*e),b),t.group.position.copy(t.pos),this.orientToTangent(t.group,this.tmpT),t.group.position.y+=Math.abs(Math.sin(performance.now()*.008+E))*.05,t.pos.distanceToSquared(t.lastPos)<.01){if(t.stuckT+=e,t.stuckT>5){if(!Number.isFinite(t.t)||t.t<0||t.t>1){const A=Number.isFinite(t.t)?t.t<.5?t.edge.a:t.edge.b:t.dir===1?t.edge.b:t.edge.a;this.arriveNode(t,A)}t.stuckT=0}}else t.stuckT=0;e>0&&(t.vel.copy(t.pos).sub(t.lastPos).divideScalar(e),t.vel.lengthSq()>9&&t.vel.set(0,0,0)),t.lastPos.copy(t.pos)}updateParkPed(t,e){if(this.tmpV.subVectors(t.parkTarget,t.pos),this.tmpV.y=0,this.tmpV.length()<1)this.pickParkTarget(t,this.rng);else{this.tmpV.normalize();const s=t.pos.x+this.tmpV.x*t.speed*e,r=t.pos.z+this.tmpV.z*t.speed*e;Li(s,r)?t.pos.set(s,Me(s,r),r):this.pickParkTarget(t,this.rng),t.group.position.copy(t.pos),t.group.rotation.y=Math.atan2(this.tmpV.x,this.tmpV.z),t.group.position.y+=Math.abs(Math.sin(performance.now()*.008+s))*.05}}dispose(){this.group.traverse(t=>{if(t instanceof J){const e=t.geometry;Cs&&!Object.values(Cs).includes(e)&&e.dispose();const n=t.material;Rs&&!Object.values(Rs).includes(n)&&n.dispose()}else t instanceof Bo&&t.material.dispose()}),this.scene.remove(this.group),this.cars=[],this.peds=[]}};G(In,"YIELD_ZONE",9),G(In,"YIELD_STOP",7),G(In,"YIELD_SLOW",16);let ol=In;const eb=i=>-i,Ds={x:13,y:12,z:18},Yo=2,ed=(i,t)=>Math.max(-t,Math.min(t,i));function nb(i,t){const e=ed(i,Qa),n=ed(t,ja);return{look:[e,Yo,n],cam:[e+Ds.x,Yo+Ds.y,n+Ds.z]}}function ib(i,t,e,n){if(e)return t;if(n<=0)return i;const s=1-Math.exp(-n*5);return[i[0]+(t[0]-i[0])*s,i[1]+(t[1]-i[1])*s]}function sb(i,t,e){if(e<=0)return i;const n=Math.atan2(Math.sin(t-i),Math.cos(t-i)),s=n*(1-Math.exp(-e*1.25)),r=n-s;return i+s+Math.sign(r)*Math.max(0,Math.abs(r)-1.35)}const rb={cushion:{x:1.4,z:3.5}};class ob{constructor(){G(this,"group",new re);G(this,"target",null);G(this,"clock",0);G(this,"tail");const t=new On({color:16773071}),e=new On({color:13200951}),n=new On({color:2893616}),s=(l,h,d,u)=>(l.position.set(h,d,u),this.group.add(l),l),r=(l,h)=>{const d=new J(new ue(l,12,9),h);return d.castShadow=!0,d};s(r(.43,t),0,.48,0),s(r(.34,t),0,.76,.28);for(const l of[-.2,.2])s(new J(new je(.16,.36,4),e),l,1.12,.26),s(new J(new ue(.045,8,6),n),l*.72,.8,.59);const o=new J(new Jt(.18,.42,.08),e);o.rotation.z=Math.PI/2,s(o,0,.86,.58);const a=new re;this.tail=a,s(a,0,.51,-.38);const c=new J(new Ln(.34,.07,6,12,Math.PI*1.4),e);c.rotation.x=Math.PI/2,c.position.set(0,.36,-.22),a.add(c),this.group.name="Pumpkin"}setTarget(t){this.target=t}update(t,e,n=2.5){e!==void 0&&(this.target=e);const s=Math.max(0,t||0);this.clock+=s;const r=this.target;if(r){const o=r.x-this.group.position.x,a=r.z-this.group.position.z,c=Math.hypot(o,a);if(c>.02){const l=Math.min(c,2*s);this.group.position.x+=o/c*l,this.group.position.z+=a/c*l,this.group.rotation.y=Math.atan2(o,a)}}else this.group.position.y=Math.sin(this.clock*2)*.018;this.tail.rotation.z=Math.sin(this.clock*n)*.3}}function ab(){return new ob}const nd={x:-7,z:4.6},cb=2;function lb(i,t){const e=Math.hypot(i-nd.x,t-nd.z);return Math.max(0,1-e/cb)}function id(i,t,e){return Math.sin(i*3+t)*e}const sd={x:0,z:-.2},hb=2.1;function ub(i,t){return Math.hypot(i-sd.x,t-sd.z)<hb}function db(i){return i?.95:1}function fb(i){return Math.min(10,Math.max(0,Math.floor(i)))}function pb(i){return 1+Math.sin(i*13)*.05+Math.sin(i*7)*.03}function mb(i){return i<.15?0:Math.min(1,(i-.15)*2.5)}function gb(i){return i<0?0:i<1.2?1:Math.max(0,1-(i-1.2)/.8)}const Ae=i=>new On({color:i}),Oi=Ae(9262134),an=Ae(5189671),rd=Ae(16773071),od=Ae(16112046),xb=Ae(1670008),vb=Ae(13200951),_b=Ae(14657867),yb=Ae(4948573);function Fe(i,t,e,n=Oi){const s=new J(new Jt(i,t,e),n);return s.castShadow=s.receiveShadow=!0,s}function Sn(i,t,e=Oi,n=10){const s=new J(new fe(i,i,t,n),e);return s.castShadow=s.receiveShadow=!0,s}function jt(i,t,e,n,s){return t.position.set(e,n,s),i.add(t),t}class Mb{constructor(){G(this,"group",new re);G(this,"meg",new re);G(this,"pumpkin");G(this,"clock",0);G(this,"disposed",!1);G(this,"furniture",new Map);G(this,"facing",0);G(this,"lastHome",!1);G(this,"leaves",[]);G(this,"lampLight");G(this,"moths",[]);G(this,"mothMat");G(this,"lastParcelCount",-1);G(this,"heart");G(this,"heartAge",1/0);G(this,"lastPetCount",0);this.pumpkin=ab(),this.group.name="Meg attic room",this.makeRoom(),this.makeBasics(),this.makeStations(),this.makeMeg(),this.makePumpkin(),this.makeFurniture(),this.group.visible=!1}update(t,e,n=0){if(this.disposed)return;const s=t,r=s.mode==="home";if(this.group.visible=r,!r){this.lastHome=!1;return}const o=Math.min(.05,Math.max(0,e||.016));this.clock+=o;const a=s.homePosition||{x:0,z:0},c=new D(Xe.clamp(a.x,-7.5,7.5),0,Xe.clamp(a.z,-5.5,5.5));this.lastHome?this.meg.position.lerp(c,1-Math.exp(-o*14)):this.meg.position.copy(c),this.lastHome=!0;const l=s.homeFacing;typeof l=="number"?this.facing=l:c.distanceToSquared(this.meg.position)>.001&&(this.facing=Math.atan2(c.x-this.meg.position.x,c.z-this.meg.position.z)),this.meg.rotation.y=this.facing;const h=c.distanceTo(this.meg.position)>.035;this.meg.children.filter(p=>p.name==="limb").forEach((p,m)=>p.rotation.x=Math.sin(this.clock*11+m*Math.PI)*(h?.55:.08)),this.meg.position.y=h?Math.abs(Math.sin(this.clock*11))*.045:Math.sin(this.clock*2)*.018;const d=this.meg.position.clone().add(new D(-Math.sin(this.facing)*1.25,0,-Math.cos(this.facing)*1.25));d.x=Xe.clamp(d.x,-7.3,7.3),d.z=Xe.clamp(d.z,-5.3,5.3);const u=this.meg.position.distanceToSquared(new D(4,0,3))<2.7,g=!!s.homeSitting?rb.cushion:{x:d.x,z:d.z};this.pumpkin.update(o,g,u?5:2),this.pumpkin.group.lookAt(this.meg.position.x,0,this.meg.position.z),u?this.pumpkin.group.position.y=Math.sin(this.clock*6)*.075:this.pumpkin.group.position.y=0;const v=s.petCount??0;if(v>this.lastPetCount&&(this.lastPetCount=v,this.heartAge=0,this.ensureHeart()),this.heart){this.heartAge+=o;const p=gb(this.heartAge);this.heart.visible=p>0,this.heart.material.opacity=p,this.heart.position.set(this.pumpkin.group.position.x,1.6+Math.sin(this.clock*3)*.05,this.pumpkin.group.position.z)}this.furniture.forEach((p,m)=>p.visible=s.profile.furniture.includes(m)),this.updateLiveliness(s,o,n)}updateLiveliness(t,e,n){const s=this.meg.position.x,r=this.meg.position.z,o=lb(s,r);this.leaves.forEach((h,d)=>{h.rotation.z=id(this.clock,d*1.7,o)*.3,h.rotation.x=id(this.clock*.8,d*2.3+1,o)*.2});const a=this.furniture.get("rug");if(a){const h=db(ub(s,r));a.scale.y+=(h-a.scale.y)*(1-Math.exp(-e*8))}const c=fb(t.profile.deliveries);c!==this.lastParcelCount&&(this.lastParcelCount=c,this.refreshShelfParcels(c)),this.lampLight&&(this.lampLight.intensity=2*pb(this.clock));const l=mb(n);this.mothMat&&(this.mothMat.opacity=l),this.moths.forEach((h,d)=>{const u=this.clock*(1.2+d*.5)+d*Math.PI;h.position.set(Math.cos(u)*.55,2.1+Math.sin(this.clock*2+d)*.15,Math.sin(u)*.55),h.visible=l>.01})}refreshShelfParcels(t){const e=this.furniture.get("shelf");if(!e)return;const n=e.getObjectByName("parcels");if(n&&e.remove(n),t===0)return;const s=new re;s.name="parcels";const r=new Jt(.22,.16,.2),o=[13200951,1670008,16773071,9323307],a=[.6,1.35,2.1];for(let c=0;c<t;c++){const l=c%3,h=Math.floor(c/3),d=new J(r,new On({color:o[c%o.length]}));d.castShadow=!0,d.position.set(-.21+h*.14,a[l]+.13,c%2===0?-.45:.45),s.add(d)}e.add(s)}dispose(){if(this.disposed)return;this.disposed=!0;const t=new Set,e=new Set,n=new Set;this.group.traverse(s=>{const r=s;r.geometry&&t.add(r.geometry),(r.material?Array.isArray(r.material)?r.material:[r.material]:[]).forEach(a=>{e.add(a),Object.values(a).forEach(c=>{c instanceof Ze&&n.add(c)})})}),t.forEach(s=>s.dispose()),e.forEach(s=>s.dispose()),n.forEach(s=>s.dispose()),this.group.clear()}makeRoom(){const t=Fe(18,.25,14,Oi);jt(this.group,t,0,-.13,0);for(let s=-6;s<=6;s+=1){const r=Fe(17.8,.012,.035,an);jt(this.group,r,0,.01,s+.5)}const e=Fe(18,8,.22,od);jt(this.group,e,0,4,-7);const n=Fe(.22,8,14,od);jt(this.group,n,4,4,0),n.position.x=-9;for(const[s,r,o,a]of[[-8.65,0,.34,14],[0,-6.65,18,.34],[0,-3.9,18,.25]])jt(this.group,Fe(o,.28,a,an),s,7.55,r);for(const s of[-8.4,-4.4,0,4.4,8.4]){const r=Fe(.32,7.6,.35,an);r.rotation.z=s/34,jt(this.group,r,s,3.8,-6.75)}this.makeWindow()}makeWindow(){const t=new re;jt(this.group,t,2.3,4.7,-6.78);const e=new J(new xn(3.2,2.45),new gn({color:16764813}));e.position.z=.02,t.add(e);for(const[s,r,o,a]of[[0,0,3.45,.17],[0,0,.16,2.6],[-1.65,0,.16,2.6],[1.65,0,.16,2.6],[0,1.22,3.45,.16]])jt(t,Fe(o,a,.12,an),s,r,.08);for(const s of[-2,2]){const r=new J(new fe(.45,.56,2.65,8),Ae(8559016));r.scale.z=.28,jt(t,r,s,0,.22)}const n=Fe(4.5,.18,.55,Oi);jt(t,n,0,-1.38,.32)}makeBasics(){const t=new re;jt(this.group,t,5.8,0,4.65),jt(t,Fe(4.2,.35,2.6,an),0,.55,0),jt(t,Fe(4,.32,2.35,Ae(10249076)),0,.9,0),jt(t,Fe(4.25,2.25,.22,an),0,1.5,1.16),jt(t,Fe(1.55,.26,.8,rd),-.9,1.2,-.55),[[-1.8,-1],[1.8,-1],[-1.8,1],[1.8,1]].forEach(([s,r])=>jt(t,Sn(.12,.65,an),s,.25,r));const e=new re;jt(this.group,e,-5,0,-3),jt(e,Fe(3.3,.22,1.55,Oi),0,1.75,0),[-1.35,1.35].forEach(s=>[-.58,.58].forEach(r=>jt(e,Sn(.11,1.7,an),s,.85,r))),jt(e,Fe(.9,.72,1.15,an),-1.05,1.25,0),jt(e,Fe(.62,.12,.88,Ae(15982509)),.55,1.93,.03);const n=new re;jt(this.group,n,-4.2,0,-1.45),jt(n,Sn(.48,.16,Ae(7314849)),0,1,0),jt(n,Sn(.13,1,an),0,.5,0)}makeStations(){const t=new re;jt(this.group,t,5,0,-3),jt(t,Fe(2.2,.16,.46,an),0,2.55,0),[-.75,0,.75].forEach(s=>{const r=Sn(.06,2.35,Oi);r.rotation.z=-.16+s*.1,jt(t,r,s,1.25,0),jt(t,new J(new je(.29,.52,7),vb),s-.14,.28,0)});const e=new re;jt(this.group,e,-5,0,3),jt(e,Sn(.48,1.15,an),0,.58,0),jt(e,Fe(1.25,.14,.9,Ae(6065798)),0,1.2,0),e.rotation.y=-.25;const n=new J(new fe(1.15,1.3,.16,16),Ae(14262655));jt(this.group,n,4,.08,3),yd.forEach(s=>this.group.add(this.label(s.id==="jobs"?"Job Board":s.id==="brooms"?"Broom Workshop":s.id==="decor"?"Decor Corner":"Pumpkin",s.x,3.3,s.z)))}makeMeg(){const t=this.meg;t.name="Meg",this.group.add(t),jt(t,new J(new ue(.34,12,10),Ae(16761758)),0,1.52,0);const e=new J(new ue(.38,12,10,0,Math.PI*2,0,Math.PI*.55),Ae(9323307));jt(t,e,0,1.7,.01);const n=new re;jt(t,n,0,1.94,0),jt(n,new J(new fe(.48,.48,.12,12),Ae(4534349)),0,0,0);const s=new J(new je(.3,.82,12),Ae(4534349));s.rotation.z=-.18,jt(n,s,.06,.39,0),jt(t,new J(new je(.48,1.05,12),xb),0,.84,0);for(const[r,o]of[[-.22,.08],[.22,.08]]){const a=Sn(.09,.55,an);a.name="limb",jt(t,a,r,.3,o);const c=Sn(.075,.58,Ae(16761758));c.name="limb",c.rotation.z=r*1.8,jt(t,c,r*1.5,1.06,0)}}makePumpkin(){this.group.add(this.pumpkin.group)}ensureHeart(){if(this.heart||typeof document>"u")return;const t=document.createElement("canvas");t.width=64,t.height=64;const e=t.getContext("2d");e.font="48px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("♥",32,36);const n=new Bo(new ko({map:new wi(t),transparent:!0,color:16739210,depthWrite:!1}));n.scale.set(.5,.5,1),n.visible=!1,this.group.add(n),this.heart=n}makeFurniture(){const t=(e,n,s,r)=>{const o=r();o.position.set(n,0,s),o.visible=!1,this.group.add(o),this.furniture.set(e,o)};t("rug",0,-.2,()=>{const e=new J(new fe(2.1,2.1,.05,20),Ae(7508365));return e.position.y=.035,e}),t("plant",-7,4.6,()=>{const e=new re;jt(e,Sn(.38,.7,Ae(13273941)),0,.35,0);for(let n=0;n<6;n++){const s=new J(new ue(.35,8,6),yb);s.name="leaf",this.leaves.push(s),jt(e,s,Math.sin(n)*.28,1+Math.abs(Math.cos(n))*.25,Math.cos(n)*.28)}return e}),t("shelf",-7.7,-2.2,()=>{const e=new re;jt(e,Fe(.55,3.1,2.2,an),0,1.55,0);for(let n=.6;n<3;n+=.75)jt(e,Fe(.7,.1,2.1,Oi),0,n,0);return e}),t("lamp",1.8,-4.8,()=>{const e=new re;jt(e,Sn(.1,2.2,_b),0,1.1,0);const n=new J(new je(.52,.48,12,1,!0),rd);jt(e,n,0,2.1,0),this.lampLight=new Af(16763256,2,9),this.lampLight.position.set(0,2,0),e.add(this.lampLight),this.mothMat=new gn({color:16774095,transparent:!0,opacity:0});for(let s=0;s<2;s++){const r=new J(new ue(.035,6,5),this.mothMat);r.visible=!1,e.add(r),this.moths.push(r)}return e}),t("cushion",1.4,3.5,()=>{const e=new J(new ue(.6,12,7),Ae(13858182));return e.scale.y=.32,e.position.y=.18,e}),t("cat-tree",7,2.5,()=>{const e=new re;return jt(e,Sn(.17,2.5,Ae(13610617)),0,1.25,0),jt(e,Sn(.72,.16,Ae(13605991)),0,2.45,0),e})}label(t,e,n,s){const r=document.createElement("canvas");r.width=256,r.height=92;const o=r.getContext("2d");o.fillStyle="#3f2b35",o.roundRect(4,4,248,84,18),o.fill(),o.strokeStyle="#f7d688",o.lineWidth=5,o.roundRect(4,4,248,84,18),o.stroke(),o.fillStyle="#fff3cf",o.font="bold 36px sans-serif",o.textAlign="center",o.textBaseline="middle",o.fillText(t,128,48);const a=new Bo(new ko({map:new wi(r),transparent:!0}));return a.position.set(e,n,s),a.scale.set(1.7,.62,1),a}}function bb(i,t){const e=i.mode==="flight"||i.mode==="tutorial",n=Math.hypot(i.player.velocity.x,i.player.velocity.y,i.player.velocity.z),s=e&&!i.paused;return{bob:s&&i.player.hover&&n<.3?Math.sin(t*1.5)*.035:0,speed:s?Math.min(1,Math.max(0,(n-5)/16.6)):0}}class Sb{constructor(t){G(this,"element",document.createElement("div"));this.element.className="flight-effects",this.element.setAttribute("aria-hidden","true");for(let e=0;e<14;e++){const n=document.createElement("i"),s=e*Math.PI*2/14;n.style.left=`${50+Math.cos(s)*43}%`,n.style.top=`${50+Math.sin(s)*43}%`,n.style.setProperty("--angle",`${s}rad`),n.style.animationDelay=`${-e*.17}s`,this.element.append(n)}t.insertAdjacentElement("afterend",this.element)}update(t){this.element.hidden=t<=0,this.element.style.setProperty("--speed",t.toFixed(3))}dispose(){this.element.remove()}}const wb=360,ad=420,Eb=1140;function al(i){return Math.max(0,Math.min(1,i/wb))}function Tb(i){return ad+al(i)*(Eb-ad)}const xo=[{t:0,zenith:[.45,.62,.86],horizon:[1,.72,.55],sun:[1,.82,.62],sunElevation:.1,sunAzimuth:Math.PI/2,fog:[.98,.8,.68],hemiSky:[.85,.72,.8],hemiGround:[.78,.55,.5],tint:[1.05,.95,.88],sunIntensity:2,duskFactor:.25},{t:.25,zenith:[.36,.6,.9],horizon:[.78,.88,.95],sun:[1,.94,.82],sunElevation:.65,sunAzimuth:Math.PI/2+.6,fog:[.78,.86,.92],hemiSky:[.82,.9,1],hemiGround:[.72,.58,.52],tint:[1,1,1],sunIntensity:2.5,duskFactor:0},{t:.5,zenith:[.3,.56,.92],horizon:[.72,.85,.95],sun:[1,.98,.92],sunElevation:1.15,sunAzimuth:Math.PI,fog:[.72,.84,.92],hemiSky:[.85,.92,1],hemiGround:[.7,.58,.52],tint:[1,1,1],sunIntensity:2.6,duskFactor:0},{t:.75,zenith:[.36,.58,.88],horizon:[.85,.82,.78],sun:[1,.9,.72],sunElevation:.55,sunAzimuth:Math.PI+.7,fog:[.85,.8,.75],hemiSky:[.85,.82,.92],hemiGround:[.75,.58,.5],tint:[1.03,.98,.92],sunIntensity:2.4,duskFactor:0},{t:.92,zenith:[.42,.52,.78],horizon:[1,.62,.38],sun:[1,.7,.42],sunElevation:.16,sunAzimuth:Math.PI*1.5-.25,fog:[1,.72,.52],hemiSky:[.9,.68,.62],hemiGround:[.7,.5,.45],tint:[1.08,.92,.8],sunIntensity:2.1,duskFactor:.45},{t:1,zenith:[.22,.28,.52],horizon:[.95,.48,.35],sun:[1,.55,.32],sunElevation:.02,sunAzimuth:Math.PI*1.5,fog:[.85,.55,.45],hemiSky:[.55,.45,.62],hemiGround:[.45,.35,.38],tint:[1.05,.85,.75],sunIntensity:1.6,duskFactor:1}];function Gi(i,t,e){return i+(t-i)*e}function Di(i,t,e){return[Gi(i[0],t[0],e),Gi(i[1],t[1],e),Gi(i[2],t[2],e)]}function cl(i){const t=Math.max(0,Math.min(1,i));let e=0;for(;e<xo.length-2&&xo[e+1].t<t;)e++;const n=xo[e],s=xo[e+1],r=(t-n.t)/(s.t-n.t);return{t,zenith:Di(n.zenith,s.zenith,r),horizon:Di(n.horizon,s.horizon,r),sun:Di(n.sun,s.sun,r),sunElevation:Gi(n.sunElevation,s.sunElevation,r),sunAzimuth:Gi(n.sunAzimuth,s.sunAzimuth,r),fog:Di(n.fog,s.fog,r),hemiSky:Di(n.hemiSky,s.hemiSky,r),hemiGround:Di(n.hemiGround,s.hemiGround,r),tint:Di(n.tint,s.tint,r),sunIntensity:Gi(n.sunIntensity,s.sunIntensity,r),duskFactor:Gi(n.duskFactor,s.duskFactor,r)}}function Vf(i,t){return[Math.sin(t)*Math.cos(i),Math.sin(i),Math.cos(t)*Math.cos(i)]}function Ab(i){const t=i/60%12;return{minute:i%60/60*Math.PI*2,hour:t/12*Math.PI*2}}const Cb=`
  varying vec3 vDir;
  void main() {
    vDir = normalize(position);
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;
  }
`,Rb=`
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
`;function Za([i,t,e]){return new $t(i,t,e)}class Pb{constructor(t=900){G(this,"mesh");G(this,"mat");G(this,"clock",0);this.mat=new un({vertexShader:Cb,fragmentShader:Rb,uniforms:{uZenith:{value:new $t},uHorizon:{value:new $t},uSunColor:{value:new $t},uSunDir:{value:new D(0,1,0)},uDuskFactor:{value:0},uTime:{value:0}},side:en,depthWrite:!1,fog:!1}),this.mesh=new J(new ue(t,32,16),this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=-10}setElapsed(t,e){const n=Math.max(0,Math.min(1,t/360)),s=cl(n);this.clock+=e;const r=this.mat.uniforms;r.uZenith.value.copy(Za(s.zenith)),r.uHorizon.value.copy(Za(s.horizon)),r.uSunColor.value.copy(Za(s.sun));const[o,a,c]=Vf(s.sunElevation,s.sunAzimuth);r.uSunDir.value.set(o,a,c),r.uDuskFactor.value=s.duskFactor,r.uTime.value=this.clock}dispose(){this.mesh.geometry.dispose(),this.mat.dispose()}}const cd=new D,ld=new $t,hd=new $t,Ib=[15907014,11063528,15915176,13154528];function ud(i){const t=new J(new Jt(i.max.x-i.min.x,i.max.y-i.min.y,i.max.z-i.min.z));return t.position.set((i.min.x+i.max.x)/2,(i.min.y+i.max.y)/2,(i.min.z+i.max.z)/2),t}class Lb{constructor(t){G(this,"scene",new rg);G(this,"camera",new vn(62,1,.5,600));G(this,"renderer");G(this,"effects");G(this,"hero",new re);G(this,"dropParcel",new re);G(this,"glowColumn",new re);G(this,"glowMats",[]);G(this,"lastGlowStopId");G(this,"targetRing",new re);G(this,"clouds",new re);G(this,"birds",new re);G(this,"boats",[]);G(this,"clock",0);G(this,"camPos",new D(0,27,145));G(this,"camLook",new D(0,18,90));G(this,"homeLook",new D(0,Yo,0));G(this,"ray",new cx);G(this,"blockers",[]);G(this,"outlines",[]);G(this,"life",null);G(this,"beamGroup",null);G(this,"beamLight",null);G(this,"lighthouseLit",!0);G(this,"sun");G(this,"hemi");G(this,"skyDome",null);G(this,"clockHands",[]);G(this,"lampMat",null);G(this,"beamMat",null);G(this,"disposed",!1);G(this,"lastMode");G(this,"lastWidth",-1);G(this,"lastHeight",-1);G(this,"lastPixelRatio",-1);G(this,"followYaw",0);G(this,"world");G(this,"water",null);G(this,"groundMat",null);G(this,"room",new Mb);G(this,"outdoorFog",new zo(12180704,.0035));G(this,"birdFlock",[]);this.renderer=new s1({canvas:t,antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.effects=new Sb(t),this.renderer.outputColorSpace=$e,this.renderer.toneMapping=ml,this.renderer.toneMappingExposure=1.12,this.renderer.setClearColor(11459048),this.scene.fog=new zo(12180704,.0035),this.camera.position.copy(this.camPos);const e=new nx(14283263,13074296,2.35);this.hemi=e,this.scene.add(e),this.sun=new rx(16765344,2.5),this.sun.position.set(-80,115,48),this.scene.add(this.sun),this.skyDome=new Pb,this.scene.add(this.skyDome.mesh),this.world=this.makeWorld(),this.scene.add(this.world,this.hero,this.dropParcel,this.glowColumn,this.targetRing,this.clouds,this.birds,this.room.group),this.makeHero(),this.makeDropParcel(),this.makeGlowColumn(),this.makeSkyLife(),this.resize()}resize(){this.lastWidth=-1}setSeed(t){var e;(e=this.life)==null||e.dispose(),this.life=new ol(this.world,t)}render(t,e){var w,A,C;if(this.disposed)return;const n=t.paused?0:Math.min(.05,Math.max(0,e));this.clock+=n;const s=bb(t,this.clock);this.effects.update(s.speed);const r=this.renderer.domElement,o=Math.max(1,r.clientWidth||r.width),a=Math.max(1,r.clientHeight||r.height),l=Math.min(devicePixelRatio||1,Math.sqrt(2e6/(o*a)));(o!==this.lastWidth||a!==this.lastHeight||l!==this.lastPixelRatio)&&(this.renderer.setPixelRatio(l),this.renderer.setSize(o,a,!1),this.camera.aspect=o/a,this.camera.updateProjectionMatrix(),this.lastWidth=o,this.lastHeight=a,this.lastPixelRatio=l),this.renderer.shadowMap.enabled=!0,this.outlines.forEach(L=>{L.visible=!0});const h=t.mode==="home";if([this.world,this.hero,this.dropParcel,this.glowColumn,this.targetRing,this.clouds,this.birds].forEach(L=>L.visible=!h),this.room.update(t,n,h?cl(al(0)).duskFactor:0),h){this.scene.fog=null,this.renderer.setClearColor(14010030),this.camera.fov=t.homeSitting?53:48,this.camera.updateProjectionMatrix();const L=t.homePosition||{x:0,z:0},N=nb(L.x,L.z),F=ib([this.homeLook.x,this.homeLook.z],[N.look[0],N.look[2]],this.lastMode!=="home",n);this.homeLook.set(F[0],Yo,F[1]),this.camera.position.set(this.homeLook.x+Ds.x,this.homeLook.y+Ds.y,this.homeLook.z+Ds.z),this.camera.up.set(0,1,0),this.camera.lookAt(this.homeLook),this.lastMode=t.mode,this.renderer.render(this.scene,this.camera);return}this.camera.fov!==62&&(this.camera.fov=62,this.camera.updateProjectionMatrix()),this.scene.fog=this.outdoorFog,this.renderer.setClearColor(11459048);const d=t.player.position,u=new D(d.x,d.y,d.z),f=this.lastMode===void 0||this.lastMode!==t.mode;this.hero.position.copy(u),this.hero.rotation.order="YXZ",this.hero.rotation.y=eb(t.player.yaw),this.hero.rotation.x=t.player.pitch*.4,this.hero.rotation.z=0,this.hero.scale.setScalar(t.mode==="title"||t.mode==="summary"?.86:.28),this.hero.position.y+=s.bob,this.animateSky(n),!h&&n>0&&((w=this.life)==null||w.update(n,u,t.player.speed,t.player.velocity.y,this.clock)),this.updateBeacon(this.destination(t),t.paused?0:n),this.updateGlowColumn(t),this.updateDropParcel(t,t.paused?0:n),this.updateCamera(t,u,n,f),this.lastMode=t.mode;const g=t.run?t.run.elapsed:0,v=al(g),p=cl(v),m=Tb(g),M=Ab(m);for(const L of this.clockHands)L.hour.rotation.z=-M.hour,L.minute.rotation.z=-M.minute;this.skyDome&&this.skyDome.setElapsed(g,n);const[y,_,T]=Vf(p.sunElevation,p.sunAzimuth);this.sun.position.set(y*160,Math.max(8,_*160),T*160),this.sun.color.setRGB(...p.sun),this.water&&(cd.set(y,_,T).normalize(),ld.setRGB(p.sun[0],p.sun[1],p.sun[2]),hd.setRGB(p.horizon[0],p.horizon[1],p.horizon[2]),f1(this.water,this.clock,this.camera.position,{sunDir:cd,sunColor:ld,sunIntensity:p.sunIntensity,skyColor:hd}));const E=(C=(A=this.groundMat)==null?void 0:A.userData)==null?void 0:C.causticShader;E&&(E.uniforms.uCausticTime.value=this.clock,E.uniforms.uCausticSun.value=p.sunIntensity),this.sun.intensity=p.sunIntensity,this.hemi.color.setRGB(...p.hemiSky),this.hemi.groundColor.setRGB(...p.hemiGround);const b=this.scene.fog;b&&b.color.setRGB(...p.fog),this.renderer.setClearColor(new $t(...p.horizon));const x=p.duskFactor;this.lampMat&&(this.lampMat.emissive.setRGB(1*x,.75*x,.4*x),this.lampMat.emissiveIntensity=1.6*x),this.beamLight&&(this.beamLight.intensity=3+x*5),this.beamMat&&(this.beamMat.opacity=.28+x*.25),this.renderer.render(this.scene,this.camera)}dispose(){this.effects.dispose(),this.disposed=!0,this.scene.traverse(t=>{const e=t;e.geometry&&e.geometry.dispose();const n=e.material;(Array.isArray(n)?n:[n]).forEach(s=>s==null?void 0:s.dispose())}),this.renderer.dispose()}makeWorld(){const t=new re,e=d1();this.water=e;const n=g1();e.add(n),e.userData.sparkles=n,t.add(e);const s=new xn(440,440,200,200);s.rotateX(-Math.PI/2);const r=s.attributes.position;for(let x=0;x<r.count;x++)r.setY(x,Me(r.getX(x),r.getZ(x)));s.computeVertexNormals();const o=1024,a=document.createElement("canvas");a.width=o,a.height=o;const c=a.getContext("2d"),l=c.createImageData(o,o);l.data.set(Qp(o)),c.putImageData(l,0,0);const h=new wi(a);h.colorSpace=$e,h.anisotropy=4;const d=ht(16777215);d.map=h,x1(d),this.groundMat=d;const u=new J(s,d);t.add(u);const f=ht(16777215);f.vertexColors=!0,f.side=ze;const g=ht(9072461);g.side=ze;const v=new Map,p=x=>{const w=x.toFixed(1);let A=v.get(w);return A||(x>5?A=[[-As,12103840],[-hr,12103840],[-hr,11033418],[-lr,11033418],[-lr,4408138],[lr,4408138],[lr,11033418],[hr,11033418],[hr,12103840],[As,12103840]]:A=[[-x/2,4408138],[x/2,4408138]],v.set(w,A)),A},m=(x,w,A,C,L)=>{const N=new re,F=24,P=A/2,z=p(A),U=z.length,B=[],W=[],j=[],X=[],et=[],Nt=[],It=[],Mt=new $t;for(let Ct=0;Ct<=F;Ct++){const dt=C+Ct/F*(L-C),ee=w.getPointAt(dt),Wt=w.getTangentAt(dt),rt=-Wt.z,ct=Wt.x,ot=Math.hypot(rt,ct)||1,xt=rt/ot,vt=ct/ot,Gt=il(x,dt);for(const[Ut,I]of z)B.push(ee.x+xt*Ut,Gt,ee.z+vt*Ut),W.push(0,1,0),Mt.setHex(I),j.push(Mt.r,Mt.g,Mt.b);if(Ct<F)for(let Ut=0;Ut<U-1;Ut++){const I=Ct*U+Ut,S=I+U;X.push(I,S,I+1,I+1,S,S+1)}const zt=ee.x+xt*P,mt=ee.z+vt*P,Ot=ee.x-xt*P,O=ee.z-vt*P,he=[[zt,mt,xt,vt],[Ot,O,-xt,-vt]];for(const[Ut,I,S,V]of he){const q=Me(Ut,I),Q=q<Gt-.35?Math.max(q-.1,Gt-4):Gt;et.push(Ut,Gt,I,Ut,Q,I),Nt.push(S,0,V,S,0,V)}if(Ct<F){const Ut=Ct*4;It.push(Ut,Ut+4,Ut+1,Ut+1,Ut+4,Ut+5),It.push(Ut+2,Ut+3,Ut+6,Ut+3,Ut+7,Ut+6)}}const Z=new ge;Z.setAttribute("position",new Kt(B,3)),Z.setAttribute("normal",new Kt(W,3)),Z.setAttribute("color",new Kt(j,3)),Z.setIndex(X);const lt=new J(Z,f);lt.receiveShadow=!0,N.add(lt);const st=new ge;st.setAttribute("position",new Kt(et,3)),st.setAttribute("normal",new Kt(Nt,3)),st.setIndex(It);const pt=new J(st,g);return pt.receiveShadow=!0,N.add(pt),N},M=(x,w,A)=>{const C=new $t(4408138),L=[],N=[],F=[],P=[],z=[],U=[],B=(X,et,Nt,It,Mt,Z,lt,st)=>{const pt=X.length/3,Ct=[Mt,Z,lt,st];for(let dt=0;dt<4;dt++)X.push(Ct[dt][0],It[dt],Ct[dt][1]),et.push(0,1,0);Nt.push(pt,pt+1,pt+2,pt,pt+2,pt+3)};for(const X of kl()){const et=Oe(pe(X.nodeId)),Nt=qu(X,et.x,et.z),It=[et.x,Nt,et.z],Mt=[0,1,0],Z=[C.r,C.g,C.b],lt=[];for(const mt of X.ring)It.push(mt.x,mt.h,mt.z),Mt.push(0,1,0),Z.push(C.r,C.g,C.b);for(let mt=0;mt<X.ring.length;mt++)lt.push(0,1+mt,1+(mt+1)%X.ring.length);const st=new ge;st.setAttribute("position",new Kt(It,3)),st.setAttribute("normal",new Kt(Mt,3)),st.setAttribute("color",new Kt(Z,3)),st.setIndex(lt);const pt=new J(st,w);pt.receiveShadow=!0,x.add(pt);const Ct=[],dt=[],ee=[],Wt=X.ring.length,rt=X.legs.map(mt=>({la:Math.atan2(mt.dz,mt.dx),ca:Math.atan2(mt.hw,mt.clip)})),ct=(mt,Ot)=>{const O=(mt-Ot)%(Math.PI*2);return Math.abs((O+Math.PI*3)%(Math.PI*2)-Math.PI)};for(let mt=0;mt<Wt;mt++){const Ot=X.ring[mt],O=X.ring[(mt+1)%Wt],he=(Ot.x+O.x)/2-et.x,Ut=(Ot.z+O.z)/2-et.z,I=Math.atan2(Ut,he);if(rt.some(bt=>ct(I,bt.la)<=bt.ca+1e-6))continue;const S=O.x-Ot.x,V=O.z-Ot.z,q=Math.hypot(S,V)||1,Q=V/q,ut=-S/q,gt=Math.min(Me(Ot.x,Ot.z),Me(O.x,O.z)),tt=Ot.h-.02,nt=O.h-.02,yt=Math.min(tt,nt),Bt=gt<yt-.3?Math.max(gt-.1,yt-3):yt,_t=Ct.length/3;Ct.push(Ot.x,tt,Ot.z,Ot.x,Bt,Ot.z,O.x,nt,O.z,O.x,Bt,O.z),dt.push(Q,0,ut,Q,0,ut,Q,0,ut,Q,0,ut),ee.push(_t,_t+2,_t+1,_t+1,_t+2,_t+3)}const ot=new ge;ot.setAttribute("position",new Kt(Ct,3)),ot.setAttribute("normal",new Kt(dt,3)),ot.setIndex(ee);const xt=new J(ot,A);xt.receiveShadow=!0,x.add(xt);const{white:vt,walk:Gt}=N1(X),zt=(mt,Ot)=>mt.map(([O,he])=>qu(X,O,he)+Ot);for(const mt of vt)B(L,N,F,zt(mt,.08),mt[0],mt[1],mt[2],mt[3]);for(const mt of Gt)B(P,z,U,zt(mt,.085),mt[0],mt[1],mt[2],mt[3])}const W=ht(16118246);if(W.side=ze,W.depthWrite=!1,W.polygonOffset=!0,W.polygonOffsetFactor=-2,W.polygonOffsetUnits=-2,F.length){const X=new ge;X.setAttribute("position",new Kt(L,3)),X.setAttribute("normal",new Kt(N,3)),X.setIndex(F);const et=new J(X,W);et.receiveShadow=!1,et.renderOrder=1,x.add(et)}const j=ht(12103840);if(j.side=ze,j.depthWrite=!1,j.polygonOffset=!0,j.polygonOffsetFactor=-2,j.polygonOffsetUnits=-2,U.length){const X=new ge;X.setAttribute("position",new Kt(P,3)),X.setAttribute("normal",new Kt(z,3)),X.setIndex(U);const et=new J(X,j);et.receiveShadow=!1,et.renderOrder=1,x.add(et)}};for(const x of Ge){if(x.kind==="bridge")continue;const w=$i(x),A=Fl(x),C=qo(x),L=C.a?Yu(x,"a",C.a.dist):0,N=C.b?Yu(x,"b",C.b.dist):1;t.add(m(x,w,A,L,N))}const y=ht(16774872);y.side=ze,y.depthWrite=!1,y.polygonOffset=!0,y.polygonOffsetFactor=-2,y.polygonOffsetUnits=-2;const _=[],T=[],E=[];for(const x of Ge){if(x.kind==="bridge")continue;const w=$i(x),A=w.getLength(),C=qo(x),L=C.a?C.a.dist:0,N=C.b?C.b.dist:0;for(let F=L+1;F<A-N-3;F+=4){const P=w.getPointAt(F/A),z=w.getPointAt(Math.min(1,(F+2)/A)),U=new D().addVectors(P,z).multiplyScalar(.5),B=Math.atan2(z.x-P.x,z.z-P.z),W=Math.cos(B),j=Math.sin(B),X=.12,et=1,Nt=il(x,(F+1)/A)+.02,It=[[-X,-et],[X,-et],[X,et],[-X,et]],Mt=_.length/3;for(const[Z,lt]of It){const st=U.x+Z*W+lt*j,pt=U.z+(-Z*j+lt*W);_.push(st,Nt,pt),T.push(0,1,0)}E.push(Mt,Mt+1,Mt+2,Mt,Mt+2,Mt+3)}}if(E.length>0){const x=new ge;x.setAttribute("position",new Kt(_,3)),x.setAttribute("normal",new Kt(T,3)),x.setIndex(E);const w=new J(x,y);w.renderOrder=1,t.add(w)}M(t,f,g),k1(t);const b=ht(10117447);return nh.forEach(([x,w])=>{const A=new J(new Jt(op,.7,ap),b);A.position.set(x,-.25,w),t.add(A)}),this.makeBuildings(t),this.makeGreenery(t),this.makeLighthouse(t),this.makeClockTower(t),this.makeObservatoryDome(t),this.makeBakeryDormer(t),this.makeMansionTerraces(t),this.makeBoats(t),this.makeLaundryLines(t),this.makeDockDressing(t),this.makeStreetLamps(t),this.makePark(t),t}makePark(t){const[e,n,s,r]=me,o=(e+s)/2,a=(n+r)/2,c=Me(o,a),l=new J(new xn(s-e,r-n),ht(8367708));l.rotation.x=-Math.PI/2,l.position.set(o,c+.1,a),t.add(l);const h=new Le,d=new mn(new fe(.35,.55,4,7),ht(7621174),qa.length),u=new mn(new vr(2.6,1),ht(5085035),qa.length);qa.forEach((_,T)=>{const E=Me(_.x,_.z);h.rotation.set(0,T*2.39996,0),h.scale.setScalar(_.s),h.position.set(_.x,E+2*_.s,_.z),h.updateMatrix(),d.setMatrixAt(T,h.matrix),h.position.set(_.x,E+5.5*_.s,_.z),h.updateMatrix(),u.setMatrixAt(T,h.matrix)}),d.instanceMatrix.needsUpdate=!0,u.instanceMatrix.needsUpdate=!0,t.add(d,u);const f=ht(15260864);for(const _ of B1){const T=new J(new Jt(_.x1-_.x0,.2,_.z1-_.z0),f);T.position.set((_.x0+_.x1)/2,c+.15,(_.z0+_.z1)/2),t.add(T)}const g=H1,v=new On({color:13625572,transparent:!0,opacity:.5}),p=new J(new Jt(g.w,g.h,g.d),v);p.position.set(g.x,c+g.h/2,g.z),t.add(p);const m=g.d/2,M=new J(new ue(m,16,10,0,Math.PI*2,0,Math.PI/2),v);M.position.set(g.x,c+g.h,g.z),t.add(M);const y=ht(8030858);for(let _=0;_<6;_++){const T=new J(new Ln(m,.15,6,12,Math.PI),y);T.position.set(g.x,c+g.h,g.z),T.rotation.y=_/6*Math.PI,t.add(T)}}makeLaundryLines(t){const e=ht(4865845),n=[ht(16747434),ht(8370408),ht(16777215),ht(16767306),ht(10147455)],s=[[-25,9,-50,-20,9,-32],[5,11,-50,15,11,-45],[-20,8,-22,15,8,-28]],r=hn(42);s.forEach(([o,a,c,l,h,d])=>{const u=new D(o,a,c),f=new D(l,h,d),g=u.distanceTo(f),v=12;let p=u.clone();for(let M=1;M<=v;M++){const y=M/v,_=u.clone().lerp(f,y);_.y-=Math.sin(y*Math.PI)*.8;const T=p.distanceTo(_),E=new J(new fe(.03,.03,T,4),e);E.position.copy(p).lerp(_,.5),E.lookAt(_),E.rotateX(Math.PI/2),t.add(E),p=_}const m=Math.floor(g/3);for(let M=0;M<m;M++){const y=(M+.7)/(m+.4),_=u.clone().lerp(f,y);_.y-=Math.sin(y*Math.PI)*.8;const T=.9+r()*.5,E=1.1+r()*.5,b=new J(new xn(T,E),n[Math.floor(r()*n.length)]);b.position.set(_.x,_.y-E/2,_.z),b.rotation.y=Math.atan2(f.x-u.x,f.z-u.z)+Math.PI/2,b.material.side=ze,t.add(b)}})}makeDockDressing(t){const e=ht(11040318),n=ht(8016432),s=ht(13218953),r=nh,o=hn(7);r.forEach(([a,c])=>{const l=2+Math.floor(o()*3);for(let d=0;d<l;d++){const u=1.1+o()*.5,f=new J(new Jt(u,u,u),e);f.position.set(a-10+o()*20,1.15+u/2+(d===2?1.4:0),c-3+o()*6),f.rotation.y=o()*.6,f.castShadow=!0,t.add(f)}for(let d=0;d<2;d++){const u=new J(new fe(.65,.65,1.5,10),n);u.position.set(a-8+o()*16,1.9,c-2.5+o()*5),u.castShadow=!0,t.add(u)}const h=new J(new Ln(.55,.18,8,16),s);h.position.set(a-6+o()*12,1.25,c-2+o()*4),h.rotation.x=Math.PI/2,t.add(h)})}makeStreetLamps(t){const e=ht(3816002),n=ht(16767370);this.lampMat=n,[[-70,30],[-62,42],[-78,48],[-92,12],[-92,20],[-47,24],[-47,32],[-10,-40],[10,-40],[-10,-55],[10,-55]].forEach(([r,o])=>{const c=new J(new fe(.12,.16,4.2,8),e);c.position.set(r,0+2.1,o),c.castShadow=!0,t.add(c);const l=new J(new je(.45,.35,8),e);l.position.set(r,0+4.55,o),t.add(l);const h=new J(new ue(.32,10,8),n);h.position.set(r,0+4.2,o),t.add(h)})}makeBoats(t){const e=ht(9132604),n=ht(5996454),s=ht(7031343),r=ht(16117985),o=new Jc;o.moveTo(0,4.2),o.quadraticCurveTo(1.7,2.5,1.6,0),o.quadraticCurveTo(1.5,-2.5,1,-3.4),o.quadraticCurveTo(0,-3.8,-1,-3.4),o.quadraticCurveTo(-1.5,-2.5,-1.6,0),o.quadraticCurveTo(-1.7,2.5,0,4.2);const a=new Vo(o,{depth:1.1,bevelEnabled:!1});a.rotateX(-Math.PI/2);const c=new Jc;c.moveTo(0,4.5),c.quadraticCurveTo(1.95,2.6,1.85,0),c.quadraticCurveTo(1.75,-2.6,1.15,-3.65),c.quadraticCurveTo(0,-4.1,-1.15,-3.65),c.quadraticCurveTo(-1.75,-2.6,-1.85,0),c.quadraticCurveTo(-1.95,2.6,0,4.5);const l=new Kc;l.moveTo(0,3.9),l.quadraticCurveTo(1.45,2.4,1.35,0),l.quadraticCurveTo(1.25,-2.4,.85,-3.15),l.quadraticCurveTo(0,-3.5,-.85,-3.15),l.quadraticCurveTo(-1.25,-2.4,-1.35,0),l.quadraticCurveTo(-1.45,2.4,0,3.9),c.holes.push(l);const h=new Vo(c,{depth:.28,bevelEnabled:!1});h.rotateX(-Math.PI/2);const d=[.08,-.06,.1,-.08,.06,-.1];cp.map(([f,g],v)=>[f,g,d[v]]).forEach(([f,g,v],p)=>{const m=new re,M=p%2?n:e,y=new J(a,M);y.position.y=1.1,m.add(y);const _=new J(h,s);_.position.y=1.1,m.add(_);const T=new J(new fe(.12,.16,5.5,6),s);T.position.y=3.8,m.add(T);const E=new J(new Jt(.3,3.6,1.7),r);E.position.set(0,3.3,-1.2),m.add(E),m.position.set(f,.1,g),m.rotation.y=v,m.userData.phase=p*1.3,m.userData.baseY=.1,t.add(m),this.boats.push(m)})}makeBuildings(t){const e=Bf(),n=ht(16768938),s=ht(3501961),r=ht(16767370),o=ht(7358008),a=ht(5085035),c=ht(16747434),l=(v,p,m,M,y,_,T,E,b,x,w,A)=>{const C=Math.min(4.2,p*.28),L=new J(new Jt(v,p-C,m),ht(w));L.position.set(y,M+(p-C)*.5,_),L.castShadow=!0,L.receiveShadow=!0,t.add(L);const N=v*.5,F=m*.5,P=p*.5-C,z=new D(y,M+p*.5,_),U=new ge;U.setAttribute("position",new Kt([-N,P,-F,N,P,-F,0,p*.5,0,N,P,-F,N,P,F,0,p*.5,0,N,P,F,-N,P,F,0,p*.5,0,-N,P,F,-N,P,-F,0,p*.5,0],3)),U.setIndex([0,2,1,3,5,4,6,8,7,9,11,10]),U.computeVertexNormals();const B=new J(U,ht(A));B.position.copy(z),B.castShadow=!0,t.add(B),V1(e,X1({sx:v,sy:p,sz:m,minY:M,cx:y,cz:_,district:T,seedBase:E,colorIdx:b,bayWindow:x}))};on.forEach((v,p)=>{const m=v.max.x-v.min.x,M=v.max.y-v.min.y,y=v.max.z-v.min.z,_=new D((v.min.x+v.max.x)/2,(v.min.y+v.max.y)/2,(v.min.z+v.max.z)/2),T=ud(v);if(this.blockers.push(T),p===ih||p===sh||p===rh)return;const E=v.district&&Lr[v.district]||Lr["old-town"];l(m,M,y,v.min.y,_.x,_.z,v.district??"old-town",p,p,!1,E.bodies[p%E.bodies.length],E.roofs[p%E.roofs.length]),v.district==="bungalow-lanes"&&this.makePicketFence(t,v,p),v.district==="mansion-hill"&&this.makeWalledGarden(t,v,p)});const h=Co(),d=Id(h),u=ht(9076594),f=ht(12101770),g=Ge.filter(v=>v.kind!=="bridge").map(v=>{const p=Oe(pe(v.a)),m=Oe(pe(v.b));return{x0:p.x,z0:p.z,x1:m.x,z1:m.z}});h.forEach((v,p)=>{const m=Ao(v.x,v.z,v.w,v.d),M=m?m.maxH:Me(v.x+v.w/2,v.z+v.d/2),y=m?m.minH:M,_=M,T=Lr[v.district]||Lr["old-town"],E=v.palette===0?T.bodies[p%T.bodies.length]:Ib[v.palette-1];if(M-y>.3){const L=new J(new Jt(v.w,M-y,v.d),u);L.position.set(v.x+v.w/2,y+(M-y)/2,v.z+v.d/2),L.castShadow=!0,L.receiveShadow=!0,t.add(L)}l(v.w,v.h,v.d,_,v.x+v.w/2,v.z+v.d/2,v.district,G1+p,p,v.bayWindow,E,T.roofs[p%T.roofs.length]),this.blockers.push(ud(d[p]));const b=v.x+v.w/2,x=v.z+v.d/2;let w=0,A=0,C=1/0;for(const L of g){const N=L.x1-L.x0,F=L.z1-L.z0,P=N*N+F*F;let z=P>0?((b-L.x0)*N+(x-L.z0)*F)/P:0;z=Math.max(0,Math.min(1,z));const U=L.x0+z*N,B=L.z0+z*F,W=Math.hypot(b-U,x-B);W<C&&(C=W,w=U,A=B)}if(C<1/0&&C>.5){const L=w-b,N=A-x,F=Math.hypot(L,N),P=L/F,z=N/F,U=(v.w*Math.abs(P)+v.d*Math.abs(z))/2,B=b+P*U,W=x+z*U,j=w-P*2.8,X=A-z*2.8,et=Math.hypot(j-B,X-W);if(et>1.5){const Nt=(B+j)/2,It=(W+X)/2,Mt=(Me(B,W)+Me(j,X))/2+.1,Z=new J(new Jt(3,.18,et),f);Z.position.set(Nt,Mt,It),Z.rotation.y=Math.atan2(j-B,X-W),Z.receiveShadow=!0,t.add(Z)}}}),this.buildFacadeInstances(t,e,{trimMat:n,glassMat:s,litMat:r,doorMat:o,leafMat:a,petalMat:c})}buildFacadeInstances(t,e,n){const s=new xn(1,1),r=new Jt(1,1,1),o=new ue(1,6,5),a=new Le,c=(u,f)=>{f.forEach((g,v)=>{a.position.set(g.x,g.y,g.z),a.rotation.set(g.rotX,g.rotY,0),a.scale.set(g.sx,g.sy,g.sz),a.updateMatrix(),u.setMatrixAt(v,a.matrix)}),u.instanceMatrix.needsUpdate=!0,u.frustumCulled=!1,t.add(u)};if(e.winLit.length){const u=new mn(s,n.litMat,e.winLit.length);c(u,e.winLit)}if(e.winUnlit.length){const u=new mn(s,n.glassMat,e.winUnlit.length);c(u,e.winUnlit)}if(e.doors.length){const u=new mn(s,n.doorMat,e.doors.length);c(u,e.doors)}if(e.sills.length){const u=new mn(r,n.trimMat,e.sills.length);c(u,e.sills)}if(e.bays.length){const u=new mn(r,n.trimMat,e.bays.length);c(u,e.bays)}if(e.flowerBoxes.length){const u=new mn(r,n.doorMat,e.flowerBoxes.length);c(u,e.flowerBoxes)}if(e.petals.length){const u=new mn(o,n.petalMat,e.petals.length);c(u,e.petals)}if(e.leaves.length){const u=new mn(o,n.leafMat,e.leaves.length);c(u,e.leaves)}const l=new xn(1,1,1,1),h=l.attributes.position;for(let u=0;u<h.count;u++)h.getY(u)<0&&h.setZ(u,-.7);l.computeVertexNormals();const d=[["#e86a6a","#f5f0e1"],["#5b7fa6","#f5f0e1"],["#6aa86a","#f5f0e1"]];e.awnings.forEach((u,f)=>{if(!u.length)return;const[g,v]=d[f%d.length],p=document.createElement("canvas");p.width=128,p.height=16;const m=p.getContext("2d");for(let _=0;_<8;_++)m.fillStyle=_%2?g:v,m.fillRect(_*16,0,16,16);const M=new wi(p);M.colorSpace=$e;const y=new mn(l,new On({map:M,side:ze}),u.length);c(y,u)})}makePicketFence(t,e,n){const s=(e.min.x+e.max.x)/2,r=(e.min.z+e.max.z)/2,o=e.max.x-e.min.x,a=e.max.z-e.min.z,c=e.min.y,l=ht(16117985),h=ht(7031343),d=[ht(16747434),ht(16767306),ht(16777215),ht(15231594)],u=4,f=s-o/2-u,g=s+o/2+u,v=r+a/2+u,p=[[f,v,s-1.2,v],[s+1.2,v,g,v],[f,r-a/2,f,v],[g,r-a/2,g,v]],m=[],M=new Le;p.forEach(([x,w,A,C])=>{const L=Math.hypot(A-x,C-w),N=Math.max(2,Math.floor(L/.38)),F=Math.atan2(A-x,C-w);for(let B=0;B<=N;B++){const W=B/N;M.position.set(x+(A-x)*W,c+.55,w+(C-w)*W),M.rotation.set(0,F,0),M.updateMatrix(),m.push(M.matrix.clone())}const P=L,z=new J(new Jt(.08,.12,P),l);z.position.set((x+A)/2,c+.75,(w+C)/2),z.rotation.y=F,t.add(z);const U=z.clone();U.position.y=c+.35,t.add(U)});const y=new Jt(.14,1.1,.07),_=new mn(y,l,m.length);m.forEach((x,w)=>_.setMatrixAt(w,x)),_.instanceMatrix.needsUpdate=!0,t.add(_);const T=new je(.1,.18,4),E=new mn(T,l,m.length);m.forEach((x,w)=>{const A=new D().setFromMatrixPosition(x);M.position.set(A.x,A.y+.64,A.z),M.rotation.set(0,Math.PI/4,0),M.updateMatrix(),E.setMatrixAt(w,M.matrix)}),E.instanceMatrix.needsUpdate=!0,t.add(E);const b=hn(n*77+5);[-1,1].forEach(x=>{const w=s+x*3.2,A=r+a/2+2.2,C=new J(new Jt(3.4,.35,1.8),h);C.position.set(w,c+.18,A),t.add(C);for(let L=0;L<7;L++){const N=new J(new ue(.22,7,6),d[Math.floor(b()*d.length)]);N.position.set(w+(b()-.5)*2.8,c+.55,A+(b()-.5)*1.2),t.add(N);const F=new J(new ue(.18,6,5),ht(5085035));F.position.set(w+(b()-.5)*2.8,c+.42,A+(b()-.5)*1.2),t.add(F)}})}makeWalledGarden(t,e,n){const s=ki.find(z=>e.min.x>=z[0]-1&&e.max.x<=z[2]+1&&e.min.z>=z[1]-1&&e.max.z<=z[3]+1);if(!s)return;const[r,o,a,c]=s,l=e.min.y,h=ht(12103840),d=ht(14209216),u=ht(4033119),f=ht(7031343),g=[ht(16747434),ht(16767306),ht(16777215)],v=ki.some(z=>z!==s&&Math.abs(z[2]-r)<.01),p=ki.some(z=>z!==s&&Math.abs(z[0]-a)<.01),m=[[(r+a)/2,o,a-r,.5]],M=[[(r+a)/2,o+1.5,a-r-3,.8]],y=e.max.z-o,_=(o+e.max.z)/2;v||(m.push([r,_,.5,y]),M.push([r+1.5,_,.8,y-3])),p?M.push([a,_,.8,y-2]):(m.push([a,_,.5,y]),M.push([a-1.5,_,.8,y-3]));const T=[],E=o+3,b=e.max.z-2;if(b-E>=5){const z=[];!v&&e.min.x-r>=5&&z.push([r+2.5,e.min.x-2.5]),!p&&a-e.max.x>=5&&z.push([e.max.x+2.5,a-2.5]);for(const[U,B]of z){const W=(U+B)/2,j=Math.max(1,Math.floor((b-E)/8));for(let X=0;X<j;X++){const et=E+(X+.5)*((b-E)/j);T.push([W,et])}}}const x=.9;m.forEach(([z,U,B,W])=>{const j=new J(new Jt(B,x,W),h);j.position.set(z,l+x/2,U),j.castShadow=!0,t.add(j);const X=new J(new Jt(B+.15,.12,W+.15),d);X.position.set(z,l+x+.06,U),t.add(X)});const w=1;M.forEach(([z,U,B,W])=>{const j=new J(new Jt(B,w,W),u);j.position.set(z,l+w/2,U),j.castShadow=!0,t.add(j)});const A=hn(n*131+11);T.forEach(([z,U])=>{const B=new J(new Jt(3.2,.4,2.4),f);B.position.set(z,l+.2,U),t.add(B);for(let W=0;W<8;W++){const j=new J(new ue(.24,7,6),g[Math.floor(A()*g.length)]);j.position.set(z+(A()-.5)*2.6,l+.6,U+(A()-.5)*1.8),t.add(j)}});const C=[],L=o+5,N=e.min.z-4;if(N-L>6){const z=Math.max(2,Math.floor((a-r-10)/11));for(let U=0;U<z;U++){const B=r+7+(U+.5)*((a-r-14)/z)+(A()-.5)*3,W=(L+N)/2+(A()-.5)*2;C.push([B,W])}}!v&&e.min.x-r>9&&C.push([(r+e.min.x)/2,(L+N)/2]),!p&&a-e.max.x>9&&C.push([(e.max.x+a)/2,(L+N)/2]);const F=ht(7621174),P=ht(5085035);for(const[z,U]of C){const B=new J(new fe(.4,.65,3.2,7),F);B.position.set(z,l+1.6,U),B.castShadow=!0,t.add(B);const W=new J(new vr(3,1),P);W.position.set(z,l+5,U),W.castShadow=!0,t.add(W)}}makeGreenery(t){const e=ht(7621174),n=ht(5085035),s=ht(4033119),r=ht(16747434),o=hn(1337),a=Co(),c=Ge.map(f=>{const g=pe(f.a),v=pe(f.b);return{x0:g.x,z0:g.z,x1:v.x,z1:v.z}}),l=(f,g)=>{for(const v of c){const p=v.x1-v.x0,m=v.z1-v.z0,M=p*p+m*m;let y=M>0?((f-v.x0)*p+(g-v.z0)*m)/M:0;if(y=Math.max(0,Math.min(1,y)),Math.hypot(f-(v.x0+y*p),g-(v.z0+y*m))<4.5)return!1}for(const v of a)if(f>v.x-2&&f<v.x+v.w+2&&g>v.z-2&&g<v.z+v.d+2)return!1;for(const v of on)if(f>v.min.x-2&&f<v.max.x+2&&g>v.min.z-2&&g<v.max.z+2)return!1;return!ki.some(v=>f>v[0]&&f<v[2]&&g>v[1]&&g<v[3])},h=(f,g)=>{const v=new re,p=3+o()*2.5,m=new J(new fe(.35,.55,p,7),e);m.position.y=p/2,v.add(m);const M=o()<.5?n:s,y=new J(new vr(2.2+o()*1.2,1),M);if(y.position.y=p+1.5,v.add(y),v.position.set(f,Me(f,g),g),v.rotation.y=o()*Math.PI*2,t.add(v),o()<.3){const _=new J(new ue(.28,7,6),r);_.position.set(f+.8,Me(f,g)+.5,g+.6),t.add(_)}};let d=0,u=0;for(;d<260&&u<6e3;){u++;const f=(o()-.5)*400,g=60+o()*160;vh(f,g)&&l(f,g)&&(Te.some(v=>Math.hypot(f-v.position.x,g-v.position.z)<24)||Math.hypot(f,g)<145||(h(f,g),d++))}for(d=0,u=0;d<60&&u<3e3;){u++;const f=(o()-.5)*400,g=(o()-.5)*400;vh(f,g)&&l(f,g)&&(Te.some(v=>Math.hypot(f-v.position.x,g-v.position.z)<24)||f>me[0]&&f<me[2]&&g>me[1]&&g<me[3]||Math.hypot(f,g)<100&&o()<.7||g>60&&Math.hypot(f,g)>=145||(h(f,g),d++))}}makeLighthouse(t){const e=on[3],n=on[ih],s=(e.min.x+e.max.x)/2,r=(e.min.z+e.max.z)/2,o=new J(new fe(20,24,9,18),ht(9076594));o.position.set(s,e.min.y+2.5,r),o.castShadow=!0,t.add(o);const a=(n.min.x+n.max.x)/2,c=(n.min.z+n.max.z)/2,l=n.min.y,h=new J(new fe(3.6,5.2,26,16),ht(16773332));h.position.set(a,16+l,c),h.castShadow=!0,t.add(h);const d=m=>5.2-(m-3)*(1.6/26);for(const m of[8,14,20,26]){const M=new J(new fe(d(m+1.1)+.15,d(m-1.1)+.15,2.2,16),ht(13786193));M.position.set(a,m+l,c),t.add(M)}const u=new J(new fe(4.6,4.6,1.2,16),ht(4089472));u.position.set(a,29.6+l,c),t.add(u);const f=new J(new fe(2.6,2.6,3.4,12),new gn({color:16771501}));f.position.set(a,31.8+l,c),t.add(f);const g=new J(new je(3.4,2.6,12),ht(13194062));g.position.set(a,34.8+l,c),t.add(g);const v=new re;v.position.set(a,31.8+l,c);const p=new gn({color:16768910,transparent:!0,opacity:.28,depthWrite:!1,side:ze});this.beamMat=p,[0,Math.PI].forEach(m=>{const M=new J(new je(3.2,26,12,1,!0),p);M.rotation.z=Math.PI/2,M.rotation.y=m,M.position.set(Math.cos(m)*13,0,-Math.sin(m)*13),v.add(M)}),t.add(v),this.beamGroup=v,this.beamLight=new Af(16768146,60,90),this.beamLight.position.set(a,32+l,c),t.add(this.beamLight),this.setLighthouseLit(!0)}setLighthouseLit(t){this.lighthouseLit=t,this.beamGroup&&(this.beamGroup.visible=t),this.beamLight&&(this.beamLight.intensity=t?60:0)}makeClockTower(t){const e=on[sh],n=(e.min.x+e.max.x)/2,s=(e.min.z+e.max.z)/2,r=e.min.y,o=ht(13935988),a=ht(11951167),c=ht(16768938),l=new J(new Jt(8,20,8),o);l.position.set(n,r+10,s),l.castShadow=!0,t.add(l);const h=new J(new Jt(8.6,3,8.6),o);h.position.set(n,r+21.5,s),h.castShadow=!0,t.add(h);const d=ht(2763317),u=[[0,-4.32,Math.PI],[0,4.32,0],[-4.32,0,-Math.PI/2],[4.32,0,Math.PI/2]];for(const[p,m,M]of u){const y=new re;y.position.set(n+p,r+17,s+m),y.rotation.y=M,t.add(y);const _=new J(new fe(2.2,2.2,.3,24),new gn({color:16314584}));_.rotation.x=Math.PI/2,y.add(_);const T=new gn({color:2763317});for(let N=0;N<12;N++){const F=new J(new Jt(.09,N%3===0?.34:.2,.02),T),P=N/12*Math.PI*2;F.position.set(Math.sin(P)*1.9,Math.cos(P)*1.9,.16),F.rotation.z=-P,y.add(F)}const E=new gn({color:2763317}),b=new re;b.position.set(0,0,.3);const x=new J(new Jt(.18,1.1,.06),E);x.position.y=.45,b.add(x),y.add(b);const w=new re;w.position.set(0,0,.36);const A=new J(new Jt(.13,1.65,.06),E);A.position.y=.62,w.add(A),y.add(w);const C=new J(new fe(.14,.14,.1,12),E);C.rotation.x=Math.PI/2,C.position.z=.38,y.add(C),this.clockHands.push({hour:b,minute:w});const L=new J(new xn(2.4,2),d);L.position.set(n+p*1.01,r+21.5,s+m*1.01),L.rotation.y=M,t.add(L)}const f=new je(6.2,5,4),g=new J(f,a);g.position.set(n,r+25.5,s),g.rotation.y=Math.PI/4,g.castShadow=!0,t.add(g);const v=new J(new ue(.5,10,8),c);v.position.set(n,r+28.2,s),t.add(v);for(const[p,m]of[[-1,-1],[1,-1],[-1,1],[1,1]]){const M=new J(new Jt(.7,20,.7),c);M.position.set(n+p*3.8,r+10,s+m*3.8),t.add(M)}}makeObservatoryDome(t){const e=on[rh],n=(e.min.x+e.max.x)/2,s=(e.min.z+e.max.z)/2,r=e.min.y,o=ht(9079442),a=ht(6064762),c=new J(new fe(4.5,4.8,3,18),o);c.position.set(n,r+1.5,s),c.castShadow=!0,t.add(c);const l=new J(new ue(4.5,20,12,0,Math.PI*2,0,Math.PI/2),a);l.position.set(n,r+3,s),l.castShadow=!0,t.add(l);const h=new J(new Jt(1.2,3.5,.4),ht(1710629));h.position.set(n,r+4.85,s+4.1),h.rotation.x=-.25,t.add(h);const d=new J(new ue(.4,8,6),ht(9071162));d.position.set(n,r+7.7,s),t.add(d)}makeBakeryDormer(t){const e=on[0],n=(e.min.x+e.max.x)/2,s=(e.min.z+e.max.z)/2,r=n,o=s-8,a=e.max.x-e.min.x,c=e.max.y-e.min.y,l=e.max.z-e.min.z,h=Math.min(4.2,c*.28),d=Math.max(0,Math.min(1-Math.abs(r-n)/(a/2),1-Math.abs(o-s)/(l/2))),u=e.max.y-h+d*h,f=ht(16049320),g=ht(9132602),v=new J(new Jt(4.5,2.6,3),f);v.position.set(r,u+1.3,o),v.castShadow=!0,t.add(v);const p=new J(new xn(2.6,1.6),new gn({color:16767114}));p.position.set(r,u+1.3,o+1.52),t.add(p);const m=new J(new Jt(3,2,.15),g);m.position.set(r,u+1.3,o+1.45),t.add(m),p.position.z=o+1.54;const M=new ge;M.setAttribute("position",new Kt([-2.45,0,-1.7,2.45,0,-1.7,0,.2,0,2.45,0,-1.7,2.45,0,1.7,0,.2,0,2.45,0,1.7,-2.45,0,1.7,0,.2,0,-2.45,0,1.7,-2.45,0,-1.7,0,.2,0],3)),M.setIndex([0,2,1,3,5,4,6,8,7,9,11,10]),M.computeVertexNormals();const y=new J(M,g);y.position.set(r,u+2.6,o),y.castShadow=!0,t.add(y)}makeMansionTerraces(t){const e=ht(10132114),n=ht(6989930),s=(r,o,a,c,l,h)=>{const d=c-a,u=new J(new Jt(o-r,d,h-l),e);u.position.set((r+o)/2,a+d/2,(l+h)/2),u.castShadow=!0,u.receiveShadow=!0,t.add(u);const f=new J(new Jt(o-r-.6,.25,h-l-.6),n);f.position.set((r+o)/2,c+.12,(l+h)/2),f.receiveShadow=!0,t.add(f)};for(const r of[17,18]){const o=on[r],a=o.min.y;s(o.min.x,o.max.x,a,a+1.5,o.max.z,o.max.z+4.5),s(o.min.x+4,o.max.x-4,a,a+3,o.max.z+2.25,o.max.z+4.5)}}makeHero(){const t=new gn({color:3746621,side:en}),e=(c,l,h,d)=>{const u=new J(c,l);u.position.set(h.x,h.y,h.z),d&&u.scale.set(d.x,d.y,d.z),this.hero.add(u);const f=new J(c,t);return f.scale.setScalar(1.045),u.add(f),this.outlines.push(f),u},n=e(new fe(.16,.21,8.6,10),ht(8736825),{x:0,y:.15,z:.35});n.rotation.x=Math.PI/2;const s=e(new Ln(.62,.105,7,14,Math.PI*1.25),ht(7946799),{x:0,y:.58,z:-4.05});s.rotation.z=Math.PI*.18,[3,3.3].forEach(c=>e(new Ln(.34,.1,6,12),ht(5583662),{x:0,y:.15,z:c}));for(let c=0;c<21;c++){const l=(c-10)/10,h=new gf(new D(l*.25,.15,3),new D(l*1.5,-.05+Math.cos(c)*.16,5.8-Math.abs(l)*.35));e(new jo(h,1,.11,5,!1),ht(c%2?13869914:15780216),{x:0,y:0,z:0})}e(new je(1.75,4.3,9),ht(1535606),{x:0,y:4,z:-.25}),e(new ue(1.15,14,10),ht(16762531),{x:0,y:6.5,z:-.35}),e(new je(2.05,4.6,11),ht(2443608),{x:0,y:9,z:-.35}),e(new Ln(1.55,.28,7,16),ht(2443608),{x:0,y:7.25,z:-.35},{x:1,y:1,z:1}).rotation.x=Math.PI/2,[-1,1].forEach(c=>{const l=e(new fe(.34,.48,2.2,7),ht(2443608),{x:c*.72,y:2.35,z:.05});l.rotation.z=c*.36;const h=e(new fe(.28,.35,1.75,7),ht(2443608),{x:c*1.12,y:1.15,z:-.08});h.rotation.z=-c*.62,e(new ue(.46,8,7),ht(5716276),{x:c*1.48,y:.52,z:-.47},{x:1,y:.65,z:1.45})}),[-.75,-.38,.38,.75].forEach((c,l)=>e(new ue(.45,8,7),ht(10308914),{x:c,y:6.75-l%2*.42,z:-1.15})),[-.4,.4].forEach(c=>e(new ue(.14,8,7),ht(2504770),{x:c,y:6.65,z:-1.43}));const r=ht(15914671);e(new ue(1.02,12,9),r,{x:0,y:2,z:1.48}),e(new ue(.78,12,9),r,{x:0,y:2.78,z:2.08}),[-.48,.48].forEach(c=>e(new je(.38,.78,3),ht(14721900),{x:c,y:3.55,z:2.2})),[-.26,.26].forEach(c=>e(new ue(.12,7,6),ht(2572625),{x:c,y:2.88,z:2.88})),[-.42,.42].forEach(c=>e(new ue(.19,7,6),r,{x:c,y:1.27,z:2.12},{x:1,y:.7,z:1.15}));const o=e(new Ln(.79,.075,6,12),ht(12929874),{x:0,y:2.45,z:2.06});o.rotation.x=Math.PI/2;const a=e(new Ln(1,.17,7,12,Math.PI*.8),ht(15914671),{x:0,y:2,z:.95});a.rotation.x=Math.PI/2}makeSkyLife(){const t=ht(16776171);for(let e=0;e<12;e++){const n=new re;for(let s=0;s<4;s++){const r=new J(new ue(3+s%2*1.5,10,7),t);r.position.set(s*3,Math.sin(s)*.8,0),n.add(r)}n.position.set(-190+e*47%380,38+e%4*16,-155+e*71%320),this.clouds.add(n)}this.makeBirds()}makeBirds(){const t=ht(16119280),e=ht(14277081),n=ht(15242044),s=hn(1234);for(let r=0;r<12;r++){const o=new re,a=new J(new ue(.45,10,8),t);a.scale.set(.7,.6,1.6),o.add(a);const c=new J(new ue(.26,10,8),t);c.position.set(0,.22,.75),o.add(c);const l=new J(new je(.09,.35,8),n);l.position.set(0,.18,1.05),l.rotation.x=Math.PI/2,o.add(l);const h=new J(new Jt(.5,.07,.6),e);h.position.set(0,.05,-.85),o.add(h);const d=g=>{const v=new re;v.position.set(g*.28,.12,.1);const p=new J(new Jt(1.5,.07,.65),e);p.position.x=g*.85;const m=new J(new Jt(.7,.06,.45),e);return m.position.x=g*1.85,v.add(p,m),o.add(v),v},u=d(-1),f=d(1);o.position.set(-30+s()*80,28+s()*12,45+s()*55),this.birds.add(o),this.birdFlock.push({group:o,left:u,right:f,vel:new D((s()-.5)*8,0,(s()-.5)*8),phase:s()*Math.PI*2})}}updateBirds(t){const e=this.birdFlock.length;if(!e||t<=0)return;const n=14,s=9,r=4.5,o=26,a=new D,c=new D;for(let l=0;l<e;l++){const h=this.birdFlock[l],d=new D,u=new D,f=new D;let g=0;for(let E=0;E<e;E++){if(l===E)continue;const b=this.birdFlock[E],x=h.group.position.distanceTo(b.group.position);x<n&&x>.001&&(g++,c.copy(h.group.position).sub(b.group.position).divideScalar(x*x),d.add(c),u.add(b.vel),f.add(b.group.position))}a.set(0,0,0),g>0&&(d.divideScalar(g).normalize().multiplyScalar(s).sub(h.vel),d.clampLength(0,o),u.divideScalar(g).normalize().multiplyScalar(s).sub(h.vel),u.clampLength(0,o),f.divideScalar(g).sub(h.group.position).normalize().multiplyScalar(s).sub(h.vel),f.clampLength(0,o),a.addScaledVector(d,1.6).addScaledVector(u,1).addScaledVector(f,.9));const v=33-h.group.position.y;a.y+=Xe.clamp(v*2.2,-o*.6,o*.6),a.x+=Math.sin(this.clock*.9+h.phase)*4+Math.sin(this.clock*.23+h.phase*2.1)*3,a.z+=Math.cos(this.clock*.7+h.phase*1.3)*4+Math.cos(this.clock*.31+h.phase*.7)*3,h.vel.addScaledVector(a,t);const p=h.vel.length();p>s?h.vel.multiplyScalar(s/p):p<r&&p>.001&&h.vel.multiplyScalar(r/p),h.group.position.addScaledVector(h.vel,t);const m=h.group.position.clone().add(h.vel);h.group.lookAt(m);const M=(this.clock*.35+h.phase*.15)%1;let y,_;M<.58?(y=.75,_=0):(y=.06,_=.18);const T=_+Math.sin(this.clock*11+h.phase)*y;h.left.rotation.z=T,h.right.rotation.z=-T}}animateSky(t){this.clouds.children.forEach((e,n)=>{e.position.x+=.012*(1+n%3),e.position.x>205&&(e.position.x=-205)}),this.updateBirds(t),this.beamGroup&&this.lighthouseLit&&(this.beamGroup.rotation.y+=.015),this.boats.forEach(e=>{const n=e.userData.baseY??.35;e.position.y=n+Math.sin(this.clock*1.2+e.userData.phase)*.18,e.rotation.z=Math.sin(this.clock*.9+e.userData.phase)*.03})}destination(t){var n,s,r;if(t.mode==="tutorial")return Te.find(o=>o.id==="harbor-cafe")||Te[1];const e=(n=t.run)!=null&&n.returning?"home":(r=(s=t.run)==null?void 0:s.job)==null?void 0:r.to;return Te.find(o=>o.id===e)||Te.find(o=>o.id==="home")||Te[0]}updateBeacon(t,e){if(t&&(this.targetRing.position.set(t.position.x,Math.max(3,t.position.y+.6),t.position.z),this.targetRing.rotation.y+=e*.8,!this.targetRing.children.length)){const n=new J(new Ln(4.5,.25,8,28),ht(16770203));n.rotation.x=Math.PI/2,this.targetRing.add(n);const s=new J(new fe(.08,.26,8,8,1,!0),new gn({color:16771234,transparent:!0,opacity:.16,depthWrite:!1,side:ze}));s.position.y=4,this.targetRing.add(s)}}makeGlowColumn(){const e=[{rTop:zd,rBottom:2.4,opacity:.2},{rTop:1.7,rBottom:1.1,opacity:.32}];for(const n of e){const s=new fe(n.rTop,n.rBottom,90,24,1,!0),r=new un({transparent:!0,depthWrite:!1,blending:Po,side:ze,uniforms:{uHeight:{value:90},uOpacity:{value:n.opacity},uPulse:{value:1}},vertexShader:`varying float vH; uniform float uHeight;
void main(){ vH = position.y / uHeight + .5; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }`,fragmentShader:`varying float vH; uniform float uOpacity; uniform float uPulse;
void main(){ float a = pow(clamp(1. - vH, 0., 1.), 1.7) * uOpacity * uPulse;
  gl_FragColor = vec4(1., .62, .22, a); }`}),o=new J(s,r);o.position.y=90/2,this.glowColumn.add(o),this.glowMats.push(r)}this.glowColumn.visible=!1}updateGlowColumn(t){const e=Ko(t),n=!!e;if(this.glowColumn.visible=n,!n||!e){this.lastGlowStopId=void 0;return}this.lastGlowStopId!==e.id&&(this.lastGlowStopId=e.id,this.glowColumn.position.set(e.position.x,e.position.y,e.position.z));const s=t.haloFade>0?Math.max(0,Math.min(1,t.haloFade/Nd)):1,r=(.86+.14*Math.sin(this.clock*2.4))*s;for(const o of this.glowMats)o.uniforms.uPulse.value=r}makeDropParcel(){const t=new J(new Jt(1.5,1.1,1.5),ht(13208927)),e=ht(12929874),n=new J(new Jt(1.56,1.16,.34),e),s=new J(new Jt(.34,1.16,1.56),e),r=new J(new ue(.3,8,6),e);r.position.y=.68,r.scale.set(1.4,.7,1.4),this.dropParcel.add(t,n,s,r),this.dropParcel.visible=!1}updateDropParcel(t,e){const n=t.drop,s=n?Te.find(d=>d.id===n.stopId):void 0,r=!!n&&!!s&&n.parcel;if(this.dropParcel.visible=r,!r||!n||!s)return;const o=Math.min(1,n.t/Dd),a=o*o,c=t.player.position,l=s.position.y+.7,h=Math.max(c.y-1.4,l);this.dropParcel.position.set(c.x+(s.position.x-c.x)*a,h+(l-h)*a,c.z+(s.position.z-c.z)*a),this.dropParcel.rotation.y+=e*4}updateCamera(t,e,n,s){let r,o;if(t.mode==="title"||t.mode==="summary"){const a=this.clock*.035;r=new D(-92+Math.sin(a)*8,48,146+Math.cos(a)*7),o=new D(18,13,65)}else{this.followYaw=s?t.player.yaw:sb(this.followYaw,t.player.yaw,n);const a=this.followYaw,c=new D(-Math.sin(a)*26,12,Math.cos(a)*26);r=e.clone().add(c),o=e.clone().add(new D(Math.sin(a)*5,2,-Math.cos(a)*5));const l=e.clone().add(new D(0,2,0)),h=r.clone().sub(l),d=h.length();this.blockers.forEach(f=>f.updateWorldMatrix(!0,!1)),this.ray.set(l,h.normalize());const u=this.ray.intersectObjects(this.blockers,!1)[0];u&&u.distance<d&&r.copy(l).add(h.setLength(Math.max(7,u.distance-1)))}this.camPos.copy(r),this.camLook.copy(o),this.camera.position.copy(this.camPos),this.camera.up.set(0,1,0),this.camera.lookAt(this.camLook)}}function Wf(i,t,e,n,s){let r,o,a,c=null,l;return i?(r=fr(),o="ready",a="",l=!0,t.canSave&&t.save(r)):e.kind==="invalid"?(t.discardUnreadable(),r=fr(),o="ready",a="",l=!0,c="Your saved game could not be read, so it was discarded and a new game was started."):(o=e.kind,a=e.message,r=e.state??fr(),e.kind==="ready"&&e.seedMigrated&&t.canSave&&t.save(r),l=e.kind==="ready"||e.kind==="session"||e.kind==="readonly"),r.coarsePointer=s,n.setSeed(r.seed),l&&rc(r,!1),{state:r,bootReady:l,saveKind:o,saveMessage:a,saveFyi:c,bootTime:performance.now()}}const dd=()=>new Promise(i=>requestAnimationFrame(()=>requestAnimationFrame(()=>i())));async function Db(i,t,e,n,s){const r=matchMedia("(pointer: coarse)").matches;s("Building world…"),await dd();const o=new Lb(i);s(t?"Starting new game…":"Loading save…"),await dd();const a=Wf(t,e,n,o,r);return{renderer:o,coarsePointer:r,...a}}class Nb{constructor(t,e,n=()=>!0){G(this,"keys",new Set);G(this,"stick",{x:0,y:0});G(this,"stickPointer",null);G(this,"cutPending",!1);G(this,"keydown");G(this,"keyup");G(this,"canvas");G(this,"joystick");G(this,"stickEnabled");this.canvas=t,this.stickEnabled=n,this.keydown=s=>{if(this.inControl(s.target))return;const r=s.key.toLowerCase();["arrowleft","arrowright","arrowup","arrowdown","w","a","s","d","q","e"," ","enter","escape","p","f"].includes(r)&&s.preventDefault(),!s.repeat&&r===" "&&e.hover(),!s.repeat&&r==="enter"&&e.interact(),!s.repeat&&(r==="escape"||r==="p")&&e.pause(),!s.repeat&&r==="f"&&e.fullscreen(),this.keys.add(r)},this.keyup=s=>this.keys.delete(s.key.toLowerCase()),window.addEventListener("keydown",this.keydown),window.addEventListener("keyup",this.keyup),t.addEventListener("blur",()=>this.clear()),this.joystick=document.querySelector("#joystick")||void 0,this.joystick&&(this.joystick.hidden=!0),this.bindTouch()}sample(){const t=(a,c)=>Number(this.keys.has(a)||this.keys.has(c)),e=t("arrowright","d")-t("arrowleft","a")+this.stick.x,n=t("arrowup","w")-t("arrowdown","s")-this.stick.y,s=this.stickPointer!==null,r=t("e","e")-t("q","q")+(s?1:0),o=this.cutPending;return this.cutPending=!1,{turn:Math.max(-1,Math.min(1,e)),climb:Math.max(-1,Math.min(1,n)),throttle:Math.max(-1,Math.min(1,r)),cutThrottle:o}}clear(){this.keys.clear(),this.stickPointer=null,this.stick.x=this.stick.y=0,this.cutPending=!1,this.joystick&&(this.joystick.style.removeProperty("--stick-x"),this.joystick.style.removeProperty("--stick-y"),this.joystick.classList.remove("is-dragging"),this.joystick.hidden=!0)}dispose(){window.removeEventListener("keydown",this.keydown),window.removeEventListener("keyup",this.keyup),this.clear()}inControl(t){return t instanceof Element&&!!t.closest('input, button, select, textarea, [contenteditable="true"]')}bindTouch(){if(!this.joystick)return;const t=this.joystick,e=o=>{const a=t.getBoundingClientRect(),c=a.width*.34,l=o.clientX-(a.left+a.width/2),h=o.clientY-(a.top+a.height/2),d=Math.max(c,Math.hypot(l,h));this.stick.x=l/d,this.stick.y=h/d,t.style.setProperty("--stick-x",`${this.stick.x*c}px`),t.style.setProperty("--stick-y",`${this.stick.y*c}px`)},n=o=>{if(o.pointerType==="mouse"||this.stickPointer!==null||!this.stickEnabled())return;this.stickPointer=o.pointerId;try{this.canvas.setPointerCapture(o.pointerId)}catch{}const a=t.offsetWidth/2||56;t.style.left=`${o.clientX-a}px`,t.style.top=`${o.clientY-a}px`,t.hidden=!1,t.classList.add("is-dragging"),e(o)},s=o=>{o.pointerId===this.stickPointer&&e(o)},r=o=>{o.pointerId===this.stickPointer&&(this.stickPointer=null,this.stick.x=this.stick.y=0,t.style.removeProperty("--stick-x"),t.style.removeProperty("--stick-y"),t.classList.remove("is-dragging"),t.hidden=!0,this.cutPending=!0)};this.canvas.addEventListener("pointerdown",n),this.canvas.addEventListener("pointermove",s),this.canvas.addEventListener("pointerup",r),this.canvas.addEventListener("pointercancel",r),this.canvas.addEventListener("lostpointercapture",r)}}class Ub{constructor(t,e){G(this,"root");G(this,"key","");G(this,"displayedCoins",-1);this.actions=e,this.root=document.createElement("section"),this.root.className="home-interface",t.append(this.root),this.root.addEventListener("click",n=>{const s=n.target.closest("button");if(s){if(s.dataset.action==="interact")e.interact();else if(s.dataset.action==="close")e.close();else if(s.dataset.action==="start")e.start();else if(s.dataset.upgrade)e.upgrade(s.dataset.upgrade);else if(s.dataset.capstone){const[r,o]=s.dataset.capstone.split(":");e.capstone(r,o)}else s.dataset.furnish&&e.furnish(s.dataset.furnish);s.blur()}})}render(t){if(this.root.hidden=t.mode!=="home"||t.paused,this.root.hidden)return;const e=bd(t),n=t.profile;if(this.displayedCoins<0&&(this.displayedCoins=n.coins),this.displayedCoins!==n.coins){const h=n.coins-this.displayedCoins;this.displayedCoins+=Math.sign(h)*Math.min(Math.abs(h),Math.max(1,Math.abs(h)*.25)),Math.abs(n.coins-this.displayedCoins)<1&&(this.displayedCoins=n.coins)}const s=Math.round(this.displayedCoins),r=JSON.stringify([t.homePanel,e==null?void 0:e.id,s,t.profile.upgrades,t.profile.furniture,t.message]);if(r===this.key)return;this.key=r;const o=`<div class="shop-balance"><span class="coin-icon" aria-hidden="true">●</span><b>${s}</b> coins</div>`,a=`<div class="eyebrow">MEG'S ROOM</div><h2>Welcome home, Meg.</h2><p class="home-wallet">${o} · ${n.furniture.length}/6 cozy touches</p>`,c=`<button class="context-button" data-action="interact" ${e?"":"disabled"}>${e?`Visit ${e.name}`:"Explore your room"} <kbd>Enter</kbd></button>`;if(t.homePanel==="none"){const h=`<aside class="room-guide panel">${a}<p>Walk to the Job Board, Broom Workshop, or Decor Corner.</p>${c}</aside>`;this.root.innerHTML=`${h}${Mp(n)?'<div class="completion-ribbon">✦ Every little corner feels like home. Keep flying, little witch.</div>':""}`;return}let l="";t.homePanel==="jobs"&&(l='<div class="eyebrow">A NEW DELIVERY DAY</div><h2>The town is waiting.</h2><p>Choose your first delivery — pick the route that suits you. You have eight minutes to make deliveries and return home. Anything still in your satchel at nightfall will be lost.</p><button class="primary-button" data-action="start">See today’s deliveries →</button>'),t.homePanel==="brooms"&&(l=`<div class="eyebrow">THE BROOM STAND</div>${o}<h2>A little more magic.</h2><div class="shop-list">${Zo.map(h=>{const d=n.upgrades[h.id],u=d===0?60:120,f=`<button data-upgrade="${h.id}" ${d===2||n.coins<u?"disabled":""}><span><b>${h.name}</b><small>${h.description} · ${d}/2</small></span><strong>${d===2?"Mastered":n.coins<u?`Need ${u-n.coins} more`:`${u} coins`}</strong></button>`,g=_p(n,h.id),v=g?`<div class="capstone-cards">${g.map(p=>{const m=p.active?"Active":n.upgrades.capstones[h.id]?`Switch · ${p.cost} coins`:`Choose · ${p.cost} coins`,M=!p.active&&!p.affordable?`Need ${p.cost-n.coins} more`:"";return`<div class="capstone-card${p.active?" active":""}"><span><b>${p.name}</b><small>${p.description}</small></span><button data-capstone="${h.id}:${p.id}" ${p.active||!p.affordable?"disabled":""}>${p.active?"Active":M||m}</button></div>`}).join("")}</div>`:"";return f+v}).join("")}</div>`),t.homePanel==="decor"&&(l=`<div class="eyebrow">THE HOME CATALOGUE</div>${o}<h2>Make yourself at home.</h2><div class="shop-list">${ll.map(h=>`<button data-furnish="${h.id}" ${n.furniture.includes(h.id)||n.coins<h.cost?"disabled":""}><span><b>${h.name}</b><small>${h.description}</small></span><strong>${n.furniture.includes(h.id)?"At home":n.coins<h.cost?`Need ${h.cost-n.coins} more`:`${h.cost} coins`}</strong></button>`).join("")}</div>`),t.homePanel==="cat"&&(l='<div class="eyebrow">PUMPKIN’S CORNER</div><h2>A very good copilot.</h2><p>Pumpkin leans into your hand and purrs. The best part of any delivery day is coming home together.</p><div class="purr">♡ purr… purr… ♡</div>'),this.root.innerHTML=`<section class="menu-card panel room-menu">${l}<button class="secondary-button" data-action="close">Back to your room</button></section>`}}function Xf(i,t,e){return t?!1:i==="flight"||i==="tutorial"?!0:i==="home"&&e==="none"}function qf(i){return i.haloFade>0||i.descent!=null||i.drop!=null}class Fb{constructor(t){G(this,"root");this.root=document.createElement("div"),this.root.className="touch-controls",this.root.id="touch-controls",this.root.innerHTML='<div id="joystick" class="joystick" hidden><i></i></div>',t.append(this.root)}dispose(){this.root.remove()}render(t){this.root.hidden=qf(t)||!Xf(t.mode,t.paused,t.homePanel)}}class Yf{constructor(t,e,n,s,r,o,a){G(this,"root");G(this,"canvas");G(this,"slotId");G(this,"onExitToMenu");G(this,"state");G(this,"renderer");G(this,"input");G(this,"ui");G(this,"homeUI");G(this,"touchControls");G(this,"store");G(this,"audio");G(this,"saveBanner");G(this,"muted",sr());G(this,"coarsePointer");G(this,"accumulator",0);G(this,"lastFrame",0);G(this,"contextLost",!1);G(this,"bootReady");G(this,"saveKind");G(this,"saveMessage");G(this,"saveFyi");G(this,"fyiTimer");G(this,"savePeriod",0);G(this,"testing",!1);G(this,"disposed",!1);G(this,"bootTime");G(this,"onResize",()=>{this.renderer.resize(),this.draw(0)});G(this,"onVisibility",()=>{document.hidden&&performance.now()-this.bootTime>5e3&&this.pause("Welcome back. Ready to fly?")});G(this,"onBlur",()=>{this.input.clear(),this.state.mode!=="title"&&performance.now()-this.bootTime>5e3&&this.pause()});G(this,"onContextLost",t=>{t.preventDefault(),this.pause("The sky is taking a moment."),this.contextLost=!0});G(this,"onContextRestored",()=>{this.contextLost=!1,this.draw(0)});G(this,"onPageHide",()=>{this.persist(),this.bootReady=!1,this.audio.update(this.state,!0),this.store.release()});this.root=t,this.canvas=e,this.slotId=n,this.store=s,this.audio=o,this.onExitToMenu=a,this.state=r.state,this.renderer=r.renderer,this.bootReady=r.bootReady,this.saveKind=r.saveKind,this.saveMessage=r.saveMessage,this.saveFyi=r.saveFyi,this.bootTime=r.bootTime,this.coarsePointer=r.coarsePointer,this.testing=new URLSearchParams(location.search).get("test")==="1",window.__gameState=()=>this.state}enter(){this.setupUI(),this.setupInput(),this.audio.resetSnapshot(),this.saveFyi&&this.flashSaveFyi(this.saveFyi),Ep(this.slotId),this.draw(0)}exit(){var t,e,n,s;this.disposed=!0,this.audio.silence(),this.store.release(),clearTimeout(this.fyiTimer),(e=(t=this.input)==null?void 0:t.dispose)==null||e.call(t),(s=(n=this.touchControls)==null?void 0:n.dispose)==null||s.call(n),this.canvas.removeEventListener("webglcontextlost",this.onContextLost),this.canvas.removeEventListener("webglcontextrestored",this.onContextRestored),window.removeEventListener("resize",this.onResize),document.removeEventListener("visibilitychange",this.onVisibility),window.removeEventListener("blur",this.onBlur),window.removeEventListener("pagehide",this.onPageHide),this.root.innerHTML=""}update(t){this.disposed||this.advance(t)}render(){}setupInput(){this.touchControls=new Fb(this.root),this.input=new Nb(this.canvas,{hover:()=>{this.bootReady&&(Lm(this.state),this.persist(),this.draw(0))},interact:()=>{!this.bootReady||this.state.mode!=="home"||(Rh(this.state),this.persist(),this.draw(0))},pause:()=>{this.bootReady&&(this.state.mode==="home"&&this.state.homePanel!=="none"?(hh(this.state),this.persist(),this.draw(0)):this.state.paused?this.resume():this.pause())},fullscreen:()=>this.fullscreen()},()=>this.coarsePointer&&!qf(this.state)&&Xf(this.state.mode,this.state.paused,this.state.homePanel))}setupUI(){const t=this.root,e=this;this.ui=new Wp(t,{start(){var n,s;e.bootReady&&(e.audio.sfx("ui_click"),e.state.profile.tutorialDone?tc(e.state):Im(e.state),(n=e.input)==null||n.clear(),(s=document.activeElement)==null||s.blur(),e.persist(),e.draw(0))},pause:()=>{this.audio.sfx("ui_click"),this.pause()},resume:()=>{this.audio.sfx("ui_click"),this.resume()},unstuck(){var o;if(!e.bootReady)return;const n=e.state.player.position;let s=Te[0],r=1/0;for(const a of Te){const c=(a.position.x-n.x)**2+(a.position.z-n.z)**2;c<r&&(r=c,s=a)}e.state.player.position={x:s.position.x,y:s.position.y+5,z:s.position.z},e.state.player.velocity={x:0,y:0,z:0},e.state.player.speed=0,e.state.player.throttle=0,e.resume(),(o=e.input)==null||o.clear(),e.persist(),e.draw(0)},mute(){e.audio.sfx("ui_click"),e.muted=!e.muted,Ad(e.muted),e.audio.setMuted(e.muted),e.draw(0)},fullscreen:()=>{this.audio.sfx("ui_click"),this.fullscreen()},chooseJob(n){e.bootReady&&(e.audio.sfx("ui_click"),Fm(e.state,n),e.input.clear(),e.persist(),e.draw(0))},returnHome(){e.bootReady&&(e.audio.sfx("ui_click"),zm(e.state),e.input.clear(),e.persist(),e.draw(0))},nextDay(){e.bootReady&&(e.audio.sfx("ui_click"),tc(e.state),e.input.clear(),e.persist(),e.draw(0))}}),this.homeUI=new Ub(t,{interact(){e.bootReady&&(e.audio.sfx("ui_click"),Rh(e.state),e.input.clear(),e.persist(),e.draw(0))},close(){e.bootReady&&(e.audio.sfx("ui_click"),hh(e.state),e.input.clear(),e.persist(),e.draw(0))},start(){e.bootReady&&(e.audio.sfx("ui_click"),Um(e.state,e.testing?42:void 0),e.input.clear(),e.persist(),e.draw(0))},upgrade(n){e.bootReady&&(e.audio.sfx("ui_click"),xp(e.state,n),e.persist(),e.draw(0))},capstone(n,s){e.bootReady&&(e.audio.sfx("ui_click"),vp(e.state,n,s),e.persist(),e.draw(0))},furnish(n){e.bootReady&&(e.audio.sfx("ui_click"),yp(e.state,n),e.persist(),e.draw(0))}}),this.saveBanner=document.createElement("aside"),this.saveBanner.className="save-status",this.saveBanner.setAttribute("aria-live","polite"),t.append(this.saveBanner),this.saveBanner.addEventListener("click",n=>{const s=n.target.closest("button");(s==null?void 0:s.dataset.save)==="retry"&&this.reboot()}),window.addEventListener("resize",this.onResize),document.addEventListener("visibilitychange",this.onVisibility),window.addEventListener("blur",this.onBlur),this.canvas.addEventListener("webglcontextlost",this.onContextLost),this.canvas.addEventListener("webglcontextrestored",this.onContextRestored),window.addEventListener("pagehide",this.onPageHide)}pause(t="Take a little breather."){var e;rc(this.state,!0,t),(e=this.input)==null||e.clear(),this.accumulator=0,this.persist(),this.draw(0)}resume(){var t;!this.bootReady||this.contextLost||(rc(this.state,!1),(t=this.input)==null||t.clear(),this.accumulator=0,this.lastFrame=performance.now(),this.persist(),this.draw(0))}fullscreen(){var t,e,n;document.fullscreenElement?(t=document.exitFullscreen)==null||t.call(document):(n=(e=document.documentElement).requestFullscreen)==null||n.call(e).catch(()=>{})}flashSaveFyi(t,e=8e3){this.saveFyi=t,clearTimeout(this.fyiTimer),this.fyiTimer=setTimeout(()=>{this.saveFyi=null,this.draw(0)},e)}persist(){!this.bootReady||!this.store.canSave||this.store.save(this.state)||(this.saveKind="session",this.saveMessage=this.store.message)}async reboot(){var n;this.bootReady=!1,this.saveKind="loading",this.saveMessage="Opening your little world…",this.draw(0);let t;try{t=await this.store.acquire()}catch{t={kind:"readonly",message:"Save unavailable."}}const e=Wf(!1,this.store,t,this.renderer,this.coarsePointer);this.state=e.state,this.bootReady=e.bootReady,this.saveKind=e.saveKind,this.saveMessage=e.saveMessage,e.saveFyi&&this.flashSaveFyi(e.saveFyi),(n=this.input)==null||n.clear(),this.accumulator=0,this.draw(0)}draw(t){if(this.audio.update(this.state,!this.bootReady||this.contextLost),!this.renderer||this.contextLost)return;this.renderer.render(this.state,t);const e=kd(this.state)??Te[0];if(this.ui.render(this.state,{muted:this.muted,targetName:e.name,targetDistance:Math.hypot(e.position.x-this.state.player.position.x,e.position.z-this.state.player.position.z),targetBearing:Om(this.state.player.position,e.position,this.state.player.yaw),speed:this.state.player.speed,status:"",timeRemaining:this.state.run?Math.max(0,En-this.state.run.elapsed):void 0}),this.homeUI.render(this.state),this.touchControls.render(this.state),!this.bootReady){const s=document.querySelector(".home-interface");s&&(s.hidden=!0)}if(this.state.mode==="home"){const s=document.querySelector("#flight-hud");s&&(s.hidden=!0)}{const s=document.querySelector("#start-btn");s&&(s.disabled=!this.bootReady)}if(this.state.profile.tutorialDone){const s=document.querySelector("#start-btn");s&&(s.innerHTML="Come on in <span>→</span>")}{const s=document.querySelector("#next-day-btn");s&&(s.innerHTML="Back to your room <span>→</span>")}this.saveBanner.hidden=this.saveKind==="ready"&&this.saveFyi===null;const n=this.saveKind+this.saveMessage+(this.saveFyi??"");this.saveBanner.dataset.key!==n&&(this.saveBanner.dataset.key=n,this.saveBanner.textContent=this.saveKind==="ready"?this.saveFyi??"":this.saveMessage,this.saveKind==="readonly"&&this.saveBanner.insertAdjacentHTML("beforeend",'<br><button data-save="retry">Retry</button>'))}advance(t){if(!this.bootReady||this.state.paused||this.contextLost){this.accumulator=0,this.draw(0);return}const e=this.state.mode;for(this.accumulator+=Math.max(0,t)/1e3;this.accumulator+1e-10>=1/60;)Xm(this.state,this.input.sample(),1/60),this.accumulator-=1/60;this.savePeriod+=t,(this.savePeriod>=5e3||e!==this.state.mode)&&(this.persist(),this.savePeriod=0),this.draw(Math.min(t/1e3,.1))}frame(t){if(this.disposed)return;const e=this.lastFrame?Math.min(t-this.lastFrame,100):0;this.lastFrame=t,this.advance(e)}}const Es={master:.6,lullaby:{tempo:80,melodyVol:.05,padVol:.03,bassVol:.02},field:{tempo:126,melodyVol:.06,padVol:.025,bassVol:.035,drumVol:.04},signalVol:.05},fd=60,pd={master:.7,ui_click:{freq:1200,dur:.04,vol:.05},takeoff:{fromFreq:300,toFreq:900,dur:.5,vol:.08},landing:{freq:150,dur:.2,vol:.1},parcel_pickup:{notes:[523.25,659.25,783.99],dur:.1,vol:.07},delivery_complete:{notes:[523.25,659.25,783.99,1046.5],dur:.12,vol:.08},purchase:{freq:1318.5,dur:.15,vol:.06},hover_toggle:{freq:1568,dur:.08,vol:.04},nightfall_warning:{notes:[440,523.25,659.25],dur:.3,vol:.06},bump:{freq:90,dur:.15,vol:.1},purr:{freq:110,dur:.4,vol:.05}},md=[{bass:36,pad:[60,64,67,74]},{bass:43,pad:[55,59,62,69]},{bass:45,pad:[57,60,64,71]},{bass:41,pad:[53,57,60,67]},{bass:36,pad:[60,64,67,74]},{bass:43,pad:[55,59,62,69]},{bass:45,pad:[57,60,64,71]},{bass:41,pad:[53,57,60,67]}],gd=[60,62,64,65,67,69,71,72],xd=[{bass:36,pad:[48,52,55]},{bass:43,pad:[55,59,62]},{bass:45,pad:[57,60,64]},{bass:41,pad:[53,57,60]},{bass:36,pad:[48,52,55]},{bass:43,pad:[55,59,62]},{bass:41,pad:[53,57,60]},{bass:43,pad:[55,59,62]}],vd=[60,62,64,65,67,69,71,72],zb=66,Ob=[60,64,67,72],kb=[67,64,60,55];class Bb{constructor(){G(this,"context");G(this,"master");G(this,"ambience");G(this,"sfxBus");G(this,"ambienceSources",[]);G(this,"tones",new Set);G(this,"noiseSources",new Set);G(this,"muted",!0);G(this,"disposed",!1);G(this,"snapshot");G(this,"musicFilter");G(this,"currentTheme","lullaby");G(this,"lullabyNextNote",0);G(this,"lullabyBar",0);G(this,"fieldNextNote",0);G(this,"fieldBar",0);G(this,"lullabySeed",12345);G(this,"fieldSeed",67890);G(this,"lullabyDegree",2);G(this,"fieldDegree",4);G(this,"targetTheme","lullaby");G(this,"transitioning",!1);G(this,"transitionEndTime",0);G(this,"lastActive",!1);G(this,"operationPending",!1);G(this,"lastBumpTime",-10);G(this,"nightfallWarned",!1)}setMuted(t){this.disposed||(this.muted=t,!(!t&&!this.ensureContext())&&this.reconcile())}selectTheme(t){return t!==void 0&&t<=fd?"field":"lullaby"}resetSnapshot(){this.snapshot=void 0}silence(){this.lastActive=!1,!(this.muted||this.disposed||!this.context)&&this.reconcile()}update(t,e){var c;const n=this.snapshot,s=this.takeSnapshot(t);this.snapshot=s,this.lastActive=!(e||t.paused||typeof document<"u"&&document.hidden);const r=(c=t.run)==null?void 0:c.elapsed;if(this.targetTheme=this.selectTheme(r!==void 0?En-r:void 0),this.muted||this.disposed||!this.context||(this.reconcile(),!this.canPlay()||this.context.state!=="running"))return;const o=this.context;if(!this.transitioning&&this.targetTheme!==this.currentTheme&&(this.transitioning=!0,this.playSignal(this.currentTheme),this.transitionEndTime=o.currentTime+this.barDuration(this.currentTheme)),this.transitioning&&o.currentTime>=this.transitionEndTime&&(this.currentTheme=this.targetTheme,this.currentTheme==="lullaby"?this.enterLullaby():this.enterField(),this.transitioning=!1),this.transitioning||(this.currentTheme==="lullaby"&&this.playLullaby(),this.currentTheme==="field"&&this.playField()),!n)return;if(s.deliveries>n.deliveries&&this.sfx("delivery_complete"),s.coins<n.coins&&(s.upgrades!==n.upgrades||s.furniture!==n.furniture)&&this.sfx("purchase"),n.homePanel!=="cat"&&s.homePanel==="cat"&&this.sfx("purr"),!n.hasJob&&s.hasJob&&this.sfx("parcel_pickup"),s.hasJob&&s.speed>5&&n.speed<=5&&this.sfx("takeoff"),!n.returning&&s.returning&&this.sfx("landing"),n.hover!==s.hover&&!n.dropActive&&!s.dropActive&&this.sfx("hover_toggle"),s.hasJob&&n.speed>0&&s.speed<n.speed*.5){const l=this.context.currentTime;l-this.lastBumpTime>1&&(this.sfx("bump"),this.lastBumpTime=l)}s.elapsed<n.elapsed&&(this.nightfallWarned=!1);const a=En-fd;!this.nightfallWarned&&n.elapsed<a&&s.elapsed>=a&&(this.sfx("nightfall_warning"),this.nightfallWarned=!0)}dispose(){var t,e;if(!this.disposed){this.disposed=!0,this.lastActive=!1,this.clearAmbience();for(const n of this.tones){try{n.stop()}catch{}n.disconnect()}this.tones.clear();for(const n of this.noiseSources){try{n.stop()}catch{}n.disconnect()}this.noiseSources.clear(),(t=this.musicFilter)==null||t.disconnect(),this.musicFilter=void 0,(e=this.sfxBus)==null||e.disconnect(),this.sfxBus=void 0,this.context&&this.context.state!=="closed"&&this.context.close().catch(()=>{}),this.context=void 0,this.master=void 0}}sfx(t){if(this.muted||this.disposed||!this.context||this.context.state!=="running")return;const e=this.sfxBus??this.master,n=pd;switch(t){case"ui_click":this.tone(n.ui_click.freq,n.ui_click.dur,n.ui_click.vol,"sine",0,e);break;case"takeoff":this.noiseSweep(n.takeoff.fromFreq,n.takeoff.toFreq,n.takeoff.dur,n.takeoff.vol,0,e);break;case"landing":this.tone(n.landing.freq,n.landing.dur,n.landing.vol,"sine",0,e),this.noiseSweep(200,100,.2,n.landing.vol,0,e);break;case"parcel_pickup":n.parcel_pickup.notes.forEach((s,r)=>this.tone(s,n.parcel_pickup.dur,n.parcel_pickup.vol,"triangle",r*.06,e));break;case"delivery_complete":n.delivery_complete.notes.forEach((s,r)=>this.tone(s,n.delivery_complete.dur,n.delivery_complete.vol,"triangle",r*.1,e));break;case"purchase":this.tone(n.purchase.freq,n.purchase.dur,n.purchase.vol,"sine",0,e);break;case"hover_toggle":this.tone(n.hover_toggle.freq,n.hover_toggle.dur,n.hover_toggle.vol,"sine",0,e);break;case"nightfall_warning":n.nightfall_warning.notes.forEach((s,r)=>this.tone(s,n.nightfall_warning.dur,n.nightfall_warning.vol,"sine",r*.15,e));break;case"bump":this.tone(n.bump.freq,n.bump.dur,n.bump.vol,"sine",0,e);break;case"purr":this.tone(110,.48,.055,"sine",0,e),this.tone(164.81,.42,.035,"sine",.08,e);break}}debugState(){var t;return{context:((t=this.context)==null?void 0:t.state)??"unavailable",muted:this.muted,activeTones:this.tones.size+this.noiseSources.size}}enterLullaby(){this.lullabyBar=0,this.lullabyDegree=2,this.context&&(this.lullabyNextNote=this.context.currentTime)}enterField(){this.fieldBar=0,this.fieldDegree=4,this.fieldSeed=67890,this.context&&(this.fieldNextNote=this.context.currentTime)}barDuration(t){return t==="lullaby"?60/Es.lullaby.tempo*3:60/Es.field.tempo*6}playSignal(t){if(!this.context)return;const e=t==="lullaby"?Ob:kb,s=this.barDuration(t)/e.length;for(let r=0;r<e.length;r++)this.tone(this.freq(e[r]),s*.9,Es.signalVol,"sine",r*s)}playLullaby(){const t=this.context;if(!t||t.currentTime<this.lullabyNextNote)return;const e=Es.lullaby,n=60/e.tempo,s=n*3,r=Math.max(this.lullabyNextNote,t.currentTime),o=r-t.currentTime,a=md[this.lullabyBar%md.length],c=this.ensureFilter();for(const l of a.pad)this.tone(this.freq(l),s,e.padVol,"sine",o,c);this.tone(this.freq(a.bass),n*2.5,e.bassVol,"sine",o),this.lullabyBar%4===0&&(this.lullabyDegree=2);for(let l=0;l<3;l++){const h=this.nextLullabyRandom(),d=h<.3?0:h<.55?1:h<.75?-1:h<.9?2:-2;this.lullabyDegree=Math.min(gd.length-1,Math.max(0,this.lullabyDegree+d)),this.tone(this.freq(gd[this.lullabyDegree]),n*.9,e.melodyVol,"sine",o+l*n)}this.lullabyBar++,this.lullabyNextNote=r+s}nextLullabyRandom(){const t=this.lullabySeed+1831565813|0;this.lullabySeed=t;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}playField(){const t=this.context;if(!t||t.currentTime<this.fieldNextNote)return;const e=Es.field,n=60/e.tempo,s=n*6,r=Math.max(this.fieldNextNote,t.currentTime),o=r-t.currentTime,a=xd[this.fieldBar%xd.length],c=this.ensureFilter();for(const d of a.pad)this.tone(this.freq(d),s/2,e.padVol,"sine",o,c);const l=[1,1,1.5,1,1,1.5];for(let d=0;d<6;d++)this.tone(this.freq(a.bass)*l[d],n*.9,e.bassVol,"triangle",o+d*n);this.tone(82,.18,e.drumVol,"sine",o),this.tone(82,.18,e.drumVol,"sine",o+3*n);for(const d of[1,2,4,5])this.noiseSweep(7e3,7e3,.04,e.drumVol,o+d*n);this.fieldBar%4===0&&(this.fieldDegree=4);const h=[0,1,3,4];for(const d of h){const u=this.nextFieldRandom(),f=u<.2?0:u<.4?3:u<.55?4:u<.75?1:u<.9?-1:2;this.fieldDegree=Math.min(vd.length-1,Math.max(0,this.fieldDegree+f));let g=vd[this.fieldDegree];this.fieldBar%8===2&&d===1&&(g=zb),this.tone(this.freq(g),n*1.8,e.melodyVol,"sine",o+d*n)}this.fieldBar++,this.fieldNextNote=r+s}nextFieldRandom(){const t=this.fieldSeed+1831565813|0;this.fieldSeed=t;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}freq(t){return 440*Math.pow(2,(t-69)/12)}ensureFilter(){const t=this.context,e=this.master;if(!(!t||!e)){if(!this.musicFilter){const n=t.createBiquadFilter();n.type="lowpass",n.frequency.value=1800,n.connect(e),this.musicFilter=n}return this.musicFilter}}ensureContext(){if(this.context)return this.context;const t=typeof window>"u"?void 0:window.AudioContext||window.webkitAudioContext;if(t)try{const e=new t,n=e.createGain();n.gain.value=1e-4,n.connect(e.destination);const s=e.createGain();return s.gain.value=pd.master,s.connect(n),this.context=e,this.master=n,this.sfxBus=s,e}catch{return}}canPlay(){return!this.disposed&&!this.muted&&this.lastActive}reconcile(){const t=this.context;if(!t||t.state==="closed")return;const e=this.canPlay();if(e&&t.state==="running"){this.startAmbience();return}if(!e&&this.master){const s=t.currentTime;this.master.gain.cancelScheduledValues(s),this.master.gain.setTargetAtTime(1e-4,s,.025)}if(this.operationPending||(e?t.state!=="suspended":t.state!=="running"))return;this.operationPending=!0,(e?t.resume.bind(t):t.suspend.bind(t))().catch(()=>{}).then(()=>{this.operationPending=!1,this.canPlay()&&t.state==="running"&&this.startAmbience(),this.reconcile()})}startAmbience(){const t=this.context,e=this.master;if(!t||!e||t.state!=="running"||!this.canPlay())return;const n=t.currentTime;if(e.gain.cancelScheduledValues(n),e.gain.setTargetAtTime(Es.master,n,.08),this.ambience)return;const s=t.createGain(),r=t.createOscillator(),o=t.createOscillator(),a=t.createGain();s.gain.value=.035,s.connect(e),r.type="sine",r.frequency.value=82,o.type="sine",o.frequency.value=.09,a.gain.value=11,o.connect(a).connect(r.frequency),r.connect(s),r.start(),o.start(),this.ambience=s,this.ambienceSources=[r,o]}clearAmbience(){var t;for(const e of this.ambienceSources){try{e.stop()}catch{}e.disconnect()}this.ambienceSources=[],(t=this.ambience)==null||t.disconnect(),this.ambience=void 0}tone(t,e,n,s,r=0,o){const a=this.context,c=this.master;if(!a||!c||a.state!=="running"||!this.canPlay())return;const l=a.currentTime+r,h=a.createOscillator(),d=a.createGain();h.type=s,h.frequency.value=t,d.gain.setValueAtTime(1e-4,l),d.gain.exponentialRampToValueAtTime(n,l+.018),d.gain.exponentialRampToValueAtTime(1e-4,l+e),h.connect(d).connect(o??c),this.tones.add(h),h.onended=()=>{this.tones.delete(h),h.disconnect(),d.disconnect()},h.start(l),h.stop(l+e+.03)}noiseSweep(t,e,n,s=.08,r=0,o){const a=this.context,c=this.master;if(!a||!c||a.state!=="running"||!this.canPlay())return;const l=a.currentTime+r,h=Math.floor(a.sampleRate*n),d=a.createBuffer(1,h,a.sampleRate),u=d.getChannelData(0);for(let p=0;p<h;p++)u[p]=Math.random()*2-1;const f=a.createBufferSource();f.buffer=d;const g=a.createBiquadFilter();g.type="bandpass",g.frequency.setValueAtTime(t,l),g.frequency.exponentialRampToValueAtTime(e,l+n);const v=a.createGain();v.gain.setValueAtTime(1e-4,l),v.gain.exponentialRampToValueAtTime(s,l+.05),v.gain.exponentialRampToValueAtTime(1e-4,l+n),f.connect(g).connect(v).connect(o??c),this.noiseSources.add(f),f.onended=()=>{this.noiseSources.delete(f),f.disconnect(),g.disconnect(),v.disconnect()},f.start(l),f.stop(l+n+.05)}takeSnapshot(t){var s,r,o,a;const e=t.profile.upgrades,n=Object.keys(e.capstones).sort().map(c=>`${c}=${e.capstones[c]}`).join(",");return{deliveries:Math.max(t.profile.deliveries,((s=t.run)==null?void 0:s.deliveries)??0),coins:t.profile.coins,upgrades:`${e.speed}:${e.handling}:${e.braking}:${e.capacity}:${e.glide}:${n}`,furniture:t.profile.furniture.join("|"),homePanel:t.homePanel,hasJob:!!((r=t.run)!=null&&r.job),speed:t.player.speed,returning:!!((o=t.run)!=null&&o.returning),hover:t.player.hover,elapsed:((a=t.run)==null?void 0:a.elapsed)??0,dropActive:!!t.drop}}}const _d=document.querySelector("#game"),ur=document.querySelector("#app"),Vi=new rp,Ns=new Bb;window.__audio=Ns;window.addEventListener("pagehide",()=>Ns.dispose());let Ka=0;function $f(i){requestAnimationFrame($f);try{const t=Ka?Math.min(i-Ka,100):0;Ka=i;const e=Vi.active;e instanceof Yf?e.frame(i):(Vi.update(t),Vi.render())}catch(t){console.error("Frame error:",t)}}const Hb=()=>new Promise(i=>requestAnimationFrame(()=>requestAnimationFrame(()=>i()))),Gb='<main class="compatibility"><h1>A little more sky, please.</h1><p>Meg needs a browser with WebGL 2 and hardware acceleration. Try a current browser with graphics acceleration enabled.</p></main>';let Ja=!1;async function Zf(i,t){if(!Ja){Ja=!0;try{const e=new Ym(ur,Ns);Vi.show(e),await Hb(),e.setStage("Opening save…");const n=new Up;n.setSlot(i);let s;try{s=await n.acquire()}catch{s={kind:"readonly",message:"Save unavailable."}}let r;try{r=await Db(_d,t,n,s,a=>e.setStage(a))}catch{ur.innerHTML=Gb;return}const o=new Yf(ur,_d,i,n,r,Ns,()=>Vi.show(new Vd(ur,Zf,Ns)));Vi.show(o)}finally{Ja=!1}}}Vi.show(new Vd(ur,Zf,Ns));requestAnimationFrame($f);
