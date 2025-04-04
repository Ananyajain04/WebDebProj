import { useState } from "react";
import "./AlbumCard.css";
const AlbumCard = ({ album }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`album-container ${flipped ? "flipped" : ""}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="album-card">
        {/* Front Side */}
        <div className="album-front">
          <img src={album.cover} alt={album.title} className="album-image" />
        </div>

        {/* Back Side */}
        <div className="album-back">
          <h2>{album.title}</h2>
          <p>{album.description}</p>
        </div>
      </div>
    </div>
  );
};

export default AlbumCard;