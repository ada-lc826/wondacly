// Geometric SVG icons deliberately avoid OS emoji fonts.
export const paths={
 star:'M12 2v20M2 12h20M5 5l14 14M5 19L19 5',
 sparkle:'M12 2c0 7-3 10-10 10 7 0 10 3 10 10 0-7 3-10 10-10-7 0-10-3-10-10Z',
 northeast:'M5 19 19 5M5 5h14v14',
 down:'M12 3v18m-7-7 7 7 7-7',
 up:'M12 21V3m-7 7 7-7 7 7',
 enter:'M20 4v10H4m6-6-6 6 6 6',
 wave:'M2 15c4 0 4-8 8-8s4 8 8 8 4-8 4-8',
 menu:'M3 6h18M3 12h18M3 18h18',
 left:'m14 5-7 7 7 7',right:'m10 5 7 7-7 7',
 close:'m5 5 14 14M5 19 19 5',
 shuffle:'M3 5h3c5 0 7 14 12 14h3m-4-4 4 4-4 4M3 19h3c5 0 7-14 12-14h3m-4-4 4 4-4 4',
 reset:'M3 10a9 9 0 1 1 1 8M3 3v7h7',
 sun:'M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1 1m12 12 1 1M5 19l1-1M18 6l1-1M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0',
 moon:'M20 15a9 9 0 0 1-11-11A9 9 0 1 0 20 15Z'
};
export const glyphs={'✳':'star','✧':'sparkle','↗':'northeast','↓':'down','↑':'up','↵':'enter','⌁':'wave','☰':'menu'};
export function icon(name){return `<svg class="icon icon-${name}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="${paths[name]}"></path></svg>`;}
export function decorateIcons(root=document.body){
 const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode(node){return node.parentElement?.closest('script,style,svg,textarea,option')?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT;}});
 const nodes=[];while(walker.nextNode())if(/[✳✧↗↓↑↵⌁☰]/u.test(walker.currentNode.textContent))nodes.push(walker.currentNode);
 for(const node of nodes){const fragment=document.createDocumentFragment();for(const part of node.textContent.split(/([✳✧↗↓↑↵⌁☰])/u)){if(glyphs[part]){const holder=document.createElement('span');holder.innerHTML=icon(glyphs[part]);fragment.append(holder.firstChild);}else fragment.append(document.createTextNode(part));}node.replaceWith(fragment);}
}
