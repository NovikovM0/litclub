import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "context/UserAuth";
import "./Auth.css";

const SignUpPage = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [password, setPassword] = useState("");
    const { signUp } = useUserAuth();
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
      try {
        await signUp(email, password);
        navigate("/Login");
      } catch (err) {
        setError(err.message);
      }
    };

    return (
        <div>
            <div className="wrapper">
    <div className="title">
      Форма регистрации
    </div>
    {error && <Alert variant="danger">{error}</Alert>}
    <Form className="form" onSubmit={handleSubmit}>
       <div className="inputfield">
          <label>Имя пользователя</label>
          <input type="text" className="input"></input>
       </div>  
        <div className="inputfield">
          <label>Почта</label>
          <input
                className='input'
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}  
            />
       </div>  
       <div className="inputfield">
          <label>Пароль</label>
          <input
                className='input'
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
       </div>  
        <div className="inputfield">
          <label>Гендер</label>
          <div className="custom_select">
            <select>
              <option value="male">Мужчина</option>
              <option value="female">Женщина</option>
              <option value="female">Аннигиляторная пушка</option>   
            </select>
          </div>
       </div> 
      <div className="inputfield terms">
          <label className="check">
            <input type="checkbox"></input>
            <span className="check"></span>
          </label>
          <p className="checkText">Хочу получать рассылку</p>
       </div> 
      <div className="inputfield">
        <button className="btn" type="Submit"> Зарегистрироваться</button>
      </div>
      </Form>
      <div>
      Уже есть аккаунт? <Link to="/login">Авторизуйтесь</Link>
      </div>
</div>	
</div>
    )
}

export {SignUpPage}