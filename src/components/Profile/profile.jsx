import React, {useState} from 'react';
/* import {Link} from 'react-router-dom'; */
import "./profile.css"

import profile from "../../assets/icons/profileAct.svg"
import dashboard from "../../assets/icons/dashboard.svg"
import tasccard from "../../assets/icons/task-card.svg"
import zvesdact from "../../assets/icons/zvesdAct.svg"
import zvesd from "../../assets/icons/zvesd.svg"
import report from "../../assets/icons/report.svg"
import load from "../../assets/icons/load.svg"

import bg from "../../assets/image/bg.jpg"
import userpic from "../../assets/image/userpic.png"


import Sidebar  from "./Sidebar/sidebar";
import Header  from "../Header/header";

function Profile({ role, page }) {
    const [currentPage] = useState(page);

    return(
        <>
            <div className="Profile">
                <Header/>
                <Sidebar profile={profile} dashboard={dashboard}/>
                <div className="main">
                    <div className="greetings">
                        <h3>Добро пожаловать, {role}!</h3>
                        <img src={bg} alt="bg"/>
                    </div>
                    <div className="column-data">
                        <h4>Личные данные</h4>
                        <img src={userpic} alt="user"/>
                        <div className="data">
                            <p>Name: <span>Андрей П.Д.</span></p>
                            <p>Email: <span>user_dash11@gmail.com</span></p>
                            <p>Phone: <span>+79873234344</span></p>
                        </div>
                        <button>Редактировать</button>
                    </div>

                    <div className="column-team">
                        <div>
                        <h4>Команда</h4>
                        <div className="gp">
                            <div className="team">
                                <img src={userpic} alt="user"/>
                                <div className="desc">
                                    <p>Андрей</p>
                                    <span>Дизайнер</span>
                                </div>
                            </div>

                            <div className="team">
                                <img src={userpic} alt="user"/>
                                <div className="desc">
                                    <p>Григорий</p>
                                    <span>Фронтенд</span>
                                </div>
                            </div>

                            <div className="team">
                                <img src={userpic} alt="user"/>
                                <div className="desc">
                                    <p>Лиза</p>
                                    <span>Бекенд</span>
                                </div>
                            </div>

                            <div className="team">
                                <img src={userpic} alt="user"/>
                                <div className="desc">
                                    <p>Артем</p>
                                    <span>Пм</span>
                                </div>
                            </div>

                            <div className="team">
                                <img src={userpic} alt="user"/>
                                <div className="desc">
                                    <p>Даниил</p>
                                    <span>Фронтенд</span>
                                </div>
                            </div>

                            <div className="team">
                                <img src={userpic} alt="user"/>
                                <div className="desc">
                                    <p>Павел</p>
                                    <span>Бекенд</span>
                                </div>
                            </div>

                            <div className="team">
                                <img src={userpic} alt="user"/>
                                <div className="desc">
                                    <p>Дмитрий</p>
                                    <span>Дизайнер</span>
                                </div>
                            </div>
                        </div>
                        </div>

                        <Component currentPage={currentPage} />
                    </div>

                    <div className="column-tasc">
                        <h4>Задачи</h4>

                        <div className="card">
                            <h5>Дизайн</h5>
                            <p className="nobold">Создайте дополнительные поля для потока платежей. Обновите систему
                                оформления</p>
                            <button className="status-1">Новое</button>
                            <div className="team">
                                <p>Алексей, Дмитрий</p>
                                <img src={tasccard} alt="..."/>
                            </div>
                            <p>Сложность: Низкая</p>
                            <p>Создано: 23.06.24</p>
                            <span>Время на выполнение: 2 дня</span>
                            <button>Оставить комментарий</button>
                        </div>

                        <div className="card">
                            <h5>Дизайн</h5>
                            <p className="nobold">Создайте дополнительные поля для потока платежей. Обновите систему
                                оформления</p>
                            <button className="status-2">В процессе</button>
                            <div className="team">
                                <p>Артем</p>
                                <img src={tasccard} alt="..."/>
                            </div>
                            <p>Сложность: Низкая</p>
                            <p>Создано: 23.06.24</p>
                            <span>Время на выполнение: 4 дня</span>
                            <button>Оставить комментарий</button>
                        </div>

                        <button className="bot">Посмотреть</button>
                    </div>

                    <div className="column-add">
                        <div className="add">
                            <h4>Добавить задачу</h4>
                            <input type="text" placeholder="Введите"/>
                            <input type="text" placeholder="Введите текст"/>
                            <input type="text" placeholder="Введите срок"/>
                            <input type="text" placeholder="Введите участников"/>
                            <button>Добавить</button>
                        </div>

                        <div className="rating">
                            <Rating currentPage={currentPage} />
                        </div>

                        <div className="load" >
                            <Load currentPage={currentPage} />
                        </div>
                    </div>

                    <div className="column-chat">
                        <h4>Чат</h4>
                        <input type="text" placeholder="Введите"/>
                    </div>
                </div>
            </div>
        </>
    )
}

function Component({ currentPage}) {
    if (currentPage === 'profileadmin') {
        return <button>Посмотреть</button>
    }
    else {
        return null
    }
}

function Rating({ currentPage }) {
    if (currentPage === 'profileadmin') {
        return (
            <>
            <p>Эффективность команды</p>
            <div className="star">
            <img src={zvesdact} alt="1"/>
            <img src={zvesdact} alt="2"/>
            <img src={zvesdact} alt="3"/>
            <img src={zvesdact} alt="4"/>
            <img src={zvesdact} alt="5"/>
        </div>
            <p>Ваша команда хорошо справляется!</p>
            </>
    )
    }
    else {
        return (
            <>
                <p>Ваша эффективность</p>
                <div className="star">
                    <img src={zvesdact} alt="1"/>
                    <img src={zvesdact} alt="2"/>
                    <img src={zvesdact} alt="3"/>
                    <img src={zvesdact} alt="4"/>
                    <img src={zvesd} alt="5"/>
                </div>
                <p>Старайтесь и повышайте свой рейтинг!</p>
            </>
        )
    }
}

function Load({currentPage}) {
    if (currentPage === "profileadmin"){
        return (
            <>
                <p>Отчеты</p>
                <div className="report">
                    <img src={report} alt="report"/>
                    <p>Отчет по дизайну интерфейса</p>
                    <img src={load} alt="load"/>
                </div>
                <div className="report">
                    <img src={report} alt="report"/>
                    <p>Отчет по дизайну интерфейса</p>
                    <img src={load} alt="load"/>
                </div>
                <button>Скачать все</button>
            </>
        )
    } else {
        return (
            <>
                <p>Отчеты</p>
                <button>Загрузить отчет</button>
            </>
        )
    }
}

export default Profile;
