/* ====== QUESTIONS: English Q/A, tip на русском (индивидуально) ====== */
const QUESTIONS = [
  { before: "I live", after: "Moscow.", correct: "in", options: ["in","at","on"],
    tip: "In — для городов и стран. Не 'at Moscow'.",
    tipExplain: "Русскоговорящие часто говорят 'at' по аналогии с 'у' — запомни: in Moscow, in Russia." },

  { before: "She is", after: "the kitchen.", correct: "in", options: ["in","on","at"],
    tip: "In — внутри помещения.",
    tipExplain: "Если говорим про комнату/помещение — используем in. On — на поверхности (on the table)." },

  { before: "I will meet you", after: "the cafe.", correct: "at", options: ["in","at","on"],
    tip: "At — точка встречи (кафе, station).",
    tipExplain: "Meet at the cafe — означает место встречи, не важно, внутри или снаружи." },

  { before: "He works", after: "a bank.", correct: "at", options: ["in","at","on"],
    tip: "At — место работы в общем. In — когда акцент на здании.",
    tipExplain: "Say 'he works at a bank' (occupation). 'He is in the bank' — он внутри здания сейчас." },

  { before: "The book is", after: "the table.", correct: "on", options: ["in","on","at"],
    tip: "On — на поверхности.",
    tipExplain: "Запомни: book on the table — книга лежит на столе." },

  { before: "I was born", after: "1990.", correct: "in", options: ["in","on","at"],
    tip: "In — для года/десятилетия/века.",
    tipExplain: "Years: in 1990. Dates: on June 5th. Time: at 3 p.m." },

  { before: "Her birthday is", after: "June 5th.", correct: "on", options: ["in","on","at"],
    tip: "On — конкретная дата.",
    tipExplain: "On June 5th — точно. But 'in June' — месяц." },

  { before: "I have a meeting", after: "3 p.m.", correct: "at", options: ["at","in","on"],
    tip: "At — точное время (at 3 p.m.).",
    tipExplain: "Русские путают с 'in' — не правильно: in 3 p.m." },

  { before: "He went", after: "home.", correct: "home", options: ["to","home","at"],
    tip: "Home — часто без предлога после go/come/be.",
    tipExplain: "Say 'go home', 'be home'. 'To home' — неправильно в обычной речи." },

  { before: "She came", after: "the shop.", correct: "to", options: ["to","in","at"],
    tip: "To — направление (go/come to).",
    tipExplain: "To the shop — движение в направлении магазина. In — уже внутри." },

  { before: "Put the milk", after: "the fridge.", correct: "in", options: ["in","on","at"],
    tip: "In — предмет внутрь (в холодильник).",
    tipExplain: "In the fridge — внутри. On the fridge — на верху, редко." },

  { before: "He jumped", after: "the pool.", correct: "into", options: ["in","into","onto"],
    tip: "Into — движение внутрь: jump into the pool.",
    tipExplain: "'In the pool' — состояние (он в бассейне). 'Into' — он перепрыгнул внутрь." },

  { before: "The cat sat", after: "the mat.", correct: "on", options: ["in","on","at"],
    tip: "On — на поверхности. 'In' — внутри (если коврик мешок).",
    tipExplain: "Cat on the mat — классический пример." },

  { before: "I put the poster", after: "the wall.", correct: "on", options: ["to","on","in"],
    tip: "On — когда что-то крепится к стене.",
    tipExplain: "On the wall — на стене. 'To the wall' — к стене (движение), редко." },

  { before: "We walked", after: "the park.", correct: "through", options: ["across","through","in"],
    tip: "Through — пройтись сквозь/по территории.",
    tipExplain: "Through the park — по парку; across — с одного края в другой." },

  { before: "Phone is", after: "the table.", correct: "on", options: ["in","on","by"],
    tip: "On — на столе. By — рядом.",
    tipExplain: "Phone on the table — телефон лежит на столе; by the table — рядом." },

  { before: "She is good", after: "piano.", correct: "at", options: ["in","at","with"],
    tip: "Good at — навык/умение.",
    tipExplain: "Good at piano — хорошо играет; 'good in' — ошибка." },

  { before: "He is afraid", after: "spiders.", correct: "of", options: ["for","of","about"],
    tip: "Afraid of — страх чего-то.",
    tipExplain: "Afraid of spiders — боится пауков. For — беспокоиться за кого-то." },

  { before: "I bought it", after: "the market.", correct: "at", options: ["in","at","from"],
    tip: "At — место покупки; from — продавец/источник.",
    tipExplain: "Bought at the market — купил на рынке. Bought from Anna — купил у Анны." },

  { before: "She apologized", after: "the mistake.", correct: "for", options: ["about","for","to"],
    tip: "Apologize for — за действие; apologize to — кому.",
    tipExplain: "'Sorry for the mistake' vs 'sorry to him' — разница." },

  { before: "We arrived", after: "the airport.", correct: "at", options: ["in","at","on"],
    tip: "Arrive at — точка (airport, station); arrive in — город/страна.",
    tipExplain: "Arrive at the airport / arrive in London." },

  { before: "He stood", after: "the corner.", correct: "in", options: ["in","on","at"],
    tip: "In the corner vs at the corner — разные значения.",
    tipExplain: "In the corner — внутри угла/у стены; at the corner — на перекрёстке." },

  { before: "The meme went", after: "the internet.", correct: "around", options: ["on","around","in"],
    tip: "Around — шутливо: распространяться повсеместно.",
    tipExplain: "Go around the internet — мем распространяется. On the internet — находится онлайн." },

  { before: "She put her headphones", after: "ears.", correct: "in", options: ["on","in","over"],
    tip: "In — наушники вставляются в уши (in your ears).",
    tipExplain: "Over — накрывать (over your ears) для больших наушников." },

  { before: "He posted the joke", after: "Reddit.", correct: "on", options: ["in","at","on"],
    tip: "On — платформы: on Reddit, on Facebook.",
    tipExplain: "In Reddit — ошибочно; 'in the subreddit' — возможно." },

  { before: "He's not interested", after: "politics anymore.", correct: "in",
    options: ["in","on","at"],
    tip: "Interested in — интерес к чему-то.",
    tipExplain: "Не 'on politics'. 'On' — про тему разговора, но не про интерес." },

  { before: "Let's talk", after: "your plans.", correct: "about",
    options: ["on","about","of"],
    tip: "Talk about — обсудить тему.",
    tipExplain: "Не 'talk on' — это лекция; 'talk about' — разговор." },

  { before: "She depends", after: "her parents.", correct: "on",
    options: ["from","on","of"],
    tip: "Depend on — зависеть от кого-то.",
    tipExplain: "Славяне часто говорят 'depend from' по кальке — это ошибка." },

  { before: "This song reminds me", after: "my ex.", correct: "of",
    options: ["about","of","from"],
    tip: "Remind of — напоминать о ком-то.",
    tipExplain: "Remind about — напомнить сделать что-то (to remind about a meeting)." },

  { before: "He laughed", after: "the meme for 5 minutes.", correct: "at",
    options: ["of","at","about"],
    tip: "Laugh at — смеяться над чем-то.",
    tipExplain: "Славяне часто говорят 'laugh on' — ошибка." },

  { before: "She shouted", after: "me angrily.", correct: "at",
    options: ["on","to","at"],
    tip: "Shout at — кричать на кого-то.",
    tipExplain: "Shout to — позвать, чтобы человек услышал. Shout at — с эмоцией, злостью." },

  { before: "He's married", after: "a designer.", correct: "to",
    options: ["with","to","for"],
    tip: "Married to — женат на / замужем за.",
    tipExplain: "Не 'married with'. Это калька с русского." },

  { before: "This photo was taken", after: "the beach.", correct: "on",
    options: ["at","in","on"],
    tip: "On — для поверхности и открытых мест: on the beach, on the street.",
    tipExplain: "At the beach — фокус на месте отдыха; on the beach — прямо на песке." },

  { before: "He's good", after: "memes.", correct: "at",
    options: ["in","at","with"],
    tip: "Good at — про умение.",
    tipExplain: "Русские часто ставят 'good in', думая о 'в'. Но это ошибка." },

  { before: "The movie is based", after: "a true story.", correct: "on",
    options: ["in","at","on"],
    tip: "Based on — основываться на чем-то.",
    tipExplain: "Никогда не 'based in' — это про географию ('based in London')." },

  { before: "He apologized", after: "being late.", correct: "for",
    options: ["about","for","to"],
    tip: "Apologize for — за что-то.",
    tipExplain: "Apologize about — ошибка, нет такого сочетания." },

  { before: "She's afraid", after: "missing the flight.", correct: "of",
    options: ["from","of","for"],
    tip: "Afraid of — бояться чего-то.",
    tipExplain: "Славяне часто забывают 'of' в конструкциях." },

  { before: "Don't worry", after: "it.", correct: "about",
    options: ["for","about","of"],
    tip: "Worry about — волноваться о чем-то.",
    tipExplain: "Не 'worry for' — это больше про заботу." },

  { before: "He's tired", after: "doing nothing all day.", correct: "of",
    options: ["from","of","about"],
    tip: "Tired of — устал от.",
    tipExplain: "Tired from — физически устал после чего-то, nuance." },

  { before: "She's famous", after: "her cat videos.", correct: "for",
    options: ["about","for","of"],
    tip: "Famous for — известна благодаря чему-то.",
    tipExplain: "Не 'famous of'." },

  { before: "He's bad", after: "remembering names.", correct: "at",
    options: ["in","at","with"],
    tip: "Bad at — противоположность good at.",
    tipExplain: "At — сфера навыка." },

  { before: "He's proud", after: "his son.", correct: "of",
    options: ["for","of","about"],
    tip: "Proud of — гордиться кем-то.",
    tipExplain: "Не 'proud for' — калька с русского." },

  { before: "She dreams", after: "moving abroad.", correct: "of",
    options: ["about","of","for"],
    tip: "Dream of — мечтать о (в реальности). Dream about — сон.",
    tipExplain: "Dream of — желание. Dream about — то, что снится." },

  { before: "Stop looking", after: "your phone every 5 seconds.", correct: "at",
    options: ["on","to","at"],
    tip: "Look at — смотреть на.",
    tipExplain: "Славяне часто говорят 'look on' — калька." },

  { before: "He's addicted", after: "coffee and chaos.", correct: "to",
    options: ["for","with","to"],
    tip: "Addicted to — зависим от.",
    tipExplain: "Не 'addicted with' — ошибка." },

  { before: "I'm waiting", after: "my turn.", correct: "for",
    options: ["of","for","to"],
    tip: "Wait for — ждать кого/чего.",
    tipExplain: "Не 'wait of' — калька с французского 'attendre de'." },

  { before: "She's responsible", after: "marketing.", correct: "for",
    options: ["of","for","about"],
    tip: "Responsible for — отвечать за.",
    tipExplain: "Не 'responsible of'." },

  { before: "He's jealous", after: "her followers.", correct: "of",
    options: ["for","of","about"],
    tip: "Jealous of — ревновать, завидовать.",
    tipExplain: "Не 'jealous for'." },

  { before: "This meme was made", after: "AI.", correct: "by",
    options: ["by","from","with"],
    tip: "By — кто сделал.",
    tipExplain: "By AI — автор. From — из материала. With — инструмент." },

  { before: "He's famous", after: "being lazy on TikTok.", correct: "for",
    options: ["about","for","to"],
    tip: "Famous for — за что известен.",
    tipExplain: "Комбо из мемного контекста: famous for doing nothing." },

  { before: "He insisted", after: "paying the bill.", correct: "on",
    options: ["on","for","about"],
    tip: "Insist on — настаивать на чем-то.",
    tipExplain: "Не 'insist to'! После insist всегда on + V-ing." },

  { before: "I'm looking forward", after: "the weekend.", correct: "to",
    options: ["to","for","on"],
    tip: "Look forward to — ждать с нетерпением.",
    tipExplain: "После to идёт герундий: looking forward to seeing you." },

  { before: "He apologized", after: "his behavior yesterday.", correct: "for",
    options: ["about","for","from"],
    tip: "Apologize for — извиняться за что-то.",
    tipExplain: "Повторяем: apologize to — перед кем, for — за что." },

  { before: "She complained", after: "the noise.", correct: "about",
    options: ["about","for","on"],
    tip: "Complain about — жаловаться на что-то.",
    tipExplain: "Complain to — жаловаться кому-то." },

  { before: "I'm tired", after: "your drama.", correct: "of",
    options: ["from","of","about"],
    tip: "Tired of — устал от чего-то (эмоционально).",
    tipExplain: "Tired from — физическая усталость." },

  { before: "He succeeded", after: "breaking the code.", correct: "in",
    options: ["at","in","on"],
    tip: "Succeed in — преуспеть в.",
    tipExplain: "Славяне путают с 'at'. 'At' — конкретное действие, 'in' — общее направление." },

  { before: "She accused him", after: "cheating.", correct: "of",
    options: ["on","of","for"],
    tip: "Accuse of — обвинять в чем-то.",
    tipExplain: "Не 'accuse on'. После accuse всегда of." },

  { before: "He belongs", after: "the guild of meme-lords.", correct: "to",
    options: ["in","to","at"],
    tip: "Belong to — принадлежать кому-то.",
    tipExplain: "Не 'belong in' — это 'находиться в месте'." },

  { before: "This code consists", after: "spaghetti and magic.", correct: "of",
    options: ["of","from","in"],
    tip: "Consist of — состоять из частей.",
    tipExplain: "Consist from — калька, неверно." },

  { before: "He congratulated her", after: "passing the exam.", correct: "on",
    options: ["for","about","on"],
    tip: "Congratulate on — поздравлять с чем-то.",
    tipExplain: "Не 'for'. 'For' — за что-то, а не по поводу." },

  { before: "Don't rely", after: "luck too much.", correct: "on",
    options: ["on","to","at"],
    tip: "Rely on — полагаться на.",
    tipExplain: "Не 'rely at'." },

  { before: "He blamed the cat", after: "everything.", correct: "for",
    options: ["of","for","on"],
    tip: "Blame for — винить за.",
    tipExplain: "Blame on — перекладывать ответственность: 'blame it on me'." },

  { before: "Let's focus", after: "the main task.", correct: "on",
    options: ["at","in","on"],
    tip: "Focus on — сосредоточиться на.",
    tipExplain: "Focus at — неверно. Помни: 'on' — направление внимания." },

  { before: "He apologized", after: "her directly.", correct: "to",
    options: ["for","to","at"],
    tip: "Apologize to — извиниться перед кем-то.",
    tipExplain: "Повторение — мать учения." },

  { before: "He spent too much time", after: "Reddit.", correct: "on",
    options: ["in","on","at"],
    tip: "On — про платформы и сайты.",
    tipExplain: "On Reddit, on Instagram, on YouTube — всегда 'on'." },

  { before: "She participated", after: "the contest.", correct: "in",
    options: ["in","on","at"],
    tip: "Participate in — участвовать в.",
    tipExplain: "Не 'at contest' — ошибка." },

  { before: "He's famous", after: "his sarcasm.", correct: "for",
    options: ["of","for","from"],
    tip: "Famous for — за что известен.",
    tipExplain: "Не 'famous of'." },

  { before: "Stop comparing yourself", after: "others.", correct: "to",
    options: ["with","to","for"],
    tip: "Compare to — сравнивать в общем (людей, вещи).",
    tipExplain: "Compare with — при детальном сравнении. Запомни: 'Don't compare to your ex'." },

  { before: "He shouted", after: "me from across the street.", correct: "to",
    options: ["at","to","on"],
    tip: "Shout to — позвать, чтобы услышали.",
    tipExplain: "Shout at — злость; shout to — просто громко позвать." },

  { before: "He filled the glass", after: "water.", correct: "with",
    options: ["of","with","from"],
    tip: "Fill with — наполнить чем-то.",
    tipExplain: "Fill of — ошибка." },

  { before: "She translated the meme", after: "Russian.", correct: "into",
    options: ["in","to","into"],
    tip: "Translate into — переводить на язык.",
    tipExplain: "Не 'to Russian' — ошибка славян." },

  { before: "He suffered", after: "burnout again.", correct: "from",
    options: ["of","from","by"],
    tip: "Suffer from — страдать от.",
    tipExplain: "Suffer of — ошибка кальки с латыни." },

  { before: "The company invests", after: "AI research.", correct: "in",
    options: ["to","in","for"],
    tip: "Invest in — инвестировать в.",
    tipExplain: "Не 'invest to' — это калька с русского." },

  { before: "She divided the money", after: "two wallets.", correct: "between",
    options: ["among","between","into"],
    tip: "Between — между двумя, among — между многими.",
    tipExplain: "Between = 2, among = 3+." },

  { before: "He is capable", after: "doing great things.", correct: "of",
    options: ["of","for","at"],
    tip: "Capable of — способен на.",
    tipExplain: "Не 'capable for'." },

  { before: "Despite the chaos,", after: "we managed to stay calm.", correct: "—",
    options: ["—","although","in spite"],
    tip: "Despite — предлог, не союз.",
    tipExplain: "После despite ставим существительное или герундий: despite the rain. Не 'despite we'." },

  { before: "He's above", after: "petty arguments.", correct: "—",
    options: ["—","in","on"],
    tip: "Above — над чем-то, в переносном смысле.",
    tipExplain: "Above drama — 'выше этого'. Не 'over drama'." },

  { before: "She succeeded", after: "spite of bad odds.", correct: "in",
    options: ["in","despite","at"],
    tip: "In spite of — предлог. Не путай с 'despite' и 'in'.",
    tipExplain: "In spite of = despite, но с of." },

  { before: "He broke up", after: "her over text.", correct: "with",
    options: ["from","with","to"],
    tip: "Break up with — расстаться с кем-то.",
    tipExplain: "Славяне забывают with — важно!" },

  { before: "She's obsessed", after: "productivity hacks.", correct: "with",
    options: ["by","with","about"],
    tip: "Obsessed with — помешан на.",
    tipExplain: "By — агент, не подходит. Сравни: inspired by — но obsessed with." },

  { before: "He ran", after: "coffee before 10 a.m.", correct: "out of",
    options: ["out of","from","off"],
    tip: "Run out of — закончилось.",
    tipExplain: "Фразовый глагол: 'run out of sugar' — 'закончился сахар'." },

  { before: "He gave up", after: "trying to understand JavaScript.", correct: "on",
    options: ["with","in","on"],
    tip: "Give up on — перестать верить/пытаться.",
    tipExplain: "Give up = бросить, give up on — опустить руки по отношению к чему-то." },

  { before: "He's into", after: "philosophy and memes.", correct: "—",
    options: ["—","in","at"],
    tip: "Be into — увлекаться.",
    tipExplain: "Into — разговорное выражение. Не добавляй ничего лишнего." },

  { before: "The joke went", after: "my head.", correct: "over",
    options: ["on","over","above"],
    tip: "Go over someone's head — не понять шутку.",
    tipExplain: "Дословно 'пролетело над головой'." },

  { before: "He came up", after: "an interesting theory.", correct: "with",
    options: ["to","with","on"],
    tip: "Come up with — придумать.",
    tipExplain: "Фразовый глагол. Без with — смысл теряется." },

  { before: "She looked", after: "him straight in the eyes.", correct: "at",
    options: ["at","to","on"],
    tip: "Look at — смотреть на кого-то.",
    tipExplain: "Не 'look to' — это ожидать помощи." },

  { before: "He's been through", after: "a lot this year.", correct: "—",
    options: ["—","in","over"],
    tip: "Go through — пройти через трудности.",
    tipExplain: "Through — про пережитое. Не 'over'." },

  { before: "She's recovering", after: "burnout.", correct: "from",
    options: ["from","of","after"],
    tip: "Recover from — восстанавливаться после.",
    tipExplain: "Не 'after burnout' — здесь нужен предлог from." },

  { before: "He invested too much energy", after: "the wrong project.", correct: "in",
    options: ["to","for","in"],
    tip: "Invest in — вложить в.",
    tipExplain: "Славяне говорят 'to project', но это ошибка." },

  { before: "He was accused", after: "cheating the algorithm.", correct: "of",
    options: ["of","for","on"],
    tip: "Accused of — обвинён в.",
    tipExplain: "После accused всегда of + V-ing." },

  { before: "He's skeptical", after: "everything new.", correct: "about",
    options: ["of","about","to"],
    tip: "Skeptical about — сомневаться в.",
    tipExplain: "Skeptical of — формальный вариант, about — нейтрально." },

  { before: "He differs", after: "his brother in everything.", correct: "from",
    options: ["of","from","with"],
    tip: "Differ from — отличаться от.",
    tipExplain: "Не 'differ with' — это про несогласие." },

  { before: "She apologized", after: "not replying earlier.", correct: "for",
    options: ["about","for","of"],
    tip: "Apologize for — за что.",
    tipExplain: "For not replying — стандартный паттерн." },

  { before: "He was disappointed", after: "the result.", correct: "with",
    options: ["by","with","in"],
    tip: "Disappointed with — разочарован чем-то конкретным.",
    tipExplain: "Disappointed in — в человеке. Разница тонкая." },

  { before: "He's responsible", after: "handling support tickets.", correct: "for",
    options: ["for","of","in"],
    tip: "Responsible for — отвечать за.",
    tipExplain: "Никогда не 'responsible of'." },

  { before: "She's bored", after: "doing the same tasks.", correct: "with",
    options: ["of","with","from"],
    tip: "Bored with — устала от чего-то.",
    tipExplain: "Bored of — разговорно, но нейтрально лучше 'with'." },

  { before: "He's allergic", after: "bullshit.", correct: "to",
    options: ["for","to","of"],
    tip: "Allergic to — аллергия на.",
    tipExplain: "Фраза используется и в переносном смысле: 'allergic to drama'." },

  { before: "He's famous", after: "doing nothing efficiently.", correct: "for",
    options: ["about","for","with"],
    tip: "Famous for — за что известен.",
    tipExplain: "Типичный мем о продуктивном безделье." },

  { before: "He prefers coffee", after: "tea.", correct: "to",
    options: ["than","for","to"],
    tip: "Prefer A to B — предпочитать одно другому.",
    tipExplain: "Не 'prefer than' — ошибка славян." },

  { before: "He thrives", after: "chaos.", correct: "on",
    options: ["on","in","from"],
    tip: "Thrive on — процветать благодаря.",
    tipExplain: "Мемно: 'He thrives on drama' — ему нужна драма, чтобы жить." }
];
