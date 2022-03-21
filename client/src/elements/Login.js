import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Form, Button } from "react-bootstrap"
import Authentification from "../service/authentification";

const Login = () => {
  
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()


  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  const fetchData = (login, password) => {
    Authentification.login(login, password).then(
      () => {
        navigate("/");
        window.location.reload();
      }
    )
  }

  return (
    <>
    <div className="background">
    <div className="login">
      <h1>Авторизация</h1>
      <Form className="loginform" onSubmit={handleSubmit}>
        <Form.Group className="m-3" controlId="formBasicLogin">
          <Form.Label>Введите логин</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Введите логин"
            value={login}
            onChange={e => setLogin(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="m-3" controlId="formBasicPassword">
          <Form.Label>Пароль</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Введите пароль"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button
          className="m-3"
          variant="primary"
          type="button"
          onClick={() => fetchData(login, password)}
        >Войти
        </Button>
      </Form>
      </div>
      </div>
    </>
  );
};

export default Login;