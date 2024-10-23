import React from 'react';
import {Link} from 'react-router-dom';
import "../auth.css"
import google from "../../../assets/icons/google.svg"

class SignIn extends React.Component {
    render() {
        return (
            <div className="Sign">
                <div className="modal">
                    <div className="up">
                        <h1>Вход</h1>
                        <p>Через Google Аккаунт</p>
                        <a href="/public"><img src={google} alt=""/></a>
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
                        <p><button>Войти</button></p>
                        <p><a href="/public">Забыли пароль</a></p>
                        <p>Ещё нет аккаунта? <Link to="../signUp">Зарегистрируйтесь</Link></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignIn;
