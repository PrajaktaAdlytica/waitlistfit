// Read intrinsic layout positions, excluding the transforms that are being animated.
export function layoutTop(element){
 let top=0;
 for(let node=element;node;node=node.offsetParent)top+=node.offsetTop;
 return top;
}
export const unit=n=>Math.max(0,Math.min(1,n));
export const lerp=(a,b,t)=>a+(b-a)*t;

// Match the CSS story frames when mobile browser chrome changes the visible viewport.
export function stableViewportHeight(){return document.querySelector('.viewport-reference')?.offsetHeight||innerHeight;}
