const ANIME_DATA = [
  { id:"kimetsu", titleJp:"鬼滅の刃", romaji:"Kimetsu no Yaiba", kanjiMark:"鬼", genres:["Aksi","Dark Fantasy"], icon:"⚔️", colors:["#3a0d12","#7a1421"], desc:"Tanjiro jadi pembasmi iblis.", episodes:26, videoUrl:"https://www.youtube.com/watch?v=ATJYac_dORw", fullEpisodes:[] },
  { id:"shingeki", titleJp:"進撃の巨人", romaji:"Shingeki no Kyojin", kanjiMark:"巨", genres:["Aksi","Misteri"], icon:"🧱", colors:["#2a2f24","#556042"], desc:"Manusia vs Titan.", episodes:87, videoUrl:"https://www.youtube.com/watch?v=E7WytLM2KvY", fullEpisodes:[] },
  { id:"onepiece", titleJp:"ワンピース", romaji:"One Piece", kanjiMark:"海", genres:["Petualangan","Komedi"], icon:"🏴‍☠️", colors:["#0d2a3a","#155a7a"], desc:"Luffy cari One Piece.", episodes:1000, videoUrl:"https://www.youtube.com/watch?v=S8_YwFLCh4U", fullEpisodes:[] },
  { id:"naruto", titleJp:"ナルト", romaji:"Naruto", kanjiMark:"忍", genres:["Aksi","Petualangan"], icon:"🍥", colors:["#3a2408","#a15a1a"], desc:"Ninja jadi Hokage.", episodes:220, videoUrl:"https://www.youtube.com/watch?v=QczGoCmX-pI", fullEpisodes:[] },
  { id:"jujutsu", titleJp:"呪術廻戦", romaji:"Jujutsu Kaisen", kanjiMark:"呪", genres:["Aksi","Supernatural"], icon:"🌀", colors:["#1a0a2e","#3d1a5e"], desc:"Dunia kutukan Jujutsu.", episodes:24, videoUrl:"https://www.youtube.com/watch?v=RIyb52EMx8c", fullEpisodes:[] },
  { id:"heroaca", titleJp:"僕のヒーローアカデミア", romaji:"Boku no Hero Academia", kanjiMark:"力", genres:["Aksi","Sekolah"], icon:"💥", colors:["#0d2a1c","#0f6b3c"], desc:"Dunia superpower.", episodes:138, videoUrl:"https://www.youtube.com/watch?v=D5fJ_hLH1YQ", fullEpisodes:[] },
  { id:"tokyoghoul", titleJp:"東京喰種", romaji:"Tokyo Ghoul", kanjiMark:"喰", genres:["Dark Fantasy","Horor"], icon:"🎭", colors:["#1a0a0a","#4a1010"], desc:"Setengah ghoul.", episodes:12, videoUrl:"https://www.youtube.com/watch?v=vGuQeQsoRgU", fullEpisodes:[] },
  { id:"deathnote", titleJp:"デスノート", romaji:"Death Note", kanjiMark:"死", genres:["Misteri","Psikologis"], icon:"📓", colors:["#0a0a0a","#2a2a2a"], desc:"Buku pembunuh.", episodes:37, videoUrl:"https://www.youtube.com/watch?v=NlJZ3ELqyC0", fullEpisodes:[] },
  { id:"spyfamily", titleJp:"スパイファミリー", romaji:"Spy x Family", kanjiMark:"家", genres:["Komedi","Aksi","Keluarga"], icon:"🕵️", colors:["#241a3a","#4a3a7a"], desc:"Keluarga palsu mata-mata.", episodes:37, videoUrl:"https://www.youtube.com/watch?v=h_iYEoLmgww", fullEpisodes:[] },
  { id:"frieren", titleJp:"葬送のフリーレン", romaji:"Sousou no Frieren", kanjiMark:"魔", genres:["Fantasi","Slice of Life"], icon:"🪄", colors:["#0d1a2e","#1e3f6e"], desc:"Perjalanan Frieren.", episodes:28, videoUrl:"https://www.youtube.com/watch?v=4XPSUVB_FXQ", fullEpisodes:[] }
];

