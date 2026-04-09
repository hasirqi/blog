/* ============================================
   勉強君 Blog — App Logic
   SPA routing, i18n, theme toggle, animations
   ============================================ */

// ---- i18n translations ----
const i18n = {
  zh: {
    'nav.home': '首页',
    'nav.articles': '文章',
    'nav.about': '关于',
    'hero.title': '记录生活，留给未来',
    'hero.subtitle': '一位在日华人工程师的二十年札记。<br>在这里记录工作、生活与热爱，作为留给孩子们最珍贵的精神资产。',
    'hero.cta1': '开始阅读',
    'hero.cta2': '认识我',
    'section.featured': '精选文章',
    'section.viewAll': '查看全部 →',
    'section.categories': '记录生活的方方面面',
    'section.categoriesSub': '在日本的每一天，都值得被珍惜',
    'cat.work': '工作',
    'cat.life': '生活',
    'cat.hobby': '爱好',
    'cat.thoughts': '随想',
    'cat.workCount': '嵌入式 · 汽车ECU · 技术管理',
    'cat.lifeCount': '育儿 · 日常 · 文化差异',
    'cat.hobbyCount': 'AI · 摄影 · 滑雪 · 编程',
    'cat.thoughtsCount': '感悟 · 育儿经 · 人生思考',
    'meta.min': '8 分钟',
    'meta.min5': '5 分钟',
    'meta.min6': '6 分钟',
    'about.heading': '关于勉強君',
    'about.quote': '"只要紧跟行业趋势，持续创新，就一定能在这场技术变革中做大属于自己的蛋糕。"',
    'about.teaser': '2005年来到日本，在嵌入式软件领域深耕近二十年。从单片机汇编到汽车ECU开发，从A-SPICE合规到AI时代的新探索。一个五口之家的父亲，三个孩子的启蒙者。在伊势崎市的日常里，寻找属于自己的技术梦想。',
    'about.cta': '了解更多 →',
    'archive.title': '所有文章',
    'filter.all': '全部',
    'article1.title': '二十年嵌入式：从单片机到AI时代的蜕变',
    'article1.excerpt': '2005年来到日本，从一个懵懂的留学生到汽车ECU软件工程师。回顾这二十年在嵌入式领域的摸爬滚打，分享那些踩过的坑和收获的成长。',
    'article2.title': '群马滑雪记：带三个孩子征服初级道',
    'article2.excerpt': '今年冬天带三个孩子第一次去滑雪场。从哭鼻子到笑着冲下山坡，记录这段珍贵的家庭时光。',
    'article3.title': '用AI修复老照片：让父母的青春重现',
    'article3.excerpt': '用GFPGAN和CodeFormer修复了一批八九十年代的老照片。看到父母年轻时的模样，眼眶不自觉地湿润了。',
    'aboutPage.title': '关于勉強君',
    'aboutPage.intro': '一位热爱钻研技术的嵌入式软件工程师。在AI时代的浪潮中，记录生活，沉淀思考，留给孩子们最好的礼物。',
    'tl.2005.title': '初来乍到',
    'tl.2005.text': '怀揣梦想来到日本，开始了新的人生篇章。语言不通、文化陌生，一切从零开始。',
    'tl.early.year': '2008 - 2014',
    'tl.early.title': '技术深耕',
    'tl.early.text': '进入嵌入式软件领域，从C语言和单片机开始，逐步掌握汽车ECU开发、RL78汇编、HIL测试等技术。',
    'tl.2014.title': '结婚成家',
    'tl.2014.text': '5月20日步入婚姻殿堂。从此人生多了一份责任，也多了一份温暖。',
    'tl.kids.year': '2018 - 2021',
    'tl.kids.title': '三个小生命',
    'tl.kids.text': '陆续迎来三个孩子。忙碌而幸福的日子，既是工程师，也是三个孩子的启蒙老师。',
    'tl.2020.title': '家人团聚',
    'tl.2020.text': '9月，妻子和孩子们来到日本，一家人终于在伊势崎团聚。',
    'tl.now.year': '2024 - 至今',
    'tl.now.title': 'AI时代的新篇章',
    'tl.now.text': '担任技术项目经理。业余探索AI图像修复、iOS开发、视频创作。在技术变革中找到属于自己的位置。',
    'aboutPage.whyTitle': '为什么写这个博客',
    'aboutPage.why1': '有一天，我突然意识到：孩子们长大后，可能不太记得爸爸年轻时的样子，不了解我们来到日本的故事，不知道这个家庭经历过什么。',
    'aboutPage.why2': '于是我决定用文字记录下来。不是什么宏大叙事，只是一个普通在日华人家庭的日常——上班路上的风景，孩子的第一次滑雪，深夜debug的灵感，以及对未来的期待。',
    'aboutPage.why3': '这些文字，就是我留给你们最珍贵的精神资产。希望多年以后，你们翻开这些页面，能感受到爸爸的用心。',
    'footer.desc': '记录在日本的工作与生活，留给孩子们的精神资产。',
    'footer.nav': '导航',
    'footer.categories': '分类',
    'footer.madeWith': '用 ❤️ 和代码搭建于群马県伊势崎市',
    'cms-mnr5k95or35b0': '从固件到智能：一个嵌入式工程师的 AI 学习手记',
    'cms-mnr5k95or35b0-excerpt': '本文记录了一位嵌入式软件工程师在 AI 浪潮中的亲身探索历程。从最初的迷茫与抗拒，到用项目驱动打破学习僵局，再到补齐数学短板、以费曼技巧深化理解，作者逐步找到了属于自己的位置——嵌入式 × AI 的交叉赛道。 边缘推理、工业预测性维护、TinyML 部署等方向，既需要扎实的底层固件功底，又依赖 AI 模型优化与落地能力，构成了纯算法工程师难以复制的核心竞争力。 文章没有高谈阔论，只有一个工程师在深夜敲下的真实感悟：在这个 AI 重塑一切的时代，最稳的护城河，是别人跨不过来的复合能力。',

    'a1.p1': '2005年，当我第一次走进日本的嵌入式软件公司时，面前摆着的是一块RL78单片机开发板和一本厚厚的日文数据手册。那时候的我，日语还磕磕巴巴，C语言刚入门，对"嵌入式"三个字的理解，不过是"让硬件动起来"而已。',
    'a1.h1': '从汇编到C的跃迁',
    'a1.p2': '最初的几年，我每天的工作就是在RL78上写汇编和C代码。寄存器操作、中断处理、内存管理——这些基础功打得很扎实。那时候没有AI辅助，debug全靠oscilloscope和printf，一个指针错误能让你折腾一整天。',
    'a1.p3': '但正是这些年的积累，让我对底层硬件有了深刻的理解。当后来转向汽车ECU开发时，这些基础变成了我最大的竞争力。',
    'a1.quote': '技术的本质不在于你用了多新的工具，而在于你对基础原理的理解有多深。',
    'a1.h2': '汽车ECU与A-SPICE',
    'a1.p4': '进入汽车行业后，我接触到了A-SPICE这套流程标准。从软件需求分析到系统设计，从单元测试到集成测试，每一步都有严格的规范。',
    'a1.p5': 'VectorCAST成了我的常用工具，HIL测试让我理解了仿真与实车验证的差异。这些年的项目管理经验，让我从一个纯技术人员成长为能够跨部门协调的技术项目经理。',
    'a1.h3': 'AI时代的新可能',
    'a1.p6': '如今，AI正在改变一切。Claude、Copilot这些工具让编码效率提升了数倍。但我更感兴趣的是，AI如何融入嵌入式系统——在边缘设备上做推理，用机器学习优化控制算法。',
    'a1.p7': '对孩子们说：爸爸这二十年最大的感悟是，技术永远在变，但学习的热情不能变。保持好奇心，保持对世界的热爱，你们一定能找到属于自己的路。',
    'a2.p1': '群马县的冬天，是滑雪的好时节。我们一家五口，终于在今年冬天完成了第一次滑雪之旅。三个孩子，最大的六岁多，最小的刚满四岁——光是想象就知道这会是一场"战争"。',
    'a2.h1': '出发前的忐忑',
    'a2.p2': '提前一周就开始准备：雪具租赁预约、防水手套、暖宝宝、零食包……妻子说我像是在准备一场军事行动。没办法，带三个小朋友出门，不做好万全准备真的不行。',
    'a2.h2': '泪水与笑声',
    'a2.p3': '到了雪场，老大兴奋地冲出去，结果在雪地上摔了个四脚朝天。老二看到白茫茫一片，直接哭了——"太冷了，我要回家！"老三倒是一脸无所谓，在雪地里玩得不亦乐乎。',
    'a2.p4': '经过教练的耐心指导，三个孩子终于能在初级道上慢慢滑下来了。看着他们从恐惧到享受的转变，我觉得这可能是今年最值得记录的时刻。',
    'a2.quote': '带孩子滑雪最大的收获，不是技术，而是让他们学会面对恐惧，然后战胜它。',
    'a2.p5': '回家的路上，三个孩子在车里秒睡。我和妻子相视一笑，虽然累得要命，但心里暖暖的。这就是生活中最美好的瞬间吧。',
    'a3.p1': '去年回国过年，从老家翻出了一大箱旧照片。泛黄的相纸，模糊的面孔——这些是爸妈年轻时的记忆，珍贵却脆弱。于是我决定用AI技术来修复它们。',
    'a3.h1': '工具选择',
    'a3.p2': '经过一番研究，我选用了GFPGAN和CodeFormer两个开源模型。GFPGAN擅长面部细节恢复，CodeFormer在处理严重退化的照片时效果更好。后来又尝试了SUPIR，对高分辨率重建有惊人的效果。',
    'a3.p3': '整个工作流程在ComfyUI上搭建，把几个模型串联起来，先做降噪和色彩修正，再做面部修复和超分辨率。作为嵌入式工程师，搭建这套pipeline的过程让我感到既新鲜又兴奋。',
    'a3.h2': '当父母的青春重现',
    'a3.p4': '当我把修复后的照片发给妈妈时，电话那头沉默了很久。然后她说："这真的是我和你爸年轻时的样子啊……"那一刻，我觉得所有的折腾都值了。',
    'a3.quote': '技术最动人的时刻，不是它有多强大，而是它帮你留住了那些即将消逝的记忆。',
    'a3.p5': '我把修复后的照片打印成册，作为新年礼物送给了父母。也把这个技能教给了几个朋友——在我看来，这就是AI最美好的用途之一。',
  },

  en: {
    'nav.home': 'Home',
    'nav.articles': 'Articles',
    'nav.about': 'About',
    'hero.title': 'Recording Life, For the Future',
    'hero.subtitle': 'Twenty years of notes from a Chinese engineer in Japan.<br>Work, life, and passions — a spiritual legacy for my children.',
    'hero.cta1': 'Start Reading',
    'hero.cta2': 'About Me',
    'section.featured': 'Featured',
    'section.viewAll': 'View All →',
    'section.categories': 'Every Aspect of Life',
    'section.categoriesSub': 'Every day in Japan is worth cherishing',
    'cat.work': 'Work',
    'cat.life': 'Life',
    'cat.hobby': 'Hobby',
    'cat.thoughts': 'Thoughts',
    'cat.workCount': 'Embedded · Automotive ECU · Tech Lead',
    'cat.lifeCount': 'Parenting · Daily Life · Culture',
    'cat.hobbyCount': 'AI · Photo · Skiing · Coding',
    'cat.thoughtsCount': 'Reflections · Parenting · Life Lessons',
    'meta.min': '8 min read',
    'meta.min5': '5 min read',
    'meta.min6': '6 min read',
    'about.heading': 'About Benkyokun',
    'about.quote': '"Stay with the trends, keep innovating, and you\'ll carve out your own piece of the pie in this tech revolution."',
    'about.teaser': 'Arrived in Japan in 2005, nearly two decades in embedded software. From microcontroller assembly to automotive ECU development, from A-SPICE compliance to AI exploration. A father of three, finding his tech dreams in Isesaki City, Gunma.',
    'about.cta': 'Learn More →',
    'archive.title': 'All Articles',
    'filter.all': 'All',
    'article1.title': 'Twenty Years in Embedded: From Microcontrollers to the AI Era',
    'article1.excerpt': 'From a fresh student in 2005 to an automotive ECU engineer. Reflecting on two decades of embedded development — the pitfalls, growth, and new opportunities in the AI age.',
    'article2.title': 'Skiing in Gunma: Three Kids Conquer the Beginner Slope',
    'article2.excerpt': 'Our first family ski trip this winter. From tears to laughter racing down the slope — recording this precious family moment.',
    'article3.title': 'AI Photo Restoration: Bringing My Parents\' Youth Back to Life',
    'article3.excerpt': 'Using GFPGAN and CodeFormer to restore photos from the 80s and 90s. Seeing my parents\' young faces again brought tears to my eyes.',
    'aboutPage.title': 'About Benkyokun',
    'aboutPage.intro': 'An embedded software engineer with a passion for technology. In the AI era, recording life and thoughts — the best gift for my children.',
    'tl.2005.title': 'Arrival in Japan',
    'tl.2005.text': 'Arrived in Japan with dreams and determination. Language barriers, cultural differences — starting everything from scratch.',
    'tl.early.year': '2008 - 2014',
    'tl.early.title': 'Technical Deep Dive',
    'tl.early.text': 'Entered embedded software development. From C and microcontrollers to automotive ECU development, RL78 assembly, and HIL testing.',
    'tl.2014.title': 'Marriage',
    'tl.2014.text': 'Got married on May 20th. Life gained a new responsibility and a new warmth.',
    'tl.kids.year': '2018 - 2021',
    'tl.kids.title': 'Three Little Lives',
    'tl.kids.text': 'Three children arrived one after another. Busy but happy days — an engineer by day, a teacher to three little ones at home.',
    'tl.2020.title': 'Family Reunion',
    'tl.2020.text': 'September: wife and children finally came to Japan. The whole family reunited in Isesaki.',
    'tl.now.year': '2024 - Present',
    'tl.now.title': 'A New Chapter in the AI Era',
    'tl.now.text': 'Technical Project Manager. Exploring AI photo restoration, iOS development, and video creation in my free time.',
    'aboutPage.whyTitle': 'Why This Blog',
    'aboutPage.why1': 'One day I realized: when my children grow up, they might not remember what their dad was like when he was young, or understand the story of how we came to Japan.',
    'aboutPage.why2': 'So I decided to write it all down. Not grand narratives — just the daily life of an ordinary Chinese family in Japan. Scenery on the commute, the kids\' first ski trip, late-night debugging inspirations, and hopes for the future.',
    'aboutPage.why3': 'These words are my most precious spiritual legacy for you. I hope someday, when you turn these pages, you\'ll feel your father\'s heart.',
    'footer.desc': 'Recording work and life in Japan — a spiritual legacy for my children.',
    'footer.nav': 'Navigate',
    'footer.categories': 'Categories',
    'footer.madeWith': 'Built with ❤️ and code in Isesaki, Gunma',
    'cms-mnr5k95or35b0': 'From firmware to intelligence: An embedded engineer’s AI learning notes',
    'cms-mnr5k95or35b0-excerpt': 'This article records an embedded software engineer’s personal exploration process in the AI wave. From the initial confusion and resistance, to using project-driven methods to break the learning deadlock, to making up for shortcomings in mathematics, and using Feynman techniques to deepen understanding, the author gradually found his own position - the intersection of embedded × AI. Directions such as edge reasoning, industrial predictive maintenance, and TinyML deployment not only require solid underlying firmware skills, but also rely on AI model optimization and implementation capabilities, forming a core competitiveness that is difficult for pure algorithm engineers to replicate. The article does not contain high-pitched remarks, only the real insights of an engineer late at night: In this era of reshaping everything, the most stable moat is the composite ability that others cannot cross.',

    'a1.p1': 'In 2005, when I first walked into an embedded software company in Japan, in front of me was an RL78 microcontroller dev board and a thick Japanese datasheet. My Japanese was shaky, my C was beginner-level, and my understanding of "embedded" was simply "making hardware move."',
    'a1.h1': 'From Assembly to C',
    'a1.p2': 'In the early years, my daily work was writing assembly and C code on RL78. Register operations, interrupt handling, memory management — these fundamentals were drilled in deep. No AI assistance back then; debugging relied on oscilloscopes and printf. A single pointer bug could eat your entire day.',
    'a1.p3': 'But these years of accumulation gave me a deep understanding of hardware. When I later moved to automotive ECU development, this foundation became my greatest competitive advantage.',
    'a1.quote': 'The essence of technology isn\'t how new your tools are, but how deeply you understand the fundamentals.',
    'a1.h2': 'Automotive ECU & A-SPICE',
    'a1.p4': 'After entering the automotive industry, I encountered A-SPICE process standards. From software requirements analysis to system design, from unit testing to integration testing — every step has strict specifications.',
    'a1.p5': 'VectorCAST became my go-to tool, and HIL testing taught me the difference between simulation and real-vehicle verification. Years of project management experience transformed me from a pure technician to a cross-functional technical project manager.',
    'a1.h3': 'New Possibilities in the AI Era',
    'a1.p6': 'Now, AI is changing everything. Tools like Claude and Copilot have multiplied coding efficiency. But what excites me more is how AI can integrate into embedded systems — edge inference and ML-optimized control algorithms.',
    'a1.p7': 'To my children: Dad\'s biggest lesson from these twenty years is that technology always changes, but the passion for learning must not. Stay curious, stay passionate about the world, and you\'ll find your own path.',
    'a2.p1': 'Winter in Gunma is perfect for skiing. Our family of five finally completed our first ski trip this winter. Three kids — the oldest barely six, the youngest just four. You can imagine what kind of adventure this would be.',
    'a2.h1': 'Pre-departure Jitters',
    'a2.p2': 'I started preparing a week ahead: gear rental reservations, waterproof gloves, hand warmers, snack bags... My wife said I was preparing for a military operation. Well, you can\'t take three little kids out without full preparation.',
    'a2.h2': 'Tears and Laughter',
    'a2.p3': 'At the ski resort, the eldest charged out excitedly — and promptly fell flat. The second one saw the white expanse and immediately cried — "It\'s too cold, I want to go home!" The youngest, unfazed, happily played in the snow.',
    'a2.p4': 'After patient coaching, all three kids could slowly glide down the beginner slope. Watching them transform from fear to enjoyment — this might be the most memorable moment of the year.',
    'a2.quote': 'The biggest takeaway from skiing with kids isn\'t technique — it\'s teaching them to face fear and overcome it.',
    'a2.p5': 'On the drive home, all three kids fell asleep instantly. My wife and I exchanged smiles — exhausted but warm inside. These are life\'s most beautiful moments.',
    'a3.p1': 'Last year during Chinese New Year, I found a big box of old photos at my parents\' house. Yellowed paper, blurry faces — precious but fragile memories of my parents\' youth. I decided to use AI to restore them.',
    'a3.h1': 'Choosing Tools',
    'a3.p2': 'After research, I chose GFPGAN and CodeFormer. GFPGAN excels at facial detail recovery, while CodeFormer handles severely degraded photos better. Later I tried SUPIR, which has amazing results for high-resolution reconstruction.',
    'a3.p3': 'I built the entire workflow in ComfyUI, chaining models together — denoising and color correction first, then face restoration and super-resolution. As an embedded engineer, building this pipeline felt both fresh and exciting.',
    'a3.h2': 'When Youth Returns',
    'a3.p4': 'When I sent the restored photos to my mom, the phone went silent for a long time. Then she said: "This really is what your dad and I looked like when we were young..." At that moment, all the tinkering was worth it.',
    'a3.quote': 'Technology\'s most moving moment isn\'t how powerful it is, but how it helps you preserve memories that are about to fade.',
    'a3.p5': 'I printed the restored photos into an album as a New Year gift for my parents. I also taught this skill to several friends — in my view, this is one of AI\'s most beautiful uses.',
  },

  ja: {
    'nav.home': 'ホーム',
    'nav.articles': '記事',
    'nav.about': 'について',
    'hero.title': '日々を記録し、未来へ届ける',
    'hero.subtitle': '在日中国人エンジニアの20年の手記。<br>仕事、生活、情熱を記録し、子どもたちへの精神的な財産として。',
    'hero.cta1': '読み始める',
    'hero.cta2': '私について',
    'section.featured': 'おすすめ記事',
    'section.viewAll': 'すべて見る →',
    'section.categories': '生活のあらゆる側面',
    'section.categoriesSub': '日本での毎日は、大切にする価値がある',
    'cat.work': '仕事',
    'cat.life': '生活',
    'cat.hobby': '趣味',
    'cat.thoughts': '随想',
    'cat.workCount': '組込み · 車載ECU · 技術管理',
    'cat.lifeCount': '子育て · 日常 · 異文化体験',
    'cat.hobbyCount': 'AI · 写真 · スキー · プログラミング',
    'cat.thoughtsCount': '気づき · 育児 · 人生の思考',
    'meta.min': '8分で読めます',
    'meta.min5': '5分で読めます',
    'meta.min6': '6分で読めます',
    'about.heading': '勉強君について',
    'about.quote': '「業界のトレンドを追い、革新し続ければ、技術革命の中で自分のパイを大きくできる。」',
    'about.teaser': '2005年に来日し、組込みソフト分野で約20年。マイコンアセンブラから車載ECU開発、A-SPICE準拠からAI探索まで。3人の子どもの父として、伊勢崎市で技術の夢を追い続けています。',
    'about.cta': 'もっと詳しく →',
    'archive.title': 'すべての記事',
    'filter.all': 'すべて',
    'article1.title': '組込み20年：マイコンからAI時代への変遷',
    'article1.excerpt': '2005年の来日から車載ECUエンジニアへ。20年の組込み開発を振り返り、失敗と成長、AIがもたらす新たな可能性を共有します。',
    'article2.title': '群馬スキー記：3人の子どもと初級コースに挑戦',
    'article2.excerpt': '今年の冬、初めて家族で滑りに行きました。泣いていた子どもたちが笑顔で斜面を降りる姿を記録します。',
    'article3.title': 'AIで古い写真を修復：両親の青春を蘇らせる',
    'article3.excerpt': 'GFPGANとCodeFormerで80-90年代の古い写真を修復。若い頃の両親の姿を見て、思わず目頭が熱くなりました。',
    'aboutPage.title': '勉強君について',
    'aboutPage.intro': '技術を追究する組込みソフトウェアエンジニア。AI時代の中で、日々を記録し、思考を深め、子どもたちに最良の贈り物を残します。',
    'tl.2005.title': '来日',
    'tl.2005.text': '夢を抱いて日本に来ました。言葉の壁、文化の違い、すべてがゼロからのスタートでした。',
    'tl.early.year': '2008 - 2014',
    'tl.early.title': '技術の深掘り',
    'tl.early.text': '組込みソフト開発の世界へ。C言語とマイコンから始まり、車載ECU開発、RL78アセンブラ、HILテストなどの技術を習得。',
    'tl.2014.title': '結婚',
    'tl.2014.text': '5月20日に結婚。人生に新たな責任と温もりが加わりました。',
    'tl.kids.year': '2018 - 2021',
    'tl.kids.title': '3つの小さな命',
    'tl.kids.text': '3人の子どもが次々と誕生。忙しくも幸せな日々——エンジニアであり、3人の子どもの先生でもあります。',
    'tl.2020.title': '家族の再会',
    'tl.2020.text': '9月、妻と子どもたちが来日。家族がようやく伊勢崎で再会しました。',
    'tl.now.year': '2024 - 現在',
    'tl.now.title': 'AI時代の新章',
    'tl.now.text': '技術プロジェクトマネージャーとして活躍中。余暇でAI画像修復、iOS開発、動画制作を探求しています。',
    'aboutPage.whyTitle': 'なぜこのブログを',
    'aboutPage.why1': 'ある日気づきました：子どもたちが大きくなったとき、お父さんの若い頃の姿を覚えていないかもしれない。日本に来た物語を知らないかもしれない。',
    'aboutPage.why2': 'だから、文字で記録することにしました。壮大な物語ではなく、ごく普通の在日中国人家庭の日常——通勤途中の風景、子どもの初スキー、深夜のデバッグのひらめき、そして未来への期待。',
    'aboutPage.why3': 'これらの言葉は、あなたたちへの最も貴重な精神的財産です。いつか、このページをめくったとき、お父さんの想いを感じてほしい。',
    'footer.desc': '日本での仕事と生活を記録し、子どもたちへの精神的財産として。',
    'footer.nav': 'ナビゲーション',
    'footer.categories': 'カテゴリー',
    'footer.madeWith': '群馬県伊勢崎市で ❤️ とコードで制作',
    'cms-mnr5k95or35b0': 'ファームウェアからインテリジェンスまで: 組み込みエンジニアの AI 学習ノート',
    'cms-mnr5k95or35b0-excerpt': 'この記事では、AI ウェーブにおける組み込みソフトウェア エンジニアの個人的な探索プロセスを記録します。 最初の混乱と抵抗から、プロジェクト主導の手法を使用して学習の行き詰まりを打破し、数学の欠点を補い、理解を深めていくためにファインマンのテクニックを使用することから、著者は徐々に自分の立場、つまり埋め込まれた × AI の交差点を見つけました。 エッジ推論、産業用予知保全、TinyML の展開などの方向性は、基礎となるファームウェアの確かなスキルを必要とするだけでなく、AI モデルの最適化と実装機能にも依存しており、純粋なアルゴリズム エンジニアが複製するのが難しい中核的な競争力を形成します。 この記事には高尚な発言は含まれておらず、深夜のエンジニアの本当の洞察だけが含まれています。すべてを再構築するこの時代において、最も安定した堀は、他の人が越えることのできない複合的な能力です。',

    'a1.p1': '2005年、日本の組込みソフト会社に初めて入った時、目の前にはRL78マイコンの開発ボードと分厚い日本語のデータシートがありました。当時の私は日本語もまだたどたどしく、C言語は初心者レベル。「組込み」の理解は「ハードウェアを動かす」程度でした。',
    'a1.h1': 'アセンブラからCへ',
    'a1.p2': '最初の数年間、毎日の仕事はRL78でアセンブラとCのコードを書くこと。レジスタ操作、割り込み処理、メモリ管理——基礎はしっかり叩き込まれました。AIの支援もなく、デバッグはオシロスコープとprintfだけ。ポインタの一つのバグで丸一日費やすこともありました。',
    'a1.p3': 'しかし、この年月の蓄積が、ハードウェアの深い理解をもたらしました。後に車載ECU開発に転じた時、この基礎が最大の武器となりました。',
    'a1.quote': '技術の本質は、最新のツールを使うことではなく、基本原理をどれだけ深く理解しているかにあります。',
    'a1.h2': '車載ECUとA-SPICE',
    'a1.p4': '自動車業界に入り、A-SPICEというプロセス規格に出会いました。ソフトウェア要件分析からシステム設計、単体テストから結合テストまで、すべてに厳格な規範があります。',
    'a1.p5': 'VectorCASTが常用ツールとなり、HILテストではシミュレーションと実車検証の違いを学びました。プロジェクト管理の経験が、純粋な技術者から部門横断的な技術プロジェクトマネージャーへと成長させてくれました。',
    'a1.h3': 'AI時代の新たな可能性',
    'a1.p6': '今、AIがすべてを変えています。ClaudeやCopilotなどのツールでコーディング効率は何倍にも上がりました。でも私がもっと興味があるのは、AIが組込みシステムにどう統合されるか——エッジデバイスでの推論、MLによる制御アルゴリズムの最適化です。',
    'a1.p7': '子どもたちへ：お父さんの20年間の最大の気づきは、技術は常に変わるが、学びへの情熱は変えてはいけないということ。好奇心を持ち続け、世界への愛を持ち続ければ、必ず自分の道が見つかります。',
    'a2.p1': '群馬の冬はスキーに最適な季節。我が家の5人家族が、ついに今年の冬、初のスキー旅行を果たしました。3人の子ども、一番上は6歳すぎ、一番下はまだ4歳——想像するだけで「戦い」になることがわかります。',
    'a2.h1': '出発前の不安',
    'a2.p2': '1週間前から準備開始：レンタル予約、防水手袋、カイロ、おやつ袋……妻に「軍事作戦の準備みたい」と言われました。でも、3人の小さな子どもを連れ出すのに、万全の準備なしでは無理です。',
    'a2.h2': '涙と笑い',
    'a2.p3': 'スキー場に着くと、長男は興奮して飛び出し——すぐにひっくり返りました。次男は真っ白な景色を見て泣き出しました。「寒い、帰りたい！」末っ子は平気で雪遊びを満喫していました。',
    'a2.p4': 'コーチの辛抱強い指導のおかげで、3人とも初級コースをゆっくり滑り降りられるようになりました。恐怖から楽しさへと変わる姿を見て、これが今年一番記録すべき瞬間だと思いました。',
    'a2.quote': '子どもとスキーをする最大の収穫は技術ではなく、恐怖に向き合い、それを乗り越えることを教えられたこと。',
    'a2.p5': '帰り道、3人の子どもは車の中で即寝。妻と顔を見合わせて笑いました。疲れ果てたけど、心は温かい。これが人生で最も美しい瞬間なのでしょう。',
    'a3.p1': '去年の正月、実家で古い写真の大箱を見つけました。黄ばんだ写真用紙、ぼやけた顔——両親の若い頃の記憶、貴重だけど脆い。AIで修復することにしました。',
    'a3.h1': 'ツール選び',
    'a3.p2': '調査の結果、GFPGANとCodeFormerを選びました。GFPGANは顔の細部復元が得意で、CodeFormerは劣化が激しい写真に強い。後にSUPIRも試し、高解像度復元で驚くべき結果を得ました。',
    'a3.p3': 'ワークフロー全体はComfyUIで構築。複数のモデルを連携させ、まずノイズ除去と色補正、次に顔修復と超解像。組込みエンジニアとして、このパイプラインの構築は新鮮で刺激的でした。',
    'a3.h2': '両親の青春が蘇る',
    'a3.p4': '修復した写真を母に送ると、電話の向こうは長い沈黙。そして「これ、本当にお父さんとお母さんの若い頃なの……」と。あの瞬間、すべての苦労が報われました。',
    'a3.quote': '技術の最も感動的な瞬間は、その力強さではなく、消えゆく記憶を留めてくれる時です。',
    'a3.p5': '修復した写真をアルバムに印刷し、両親へのお年賀ギフトにしました。この技術を数人の友人にも教えました——これこそAIの最も美しい使い方の一つだと思います。',
  }
};

