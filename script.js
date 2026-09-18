const ANIME_DATA = [
  {
    id:"kimetsu",
    titleJp:"鬼滅の刃",
    romaji:"Kimetsu no Yaiba",
    kanjiMark:"鬼",
    genres:["Aksi","Dark Fantasy"],
    icon:"⚔️",
    colors:["#3a0d12","#7a1421"],
    desc:"Tanjiro menjadi pembasmi iblis setelah keluarganya dibantai.",
    episodes:26,
    playlistUrl: "https://www.youtube.com/@MuseIndonesia/search?query=Kimetsu+no+Yaiba",
    videoUrl: "https://www.youtube.com/watch?v=ATJYac_dORw",
    fullEpisodes: [
      { ep: 1, title: "Episode 01 - Kekejaman [Takarir Indonesia]", yt: "https://www.youtube.com/watch?v=6U0Pp4oR1kA" },
      { ep: 2, title: "Episode 02 - Pelatih Sakonji", yt: "https://www.youtube.com/watch?v=7s8K2p8k2dA" },
      { ep: 3, title: "Episode 03 - Sabito dan Makomo", yt: "https://www.youtube.com/watch?v=9jK2p8k2dA8" }
    ]
  },
  {
    id:"shingeki",
    titleJp:"進撃の巨人",
    romaji:"Shingeki no Kyojin",
    kanjiMark:"巨",
    genres:["Aksi","Misteri"],
    icon:"🧱",
    colors:["#2a2f24","#556042"],
    desc:"Manusia bertahan dari Titan di balik tembok raksasa.",
    episodes:87,
    playlistUrl: "https://www.youtube.com/@MuseIndonesia/search?query=Attack+on+Titan",
    videoUrl: "https://www.youtube.com/watch?v=E7WytLM2KvY",
    fullEpisodes: [
      { ep: 1, title: "Attack on Titan - Episode 01 [Bahasa Indonesia] - FULL", yt: "https://www.youtube.com/watch?v=7hHoap3B7tQ" }
    ]
  },
  {
    id:"onepiece",
    titleJp:"ワンピース",
    romaji:"One Piece",
    kanjiMark:"海",
    genres:["Petualangan","Komedi"],
    icon:"🏴‍☠️",
    colors:["#0d2a3a","#155a7a"],
    desc:"Luffy berlayar mencari harta One Piece.",
    episodes:1000,
    playlistUrl: "https://www.youtube.com/@MuseIndonesia/search?query=One+Piece",
    videoUrl: "https://www.youtube.com/watch?v=S8_YwFLCh4U",
    fullEpisodes: [
      { ep: 1, title: "ONE PIECE - Episode 01 [Takarir Indonesia]", yt: "https://www.youtube.com/watch?v=S8_YwFLCh4U" }
    ]
  },
  {
    id:"naruto",
    titleJp:"ナルト",
    romaji:"Naruto",
    kanjiMark:"忍",
    genres:["Aksi","Petualangan"],
    icon:"🍥",
    colors:["#3a2408","#a15a1a"],
    desc:"Ninja muda bermimpi jadi Hokage.",
    episodes:220,
    playlistUrl: "https://www.youtube.com/@MuseIndonesia/search?query=Naruto",
    videoUrl: "https://www.youtube.com/watch?v=QczGoCmX-pI",
    fullEpisodes: [
      { ep: 1, title: "Naruto - Episode 01 [Takarir Indonesia]", yt: "https://www.youtube.com/watch?v=QczGoCmX-pI" }
    ]
  },
  {
    id:"jujutsu",
    titleJp:"呪術廻戦",
    romaji:"Jujutsu Kaisen",
    kanjiMark:"呪",
    genres:["Aksi","Supernatural"],
    icon:"🌀",
    colors:["#1a0a2e","#3d1a5e"],
    desc:"Yuji menelan jari kutukan dan masuk dunia Jujutsu.",
    episodes:24,
    playlistUrl: "https://www.youtube.com/@MuseIndonesia/search?query=Jujutsu+Kaisen",
    videoUrl: "https://www.youtube.com/watch?v=RIyb52EMx8c",
    fullEpisodes: [
      { ep: 1, title: "Jujutsu Kaisen - Episode 01 [Takarir Indonesia] FULL", yt: "https://www.youtube.com/watch?v=4A_X-Dvl0ws" },
      { ep: 2, title: "Jujutsu Kaisen - Episode 02 [Takarir Indonesia]", yt: "https://www.youtube.com/watch?v=5B_Y-Ewm1xt" }
    ]
  },
  {
    id:"heroaca",
    titleJp:"僕のヒーローアカデミア",
    romaji:"Boku no Hero Academia",
    kanjiMark:"力",
    genres:["Aksi","Sekolah"],
    icon:"💥",
    colors:["#0d2a1c","#0f6b3c"],
    desc:"Dunia superpower, anak tanpa kekuatan ingin jadi pahlawan.",
    episodes:138,
    playlistUrl: "https://www.youtube.com/@MuseIndonesia/search?query=My+Hero+Academia",
    videoUrl: "https://www.youtube.com/watch?v=D5fJ_hLH1YQ",
    fullEpisodes: [
      { ep: 1, title: "MHA - Episode 01 [Takarir Indonesia]", yt: "https://www.youtube.com/watch?v=D5fJ_hLH1YQ" }
    ]
  },
  {
    id:"tokyoghoul",
    titleJp:"東京喰種",
    romaji:"Tokyo Ghoul",
    kanjiMark:"喰",
    genres:["Dark Fantasy","Horor"],
    icon:"🎭",
    colors:["#1a0a0a","#4a1010"],
    desc:"Mahasiswa berubah jadi setengah ghoul.",
    episodes:12,
    playlistUrl: "https://www.youtube.com/@MuseIndonesia/search?query=Tokyo+Ghoul",
    videoUrl: "https://www.youtube.com/watch?v=vGuQeQsoRgU",
    fullEpisodes: [
      { ep: 1, title: "Tokyo Ghoul - Episode 01 [Takarir Indonesia]", yt: "https://www.youtube.com/watch?v=vGuQeQsoRgU" }
    ]
  },
  {
    id:"deathnote",
    titleJp:"デスノート",
    romaji:"Death Note",
    kanjiMark:"死",
    genres:["Misteri","Psikologis"],
    icon:"📓",
    colors:["#0a0a0a","#2a2a2a"],
    desc:"Buku catatan yang bisa membunuh siapa pun.",
    episodes:37,
    playlistUrl: "https://www.youtube.com/@MuseIndonesia/search?query=Death+Note",
    videoUrl: "https://www.youtube.com/watch?v=NlJZ3ELqyC0",
    fullEpisodes: [
      { ep: 1, title: "Death Note - Episode 01 [Takarir Indonesia]", yt: "https://www.youtube.com/watch?v=NlJZ3ELqyC0" }
    ]
  },
  {
    id:"spyfamily",
    titleJp:"スパイファミリー",
    romaji:"Spy x Family",
    kanjiMark:"家",
    genres:["Komedi","Aksi","Keluarga"],
    icon:"🕵️",
    colors:["#241a3a","#4a3a7a"],
    desc:"Mata-mata bikin keluarga palsu demi misi.",
    episodes:37,
    playlistUrl: "https://www.youtube.com/playlist?list=PLb1V1z1Q1p9_SPYxFAMILY_ID",
    videoUrl: "https://www.youtube.com/watch?v=h_iYEoLmgww",
    fullEpisodes: [
      { ep: 1, title: "SPYxFAMILY - Misi 01 [Takarir Indonesia] FULL", yt: "https://www.youtube.com/watch?v=2I3kO4JgO3o" },
      { ep: 2, title: "SPYxFAMILY - Misi 02 [Takarir Indonesia] FULL", yt: "https://www.youtube.com/watch?v=3J4lP5KqO4p" },
      { ep: 15, title: "SPYxFAMILY - Misi 15 [Takarir Indonesia] FULL", yt: "https://www.youtube.com/watch?v=8k9lM0nO1pQ" }
    ]
  },
  {
    id:"frieren",
    titleJp:"葬送のフリーレン",
    romaji:"Sousou no Frieren",
    kanjiMark:"魔",
    genres:["Fantasi","Slice of Life"],
    icon:"🪄",
    colors:["#0d1a2e","#1e3f6e"],
    desc:"Perjalanan Frieren setelah pahlawan meninggal.",
    episodes:28,
    playlistUrl: "https://www.youtube.com/@MuseIndonesia/search?query=Frieren",
    videoUrl: "https://www.youtube.com/watch?v=0H6eP-v9Ol8",
    fullEpisodes: [
      { ep: 1, title: "Frieren: Beyond Journey's End - Episode 01-04 [Takarir Indonesia] FULL", yt: "https://www.youtube.com/watch?v=4XPSUVB_FXQ" },
      { ep: 13, title: "Frieren - Episode 13 [Takarir Indonesia] FULL", yt: "https://www.youtube.com/watch?v=XEUqqFzK9lk" },
      { ep: 30, title: "Frieren - Episode 30 [Bahasa Indonesia] FULL", yt: "https://www.youtube.com/watch?v=oO-Z6kzuci0" }
    ]
  }
];

