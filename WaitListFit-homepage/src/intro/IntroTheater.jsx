import {useCallback,useEffect,useRef,useState} from 'react';
import {Player} from '@remotion/player';
import {Pause,Play,ArrowRight} from '@phosphor-icons/react';
import {IntroFilm} from '../../../WaitListFit-intro-video/src/IntroFilm';

export default function IntroTheater({target,onFinish}){
 const player=useRef(null),progress=useRef(null),clock=useRef(null),wantsPlayback=useRef(true),[paused,setPaused]=useState(false);
 const ready=useCallback(()=>{if(wantsPlayback.current&&!document.hidden)player.current?.play();else setPaused(true)},[]);
 useEffect(()=>{
  const p=player.current,hero=document.querySelector('.hero');
  let lastCopy,lastBoard,lastSecond;
  const update=({detail:{frame}})=>{
   if(progress.current){progress.current.value=String(frame);progress.current.style.setProperty('--played',`${frame/239*100}%`)};
   const second=Math.min(8,Math.floor(frame/30)),copy=Math.max(0,Math.min(1,(frame-193)/25)),board=Math.max(0,Math.min(1,(frame-216)/23));
   if(clock.current&&second!==lastSecond){clock.current.textContent=`0${second} / 08`;lastSecond=second}
   if(copy!==lastCopy){hero?.style.setProperty('--intro-reveal',String(copy));lastCopy=copy}
   if(board!==lastBoard){hero?.style.setProperty('--intro-board-reveal',String(board));lastBoard=board}
  };
  const ended=()=>onFinish(),pause=()=>setPaused(true),play=()=>setPaused(false);
  p?.addEventListener('frameupdate',update);p?.addEventListener('ended',ended);p?.addEventListener('pause',pause);p?.addEventListener('play',play);p?.addEventListener('error',ended);
  const visibility=()=>{if(document.hidden){wantsPlayback.current=false;setPaused(true);p?.pause()}};document.addEventListener('visibilitychange',visibility);
  return()=>{p?.removeEventListener('frameupdate',update);p?.removeEventListener('ended',ended);p?.removeEventListener('pause',pause);p?.removeEventListener('play',play);p?.removeEventListener('error',ended);document.removeEventListener('visibilitychange',visibility);hero?.style.removeProperty('--intro-reveal');hero?.style.removeProperty('--intro-board-reveal')};
 },[onFinish]);
 return <>
  <div aria-hidden="true" className="intro-canvas" style={{clipPath:`inset(${target.headerHeight}px 0 0 0)`}}><Player ref={player} component={IntroFilm} inputProps={{embedded:true,target:target.board,onReady:ready}} durationInFrames={240} fps={30} compositionWidth={target.width} compositionHeight={target.height} style={{width:'100%',height:'100%',background:'transparent'}} controls={false} autoPlay={false} loop={false} initiallyMuted moveToBeginningWhenEnded={false} clickToPlay={false} doubleClickToFullscreen={false} spaceKeyToPlayOrPause={false}/></div>
  <div className="intro-controls"><button onClick={()=>{wantsPlayback.current=paused;setPaused(!paused);if(paused)player.current?.play();else player.current?.pause()}} aria-label={paused?'Play introduction':'Pause introduction'}>{paused?<Play size={15}/>:<Pause size={15}/>}</button><span ref={clock} aria-hidden="true">00 / 08</span><input className="intro-progress" ref={progress} aria-label="Introduction timeline" type="range" min="0" max="239" step="1" defaultValue="0" onChange={e=>{wantsPlayback.current=false;player.current?.pause();player.current?.seekTo(Number(e.target.value))}}/><button onClick={onFinish}>Skip intro<ArrowRight size={16}/></button></div>
 </>;
}
