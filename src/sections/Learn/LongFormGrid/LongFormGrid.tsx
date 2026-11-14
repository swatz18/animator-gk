
import { useState } from "react";
import "./LongFormGrid.css";

type Video = {
  id: number;
  youtubeId: string;
};

const videos: Video[] = [
  {
    id: 1,
    youtubeId: "Q4CDmcOY7xg",
  },
  {
    id: 2,
    youtubeId: "Qc2cci7i0BQ",
  },
  {
    id: 3,
    youtubeId: "fKdFUnb3jUI",
  },
  {
    id: 4,
    youtubeId: "azaaBLtfAYA",
  },
  {
    id: 5,
    youtubeId: "ELWHiqNsQV0",
  },
  {
    id: 6,
    youtubeId: "eE1_Czaju1g",
  },
  {
    id: 7,
    youtubeId: "z-zH1NTFYGc",
  },
  {
    id: 8,
    youtubeId: "SjlwB4624p8",
  },
];

function LongformGrid() {
  const [playingId, setPlayingId] = useState<number | null>(null);

  const handlePlay = (id: number) => {
    setPlayingId(id);
  };

  return (
    <section className="learn-longform work-page__section work-page__section--longform">

      <p className="work-page__section-label">
        ALL TUTORIALS
      </p>

      <div className="work-page__longform-grid">

        {videos.map((video) => {
          const isPlaying = playingId === video.id;

          return (
            <article
              className="work-card"
              key={video.id}
            >

              <div
                className="work-card__video work-card__video--landscape"
                onClick={() => !isPlaying && handlePlay(video.id)}
              >

                {isPlaying ? (

                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                    title={`Tutorial ${video.id}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />

                ) : (

                  <>

                    <img
                      src={`https://i.ytimg.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                      alt={`Tutorial ${video.id}`}
                      loading="lazy"
                    />

                    <div className="work-card__overlay" />

                    <button
                      type="button"
                      className="work-card__play"
                      aria-label={`Play tutorial ${video.id}`}
                      onClick={(event) => {
                        event.stopPropagation();
                        handlePlay(video.id);
                      }}
                    >
                      <span>▶</span>
                    </button>

                    <div className="work-card__number">
                      {String(video.id).padStart(2, "0")}
                    </div>

                  </>

                )}

              </div>

            </article>
          );
        })}

      </div>

    </section>
  );
}

export default LongformGrid;
