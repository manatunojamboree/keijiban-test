const board = document.getElementById("board");

fetch("https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLh2rWXTrInpyg0Ll49V_tz62dFzgXy8-SdgbNZri10OdLQ1QsDZx1dWzyTAAA50TnRUPjfG4aIPvWGpd-zMv_gSTze9rD-uElwe_iEhcZ-C57TWZZfQsg-2VLv5JWtGCTAOwu7tFW_TJ5Qgzcw5TaGrwmd58Fh-dXB8D46uZiq4RfJ_H9K2CT7UNC63HtQgACJRejkVv6HOvm36u2C36t3geUudtHZcPcPk5k-9hbDR7uRKSJCP36CLJ4VdF205p7qcH_Eu5eFPmN1leNw22VyQBcv6Bw&lib=Mh0cYyEBxgD42cU-LfNC2iACKPjFc87IZ")
  .then(res => res.json())
  .then(posts => {
    board.innerHTML = "";
    posts.forEach(p => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${p.name}</strong>：${p.message}`;
      board.appendChild(li);
    });
  });
