import Card from './subComponents/card'
import { useEffect, useState } from 'react'

import { motion as m } from 'framer-motion'
import { motion, AnimatePresence } from 'framer-motion'

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

import '../style/gallery.css'

const Gallery = () => {
  const [data, setData] = useState()
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    )
  }

  useEffect(() => {
    const getData = async () => {
      await fetch('/datas/data.json')
        .then((res) => {
          if (!res.ok) {
            throw Error('Sorry an error occured...')
          }
          return res.json()
        })
        .then((data) => {
          setData(data)
          // console.log(data);
        })
        .catch((error) => {
          console.log(error)
        })
    }
    getData()
  })

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
        <span className='span'>&lsaquo;/</span>Portfolio<span className='span'>&rsaquo;</span>
      </h3>
      <AnimatePresence mode="wait">
        {data && data.length > 0 ? (
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.3, ease: 'ease' },
            }}
            className="project">
            {/* Affichez deux cartes à la fois */}
            <m.div className="card-container">
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
              {data.length > 1 && data[(currentIndex + 1) % data.length] && (
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
          {data.map((_, index) => (
            <m.div
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      )}
    </m.section>
  )
}

export default Gallery
