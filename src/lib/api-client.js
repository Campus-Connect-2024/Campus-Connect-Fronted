import axios from "axios";
import { HOST, REFRESH_TOKEN_ROUTE } from "../utils/constants";


// console.log("HOST: ", HOST);
export const apiClient = axios.create({
    baseURL: HOST,
    headers: {
        "Content-Type": "application/json",
    }
});

// Request interceptor to add the access token
apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
  
  // Response interceptor for handling token refresh
apiClient.interceptors.response.use(
    (response) => response, // If the response is successful, return it
    async (error) => {
      const originalRequest = error.config;
  
      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
  
        try {
          // Refresh the token
          const refreshToken = localStorage.getItem('refreshToken');
          const response = await axios.post(REFRESH_TOKEN_ROUTE, {
            refreshToken,
          });

          console.log("response_refresh_token", response);
  
          // Update tokens
          localStorage.setItem('accessToken', response.data.accessToken);
  
          // Retry the original request with the new token
          originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`;
          return api(originalRequest);
        } catch (err) {
          // If refresh fails, redirect to login or handle appropriately
          console.error('Token refresh failed:', err);
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          window.location.href = '/login'; // Redirect to login page
        }
      }
  
      return Promise.reject(error);
    }
  );