const GENRES = ["Semua", ...new Set(ANIME_DATA.flatMap(a => a.genres))];
let activeGenre = "Semua", searchTerm = "", currentAnime = null, isLandscape = false;
const genreNav = document.getElementById("genreNav"), grid = document.getElementById("animeGrid"), resultCount = document.getElementById("resultCount"), overlay = document.getElementById("overlay");

GENRES.forEach(g => {
  const b = document.createElement("button");
  b.className = "chip" + (g === "Semua" ? " active" : "");
  b.textContent = g;
  b.onclick = () => { activeGenre = g; [...genreNav.children].forEach(c => c.classList.toggle("active", c === b)); renderGrid(); };
  genreNav.appendChild(b);
});

function posterStyle(a){ return `background:linear-gradient(150deg, ${a.colors[0]}, ${a.colors[1]});`; }
function posterInner(a, s){ return `<div class="icon" style="font-size:${s}px">${a.icon}</div><span class="kanji-mark jp">${a.kanjiMark}</span>`; }
function getSavedVideo(id){ try{ return localStorage.getItem("scarlet_video_" + id) || ""; } catch(e){ return ""; } }
function setSavedVideo(id, url){ try{ localStorage.setItem("scarlet_video_" + id, url); }catch(e){} }
function removeSavedVideo(id){ try{ localStorage.removeItem("scarlet_video_" + id); }catch(e){} }
function effectiveVideoUrl(a){ return getSavedVideo(a.id) || a.videoUrl || ""; }

// FITUR BARU: parse link YT & playlist
function parseYouTube(url){
  url = url.trim();
  let videoId = null, playlistId = null;
  const vMatch = url.match(/(?:v=|youtu\.be\/|embed\/|shorts\/)([a-zA-Z0-9_-]{11})/);
  if(vMatch) videoId = vMatch[1];
  const listMatch = url.match(/[?&]list=([a-zA-Z0-9_-]+)/);
  if(listMatch) playlistId = listMatch[1];
  return { videoId, playlistId, original: url };
}

function buildNoAdsEmbed(parsed){
  // pakai youtube-nocookie biar minim iklan overlay + modestbranding
  if(parsed.playlistId && parsed.videoId){
    // video + playlist biar next otomatis
    return `https://www.youtube-nocookie.com/embed/${parsed.videoId}?list=${parsed.playlistId}&modestbranding=1&rel=0&iv_load_policy=3&enablejsapi=1&playsinline=1`;
  }
  if(parsed.playlistId){
    // hanya playlist
    return `https://www.youtube-nocookie.com/embed/videoseries?list=${parsed.playlistId}&modestbranding=1&rel=0&iv_load_policy=3&enablejsapi=1&playsinline=1`;
  }
  if(parsed.videoId){
    return `https://www.youtube-nocookie.com/embed/${parsed.videoId}?modestbranding=1&rel=0&iv_load_policy=3&enablejsapi=1&playsinline=1&autoplay=1`;
  }
  return parsed.original;
}

