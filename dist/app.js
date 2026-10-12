import PhotoSwipeLightbox from './vendor/photoswipe-lightbox.esm.min.js';
import { decorateIcons } from './icons.js';
import { setupPlay } from './play.js';

const zh = {
navAbout:'关于我',navWork:'项目',navResearch:'研究',navLife:'生活片刻',sayHello:'打个招呼',
heroEyebrow:'英国 · 伦敦 / 保持好奇',heroTitle:'用理性探索，<br>以好奇<em>创造。</em>',heroIntro:'你好，我是 <strong>Emilie</strong> <span class="chinese-name">/ 陈柳颖</span><br>把复杂的问题变成模型，把想法变成可以使用的作品。',heroDesc:'帝国理工学院应用计算科学与工程硕士在读。在数学、机器学习与想象力的交汇处，不断探索。',exploreWork:'看看我的作品',downloadCV:'下载英文简历 ↓',heroNote:'以研究为起点，以创造为日常。',photoNote:'偶尔，也走到算法之外 ↗',stripImperial:'应用计算科学与工程硕士',stripMcmTitle:'2025 美赛 Finalist',stripMcm:'让数学建模回应真实问题',stripWorldTitle:'上海 → 伦敦',stripWorld:'换一座城市，继续保持好奇。',
aboutEyebrow:'认识一下',aboutTitle:'我喜欢从「如果」<br>走到「<em>做到了</em>」的过程。',aboutP1:'我是陈柳颖，也叫 Emilie。现于帝国理工学院攻读应用计算科学与工程硕士，本科毕业于上海大学中欧工程技术学院信息工程专业。',aboutP2:'我的研究兴趣围绕优化、机器学习与控制展开。在公式之外，我也做网页项目、带着相机出门，在书架和陌生街角寻找新的灵感。',
workEyebrow:'01 — 让想法发生',workTitle:'一些<em>作品。</em>',workDesc:'实用的产品，好玩的实验，<br>以及一些好奇心的产物。',filterAll:'全部项目',filterProduct:'产品探索',filterCreative:'创意编程',mediDesc:'面向国际患者的多语言医疗旅行概念平台，让跨境就医的信息更容易理解。',guardianDesc:'探索智能助行器与 AI 关怀闭环，如何帮助独居长者更自在地生活。',paperDesc:'为阅读者绘制一张地图，发现独立书店、图书馆，以及城市里安静的角落。',fingerDesc:'把打字练习变成战斗与竞速，用即时反馈记录速度、准确率与节奏。',moreGithub:'在 GitHub 查看更多',
researchEyebrow:'02 — 值得追问的问题',researchTitle:'研究与<em>荣誉。</em>',researchDesc:'在复杂的问题中寻找结构，<br>从一个模型开始。',paper1Label:'优化 · 共同第一作者',paper1Desc:'结合遗传算法、0–1 整数规划与动态规划，研究多阶段生产过程中的决策问题。',readAbstract:'研究概要',paper1Abstract:'以电子产品装配为场景，对检测与拆解决策进行建模，兼顾生产成本与次品率。使用遗传算法搜索决策组合，以动态规划评估生产过程，并通过压力测试与敏感性分析考察模型稳健性。',paper2Label:'控制 · IEEE ICUS 2025 · 合作作者',paper2Desc:'通过线性模型预测控制，研究倾转旋翼四旋翼飞行器的轨迹跟踪与姿态约束。',paper2Abstract:'建立单轴倾转旋翼四旋翼的六自由度非线性模型，以线性模型预测控制联合处理轨迹跟踪和姿态约束，探索在较小姿态变化下实现更精准的运动控制。',mcmLabel:'数学建模 · 2025',mcmTitle:'美国大学生数学建模竞赛 Finalist',mcmDesc:'可持续旅游建模：结合 NSGA-II 多目标优化、Sobol 敏感性分析与蒙特卡洛模拟。',projectNotes:'项目笔记',mcmAbstract:'将旅游发展的经济、环境与社会影响转化为多目标决策问题。我承担论文主笔工作，把建模选择、敏感性分析与政策建议组织成完整的研究叙事。',finalist:'特等奖提名 ✳',honorNote:'沿途的其他收获：上海市优秀毕业生 · 亚太地区大学生数学建模竞赛三等奖 · 曾任学生会主席，带领 70 人团队。',
journeyEyebrow:'一路走来',journeyTitle:'一直在<br><em>生长。</em>',journeyDesc:'每一段经历，都带来<br>一种看世界的新方式。',education:'教育经历',experience:'实习经历',imperialCourse:'应用计算科学与工程硕士',expected:'预计 2027 年 11 月毕业 · 伦敦',vconicsRole:'算法实习生 · 威肯西',vconicsDesc:'模型预测控制、状态估计与汽车工程实践。',vconicsDates:'6 月 – 7 月 · 上海',polestarRole:'数据分析实习生 · 极星',polestarDesc:'SQL 数据分析、自然语言处理与商业智能仪表盘。',polestarDates:'8 月 – 9 月 · 上海',shuTitle:'上海大学',shuCourse:'信息工程学士 · 中欧工程技术学院',shuAward:'上海市优秀毕业生',
momentsEyebrow:'03 — 屏幕之外',momentsTitle:'生活的<em>切片。</em>',momentsDesc:'海岸、书架、值得记住的时刻。<br>有些故事，适合留在照片里。',galleryHint:'从相册里选出的一些片刻。点开，慢慢看。',allPhotos:'展开全部 9 个片刻 ↗',contactEyebrow:'美好的事情，常常从一次对话开始',contactTitle:'一个问题，一个想法，<br>或一句<em>你好。</em>',contactDesc:'欢迎聊聊研究、有意思的产品，或下一个值得解决的问题。',copyEmail:'复制邮箱 ↗',footerNote:'· 带着好奇心制作。',backTop:'回到顶部 ↑',openProject:'打开项目 ↗'
};
Object.assign(zh,{
 navPlay:'玩一下',photoNote:'点一下照片，认识另一面的我。',moodLabel:'换个心情',
 itaDesc:'在 3D 痛墙工作室里，把喜欢的图片变成徽章、卡片与亚克力挂件，自由摆放、拍照，并分享你的小小宇宙。',
 paperDesc:'千城纸屿：探索城市里的书店、图书馆和阅读角落，用私密打卡、便签与岛屿向导记录漫游。',
 playEyebrow:'走一小段岔路',playTitle:'少一点划过，<br><em>多一点好玩。</em>',playDesc:'好奇心，适合亲手试一试。<br>这里也可以是你的灵感桌。',deskTab:'01 / 照片桌',sprintTab:'02 / 打字冲刺',deskHint:'拖动照片，重新摆放。点一下，翻到背面。',resetDesk:'整理桌面',memory1:'给意外的美好，<br>留一点位置。',memory2:'总有一个故事，<br>还没被读到。',memory3:'靠近一点，<br>再看一眼。',deskKeys:'键盘：Tab 选中照片，方向键移动，Enter 翻面。',sprintTitle:'找到你的节奏。<br>20 秒，和键盘单独相处。',sprintHint:'输入高亮的英文单词，按空格或回车提交。输入第一个字母时开始计时。',fullGame:'玩完整版游戏',seconds:'剩余秒数',words:'正确单词',best:'最高 WPM',typingLabel:'输入高亮的英文单词'
});
const en = Object.fromEntries([...document.querySelectorAll('[data-i18n]')].map(el=>[el.dataset.i18n,el.innerHTML]));
let language='en';
try {language=localStorage.getItem('emilie-language')==='zh'?'zh':'en';}catch{}
let expanded=false;
let currentFilter='all';
let activeProject=null;
const projects={
 ita:{name:'ItaWall',category:['3D STUDIO · CREATIVE TOOL','3D 工作室 · 创作工具'],description:['A browser-based 3D ita-wall studio for arranging a personal collection of favorite images and digital merch.','在浏览器里搭建属于自己的 3D 痛墙，把喜欢的图片与数字周边组合成独一无二的收藏空间。'],features:[['Turn images into badges, cards, polaroids, acrylic charms, and cut-out stickers.','Arrange objects and adjust the scene, effects, and camera.','Save your creation, take a photo, and explore shared walls in the gallery.'],['将图片制作成徽章、卡片、拍立得、亚克力挂件与抠图贴纸。','自由摆放物品，调整场景、效果与相机视角。','保存作品、拍照，并在画廊中探索分享的痛墙。']],tags:['3D interaction','Creative tools','Digital collections'],note:['Open the live studio to build a wall of your own.','打开正式工作室，搭建你自己的收藏墙。'],url:'https://itawall.com/',repo:null},
 medichina:{name:'MediChina',category:['HEALTHCARE · PRODUCT CONCEPT','医疗健康 · 产品概念'],description:['A multilingual concept platform that helps international patients understand the journey of seeking medical care in China.','面向国际患者的多语言概念平台，梳理赴华医疗从信息了解、医院选择到旅程规划的全过程。'],features:[['Browse hospitals by city and specialty.','Explore treatment price comparisons and the travel-to-aftercare journey.','Switch between English, Chinese, Russian, and Arabic.'],['按城市与专科浏览医院信息。','探索治疗费用对比，以及从出行到后续照护的流程。','提供英语、中文、俄语与阿拉伯语界面。']],tags:['React','TypeScript','Tailwind CSS'],note:['Concept project; it does not provide clinical advice or operate a medical service.','概念项目，用于展示信息架构与产品体验，不提供临床建议或实际医疗服务。'],url:'https://ada-lc826.github.io/HealthcareinChina/#/hospitals',repo:'HealthcareinChina'},
 guardian:{name:'GuardianWing',category:['ASSISTIVE TECHNOLOGY · INTERACTIVE CONCEPT','辅助科技 · 交互概念'],description:['An exploration of independent living, bringing a smart walker and an AI-driven care loop into one product story.','围绕独居长者的自主生活，将智能助行器与 AI 关怀闭环串联为完整的产品故事。'],features:[['Interactive care-loop demo: sensing, AI check-in, risk assessment, and family notification.','A mock dashboard makes the product idea tangible.','Bilingual Chinese and English interface.'],['交互演示涵盖感知、AI 关怀电话、风险评估与家属通知。','使用模拟仪表盘展示产品构想。','支持中文与英文切换。']],tags:['HTML','CSS','JavaScript','Product design'],note:['Interactive concept and simulated dashboard; no live care service is connected.','交互概念与模拟数据展示，未接入真实照护服务。'],url:'https://ada-lc826.github.io/GuardianWing/',repo:'GuardianWing'},
 paper:{name:'Paper Isle · 千城纸屿',category:['CITY READING MAP · LIVE WEBSITE','城市阅读地图 · 在线作品'],description:['A reading-wanderer’s companion for discovering bookstores, libraries, and quiet cultural spaces across cities.','城市阅读漫游者的伙伴：发现书店、图书馆与安静的文化空间，找到属于自己的纸上岛屿。'],features:[['Explore places by city and by bookstore, library, or café.','Keep check-ins and notes private, with local storage by default and optional private sync.','Use the Island Guide for reading-space ideas, with DeepSeek preference understanding and Amap place verification.'],['按城市和书店、图书馆、咖啡厅等类型探索空间。','打卡与便签默认保存在本机，也可主动开启私密同步。','岛屿向导结合 DeepSeek 偏好理解与高德地点核验，提供漫游建议。']],tags:['City discovery','Private notes','AI guide'],note:['The live site is at paperisle.org. Guide access and limits are shown on the site.','正式地址为 paperisle.org，向导的登录要求与使用次数以网站说明为准。'],url:'https://paperisle.org/',repo:null},
 finger:{name:'FingerFight',category:['BROWSER GAME · CREATIVE CODING','浏览器游戏 · 创意编程'],description:['A typing game that turns practice into play, with word battles, running modes, and useful feedback after each round.','把打字练习变成游戏：输入单词击退敌人，或用打字速度推动角色前进，在每一轮后获得清晰反馈。'],features:[['Monster Mode with waves, combos, and boss fights.','Sentence Mode with timed sprint and endless escape.','English and Chinese word banks, three difficulty levels, and WPM / accuracy feedback.'],['怪物模式包含多轮战斗、连击与 Boss。','句子模式提供限时冲刺与无尽逃脱。','中英文词库、三个难度等级，以及 WPM 与准确率反馈。']],tags:['Canvas','Vanilla JavaScript','Game design'],note:['Runs in the browser with no application framework dependencies.','基于原生 JavaScript 与 Canvas，在浏览器中运行。'],url:'https://ada-lc826.github.io/FingerFight/',repo:'FingerFight'}
};
const moments=[
 ['camera','Through a different lens','换一个镜头看世界','Emilie holding a film camera','手持胶片相机的 Emilie'],
 ['library','Among the stories','在故事之间','Emilie beside shelves of old books','站在古老书架旁的 Emilie'],
 ['coast','A breath of sea air','去海边，透口气','Emilie by a bright coastline','站在明亮海岸边的 Emilie'],
 ['sunset','Chasing the last light','追着最后一束光','Emilie by the coast at sunset','日落时分坐在海岸长椅上的 Emilie'],
 ['imperial','A new chapter','新的一章','Emilie at Imperial College London','帝国理工学院前的 Emilie'],
 ['museum','In good company','和历史打个照面','Emilie in a museum sculpture gallery','博物馆雕塑展厅里的 Emilie'],
 ['red','A little red, a little tradition','一点红，一点传统','Emilie in front of red calligraphy panels','红色书法展板前的 Emilie'],
 ['graduation','On to the next adventure','走向下一段旅程','Emilie at Shanghai University graduation','上海大学毕业典礼上的 Emilie'],
 ['speech','Finding my voice','把想法说出来','Emilie speaking at a Shanghai University event','在上海大学活动上发言的 Emilie']
];
function updateCount(){const count=[...document.querySelectorAll('.project-card')].filter(el=>!el.hidden).length;document.querySelector('#project-count').textContent=String(count).padStart(2,'0')+(language==='zh'?' 个项目':' PROJECTS');}
function updateGalleryLabels(){document.querySelectorAll('.gallery-item').forEach((el,i)=>{el.querySelector('span').textContent=moments[i][language==='zh'?2:1];el.querySelector('img').alt=moments[i][language==='zh'?4:3];el.setAttribute('aria-label',(language==='zh'?'放大照片：':'Enlarge photo: ')+moments[i][language==='zh'?2:1]);});const toggle=document.querySelector('#gallery-toggle');toggle.innerHTML=expanded?(language==='zh'?'收起影集 ↑':'Show fewer moments ↑'):(language==='zh'?zh.allPhotos:en.allPhotos);decorateIcons(toggle);}
function applyLanguage(){document.documentElement.lang=language==='zh'?'zh-CN':'en';document.querySelectorAll('[data-i18n]').forEach(el=>{const key=el.dataset.i18n;el.innerHTML=(language==='zh'?zh[key]:en[key])??en[key];});const toggle=document.querySelector('#language');toggle.textContent=language==='zh'?'EN':'中文';toggle.setAttribute('aria-label',language==='zh'?'Switch to English':'切换为中文');document.title=language==='zh'?'陈柳颖 Emilie Chen · 研究、作品与生活':'Emilie Chen · Research, Code & Life';document.querySelector('#menu-toggle').setAttribute('aria-label',language==='zh'?'打开导航菜单':'Open menu');document.querySelector('#dialog-close').setAttribute('aria-label',language==='zh'?'关闭项目':'Close project');document.querySelector('#copy-status').textContent='';updateCount();updateGalleryLabels();if(activeProject)renderProject(activeProject);document.dispatchEvent(new CustomEvent('portfolio:language',{detail:{language}}));decorateIcons();}
document.querySelector('#language').addEventListener('click',()=>{language=language==='en'?'zh':'en';try{localStorage.setItem('emilie-language',language);}catch{}applyLanguage();});
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{currentFilter=button.dataset.filter;document.querySelectorAll('[data-filter]').forEach(el=>{el.classList.toggle('active',el===button);el.setAttribute('aria-pressed',String(el===button));});document.querySelectorAll('.project-card').forEach(el=>{el.hidden=currentFilter!=='all'&&el.dataset.category!==currentFilter;});updateCount();}));
const dialog=document.querySelector('#project-dialog');
function renderProject(id){
 const project=projects[id],n=language==='zh'?1:0;
 document.querySelector('#dialog-title').textContent=project.name;
 document.querySelector('#dialog-category').textContent=project.category[n];
 document.querySelector('#dialog-description').textContent=project.description[n];
 document.querySelector('#dialog-features').replaceChildren(...project.features[n].map(text=>{const el=document.createElement('li');el.textContent=text;return el;}));
 document.querySelector('#dialog-tags').replaceChildren(...project.tags.map(text=>{const el=document.createElement('span');el.textContent=text;return el;}));
 document.querySelector('#dialog-note').textContent=project.note[n];
 const demo=document.querySelector('#dialog-demo'),source=document.querySelector('#dialog-source');
 demo.href=project.url||'mailto:chenliuying666@163.com?subject=Paper%20Isle';
 demo.textContent=project.url?(n?'打开项目 ↗':'Visit project ↗'):(n?'聊聊这个项目 ↗':'Discuss this project ↗');
 source.hidden=!project.repo;
 source.style.display=project.repo?'':'none';
 if(project.repo)source.href='https://github.com/ada-lc826/'+project.repo;
 else source.removeAttribute('href');
 decorateIcons(dialog);
}
document.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',()=>{activeProject=button.dataset.project;renderProject(activeProject);dialog.showModal();}));
document.querySelector('#dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('close',()=>activeProject=null);
dialog.addEventListener('click',event=>{if(event.target===dialog){const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)dialog.close();}});
const menu=document.querySelector('#menu-toggle'),nav=document.querySelector('.site-header nav');
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));document.addEventListener('keydown',event=>{if(event.key==='Escape'&&nav.classList.contains('open')){closeMenu();menu.focus();}});
document.querySelector('#copy-email').addEventListener('click',async()=>{const status=document.querySelector('#copy-status');try{await navigator.clipboard.writeText('chenliuying666@163.com');status.textContent=language==='zh'?'邮箱已复制，期待你的来信。':'Email copied. Looking forward to hearing from you.';}catch{status.textContent=language==='zh'?'请选中上方邮箱复制，或点击邮箱直接写信。':'Select the email above to copy it, or click it to write a message.';}});
document.querySelector('#gallery-toggle').addEventListener('click',()=>{expanded=!expanded;document.querySelectorAll('.gallery-item').forEach((el,i)=>el.hidden=!expanded&&i>2);document.querySelector('#gallery-toggle').setAttribute('aria-expanded',String(expanded));updateGalleryLabels();});
applyLanguage();
setupPlay(language);
const dimensions=await fetch('./assets/photos.json').then(r=>{if(!r.ok)throw new Error('Photo metadata unavailable');return r.json();});
document.querySelector('#photo-gallery').replaceChildren(...moments.map(([name],i)=>{const info=dimensions.find(photo=>photo.name===name),link=document.createElement('a');link.href=`./assets/${name}-1280.webp`;link.className='gallery-item';link.dataset.pswpWidth=info.width;link.dataset.pswpHeight=info.height;link.hidden=i>2;const img=document.createElement('img');img.src=`./assets/${name}-640.webp`;img.width=640;img.height=Math.round(info.height*640/info.width);img.loading='lazy';img.decoding='async';link.append(img,document.createElement('span'));return link;}));
updateGalleryLabels();
const lightbox=new PhotoSwipeLightbox({gallery:'#photo-gallery',children:'a',pswpModule:()=>import('./vendor/photoswipe.esm.min.js'),bgOpacity:.97,showHideAnimationType:matchMedia('(prefers-reduced-motion: reduce)').matches?'none':'fade',closeTitle:'Close / 关闭',zoomTitle:'Zoom / 缩放',arrowPrevTitle:'Previous / 上一张',arrowNextTitle:'Next / 下一张',errorMsg:'This image could not load. / 照片加载失败，请稍后重试。'});
lightbox.on('uiRegister',()=>{lightbox.pswp.ui.registerElement({name:'custom-caption',order:9,isButton:false,appendTo:'root',onInit:(el,pswp)=>{pswp.on('change',()=>{el.textContent=pswp.currSlide.data.element?.querySelector('span')?.textContent||'';});}});});lightbox.init();
