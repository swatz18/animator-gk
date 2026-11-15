
import { useState } from "react";
import "./ShortsGrid.css";

const videos = [
  { id: 1, youtubeId: "jx_1hGpBTlA" },
  { id: 2, youtubeId: "FmF9YPJAhY4" },
  { id: 3, youtubeId: "BpDUeAcKjz8" },
  { id: 4, youtubeId: "gnooDd2g-SI" },
  { id: 5, youtubeId: "sSOnYNWhC9I" },
  { id: 6, youtubeId: "uMQsITyzRmY" },
  { id: 7, youtubeId: "b5kehBUEc1c" },
  { id: 8, youtubeId: "oro62ikYghY" },
];

function ShortsGrid() {
  const [playingId, setPlayingId] = useState<number | null>(null);

  return (
    <section className="learn-shorts">
      <p className="learn-shorts__label">SHORT TUTORIALS</p>

      <div className="learn-shorts__grid">
        {videos.map((video) => (
          <article className="learn-shorts__card" key={video.id}>
            <div className="learn-shorts__video">
              {playingId === video.id ? (
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
                  title={`Short tutorial ${video.id}`}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <>
                  <img
                    src={`https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`}
                    alt={`Short tutorial ${video.id}`}
                    loading="lazy"
                  />

                  <div className="learn-shorts__overlay" />

                  <button
                    type="button"
                    className="learn-shorts__play"
                    onClick={() => setPlayingId(video.id)}
                    aria-label={`Play short tutorial ${video.id}`}
                  >
                    ▶
                  </button>

                  <span className="learn-shorts__number">
                    {String(video.id).padStart(2, "0")}
                  </span>
                </>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ShortsGrid;
