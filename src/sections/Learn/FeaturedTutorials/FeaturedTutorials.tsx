import { useState } from "react";
import "./FeaturedTutorials.css";

type LongFormVideo = {
  id: string;
  title: string;
  category: string;
};

const videos: LongFormVideo[] = [
  {
    id: "Q4CDmcOY7xg",
    title: "Learn After Effects in 12 minutes | Complete Tutorial in Tamil | Animator GK",
    category: "Motion Graphics",
  },
  {
    id: "Qc2cci7i0BQ",
    title: "Easy Curtain Animation in Blender using bones | No cloth sim | Blender Tamil Tutorial | Animator GK",
    category: "3D",
  },
  {
    id: "fKdFUnb3jUI",
    title: "How I edit Instagram Reels & Youtube Videos Like a Pro | 10 Step Workflow in Tamil | Animator GK",
    category: "Editing",
  },
  {
    id: "azaaBLtfAYA",
    title: " I Tried an AI-Coded After Effects Alternative | Effect Craft | Animator GK",
    category: "Motion Graphics",
  },
];

function FeaturedTutorials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  const activeVideo = videos[activeIndex];

  const changeVideo = (direction: -1 | 1) => {
    setActiveIndex((current) => (current + direction + videos.length) % videos.length);
    setPlaying(false);
  };

  return (
    <section className="long-form" aria-label="Long form videos">
      <p className="long-form__eyebrow">Featured Tutorials</p>

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

export default FeaturedTutorials;
