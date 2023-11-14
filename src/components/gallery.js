import Card from './subComponents/card'
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

import { motion as m } from 'framer-motion'
import { motion, AnimatePresence } from 'framer-motion'

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

import '../style/gallery.css'

const Gallery = () => {
  const [data, setData] = useState()
  const [currentIndex, setCurrentIndex] = useState(0)
  const isMobile = useMediaQuery({ maxWidth: 998 })

  // fonction pour le défilement avec les flèches
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % data.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 2 : prevIndex - 2
    )
  }

  // fonction handleSwipe pour le swip
  const handleSwipe = (direction) => {
    if (direction === 'left') {
      prevSlide()
    } else if (direction === 'right') {
      nextSlide()
    }
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('/datas/data.json')
        if (!response.ok) {
          throw Error('Sorry, an error occurred...')
        }
        const data = await response.json()
        setData(data)
      } catch (error) {
        console.log(error)
      }
    }

    getData()
  }, [])

  return (
    <m.section
      className="gallery"
      id="project"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.5, ease: 'ease' },
      }}>
      <h3>
        <span className="span">&lsaquo;/</span>Portfolio
        <span className="span">&rsaquo;</span>
      </h3>
      <div className="slide-container">
        <AnimatePresence mode="wait">
          {data && data.length > 0 ? (
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
                type: 'tween',
                transition: { duration: 0.3 },
              }}
              drag="x"
              // drag=x sur le conteneur por activer le glissement horizontal
              dragConstraints={{ left: 0, right: 0 }}
              // dragConstraints={{ left: 0, right: 0 }} empêche le glissement hors des limites
              dragElastic={0.9}
              //  pour contrôler l'élasticité du glissement.
              // onDragEnd détecte la direction du glissement et appelle la fonction handleSwipe
              onDragEnd={(_, { offset }) => {
                const swipe = offset.x > 0 ? 'right' : 'left'
                handleSwipe(swipe)
              }}>
              {/* Affichez deux cartes à la fois */}
              <m.div
                className={`gallery-container ${
                  isMobile ? 'mobile' : 'desktop'
                }`}>
                {data[currentIndex] && (
                  <Card
                    key={data[currentIndex].id}
                    id={data[currentIndex].id}
                    title={data[currentIndex].title}
                    cover={data[currentIndex].cover}
                    description={data[currentIndex].description}
                    link={data[currentIndex].link}
                    tech={data[currentIndex].tech}
                  />
                )}
                {data.length > 1 &&
                  !isMobile &&
                  data[(currentIndex + 1) % data.length] && (
                    <Card
                      key={data[(currentIndex + 1) % data.length].id}
                      id={data[(currentIndex + 1) % data.length].id}
                      title={data[(currentIndex + 1) % data.length].title}
                      cover={data[(currentIndex + 1) % data.length].cover}
                      description={
                        data[(currentIndex + 1) % data.length].description
                      }
                      link={data[(currentIndex + 1) % data.length].link}
                      tech={data[(currentIndex + 1) % data.length].tech}
                    />
                  )}
              </m.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>

      {/*  bouttons pour navigation */}
      <button className="carousel-button prev-button" onClick={prevSlide}>
        <FaArrowLeft />
      </button>
      <button className="carousel-button next-button" onClick={nextSlide}>
        <FaArrowRight />
      </button>

      {/* Points de navigation */}
      {data && currentIndex !== data.length && data.length > 0 && (
        <div className="carousel-dots">
          {Array.from({ length: Math.ceil(data.length / 2) }, (_, index) => (
            <m.div
              key={index}
              className={`dot ${index === currentIndex / 2 ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index * 2)}
            />
          ))}
        </div>
      )}
    </m.section>
  )
}

export default Gallery
