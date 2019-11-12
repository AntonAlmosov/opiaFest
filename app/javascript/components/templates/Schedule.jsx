import React, { useState, useEffect } from 'react'
import ScheduleDay from '../molecules/scheduleDay'

export default () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('/fest/getData')
      .then(res => res.json())
      .then(res => {
        setData(res.response)
      })
  }, [])

  useEffect(() => {})

  return (
    <div className="scheduleWrapper section" id="schedule">
      <h1>Программа Фестиваля</h1>
      {data.map(day => {
        return <ScheduleDay {...day} key={'day' + day.id} />
      })}
    </div>
  )
}
