import {useEffect} from 'react';
import {Pause,Play,ArrowDown} from '@phosphor-icons/react';
import './scroll-world.css';
import {layoutTop,stableViewportHeight} from './scrollGeometry';
import {motionValue,worldElements,worldValue} from './motionValues';

const chapters=[
 ['home','The opening',1.08,-7,-8,-6,.92,'#faf4e6'],
 ['opening','Follow the opening',1.4,7,5,7,1,'#f8e9c6'],
 ['cancellation','The clinic day',1.18,-10,3,-4,.85,'#f9edcf'],
 ['story','What actually fits',1.42,6,-7,8,.78,'#f6e9cd'],
 ['exceptions','Room for unknown',1.3,-6,9,-5,.75,'#f4e5c5'],
 ['modules','A capacity layer',1.55,-12,-12,-8,1,'#f7e6ba'],
 ['people','The people behind it',1.22,9,9,5,.86,'#f9efd8'],
 ['fit','Your existing workflow',1.4,12,-16,-5,1,'#f6e3b9'],
 ['evidence','Evidence before promises',1.2,5,-8,5,.82,'#faf1dc'],
 ['pilot','One week to learn',1.5,-9,-14,-4,1,'#f6e3b8'],
 ['pricing','A hypothesis to test',1.28,9,-7,7,.9,'#f9e9c8'],
 ['questions','The practical questions',1.13,-5,5,-3,.72,'#fbf3e3'],
 ['replay','Your next step',1.48,4,-16,3,1,'#f6dfad']
];
const clamp=n=>Math.max(0,Math.min(1,n));
const mix=(a,b,t)=>a+(b-a)*t;
const rgb=s=>s.match(/\w\w/g).map(n=>parseInt(n,16));
const blend=(a,b,t)=>`rgb(${rgb(a.slice(1)).map((v,i)=>Math.round(mix(v,rgb(b.slice(1))[i],t))).join(',')})`;

export function ScrollWorld({motion,onToggle}){
 return <><div className="viewport-reference" aria-hidden="true"/><div className="ambient-world" aria-hidden="true"><div className="world-camera"><img className="world-light" src="/brand/atmosphere/sunlit-ivory.webp" alt="" fetchPriority="high"/><img className="world-light-reflection" src="/brand/atmosphere/sunlit-ivory.webp" alt=""/><img className="world-organic" src="/brand/background.svg" alt=""/></div></div><div className="reading-progress" aria-hidden="true"/><button className="page-motion-control" onClick={onToggle} aria-label={motion?'Pause page motion':'Enable page motion'}>{motion?<Pause size={12}/>:<Play size={12}/>}<span>Motion {motion?'on':'off'}</span></button></>;
}
export function ContinuityThread(){return <svg className="continuity-thread" aria-hidden="true" preserveAspectRatio="none"><defs><linearGradient id="story-ink" x1="0" x2="1"><stop stopColor="#b38336"/><stop offset=".5" stopColor="#e1b75e"/><stop offset="1" stopColor="#b38336"/></linearGradient></defs><path className="continuity-base"/><path className="continuity-draw" pathLength="1"/></svg>}
export function ChapterHandoff({number,label,next}){return <div className="chapter-handoff" aria-hidden="true"><span>{number} / {label}</span><i/><span>{next}<ArrowDown size={12}/></span></div>}

