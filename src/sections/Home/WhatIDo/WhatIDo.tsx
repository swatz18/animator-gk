import "./WhatIDo.css"
import { whatIDoData } from "./whatIDoData"
import { useEffect, useRef, useState } from "react"
import type { TouchEvent } from "react"


function WhatIDo() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [startIndex, setStartIndex] = useState(0)
  const [cardsToShow, setCardsToShow] = useState(4)

  const touchStartX = useRef<number | null>(null)
  const [swipeOffset, setSwipeOffset] = useState(0)
  const [isSwiping, setIsSwiping] = useState(false)

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
      const handleTouchStart = (event: TouchEvent<HTMLElement>) => {
      touchStartX.current = event.touches[0].clientX
      setIsSwiping(true)
    }

    const handleTouchMove = (event: TouchEvent<HTMLElement>) => {
      if (touchStartX.current === null) return

      const currentX = event.touches[0].clientX
      const distance = currentX - touchStartX.current

      setSwipeOffset(distance)
    }

    const handleTouchEnd = (event: TouchEvent<HTMLElement>) => {
      if (touchStartX.current === null) return

      const touchEndX = event.changedTouches[0].clientX
      const swipeDistance = touchEndX - touchStartX.current

      const swipeThreshold = 60
      const cardWidth = event.currentTarget.clientWidth

      if (Math.abs(swipeDistance) < swipeThreshold) {
        setSwipeOffset(0)
        setIsSwiping(false)
        touchStartX.current = null
        return
      }

      setIsSwiping(false)

      if (swipeDistance < 0) {
        // Swipe left → next card
        setSwipeOffset(-cardWidth)

        setTimeout(() => {
          nextSlide()
          setSwipeOffset(0)
        }, 250)
      } else {
        // Swipe right → previous card
        setSwipeOffset(cardWidth)

        setTimeout(() => {
          previousSlide()
          setSwipeOffset(0)
        }, 250)
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
          onTouchMove={handleTouchMove}
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
                style={
                  isActive
                    ? {
                        transform: `translateX(${swipeOffset}px)`,
                        transition: isSwiping
                          ? "none"
                          : "transform 0.25s ease-out",
                      }
                    : undefined
                }
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