// Keep animation invalidation inside its own surface. Unchanged offscreen values are never republished.
const values=new WeakMap();
export function motionValue(element,name,value){
 if(!element)return;
 const text=typeof value==='number'?String(Math.round(value*1000)/1000):String(value);
 let cache=values.get(element);if(!cache){cache=new Map();values.set(element,cache)}
 if(cache.get(name)===text)return;cache.set(name,text);element.style.setProperty(name,text);
}
export function worldElements(){return {world:document.querySelector('.ambient-world'),progress:document.querySelector('.reading-progress')}}
export function worldValue(elements,name,value){motionValue(name==='--world-progress'?elements.progress:elements.world,name,value);if(name==='--world-progress')motionValue(elements.world,name,value)}