export function useWorldMotion(motion,setDay){
 useEffect(()=>{
  const world=worldElements();const root=document.documentElement,main=document.querySelector('main'),svg=document.querySelector('.continuity-thread');
  root.classList.add('cinematic-site');
  const elements=chapters.map(c=>document.getElementById(c[0]));
  const surfaces=[...document.querySelectorAll('.process-stations>div,.faq-item,.known-questions,.role-tags>span')];
  let raf=0,pointerX=0,pointerY=0,targetX=0,targetY=0,lastDay=-1,geometryDirty=true;
  let anchors=[],bounds=[],surfaceTops=[],pageHeight=1,mainHeight=1,mainTop=0;
  let cameraY=scrollY,lastTime=performance.now(),viewportHeight=stableViewportHeight(),canPin=motion&&innerWidth>=700&&viewportHeight>=780;
  const measure=()=>{
   // All layout reads precede the SVG/style writes. Re-measure only when layout changes.
   viewportHeight=stableViewportHeight();canPin=motion&&innerWidth>=700&&viewportHeight>=780;
   anchors=elements.map(layoutTop);
   bounds=elements.map((el,i)=>({top:anchors[i],height:el.offsetHeight}));
   surfaceTops=surfaces.map(layoutTop);
   pageHeight=Math.max(1,document.documentElement.scrollHeight-innerHeight);
   mainHeight=main.scrollHeight;
   if(svg){
    const w=main.clientWidth,gutter=innerWidth<700?10:Math.max(18,Math.min(42,w*.035));
    mainTop=layoutTop(main);const positions=bounds.map(b=>({top:b.top-mainTop,bottom:b.top-mainTop+b.height}));
    // The line changes sides in the empty handoffs, never diagonally across reading surfaces.
    const sides=[1,1,1,1,1,0,1,1,0,1,0,1,0];
    const edge=side=>side?w-gutter:gutter;
    const first=positions[0];
    let last=[edge(1),first.bottom],path=`M ${last[0]} ${last[1]}`;
    for(let i=1;i<positions.length;i++){
     const current=positions[i],previous=positions[i-1],x=edge(sides[i]);
     if(x!==last[0]){
      const start=Math.max(last[1],previous.bottom),end=current.top,span=Math.max(0,end-start);
      path+=` L ${last[0]} ${start} C ${last[0]} ${start+span*.42},${x} ${end-span*.42},${x} ${end}`;
     }else path+=` L ${x} ${current.top}`;
     path+=` C ${x+(sides[i]?-gutter*.18:gutter*.18)} ${current.top+(current.bottom-current.top)*.33},${x} ${current.top+(current.bottom-current.top)*.67},${x} ${current.bottom}`;
     last=[x,current.bottom];
    }
    svg.setAttribute('viewBox',`0 0 ${w} ${mainHeight}`);
    svg.querySelectorAll('path').forEach(p=>p.setAttribute('d',path));
   }
   geometryDirty=false;
  };
  const chapterAt=focus=>{let index=0;for(let i=1;i<anchors.length;i++)if(focus>=anchors[i])index=i;return index;};
  const update=(time=performance.now())=>{
   raf=0;
   if(document.hidden)return;
   const h=viewportHeight;
   if(root.classList.contains('pilot-can-pin')!==canPin){root.classList.toggle('pilot-can-pin',canPin);geometryDirty=true;}
   if(geometryDirty)measure();
   const y=scrollY,dt=Math.min(64,Math.max(1,time-lastTime));lastTime=time;
   const follow=1-Math.exp(-dt/105),pointerFollow=1-Math.exp(-dt/115);
   // Large anchor jumps snap; normal native scrolling gets a short, frame-rate-independent light follow.
   cameraY=!motion||Math.abs(y-cameraY)>h*.95?y:mix(cameraY,y,follow);
   const focus=cameraY+h*.42,at=chapterAt(focus),next=Math.min(chapters.length-1,at+1);
   const t=clamp((focus-anchors[at])/Math.max(1,anchors[next]-anchors[at])),smooth=t*t*(3-2*t),a=chapters[at],b=chapters[next];
   const chapter=chapters[chapterAt(y+h*.42)][0];if(root.dataset.chapter!==chapter)root.dataset.chapter=chapter;
   worldValue(world,'--world-color',blend(a[7],b[7],smooth));
   for(const [index,name] of [[2,'--world-scale'],[3,'--world-x'],[4,'--world-y'],[5,'--world-rotation'],[6,'--world-light']])worldValue(world,name,motion?mix(a[index],b[index],smooth):index===2?1.18:index===6?.8:0);
   worldValue(world,'--world-progress',clamp(y/pageHeight));
   motionValue(svg,'--thread-progress',motion?clamp((y+h*.8-mainTop)/mainHeight):1);
   pointerX=mix(pointerX,motion?targetX:0,pointerFollow);pointerY=mix(pointerY,motion?targetY:0,pointerFollow);
   worldValue(world,'--pointer-x',pointerX);worldValue(world,'--pointer-y',pointerY);
   surfaces.forEach((el,i)=>motionValue(el,'--surface-entry',motion?clamp((y+h*.94-surfaceTops[i])/(h*.4)):1));
   const pilot=elements[9],r=bounds[9],top=r.top-y,bottom=top+r.height;
   if(canPin){
    const p=clamp((110-top)/(r.height-h+110));motionValue(pilot,'--week-progress',p);
    if(top<=110&&bottom>=h-30){const day=Math.min(4,Math.floor(p*5));if(day!==lastDay){setDay(day);lastDay=day}}else lastDay=-1;
   }
   if(motion&&(Math.abs(cameraY-y)>.2||Math.abs(pointerX-targetX)>.001||Math.abs(pointerY-targetY)>.001))raf=requestAnimationFrame(update);
  };
  const schedule=()=>{if(!raf&&!document.hidden)raf=requestAnimationFrame(update)};
  const resize=()=>{viewportHeight=stableViewportHeight();canPin=motion&&innerWidth>=700&&viewportHeight>=780;geometryDirty=true;schedule()};
  const pointer=e=>{if(e.pointerType==='touch')return;targetX=e.clientX/innerWidth-.5;targetY=e.clientY/innerHeight-.5;schedule()};
  const leave=()=>{targetX=0;targetY=0;schedule()};
  const visibility=()=>{root.classList.toggle('page-is-hidden',document.hidden);if(document.hidden){cancelAnimationFrame(raf);raf=0}else{lastTime=performance.now();schedule()}};
  const observer=new ResizeObserver(resize);observer.observe(document.body);elements.forEach(el=>observer.observe(el));
  update();addEventListener('scroll',schedule,{passive:true});addEventListener('resize',resize);addEventListener('pointermove',pointer,{passive:true});root.addEventListener('pointerleave',leave);document.addEventListener('visibilitychange',visibility);
  return()=>{cancelAnimationFrame(raf);observer.disconnect();removeEventListener('scroll',schedule);removeEventListener('resize',resize);removeEventListener('pointermove',pointer);root.removeEventListener('pointerleave',leave);document.removeEventListener('visibilitychange',visibility);root.classList.remove('page-is-hidden')};
 },[motion,setDay]);
}
