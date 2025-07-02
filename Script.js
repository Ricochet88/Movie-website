```javascript
async function searchMusic() {
  const query = document.getElementById("searchInput").value.trim();
  if (!query) return;

  const res = await fetch(`https://itunes.apple.com/search?term=encodeURIComponent(query)   media=music`);
  const data = await res.json();

  const songs = document.getElementById("songList");
  songs.innerHTML = "";

  data.results.slice(0, 10).forEach(song => 
    songs.innerHTML += `
      <div class="song-card">
        <img src="{song.artworkUrl100}" alt="song.trackName">
        <h3>{song.trackName}</h3>
        <p>song.artistName</p>
        <audio controls src="{song.previewUrl}"></audio><br/>
        <a href="${song.previewUrl}" download>Download Preview</a>
      </div>
    `;
  });
}
```

---
