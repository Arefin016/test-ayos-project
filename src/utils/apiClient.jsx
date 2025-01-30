import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_SITE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error(
        "API Error:",
        error.response.data?.message || error.message
      );
    } else if (error.request) {
      console.error("No response received from API.");
    } else {
      console.error("Request error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default apiClient;