// ---- Article Data ----
const articles = [
  {
    id: 'article-1',
    category: 'work',
    date: '2026-03-15',
    titleKey: 'article1.title',
    excerptKey: 'article1.excerpt',
    gradient: 'linear-gradient(135deg, #B85C38 0%, #5B7B6A 100%)'
  },
  {
    id: 'article-2',
    category: 'life',
    date: '2026-02-28',
    titleKey: 'article2.title',
    excerptKey: 'article2.excerpt',
    gradient: 'linear-gradient(135deg, #5B7B6A 0%, #8DB48E 100%)'
  },
  {
    id: 'article-3',
    category: 'hobby',
    date: '2026-01-20',
    titleKey: 'article3.title',
    excerptKey: 'article3.excerpt',
    gradient: 'linear-gradient(135deg, #C4956A 0%, #B85C38 100%)'
  },
  {
    id: 'article-1',
    category: 'thoughts',
    date: '2025-12-10',
    titleKey: 'article1.title',
    excerptKey: 'article1.excerpt',
    gradient: 'linear-gradient(135deg, #8B7355 0%, #B85C38 100%)'
  },
  {
    id: 'article-2',
    category: 'life',
    date: '2025-11-15',
    titleKey: 'article2.title',
    excerptKey: 'article2.excerpt',
    gradient: 'linear-gradient(135deg, #6B8E7B 0%, #5B7B6A 100%)'
  },
  {
    id: 'article-3',
    category: 'hobby',
    date: '2025-10-08',
    titleKey: 'article3.title',
    excerptKey: 'article3.excerpt',
    gradient: 'linear-gradient(135deg, #D4855E 0%, #C4956A 100%)'
  }
,
  {
    id: 'cms-mnr5k95or35b0',
    category: 'life',
    date: '2026-04-09',
    titleKey: 'cms-mnr5k95or35b0',
    excerptKey: 'cms-mnr5k95or35b0-excerpt',
    gradient: 'linear-gradient(135deg, #5B7B6A 0%, #B85C38 100%)'
  }
];

