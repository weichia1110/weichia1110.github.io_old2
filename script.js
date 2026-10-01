/* ========================================
   PROFILE DATA — 修改這裡的名稱、簡介、資料（皆為 placeholder）
   ======================================== */
const PROFILE = {
  username: "Your Name",        // 顯示名稱
  tag: "",                      // 名稱旁的小標籤，留空則不顯示
  title: "學生 / 設計愛好者",     // 名稱下方一行簡介
  // 標籤（顯示在 Banner 下方）
  chips: ["🎧 音樂", "📷 攝影", "💻 程式", "🎮 遊戲", "☕ 咖啡"],
  // 大字重點資訊
  highlights: [["所在地", "Taiwan"], ["年齡", "20"], ["身分", "學生"]],
  // 右側資料表
  table: [["暱稱", "Your Name"], ["生日", "01/01"], ["語言", "中文 / English"], ["MBTI", "—"], ["Email", "you@example.com"]],
  // 底部資訊列
  meta: ["📍 Taiwan", "📅 加入時間：2026 年", "🟢 目前狀態：線上"],
  intro: "歡迎來到我的個人檔案！在這裡可以認識我、看看我的興趣，並找到我的社群連結。",
  // 興趣 / 技能卡片
  interests: [
    ["🎧 音樂", "喜歡電子、J-Pop，也常分享歌單。"],
    ["📷 攝影", "喜歡記錄日常與旅行的風景。"],
    ["💻 程式", "學習網頁開發與各種小專案。"],
    ["🎮 遊戲", "偶爾玩音樂遊戲放鬆一下。"]
  ]
};

/* ========================================
   SOCIAL LINKS — 把 url 的 # 換成你的真實網址即可
   ======================================== */
const SOCIALS = [
  ["Discord", "#", "M20 5a17 17 0 0 0-4-1l-.5 1a15 15 0 0 0-5 0L10 4a17 17 0 0 0-4 1C3 9 2 14 2.5 18a17 17 0 0 0 5 2.5l1-1.7a11 11 0 0 1-1.6-.8l.4-.3a12 12 0 0 0 10.6 0l.4.3a11 11 0 0 1-1.6.8l1 1.7a17 17 0 0 0 5-2.5C22.4 13 21 9 20 5zM9 15c-1 0-1.800-.9-1.800-2s.8-2 1.800-2 1.800.9 1.800 2-.8 2-1.800 2zm6 0c-1 0-1.800-.9-1.800-2s.8-2 1.800-2 1.800.9 1.800 2-.8 2-1.800 2z"],
  ["Instagram", "#", "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm5 3.500A4.500 4.500 0 1 1 7.500 12 4.500 4.500 0 0 1 12 7.500zm0 2A2.500 2.500 0 1 0 14.500 12 2.500 2.500 0 0 0 12 9.500zM17.500 6a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"],
  ["Spotify", "#", "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm4.600 14.400a.7.7 0 0 1-1 .2c-2.600-1.600-5.800-1.900-9.600-1a.7.7 0 1 1-.3-1.400c4.200-1 7.800-.6 10.700 1.200a.7.7 0 0 1 .2 1zm1.200-2.700a.9.9 0 0 1-1.200.3c-3-1.800-7.500-2.400-11-1.300a.9.9 0 1 1-.5-1.700c4-1.200 9-.6 12.400 1.500a.9.9 0 0 1 .3 1.200zm.1-2.800C14.400 8.800 8.700 8.600 5.400 9.600a1.100 1.100 0 1 1-.6-2.100c3.800-1.100 10.100-.9 14 1.400a1.100 1.100 0 0 1-1.100 1.900z"],
  ["GitHub", "#", "M12 2a10 10 0 0 0-3.200 19.500c.5.100.7-.2.7-.5v-1.800c-2.800.6-3.400-1.300-3.400-1.300-.5-1.200-1.100-1.500-1.100-1.500-.9-.6.1-.6.1-.6 1 .1 1.500 1 1.500 1 .9 1.500 2.300 1.100 2.900.8.1-.7.4-1.100.6-1.300-2.200-.3-4.600-1.100-4.600-5 0-1.100.4-2 1-2.700-.1-.3-.5-1.300.1-2.700 0 0 .8-.3 2.800 1a9.600 9.600 0 0 1 5 0c1.900-1.300 2.800-1 2.800-1 .6 1.400.2 2.400.1 2.700.7.700 1 1.600 1 2.700 0 3.900-2.400 4.700-4.600 5 .4.300.7.900.7 1.800v2.700c0 .3.200.6.700.5A10 10 0 0 0 12 2z"],
  ["YouTube", "#", "M21.600 7.200a2.500 2.500 0 0 0-1.800-1.800C18.200 5 12 5 12 5s-6.200 0-7.800.4A2.500 2.500 0 0 0 2.400 7.200C2 8.800 2 12 2 12s0 3.200.4 4.800a2.500 2.500 0 0 0 1.800 1.800C5.800 19 12 19 12 19s6.200 0 7.800-.4a2.500 2.500 0 0 0 1.800-1.800c.4-1.600.4-4.800.4-4.800s0-3.200-.4-4.800zM10 15V9l5.200 3z"]
];

