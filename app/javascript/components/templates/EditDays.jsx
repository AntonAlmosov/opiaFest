import React, { useState, useEffect } from "react";
import axios from "axios";
import Textarea from "../atoms/SmartTextarea";

export default () => {
  const [data, setData] = useState([]);
  const [desc, setDesc] = useState();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
    fetchDesc();
  }, []);

  let fetchData = () => {
    fetch("/fest/getData")
      .then(res => res.json())
      .then(res => {
        setData(res.response);
        return res.response;
      });
  };

  let getUsers = () => {
    fetch("/fest/getMembers")
      .then(res => res.json())
      .then(res => {
        setUsers(res.users);
        return res.users;
      });
  };

  let handleUsersForm = (value, type, id) => {
    axios
      .post("/fest/handleMember", { value: value, type: type, id: id })
      .then(() => {
        fetchDesc();
        setData(desc);
      });
  };

  let fetchDesc = () => {
    fetch("/fest/getDescription")
      .then(res => res.json())
      .then(res => {
        setDesc(res.desc);
        return res.desc;
      });
  };

  let handleDesc = desc => {
    axios.post("/fest/handleDescription", { value: desc }).then(() => {
      fetchDesc();
      setData(desc);
    });
  };

  let createDay = () => {
    axios.get("/fest/createDay").then(() => {
      fetchData();
      setData(data);
    });
  };

  let deleteDay = id => {
    axios.post("/fest/deleteDay", { id: id }).then(() => {
      fetchData();
      setData(data);
    });
  };

  let createEvent = day_id => {
    axios.post("/fest/createEvent", { day_id: day_id }).then(() => {
      fetchData();
      setData(data);
    });
  };

  let deleteEvent = id => {
    axios.post("/fest/deleteEvent", { id: id }).then(() => {
      fetchData();
      setData(data);
    });
  };

  let handleUpload = (e, id) => {
    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    formData.append("id", id);
    axios
      .post("/fest/handleUpload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        fetchData();
        setData(data);
      });
  };

  let handleForm = (value, type, id) => {
    axios
      .post("/fest/handleForm", {
        value: value,
        type: type,
        id: id,
      })
      .then(() => {
        fetchData();
        setData(data);
      });
  };

  return (
    <div>
      <h1
        style={{
          width: "100%",
          textAlign: "center",
          fontFamily: "Montserrat",
          fontSize: "36px",
          fontWeight: 600,
        }}
      >
        Описание
      </h1>
      <Textarea
        onBlur={e => handleDesc(e.target.value)}
        hintText="Описание ивента"
        defaultValue={desc}
        style={{
          fontFamily: "Montserrat",
          fontSize: "16px",
          lineHeight: 1.427,
          color: "black",
          margin: "40px auto 200px",
          width: "700px",
        }}
      />
      <h1
        style={{
          width: "100%",
          textAlign: "center",
          fontFamily: "Montserrat",
          fontSize: "36px",
          fontWeight: 600,
        }}
      >
        Программа
      </h1>
      {data.map(day => (
        <div className="editDays">
          <div className="dayHeader">
            <input
              onBlur={e => handleForm(e.target.value, "dayTitle", day.id)}
              defaultValue={day.title}
              className="dayTitle"
              placeholder="День"
            />
            <div className="delete" onClick={() => deleteDay(day.id)}>
              X
            </div>
          </div>
          <div className="eventsWrapper">
            {day.events.map(event => {
              return (
                <div className="event">
                  <div className="captions">
                    <Textarea
                      onBlur={e =>
                        handleForm(e.target.value, "time", event.event.id)
                      }
                      className="time"
                      hintText="HH:MM -HH:MM"
                      defaultValue={event.event.time}
                      style={{
                        fontFamily: "Montserrat",
                        fontStyle: "italic",
                        fontWeight: 600,
                        fontSize: "16px",
                        fontHeight: "142.7%",
                        color: "white",
                      }}
                    />
                    <Textarea
                      onBlur={e =>
                        handleForm(e.target.value, "place", event.event.id)
                      }
                      hintText="Зал"
                      defaultValue={event.event.place}
                      style={{
                        fontFamily: "Montserrat",
                        fontStyle: "italic",
                        fontWeight: 600,
                        fontSize: "16px",
                        fontHeight: "142.7%",
                        color: "white",
                        "::placeholder": {
                          color: "white",
                          opacity: "0.5",
                        },
                      }}
                    />
                  </div>
                  <div className="info">
                    <input
                      onBlur={e =>
                        handleForm(e.target.value, "eType", event.event.id)
                      }
                      defaultValue={event.event.eType}
                      className="eType"
                      placeholder="Тип мероприятия"
                    />
                    <input
                      onBlur={e =>
                        handleForm(e.target.value, "title", event.event.id)
                      }
                      defaultValue={event.event.title}
                      className="title"
                      placeholder="Название"
                    />
                    <input
                      onBlur={e =>
                        handleForm(e.target.value, "guest", event.event.id)
                      }
                      defaultValue={event.event.guest}
                      className="guest"
                      placeholder="Гость"
                    />
                    <Textarea
                      onBlur={e =>
                        handleForm(e.target.value, "desc", event.event.id)
                      }
                      hintText="Описание ивента"
                      defaultValue={event.event.desc}
                      style={{
                        fontFamily: "Montserrat",
                        fontSize: "26px",
                        lineHeight: 1.427,
                        color: "white",
                        marginTop: "30px",
                        width: "98%",
                      }}
                    />
                    <input
                      onBlur={e =>
                        handleForm(e.target.value, "regLink", event.event.id)
                      }
                      defaultValue={event.event.link}
                      className="regLink link"
                      placeholder="Ссылка на регистрацию"
                    />
                    <input
                      className="inputfile"
                      type="file"
                      id={event.event.id}
                      onChange={e => handleUpload(e, event.event.id)}
                    />
                    <label htmlFor={event.event.id}>Загрузить обложку</label>
                  </div>
                  <img src={event.pic} />
                  <div className="dimm"></div>
                  <div
                    className="deleteEvent"
                    onClick={() => deleteEvent(event.event.id)}
                  >
                    X
                  </div>
                </div>
              );
            })}
            <div className="createEvent" onClick={() => createEvent(day.id)}>
              Добавить ивент
            </div>
          </div>
        </div>
      ))}
      <div className="createDay" onClick={createDay}>
        Добавить день
      </div>
      <h1
        style={{
          width: "100%",
          textAlign: "center",
          fontFamily: "Montserrat",
          fontSize: "36px",
          fontWeight: 600,
        }}
      >
        Описание
      </h1>
      <Textarea
        onBlur={e => handleDesc(e.target.value)}
        hintText="Описание ивента"
        defaultValue={desc}
        style={{
          fontFamily: "Montserrat",
          fontSize: "16px",
          lineHeight: 1.427,
          color: "black",
          margin: "40px auto 200px",
          width: "700px",
        }}
      />
    </div>
  );
};
