const board = document.getElementById("board");

fetch("https://script.google.com/a/macros/ome-tky.ed.jp/s/AKfycbzLxpj5sUVrpEylAY_YRumIZi1bcEOyFdbKYn7z_3oA6Y3B2TLYmnk10JEpUSeFtHNj/exec")
  .then(res => res.json())
  .then(posts => {
    board.innerHTML = "";
    posts.forEach(p => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${p.name}</strong>：${p.message}`;
      board.appendChild(li);
    });
  });
