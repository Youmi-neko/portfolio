(function () {
  "use strict";

  var $ = function (id) { return document.getElementById(id); };

  function thumbUrl(w) {
    if (w.thumb) return w.thumb;
    if (w.youtube) return "https://i.ytimg.com/vi/" + encodeURIComponent(w.youtube) + "/hqdefault.jpg";
    return "";
  }

  function embedUrl(w) {
    if (w.youtube) {
      return "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(w.youtube) + "?autoplay=1&rel=0";
    }
    if (w.nico) {
      return "https://embed.nicovideo.jp/watch/" + encodeURIComponent(w.nico) + "?autoplay=1";
    }
    return "";
  }

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  /* ---------- プロフィール ---------- */
  document.title = PROFILE.name + " | " + PROFILE.role.replace("…", "");
  $("name").textContent = PROFILE.name;
  $("role").textContent = PROFILE.role;
  $("mail").textContent = PROFILE.email;
  $("mail").href = "mailto:" + PROFILE.email;
  $("xlink").textContent = PROFILE.x.label;
  $("xlink").href = PROFILE.x.url;
  $("copy").textContent = "© " + new Date().getFullYear() + " " + PROFILE.name;

  // 注記の中の「Karure」だけをXへのリンクにする
  (function () {
    var p = $("note");
    var word = PROFILE.x.label;
    var i = PROFILE.note.indexOf(word);
    if (i < 0) { p.textContent = PROFILE.note; return; }
    p.appendChild(document.createTextNode(PROFILE.note.slice(0, i)));
    var a = el("a", null, word);
    a.href = PROFILE.x.url; a.target = "_blank"; a.rel = "noopener";
    p.appendChild(a);
    p.appendChild(document.createTextNode(PROFILE.note.slice(i + word.length)));
  })();

  /* ---------- 受付状況 ---------- */
  (function () {
    if (typeof STATUS === "undefined") return;
    var box = $("status");
    var open = !!STATUS.open;
    var text = open ? STATUS.label : STATUS.closedLabel;
    if (STATUS.detail) text += "　" + STATUS.detail;
    $("status-text").textContent = text;
    box.className = "status-bar " + (open ? "open" : "closed");
    $("status-mail").textContent = PROFILE.email;
    $("status-mail").href = "mailto:" + PROFILE.email;
    box.hidden = false;
  })();

  /* ---------- モーダル ---------- */
  var modal = $("modal");
  var player = $("player");
  var lastFocus = null;

  function openModal(w) {
    var src = embedUrl(w);
    if (!src) return;
    lastFocus = document.activeElement;
    player.textContent = "";
    var f = document.createElement("iframe");
    f.src = src;
    f.title = w.title;
    f.allow = "autoplay; fullscreen; picture-in-picture; encrypted-media";
    f.allowFullscreen = true;
    player.appendChild(f);
    $("modal-title").textContent = w.title;
    var meta = [];
    if (w.date) meta.push(w.date);
    if (w.tags && w.tags.length) meta.push(w.tags.map(function (t) { return "#" + t; }).join(" "));
    if (w.role) meta.push("役職: " + w.role);
    if (w.credit) meta.push(w.credit);
    $("modal-meta").textContent = meta.join("\n");
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    modal.querySelector(".modal-close").focus();
  }

  function closeModal() {
    if (modal.hidden) return;
    modal.hidden = true;
    player.textContent = "";   // iframeを消して再生を止める
    document.body.style.overflow = "";
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  modal.addEventListener("click", function (e) {
    if (e.target.hasAttribute("data-close")) closeModal();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeModal();
  });

  /* ---------- REEL ---------- */
  $("reel-label").textContent = REEL.title;
  var reelImg = $("reel-img");
  reelImg.src = "https://i.ytimg.com/vi/" + encodeURIComponent(REEL.youtube) + "/maxresdefault.jpg";
  reelImg.onerror = function () {
    reelImg.onerror = null;
    reelImg.src = "https://i.ytimg.com/vi/" + encodeURIComponent(REEL.youtube) + "/hqdefault.jpg";
  };
  $("reel").addEventListener("click", function () { openModal(REEL); });

  /* ---------- Works ---------- */
  var grid = $("grid");
  var current = null;   // 選択中のタグ(nullなら全部)

  function makeCard(w) {
    var li = el("li");
    var b = el("button", "card");
    b.type = "button";
    b.setAttribute("aria-label", w.title + " を再生");

    var t = el("span", "thumb");
    var url = thumbUrl(w);
    if (url) {
      var img = document.createElement("img");
      img.loading = "lazy";
      img.decoding = "async";
      img.alt = "";
      img.src = url;
      img.onerror = function () {
        img.remove();
        t.appendChild(el("span", "ph", "Play"));
      };
      t.appendChild(img);
    } else {
      t.appendChild(el("span", "ph", w.nico ? "niconico" : "Play"));
    }
    b.appendChild(t);

    var txt = el("span", "card-text");
    txt.appendChild(el("span", "card-title", w.title));
    if (w.role) txt.appendChild(el("span", "card-role", w.role));
    var meta = [];
    if (w.date) meta.push(w.date);
    if (w.tags && w.tags.length) meta.push(w.tags.map(function (x) { return "#" + x; }).join(" "));
    if (meta.length) txt.appendChild(el("span", "card-meta", meta.join("  ")));
    b.appendChild(txt);

    b.addEventListener("click", function () { openModal(w); });
    li.appendChild(b);
    return li;
  }

  function render() {
    grid.textContent = "";
    var shown = WORKS.filter(function (w) {
      return !current || (w.tags && w.tags.indexOf(current) >= 0);
    });
    shown.forEach(function (w) { grid.appendChild(makeCard(w)); });
    $("count").textContent = shown.length;
  }

  function buildFilter() {
    var tags = [];
    WORKS.forEach(function (w) {
      (w.tags || []).forEach(function (t) { if (tags.indexOf(t) < 0) tags.push(t); });
    });
    if (!tags.length) return;
    var box = $("filter");
    box.hidden = false;
    var all = ["All"].concat(tags);
    all.forEach(function (t, i) {
      var b = el("button", null, t);
      b.type = "button";
      b.setAttribute("aria-pressed", i === 0 ? "true" : "false");
      b.addEventListener("click", function () {
        current = i === 0 ? null : t;
        Array.prototype.forEach.call(box.children, function (c) {
          c.setAttribute("aria-pressed", c === b ? "true" : "false");
        });
        render();
      });
      box.appendChild(b);
    });
  }

  buildFilter();
  render();
})();
