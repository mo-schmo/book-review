import axios from "axios";

class Auth {
    constructor(){
        this.authenticated = false;
    }

    async login(creds){
        console.log(creds)
        let url ='http://localhost:8083/api/login';
        const res = await axios.get(url, {
            params: {
                "username": creds.username,
                "password": creds.password
            }
        }).catch(() => Promise.reject());
        if(res.status == 200){
            this.authenticated = true
        }

        return Promise.resolve(this.authenticated);
    }

    logout(cb){
        this.authenticated = false;
        cb();
    }

    isAuthenticated(){
        return this.authenticated;
    }
}

export default new Auth();