import React, { useEffect, useState } from "react";
import "./Testimonials.css";
import { testimonials } from "./TestimonialData";

const Testimonial: React.FC = () => {
  // =========================
  // DESKTOP / TABLET SLIDER
  // =========================

  const cardsPerSlide = 3;
  const totalSlides = Math.ceil(testimonials.length / cardsPerSlide);

  const [currentSlide, setCurrentSlide] = useState(0);

  // =========================
  // MOBILE SLIDER
  // =========================

  const [mobileIndex, setMobileIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setMobileIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const startIndex = currentSlide * cardsPerSlide;

  const visibleTestimonials = testimonials.slice(
    startIndex,
    startIndex + cardsPerSlide
  );

  const goToPrevious = () => {
    setCurrentSlide((prev) =>
      prev > 0 ? prev - 1 : totalSlides - 1
    );
  };

  const goToNext = () => {
    setCurrentSlide((prev) =>
      prev < totalSlides - 1 ? prev + 1 : 0
    );
  };

  return (
    <section className="testimonial-section" id="testimonials">
      <div className="testimonial-container">

        {/* =========================
            SECTION HEADER
        ========================== */}

        <div className="testimonial-header">

          <div className="section-number">
            03
          </div>

          <div className="testimonial-heading">

            <h2>
              WHAT PEOPLE SAY
            </h2>

            <p>
              Real feedback from{" "}
              <span>amazing people</span> I've had
              <br />
              the pleasure to work with.
            </p>

          </div>

          <div className="testimonial-header-actions">
          </div>

        </div>


        {/* =========================
            DESKTOP / TABLET
        ========================== */}

        <div className="testimonial-slider desktop-testimonials">

          <button
            type="button"
            className="testimonial-edge-arrow testimonial-edge-arrow-left"
            onClick={goToPrevious}
            aria-label="Previous testimonials"
          >
            ←
          </button>

          <div className="testimonial-grid">

            {visibleTestimonials.map((testimonial) => (

              <article
                className="testimonial-card"
                key={testimonial.id}
              >

                <div className="testimonial-image-wrapper">

                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="testimonial-image"
                  />

                </div>

                <div className="testimonial-content">

                  <div className="quote-mark">
                    “
                  </div>

                  <p className="testimonial-review">
                    {testimonial.review}
                  </p>

                  <div className="testimonial-client-area">

                    <div className="testimonial-divider"></div>

                    <div className="testimonial-client">

                      <h3>
                        {testimonial.name}
                      </h3>

                      <span>
                        {testimonial.role}
                      </span>

                    </div>

                  </div>

                </div>

              </article>

            ))}

          </div>

          <button
            type="button"
            className="testimonial-edge-arrow testimonial-edge-arrow-right"
            onClick={goToNext}
            aria-label="Next testimonials"
          >
            →
          </button>

        </div>


        {/* =========================
            MOBILE
        ========================== */}

        <div className="mobile-testimonials">

          <div
            className="mobile-testimonial-card"
            key={testimonials[mobileIndex].id}
          >

            <div className="testimonial-image-wrapper">

              <img
                src={testimonials[mobileIndex].image}
                alt={testimonials[mobileIndex].name}
                className="testimonial-image"
              />

            </div>

            <div className="testimonial-content">

              <div className="quote-mark">
                “
              </div>

              <p className="testimonial-review">
                {testimonials[mobileIndex].review}
              </p>

              <div className="testimonial-client-area">

                <div className="testimonial-divider"></div>

                <div className="testimonial-client">

                  <h3>
                    {testimonials[mobileIndex].name}
                  </h3>

                  <span>
                    {testimonials[mobileIndex].role}
                  </span>

                </div>

              </div>

            </div>

          </div>


          {/* =========================
              MOBILE PROGRESS
          ========================== */}

          <div className="mobile-testimonial-indicator">

            <span className="mobile-testimonial-number">
              {String(mobileIndex + 1).padStart(2, "0")}
            </span>

            <div className="mobile-testimonial-progress">

              <span
                key={mobileIndex}
                className="mobile-testimonial-progress-bar"
              />

            </div>

            <span className="mobile-testimonial-total">
              {String(testimonials.length).padStart(2, "0")}
            </span>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonial;