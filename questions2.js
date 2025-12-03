/* ====== QUESTIONS LEVEL 2: Advanced prepositions, phrasal verbs, idioms ====== */
var QUESTIONS = [
  { before: "I can't put", after: "his rudeness anymore.", correct: "up with", options: ["up with","up to","off with"],
    tip: "Put up with — терпеть что-то.",
    tipExplain: "Фразовый глагол. 'Put up to' — подстрекать. 'Put off' — откладывать." },

  { before: "She takes", after: "her mother.", correct: "after", options: ["after","on","over"],
    tip: "Take after — быть похожим на родственника.",
    tipExplain: "Take on — брать на себя. Take over — перенять контроль." },

  { before: "He backed", after: "of the deal at the last minute.", correct: "out", options: ["out","off","down"],
    tip: "Back out — отступить, отказаться.",
    tipExplain: "Back off — отойти. Back down — уступить в споре." },

  { before: "The meeting was called", after: "due to the storm.", correct: "off", options: ["off","out","up"],
    tip: "Call off — отменить.",
    tipExplain: "Call out — вызвать. Call up — позвонить." },

  { before: "I came", after: "an old photo in the attic.", correct: "across", options: ["across","up","through"],
    tip: "Come across — случайно найти.",
    tipExplain: "Come up — возникнуть. Come through — пережить." },

  { before: "She's been going", after: "a difficult time.", correct: "through", options: ["through","over","by"],
    tip: "Go through — переживать трудности.",
    tipExplain: "Go over — пересмотреть. Go by — проходить мимо." },

  { before: "Let's get", after: "to business.", correct: "down", options: ["down","on","up"],
    tip: "Get down to — приступить к делу.",
    tipExplain: "Идиома: 'Let's get down to business' — давай перейдём к делу." },

  { before: "He looks", after: "to his father.", correct: "up", options: ["up","down","after"],
    tip: "Look up to — восхищаться, уважать.",
    tipExplain: "Look down on — смотреть свысока. Look after — заботиться." },

  { before: "The company laid", after: "500 workers.", correct: "off", options: ["off","out","down"],
    tip: "Lay off — уволить (по сокращению).",
    tipExplain: "Lay out — разложить. Lay down — положить." },

  { before: "I ran", after: "my old teacher yesterday.", correct: "into", options: ["into","over","through"],
    tip: "Run into — случайно встретить.",
    tipExplain: "Run over — переехать. Run through — пройтись по чему-то." },

  { before: "She turned", after: "the job offer.", correct: "down", options: ["down","off","over"],
    tip: "Turn down — отклонить предложение.",
    tipExplain: "Turn off — выключить. Turn over — перевернуть." },

  { before: "I'm looking", after: "to hearing from you.", correct: "forward", options: ["forward","up","out"],
    tip: "Look forward to — ждать с нетерпением.",
    tipExplain: "После 'to' идёт герундий: looking forward to seeing you." },

  { before: "He broke", after: "in the middle of his speech.", correct: "down", options: ["down","up","off"],
    tip: "Break down — сломаться/расплакаться.",
    tipExplain: "Break up — расстаться. Break off — прервать." },

  { before: "We need to cut", after: "on expenses.", correct: "down", options: ["down","off","out"],
    tip: "Cut down on — сократить расходы.",
    tipExplain: "Cut off — отрезать. Cut out — вырезать/прекратить." },

  { before: "I'll drop", after: "the documents later.", correct: "off", options: ["off","in","by"],
    tip: "Drop off — завезти, оставить.",
    tipExplain: "Drop in/by — заглянуть ненадолго." },

  { before: "She was taken", after: "by the scam.", correct: "in", options: ["in","on","over"],
    tip: "Take in — обмануть, одурачить.",
    tipExplain: "Be taken in by — быть обманутым." },

  { before: "He stands", after: "what he believes.", correct: "by", options: ["by","for","up"],
    tip: "Stand by — поддерживать, стоять на своём.",
    tipExplain: "Stand for — означать. Stand up — встать." },

  { before: "The fire broke", after: "in the warehouse.", correct: "out", options: ["out","down","up"],
    tip: "Break out — вспыхнуть (пожар, война).",
    tipExplain: "Fires, wars, diseases break out." },

  { before: "I'll make", after: "for being late.", correct: "up", options: ["up","off","out"],
    tip: "Make up for — компенсировать.",
    tipExplain: "Make off — убежать. Make out — разобрать." },

  { before: "She passed", after: "from a heart attack.", correct: "away", options: ["away","out","by"],
    tip: "Pass away — умереть (эвфемизм).",
    tipExplain: "Pass out — потерять сознание. Pass by — проходить мимо." },

  { before: "The plane took", after: "an hour late.", correct: "off", options: ["off","on","up"],
    tip: "Take off — взлететь.",
    tipExplain: "Take on — взяться за. Take up — занять (время/место)." },

  { before: "I need to catch", after: "on some sleep.", correct: "up", options: ["up","on","out"],
    tip: "Catch up on — наверстать.",
    tipExplain: "Catch up on sleep — выспаться. Catch up with — догнать кого-то." },

  { before: "She set", after: "on a journey around the world.", correct: "off", options: ["off","out","up"],
    tip: "Set off — отправиться в путь.",
    tipExplain: "Set out — намереваться. Set up — организовать." },

  { before: "I can't figure", after: "how to solve this.", correct: "out", options: ["out","up","in"],
    tip: "Figure out — разобраться, понять.",
    tipExplain: "Фразовый глагол: Can't figure it out — не могу понять." },

  { before: "He's been seeing", after: "someone new.", correct: "—", options: ["—","with","to"],
    tip: "See someone — встречаться с кем-то.",
    tipExplain: "Без предлога! 'Seeing with someone' — ошибка." },

  { before: "She showed", after: "late as usual.", correct: "up", options: ["up","off","in"],
    tip: "Show up — появиться.",
    tipExplain: "Show off — хвастаться. Show in — впустить." },

  { before: "He's looking", after: "the project.", correct: "into", options: ["into","at","for"],
    tip: "Look into — расследовать, изучать.",
    tipExplain: "Look at — смотреть на. Look for — искать." },

  { before: "The car pulled", after: "at the gas station.", correct: "in", options: ["in","up","over"],
    tip: "Pull in — заехать (на станцию).",
    tipExplain: "Pull up — остановиться. Pull over — съехать на обочину." },

  { before: "She came", after: "with a great idea.", correct: "up", options: ["up","out","through"],
    tip: "Come up with — придумать.",
    tipExplain: "Come out — выйти. Come through — справиться." },

  { before: "I'll think it", after: "and get back to you.", correct: "over", options: ["over","through","about"],
    tip: "Think over — обдумать.",
    tipExplain: "Think through — продумать до конца. Think about — думать о." },

  { before: "He's been holding", after: "important information.", correct: "back", options: ["back","on","up"],
    tip: "Hold back — скрывать, сдерживать.",
    tipExplain: "Hold on — подождать. Hold up — задерживать." },

  { before: "She talked me", after: "of quitting.", correct: "out", options: ["out","into","through"],
    tip: "Talk out of — отговорить.",
    tipExplain: "Talk into — уговорить. Talk through — обсудить детально." },

  { before: "The project fell", after: "due to lack of funding.", correct: "through", options: ["through","apart","down"],
    tip: "Fall through — провалиться (о планах).",
    tipExplain: "Fall apart — развалиться. Fall down — упасть." },

  { before: "I'm counting", after: "you.", correct: "on", options: ["on","for","with"],
    tip: "Count on — рассчитывать на.",
    tipExplain: "I'm counting on you — я на тебя надеюсь." },

  { before: "She takes pride", after: "her work.", correct: "in", options: ["in","of","on"],
    tip: "Take pride in — гордиться чем-то.",
    tipExplain: "Не 'proud of' — это другая конструкция." },

  { before: "I'm fed", after: "with this situation.", correct: "up", options: ["up","off","out"],
    tip: "Fed up with — сыт по горло.",
    tipExplain: "I'm fed up with this — мне это надоело." },

  { before: "He got", after: "with just a warning.", correct: "off", options: ["off","away","by"],
    tip: "Get off — отделаться (легко).",
    tipExplain: "Get away with — уйти безнаказанно. Get by — сводить концы с концами." },

  { before: "She keeps", after: "about the same topic.", correct: "on", options: ["on","up","at"],
    tip: "Keep on — продолжать делать что-то.",
    tipExplain: "Keep up — не отставать. Keep at — упорствовать." },

  { before: "The news hasn't sunk", after: "yet.", correct: "in", options: ["in","down","through"],
    tip: "Sink in — дойти до сознания.",
    tipExplain: "It hasn't sunk in — это ещё не дошло." },

  { before: "I need to brush", after: "on my French.", correct: "up", options: ["up","off","over"],
    tip: "Brush up on — освежить знания.",
    tipExplain: "Brush off — отмахнуться. Brush over — замять." },

  { before: "He was let", after: "with a fine.", correct: "off", options: ["off","out","down"],
    tip: "Let off — отпустить с легким наказанием.",
    tipExplain: "Let out — выпустить. Let down — разочаровать." },

  { before: "She grew", after: "in a small village.", correct: "up", options: ["up","out","on"],
    tip: "Grow up — вырасти.",
    tipExplain: "Grow out — вырасти из. Grow on — начать нравиться." },

  { before: "I'll pick you", after: "at 7.", correct: "up", options: ["up","out","off"],
    tip: "Pick up — забрать (человека).",
    tipExplain: "Pick out — выбрать. Pick off — снять." },

  { before: "The meeting dragged", after: "for hours.", correct: "on", options: ["on","out","up"],
    tip: "Drag on — тянуться долго.",
    tipExplain: "The meeting dragged on — собрание затянулось." },

  { before: "She chickened", after: "at the last moment.", correct: "out", options: ["out","off","up"],
    tip: "Chicken out — струсить.",
    tipExplain: "Разговорное: He chickened out — он сдрейфил." },

  { before: "I'll sleep", after: "it and decide tomorrow.", correct: "on", options: ["on","over","through"],
    tip: "Sleep on it — отложить решение до утра.",
    tipExplain: "Let me sleep on it — дай мне подумать до утра." },

  { before: "He's been living", after: "his parents for years.", correct: "off", options: ["off","with","on"],
    tip: "Live off — жить за чей-то счёт.",
    tipExplain: "Live with — жить вместе. Live on — существовать на." },

  { before: "The truth came", after: "eventually.", correct: "out", options: ["out","up","through"],
    tip: "Come out — выйти наружу (правда).",
    tipExplain: "The truth came out — правда вышла наружу." },

  { before: "She's been putting", after: "the decision.", correct: "off", options: ["off","on","up"],
    tip: "Put off — откладывать.",
    tipExplain: "Don't put it off — не откладывай это." },

  { before: "I'm not cut", after: "for this job.", correct: "out", options: ["out","off","up"],
    tip: "Cut out for — подходить для чего-то.",
    tipExplain: "I'm not cut out for this — это не моё." },

  { before: "He dozed", after: "during the meeting.", correct: "off", options: ["off","out","away"],
    tip: "Doze off — задремать.",
    tipExplain: "He dozed off — он задремал." },

  { before: "She was brought", after: "by her grandparents.", correct: "up", options: ["up","on","out"],
    tip: "Bring up — воспитать.",
    tipExplain: "She was brought up — её воспитали." },

  { before: "The alarm went", after: "at 6 AM.", correct: "off", options: ["off","on","out"],
    tip: "Go off — сработать (будильник, сигнализация).",
    tipExplain: "The alarm went off — будильник прозвенел." },

  { before: "I need to work", after: "my presentation skills.", correct: "on", options: ["on","up","at"],
    tip: "Work on — работать над улучшением.",
    tipExplain: "Work on your skills — работай над навыками." },

  { before: "She stood", after: "for herself.", correct: "up", options: ["up","by","out"],
    tip: "Stand up for — защищать, отстаивать.",
    tipExplain: "Stand up for yourself — отстаивай себя." },

  { before: "The deal fell", after: "at the last minute.", correct: "apart", options: ["apart","through","down"],
    tip: "Fall apart — развалиться.",
    tipExplain: "Fall through — провалиться. Fall apart — распасться." },

  { before: "I need to sort", after: "these papers.", correct: "out", options: ["out","up","through"],
    tip: "Sort out — разобраться, привести в порядок.",
    tipExplain: "Sort this out — разберись с этим." },

  { before: "He's been hanging", after: "with the wrong crowd.", correct: "out", options: ["out","around","on"],
    tip: "Hang out — тусоваться.",
    tipExplain: "Hang around — слоняться. Hang on — подождать." },

  { before: "She's always showing", after: "her new car.", correct: "off", options: ["off","up","out"],
    tip: "Show off — хвастаться.",
    tipExplain: "Stop showing off — хватит выпендриваться." },

  { before: "I'll get", after: "to you later.", correct: "back", options: ["back","on","through"],
    tip: "Get back to — вернуться к разговору.",
    tipExplain: "I'll get back to you — я свяжусь с тобой позже." },

  { before: "He takes", after: "too much work.", correct: "on", options: ["on","up","in"],
    tip: "Take on — брать на себя (работу, ответственность).",
    tipExplain: "Don't take on too much — не бери слишком много." },

  { before: "She burst", after: "tears.", correct: "into", options: ["into","out","in"],
    tip: "Burst into tears — расплакаться.",
    tipExplain: "Burst out laughing — рассмеяться." },

  { before: "I'm worn", after: "after this week.", correct: "out", options: ["out","off","down"],
    tip: "Worn out — измотан.",
    tipExplain: "I'm worn out — я выжат как лимон." },

  { before: "He talked her", after: "buying the car.", correct: "into", options: ["into","out of","to"],
    tip: "Talk into — уговорить.",
    tipExplain: "Talk out of — отговорить. Talk into — уговорить." },

  { before: "The bomb went", after: "unexpectedly.", correct: "off", options: ["off","out","up"],
    tip: "Go off — взорваться.",
    tipExplain: "The bomb went off — бомба взорвалась." },

  { before: "She backed me", after: "during the argument.", correct: "up", options: ["up","off","down"],
    tip: "Back up — поддержать.",
    tipExplain: "Thanks for backing me up — спасибо за поддержку." },

  { before: "I zoned", after: "during the lecture.", correct: "out", options: ["out","off","in"],
    tip: "Zone out — отключиться, уйти в себя.",
    tipExplain: "I zoned out — я отключился." },

  { before: "He freaked", after: "when he saw the bill.", correct: "out", options: ["out","off","up"],
    tip: "Freak out — запаниковать.",
    tipExplain: "Don't freak out — не паникуй." },

  { before: "She's been going", after: "about this for hours.", correct: "on", options: ["on","about","over"],
    tip: "Go on about — разглагольствовать о чём-то.",
    tipExplain: "Stop going on about it — хватит об этом талдычить." },

  { before: "I'll wrap", after: "the meeting now.", correct: "up", options: ["up","off","out"],
    tip: "Wrap up — завершить.",
    tipExplain: "Let's wrap up — давайте заканчивать." },

  { before: "He's been bottling", after: "his emotions.", correct: "up", options: ["up","in","down"],
    tip: "Bottle up — подавлять эмоции.",
    tipExplain: "Don't bottle up your feelings — не держи всё в себе." },

  { before: "She glossed", after: "the details.", correct: "over", options: ["over","through","by"],
    tip: "Gloss over — замять, обойти стороной.",
    tipExplain: "He glossed over the problem — он замял проблему." },

  { before: "I caved", after: "and bought it.", correct: "in", options: ["in","out","off"],
    tip: "Cave in — сдаться, уступить.",
    tipExplain: "I caved in — я сдался." },

  { before: "He lashed", after: "at his critics.", correct: "out", options: ["out","on","at"],
    tip: "Lash out — наброситься с критикой.",
    tipExplain: "He lashed out at them — он набросился на них." },

  { before: "She owns", after: "to her mistakes.", correct: "up", options: ["up","in","to"],
    tip: "Own up to — признать вину.",
    tipExplain: "Own up to your mistakes — признай свои ошибки." },

  { before: "I'm warming", after: "to the idea.", correct: "up", options: ["up","on","into"],
    tip: "Warm up to — начать привыкать к идее.",
    tipExplain: "I'm warming up to it — я начинаю к этому привыкать." },

  { before: "He's been sucking", after: "to the boss.", correct: "up", options: ["up","in","on"],
    tip: "Suck up to — подлизываться.",
    tipExplain: "Stop sucking up to him — хватит подлизываться." },

  { before: "She played", after: "the importance of the meeting.", correct: "down", options: ["down","up","off"],
    tip: "Play down — преуменьшать.",
    tipExplain: "Play up — преувеличивать. Play down — преуменьшать." },

  { before: "I stumbled", after: "an interesting article.", correct: "upon", options: ["upon","into","over"],
    tip: "Stumble upon — случайно наткнуться.",
    tipExplain: "Stumble upon = come across — найти случайно." },

  { before: "He's been skimping", after: "quality.", correct: "on", options: ["on","with","at"],
    tip: "Skimp on — экономить на чём-то.",
    tipExplain: "Don't skimp on quality — не экономь на качестве." },

  { before: "She cracked", after: "under pressure.", correct: "up", options: ["up","down","out"],
    tip: "Crack up — сломаться под давлением.",
    tipExplain: "He cracked up — он сломался / рассмеялся." },

  { before: "I'm banking", after: "getting that promotion.", correct: "on", options: ["on","for","at"],
    tip: "Bank on — рассчитывать на что-то.",
    tipExplain: "I'm banking on it — я на это рассчитываю." },

  { before: "He bailed", after: "on us.", correct: "out", options: ["out","off","up"],
    tip: "Bail out on — подвести, сбежать.",
    tipExplain: "He bailed out on us — он нас кинул." },

  { before: "She zeroed", after: "on the main problem.", correct: "in", options: ["in","on","at"],
    tip: "Zero in on — сосредоточиться на.",
    tipExplain: "Zero in on the issue — сфокусируйся на проблеме." },

  { before: "I'm swamped", after: "work.", correct: "with", options: ["with","by","in"],
    tip: "Swamped with — завален работой.",
    tipExplain: "I'm swamped with work — я завален работой." },

  { before: "He mulled", after: "the decision for days.", correct: "over", options: ["over","on","through"],
    tip: "Mull over — обдумывать.",
    tipExplain: "Let me mull it over — дай мне подумать." },

  { before: "She dished", after: "all the gossip.", correct: "out", options: ["out","up","on"],
    tip: "Dish out — раздавать (информацию, критику).",
    tipExplain: "She dished out the gossip — она выложила сплетни." },

  { before: "I'm drawing", after: "a blank.", correct: "—", options: ["—","up","on"],
    tip: "Draw a blank — ничего не вспомнить.",
    tipExplain: "Без предлога! I'm drawing a blank — у меня провал в памяти." },

  { before: "He fessed", after: "to the crime.", correct: "up", options: ["up","in","out"],
    tip: "Fess up — признаться.",
    tipExplain: "Fess up = confess. He fessed up — он признался." },

  { before: "She clammed", after: "when asked about it.", correct: "up", options: ["up","down","in"],
    tip: "Clam up — замолчать.",
    tipExplain: "He clammed up — он замолчал как рыба." },

  { before: "I'm psyching myself", after: "for the interview.", correct: "up", options: ["up","out","in"],
    tip: "Psych up — настроить себя.",
    tipExplain: "Psych yourself up — настройся! Psych out — запугать." },

  { before: "He passed the work", after: "to his assistant.", correct: "off", options: ["off","on","over"],
    tip: "Pass off — спихнуть (работу).",
    tipExplain: "He passed it off to someone else — он спихнул это на другого." },

  { before: "She latched", after: "to the idea immediately.", correct: "on", options: ["on","onto","up"],
    tip: "Latch on to — ухватиться за идею.",
    tipExplain: "She latched on to it — она ухватилась за это." },

  { before: "I'm easing", after: "my new job.", correct: "into", options: ["into","in","to"],
    tip: "Ease into — постепенно входить в.",
    tipExplain: "Ease into your new role — постепенно входи в новую роль." },

  { before: "He's been coasting", after: "for months.", correct: "along", options: ["along","by","on"],
    tip: "Coast along — плыть по течению.",
    tipExplain: "He's just coasting along — он просто плывёт по течению." },

  { before: "She wormed her way", after: "of the situation.", correct: "out", options: ["out","through","into"],
    tip: "Worm out of — выкрутиться из ситуации.",
    tipExplain: "He wormed his way out — он выкрутился." },

  { before: "I'm getting", after: "you loud and clear.", correct: "—", options: ["—","to","through"],
    tip: "Get someone — понять, услышать.",
    tipExplain: "I get you = I understand you. Без предлога!" }
];
