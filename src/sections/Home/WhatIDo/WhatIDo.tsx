import "./WhatIDo.css"
import { whatIDoData } from "./whatIDoData"
import { useEffect, useRef, useState } from "react"
import type { TouchEvent } from "react"


function WhatIDo() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [startIndex, setStartIndex] = useState(0)
  const [cardsToShow, setCardsToShow] = useState(4)

  const touchStartX = useRef<number | null>(null)

    useEffect(() => {
      const updateCardsToShow = () => {
        if (window.innerWidth <= 599) {
          setCardsToShow(1)
        } else if (window.innerWidth <= 899) {
          setCardsToShow(2)
        } else if (window.innerWidth <= 1199) {
          setCardsToShow(3)
        } else {
          setCardsToShow(4)
        }
      }

  updateCardsToShow()

  window.addEventListener("resize", updateCardsToShow)

  return () => {
    window.removeEventListener("resize", updateCardsToShow)
  }
}, [])

  useEffect(() => {
    const maxStartIndex =
      Math.max(0, whatIDoData.length - cardsToShow)

    if (startIndex > maxStartIndex) {
      setStartIndex(0)
    }

    if (
      activeIndex < startIndex ||
      activeIndex >= startIndex + cardsToShow
    ) {
      setActiveIndex(startIndex)
    }
  }, [cardsToShow, startIndex, activeIndex])

  const nextSlide = () => {
  setActiveIndex((current) =>
    current === whatIDoData.length - 1 ? 0 : current + 1
  )

  setStartIndex((current) =>
    current === whatIDoData.length - 1 ? 0 : current + 1
  )
}

  const previousSlide = () => {
  setActiveIndex((current) =>
    current === 0 ? whatIDoData.length - 1 : current - 1
  )

  setStartIndex((current) =>
    current === 0 ? whatIDoData.length - 1 : current - 1
  )
}
    const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
      touchStartX.current = event.touches[0].clientX
    }

    const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
      if (touchStartX.current === null) return

      const touchEndX = event.changedTouches[0].clientX
      const swipeDistance = touchStartX.current - touchEndX

      const swipeThreshold = 50

      if (Math.abs(swipeDistance) < swipeThreshold) {
        touchStartX.current = null
        return
      }

      if (swipeDistance > 0) {
        nextSlide()
      } else {
        previousSlide()
      }

      touchStartX.current = null
    }

  const getCardIndex = (offset: number) => {
  return (
    (startIndex + offset + whatIDoData.length) %
    whatIDoData.length
  )
}

  const visibleCards = Array.from(
  { length: cardsToShow },
  (_, offset) => ({
    item: whatIDoData[getCardIndex(offset)],
    offset,
  })
)

  

  return (
    <section className="what-i-do" id="what-i-do">

      {/* HEADER */}
      <div className="what-i-do__header">


        <div className="what-i-do__title-row">

          <div className="what-i-do__number">
            02
          </div>

          <div>
            <h2>WHAT I DO</h2>

            <p>
              Turning ideas into{" "}
              <span>engaging</span>{" "}
              visual experiences.
            </p>
          </div>

        </div>

      </div>


      {/* CAROUSEL */}
      <div className="what-i-do__carousel">

        <button
          className="what-i-do__arrow what-i-do__arrow--left"
          onClick={previousSlide}
          aria-label="Previous"
        >
          ←
        </button>


        <div
          className="what-i-do__cards"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >

          {visibleCards.map(({ item, offset }) => {

            const isActive = whatIDoIndex(item.id) === activeIndex

            return (
              <article
                key={`${item.id}-${offset}`}
                className={`what-i-do__card ${
                    isActive ? "is-active" : ""
                }`}
                onClick={() => {
                  if (!isActive) {
                    setActiveIndex(
                      whatIDoIndex(item.id)
                    )
                  }
                }}
              >

                {/* IMAGE */}
                <div className="what-i-do__image">
                  <img
                    src={item.image}
                    alt={item.title}
                  />

                  <div className="what-i-do__image-overlay" />
                </div>


                {/* CONTENT */}
                <div className="what-i-do__content">


                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                  <span className="what-i-do__card-arrow">
                    →
                  </span>

                </div>

              </article>
            )
          })}

        </div>


        <button
          className="what-i-do__arrow what-i-do__arrow--right"
          onClick={nextSlide}
          aria-label="Next"
        >
          →
        </button>

      </div>


      {/* DOTS */}
      <div className="what-i-do__dots">

        {whatIDoData.map((item, index) => (
          <button
            key={item.id}
            className={
              index === activeIndex
                ? "is-active"
                : ""
            }
            onClick={() => {
              setActiveIndex(index)
              setStartIndex(index)
            }}
            aria-label={`Go to ${item.title}`}
          />
        ))}

      </div>

    </section>
  )
}


/*
 * Finds the data index from the card ID.
 * This keeps the carousel independent from
 * the actual order of the data.
 */
function whatIDoIndex(id: number) {
  return whatIDoData.findIndex(
    (item) => item.id === id
  )
}

export default WhatIDo