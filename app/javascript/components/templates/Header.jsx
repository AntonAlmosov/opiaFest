import React, { useState, useEffect } from 'react'
import headerAnimation from '../animations/header'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default ({ isExpanded }) => {
  let [trigger, setTrigger] = useState(false)

  useEffect(() => {
    headerAnimation(isExpanded, trigger, setTrigger)
  })

  return (
    <div className="header">
      <div className="headerTop headerLine">
        <div className="headerInitial topInitial">ost</div>
        <div className="headerLinks topLinks">
          <AnchorLink offset={100} href="#schedule">
            программа
          </AnchorLink>
          <AnchorLink offset={100} href="#place">
            место
          </AnchorLink>
          <AnchorLink offset={100} href="#partners">
            партнёры
          </AnchorLink>
        </div>
        <div className="line"></div>
      </div>
      <div className="headerBottom headerLine">
        <div className="line"></div>
        <div className="headerInitial bottomInitial">west</div>
        <div className="headerLinks bottomLinks">
          <a href="https://vk.com/berlin_garten_fest" target="_blank">
            вк
          </a>
          <a href="https://www.instagram.com/opia_doc_hse/" target="_blank">
            инста
          </a>
          <a
            href="https://www.facebook.com/events/632293410849559/"
            target="_blank"
          >
            фб
          </a>
          <a href="https://teleg.run/opia_doc_hse" target="_blank">
            телега
          </a>
        </div>
      </div>
    </div>
  )
}
