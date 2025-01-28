import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_SITE_URL,
  timeout: 5000,
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

export default apiClient;
