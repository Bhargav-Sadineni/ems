import axios from "axios";

const rawUrl = (import.meta.env.VITE_BASE_URL || "http://localhost:4000").trim();
const cleanUrl = rawUrl.replace(/\/+$/, "");
const baseURL = cleanUrl.endsWith("/api") ? cleanUrl : `${cleanUrl}/api`;

const api = axios.create({
    baseURL
});

// Attach Auth token to all network requests
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;