/* ========================================
   MUSIC — 將音樂檔放入 assets/music/，然後修改下面的檔名即可
   ======================================== */
const MUSIC = { src: "assets/music/background.mp3", name: "♪ background.mp3", volume: 0.4 };

/* ---------- 以下為渲染邏輯，一般不需修改 ---------- */
const $ = id => document.getElementById(id);
const P = PROFILE;
$("uname").textContent = P.username;
$("utag").textContent = P.tag;
$("utitle").textContent = P.title;
$("chips").innerHTML = P.chips.map(c => `<span class="chip">${c}</span>`).join("");
$("highlights").innerHTML = P.highlights.map(h => `<div><small>${h[0]}</small><b>${h[1]}</b></div>`).join("");
$("table").innerHTML = P.table.map(r => `<div><span>${r[0]}</span><b>${r[1]}</b></div>`).join("");
$("meta").innerHTML = P.meta.map(m => `<span>${m}</span>`).join("");
$("intro").textContent = P.intro;
$("cards").innerHTML = P.interests.map(i => `<div class="card"><h3>${i[0]}</h3><p>${i[1]}</p></div>`).join("");
$("soclist").innerHTML = SOCIALS.map(s =>
  `<a class="soc" href="${s[1]}" target="_blank" rel="noopener"><svg viewBox="0 0 24 24"><path d="${s[2]}"/></svg>${s[0]}</a>`).join("");

// 頭像載入失敗時不顯示破圖，保留漸層底色
$("avatar").addEventListener("error", e => { e.target.removeAttribute("src"); });

// 分頁切換（不重新載入頁面）
$("nav").addEventListener("click", e => {
  const t = e.target.dataset.t; if (!t) return;
  document.querySelectorAll(".nav button").forEach(b => b.classList.toggle("on", b === e.target));
  document.querySelectorAll(".sec").forEach(s => s.classList.toggle("on", s.id === t));
});

// 音樂：檔案不存在或 autoplay 被擋時不報錯，第一次點擊頁面後再播放
const bgm = $("bgm"), pp = $("pp"); let ok = true;
bgm.volume = MUSIC.volume; $("vol").value = MUSIC.volume; $("mname").textContent = MUSIC.name;
bgm.src = MUSIC.src;
bgm.addEventListener("error", () => { ok = false; $("mname").textContent = "（尚無音樂檔）"; });
const sync = () => pp.textContent = bgm.paused ? "▶" : "❚❚";
bgm.addEventListener("play", sync); bgm.addEventListener("pause", sync);
const play = () => { if (ok) bgm.play().catch(() => {}); };
pp.onclick = e => { e.stopPropagation(); bgm.paused ? play() : bgm.pause(); };
$("vol").oninput = e => bgm.volume = e.target.value;
play();
document.addEventListener("click", () => { if (bgm.paused) play(); }, { once: true });
