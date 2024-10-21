import React from 'react';
import "./signIn.css"

class SignIn extends React.Component {
    render() {
        return (
            <div className="modal">
                <div className="up">
                    <h1>Вход</h1>
                    <p>Через социальные сети</p>
                    <div className="socsety">
                        <a href="/">VK</a>
                        <a href="/">FC</a>
                        <a href="/">TW</a>
                    </div>
                </div>

                <p>Или</p>

                <div className="inp">
                    <input type="text" placeholder="Логин"/>
                    <input type="password" placeholder="Пароль"/>
                    <label>
                        <input type="checkbox"/>
                        <p>Запомнить меня</p>
                    </label>
                </div>

                <div className="down">
                    <button>Войти</button>
                    <a href="/">Забылир пароль</a>
                    <p>Ещё нет аккаунта?<a href="/">Зарегистрируйтесь</a></p>
                </div>
            </div>
        )
    }
}

export default SignIn;