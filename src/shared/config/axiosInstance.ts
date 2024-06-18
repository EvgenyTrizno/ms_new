import axios from "axios";

export const instance = axios.create({
    // baseURL: import.meta.env.VITE_API_URL + "/api",
    baseURL: "http://83.147.246.220:8000/api",
    headers: {
        "Access-Control-Allow-Origin": import.meta.env.VITE_API_URL,
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
});
