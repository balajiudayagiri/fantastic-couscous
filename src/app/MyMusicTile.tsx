import React from "react";

function MyMusicTile() {
  return (
    <div>
      <iframe
        allow="autoplay *; encrypted-media *;"
        frameBorder="0"
        height="450"
        style={{
          width: "100%",
          maxWidth: "660px",
          overflow: "hidden",
          background: "transparent",
        }}
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
        src="https://embed.music.apple.com/in/playlist/todays-hits/pl.f4d106fed2bd41149aaacabb233eb5eb"></iframe>
    </div>
  );
}

export default MyMusicTile;
