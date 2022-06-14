import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from 'context/UserAuth';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "components/Auth/firebase";
import "./Auth.css";


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const {logIn} = useUserAuth();
  let navigate = useNavigate();

  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await logIn(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

    return (
        <div>
        <div className="wrapper">
<div className="title">
  Форма авторизации
</div>
{error && <Alert variant='danger'>{error}</Alert>}
<Form className="form" onSubmit={handleSubmit}>
    <div className="inputfield">
      <label>Почта</label>
      <input
            className='input'
            type="email"
            onChange={(e) => setEmail(e.target.value)}  
        />
   </div>  
   <div className="inputfield">
      <label>Пароль</label>
      <input
            className='input'
            type="password"
            onChange={(e) => setPassword(e.target.value)}
        />
   </div>
  <div className="inputfield">
    <button className="btn" type="Submit">Авторизоваться</button>
  </div>
  </Form>
  <div className="formText">
  Еще не зарегистрировались? <Link to="/signup">Зарегистрируйтесь</Link>
  </div>
  <div>
  Или войдите с помощью <Button variant="success" onClick={handleGoogleSignIn}>GOOGLE</Button>
  </div>
</div>
</div>	
    )
}

export {LoginPage}