const GENRES = ["Semua", ...new Set(ANIME_DATA.flatMap(a => a.genres))];
let activeGenre = "Semua";
let searchTerm = "";
const genreNav = document.getElementById("genreNav");
const grid = document.getElementById("animeGrid");
const resultCount = document.getElementById("resultCount");
const overlay = document.getElementById("overlay");
let currentAnime = null;

GENRES.forEach(g => {
  const b = document.createElement("button");
  b.className = "chip" + (g === "Semua" ? " active" : "");
  b.textContent = g;
  b.onclick = () => {
    activeGenre = g;
    [...genreNav.children].forEach(c => c.classList.toggle("active", c === b));
    renderGrid();
  };
  genreNav.appendChild(b);
});

function posterStyle(a){ return `background:linear-gradient(150deg, ${a.colors[0]}, ${a.colors[1]});`; }
function posterInner(a, size){ return `<div class="icon" style="font-size:${size}px">${a.icon}</div><span class="kanji-mark jp">${a.kanjiMark}</span>`; }
function getSavedVideo(id){ try{ return localStorage.getItem("scarlet_video_" + id) || ""; } catch(e){ return ""; } }
function setSavedVideo(id, url){ try{ localStorage.setItem("scarlet_video_" + id, url); }catch(e){} }
function removeSavedVideo(id){ try{ localStorage.removeItem("scarlet_video_" + id); }catch(e){} }
function effectiveVideoUrl(a){ return getSavedVideo(a.id) || a.videoUrl || ""; }
function toEmbedUrl(url){
  const yt = url.match(/(?:youtu\.be\/|v=|embed\/)([\w-]{11})/);
  if(yt) return "https://www.youtube.com/embed/" + yt[1];
  return url;
}

