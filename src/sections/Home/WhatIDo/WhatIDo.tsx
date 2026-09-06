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


  const touchStartX =
    useRef<number | null>(null)


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

  const handleTouchStart = (
    event: TouchEvent<HTMLDivElement>
  ) => {

    if (mobileAnimating) {
      return
    }


    touchStartX.current =
      event.touches[0].clientX


    setMobileDragging(true)

    setMobileOffset(0)

  }


  /* =========================================================
     MOBILE TOUCH MOVE

     THE TRACK FOLLOWS THE FINGER.

     This is what gives the physical swipe feeling.
  ========================================================= */

  const handleTouchMove = (
    event: TouchEvent<HTMLDivElement>
  ) => {

    if (
      touchStartX.current === null ||
      mobileAnimating
    ) {

      return

    }


    const currentX =
      event.touches[0].clientX


    const distance =
      currentX - touchStartX.current


    setMobileOffset(distance)

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

    if (
      touchStartX.current === null ||
      mobileAnimating
    ) {

      return

    }


    const endX =
      event.changedTouches[0].clientX


    const distance =
      endX - touchStartX.current


    const threshold = 50


    touchStartX.current = null


    /* =======================================================
       SMALL SWIPE

       Return to original position.
    ======================================================= */

    if (
      Math.abs(distance) < threshold
    ) {

      setMobileDragging(false)

      setMobileOffset(0)

      return

    }


    /* =======================================================
       START ANIMATION
    ======================================================= */

    setMobileDragging(false)

    setMobileAnimating(true)


    /* =======================================================
       LEFT SWIPE
    ======================================================= */

    if (distance < 0) {

      /*
        Move the entire track exactly
        one card width to the LEFT.
      */

      setMobileOffset(-window.innerWidth)


      window.setTimeout(() => {

        const rawIndex =
          mobileIndex + 1


        let finalIndex = rawIndex

        let finalActiveIndex =
          activeIndex + 1


        /* ---------------------------------------------------
           We reached the end of the middle copy.

           Reposition to the beginning of the
           middle copy WITHOUT animation.

           The user sees exactly the same card.
        --------------------------------------------------- */

        if (
          rawIndex >=
          dataLength * 2
        ) {

          finalIndex = dataLength

          finalActiveIndex = 0

        }


        /*
          For normal movement:

          6 → 7
          7 → 8
          8 → 9
          etc.
        */

        else {

          finalActiveIndex =
            finalActiveIndex %
            dataLength

        }


        /*
          Disable transition before changing
          the physical position.
        */

        setMobileDragging(true)

        setMobileIndex(finalIndex)

        setActiveIndex(
          finalActiveIndex
        )
        setStartIndex(finalActiveIndex)

        setMobileOffset(0)


        /*
          Let browser paint the reset position,
          then turn dragging mode back off.
        */

        requestAnimationFrame(() => {

          requestAnimationFrame(() => {

            setMobileDragging(false)

            setMobileAnimating(false)

          })

        })

      }, 300)


      return

    }


    /* =======================================================
       RIGHT SWIPE
    ======================================================= */

    /*
      Move the entire track exactly
      one card width to the RIGHT.
    */

    setMobileOffset(
      window.innerWidth
    )


    window.setTimeout(() => {

      const rawIndex =
        mobileIndex - 1


      let finalIndex = rawIndex

      let finalActiveIndex =
        activeIndex - 1


      /* ---------------------------------------------------
         We reached the beginning of the first copy.

         Jump to the end of the middle copy
         with transition disabled.
      --------------------------------------------------- */

      if (rawIndex < dataLength) {

        finalIndex =
          dataLength * 2 - 1

        finalActiveIndex =
          dataLength - 1

      }

      else {

        finalActiveIndex =
          (
            finalActiveIndex +
            dataLength
          ) %
          dataLength

      }


      /*
        Disable transition before reset.
      */

      setMobileDragging(true)

      setMobileIndex(finalIndex)

      setActiveIndex(
        finalActiveIndex
      )
      setStartIndex(finalActiveIndex)

      setMobileOffset(0)


      requestAnimationFrame(() => {

        requestAnimationFrame(() => {

          setMobileDragging(false)

          setMobileAnimating(false)

        })

      })

    }, 300)

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
                : "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
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