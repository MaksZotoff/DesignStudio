import React, {useState, useEffect} from 'react';
import { Route, Routes } from "react-router-dom"

import {Nav, Navbar, Container} from 'react-bootstrap';
import './App.css';
import Authentification from './service/authentification';

import Signup from './elements/Singup';
import Login from './elements/Login';
import Home from './elements/Home';

import Designs from './elements/Designs'
import Users from './elements/Users';
import DesignEdit from './forms/DesignEdit';
import DesignAdd from './forms/DesignAdd';

const App = () => {
  const logOut = () => Authentification.logout();
  const [showAdmin, setShowAdmin] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined)

  useEffect(() => {
    const user = Authentification.getCurrentUser();
    if (user){
      setCurrentUser(user);
      setShowAdmin(user.roles.includes("admin"));
    }
    
  }, [])

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/#want">Зачем проект?</Nav.Link>
                  <Nav.Link href="/#we">Почему мы?</Nav.Link>
                  <Nav.Link href="/#price">Услуги</Nav.Link>
                  <Nav.Link href="/#stage">Этапы работы</Nav.Link>
                  <Nav.Link href="/#feedback">Контакты</Nav.Link>
                </Nav>
                <Nav>

                {showAdmin && (
                  <>
                    <Nav.Item>
                      <Nav.Link href="/designs/edit" >Редактировать заявки</Nav.Link>
                    </Nav.Item>
                  </>
                )}

                {currentUser ? (
                  <>
                    <Nav.Item>
                      <Nav.Link href="/designs">Предложенные проекты</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="/designs/add" >Отправить заявку</Nav.Link>
                    </Nav.Item>

                    <Nav.Link href="/" className="nav-link">{currentUser.login}</Nav.Link>
                    <Nav.Link href="/" onClick={() => logOut()}>Выйти</Nav.Link>
                  </>
                ):(
                  <>
                    <Nav.Link href="/login">Вход</Nav.Link>
                    <Nav.Link href="/signup">Регистрация</Nav.Link>
                  </>
                )}

                </Nav>
              </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} />

        <Route path="/designs" element={<Designs />} />
        <Route path="/designs/add" element={<DesignAdd />} />
        <Route path="/designs/edit" element={<DesignEdit />} />
      </Routes>
    </>
  );
}

export default App;
