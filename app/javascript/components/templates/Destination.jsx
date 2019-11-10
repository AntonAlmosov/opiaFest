import React from 'react'

export default () => {
  let link =
    'https://www.google.com/maps/place/Vostochnaya+Ulitsa,+4+%D0%BA%D0%BE%D1%80%D0%BF%D1%83%D1%81+1,+Moskva,+115280/data=!4m2!3m1!1s0x46b54b2e18ce2b99:0x490533e1f6b1625f?sa=X&ved=2ahUKEwi49eyViODlAhVLxKYKHdthCbgQ8gEwAHoECAoQAQ'

  return (
    <div className="map section">
      <h1>Как добраться</h1>
      <div className="mapWrapper">
        <div className="info">
          <h1>Культурный центр «ЗИЛ»</h1>
          <a href={link} target="_blank">
            Москва, ул. Восточная, д. 4, корп. 1
          </a>
          <p>
            Быстрее всего дойти от метро Автозаводская.  Третий выход из метро,
            после чего по Восточной улице до вывески «Культурный центр ЗИЛ»
          </p>
        </div>
      </div>
    </div>
  )
}
