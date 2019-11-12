import React from 'react'
import anime from 'animejs/lib/anime.es.js'

export default ({ event }) => {
  let time = 700

  let handleExpand = e => {
    if (window.innerWidth >= 1130) {
      console.log(window.innerWidth)
      expand(e, 490)
    } else if (window.innerWidth <= 1129 && window.innerWidth >= 730) {
      console.log(window.innerWidth)
      expand(e, 348)
    }
  }
  let handleReset = e => {
    if (window.innerWidth >= 1129) {
      console.log(window.innerWidth)
      reset(e, 80)
    } else if (window.innerWidth <= 1129 && window.innerWidth >= 730) {
      reset(e, 52)
    }
  }

  let expand = (e, h) => {
    let target = e.target
    anime({
      targets: e.target.closest('.scheduleEvent'),
      height: h,
      easing: 'easeInOutSine',
      color: '#fff',
      duration: time
    })
    anime({
      targets: e.target.closest('.scheduleEvent').querySelector('.picture'),
      height: h,
      opacity: 1,
      easing: 'easeInOutSine',
      duration: time
    })
    anime({
      targets: e.target.closest('.scheduleEvent').querySelector('.dimm'),
      height: h,
      opacity: 1,
      easing: 'easeInOutSine',
      duration: time
    })
    anime({
      targets: e.target.closest('.scheduleEvent'),
      duration: time,
      delay: time / 2,
      begin: () => {
        let col = target
          .closest('.scheduleEvent')
          .querySelectorAll('.expandable')
        col[0].classList.remove('none')
        col[1].classList.remove('none')
        col[2].classList.remove('none')
        col[0].classList.add('flex')
        col[1].classList.add('flex')
        col[2].classList.add('flex')
      }
    })
    // e.target
    //   .closest(".scheduleEvent")
    //   .querySelector(".info")
    //   .querySelector("p")
    //   .classList.remove("none");
    // anime({
    //   targets: e.target
    //     .closest(".scheduleEvent")
    //     .querySelector(".info")
    //     .querySelector("p"),
    //   top: 162,
    //   opacity: 1,
    //   easing: "easeInOutSine",
    //   delay: 100,
    //   duration: 500,
    // });
  }

  let reset = (e, h) => {
    let target = e.target
    anime({
      targets: e.target.closest('.scheduleEvent'),
      height: h,
      easing: 'easeInOutSine',
      color: '#000000',
      duration: time
    })
    anime({
      targets: e.target.closest('.scheduleEvent').querySelector('.picture'),
      height: h,
      opacity: 0,
      easing: 'easeInOutSine',
      duration: time
    })
    anime({
      targets: e.target.closest('.scheduleEvent').querySelector('.dimm'),
      height: h,
      opacity: 0,
      easing: 'easeInOutSine',
      duration: time
    })
    anime({
      targets: e.target.closest('.scheduleEvent'),
      duration: time,
      delay: time / 2,
      begin: () => {
        let col = target
          .closest('.scheduleEvent')
          .querySelectorAll('.expandable')
        col[0].classList.add('none')
        col[1].classList.add('none')
        col[2].classList.add('none')
        col[0].classList.remove('flex')
        col[1].classList.remove('flex')
        col[2].classList.remove('flex')
      }
    })
    // anime({
    //   targets: e.target
    //     .closest(".scheduleEvent")
    //     .querySelector(".info")
    //     .querySelector("p"),
    //   top: 0,
    //   opacity: 0,
    //   easing: "easeInOutSine",
    //   duration: 300,
    //   complete: () => {
    //     p.classList.add("none");
    //   },
    // });
  }

  return (
    <div
      className="scheduleEvent"
      onMouseEnter={e => handleExpand(e)}
      onMouseLeave={e => handleReset(e)}
      key={event.event.id}
    >
      <div className="dimm"></div>
      <img src={event.pic} className="picture" />
      <div className="field">
        <div>{event.event.time}</div>
        <div className="place">{event.event.place}</div>
      </div>
      <div className="info">
        <h2>{event.event.eType}</h2>
        <h1>{event.event.title}</h1>
        <h3 className="expandable none" style={{ fontStyle: 'italic' }}>
          {event.event.guest}
        </h3>
        <p className="expandable none">{event.event.desc}</p>
        <a
          href={event.event.regLink}
          target="_blank"
          className="button expandable none"
        >
          Регистрация
        </a>
      </div>
    </div>
  )
}
