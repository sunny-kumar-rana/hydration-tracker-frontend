import api from "./axios";

export const getTodayWater = () => api.get("/water/today");

export const getHistory = () => api.get("/water/history");

export const getSummary = () => api.get("/water/summary");

export const addWater = (amount) =>
  api.post("/water", {
    amount,
  });

export const updateWater = (id, amount) =>
  api.put(`/water/${id}`, {
    amount,
  });

export const deleteWater = (id) => api.delete(`/water/${id}`);
