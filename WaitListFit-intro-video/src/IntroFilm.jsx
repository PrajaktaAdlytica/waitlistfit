import React, {Suspense} from 'react';
import {AbsoluteFill, Img, interpolate, useCurrentFrame, useVideoConfig, Easing, staticFile} from 'remotion';
import {ThreeCanvas} from '@remotion/three';
import {BoardScene} from './BoardScene';

const eased={extrapolateLeft:'clamp',extrapolateRight:'clamp',easing:Easing.bezier(.22,1,.36,1)};
export function IntroFilm({embedded=false,target=null,onReady}){
 const frame=useCurrentFrame(),{fps,width,height}=useVideoConfig(),portrait=width/height<.8;
 const copy=interpolate(frame,[0,.55*fps,1.8*fps,2.7*fps],[0,1,1,0],eased);
 const reveal=interpolate(frame,[6.4*fps,7.5*fps],[0,1],eased);
 const leave=embedded?interpolate(frame,[7.2*fps,7.96*fps],[1,0],eased):1;
 return <AbsoluteFill style={{opacity:leave,fontFamily:'"Public Sans",Arial,sans-serif',color:'#142c38',overflow:'hidden'}}>
  <style>{`@font-face{font-family:"Public Sans";src:url("${staticFile('brand/fonts/PublicSans-Variable.woff2')}") format("woff2");font-weight:100 900;font-display:swap}`}</style>
  {!embedded&&<AbsoluteFill><Img src={staticFile('brand/atmosphere/sunlit-ivory.webp')} style={{width:'100%',height:'100%',objectFit:'cover'}}/></AbsoluteFill>}
  <AbsoluteFill style={{clipPath:`inset(${portrait?interpolate(frame,[0,2.7*fps,4.4*fps],[40,40,0],eased):0}% 0 0 ${portrait?0:interpolate(frame,[0,2.7*fps,4.4*fps],[42,42,0],eased)}%)`}}>
   <Suspense fallback={null}><ThreeCanvas width={width} height={height} dpr={1} frameloop="demand" gl={{alpha:true,antialias:true,powerPreference:'low-power'}} camera={{fov:35,near:.1,far:150}}><BoardScene target={target} onReady={onReady}/></ThreeCanvas></Suspense>
  </AbsoluteFill>
  <div style={{position:'absolute',left:width*.065,top:portrait?height*.145:height*.37,opacity:copy,width:portrait?width*.75:width*.31}}>
   <p style={{fontFamily:'monospace',fontSize:width*(portrait?.024:.011),letterSpacing:'.2em',margin:'0 0 24px',color:'#7b704e'}}>WAITLISTFIT / A CLOSER LOOK</p>
   <div style={{fontSize:width*(portrait?.098:.05),fontWeight:570,letterSpacing:'-.055em',lineHeight:1.05}}>A clearer<br/>next step.</div>
  </div>
  {!embedded&&<div style={{position:'absolute',top:height*(portrait?.14:.08),left:'8%',width:'84%',textAlign:'center',opacity:reveal}}>
   <Img src={staticFile('brand/logos/logo-primary.svg')} style={{width:width*.16,height:height*.045,objectFit:'contain',marginBottom:height*.04}}/>
   <div style={{fontSize:width*(portrait?.06:.034),fontWeight:600,lineHeight:1.08,letterSpacing:'-.05em',maxWidth:width*.78,margin:'0 auto'}}>{portrait?'Make specialty appointment capacity visible before a scheduler fills the slot.':<>Make specialty appointment<br/>capacity visible before a<br/>scheduler fills the slot.</>}</div>
   <p style={{fontSize:width*(portrait?.027:.014),color:'#536871'}}>A proposed read-only queue. A scheduler reviews every next step.</p>
   <div style={{display:'flex',justifyContent:'center',gap:width*.015,fontSize:width*(portrait?.023:.012),marginTop:height*.025}}><span style={{padding:'18px 30px',borderRadius:50,background:'#d9af5d'}}>Request a one-week replay →</span><span style={{padding:'17px 30px',borderRadius:50,border:'1px solid #889281'}}>Explore the demo ↓</span></div>
  </div>}
  <div style={{position:'absolute',left:'6.5%',top:portrait?'10.5%':'12%',fontFamily:'monospace',fontSize:width*(portrait?.021:.009),letterSpacing:'.18em',color:'#6f705b'}}>CONCEPT PREVIEW · SYNTHETIC DATA</div>
 </AbsoluteFill>;
}