function renderGrid(){
  const filtered = ANIME_DATA.filter(a => {
    const matchGenre = activeGenre === "Semua" || a.genres.includes(activeGenre);
    const matchSearch = (a.titleJp + a.romaji).toLowerCase().includes(searchTerm.toLowerCase());
    return matchGenre && matchSearch;
  });
  resultCount.textContent = filtered.length + " judul";
  grid.innerHTML = "";
  if(filtered.length === 0){
    grid.innerHTML = `<div class="empty-state"><span class="jp">見つかりません</span>Nggak ketemu.</div>`;
    return;
  }
  filtered.forEach(a => {
    const hasVideo = !!effectiveVideoUrl(a);
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="poster" style="${posterStyle(a)}">
        ${posterInner(a, 44)}
        <span class="badge-ep">${a.episodes} eps</span>
        ${hasVideo ? "" : '<span class="badge-empty">kosong</span>'}
      </div>
      <div class="card-info">
        <p class="title-jp jp">${a.titleJp}</p>
        <p class="title-romaji">${a.romaji}</p>
        <div class="tags">${a.genres.map(g => `<span>${g}</span>`).join("")}</div>
      </div>
    `;
    card.onclick = () => openModal(a);
    grid.appendChild(card);
  });
}

document.getElementById("searchInput").addEventListener("input", e => {
  searchTerm = e.target.value; renderGrid();
});

function renderVideoSlot(){
  const slot = document.getElementById("videoSlot");
  const url = effectiveVideoUrl(currentAnime);
  slot.style.aspectRatio = "auto";
  slot.innerHTML = `
    <div style="width:100%;aspect-ratio:16/9;">
      <iframe src="${toEmbedUrl(url)}" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" style="width:100%;height:100%;border:0;border-radius:14px;"></iframe>
    </div>
    ${currentAnime.fullEpisodes ? `
    <div style="margin-top:16px;width:100%;text-align:left;">
      <p class="jp" style="color:var(--gold);margin:0 0 8px;">全話 - Full Episode Muse Indonesia</p>
      <div style="display:flex;flex-direction:column;gap:6px;max-height:220px;overflow-y:auto;">
        ${currentAnime.fullEpisodes.map(v => `
          <a href="${v.yt}" target="_blank" onclick="event.preventDefault(); document.querySelector('#videoSlot iframe').src='${toEmbedUrl(v.yt)}'; window.scrollTo(0,0);" style="display:flex;justify-content:space-between;gap:8px;padding:10px 12px;background:var(--surface);border:1px solid var(--line);border-radius:10px;text-decoration:none;font-size:13px;cursor:pointer;">
            <span style="color:var(--text)">${v.title}</span>
            <span style="color:var(--sakura)">▶</span>
          </a>
        `).join("")}
      </div>
      <a href="${currentAnime.playlistUrl}" target="_blank" style="display:inline-block;margin-top:10px;font-size:12px;color:var(--muted)">Buka Playlist Lengkap di Muse Indonesia →</a>
    </div>` : ""}
  `;
}

function openModal(a){
  currentAnime = a;
  document.getElementById("modalPoster").style.cssText = posterStyle(a);
  document.getElementById("modalPoster").innerHTML = posterInner(a, 30);
  document.getElementById("modalTitleJp").textContent = a.titleJp;
  document.getElementById("modalTitleRomaji").textContent = a.romaji + " · " + a.episodes + " episode";
  document.getElementById("modalTags").innerHTML = a.genres.map(g => `<span>${g}</span>`).join("");
  document.getElementById("modalDesc").textContent = a.desc;
  document.getElementById("videoUrlInput").value = getSavedVideo(a.id) || "";
  renderVideoSlot();
  overlay.classList.add("open");
}

function closeModal(){ overlay.classList.remove("open"); currentAnime = null; }
document.getElementById("closeModal").onclick = closeModal;
overlay.addEventListener("click", e => { if(e.target === overlay) closeModal(); });
document.getElementById("saveVideoBtn").onclick = () => {
  const url = document.getElementById("videoUrlInput").value.trim();
  if(!currentAnime) return;
  if(url) setSavedVideo(currentAnime.id, url); else removeSavedVideo(currentAnime.id);
  renderVideoSlot(); renderGrid();
};
document.getElementById("clearVideoBtn").onclick = () => {
  if(!currentAnime) return;
  removeSavedVideo(currentAnime.id);
  document.getElementById("videoUrlInput").value = "";
  renderVideoSlot(); renderGrid();
};
renderGrid();
