const ANIME_DATA = [
  { id:"kimetsu", titleJp:"鬼滅の刃", romaji:"Kimetsu no Yaiba", kanjiMark:"鬼", genres:["Aksi","Dark Fantasy"], icon:"⚔️", colors:["#3a0d12","#7a1421"], desc:"Seorang pemuda penjual arang berjuang menjadi pembasmi iblis.", episodes:26, videoUrl:"" },
  { id:"shingeki", titleJp:"進撃の巨人", romaji:"Shingeki no Kyojin", kanjiMark:"巨", genres:["Aksi","Dark Fantasy","Misteri"], icon:"🧱", colors:["#2a2f24","#556042"], desc:"Umat manusia hidup di balik tembok raksasa.", episodes:25, videoUrl:"" },
  { id:"onepiece", titleJp:"ワンピース", romaji:"One Piece", kanjiMark:"海", genres:["Petualangan","Komedi"], icon:"🏴‍☠️", colors:["#0d2a3a","#155a7a"], desc:"Bocah karet berlayar mencari One Piece.", episodes:1000, videoUrl:"" },
  { id:"naruto", titleJp:"ナルト", romaji:"Naruto", kanjiMark:"忍", genres:["Aksi","Petualangan"], icon:"🍥", colors:["#3a2408","#a15a1a"], desc:"Ninja muda bermimpi jadi Hokage.", episodes:220, videoUrl:"" },
  { id:"jujutsu", titleJp:"呪術廻戦", romaji:"Jujutsu Kaisen", kanjiMark:"呪", genres:["Aksi","Supernatural"], icon:"🌀", colors:["#1a0a2e","#3d1a5e"], desc:"Siswa SMA terseret ke dunia jujutsu.", episodes:24, videoUrl:"" },
  { id:"heroaca", titleJp:"僕のヒーローアカデミア", romaji:"Boku no Hero Academia", kanjiMark:"力", genres:["Aksi","Sekolah"], icon:"💥", colors:["#0d2a1c","#0f6b3c"], desc:"Di dunia superpower, anak tanpa kekuatan ingin jadi pahlawan.", episodes:138, videoUrl:"" },
  { id:"tokyoghoul", titleJp:"東京喰種", romaji:"Tokyo Ghoul", kanjiMark:"喰", genres:["Dark Fantasy","Horor"], icon:"🎭", colors:["#1a0a0a","#4a1010"], desc:"Mahasiswa berubah jadi setengah ghoul.", episodes:12, videoUrl:"" },
  { id:"deathnote", titleJp:"デスノート", romaji:"Death Note", kanjiMark:"死", genres:["Misteri","Psikologis"], icon:"📓", colors:["#0a0a0a","#2a2a2a"], desc:"Buku catatan yang bisa membunuh.", episodes:37, videoUrl:"" },
  { id:"spyfamily", titleJp:"スパイファミリー", romaji:"Spy x Family", kanjiMark:"家", genres:["Komedi","Aksi","Keluarga"], icon:"🕵️", colors:["#241a3a","#4a3a7a"], desc:"Mata-mata membentuk keluarga palsu.", episodes:25, videoUrl:"" },
  { id:"frieren", titleJp:"葬送のフリーレン", romaji:"Sousou no Frieren", kanjiMark:"魔", genres:["Fantasi","Slice of Life"], icon:"🪄", colors:["#0d1a2e","#1e3f6e"], desc:"Penyihir elf mengenang teman manusianya.", episodes:28, videoUrl:"" },
  { id:"Tensura S1", titleJp:"転スラ S1", roma:"Tensura", ScarletXylena:"ザイレナ", genres: ["fantasy","Isekai","Adventure], icon: "Tensura", colors["#0d1a2e,"#1e3f6e"], desc:"Rimuru tempest adalah gw"
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
    grid.innerHTML = `<div class="empty-state"><span class="jp">見つかりません</span>Nggak ketemu, coba kata kunci lain.</div>`;
    return;
  }
  filtered.forEach(a => {
    const hasVideo = !!effectiveVideoUrl(a);
    const card = document.createElement("div");
    card.className = "card";
    card.tabIndex = 0;
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
    card.onkeydown = e => { if(e.key === "Enter") openModal(a); };
    grid.appendChild(card);
  });
}

document.getElementById("searchInput").addEventListener("input", e => {
  searchTerm = e.target.value;
  renderGrid();
});

function renderVideoSlot(){
  const slot = document.getElementById("videoSlot");
  const url = effectiveVideoUrl(currentAnime);
  if(!url){
    slot.innerHTML = `<span class="jp">転スラ S1</span><small>https://youtu.be/dpgX35EfKJ0?si=eB5SR4pWMZL4HTSA</small>`;
    return;
  }
  const embed = toEmbedUrl(url);
  if(embed.includes("youtube.com/embed") || embed.includes("youtu.be")){
    slot.innerHTML = `<iframe src="${embed}" allowfullscreen></iframe>`;
  } else {
    slot.innerHTML = `<video controls src="${embed}"></video>`;
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
  document.getElementById("videoUrlInput").value = getSavedVideo(a.id);
  renderVideoSlot();
  overlay.classList.add("open");
}

function closeModal(){
  overlay.classList.remove("open");
  currentAnime = null;
}

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
