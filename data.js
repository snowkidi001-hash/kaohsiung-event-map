// ══════════════════════════════════════════════
//  活動資料 — 每月更新此檔案即可
// ══════════════════════════════════════════════
const ACTIVITIES = [
  // ── 鹽埕區：駁二藝術特區 ──
  { id:1,  name:"末日派對 建築學系畢業展",         start:"06/01", end:"06/01", venue:"駁二大勇P3倉庫",      district:"鹽埕區", cat:"exhibition",  lat:22.6278, lng:120.2826, url:"https://pier-2.org" },
  { id:2,  name:"化石先生冰河巨獸展",               start:"整月",  end:"10/11", venue:"棧貳庫 KW2",          district:"鹽埕區", cat:"ongoing",     lat:22.6216, lng:120.2781, url:"https://pier-2.org" },
  { id:3,  name:"青春嘉年華 2026雄校聯成發",       start:"06/06", end:"06/06", venue:"駁二大勇淺三廣場",    district:"鹽埕區", cat:"performance", lat:22.6278, lng:120.2826, url:"https://pier-2.org" },
  { id:4,  name:"邊緣人市集 EDGEMAN MARKET",        start:"06/06", end:"06/07", venue:"駁二大勇藝術廣場",    district:"鹽埕區", cat:"market",      lat:22.6275, lng:120.2828, url:"https://pier-2.org" },
  { id:5,  name:"邊緣人市集 EDGEMAN MARKET",        start:"06/13", end:"06/14", venue:"駁二大勇藝術廣場",    district:"鹽埕區", cat:"market",      lat:22.6275, lng:120.2828, url:"https://pier-2.org" },
  { id:6,  name:"邊緣人市集 EDGEMAN MARKET",        start:"06/19", end:"06/21", venue:"駁二大勇藝術廣場",    district:"鹽埕區", cat:"market",      lat:22.6275, lng:120.2828, url:"https://pier-2.org" },
  { id:7,  name:"辣味宇宙大爆發 Good Luck 市集",   start:"06/27", end:"06/28", venue:"駁二大義區紅磚廊道",  district:"鹽埕區", cat:"market",      lat:22.6267, lng:120.2840, url:"https://pier-2.org" },

  // ── 鹽埕區：高史博 ──
  { id:8,  name:"前鎮加工出口區女性勞動身影",       start:"06/06", end:"06/06", venue:"高史博",              district:"鹽埕區", cat:"exhibition",  lat:22.6295, lng:120.2873, url:"https://khm.org.tw" },
  { id:9,  name:"未竟之聲 柯旗化故居沉浸式劇場",   start:"06/06", end:"06/07", venue:"高史博",              district:"鹽埕區", cat:"performance", lat:22.6295, lng:120.2873, url:"https://khm.org.tw" },
  { id:10, name:"航路相連 北前船與台灣海洋",        start:"06/11", end:"06/11", venue:"高史博",              district:"鹽埕區", cat:"exhibition",  lat:22.6295, lng:120.2873, url:"https://khm.org.tw" },
  { id:11, name:"白恐不迷路 柯旗化故事分享",        start:"06/11", end:"06/11", venue:"高史博",              district:"鹽埕區", cat:"performance", lat:22.6295, lng:120.2873, url:"https://khm.org.tw" },

  // ── 苓雅區：高雄流行音樂中心 海音館 ──
  { id:12, name:"跨世代金嗓重現鄧麗君",             start:"06/06", end:"06/06", venue:"高流海音館",          district:"苓雅區", cat:"concert",     lat:22.6055, lng:120.2960, url:"https://kpmc.com.tw" },
  { id:13, name:"CNBLUE「3LOGY」世界巡迴演唱會",    start:"06/13", end:"06/14", venue:"高流海音館",          district:"苓雅區", cat:"concert",     lat:22.6055, lng:120.2960, url:"https://kpmc.com.tw" },
  { id:14, name:"魅力男團 MIXPOP CONCERT",           start:"06/20", end:"06/20", venue:"高流海音館",          district:"苓雅區", cat:"concert",     lat:22.6055, lng:120.2960, url:"https://kpmc.com.tw" },
  { id:15, name:"KAME 回歸高雄 青春回憶",            start:"06/27", end:"06/27", venue:"高流海音館",          district:"苓雅區", cat:"concert",     lat:22.6055, lng:120.2960, url:"https://kpmc.com.tw" },

  // ── 苓雅區：高雄流行音樂中心 LIVE WAREHOUSE ──
  { id:16, name:"Science Noodles 專場巡迴",           start:"06/02", end:"06/02", venue:"高流 LIVE WAREHOUSE 小庫", district:"苓雅區", cat:"concert", lat:22.6058, lng:120.2965, url:"https://kpmc.com.tw" },
  { id:17, name:"面對迷惘「夕陽武士」",              start:"06/06", end:"06/06", venue:"高流 LIVE WAREHOUSE 大庫", district:"苓雅區", cat:"concert", lat:22.6058, lng:120.2965, url:"https://kpmc.com.tw" },
  { id:18, name:"偏離軌道 NO FACE",                  start:"06/13", end:"06/13", venue:"高流 LIVE WAREHOUSE 大庫", district:"苓雅區", cat:"concert", lat:22.6058, lng:120.2965, url:"https://kpmc.com.tw" },
  { id:19, name:"宇宙派對EP7 奇幻世界",              start:"06/14", end:"06/14", venue:"高流 LIVE WAREHOUSE 小庫", district:"苓雅區", cat:"concert", lat:22.6058, lng:120.2965, url:"https://kpmc.com.tw" },
  { id:20, name:"KIMSUNGKYU LIVE LV4 向量躍進",      start:"06/20", end:"06/20", venue:"高流 LIVE WAREHOUSE 大庫", district:"苓雅區", cat:"concert", lat:22.6058, lng:120.2965, url:"https://kpmc.com.tw" },
  { id:21, name:"Tony Q Rastafara 演唱會",            start:"06/21", end:"06/21", venue:"高流 LIVE WAREHOUSE 大庫", district:"苓雅區", cat:"concert", lat:22.6058, lng:120.2965, url:"https://kpmc.com.tw" },
  { id:22, name:"高流金趴 K歌大包廂",                start:"06/27", end:"06/27", venue:"高流 LIVE WAREHOUSE 大庫", district:"苓雅區", cat:"concert", lat:22.6058, lng:120.2965, url:"https://kpmc.com.tw" },

  // ── 前鎮區：高雄展覽館 ──
  { id:23, name:"高雄國際儀器化工展",               start:"06/03", end:"06/06", venue:"高雄展覽館南館",      district:"前鎮區", cat:"expo",        lat:22.6085, lng:120.3015, url:"https://www.kecc.com.tw" },
  { id:24, name:"高雄自動化工業展",                 start:"06/03", end:"06/06", venue:"高雄展覽館南館",      district:"前鎮區", cat:"expo",        lat:22.6085, lng:120.3015, url:"https://www.kecc.com.tw" },
  { id:25, name:"小小英雄運動會",                   start:"06/13", end:"06/14", venue:"高雄展覽館南館",      district:"前鎮區", cat:"expo",        lat:22.6085, lng:120.3015, url:"https://www.kecc.com.tw" },
  { id:26, name:"高雄寵物展 夏季毛孩特工",          start:"06/19", end:"06/22", venue:"高雄展覽館南館",      district:"前鎮區", cat:"expo",        lat:22.6085, lng:120.3015, url:"https://www.kecc.com.tw" },
  { id:27, name:"高雄嬰兒與孕媽咪用品展",          start:"06/26", end:"06/29", venue:"高雄展覽館南館",      district:"前鎮區", cat:"expo",        lat:22.6085, lng:120.3015, url:"https://www.kecc.com.tw" },

  // ── 前鎮區：圖書館 / 夢時代 ──
  { id:28, name:"2026 世界閱讀日",                  start:"整月",  end:"06/30", venue:"高雄市立圖書館總館",  district:"前鎮區", cat:"ongoing",     lat:22.5932, lng:120.3024, url:"https://www.kl.gov.tw" },
  { id:29, name:"拉拉熊海外巡迴展",                 start:"整月",  end:"06/08", venue:"夢時代8F",            district:"前鎮區", cat:"ongoing",     lat:22.5905, lng:120.3085, url:"https://www.dream-mall.com.tw" },
  { id:30, name:"三麗鷗繽紛樂園主題限定店",        start:"整月",  end:"06/08", venue:"夢時代8F 時代會館",   district:"前鎮區", cat:"ongoing",     lat:22.5905, lng:120.3085, url:"https://www.dream-mall.com.tw" },
  { id:31, name:"原創角色株式會社限定店",           start:"整月",  end:"06/08", venue:"夢時代8F 時代會館",   district:"前鎮區", cat:"ongoing",     lat:22.5905, lng:120.3085, url:"https://www.dream-mall.com.tw" },

  // ── 苓雅區：統一時代 ──
  { id:32, name:"褲褲兔快閃店",                     start:"整月",  end:"06/09", venue:"統一時代百貨1F",      district:"苓雅區", cat:"ongoing",     lat:22.6168, lng:120.3020, url:"https://www.uni-ustyle.com.tw" },

  // ── 鼓山區：高美館 / 壽山動物園 ──
  { id:33, name:"台電公共藝術祭 奧拉之城III",       start:"整月",  end:"06/07", venue:"高雄市立美術館",      district:"鼓山區", cat:"ongoing",     lat:22.6551, lng:120.2836, url:"https://www.kmfa.gov.tw" },
  { id:34, name:"壽Q出任務 動物園大冒險",           start:"整月",  end:"06/14", venue:"壽山動物園",          district:"鼓山區", cat:"ongoing",     lat:22.6404, lng:120.2674, url:"https://zoo.kcg.gov.tw" },

  // ── 左營區：高雄巨蛋 ──
  { id:35, name:"OG再起 頑童MJ116 演唱會",          start:"06/06", end:"06/07", venue:"高雄巨蛋",            district:"左營區", cat:"concert",     lat:22.6894, lng:120.2971, url:"https://www.khd.gov.tw" },
  { id:36, name:"OG再起 頑童MJ116 演唱會",          start:"06/12", end:"06/14", venue:"高雄巨蛋",            district:"左營區", cat:"concert",     lat:22.6894, lng:120.2971, url:"https://www.khd.gov.tw" },
  { id:37, name:"高雄旅展 夏季限時優惠",            start:"06/19", end:"06/22", venue:"高雄巨蛋",            district:"左營區", cat:"expo",        lat:22.6894, lng:120.2971, url:"https://www.khd.gov.tw" },
  { id:38, name:"ITZY「TUNNEL VISION」世界巡迴演唱會", start:"06/27", end:"06/28", venue:"高雄巨蛋",          district:"左營區", cat:"concert",     lat:22.6894, lng:120.2971, url:"https://www.khd.gov.tw" },

  // ── 鳳山區：衛武營 ──
  { id:39, name:"跨越城鄉的聲樂饗宴",               start:"06/01", end:"06/01", venue:"衛武營音樂廳",        district:"鳳山區", cat:"performance", lat:22.6344, lng:120.3449, url:"https://npac-weiwuying.org" },
  { id:40, name:"青少年交響樂團音樂會",             start:"06/02", end:"06/02", venue:"衛武營音樂廳",        district:"鳳山區", cat:"performance", lat:22.6344, lng:120.3449, url:"https://npac-weiwuying.org" },
  { id:41, name:"武營來跳舞 大眾舞蹈體驗",          start:"整月",  end:"06/03", venue:"衛武營榕樹廣場西側",  district:"鳳山區", cat:"ongoing",     lat:22.6344, lng:120.3449, url:"https://npac-weiwuying.org" },
  { id:42, name:"穿越時空的樂章 楠梓國中管樂",     start:"06/03", end:"06/03", venue:"衛武營音樂廳",        district:"鳳山區", cat:"performance", lat:22.6344, lng:120.3449, url:"https://npac-weiwuying.org" },
  { id:43, name:"序曲之後 愛與命運交響",            start:"06/04", end:"06/04", venue:"衛武營音樂廳",        district:"鳳山區", cat:"performance", lat:22.6344, lng:120.3449, url:"https://npac-weiwuying.org" },
  { id:44, name:"北歐華麗色彩音樂會",               start:"06/05", end:"06/05", venue:"衛武營音樂廳",        district:"鳳山區", cat:"performance", lat:22.6344, lng:120.3449, url:"https://npac-weiwuying.org" },
  { id:45, name:"威爾第安魂曲 宗教音樂",            start:"06/06", end:"06/06", venue:"衛武營音樂廳",        district:"鳳山區", cat:"performance", lat:22.6344, lng:120.3449, url:"https://npac-weiwuying.org" },
  { id:46, name:"威爾第歌劇《遊唱詩人》音樂講座",  start:"06/06", end:"06/06", venue:"衛武營涴莎藝術展演中心", district:"鳳山區", cat:"performance", lat:22.6344, lng:120.3449, url:"https://npac-weiwuying.org" },
  { id:47, name:"松鼠大亨驚魂記「疑神疑鬼搶案」",  start:"06/06", end:"06/06", venue:"衛武營歌劇院",        district:"鳳山區", cat:"performance", lat:22.6344, lng:120.3449, url:"https://npac-weiwuying.org" },
  { id:48, name:"相聲瓦舍《我是你的菜》",           start:"06/06", end:"06/07", venue:"衛武營戲劇院",        district:"鳳山區", cat:"performance", lat:22.6344, lng:120.3449, url:"https://npac-weiwuying.org" },
  { id:49, name:"揚琴音樂之旅 李翎喬獨奏",         start:"06/07", end:"06/07", venue:"衛武營表演廳",        district:"鳳山區", cat:"performance", lat:22.6344, lng:120.3449, url:"https://npac-weiwuying.org" },
  { id:50, name:"弦樂團年度音樂會 陽明國中",       start:"06/08", end:"06/08", venue:"衛武營音樂廳",        district:"鳳山區", cat:"performance", lat:22.6344, lng:120.3449, url:"https://npac-weiwuying.org" },
  { id:51, name:"弦歌繞樑 古典至當代",              start:"06/09", end:"06/09", venue:"衛武營音樂廳",        district:"鳳山區", cat:"performance", lat:22.6344, lng:120.3449, url:"https://npac-weiwuying.org" },
  { id:52, name:"管樂團18週年 南科實中",            start:"06/10", end:"06/10", venue:"衛武營音樂廳",        district:"鳳山區", cat:"performance", lat:22.6344, lng:120.3449, url:"https://npac-weiwuying.org" },
  { id:53, name:"山狗大南方樂團 來自土地的聲音",   start:"06/10", end:"06/10", venue:"衛武營表演廳",        district:"鳳山區", cat:"performance", lat:22.6344, lng:120.3449, url:"https://npac-weiwuying.org" },
  { id:54, name:"銅管重奏團音樂會 國防部示範樂隊", start:"06/11", end:"06/11", venue:"衛武營表演廳",        district:"鳳山區", cat:"performance", lat:22.6344, lng:120.3449, url:"https://npac-weiwuying.org" },
  { id:55, name:"弦琴藝綺音樂會 明華國中",         start:"06/11", end:"06/11", venue:"衛武營音樂廳",        district:"鳳山區", cat:"performance", lat:22.6344, lng:120.3449, url:"https://npac-weiwuying.org" },
  { id:56, name:"長笛與長號大師班 鹿特丹愛樂",     start:"06/11", end:"06/13", venue:"衛武營1192排練室",    district:"鳳山區", cat:"performance", lat:22.6344, lng:120.3449, url:"https://npac-weiwuying.org" },
  { id:57, name:"彼岸 蔡明叡鋼琴獨奏會",           start:"06/12", end:"06/12", venue:"衛武營表演廳",        district:"鳳山區", cat:"performance", lat:22.6344, lng:120.3449, url:"https://npac-weiwuying.org" },
  { id:58, name:"《下雪了》歌劇",                   start:"06/12", end:"06/13", venue:"衛武營歌劇院",        district:"鳳山區", cat:"performance", lat:22.6344, lng:120.3449, url:"https://npac-weiwuying.org" },
  { id:59, name:"鹿特丹愛樂管絃樂團 再訪衛武營",   start:"06/12", end:"06/14", venue:"衛武營音樂廳",        district:"鳳山區", cat:"performance", lat:22.6344, lng:120.3449, url:"https://npac-weiwuying.org" },
  { id:60, name:"走出去 Con Brio 吉麗樂團",         start:"06/13", end:"06/13", venue:"衛武營表演廳",        district:"鳳山區", cat:"performance", lat:22.6344, lng:120.3449, url:"https://npac-weiwuying.org" },
  { id:61, name:"舞台監督掌控全場最強大腦",         start:"06/13", end:"06/13", venue:"衛武營演講廳",        district:"鳳山區", cat:"performance", lat:22.6344, lng:120.3449, url:"https://npac-weiwuying.org" },
  { id:62, name:"《熊出沒的森林》非理性心理探索",  start:"06/13", end:"06/14", venue:"衛武營戲劇院",        district:"鳳山區", cat:"performance", lat:22.6344, lng:120.3449, url:"https://npac-weiwuying.org" },
  { id:63, name:"璀璨系列 陳鋭小提琴獨奏會",       start:"06/14", end:"06/14", venue:"衛武營音樂廳",        district:"鳳山區", cat:"performance", lat:22.6344, lng:120.3449, url:"https://npac-weiwuying.org" },
  { id:64, name:"聲音魔法屋 彥如姐姐故事聲音",     start:"06/14", end:"06/14", venue:"衛武營演講廳",        district:"鳳山區", cat:"performance", lat:22.6344, lng:120.3449, url:"https://npac-weiwuying.org" },
  { id:65, name:"聽見一整個宇宙 鳳西國中音樂會",   start:"06/17", end:"06/17", venue:"衛武營音樂廳",        district:"鳳山區", cat:"performance", lat:22.6344, lng:120.3449, url:"https://npac-weiwuying.org" },
  { id:66, name:"音樂語言的對話 SEMPRE Piano Trio", start:"06/17", end:"06/17", venue:"衛武營表演廳",        district:"鳳山區", cat:"performance", lat:22.6344, lng:120.3449, url:"https://npac-weiwuying.org" },
  { id:67, name:"傳統器樂新視角 古箏中阮笛簫",     start:"06/18", end:"06/18", venue:"衛武營表演廳",        district:"鳳山區", cat:"performance", lat:22.6344, lng:120.3449, url:"https://npac-weiwuying.org" },
  { id:68, name:"未來的旋律沉默的對話 港明高中",   start:"06/18", end:"06/18", venue:"衛武營音樂廳",        district:"鳳山區", cat:"performance", lat:22.6344, lng:120.3449, url:"https://npac-weiwuying.org" },
  { id:69, name:"探索生命意義的箏樂美學",           start:"06/19", end:"06/19", venue:"衛武營表演廳",        district:"鳳山區", cat:"performance", lat:22.6344, lng:120.3449, url:"https://npac-weiwuying.org" },
  { id:70, name:"宮崎駿動畫配樂II 交響音樂會",     start:"06/19", end:"06/20", venue:"衛武營音樂廳",        district:"鳳山區", cat:"performance", lat:22.6344, lng:120.3449, url:"https://npac-weiwuying.org" },
  { id:71, name:"藝術的旅程",                        start:"06/20", end:"06/20", venue:"衛武營表演廳",        district:"鳳山區", cat:"performance", lat:22.6344, lng:120.3449, url:"https://npac-weiwuying.org" },
  { id:72, name:"音樂探險 孩子第一場近距離體驗",   start:"06/20", end:"06/21", venue:"衛武營繪景工廠",      district:"鳳山區", cat:"performance", lat:22.6344, lng:120.3449, url:"https://npac-weiwuying.org" },
  { id:73, name:"深夜小狗神祕習題 邏輯謎劇場",     start:"06/20", end:"06/21", venue:"衛武營戲劇院",        district:"鳳山區", cat:"performance", lat:22.6344, lng:120.3449, url:"https://npac-weiwuying.org" },
  { id:74, name:"漁火松風 高雄市國樂團",            start:"06/21", end:"06/21", venue:"衛武營音樂廳",        district:"鳳山區", cat:"performance", lat:22.6344, lng:120.3449, url:"https://npac-weiwuying.org" },
  { id:75, name:"跨時空對話 昇華之夜室內樂",        start:"06/21", end:"06/21", venue:"衛武營表演廳",        district:"鳳山區", cat:"performance", lat:22.6344, lng:120.3449, url:"https://npac-weiwuying.org" },
  { id:76, name:"女聲合唱《純聲》",                 start:"06/22", end:"06/22", venue:"衛武營音樂廳",        district:"鳳山區", cat:"performance", lat:22.6344, lng:120.3449, url:"https://npac-weiwuying.org" },
  { id:77, name:"探索管風琴音樂（長期）",           start:"整月",  end:"06/24", venue:"衛武營音樂廳",        district:"鳳山區", cat:"ongoing",     lat:22.6344, lng:120.3449, url:"https://npac-weiwuying.org" },

  // ── 全市 ──
  { id:78, name:"2026 高雄春天藝術節",              start:"整月",  end:"07/31", venue:"全市各場館",          district:"全市",  cat:"ongoing",     lat:22.6273, lng:120.3014, url:"https://khcc.gov.tw" },
  { id:79, name:"端午限定手作課程 漢餅文化館",     start:"06/13", end:"06/20", venue:"各館",                district:"全市",  cat:"exhibition",  lat:22.6273, lng:120.3014, url:"" },
];

// ══════════════════════════════════════════════
//  分類設定
// ══════════════════════════════════════════════
const CAT = {
  concert:     { label:"演唱會/音樂", color:"#ef4444", icon:"🎤" },
  market:      { label:"市集",        color:"#f97316", icon:"🛍️" },
  exhibition:  { label:"展覽",        color:"#22c55e", icon:"🖼️" },
  performance: { label:"表演藝術",    color:"#3b82f6", icon:"🎭" },
  expo:        { label:"博覽會",      color:"#a855f7", icon:"🏢" },
  ongoing:     { label:"長期活動",    color:"#6b7280", icon:"🔁" },
};

// ══════════════════════════════════════════════
//  月份註冊表 — 每月更新流程：
//  1. 新增一個 const ACTIVITIES_YYYYMM = [ ...新月份活動... ]
//  2. 在 MONTHS 加一行 { key, label, days, activities }
//  （網站會自動以「最新月份」開啟，舊月份可用 ◀ 切回去看）
// ══════════════════════════════════════════════
const MONTHS = [
  { key: "2026-06", label: "2026年6月", days: 30, activities: ACTIVITIES },
];
