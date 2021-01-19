import axios from "axios";
const TIMEOUT = 5000;

const createApi = (dispatch) => {
    const api = axios.create({
        baseURL: `http://u0362146.plsk.regruhosting.ru`,
        timeout: TIMEOUT,
        withCredentials: false,
    });

    const onSuccess = (response) => {
        console.log();

        return response;
    };

    const onFail = (err) => {
        alert("Произошла ошибка http");
        return err;
    };

    api.interceptors.response.use(onSuccess, onFail);

    return api;
};

export default createApi;