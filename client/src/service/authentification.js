import axios from "axios";

class Authentification {
    login(login, password) {
        return axios.post("http://localhost:8080/login", {
                login,
                password
            })
            .then(res => {
                if (res.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(res.data));
                }

                return res.data
            })
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(login, email, password) {return axios.post("http://localhost:8080/signup", {
            login,
            email,
            password
        })
            .then(res => { return "success" });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }

}

export default new Authentification();