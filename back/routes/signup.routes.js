const express = require("express");
const bcrypt = require("bcryptjs");
const uuid = require("uuid").v4
const db = require("../config/database");
const { SendCode } = require("../email");


const router = express.Router();

router.post("/signup", (req, res) => {
    const { login, email, password } = req.body;
    const roles = "user";

    if (!login || !email || !password) {
        return res.send("WRONG_REQUEST")
    }
    passwordHash = bcrypt.hashSync(password, 8)
    
    const id_user = uuid();
    let users = db.getData('/users');

    const currentUser = users.filter(el => el.email === email)[0]
    if (currentUser && currentUser.isEmail) {
        return res.send({ success: false })
    }
    let code = Math.random().toString().slice(-6)
    console.log("--------------------------CONFIRMATION------------------------", code)

    users.push({
        id_user,
        login,
        email,
        passwordHash,
        roles,
        isEmailConfirm: false,
        emailCode: code
    })
    db.push('/users', users)

    SendCode(email, code)
    res.status(200).send({ message: "success" })
})

router.post("/email/confirm", (req, res) => {
    const { email, code} = req.body
    if (!email || !code) {
        return res.send({success: false})
    }
    let users = db.getData('/users');
    const currentUser = users.filter(el => el.email === email)[0]
    if (currentUser.isEmail || currentUser.emailCode !== code) {
        return res.send({ success: false })
    }
    currentUser.isEmailConfirm = true;
    currentUser.emailCode = null;

    users = users.map(el => el.id === currentUser.id ? currentUser : el)
    db.push("/users", users)
    res.send({success: true})
})

module.exports = router