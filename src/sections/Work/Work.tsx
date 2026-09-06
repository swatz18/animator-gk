import "./Work.css"
function Work() {
  return (
    <main className="work-page">
    
      {/* Purple ambient glow */}
      <div className="work-page__glow" />

      <section className="work-page__content">

        <h1 className="work-page__title">
          <span>WORK IN</span>
          <span className="work-page__title-purple">
            PROGRESS.
          </span>
        </h1>

        <div className="work-page__line" />

        <p className="work-page__message">
          Sorry for the inconvenience <span>☺</span>
        </p>

        <p className="work-page__description">
          Please refer my Behance page for my previous works for now.
        </p>

        <a
          href="https://www.behance.net/gopalakrishnanr"
          target="_blank"
          rel="noopener noreferrer"
          className="work-page__button"
        >
          <span className="work-page__behance">
            Bē
          </span>

          <span className="work-page__divider" />

          <span className="work-page__button-text">
            VIEW MY WORKS IN BEHANCE
          </span>

          <span className="work-page__arrow">
            →
          </span>
        </a>

      </section>

    </main>
  )
}

export default Work