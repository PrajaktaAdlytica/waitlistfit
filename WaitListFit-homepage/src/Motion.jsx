import {useEffect,useRef,useState} from 'react';
import {ArrowCounterClockwise,ArrowDown} from '@phosphor-icons/react';
import './motion.css';
import {layoutTop,stableViewportHeight} from './scrollGeometry';
import {motionValue} from './motionValues';

// Each leaf is a physical half of the tile, rather than a rotating text glyph.
function FlipCell({letter,index,run,motion}) {
 const [face,setFace]=useState({from:letter,to:letter,id:0});
 useEffect(()=>{
  if(!motion||!run){setFace({from:letter,to:letter,id:0});return;}
  setFace({from:'\u00a0',to:'\u00a0',id:0});
  if(letter===' ')return;
  const alphabet=/\d/.test(letter)?'0123456789':'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const at=Math.max(0,alphabet.indexOf(letter));
  const values=/\d/.test(letter)?['\u00a0',letter]:['\u00a0',alphabet[(at+24)%alphabet.length],alphabet[(at+25)%alphabet.length],letter];
  const timers=values.slice(1).map((value,k)=>setTimeout(()=>setFace({from:values[k],to:value,id:run*10+k+1}),200+index*85+k*245));
  return()=>timers.forEach(clearTimeout);
 },[letter,index,run,motion]);
 return <span className={`flap-cell mechanical-cell ${letter===' '?'space-cell':''}`}>
  <span className="flap-half upper"><b>{face.to}</b></span>
  <span className="flap-half lower"><b>{face.from}</b></span>
  {face.id>0&&<span key={face.id} className="flap-leaves"><span className="flap-half upper falling-upper"><b>{face.from}</b></span><span className="flap-half lower falling-lower"><b>{face.to}</b></span></span>}
  <i/>
 </span>;
}
function FlipWord({word,offset=0,run,motion}){return <span className="flap-word" aria-hidden="true">{[...word].map((letter,i)=><FlipCell key={i} letter={letter} index={offset+i} run={run} motion={motion}/>)}</span>}
export function DepartureBoard({approved,motion}) {
 const ref=useRef(null),[run,setRun]=useState(0),seen=useRef(false),played=useRef(false);
 useEffect(()=>{
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
   if(entry.intersectionRatio>=.42){seen.current=true;if(!played.current){played.current=true;setRun(n=>n+1);}}
   else if(!entry.isIntersecting){seen.current=false;if(played.current)setRun(0);}
  }),{threshold:[0,.42]});
  if(ref.current)observer.observe(ref.current);
  return()=>observer.disconnect();
 },[]);
 useEffect(()=>{if(seen.current)setRun(n=>n+1)},[approved]);
 return <div ref={ref} className={`departure-board ${approved?'is-approved':''}`} role="group" aria-label={`Synthetic cancellation: ${approved?'Filled, simulated. No appointment booked.':'Pending approval, 10:30.'}`}>
  <div className="board-top"><span className="demo-label">DEMO <span>—</span> SYNTHETIC DATA</span><span className="board-brand">WAITLISTFIT<img src="/brand/logos/symbol-reverse.svg" alt=""/></span></div>
  <div className="board-info"><span>TUESDAY 13 OCTOBER 2026</span><span>30 MIN <b>·</b> ROOM R-02 <b>·</b> D-01</span></div>
  <div className="board-face" aria-hidden="true"><FlipWord word={approved?'FILLED · SIMULATED':'PENDING APPROVAL'} run={run} motion={motion}/><div className="board-time"><FlipWord word="10" offset={16} run={run} motion={motion}/><span className="time-colon">:</span><FlipWord word="30" offset={18} run={run} motion={motion}/></div></div>
  {motion&&<button className="board-replay" onClick={()=>setRun(n=>n+1)} aria-label="Replay the split-flap animation"><ArrowCounterClockwise size={13}/>Replay the board</button>}
 </div>;
}
export function OpeningJourney(){return <section id="opening" className="opening-journey" aria-labelledby="journey-heading" data-scroll-scene>
 <div className="opening-stage">
  <p className="eyebrow-small">FOLLOW ONE OPENING</p>
  <h2 id="journey-heading">Thirty minutes open.<br/><span>What actually fits?</span></h2>
  <p className="journey-caption">Time is only the beginning of the story.</p>
  <div className="journey-map" aria-hidden="true">
   <svg viewBox="0 0 1200 500" preserveAspectRatio="none"><path className="journey-track" d="M-50 440 C100 440 120 95 390 95 S790 450 1250 150"/><path className="journey-trace" pathLength="1" d="M-50 440 C100 440 120 95 390 95 S790 450 1250 150"/></svg>
   <div className="travelling-slot"><span>10:30—11:00</span><strong>30 MIN</strong><small>OPEN · SYNTHETIC</small></div>
   <span className="journey-label journey-label-one">THE OPENING</span><span className="journey-label journey-label-two">THE CONSTRAINTS</span><span className="journey-label journey-label-three">THE HUMAN DECISION</span>
  </div>
  <a className="journey-next" href="#cancellation">See the clinic day<ArrowDown size={16}/></a>
 </div>
 </section>}
