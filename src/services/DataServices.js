import http from "../http-common";

class DataServices {
    getAll() {
        return http.get("/")
    }
}