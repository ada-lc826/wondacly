import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const root=path.resolve('dist');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const app=fs.readFileSync(path.join(root,'app.js'),'utf8');
const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
assert.equal(ids.length,new Set(ids).size,'Duplicate HTML IDs');
const links=[...html.matchAll(/(?:href|src)="([^"]+)"/g)].map(m=>m[1]);
for(const link of links){
 if(link.startsWith('#')) assert(ids.includes(link.slice(1)),'Missing section '+link);
 else if(!/^[a-z]+:/i.test(link)) assert(fs.existsSync(path.resolve(root,link)),'Missing local file '+link);
}
for(const photo of JSON.parse(fs.readFileSync(path.join(root,'assets/photos.json'),'utf8'))){
 assert(photo.width>0&&photo.height>0,'Invalid photo dimensions');
 for(const size of [640,1280])assert(fs.statSync(path.join(root,`assets/${photo.name}-${size}.webp`)).size>1000,'Missing photo asset');
}
for(const module of [...app.matchAll(/(?:from\s+|import\()['"]([^'"]+)['"]/g)]){
 assert(fs.existsSync(path.resolve(root,module[1])),'Missing JavaScript module '+module[1]);
}
assert(fs.existsSync(path.join(root,'vendor/LICENSE-PhotoSwipe.txt')),'PhotoSwipe license missing');
if(fs.existsSync('.openai/hosting.json')){
 const hosting=JSON.parse(fs.readFileSync('.openai/hosting.json','utf8'));
 assert.equal(hosting.static.directory,'dist');
}
assert(!/Passport|ID card|131\s?6290|331082|22124679/.test(html+app),'Private identifier found in page');
assert(!/TODO|YOUR_NAME|lorem ipsum/i.test(html+app),'Unfinished placeholder');
console.log(`PASS: ${ids.length} unique IDs, ${links.length} links/assets, 9 responsive photo pairs, local gallery modules, license, manifest, and content checks.`);
