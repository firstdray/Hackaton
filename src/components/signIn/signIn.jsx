import React from 'react';
import "./signIn.css"
import google from "../../assets/icons/google.svg"

class SignIn extends React.Component {
    render() {
        return (
            <div className="modal">
                <div className="up">
                    <h1>Вход</h1>
                    <p>Через Google Аккаунт</p>
                    <a href="/"><img src={google} alt=""/></a>
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
                    <p><a href="/">Забыли пароль</a></p>                    
                    <p>Ещё нет аккаунта? <a href="/">Зарегистрируйтесь</a></p>
                </div>
            </div>
        )
    }
}

export default SignIn;
