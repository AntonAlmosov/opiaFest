import React from 'react'
import axios from 'axios'
import anime from 'animejs/lib/anime.es.js'

export default () => {
  let handleForm = () => {
    let value = document.querySelector('.feedbackInput').value
    if (validateEmail(value)) {
      axios.post('/fest/sendEmail', { email: value }).then(() => {
        let target = document.querySelector('.success')
        anime({
          targets: target,
          duration: 10000,
          begin: () => {
            target.classList.remove('none')
          },
          complete: () => {
            target.classList.add('none')
          }
        })
      })
    } else {
      let target = document.querySelector('.error')
      anime({
        targets: target,
        duration: 10000,
        begin: () => {
          target.classList.remove('none')
        },
        complete: () => {
          target.classList.add('none')
        }
      })
    }
  }

  let validateEmail = email => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }
  return (
    <div className="feedback section">
      <h1>Обратная связь</h1>
      <div className="form">
        <input type="text" className="feedbackInput" placeholder="Email" />
        <div className="send" onClick={handleForm}>
          Отправить
        </div>
      </div>
      <div className="responces">
        <div className="success none">
          Приняли! Свяжемся с вами как можно скорее!
        </div>
        <div className="error none">Проверьте адресс почты</div>
      </div>
    </div>
  )
}
