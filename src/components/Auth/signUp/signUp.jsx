import React from 'react';
import {Link} from "react-router-dom";
import "../auth.css"
import google from "../../../assets/icons/google.svg"

class SignIn extends React.Component {
    render() {
        return (
            <div className="Sign">
                <div className="modal">
                    <div className="up">
                        <h1>Регистрация</h1>
                        <p>Через Google Аккаунт</p>
                        <Link to="../profile" ><img src={google} alt=""/></Link>
                    </div>
                    <p>Или</p>
                    <div className="inp">
                        <input type="text" placeholder="Адрес эл. почты"/>
                        <input type="password" placeholder="Логин"/>
                        <input type="text" placeholder="Пароль"/>
                        <input type="text" placeholder="Подтвердите пароль"/>
                    </div>
                    <div className="down">
                        <Link to="../profile" ><p><button>Зарегистрироваться</button></p></Link>
                        <p>Уже есть аккаунт? <Link to="../signIn">Войдите</Link></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignIn;
