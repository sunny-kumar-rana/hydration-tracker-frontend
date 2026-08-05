import api from "./axios";

export const getProfile = () => api.get("/profile");

export const updateProfile = (data) => api.put("/profile", data);

export const changePassword = (data) =>
  api.put("/profile/change-password", data);

export const testEmail = () => api.post("/profile/test-email");

export const testTelegram = () => api.post("/profile/test-telegram");
