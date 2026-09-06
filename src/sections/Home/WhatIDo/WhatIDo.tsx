import "./WhatIDo.css"
import { whatIDoData } from "./whatIDoData"
import {
  useEffect,
  useRef,
  useState,
} from "react"
import type { TouchEvent } from "react"


function WhatIDo() {

  /* =========================================================
     DESKTOP STATE
  ========================================================= */

  const [activeIndex, setActiveIndex] = useState(0)

  const [startIndex, setStartIndex] = useState(0)

  const [cardsToShow, setCardsToShow] = useState(4)

  const touchStartX = useRef<number>(0)
  const touchStartY = useRef<number>(0)
  const touchDirection = useRef<"horizontal" | "vertical" | null>(null)
  /* =========================================================
     MOBILE STATE
  ========================================================= */

  /*
    We render:

    COPY 1
    COPY 2
    COPY 3

    Example:

    6 1 2 3 4 5 6 1 2 3 4 5 6 1 2 3 4 5 6 1

          ↑
       middle copy

    This allows seamless swiping in both directions.
  */

  const dataLength = whatIDoData.length

  const [mobileIndex, setMobileIndex] =
    useState(dataLength)

  const [mobileOffset, setMobileOffset] =
    useState(0)

  const [mobileDragging, setMobileDragging] =
    useState(false)

  const [mobileAnimating, setMobileAnimating] =
    useState(false)
  const [mobileTransitionDuration, setMobileTransitionDuration] =
  useState(0)



  /* =========================================================
     RESPONSIVE CARD COUNT
  ========================================================= */

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

    window.addEventListener(
      "resize",
      updateCardsToShow
    )


    return () => {

      window.removeEventListener(
        "resize",
        updateCardsToShow
      )

    }

  }, [])


  /* =========================================================
     DESKTOP RANGE
  ========================================================= */

  useEffect(() => {

  /*
    Mobile has its own independent track.

    Do not let the desktop startIndex logic
    interfere with the mobile active dot.
  */

  if (cardsToShow === 1) {
    return
  }


  const maxStartIndex =
    Math.max(
      0,
      whatIDoData.length - cardsToShow
    )


  if (startIndex > maxStartIndex) {

    setStartIndex(0)

  }


  if (
    activeIndex < startIndex ||
    activeIndex >=
      startIndex + cardsToShow
  ) {

    setActiveIndex(startIndex)

  }

}, [
  cardsToShow,
  startIndex,
  activeIndex,
])


  /* =========================================================
     DESKTOP NEXT
  ========================================================= */

  const nextSlide = () => {

    const next =
      activeIndex ===
      dataLength - 1
        ? 0
        : activeIndex + 1


    setActiveIndex(next)


    setStartIndex((current) =>
      current === dataLength - 1
        ? 0
        : current + 1
    )

  }


  /* =========================================================
     DESKTOP PREVIOUS
  ========================================================= */

  const previousSlide = () => {

    const previous =
      activeIndex === 0
        ? dataLength - 1
        : activeIndex - 1


    setActiveIndex(previous)


    setStartIndex((current) =>
      current === 0
        ? dataLength - 1
        : current - 1
    )

  }


  /* =========================================================
     MOBILE TOUCH START
  ========================================================= */

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
  if (mobileAnimating) return

  touchStartX.current = e.touches[0].clientX
  touchStartY.current = e.touches[0].clientY
  touchDirection.current = null

  setMobileDragging(true)
}


  /* =========================================================
     MOBILE TOUCH MOVE

     THE TRACK FOLLOWS THE FINGER.

     This is what gives the physical swipe feeling.
  ========================================================= */

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
  if (mobileAnimating) return

  const currentX = e.touches[0].clientX
  const currentY = e.touches[0].clientY

  const deltaX = currentX - touchStartX.current
  const deltaY = currentY - touchStartY.current

  // Decide swipe direction only after the finger has moved enough
  if (!touchDirection.current) {
    if (Math.abs(deltaX) < 6 && Math.abs(deltaY) < 6) {
      return
    }

    touchDirection.current =
      Math.abs(deltaX) > Math.abs(deltaY)
        ? "horizontal"
        : "vertical"
  }

  // If the gesture is vertical, let the page scroll normally
  if (touchDirection.current === "vertical") {
    return
  }

  // Horizontal swipe — prevent the page from moving vertically
  e.preventDefault()

  setMobileOffset(deltaX)
}


  /* =========================================================
     MOBILE TOUCH END

     IMPORTANT:

     We first animate the TRACK one complete
     card width.

     ONLY AFTER the animation finishes do
     we silently reposition the track.

     This eliminates the "card comes back"
     effect.
  ========================================================= */

  const handleTouchEnd = (
  event: TouchEvent<HTMLDivElement>
) => {

  if (mobileAnimating) {
    return
  }


  const endX =
    event.changedTouches[0].clientX


  const distance =
    endX - touchStartX.current


  const threshold = 50


  const containerWidth =
    event.currentTarget.clientWidth


  // Keep touchStartX as a number ref; the next touch replaces its value.


  /* =======================================================
     SMALL SWIPE

     Return smoothly to the starting position.
  ======================================================= */

  if (Math.abs(distance) < threshold) {

    const progress =
      Math.min(
        Math.abs(distance) / containerWidth,
        1
      )


    const duration =
      Math.max(
        140,
        Math.round(280 * progress)
      )


    setMobileTransitionDuration(duration)

    setMobileDragging(false)

    setMobileOffset(0)

    window.setTimeout(() => {
      setMobileTransitionDuration(0)
    }, duration)

    return
  }


  /* =======================================================
     HOW MUCH OF THE CARD HAS ALREADY BEEN DRAGGED?
  ======================================================= */

  const progress =
    Math.min(
      Math.abs(distance) / containerWidth,
      1
    )


  /*
    Remaining distance determines animation time.

    More already dragged
      → less animation

    Less already dragged
      → slightly more animation
  */

  const remaining =
    1 - progress


  const duration =
    Math.round(
      120 + remaining * 180
    )


  setMobileTransitionDuration(duration)

  setMobileDragging(false)

  setMobileAnimating(true)


  /* =======================================================
     LEFT SWIPE
  ======================================================= */

  if (distance < 0) {

    setMobileOffset(-containerWidth)


    window.setTimeout(() => {

      let nextIndex =
        mobileIndex + 1


      let nextActiveIndex =
        activeIndex + 1


      /* ---------------------------------------------------
         LOOP BACK TO MIDDLE COPY
      --------------------------------------------------- */

      if (
        nextIndex >=
        dataLength * 2
      ) {

        nextIndex =
          dataLength

        nextActiveIndex = 0

      }
      else {

        nextActiveIndex =
          nextActiveIndex %
          dataLength

      }


      /*
        Reset the track while transition
        is disabled.
      */

      setMobileDragging(true)

      setMobileIndex(nextIndex)

      setActiveIndex(
        nextActiveIndex
      )

      setStartIndex(
        nextActiveIndex
      )

      setMobileOffset(0)


      requestAnimationFrame(() => {

        requestAnimationFrame(() => {

          setMobileDragging(false)

          setMobileAnimating(false)

          setMobileTransitionDuration(0)

        })

      })

    }, duration)


    return
  }


  /* =======================================================
     RIGHT SWIPE
  ======================================================= */

  setMobileOffset(
    containerWidth
  )


  window.setTimeout(() => {

    let previousIndex =
      mobileIndex - 1


    let previousActiveIndex =
      activeIndex - 1


    /* ---------------------------------------------------
       LOOP BACK TO MIDDLE COPY
    --------------------------------------------------- */

    if (
      previousIndex < dataLength
    ) {

      previousIndex =
        dataLength * 2 - 1

      previousActiveIndex =
        dataLength - 1

    }
    else {

      previousActiveIndex =
        (
          previousActiveIndex +
          dataLength
        ) %
        dataLength

    }


    /*
      Reset without animation.
    */

    setMobileDragging(true)

    setMobileIndex(
      previousIndex
    )

    setActiveIndex(
      previousActiveIndex
    )

    setStartIndex(
      previousActiveIndex
    )

    setMobileOffset(0)


    requestAnimationFrame(() => {

      requestAnimationFrame(() => {

        setMobileDragging(false)

        setMobileAnimating(false)

        setMobileTransitionDuration(0)

      })

    })

  }, duration)
}


  /* =========================================================
     MOBILE TRACK
  ========================================================= */

  /*
    3 copies × 6 cards = 18 physical cards.

    Each card therefore occupies:

    100 / 18 = 5.555555%

    of the complete track.
  */

  const totalMobileCards =
    dataLength * 3


  const cardPercentage =
    100 / totalMobileCards


  const mobileTrackTransform = `
    translate3d(
      calc(
        -${mobileIndex * cardPercentage}%
        + ${mobileOffset}px
      ),
      0,
      0
    )
  `


  /* =========================================================
     MOBILE DATA

     Three physical copies.
  ========================================================= */

  const mobileCards = [
    ...whatIDoData,
    ...whatIDoData,
    ...whatIDoData,
  ]


  /* =========================================================
     DESKTOP CARDS
  ========================================================= */

  const currentCard =
    whatIDoData[activeIndex]


  const nextCard =
    whatIDoData[
      (activeIndex + 1) %
        dataLength
    ]


  const previousCard =
    whatIDoData[
      (activeIndex - 1 + dataLength) %
        dataLength
    ]


  /* =========================================================
     RENDER
  ========================================================= */

  return (

    <section
      className="what-i-do"
      id="what-i-do"
    >

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="what-i-do__header">

        <div className="what-i-do__title-row">

          <div className="what-i-do__number">
            02
          </div>


          <div>

            <h2>
              WHAT I DO
            </h2>


            <p>
              Turning ideas into{" "}
              <span>
                engaging
              </span>{" "}
              visual experiences.
            </p>

          </div>

        </div>

      </div>


      {/* =====================================================
          DESKTOP CAROUSEL
      ===================================================== */}

      <div className="what-i-do__carousel">

        <button
          className="
            what-i-do__arrow
            what-i-do__arrow--left
          "
          onClick={previousSlide}
          aria-label="Previous"
        >
          ←
        </button>


        <div className="what-i-do__cards">

          {/* PREVIOUS */}

          <article
            className="
              what-i-do__card
              what-i-do__card--previous
            "
          >

            <div className="what-i-do__image">

              <img
                src={previousCard.image}
                alt={previousCard.title}
              />

              <div className="what-i-do__image-overlay" />

            </div>


            <div className="what-i-do__content">

              <h3>
                {previousCard.title}
              </h3>

              <p>
                {previousCard.description}
              </p>

              <span className="what-i-do__card-arrow">
                →
              </span>

            </div>

          </article>


          {/* CURRENT */}

          <article
            className="
              what-i-do__card
              what-i-do__card--current
            "
          >

            <div className="what-i-do__image">

              <img
                src={currentCard.image}
                alt={currentCard.title}
              />

              <div className="what-i-do__image-overlay" />

            </div>


            <div className="what-i-do__content">

              <h3>
                {currentCard.title}
              </h3>

              <p>
                {currentCard.description}
              </p>

              <span className="what-i-do__card-arrow">
                →
              </span>

            </div>

          </article>


          {/* NEXT */}

          <article
            className="
              what-i-do__card
              what-i-do__card--next
            "
          >

            <div className="what-i-do__image">

              <img
                src={nextCard.image}
                alt={nextCard.title}
              />

              <div className="what-i-do__image-overlay" />

            </div>


            <div className="what-i-do__content">

              <h3>
                {nextCard.title}
              </h3>

              <p>
                {nextCard.description}
              </p>

              <span className="what-i-do__card-arrow">
                →
              </span>

            </div>

          </article>

        </div>


        <button
          className="
            what-i-do__arrow
            what-i-do__arrow--right
          "
          onClick={nextSlide}
          aria-label="Next"
        >
          →
        </button>

      </div>


      {/* =====================================================
          MOBILE CAROUSEL
      ===================================================== */}

      <div
        className="what-i-do__mobile-carousel"

        onTouchStart={
          handleTouchStart
        }

        onTouchMove={
          handleTouchMove
        }

        onTouchEnd={
          handleTouchEnd
        }

        onTouchCancel={
          handleTouchEnd
        }
      >

        <div
          className="
            what-i-do__mobile-track
          "

          style={{
            transform:
              mobileTrackTransform,

            transition:
              mobileDragging
                ? "none"
                : `transform ${mobileTransitionDuration}ms cubic-bezier(0.25, 0.8, 0.25, 1)`,
          }}
        >

          {mobileCards.map(
            (item, index) => (

              <article
                key={`${index}-${item.id}`}
                className="
                  what-i-do__mobile-card
                "
              >

                <div className="what-i-do__image">

                  <img
                    src={item.image}
                    alt={item.title}
                    draggable={false}
                  />

                  <div className="what-i-do__image-overlay" />

                </div>


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
          )}

        </div>

      </div>


      {/* =====================================================
          DOTS
      ===================================================== */}

      <div className="what-i-do__dots">

        {whatIDoData.map(
          (item, index) => (

            <button
              key={item.id}

              className={
                index === activeIndex
                  ? "is-active"
                  : ""
              }

              onClick={() => {

                if (mobileAnimating) {
                  return
                }


                setActiveIndex(index)

                setStartIndex(index)


                /*
                  Put selected card in
                  the middle copy.
                */

                setMobileDragging(true)

                setMobileIndex(
                  dataLength + index
                )

                setMobileOffset(0)


                requestAnimationFrame(() => {

                  requestAnimationFrame(() => {

                    setMobileDragging(false)

                  })

                })

              }}

              aria-label={
                `Go to ${item.title}`
              }
            />

          )
        )}

      </div>

    </section>

  )
}


export default WhatIDo