import axios from "axios";
function api() {
    return axios.create({
        baseURL: "http://localhost:3000",
    });
}

export default api;
