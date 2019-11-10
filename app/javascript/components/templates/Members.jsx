import React, { useState, useEffect } from 'react'

export default () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers()
  }, [])

  let getUsers = () => {
    fetch('/fest/getMembers')
      .then(res => res.json())
      .then(res => {
        setUsers(res.users)
        return res.users
      })
  }

  return (
    <div className="usersWrapper section">
      <h1>Комманда</h1>
      <div className="cardsWrapper">
        {users.map(value => {
          return (
            <div className="card" key={'user' + value.id}>
              <img src={value.pic} alt="" className="avatar" />
              <div className="info">
                <h2 className="name">{value.name}</h2>
                <h3 className="teamRole">{value.teamRole}</h3>
                <p className="desc">{value.desc}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
