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
                        <Link to="../profile" ><img src={google} alt=""/></Link>
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
                        <Link to="../profile" ><p><button>Войти</button></p></Link>
                        <p><a href="/public">Забыли пароль</a></p>
                        <p>Ещё нет аккаунта? <Link to="../signup">Зарегистрируйтесь</Link></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignIn;
