const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    secure: true,
    auth: {
        user: "user@gmail.com",
        pass: ""
    },
})


exports.SendCode = (email, code) => {
    transporter.sendMail({
        from: "KITP DEMO <HAHAHaaaaaa>",
        to: email,
        subject: "Регистрация в системе",
        text: `Ваш код подтверждения: ${code}`,
        html: `
            <html>
                <body>
                    <h1 style="color: green">${code}</h1>
                </body>
            </html>
        </>
        `
    });
};