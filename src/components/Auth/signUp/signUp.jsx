import React from 'react';
import "../auth.css"
import google from "../../../assets/icons/google.svg"
import {Link} from "react-router-dom";

class SignIn extends React.Component {
    render() {
        return (
            <div className="modal">
                <div className="up">
                    <h1>Регистрация</h1>
                    <p>Через Google Аккаунт</p>
                    <a href="/public"><img src={google} alt=""/></a>
                </div>

                <p>Или</p>

                <div className="inp">
                    <input type="text" placeholder="Адрес эл. почты"/>
                    <input type="password" placeholder="Логин"/>
                    <input type="text" placeholder="Пароль"/>
                    <input type="text" placeholder="Подтвердите пароль"/>
                </div>

                <div className="down">
                <p><button>Зарегистрироваться</button></p>
                    <p>Уже есть аккаунт? <Link to="../signIn">Войдите</Link></p>
                </div>
            </div>
        )
    }
}

export default SignIn;
