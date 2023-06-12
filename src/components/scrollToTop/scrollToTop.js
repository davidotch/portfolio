import React, { useState, useEffect } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { FaAngleUp } from 'react-icons/fa'

import '../../style/scrollToTop.css'

const ScrollToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false)

    // changing the showTopBtn state whenever a scroll event happens
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true)
            } else {
                setShowTopBtn(false)
            }
        })
    }, [])

    // fucntion to help scroll to top smoothly
    const goToTop = () => {
        scroll.scrollToTop({
            duration: 500, //durée de l'animation en millisecondes
            smooth: 'easeInOutQuart', //type de transition d'animation
        })
    }

    return (
        <div className="top-to-btm">
            {showTopBtn && (
                <FaAngleUp
                    className="icon-position icon-style"
                    onClick={goToTop}
                />
            )}
        </div>
    )
}

export default ScrollToTop
