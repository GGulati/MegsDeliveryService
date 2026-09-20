import type { GameState } from './types';
import { FURNITURE, nearbyStation, isComplete } from './home';
interface HomeActions { interact():void; close():void; start():void; upgrade(track:'speed'|'handling'|'braking'):void; furnish(id:string):void }
export class HomeUI {
  private root:HTMLElement;
  private key='';
  constructor(parent:HTMLElement,private actions:HomeActions) {
    this.root=document.createElement('section');this.root.className='home-interface';parent.append(this.root);
    this.root.addEventListener('click',event=>{
      const b=(event.target as HTMLElement).closest<HTMLButtonElement>('button');if(!b)return;
      if(b.dataset.action==='interact')actions.interact();
      else if(b.dataset.action==='close')actions.close();
      else if(b.dataset.action==='start')actions.start();
      else if(b.dataset.upgrade)actions.upgrade(b.dataset.upgrade as 'speed'|'handling'|'braking');
      else if(b.dataset.furnish)actions.furnish(b.dataset.furnish);
      b.blur();
    });
  }
  render(state:GameState) {
    this.root.hidden=state.mode!=='home'||state.paused;
    if(this.root.hidden)return;
    const station=nearbyStation(state);
    const key=JSON.stringify([state.homePanel,station?.id,state.profile.coins,state.profile.upgrades,state.profile.furniture,state.message]);
    if(key===this.key)return;this.key=key;
    const p=state.profile;
    const wallet=`<div class="eyebrow">MEG'S ROOM</div><h2>Welcome home, Meg.</h2><p class="home-wallet">${p.coins} coins saved · ${p.furniture.length}/6 cozy touches</p>`;
    const actionBtn=`<button class="context-button" data-action="interact" ${station?'':'disabled'}>${station?`Visit ${station.name}`:'Explore your room'} <kbd>Enter</kbd></button>`;
    if(state.homePanel==='none') {
      const guide=`<aside class="room-guide panel">${wallet}<p>Walk to the Job Board, Broom Workshop, or Decor Corner.</p>${actionBtn}</aside>`;
      this.root.innerHTML=`${guide}${isComplete(p)?'<div class="completion-ribbon">✦ Every little corner feels like home. Keep flying, little witch.</div>':''}`;
      return;
    }
    let content='';
    if(state.homePanel==='jobs') content='<div class="eyebrow">A NEW DELIVERY DAY</div><h2>The town is waiting.</h2><p>Take your first parcel to Harbor Cafe. You have eight minutes to make deliveries and return home. Anything still in your satchel at nightfall will be lost.</p><button class="primary-button" data-action="start">Pack a parcel & take off →</button>';
    if(state.homePanel==='brooms') content=`<div class="eyebrow">THE BROOM STAND · ${p.coins} COINS</div><h2>A little more magic.</h2><div class="shop-list">${(['speed','handling','braking'] as const).map(track=>{
      const level=p.upgrades[track],cost=level===0?60:120;
      const description={speed:'Fly 10% faster per level',handling:'Turn 20% more responsively per level',braking:'Slow down 20% faster per level'}[track];
      return `<button data-upgrade="${track}" ${level===2||p.coins<cost?'disabled':''}><span><b>${track[0].toUpperCase()+track.slice(1)}</b><small>${description} · ${level}/2</small></span><strong>${level===2?'Mastered':`${cost} coins`}</strong></button>`;
    }).join('')}</div>`;
    if(state.homePanel==='decor') content=`<div class="eyebrow">THE HOME CATALOGUE · ${p.coins} COINS</div><h2>Make yourself at home.</h2><div class="shop-list">${FURNITURE.map(item=>`<button data-furnish="${item.id}" ${p.furniture.includes(item.id)||p.coins<item.cost?'disabled':''}><span><b>${item.name}</b><small>${item.description}</small></span><strong>${p.furniture.includes(item.id)?'At home':`${item.cost} coins`}</strong></button>`).join('')}</div>`;
    if(state.homePanel==='cat') content='<div class="eyebrow">PUMPKIN’S CORNER</div><h2>A very good copilot.</h2><p>Pumpkin leans into your hand and purrs. The best part of any delivery day is coming home together.</p><div class="purr">♡ purr… purr… ♡</div>';
    this.root.innerHTML=`<section class="menu-card panel room-menu">${content}<button class="secondary-button" data-action="close">Back to your room</button></section>`;
  }
}
