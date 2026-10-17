import {Component,lazy,Suspense,useCallback,useEffect,useLayoutEffect,useRef,useState} from 'react';
import './intro.css';
const Theater=lazy(()=>import('./IntroTheater'));
// A document refresh resets this flag; ordinary SPA navigation does not.
let autoplayConsidered=false;
function eligible(motion){const reload=performance.getEntriesByType('navigation')[0]?.type==='reload';return !autoplayConsidered&&motion&&(reload||(!location.hash&&scrollY<120))}
class SafeIntro extends Component{
 state={failed:false};static getDerivedStateFromError(){return {failed:true}}
 componentDidCatch(){this.props.onFinish()}
 render(){return this.state.failed?null:this.props.children}
}
export function HomepageIntro({motion,trigger,onActiveChange}){
 const [active,setActive]=useState(()=>eligible(motion)),[target,setTarget]=useState(null),container=useRef(null),lastTrigger=useRef(trigger);
 const finish=useCallback(()=>{
  const focused=container.current?.contains(document.activeElement);
  setActive(false);onActiveChange(false);
  if(focused)requestAnimationFrame(()=>{const heading=document.getElementById('hero-heading');heading?.setAttribute('tabindex','-1');heading?.focus({preventScroll:true})});
 },[onActiveChange]);
 useLayoutEffect(()=>{
  autoplayConsidered=true;
  onActiveChange(active);
  if(!active)return;
  const restoration=history.scrollRestoration;history.scrollRestoration='manual';
  scrollTo({top:0,behavior:'instant'});
  const measure=()=>{const b=document.querySelector('.departure-board')?.getBoundingClientRect();setTarget({width:innerWidth,height:innerHeight,headerHeight:document.querySelector('header')?.offsetHeight||90,board:b?{width:b.width/innerWidth,height:b.height/innerHeight,centerY:(b.top+b.height/2)/innerHeight}:null})};
  measure();
  const scroll=()=>{if(scrollY>110)finish()},escape=e=>{if(e.key==='Escape')finish()};
  addEventListener('scroll',scroll,{passive:true});addEventListener('keydown',escape);addEventListener('resize',finish);
  return()=>{history.scrollRestoration=restoration;removeEventListener('scroll',scroll);removeEventListener('keydown',escape);removeEventListener('resize',finish)};
 },[active,finish,onActiveChange]);
 useEffect(()=>{if(!motion)finish()},[motion,finish]);
 useEffect(()=>{if(trigger===lastTrigger.current)return;lastTrigger.current=trigger;if(trigger&&motion){setTarget(null);setActive(true)}},[trigger,motion]);
 if(!active)return null;
 return <section ref={container} className="homepage-intro" aria-label="WaitListFit introduction"><p className="sr-only">An eight-second synthetic concept film: a close-up of the mechanical keys pulls back into the appointment board. The scheduler still decides.</p><SafeIntro onFinish={finish}><Suspense fallback={<div className="intro-loading"><span>WAITLISTFIT / A CLOSER LOOK</span><p>A clearer<br/>next step.</p><button onClick={finish}>Skip intro →</button></div>}>{target&&<Theater target={target} onFinish={finish}/>}</Suspense></SafeIntro></section>;
}
