import { useState } from "react";
import "./LongForm.css";

type LongFormVideo = {
  id: string;
  title: string;
  category: string;
};

const videos: LongFormVideo[] = [
  {
    id: "s1DClbpTCoc",
    title: "Nokia Render",
    category: "3D Product Animation",
  },
  {
    id: "dbvaEX8QU_U",
    title: "3D Product Animation",
    category: "Selected Work",
  },
  {
    id: "XzkT6I7xp0s",
    title: "3D Elevation Design",
    category: "Architectural Visualization",
  },
  {
    id: "8fecVO7QVgs",
    title: "3D Interior Design",
    category: "Architectural Visualization",
  },
];

function LongForm() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  const activeVideo = videos[activeIndex];

  const changeVideo = (direction: -1 | 1) => {
    setActiveIndex((current) => (current + direction + videos.length) % videos.length);
    setPlaying(false);
  };

  return (
    <section className="long-form" aria-label="Long form videos">
      <p className="long-form__eyebrow">Featured Projects</p>

      <div className="long-form__stage">
        <button
          type="button"
          className="long-form__arrow long-form__arrow--left"
          aria-label="Previous video"
          onClick={() => changeVideo(-1)}
        >
          <span aria-hidden="true">←</span>
        </button>

        <div className="long-form__player">
          {playing ? (
            <iframe
              key={activeVideo.id}
              src={`https://www.youtube-nocookie.com/embed/${activeVideo.id}?autoplay=1&rel=0&modestbranding=1`}
              title={`${activeVideo.title} | ${activeVideo.category}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              className="long-form__thumbnail"
              onClick={() => setPlaying(true)}
              aria-label={`Play ${activeVideo.title}`}
            >
              <img
                src={`https://i.ytimg.com/vi/${activeVideo.id}/maxresdefault.jpg`}
                alt=""
                loading="lazy"
                onError={(event) => {
                  const image = event.currentTarget;
                  if (!image.src.includes("hqdefault.jpg")) {
                    image.src = `https://i.ytimg.com/vi/${activeVideo.id}/hqdefault.jpg`;
                  }
                }}
              />
              <span className="long-form__thumbnail-shade" />
              <span className="long-form__play" aria-hidden="true">▶</span>
            </button>
          )}
        </div>

        <button
          type="button"
          className="long-form__arrow long-form__arrow--right"
          aria-label="Next video"
          onClick={() => changeVideo(1)}
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>

      <p className="long-form__counter" aria-live="polite">
        {String(activeIndex + 1).padStart(2, "0")}
        <span> / </span>
        {String(videos.length).padStart(2, "0")}
      </p>

    </section>
  );
}

export default LongForm;
