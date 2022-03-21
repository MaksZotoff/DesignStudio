const express = require("express");
const cors = require("cors");
const loginRoutes = require("./routes/login.routes");
const signupRoutes = require("./routes/signup.routes");
const designRouter = require("./routes/design.routes");

const app = express();

var corsOptions = {
    origin: "http://localhost:3000"
};
app.use(cors(corsOptions));

app.use(express.json())

app.use("/", loginRoutes);
app.use("/", signupRoutes);
app.use("/designs", designRouter);

app.listen(8080, () => 
    console.log("Listening on port 8080")
)

