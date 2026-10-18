import type { GameState } from './types';
import { BROOM_TRACKS, FURNITURE, capstoneOptions, nearbyStation, isComplete, type UpgradeTrack } from './home';
interface HomeActions { interact():void; close():void; start():void; upgrade(track:UpgradeTrack):void; capstone(track:string,id:string):void; furnish(id:string):void }
export class HomeUI {
  private root:HTMLElement;
  private key='';
  private displayedCoins=-1;
  constructor(parent:HTMLElement,private actions:HomeActions) {
    this.root=document.createElement('section');this.root.className='home-interface';parent.append(this.root);
    this.root.addEventListener('click',event=>{
      const b=(event.target as HTMLElement).closest<HTMLButtonElement>('button');if(!b)return;
      if(b.dataset.action==='interact')actions.interact();
      else if(b.dataset.action==='close')actions.close();
      else if(b.dataset.action==='start')actions.start();
      else if(b.dataset.upgrade)actions.upgrade(b.dataset.upgrade as UpgradeTrack);
      else if(b.dataset.capstone){const [track,id]=b.dataset.capstone.split(':');actions.capstone(track,id);}
      else if(b.dataset.furnish)actions.furnish(b.dataset.furnish);
      b.blur();
    });
  }
  render(state:GameState) {
    this.root.hidden=state.mode!=='home'||state.paused;
    if(this.root.hidden)return;
    const station=nearbyStation(state);
    const p=state.profile;
    // Animated coin balance: tween toward actual over ~0.3s for purchases.
    if(this.displayedCoins<0)this.displayedCoins=p.coins;
    if(this.displayedCoins!==p.coins){
      const diff=p.coins-this.displayedCoins;
      this.displayedCoins+=Math.sign(diff)*Math.min(Math.abs(diff),Math.max(1,Math.abs(diff)*0.25));
      if(Math.abs(p.coins-this.displayedCoins)<1)this.displayedCoins=p.coins;
    }
    const shownCoins=Math.round(this.displayedCoins);
    const key=JSON.stringify([state.homePanel,station?.id,shownCoins,state.profile.upgrades,state.profile.furniture,state.message]);
    if(key===this.key)return;this.key=key;
    const balance=`<div class="shop-balance"><span class="coin-icon" aria-hidden="true">●</span><b>${shownCoins}</b> coins</div>`;
    const wallet=`<div class="eyebrow">MEG'S ROOM</div><h2>Welcome home, Meg.</h2><p class="home-wallet">${balance} · ${p.furniture.length}/6 cozy touches</p>`;
    const actionBtn=`<button class="context-button" data-action="interact" ${station?'':'disabled'}>${station?`Visit ${station.name}`:'Explore your room'} <kbd>Enter</kbd></button>`;
    if(state.homePanel==='none') {
      const guide=`<aside class="room-guide panel">${wallet}<p>Walk to the Job Board, Broom Workshop, or Decor Corner.</p>${actionBtn}</aside>`;
      this.root.innerHTML=`${guide}${isComplete(p)?'<div class="completion-ribbon">✦ Every little corner feels like home. Keep flying, little witch.</div>':''}`;
      return;
    }
    let content='';
    if(state.homePanel==='jobs') content='<div class="eyebrow">A NEW DELIVERY DAY</div><h2>The town is waiting.</h2><p>Choose your first delivery — pick the route that suits you. You have eight minutes to make deliveries and return home. Anything still in your satchel at nightfall will be lost.</p><button class="primary-button" data-action="start">See today’s deliveries →</button>';
    if(state.homePanel==='brooms') content=`<div class="eyebrow">THE BROOM STAND</div>${balance}<h2>A little more magic.</h2><div class="shop-list">${BROOM_TRACKS.map(track=>{
      const level=p.upgrades[track.id],cost=level===0?60:120;
      const row=`<button data-upgrade="${track.id}" ${level===2||p.coins<cost?'disabled':''}><span><b>${track.name}</b><small>${track.description} · ${level}/2</small></span><strong>${level===2?'Max':cost}</strong></button>`;
      const cards=capstoneOptions(p,track.id);
      const capstones=cards?`<div class="capstone-branch">${cards.map(c=>
        `<div class="capstone-card${c.active?' active':''}"><span><b>${c.name}</b><small>${c.description}</small></span><button data-capstone="${track.id}:${c.id}" ${c.active||!c.affordable?'disabled':''}>${c.active?'Active':c.cost}</button></div>`
      ).join('')}</div>`:'';
      return row+capstones;
    }).join('')}</div>`;
    if(state.homePanel==='decor') content=`<div class="eyebrow">THE HOME CATALOGUE</div>${balance}<h2>Make yourself at home.</h2><div class="shop-list">${FURNITURE.map(item=>`<button data-furnish="${item.id}" ${p.furniture.includes(item.id)||p.coins<item.cost?'disabled':''}><span><b>${item.name}</b><small>${item.description}</small></span><strong>${p.furniture.includes(item.id)?'At home':p.coins<item.cost?`Need ${item.cost-p.coins} more`:`${item.cost} coins`}</strong></button>`).join('')}</div>`;
    if(state.homePanel==='cat') content='<div class="eyebrow">PUMPKIN’S CORNER</div><h2>A very good copilot.</h2><p>Pumpkin leans into your hand and purrs. The best part of any delivery day is coming home together.</p><div class="purr">♡ purr… purr… ♡</div>';
    this.root.innerHTML=`<section class="menu-card panel room-menu">${content}<button class="secondary-button" data-action="close">Back to your room</button></section>`;
  }
}