const clamp=(n,a=0,b=1)=>Math.max(a,Math.min(b,n));
// Native scroll is the clock: every transform is reversible and has a static fallback.
export function useScrollStory({motion,storyRef,setStage,setStacked,setScrolled}) {
 useEffect(()=>{
  const scenes=[...document.querySelectorAll('[data-scroll-scene]')],hero=document.querySelector('.hero'),journey=document.querySelector('.opening-journey'),modules=[...document.querySelectorAll('.module-row')],story=storyRef.current;
  const lanes=[...story.querySelectorAll('.constraint-lane')],candidates=[...story.querySelectorAll('.candidate-card')];
  const route=journey?.querySelector('.journey-track'),routeLength=route?.getTotalLength()||1,map=journey?.querySelector('.journey-map'),tile=journey?.querySelector('.travelling-slot');
  let dirty=true,raf=0,h=1,heroHeight=1,storyBox,journeyBox,sceneBoxes=[],rowTops=[],laneTops=[],candidateTops=[],routeRange=[0,1],labelGeometry=[],mapWidth=1,mapHeight=1,tileWidth=1,tileHeight=1,lastPin,lastStage,lastScrolled;
  const measure=()=>{
   h=stableViewportHeight();heroHeight=hero.offsetHeight;storyBox={top:layoutTop(story),height:story.offsetHeight};journeyBox={top:layoutTop(journey),height:journey.offsetHeight};
   sceneBoxes=scenes.map(el=>({top:layoutTop(el),height:el.offsetHeight}));rowTops=modules.map(layoutTop);laneTops=lanes.map(layoutTop);candidateTops=candidates.map(layoutTop);
   if(route&&map&&tile){
    const box=map.getBoundingClientRect(),half=tile.offsetWidth/2+14;mapWidth=map.offsetWidth;mapHeight=map.offsetHeight;tileWidth=tile.offsetWidth;tileHeight=tile.offsetHeight;
    labelGeometry=[...map.querySelectorAll('.journey-label')].map(el=>({el,x:el.offsetLeft+el.offsetWidth/2,y:el.offsetTop+el.offsetHeight/2,w:el.offsetWidth,h:el.offsetHeight}));
    const distanceForX=x=>{let lo=0,hi=1;for(let i=0;i<18;i++){const mid=(lo+hi)/2;if(route.getPointAtLength(mid*routeLength).x<x)lo=mid;else hi=mid;}return(lo+hi)/2;};
    routeRange=[distanceForX((half-box.left)/box.width*1200),distanceForX((innerWidth-half-box.left)/box.width*1200)];
   }dirty=false;
  };
  const update=()=>{
   raf=0;if(document.hidden)return;if(dirty)measure();const y=scrollY,pin=motion&&innerWidth>=700&&h>=720;
   if(pin!==lastPin){setStacked(!pin);lastPin=pin}if((y>32)!==lastScrolled){setScrolled(y>32);lastScrolled=y>32}
   motionValue(hero,'--atmosphere-y',`${motion?clamp(y*.12,0,180):0}px`);motionValue(hero,'--hero-progress',motion?clamp(y/(heroHeight*.9)):0);
   // Geometry is cached between genuine layout changes; no layout reads follow the style writes.
   const p=clamp((h*.7-(journeyBox.top-y))/(journeyBox.height-h*.3)),progress=motion?p:.5,distance=routeRange[0]+(routeRange[1]-routeRange[0])*progress;
   motionValue(journey,'--journey-progress',progress);motionValue(journey,'--journey-ink',distance);
   if(route){const point=route.getPointAtLength(routeLength*distance);motionValue(journey,'--slot-x',`${point.x/12}%`);motionValue(journey,'--slot-y',`${point.y/5}%`);
    labelGeometry.forEach(label=>{const dx=Math.max(0,Math.abs(point.x/1200*mapWidth-label.x)-(tileWidth+label.w)/2-4),dy=Math.max(0,Math.abs(point.y/500*mapHeight-label.y)-(tileHeight+label.h)/2-4);motionValue(label.el,'--label-clarity',motion?clamp(Math.hypot(dx,dy)/28):1)});
   }
   const sp=clamp((90-(storyBox.top-y))/(storyBox.height-h+90)),lane=clamp(sp*3.7),stage=Math.min(2,Math.floor(sp*3));
   motionValue(story,'--story-progress',motion?sp:1);motionValue(story,'--lane-progress',motion&&pin?lane:1);
   if(pin&&stage!==lastStage){setStage(stage);lastStage=stage}
   lanes.forEach((el,i)=>motionValue(el,'--lane-reveal',!motion?1:pin?clamp(lane*9-i):clamp((y+h*.94-laneTops[i])/(h*.12))));
   candidates.forEach((el,i)=>motionValue(el,'--candidate-reveal',motion&&!pin?clamp((y+h*.94-candidateTops[i])/(h*.14)):1));
   scenes.forEach((el,i)=>motionValue(el,'--scene-progress',motion?clamp((h-(sceneBoxes[i].top-y))/(h+sceneBoxes[i].height)):.5));
   modules.forEach((el,i)=>motionValue(el,'--row-reveal',motion?clamp((y+h*.95-rowTops[i])/(h*.3)):1));
  };
  const schedule=()=>{if(!raf&&!document.hidden)raf=requestAnimationFrame(update)},resized=()=>{dirty=true;schedule()},visible=()=>{if(document.hidden){cancelAnimationFrame(raf);raf=0}else resized()};
  update();addEventListener('scroll',schedule,{passive:true});addEventListener('resize',resized);document.addEventListener('visibilitychange',visible);
  const resize=new ResizeObserver(resized);resize.observe(document.body);resize.observe(story);resize.observe(journey);
  return()=>{cancelAnimationFrame(raf);removeEventListener('scroll',schedule);removeEventListener('resize',resized);document.removeEventListener('visibilitychange',visible);resize.disconnect()};
 },[motion,storyRef,setStage,setStacked,setScrolled]);
}
