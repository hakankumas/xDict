import axios from "axios";

function JwtController() {
    axios.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response && error.response.status === 401) {
                const errorMessage = error.response.data.message;
                if (errorMessage === "jwt expired") {
                    window.location.href = "/login";
                }
            }
            return Promise.reject(error);
        }
    );
}

export default JwtController;
