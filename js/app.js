const MATCH_ROWS = [
      { map: "Anubis", player: "Aaraohn", kills: 1, assists: 0, deaths: 1, kd: 1, adr: 35, rating: -3.29 },
      { map: "Anubis", player: "dab", kills: 1, assists: 0, deaths: 2, kd: 0.5, adr: 66, rating: -0.43 },
      { map: "Anubis", player: "klok", kills: 0, assists: 0, deaths: 2, kd: 0, adr: 0, rating: -7.89 },
      { map: "Anubis", player: "SAVAGE", kills: 0, assists: 1, deaths: 1, kd: 0, adr: 16, rating: -10.02 },
      { map: "Anubis", player: "corras", kills: 0, assists: 0, deaths: 2, kd: 0, adr: 0, rating: -2.41 },
      { map: "Cache", player: "SAVAGE", kills: 21, assists: 3, deaths: 12, kd: 1.75, adr: 107, rating: 9.98 },
      { map: "Cache", player: "dab", kills: 20, assists: 3, deaths: 9, kd: 2.22, adr: 105, rating: 9.98 },
      { map: "Cache", player: "corras", kills: 18, assists: 4, deaths: 15, kd: 1.2, adr: 81, rating: -1.86 },
      { map: "Cache", player: "klok", kills: 13, assists: 7, deaths: 12, kd: 1.08, adr: 78, rating: -0.44 },
      { map: "Cache", player: "Aaraohn", kills: 9, assists: 6, deaths: 11, kd: 0.82, adr: 73, rating: -0.26 },
      { map: "Ancient 1", player: "SAVAGE", kills: 21, assists: 7, deaths: 15, kd: 1.4, adr: 119, rating: 8.64 },
      { map: "Ancient 1", player: "corras", kills: 17, assists: 3, deaths: 12, kd: 1.42, adr: 77, rating: 5.11 },
      { map: "Ancient 1", player: "dab", kills: 16, assists: 6, deaths: 16, kd: 1, adr: 86, rating: 1.22 },
      { map: "Ancient 1", player: "Aaraohn", kills: 13, assists: 3, deaths: 15, kd: 0.87, adr: 71, rating: -1.54 },
      { map: "Ancient 1", player: "klok", kills: 11, assists: 5, deaths: 14, kd: 0.79, adr: 57, rating: -1.9 },
      { map: "Inferno", player: "dab", kills: 23, assists: 2, deaths: 14, kd: 1.64, adr: 95, rating: 3.77 },
      { map: "Inferno", player: "corras", kills: 17, assists: 9, deaths: 16, kd: 1.06, adr: 84, rating: 3.97 },
      { map: "Inferno", player: "Aaraohn", kills: 15, assists: 6, deaths: 20, kd: 0.75, adr: 89, rating: -4.25 },
      { map: "Inferno", player: "klok", kills: 12, assists: 2, deaths: 18, kd: 0.67, adr: 35, rating: -4.76 },
      { map: "Inferno", player: "SAVAGE", kills: 12, assists: 7, deaths: 17, kd: 0.71, adr: 67, rating: -3.7 },
      { map: "Dust2", player: "Aaraohn", kills: 28, assists: 8, deaths: 24, kd: 1.17, adr: 95, rating: 5.15 },
      { map: "Dust2", player: "SAVAGE", kills: 23, assists: 5, deaths: 19, kd: 1.21, adr: 80, rating: 4.68 },
      { map: "Dust2", player: "dab", kills: 21, assists: 7, deaths: 22, kd: 0.95, adr: 84, rating: -3.39 },
      { map: "Dust2", player: "corras", kills: 16, assists: 4, deaths: 22, kd: 0.73, adr: 57, rating: -0.55 },
      { map: "Dust2", player: "klok", kills: 9, assists: 2, deaths: 22, kd: 0.41, adr: 42, rating: -6.92 },
      { map: "Nuke", player: "klok", kills: 17, assists: 2, deaths: 4, kd: 4.25, adr: 108, rating: 7.16 },
      { map: "Nuke", player: "Aaraohn", kills: 13, assists: 4, deaths: 5, kd: 2.6, adr: 102, rating: 4.83 },
      { map: "Nuke", player: "dab", kills: 12, assists: 2, deaths: 3, kd: 4, adr: 72, rating: 10.11 },
      { map: "Nuke", player: "corras", kills: 12, assists: 4, deaths: 8, kd: 1.5, adr: 82, rating: 1.13 },
      { map: "Nuke", player: "SAVAGE", kills: 11, assists: 6, deaths: 7, kd: 1.57, adr: 106, rating: 0.6 },
      { map: "Ancient 2", player: "SAVAGE", kills: 19, assists: 6, deaths: 14, kd: 1.36, adr: 97, rating: 2.6 },
      { map: "Ancient 2", player: "corras", kills: 19, assists: 2, deaths: 13, kd: 1.46, adr: 81, rating: 3.64 },
      { map: "Ancient 2", player: "klok", kills: 12, assists: 5, deaths: 17, kd: 0.71, adr: 69, rating: -3.27 },
      { map: "Ancient 2", player: "Aaraohn", kills: 11, assists: 7, deaths: 18, kd: 0.61, adr: 54, rating: -3.39 },
      { map: "Ancient 2", player: "dab", kills: 11, assists: 7, deaths: 17, kd: 0.65, adr: 77, rating: -4.09 },
    ];

    const TOTALS = [
      { player: "Aaraohn", kills: 90, assists: 34, deaths: 94, kd: 1.117142857142857, adr: 74.14285714285714, rating: -0.3928571428571428 },
      { player: "SAVAGE", kills: 107, assists: 35, deaths: 85, kd: 1.142857142857143, adr: 84.57142857142857, rating: 1.825714285714286 },
      { player: "corras", kills: 99, assists: 26, deaths: 88, kd: 1.052857142857143, adr: 66, rating: 1.29 },
      { player: "dab", kills: 104, assists: 27, deaths: 83, kd: 1.565714285714286, adr: 83.57142857142857, rating: 2.452857142857143 },
      { player: "klok", kills: 74, assists: 23, deaths: 89, kd: 1.13, adr: 55.57142857142857, rating: -2.574285714285714 },
    ];

    const MAP_ORDER = ["Anubis", "Cache", "Ancient 1", "Inferno", "Dust2", "Nuke", "Ancient 2"];

    const MATCH_RESULTS = {
      "Anubis": { us: 0, them: 2, result: "forfeit", label: "Desistência" },
      "Cache": { us: 13, them: 6, result: "win", label: "Vitória" },
      "Ancient 1": { us: 13, them: 7, result: "win", label: "Vitória" },
      "Inferno": { us: 10, them: 13, result: "loss", label: "Derrota", tag: "Faceit" },
      "Dust2": { us: 15, them: 15, result: "draw", label: "Empate" },
      "Nuke": { us: 13, them: 1, result: "win", label: "Vitória" },
      "Ancient 2": { us: 8, them: 13, result: "loss", label: "Derrota" },
    };

    const AWARDS = [
      { title: "Matei o meu", metric: "Mais kills", key: "kills", direction: "max", tone: "glory", format: "int", unit: "kills" },
      { title: "Cameraman", metric: "Mais mortes", key: "deaths", direction: "max", tone: "roast", format: "int", unit: "deaths" },
      { title: "Ta podendo matar?", metric: "Menos kills", key: "kills", direction: "min", tone: "roast", format: "int", unit: "kills" },
      { title: "Iniesta brasileiro", metric: "Mais assists", key: "assists", direction: "max", tone: "glory", format: "int", unit: "assists" },
      { title: "Só sabe guardar", metric: "Menos mortes", key: "deaths", direction: "min", tone: "glory", format: "int", unit: "deaths" },
      { title: "HLTV player", metric: "Maior K/D", key: "kd", direction: "max", tone: "glory", format: "kd", unit: "K/D" },
      { title: "Prime invertido", metric: "Menor K/D", key: "kd", direction: "min", tone: "roast", format: "kd", unit: "K/D" },
      { title: "Minhas balas não pegam", metric: "Menor ADR", key: "adr", direction: "min", tone: "roast", format: "adr", unit: "ADR" },
      { title: "Ta miado", metric: "Maior ADR", key: "adr", direction: "max", tone: "glory", format: "adr", unit: "ADR" },
      { title: "Estudou o leetify", metric: "Maior rating", key: "rating", direction: "max", tone: "glory", format: "rating", unit: "rating" },
      { title: "Faltou aquecer", metric: "Menor rating", key: "rating", direction: "min", tone: "roast", format: "rating", unit: "rating" },
    ];

    function slugify(name) {
      return "map-" + name.toLowerCase().replace(/\s+/g, "-");
    }

    function formatKd(n) {
      return Number(n).toFixed(2);
    }

    function formatAdr(n) {
      return Number.isInteger(n) ? String(n) : Number(n).toFixed(1);
    }

    function formatRating(n) {
      const v = Number(n);
      const abs = Math.abs(v).toFixed(2);
      return (v > 0 ? "+" : v < 0 ? "-" : "") + abs;
    }

    function ratingClass(n) {
      if (n >= 5) return "stat-great";
      if (n >= 1.5) return "stat-good";
      if (n > -1.5) return "stat-avg";
      if (n > -5) return "stat-subpar";
      return "stat-poor";
    }

    function kdClass(n) {
      if (n >= 1.5) return "stat-great";
      if (n >= 1.1) return "stat-good";
      if (n >= 0.9) return "stat-avg";
      if (n >= 0.7) return "stat-subpar";
      return "stat-poor";
    }

    function groupByMap(rows) {
      const groups = {};
      for (const map of MAP_ORDER) groups[map] = [];
      for (const row of rows) {
        if (!groups[row.map]) groups[row.map] = [];
        groups[row.map].push({ ...row });
      }
      return groups;
    }

    function bestKeys(players, keys) {
      const best = {};
      for (const key of keys) {
        let max = -Infinity;
        let winners = [];
        for (const p of players) {
          if (p[key] > max) {
            max = p[key];
            winners = [p.player];
          } else if (p[key] === max) {
            winners.push(p.player);
          }
        }
        // Deaths: lower is better
        if (key === "deaths") {
          let min = Infinity;
          winners = [];
          for (const p of players) {
            if (p.deaths < min) {
              min = p.deaths;
              winners = [p.player];
            } else if (p.deaths === min) {
              winners.push(p.player);
            }
          }
        }
        best[key] = new Set(winners);
      }
      return best;
    }

    function cellClass(player, key, best, value) {
      const classes = [];
      if (key === "rating") classes.push("rating-cell", ratingClass(value));
      else if (key === "kd") classes.push(kdClass(value));
      else classes.push("stat-avg");
      if (best[key] && best[key].has(player)) classes.push("stat-best");
      return classes.join(" ");
    }

    function formatAwardValue(value, format) {
      if (format === "kd") return formatKd(value);
      if (format === "adr") return formatAdr(value);
      if (format === "rating") return formatRating(value);
      return String(Math.round(value));
    }

    function pickAwardWinners(players, key, direction) {
      let best = direction === "max" ? -Infinity : Infinity;
      const winners = [];
      for (const p of players) {
        const v = p[key];
        const better = direction === "max" ? v > best : v < best;
        const equal = v === best;
        if (better) {
          best = v;
          winners.length = 0;
          winners.push(p);
        } else if (equal) {
          winners.push(p);
        }
      }
      return { winners, value: best };
    }

    function renderAwards() {
      const grid = document.getElementById("awards-grid");
      grid.innerHTML = AWARDS.map((award) => {
        const { winners, value } = pickAwardWinners(TOTALS, award.key, award.direction);
        const names = winners.map((w) => w.player).join(" · ");
        return `
          <article class="award-card tone-${award.tone}">
            <div class="award-metric">${award.metric}</div>
            <h3 class="award-title">${award.title}</h3>
            <div class="award-winner">${names}</div>
            <div class="award-value">${formatAwardValue(value, award.format)}<span>${award.unit}</span></div>
          </article>
        `;
      }).join("");
    }

    function renderMatches() {
      const groups = groupByMap(MATCH_ROWS);
      const nav = document.getElementById("nav-links");
      const container = document.getElementById("matches");

      MAP_ORDER.forEach((map, index) => {
        const players = groups[map]
          .slice()
          .sort((a, b) => b.adr - a.adr || b.kills - a.kills);

        const best = bestKeys(players, ["kills", "assists", "deaths", "kd", "adr", "rating"]);
        const id = slugify(map);
        const result = MATCH_RESULTS[map];

        const navLink = document.createElement("a");
        navLink.href = "#" + id;
        navLink.textContent = map;
        nav.appendChild(navLink);

        const card = document.createElement("article");
        card.className = "match-card";
        card.id = id;

        const rowsHtml = players
          .map((p, i) => {
            return `
              <tr>
                <td>
                  <div class="player-cell">
                    <span class="rank">${i + 1}</span>
                    <span class="player-name">${p.player}</span>
                  </div>
                </td>
                <td class="${cellClass(p.player, "kills", best, p.kills)}">${p.kills}</td>
                <td class="${cellClass(p.player, "assists", best, p.assists)}">${p.assists}</td>
                <td class="${cellClass(p.player, "deaths", best, p.deaths)}">${p.deaths}</td>
                <td class="${cellClass(p.player, "kd", best, p.kd)}">${formatKd(p.kd)}</td>
                <td class="${cellClass(p.player, "adr", best, p.adr)}">${formatAdr(p.adr)}</td>
                <td class="${cellClass(p.player, "rating", best, p.rating)}">${formatRating(p.rating)}</td>
              </tr>
            `;
          })
          .join("");

        const tagHtml = result.tag ? `<span class="tag-pill">${result.tag}</span>` : "";

        card.innerHTML = `
          <div class="match-head">
            <div class="match-title">
              <span class="match-index">#${String(index + 1).padStart(2, "0")}</span>
              <h2>${map}</h2>
            </div>
            <div class="match-meta">
              <div class="score-board" aria-label="Placar ${result.us} a ${result.them}">
                <span class="score-us">${result.us}</span>
                <span class="score-sep">×</span>
                <span class="score-them">${result.them}</span>
              </div>
              <span class="result-pill ${result.result}">${result.label}</span>
              ${tagHtml}
            </div>
          </div>
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Player</th>
                  <th>Kills</th>
                  <th>Assists</th>
                  <th>Deaths</th>
                  <th>K/D</th>
                  <th>ADR</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>${rowsHtml}</tbody>
            </table>
          </div>
        `;

        container.appendChild(card);
      });

      const destaquesLink = document.createElement("a");
      destaquesLink.href = "#destaques";
      destaquesLink.className = "nav-special";
      destaquesLink.textContent = "Destaques";
      nav.appendChild(destaquesLink);

      const totalsLink = document.createElement("a");
      totalsLink.href = "#totais";
      totalsLink.className = "nav-special totals-link";
      totalsLink.textContent = "Totais";
      nav.appendChild(totalsLink);
    }

    function renderTotals() {
      const sorted = TOTALS.slice().sort((a, b) => b.rating - a.rating || b.kills - a.kills);
      const best = bestKeys(sorted, ["kills", "assists", "deaths", "kd", "adr", "rating"]);
      const body = document.getElementById("totals-body");

      body.innerHTML = sorted
        .map((p, i) => `
          <tr class="${i === 0 ? "is-mvp" : ""}">
            <td>
              <div class="player-cell">
                <span class="rank">${i + 1}</span>
                <span class="player-name">${p.player}</span>
              </div>
            </td>
            <td class="${cellClass(p.player, "kills", best, p.kills)}">${p.kills}</td>
            <td class="${cellClass(p.player, "assists", best, p.assists)}">${p.assists}</td>
            <td class="${cellClass(p.player, "deaths", best, p.deaths)}">${p.deaths}</td>
            <td class="${cellClass(p.player, "kd", best, p.kd)}">${formatKd(p.kd)}</td>
            <td class="${cellClass(p.player, "adr", best, p.adr)}">${formatAdr(p.adr)}</td>
            <td class="${cellClass(p.player, "rating", best, p.rating)}">${formatRating(p.rating)}</td>
          </tr>
        `)
        .join("");
    }

    function observeReveal() {
      const targets = document.querySelectorAll(".match-card, .totals-card, .award-card");
      const io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
      targets.forEach((el) => io.observe(el));
    }

    renderMatches();
    renderAwards();
    renderTotals();
    observeReveal();
