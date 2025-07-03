```javascript
// Title
const h1 = document.createElement("h1");
h1.textContent = "Rico Music Downloader";
document.body.appendChild(h1);

// Input
const input = document.createElement("input");
input.placeholder = "Search for a song...";
input.id = "searchInput";
document.body.appendChild(input);

// Button
const btn = document.createElement("button");
btn.textContent = "Search";
btn.onclick = searchMusic;
document.body.appendChild(btn);

// WhatsApp Buttons
const group1 = document.createElement("a");
group1.href = "https://chat.whatsapp.com/YOUR-GROUP-ID-1";
group1.target = "_blank";
group1.className = "whatsapp-btn";
group1.textContent = "Join Group 1";

const group2 = document.createElement("a");
group2.href = "https://chat.whatsapp.com/YOUR-GROUP-ID-2";
group2.target = "_blank";
group2.className = "whatsapp-btn";
group2.textContent = "Join Group 2";

document.body.appendChild(group1);
document.body.appendChild(group2);

// Results container
const results = document.createElement("div");
results.id = "songList";
document.body.appendChild(results);

// Search function
async function searchMusic() {
  const query = input.value.trim();
  if (!query) return;

  results.innerHTML = "Loading...";
  const res = await fetch(`https://itunes.apple.com/search?term=encodeURIComponent(query)   media=music`);
  const data = await res.json();

  results.innerHTML = "";

  data.results.slice(0, 10).forEach(song => 
    const card = document.createElement("div");
    card.className = "song-card";

    card.innerHTML = `
      <img src="{song.artworkUrl100}" alt="song.trackName" style="width:100
      <h3>{song.trackName}</h3>
      <p>song.artistName</p>
      <audio controls src="{song.previewUrl}"></audio><br/>
      <a href="${song.previewUrl}" download>Download Preview</a>
    `;

    results.appendChild(card);
  });
}

// Footer
const footer = document.createElement("footer");
footer.textContent = "Created by Rico";
document.body.appendChild(footer);
