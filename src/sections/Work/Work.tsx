import { useRef, useState } from "react";
import "./Work.css";
import usePageSEO from "../../hooks/usePageSEO";

type Category =
  | "All"
  | "Product Viz"
  | "Arch Viz"
  | "Video Edits"
  | "3D"
  | "Explainers";

type WorkItem = {
  id: number;
  category: Exclude<Category, "All">;
  youtubeId: string;
  orientation: "vertical" | "landscape";
};

const works: WorkItem[] = [
  // =========================================================
  // PRODUCT VIZ — LONG FORM
  // =========================================================

  {
    id: 1,
    category: "Product Viz",
    youtubeId: "dbvaEX8QU_U",
    orientation: "landscape",
  },
  {
    id: 2,
    category: "Product Viz",
    youtubeId: "s1DClbpTCoc",
    orientation: "landscape",
  },


  // =========================================================
  // ARCH VIZ — SHORTS
  // =========================================================

  {
    id: 3,
    category: "Arch Viz",
    youtubeId: "Vh4Z1rDQ5fQ",
    orientation: "vertical",
  },
  {
    id: 4,
    category: "Arch Viz",
    youtubeId: "hoWWVdUj8ek",
    orientation: "vertical",
  },
  {
    id: 5,
    category: "Arch Viz",
    youtubeId: "3HSXadgiGQI",
    orientation: "vertical",
  },
  {
    id: 6,
    category: "Arch Viz",
    youtubeId: "hkWuiMco6VQ",
    orientation: "vertical",
  },


  // =========================================================
// VIDEO EDITS — SHORTS
// =========================================================

{
  id: 7,
  category: "Video Edits",
  youtubeId: "YggHj1N9Trk",
  orientation: "vertical",
},
{
  id: 8,
  category: "Video Edits",
  youtubeId: "rYSt_NnPpQ0",
  orientation: "vertical",
},
{
  id: 9,
  category: "Video Edits",
  youtubeId: "UeKIhGmp0nM",
  orientation: "vertical",
},
{
  id: 10,
  category: "Video Edits",
  youtubeId: "3Hy4VeLcVIA",
  orientation: "vertical",
},


// =========================================================
// VIDEO EDITS — LONG FORM
// =========================================================

{
  id: 11,
  category: "Video Edits",
  youtubeId: "afJ0SP8jW4I",
  orientation: "landscape",
},
{
  id: 12,
  category: "Video Edits",
  youtubeId: "ig5ngQgtN8M",
  orientation: "landscape",
},

  // =========================================================
  // 3D — SHORTS
  // =========================================================

  {
    id: 13,
    category: "3D",
    youtubeId: "UyupvRPWu5g",
    orientation: "vertical",
  },
  {
    id: 14,
    category: "3D",
    youtubeId: "TPUa9EmuR8k",
    orientation: "vertical",
  },


  // =========================================================
  // 3D — LONG FORM
  // =========================================================

  {
    id: 15,
    category: "3D",
    youtubeId: "4r1_1xlpakc",
    orientation: "landscape",
  },
  {
    id: 16,
    category: "3D",
    youtubeId: "DCAymAIlRXM",
    orientation: "landscape",
  },
  {
    id: 17,
    category: "3D",
    youtubeId: "FbAJU-fXkMM",
    orientation: "landscape",
  },
  {
    id: 18,
    category: "3D",
    youtubeId: "nHccLsGHhvY",
    orientation: "landscape",
  },
  {
    id: 19,
    category: "3D",
    youtubeId: "Ts8TOUWvpq0",
    orientation: "landscape",
  },
  {
    id: 20,
    category: "3D",
    youtubeId: "A5FBf-ypYiI",
    orientation: "landscape",
  },


  // =========================================================
  // EXPLAINERS — SHORTS
  // =========================================================

  {
    id: 21,
    category: "Explainers",
    youtubeId: "8UQ2Km0E0MM",
    orientation: "vertical",
  },
];


// =========================================================
// CATEGORY ORDER
// =========================================================

const categories: Category[] = [
  "All",
  "Product Viz",
  "Arch Viz",
  "Video Edits",
  "3D",
  "Explainers",
];


