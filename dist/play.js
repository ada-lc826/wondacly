import { decorateIcons } from './icons.js';

export function setupPlay(initialLanguage){
 let lang=initialLanguage;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const words=['curiosity','explore','create','wonder','ocean','model','garden','discover','library','orbit','paper','science','dream','london','camera','future','story','imagine','pattern','build','sunlight','travel','signal','island','beyond','play','quiet','motion','learn','world'];
 const portraits=[
  ['sunset','The world is a good teacher.','世界是个好老师。','Emilie by the coast at sunset','日落海岸边的 Emilie'],
  ['camera','A different way of seeing.','换个视角，继续观察。','Emilie holding a film camera','手持胶片相机的 Emilie'],
  ['library','Always one more chapter.','永远有下一章。','Emilie among bookshelves','书架之间的 Emilie'],
  ['imperial','A new city. A new chapter.','新城市，新的一章。','Emilie at Imperial College London','帝国理工学院前的 Emilie'],
  ['coast','Make room for a little sea air.','给海风留一点位置。','Emilie by the sea','海边的 Emilie'],
  ['museum','In very good company.','和历史打个照面。','Emilie in a museum','博物馆里的 Emilie'],
  ['red','A little color. A little tradition.','一点色彩，一点传统。','Emilie beside red calligraphy','红色书法展板前的 Emilie'],
  ['graduation','On to the next adventure.','走向下一段旅程。','Emilie at graduation','毕业典礼上的 Emilie'],
  ['speech','An idea is worth sharing.','把想法说出来。','Emilie speaking at an event','正在发言的 Emilie']
 ];
 let portrait=0;
 const heroImage=document.querySelector('#hero-next img');
 function setPortrait(index,animate=true){
  portrait=(index+portraits.length)%portraits.length;
  const p=portraits[portrait];
  heroImage.src=`./assets/${p[0]}-1280.webp`;
  heroImage.srcset=`./assets/${p[0]}-640.webp 640w, ./assets/${p[0]}-1280.webp 1280w`;
  heroImage.alt=p[lang==='zh'?4:3];
  heroImage.style.objectPosition=p[0]==='library'?'50% 40%':p[0]==='camera'?'40% 50%':'50% 50%';
  document.querySelector('#hero-caption').textContent=p[lang==='zh'?2:1];
  document.querySelector('#hero-counter').textContent=`${String(portrait+1).padStart(2,'0')} / 09`;
  if(animate&&!reduced.matches){heroImage.getAnimations().forEach(a=>a.cancel());heroImage.animate([{opacity:.3,transform:'scale(1.025)'},{opacity:1,transform:'scale(1)'}],{duration:450,easing:'ease-out'});}
 }
 document.querySelector('#hero-next').addEventListener('click',()=>setPortrait(portrait+1));
 document.querySelector('#hero-prev').addEventListener('click',()=>setPortrait(portrait-1));
 document.querySelector('#hero-shuffle').addEventListener('click',()=>setPortrait(portrait+1+Math.floor(Math.random()*(portraits.length-1))));
 let mood='garden';try{const saved=localStorage.getItem('emilie-mood');if(['garden','ocean','rose'].includes(saved))mood=saved;}catch{}
 function setMood(value){mood=value;document.documentElement.dataset.mood=mood;document.querySelectorAll('[data-mood].mood-swatch').forEach(el=>el.setAttribute('aria-pressed',String(el.dataset.mood===mood)));try{localStorage.setItem('emilie-mood',mood);}catch{}}
 document.querySelectorAll('.mood-swatch').forEach(el=>el.addEventListener('click',()=>setMood(el.dataset.mood)));setMood(mood);

 const tabs=[...document.querySelectorAll('[data-play-tab]')];
 function selectTab(tab){
  tabs.forEach(el=>{el.setAttribute('aria-selected',String(el===tab));el.tabIndex=el===tab?0:-1;document.getElementById(el.getAttribute('aria-controls')).hidden=el!==tab;});
  if(tab.dataset.playTab==='desk')placeCards(false);
 }
 tabs.forEach((tab,i)=>{
  tab.addEventListener('click',()=>selectTab(tab));
  tab.addEventListener('keydown',event=>{if(['ArrowLeft','ArrowRight','Home','End'].includes(event.key)){event.preventDefault();const target=event.key==='Home'?tabs[0]:event.key==='End'?tabs.at(-1):tabs[(i+(event.key==='ArrowRight'?1:tabs.length-1))%tabs.length];selectTab(target);target.focus();}});
 });

 const desk=document.querySelector('#postcard-desk');
 const cards=[...desk.querySelectorAll('.desk-card')];
 function labelCard(card,index){
  const flipped=card.getAttribute('aria-pressed')==='true';
  const front=card.querySelector('.postcard-front'),back=card.querySelector('.postcard-back');
  front.setAttribute('aria-hidden',String(flipped));back.setAttribute('aria-hidden',String(!flipped));
  const memory=back.querySelector('strong').textContent;
  card.setAttribute('aria-label',lang==='zh'?`第 ${index+1} 张照片。${flipped?memory+'。':''}点击翻面，方向键移动。`:`Postcard ${index+1}. ${flipped?memory+'. ':''}Tap to flip; arrow keys to move.`);
 }
 const positions=cards.map(()=>({x:0,y:0}));
 let z=3,drag=null,laidOut=false;
 const starts=[[.14,.49,-9],[.48,.17,7],[.82,.56,-4]];
 function moveCard(index,x,y){const card=cards[index];positions[index]={x:Math.max(0,Math.min(x,desk.clientWidth-card.offsetWidth)),y:Math.max(0,Math.min(y,desk.clientHeight-card.offsetHeight))};card.style.left=positions[index].x+'px';card.style.top=positions[index].y+'px';}
 function placeCards(reset){
  if(!desk.clientWidth)return;
  cards.forEach((card,index)=>{if(reset||!laidOut){const [x,y,rotation]=starts[index];moveCard(index,x*(desk.clientWidth-card.offsetWidth),y*(desk.clientHeight-card.offsetHeight));card.style.setProperty('--rotation',rotation+'deg');card.setAttribute('aria-pressed','false');card.style.zIndex=String(index+1);}else moveCard(index,positions[index].x,positions[index].y);});
  cards.forEach(labelCard);laidOut=true;
 }
 cards.forEach((card,index)=>{
  let suppressClick=false;
  card.addEventListener('pointerdown',event=>{if(event.button!==0)return;drag={index,id:event.pointerId,startX:event.clientX,startY:event.clientY,x:positions[index].x,y:positions[index].y,moved:false};card.setPointerCapture(event.pointerId);card.style.zIndex=String(++z);card.classList.add('dragging');});
  card.addEventListener('pointermove',event=>{if(!drag||drag.index!==index||drag.id!==event.pointerId)return;const dx=event.clientX-drag.startX,dy=event.clientY-drag.startY;if(Math.hypot(dx,dy)>5)drag.moved=true;moveCard(index,drag.x+dx,drag.y+dy);});
  function endDrag(){if(!drag||drag.index!==index)return;suppressClick=drag.moved;drag=null;card.classList.remove('dragging');}
  card.addEventListener('pointerup',endDrag);card.addEventListener('pointercancel',()=>{endDrag();suppressClick=false;});card.addEventListener('lostpointercapture',endDrag);
  card.addEventListener('click',()=>{if(suppressClick){suppressClick=false;return;}const flipped=card.getAttribute('aria-pressed')!=='true';card.setAttribute('aria-pressed',String(flipped));card.style.zIndex=String(++z);document.querySelector('#desk-status').textContent=flipped?(lang==='zh'?'照片已翻到背面。':'Postcard turned over.'):(lang==='zh'?'照片已翻回正面。':'Postcard turned to the front.');});
  card.addEventListener('click',()=>labelCard(card,index));
  card.addEventListener('keydown',event=>{const deltas={ArrowLeft:[-12,0],ArrowRight:[12,0],ArrowUp:[0,-12],ArrowDown:[0,12]};if(deltas[event.key]){event.preventDefault();suppressClick=false;const [dx,dy]=deltas[event.key];moveCard(index,positions[index].x+dx,positions[index].y+dy);card.style.zIndex=String(++z);}else if(event.key==='Enter'||event.key===' ')suppressClick=false;});
 });
 document.querySelector('#desk-reset').addEventListener('click',()=>{placeCards(true);document.querySelector('#desk-status').textContent=lang==='zh'?'照片桌已整理。':'Postcard desk reset.';});
 const resize=new ResizeObserver(()=>placeCards(false));resize.observe(desk);placeCards(true);

 const input=document.querySelector('#sprint-input');
 let started=null,timer=null,finished=false,wordIndex=0,correct=0,attempts=0,characters=0,best=0;
 try{const saved=Number(localStorage.getItem('emilie-sprint-best'));if(Number.isFinite(saved)&&saved>=0&&saved<1000)best=saved;}catch{}
 const seconds=20;
 function nextWord(){document.querySelector('#sprint-word').textContent=words[wordIndex%words.length];document.querySelector('#sprint-next').textContent=[1,2,3].map(i=>words[(wordIndex+i)%words.length]).join(' · ');}
 function feedback(kind){const messages={ready:['Your first letter starts the clock.','输入第一个字母开始计时。'],running:['Keep going. Find your rhythm.','继续，找到你的节奏。'],incorrect:['Almost! Try that word again.','差一点，再试试这个单词。']};if(messages[kind])document.querySelector('#sprint-feedback').textContent=messages[kind][lang==='zh'?1:0];}
 function finish(){
  if(finished)return;finished=true;clearInterval(timer);timer=null;input.disabled=true;input.classList.remove('invalid');
  const wpm=Math.round((characters/5)/(seconds/60)),accuracy=attempts?Math.round(correct/attempts*100):0;
  best=Math.max(best,wpm);try{localStorage.setItem('emilie-sprint-best',String(best));}catch{}
  document.querySelector('#sprint-time').textContent='0';document.querySelector('#sprint-progress').style.width='0%';document.querySelector('#sprint-best').textContent=String(best);
  document.querySelector('#sprint-feedback').textContent=lang==='zh'?`${wpm} WPM · 单词正确率 ${accuracy}%`:`${wpm} WPM · ${accuracy}% word accuracy`;
  document.querySelector('#sprint-word').textContent=`${wpm} WPM`;
  document.querySelector('#sprint-next').textContent=lang==='zh'?'这一局，找到你的节奏。':'A little more in your flow.';
  document.querySelector('.sprint-game').classList.add('finished');
 }
 function tick(){if(started===null||finished)return;const remaining=Math.max(0,seconds-(performance.now()-started)/1000);document.querySelector('#sprint-time').textContent=String(Math.ceil(remaining));document.querySelector('#sprint-progress').style.width=(remaining/seconds*100)+'%';if(!remaining)finish();}
 function reset(focus=false){clearInterval(timer);timer=null;started=null;finished=false;wordIndex=0;correct=0;attempts=0;characters=0;input.disabled=false;input.value='';input.classList.remove('invalid');document.querySelector('#sprint-time').textContent=String(seconds);document.querySelector('#sprint-score').textContent='0';document.querySelector('#sprint-best').textContent=String(best);document.querySelector('#sprint-progress').style.width='100%';document.querySelector('.sprint-game').classList.remove('finished');nextWord();feedback('ready');if(focus)input.focus();}
 function submit(){
  tick();if(finished||!input.value.trim())return;
  attempts++;
  if(input.value.trim().toLowerCase()===words[wordIndex%words.length]){correct++;characters+=words[wordIndex%words.length].length+1;wordIndex++;document.querySelector('#sprint-score').textContent=String(correct);input.value='';input.classList.remove('invalid');nextWord();feedback('running');}
  else{input.classList.add('invalid');feedback('incorrect');}
 }
 input.maxLength=32;
 input.addEventListener('input',()=>{if(started===null&&input.value.trim()&&!finished){started=performance.now();timer=setInterval(tick,100);feedback('running');}input.classList.remove('invalid');if(/\s$/.test(input.value))submit();});
 input.addEventListener('keydown',event=>{if((event.key===' '||event.key==='Enter')&&!event.isComposing){event.preventDefault();submit();}});
 input.addEventListener('change',tick);
 document.addEventListener('visibilitychange',tick);
 document.querySelector('#sprint-reset').addEventListener('click',()=>reset(true));
 function localize(){
  setPortrait(portrait,false);
  document.querySelector('#hero-next').setAttribute('aria-label',lang==='zh'?'看看另一面的 Emilie':'Show another side of Emilie');
  document.querySelector('#hero-prev').setAttribute('aria-label',lang==='zh'?'上一张照片':'Previous portrait');
  document.querySelector('#hero-shuffle').setAttribute('aria-label',lang==='zh'?'随机一张照片':'Shuffle portrait');
  input.placeholder=lang==='zh'?'从这里开始输入…':'Type here to begin…';
  document.querySelector('#sprint-reset').setAttribute('aria-label',lang==='zh'?'重新开始打字游戏':'Restart typing game');
  cards.forEach(labelCard);
  if(finished)document.querySelector('#sprint-next').textContent=lang==='zh'?'这一局，找到你的节奏。':'A little more in your flow.';
  if(finished){const wpm=Math.round((characters/5)/(seconds/60)),accuracy=attempts?Math.round(correct/attempts*100):0;document.querySelector('#sprint-feedback').textContent=lang==='zh'?`${wpm} WPM · 单词正确率 ${accuracy}%`:`${wpm} WPM · ${accuracy}% word accuracy`;}else feedback(started===null?'ready':'running');
 }
 reset();localize();
 document.addEventListener('portfolio:language',event=>{lang=event.detail.language;localize();decorateIcons();});

 // Desktop-only depth follows the pointer; mobile visitors get explicit controls.
 if(matchMedia('(hover: hover) and (pointer: fine)').matches&&!reduced.matches){
  document.querySelectorAll('.project-cover').forEach(card=>{let frame;card.addEventListener('pointermove',event=>{cancelAnimationFrame(frame);frame=requestAnimationFrame(()=>{const r=card.getBoundingClientRect(),x=(event.clientX-r.left)/r.width-.5,y=(event.clientY-r.top)/r.height-.5;card.style.transform=`perspective(900px) rotateX(${-y*4}deg) rotateY(${x*4}deg) translateY(-3px)`;});});card.addEventListener('pointerleave',()=>{cancelAnimationFrame(frame);card.style.transform='';});});
 }
}
