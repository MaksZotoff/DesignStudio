import React, { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Authentification from '../service/authentification';

import { isEmail } from "validator";
import { Form, Button, Container, Modal } from "react-bootstrap";

const Signup = () => {
  
  const navigate = useNavigate()

  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");

  const [loginInvalid, setLoginInvalid] = useState(false);
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [passwordInvalid, setPasswordInvalid] = useState(false);
  const [emailCode, setEmailCode] = useState("")
  const [errorCode, setErrorCode] = useState(null)
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleClose = () => setShow(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
  };


  const onServer = (login, email, password) => {
    setLoginInvalid(false);
    setEmailInvalid(false);
    setPasswordInvalid(false);

    if (!/^[A-Za-z]*$/.test(login) || login === "") {
      setLoginInvalid(true)
    }
    if (!isEmail(email) || email === "") {
      setEmailInvalid(true)
    }
    if (!(password.length >= 6 && password.length <= 20) || password === "") {
      setPasswordInvalid(true)
    }

    if (loginInvalid === false && passwordInvalid === false) {
      Authentification.register(login, email, password).then(() => {
        setShow(true)
        setShowConfirm(true)
      })

    } else {
      return null
    }
  }

  const emailValid = async () => {
    const code = emailCode
    return await axios.post("http://localhost:8080/email/confirm", {
      email,
      code
    }).then((res) => {
      if (res.data.success === false) {
        setErrorCode(true)
      } else {
        setErrorCode(false)
        navigate("/");
        window.location.reload();
      }

    })
  }


  return (
    <>
      <div className="background">
        <div className="signin">
          <h1>??????????????????????</h1>
          <Form className="signinform" onSubmit={handleSubmit}>
            <Form.Group className="m-3" controlId="formBasicLogin">
              <Form.Label>?????????????? ??????????</Form.Label>
              <Form.Control
                required
                type="text"
                value={login}
                onChange={e => setLogin(e.target.value)}
                isInvalid={loginInvalid}
              />
            </Form.Group>

            <Form.Group className="m-3" controlId="formBasicEmail">
              <Form.Label>?????????????? email</Form.Label>
              <Form.Control
                required
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}
                isInvalid={emailInvalid}
                isValid={isEmail(email)}
              />
            </Form.Group>

            <Form.Group className="m-3" controlId="formBasicPassword">
              <Form.Label>????????????</Form.Label>
              <Form.Control
                required
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                isInvalid={passwordInvalid}
                isValid={(password.length >= 4 && password.length <= 10)}
              />
            </Form.Group>

            <Button
              className="m-3"
              variant="primary"
              type="button"
              onClick={() => onServer(login, email, password)}
            >????????????????????????????????????
            </Button>
          </Form>
        </div>

          <Modal
            show={showConfirm}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header>
              <Modal.Title>?????? ??????????????????????????</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Control
                required
                type="text"
                placeholder="?????????????? ??????"
                value={emailCode}
                onChange={e => setEmailCode(e.target.value)}
                isInvalid={errorCode}
              />
              <Form.Control.Feedback type="invalid">?????? ???? ??????????????????</Form.Control.Feedback>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>????????????</Button>
              <Button variant="success" onClick={() => emailValid()}>??????????????????????</Button>
            </Modal.Footer>
          </Modal>

        </div>

    </>
  );

};

export default Signup;