function Work() {
  usePageSEO(
    "Animation Portfolio | 3D Artist & Motion Designer | Animator GK",
    "Explore the animation portfolio of Animator GK, a freelance 3D artist and motion designer in Coimbatore, India. Discover product visualization, architectural visualization, 3D animation, video editing, explainer videos and creative work."
  );


  // =========================================================
  // STATE
  // =========================================================

  const [activeCategory, setActiveCategory] =
    useState<Category>("All");

  const [playingId, setPlayingId] =
    useState<number | null>(null); 
    
  const categoryContainerRef =
    useRef<HTMLDivElement | null>(null);

  const categoryRefs =
    useRef<Record<string, HTMLButtonElement | null>>({});  


  // =========================================================
  // FILTER WORK
  // =========================================================

  const filteredWorks =
    activeCategory === "All"
      ? works
      : works.filter(
          (work) => work.category === activeCategory
        );


  // =========================================================
  // SEPARATE SHORTS / LONG FORM
  // =========================================================

  const verticalWorks = filteredWorks.filter(
    (work) => work.orientation === "vertical"
  );

  const landscapeWorks = filteredWorks.filter(
    (work) => work.orientation === "landscape"
  );


  // =========================================================
  // CATEGORY CHANGE
  // =========================================================

  const handleCategoryChange = (category: Category) => {
  setActiveCategory(category);

  // Stop any currently playing video
  setPlayingId(null);

  // Scroll only the category container
  const container = categoryContainerRef.current;
  const selectedButton = categoryRefs.current[category];

  if (container && selectedButton) {
    const containerRect =
      container.getBoundingClientRect();

    const buttonRect =
      selectedButton.getBoundingClientRect();

    const scrollAmount =
      buttonRect.left -
      containerRect.left -
      (containerRect.width / 2) +
      (buttonRect.width / 2);

    container.scrollTo({
      left: container.scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  }
};


  // =========================================================
  // PLAY VIDEO
  // =========================================================

  const handlePlay = (id: number) => {
    setPlayingId(id);
  };


  // =========================================================
  // RENDER
  // =========================================================

  return (
    <main className="work-page">

      {/* Ambient purple glow */}
      <div className="work-page__glow" />


      <section className="work-page__content">


        {/* =================================================
            HERO
        ================================================= */}

        <header className="work-page__header">

          <p className="work-page__eyebrow">
            MY WORK
          </p>

          <h1 className="work-page__title">
            IDEAS BROUGHT TO LIFE.
          </h1>

          <p className="work-page__description">
            3D, product visualization, architectural
            visualization, animation & video.
          </p>

        </header>


        {/* =================================================
            CATEGORY PILLS
        ================================================= */}

        <div
          ref={categoryContainerRef}
          className="work-page__categories"
          role="tablist"
          aria-label="Work categories"
        >

          {categories.map((category) => (

            <button
              key={category}
              ref={(element) => {
                categoryRefs.current[category] = element;
              }}
              type="button"
              className={`work-page__category ${
                activeCategory === category
                  ? "work-page__category--active"
                  : ""
              }`}
              onClick={() =>
                handleCategoryChange(category)
              }
              role="tab"
              aria-selected={
                activeCategory === category
              }
            >
              {category}
            </button>

          ))}

        </div>


        {/* =================================================
            WORK
        ================================================= */}

        {filteredWorks.length > 0 ? (

          <>


            {/* =================================================
                SHORTS
            ================================================= */}

            {verticalWorks.length > 0 && (

              <section className="work-page__section">

                <p className="work-page__section-label">
                  SHORTS
                </p>


                <div className="work-page__shorts-grid">

                  {verticalWorks.map((work) => {

                    const isPlaying =
                      playingId === work.id;


                    return (

                      <article
                        className="work-card"
                        key={work.id}
                      >

                        <div
                          className="work-card__video work-card__video--vertical"
                          onClick={() =>
                            !isPlaying &&
                            handlePlay(work.id)
                          }
                        >

                          {isPlaying ? (

                            <iframe
                              src={`https://www.youtube.com/embed/${work.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                              title={`${work.category} project`}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                            />

                          ) : (

                            <>

                              <img
                                src={`https://i.ytimg.com/vi/${work.youtubeId}/maxresdefault.jpg`}
                                alt={`${work.category} project`}
                                loading="lazy"
                              />


                              <div className="work-card__overlay" />


                              <button
                                type="button"
                                className="work-card__play"
                                aria-label={`Play ${work.category} video`}
                                onClick={(event) => {
                                  event.stopPropagation();
                                  handlePlay(work.id);
                                }}
                              >
                                <span>▶</span>
                              </button>


                              <div className="work-card__number">
                                {String(work.id).padStart(2, "0")}
                              </div>

                            </>

                          )}

                        </div>

                      </article>

                    );

                  })}

                </div>

              </section>

            )}


            {/* =================================================
                LONG FORM
            ================================================= */}

            {landscapeWorks.length > 0 && (

              <section className="work-page__section work-page__section--longform">

                <p className="work-page__section-label">
                  LONG FORM
                </p>


                <div className="work-page__longform-grid">

                  {landscapeWorks.map((work) => {

                    const isPlaying =
                      playingId === work.id;


                    return (

                      <article
                        className="work-card"
                        key={work.id}
                      >

                        <div
                          className="work-card__video work-card__video--landscape"
                          onClick={() =>
                            !isPlaying &&
                            handlePlay(work.id)
                          }
                        >

                          {isPlaying ? (

                            <iframe
                              src={`https://www.youtube.com/embed/${work.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                              title={`${work.category} project`}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                            />

                          ) : (

                            <>

                              <img
                                src={`https://i.ytimg.com/vi/${work.youtubeId}/maxresdefault.jpg`}
                                alt={`${work.category} project`}
                                loading="lazy"
                              />


                              <div className="work-card__overlay" />


                              <button
                                type="button"
                                className="work-card__play"
                                aria-label={`Play ${work.category} video`}
                                onClick={(event) => {
                                  event.stopPropagation();
                                  handlePlay(work.id);
                                }}
                              >
                                <span>▶</span>
                              </button>


                              <div className="work-card__number">
                                {String(work.id).padStart(2, "0")}
                              </div>

                            </>

                          )}

                        </div>

                      </article>

                    );

                  })}

                </div>

              </section>

            )}

          </>

        ) : (

          /* =================================================
             EMPTY STATE
          ================================================= */

          <div className="work-page__empty">

            <span className="work-page__empty-number">
              01
            </span>

            <h2>
              MORE WORK
              <span>COMING SOON.</span>
            </h2>

            <p>
              This collection is being updated.
              Check back soon for more projects.
            </p>

          </div>

        )}

      </section>

    </main>
  );
}


export default Work;