// ---- State ----
let currentLang = 'zh';
let currentPage = 'home';

// ---- Navigation (SPA) ----
function navigateTo(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + pageId);
  if (target) {
    target.classList.add('active');
    currentPage = pageId;
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
  // Close mobile menu
  const nav = document.getElementById('nav-main');
  nav.classList.remove('open');
  // Re-trigger fade-in animations
  setTimeout(() => observeFadeIns(), 100);
}

function filterArticles(category) {
  navigateTo('archive');
  setTimeout(() => {
    const btns = document.querySelectorAll('.filter-btn');
    btns.forEach(b => b.classList.remove('active'));
    btns.forEach(b => {
      const cat = b.getAttribute('onclick')?.match(/'([^']+)'/)?.[1];
      if (cat === category) b.classList.add('active');
    });
    renderArticleGrid(category);
  }, 100);
}

function filterCategory(btn, category) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderArticleGrid(category);
}

// ---- Render Article Grid ----
function renderArticleGrid(filter = 'all') {
  const grid = document.getElementById('articles-grid');
  if (!grid) return;
  const filtered = filter === 'all' ? articles : articles.filter(a => a.category === filter);
  const t = i18n[currentLang] || i18n.zh;
  const catMap = { work: t['cat.work'], life: t['cat.life'], hobby: t['cat.hobby'], thoughts: t['cat.thoughts'] };

  grid.innerHTML = filtered.map(a => `
    <article class="card fade-in visible">
      <div class="card-image">
        <div style="width:100%;height:100%;background:${a.gradient};"></div>
      </div>
      <div class="card-content">
        <div class="card-meta">
          <span class="card-category">${catMap[a.category] || a.category}</span>
          <span>${a.date}</span>
        </div>
        <h3 class="card-title">
          <a href="#" onclick="navigateTo('${a.id}'); return false;">${t[a.titleKey] || a.titleKey}</a>
        </h3>
        <p class="card-excerpt">${t[a.excerptKey] || a.excerptKey}</p>
      </div>
    </article>
  `).join('');
}

