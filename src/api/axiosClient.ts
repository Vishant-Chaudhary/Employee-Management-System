import axios from "axios";

const axiosClient = axios.create({
    baseURL: "https://ems-json-server.onrender.com",
});

export default axiosClient;
