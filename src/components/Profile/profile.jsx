import React from 'react';
/* import {Link} from 'react-router-dom'; */
import "./profile.css"

import profile from "../../assets/icons/profileAct.svg"
import dashboard from "../../assets/icons/dashboard.svg"
import tasccard from "../../assets/icons/task-card.svg"

import bg from "../../assets/image/bg.jpg"
import userpic from "../../assets/image/userpic.png"


import Sidebar  from "./Sidebar/sidebar";
import Header  from "../Header/header";

class Profile extends React.Component {
    render() {
        return (
            <>
                <div className="Profile">
                    <Header/>
                    <Sidebar profile={profile} dashboard={dashboard}/>
                    <div className="main">
                        <div className="greetings">
                            <h3>Добро пожаловать, User!</h3>
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
                            <h4>Добавить задачу</h4>
                        </div>

                        <div className="column-chat">
                            <h4>Чат</h4>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Profile;
