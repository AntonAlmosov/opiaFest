import React, { useState, useEffect } from 'react'
import anime from 'animejs/lib/anime.es.js'
import Header from '../templates/Header'
import Starter from '../templates/Starter'
import Schedule from '../templates/Schedule'
import Description from '../templates/Description'
import Members from '../templates/Members'
import Destination from '../templates/Destination'
import Partners from '../templates/Partners'
import Feedback from '../templates/Feedback'

export default () => {
  const [isExpanded, setExpand] = useState(false)

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset > 300 && !isExpanded) {
        setExpand(true)
      }
      if (window.pageYOffset < 300 && isExpanded) {
        setExpand(false)
      }
    }
  })

  let rotate = () => {
    anime({
      targets: '.heading',
      rotate: 180
    })
  }
  return (
    <div className="festWrapper">
      <Header isExpanded={isExpanded} />
      <Starter />
      <Description />
      <Schedule />
      <Members />
      <Destination />
      <Partners />
      <Feedback />
    </div>
  )
}