function renderGrid(){
  const filtered = ANIME_DATA.filter(a => {
    const matchGenre = activeGenre === "Semua" || a.genres.includes(activeGenre);
    const matchSearch = (a.titleJp + a.romaji).toLowerCase().includes(searchTerm.toLowerCase());
    return matchGenre && matchSearch;
  });
  resultCount.textContent = filtered.length + " judul";
  grid.innerHTML = "";
  filtered.forEach(a => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<div class="poster" style="${posterStyle(a)}">${posterInner(a,44)}<span class="badge-ep">${a.episodes} eps</span></div><div class="card-info"><p class="title-jp jp">${a.titleJp}</p><p class="title-romaji">${a.romaji}</p><div class="tags">${a.genres.map(g=>`<span>${g}</span>`).join("")}</div></div>`;
    card.onclick = () => openModal(a);
    grid.appendChild(card);
  });
}

document.getElementById("searchInput").addEventListener("input", e => { searchTerm = e.target.value; renderGrid(); });

function renderVideoSlot(){
  const slot = document.getElementById("videoSlot");
  const url = effectiveVideoUrl(currentAnime);
  const parsed = parseYouTube(url);
  const embedUrl = buildNoAdsEmbed(parsed);

  slot.innerHTML = `
    <div id="videoWrapper" class="video-wrapper">
      <iframe id="ytPlayer" src="${embedUrl}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>
    </div>
    <div class="player-controls">
      <button class="primary" id="btnFullscreen">⛶ Fullscreen</button>
      <button id="btnLandscape">⤢ Layar Miring</button>
      <button id="btnReload">↻ Reload</button>
    </div>
    ${parsed.playlistId ? `<small style="color:var(--muted);margin-top:6px;display:block;">Playlist terdeteksi: ${parsed.playlistId} — akan auto-next tanpa buka YouTube</small>` : ""}
  `;

  document.getElementById("btnFullscreen").onclick = () => {
    const wrapper = document.getElementById("videoWrapper");
    if(wrapper.requestFullscreen) wrapper.requestFullscreen();
  };
  document.getElementById("btnLandscape").onclick = toggleLandscape;
  document.getElementById("btnReload").onclick = () => {
    document.getElementById("ytPlayer").src = embedUrl;
  };
}

function toggleLandscape(){
  const wrapper = document.getElementById("videoWrapper");
  isLandscape = !isLandscape;
  wrapper.classList.toggle("landscape-mode", isLandscape);
  wrapper.classList.toggle("is-landscape", isLandscape);
  if(isLandscape && screen.orientation && screen.orientation.lock){
    screen.orientation.lock("landscape").catch(()=>{});
  } else if(screen.orientation && screen.orientation.unlock){
    screen.orientation.unlock();
  }
}

function openModal(a){
  currentAnime = a;
  document.getElementById("modalPoster").style.cssText = posterStyle(a);
  document.getElementById("modalPoster").innerHTML = posterInner(a, 30);
  document.getElementById("modalTitleJp").textContent = a.titleJp;
  document.getElementById("modalTitleRomaji").textContent = a.romaji + " · " + a.episodes + " episode";
  document.getElementById("modalTags").innerHTML = a.genres.map(g => `<span>${g}</span>`).join("");
  document.getElementById("modalDesc").textContent = a.desc;
  document.getElementById("videoUrlInput").value = getSavedVideo(a.id) || a.videoUrl || "";
  document.getElementById("videoUrlInput").placeholder = "Tempel link YT video ATAU link playlist YT Muse Indonesia di sini...";
  renderVideoSlot();
  overlay.classList.add("open");
}
function closeModal(){
  const wrapper = document.getElementById("videoWrapper");
  if(wrapper && isLandscape) toggleLandscape();
  overlay.classList.remove("open"); currentAnime = null;
}
document.getElementById("closeModal").onclick = closeModal;
overlay.addEventListener("click", e => { if(e.target === overlay) closeModal(); });
document.getElementById("saveVideoBtn").onclick = () => {
  let url = document.getElementById("videoUrlInput").value.trim();
  if(!currentAnime) return;
  if(!url){ removeSavedVideo(currentAnime.id); renderVideoSlot(); renderGrid(); return; }
  // auto konversi link YT apapun jadi bisa diputar tanpa iklan
  const parsed = parseYouTube(url);
  // simpan original biar bisa diparse lagi nanti
  setSavedVideo(currentAnime.id, url);
  renderVideoSlot(); renderGrid();
};
document.getElementById("clearVideoBtn").onclick = () => {
  if(!currentAnime) return;
  removeSavedVideo(currentAnime.id);
  document.getElementById("videoUrlInput").value = "";
  renderVideoSlot(); renderGrid();
};
renderGrid();