// ---- Language Switching ----
function setLang(lang) {
  currentLang = lang;
  const t = i18n[lang];
  if (!t) return;

  // Update lang attribute
  const langMap = { zh: 'zh', en: 'en', ja: 'ja' };
  document.documentElement.lang = langMap[lang];

  // Update all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  // Update active button
  document.querySelectorAll('.lang-switcher button').forEach(btn => {
    btn.classList.remove('active');
  });
  const labels = { zh: '中', en: 'EN', ja: '日' };
  document.querySelectorAll('.lang-switcher button').forEach(btn => {
    if (btn.textContent.trim() === labels[lang]) {
      btn.classList.add('active');
    }
  });

  // Re-render article grid if on archive page
  if (currentPage === 'archive') {
    const activeFilter = document.querySelector('.filter-btn.active');
    const cat = activeFilter?.getAttribute('onclick')?.match(/'([^']+)'/)?.[1] || 'all';
    renderArticleGrid(cat);
  }
}

// ---- Theme Toggle ----
(function() {
  const toggle = document.querySelector('[data-theme-toggle]');
  const root = document.documentElement;
  let theme = matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light';
  root.setAttribute('data-theme', theme);

  if (toggle) {
    updateToggleIcon(toggle, theme);
    toggle.addEventListener('click', () => {
      theme = theme === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', theme);
      toggle.setAttribute('aria-label', 'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' mode');
      updateToggleIcon(toggle, theme);
    });
  }

  function updateToggleIcon(el, t) {
    el.innerHTML = t === 'dark'
      ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
      : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  }
})();

// ---- Mobile Menu ----
function toggleMenu() {
  const nav = document.getElementById('nav-main');
  const btn = document.querySelector('.mobile-menu-toggle');
  const isOpen = nav.classList.toggle('open');
  btn.setAttribute('aria-expanded', isOpen);
}

// ---- Scroll Animations ----
function observeFadeIns() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-in:not(.visible)').forEach(el => {
    observer.observe(el);
  });
}

// ---- Header scroll behavior ----
let lastScrollY = 0;
window.addEventListener('scroll', () => {
  const header = document.querySelector('.site-header');
  const scrollY = window.scrollY;
  if (scrollY > 60) {
    header.classList.add('site-header--scrolled');
  } else {
    header.classList.remove('site-header--scrolled');
  }
  lastScrollY = scrollY;
}, { passive: true });

// ---- Init ----
document.addEventListener('DOMContentLoaded', () => {
  observeFadeIns();
  renderArticleGrid('all');
});
