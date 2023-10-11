import React from 'react'

import { motion as m } from 'framer-motion'
import '../style/contact.css'

const contact = () => {
  return (
    <m.section
      className="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.5, ease: 'ease' },
      }}>
      <h3>
        <span className="span">&lsaquo;/</span>Contactez Moi
        <span className="span">&rsaquo;</span>
      </h3>

      <form
        action="https://getform.io/f/9ee43956-c472-4fe4-8e0c-a514a671e9aa"
        method="post">
        <div className="input-box">
          <div className="input-field">
            <input
              type="text"
              name="name"
              placeholder="Nom"
              autoComplete="none"
              required
            />
            <span className="focus"></span>
          </div>
          <div className="input-field">
            <input
              type="text"
              name="fname"
              placeholder="Prénom"
              autoComplete="none"
              required
            />
            <span className="focus"></span>
          </div>
        </div>

        <div className="input-box">
          <div className="input-field">
            <input
              type="text"
              name="email"
              placeholder="Adresse mail"
              autoComplete="none"
              required
            />
            <span className="focus"></span>
          </div>
          <div className="input-field">
            <input type="text" name="objet" placeholder="Objet" required />
            <span className="focus"></span>
          </div>
        </div>

        <div className="textarea-field">
          <textarea
            name="message"
            cols="30"
            rows="5"
            placeholder="Votre message..."
            required></textarea>
          <span className="focus"></span>
        </div>

        <div className="btn-box btns">
          <button type="submit" className="btn">
            Envoyer
          </button>
        </div>
      </form>
    </m.section>
  )
}

export default contact
