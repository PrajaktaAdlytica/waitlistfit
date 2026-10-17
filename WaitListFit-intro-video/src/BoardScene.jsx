import React, {useMemo, useLayoutEffect} from 'react';
import {useLoader, useThree} from '@react-three/fiber';
import {useCurrentFrame, useVideoConfig, interpolate, Easing, staticFile} from 'remotion';
import {CanvasTexture, SRGBColorSpace, TextureLoader} from 'three';
import {RoundedBoxGeometry} from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

const ease={extrapolateLeft:'clamp',extrapolateRight:'clamp',easing:Easing.bezier(.22,1,.36,1)};
const mono='ui-monospace, SFMono-Regular, Menlo, Consolas, monospace';

function faceTexture(letter,color,material,half){
 const canvas=document.createElement('canvas');canvas.width=256;canvas.height=256;
 const ctx=canvas.getContext('2d');
 ctx.fillStyle='#262c29';ctx.fillRect(0,0,256,256);
 ctx.globalAlpha=.38;ctx.drawImage(material.image,0,half==='upper'?0:256,512,256,0,0,256,256);ctx.globalAlpha=1;
 ctx.fillStyle=color;ctx.font=`700 388px ${mono}`;ctx.textAlign='center';ctx.textBaseline='middle';
 ctx.fillText(letter,128,half==='upper'?256:0);
 const map=new CanvasTexture(canvas);map.colorSpace=SRGBColorSpace;map.anisotropy=4;return map;
}
function FlapKey({letter,from=' ',color='#d9af5d',index,changeAt,width=.64,material}){
 const frame=useCurrentFrame(),{fps}=useVideoConfig();
 const p=interpolate(frame,[changeAt*fps+index*.047*fps,changeAt*fps+index*.047*fps+.27*fps],[0,1],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
 const textures=useMemo(()=>({toTop:faceTexture(letter,color,material,'upper'),toBottom:faceTexture(letter,color,material,'lower'),fromTop:faceTexture(from,color,material,'upper'),fromBottom:faceTexture(from,color,material,'lower')}),[letter,from,color,material]);
 React.useEffect(()=>()=>Object.values(textures).forEach(t=>t.dispose()),[textures]);
 const geometry=useMemo(()=>new RoundedBoxGeometry(width,1.68,.13,2,.035),[width]);
 React.useEffect(()=>()=>geometry.dispose(),[geometry]);
 const upper=p===0?textures.fromTop:textures.toTop,lower=p<1?textures.fromBottom:textures.toBottom;
 return <group>
  <mesh geometry={geometry}><meshStandardMaterial color="#353b35" map={material} roughness={.78} metalness={.25}/></mesh>
  <mesh position={[0,.425,.073]}><planeGeometry args={[width-.035,.825]}/><meshStandardMaterial map={upper} roughness={.8}/></mesh>
  <mesh position={[0,-.425,.073]}><planeGeometry args={[width-.035,.825]}/><meshStandardMaterial map={lower} roughness={.8}/></mesh>
  {p>0&&p<.5&&<group rotation={[-p*Math.PI,0,0]}><mesh position={[0,.425,.084]}><planeGeometry args={[width-.035,.825]}/><meshStandardMaterial map={textures.fromTop} side={2} roughness={.8}/></mesh></group>}
  {p>=.5&&p<1&&<group rotation={[(1-p)*Math.PI,0,0]}><mesh position={[0,-.425,.084]}><planeGeometry args={[width-.035,.825]}/><meshStandardMaterial map={textures.toBottom} side={2} roughness={.8}/></mesh></group>}
  <mesh position={[0,0,.105]}><boxGeometry args={[width+.016,.025,.045]}/><meshStandardMaterial color="#0e1512" roughness={.6} metalness={.5}/></mesh>
  {[-1,1].map(side=><mesh key={side} position={[side*(width/2-.008),0,.12]} rotation={[0,0,Math.PI/2]}><cylinderGeometry args={[.027,.027,.054,8]}/><meshStandardMaterial color="#b79550" roughness={.36} metalness={.85}/></mesh>)}
 </group>;
}
function Header({material,portrait}){
 const texture=useMemo(()=>{
  const c=document.createElement('canvas');c.width=2048;c.height=240;const x=c.getContext('2d');
  x.fillStyle='#252d29';x.fillRect(0,0,2048,240);x.globalAlpha=.24;x.drawImage(material.image,0,0,2048,240);x.globalAlpha=1;
  x.font=`22px ${mono}`;x.fillStyle='#d2d8cf';x.fillText('DEMO — SYNTHETIC DATA',24,47);x.textAlign='right';x.fillText('WAITLISTFIT',2016,47);
  x.strokeStyle='#68736a';x.lineWidth=1;x.beginPath();x.moveTo(24,90);x.lineTo(2024,90);x.stroke();
  x.textAlign='left';x.font=`29px ${mono}`;x.fillStyle='#ebede4';x.fillText('TUESDAY 13 OCTOBER 2026',24,158);x.textAlign='right';x.fillText('30 MIN · ROOM R-02 · D-01',2024,158);
  x.beginPath();x.moveTo(24,210);x.lineTo(2024,210);x.stroke();
  const t=new CanvasTexture(c);t.colorSpace=SRGBColorSpace;return t;
 },[material]);
 React.useEffect(()=>()=>texture.dispose(),[texture]);
 return <mesh position={[0,portrait?2.6:1.12,.19]}><planeGeometry args={[portrait?10:15.45,1.58]}/><meshStandardMaterial map={texture} roughness={.85}/></mesh>;
}

export function CameraMove({target}){
 const frame=useCurrentFrame(),{fps,width,height}=useVideoConfig(),{camera,invalidate}=useThree();
 const t=frame/fps,aspect=width/height,portrait=aspect<.8;
 const move=interpolate(t,[3.15,5.35],[0,1],ease);
 const handoff=interpolate(t,[5.8,7.65],[0,1],ease);
 const targetWidth=target?.width??.88,targetY=target?.centerY??(portrait?.74:.73);
 const endZ=(portrait?10.8:16.4)/(2*Math.tan(35*Math.PI/360)*aspect*targetWidth);
 // Camera centers match the live board measured once when the intro starts.
 const centerY=(portrait?.64:.54)*(1-handoff)+targetY*handoff;
 const endLookY=(centerY-.5)*2*endZ*Math.tan(35*Math.PI/360);
 const track=interpolate(t,[0,1.9,3.4],[0,.38,1],ease);
 useLayoutEffect(()=>{
  camera.position.set((portrait?0:6.5)*(1-move),(portrait?-1:0)*(1-move)+endLookY*move,4.25*(1-move)+endZ*move);
  camera.lookAt((portrait?-2.7:2.8)*(1-move)-track*.45*(1-move),(portrait?-1.55:-.58)*(1-move)+endLookY*move,0);
  camera.updateProjectionMatrix();invalidate();
 },[camera,invalidate,move,track,endZ,endLookY,portrait]);
 return null;
}

export function BoardScene({target,onReady}){
 const frame=useCurrentFrame(),{fps,width,height}=useVideoConfig(),portrait=width/height<.8;
 const material=useLoader(TextureLoader,staticFile('brand/intro/charcoal.webp'));
 React.useEffect(()=>{onReady?.()},[onReady]);
 const outer=useMemo(()=>new RoundedBoxGeometry(portrait?10.8:16.5,portrait?7.8:4.45,.38,3,.15),[portrait]);
 const inner=useMemo(()=>new RoundedBoxGeometry(portrait?10.58:16.28,portrait?7.58:4.23,.4,3,.12),[portrait]);
 React.useEffect(()=>()=>{outer.dispose();inner.dispose()},[outer,inner]);
 const aspect=width/height,match=target?.height?target.height/((portrait?7.8/10.8:4.45/16.5)*target.width*aspect):1;
 const matchScale=interpolate(frame,[5.8*fps,7.65*fps],[1,match],ease);
 const rise=interpolate(frame,[0,3.8*fps,7.6*fps],[-.02,0,0],ease);
 return <>
  <CameraMove target={target}/>
  <ambientLight intensity={1.1}/><directionalLight position={[-8,10,12]} intensity={3.1} color="#fff0d0"/><directionalLight position={[8,1,6]} intensity={.6} color="#e5ebdf"/>
  <group position={[0,rise,0]} scale={[1,matchScale,1]}>
   <mesh geometry={outer} position={[0,0,-.1]}><meshStandardMaterial color="#938c70" roughness={.43} metalness={.7}/></mesh>
   <mesh geometry={inner} position={[0,0,-.07]}><meshStandardMaterial map={material} color="#4c554b" roughness={.73} metalness={.25}/></mesh>
   <Header material={material} portrait={portrait}/>
   {[...'PENDING APPROVAL'].map((letter,i)=><group key={i} position={[(portrait?-4.575:-7.52)+i*(portrait?.61:.665),portrait?.5:-.64,.22]}><FlapKey material={material} width={portrait?.585:.64} index={i} letter={letter} from={i%2===0&&i<8?'OPEN'[i/2]:' '} changeAt={5.45}/></group>)}
   {[...'10:30'].map((letter,i)=><group key={i} position={[portrait?-2.6+i*1.3:3.65+i*.9,portrait?-2.05:-.64,.22]}><FlapKey material={material} width={portrait?1.19:.86} index={i} letter={letter} from={i===0?'1':i===2?':':' '} color={frame<4.2*fps?'#d9af5d':'#eff0df'} changeAt={1.95}/></group>)}
  </group>
 </>;
}
