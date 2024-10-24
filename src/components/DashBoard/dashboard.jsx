import React from 'react'
import "../Profile/profile.css"
import "./dashboard.css"

import Sidebar  from "../Profile/Sidebar/sidebar"
import Header  from "../Header/header"

import profile from "../../assets/icons/profile.svg"
import dashboard from "../../assets/icons/dashboardAct.svg"

function DashBoard() {
    return (
        <>
            <div className="Profile">
                <Header/>
                <Sidebar profile={profile} dashboard={dashboard}/>
                <div className="DashBoard">
                    <div className="Main">
                        <div className="column">
                            <div className="column-header" id="column-color-new">Новое</div>
                            <div className="column-content">
                                <h4>Дизайн</h4>
                                <p>Создайте дополнительные поля для потока платежей. Обновите систему оформления</p>
                                <button id="column-color-new">Новое</button>
                                <div className="column-content-name">Алексей, Дмитрий</div>
                                <div className="column-content-boldtext">
                                    <p>Сложность: Низкая</p>
                                </div>
                                <div><p className="column-content-deadline">Время на выполнение: 2 дня</p></div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="column-header" id="column-color-inprocess">В процессе</div>
                            <div className="column-content">
                                <h4>Дизайн</h4>
                                <p>Создайте дополнительные поля для потока платежей. Обновите систему оформления</p>
                                <button id="column-color-inprocess">В процессе</button>
                                <div className="column-content-name">Артём</div>
                                <div className="column-content-boldtext">
                                    <p>Сложность: Низкая</p>
                                </div>
                                <div><p className="column-content-deadline">Время на выполнение: 4 дня</p></div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="column-header" id="column-color-done">Выполнено</div>
                            <div className="column-content">
                                <h4>Бренд</h4>
                                <p>Создайте 2 варианта с цветовой гаммой.</p>
                                <button id="column-color-done">Выполнено</button>
                                <div className="column-content-boldtext">
                                    <p>Сложность: Средняя</p>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="column-header" id="column-color-blocked">Заблокировано</div>
                            <div className="column-content">
                                <h4>Бренд</h4>
                                <button id="column-color-blocked">Заблокировано</button>
                                <div className="column-content-name">Григорий</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default DashBoard;
