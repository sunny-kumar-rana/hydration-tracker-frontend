import api from "./axios";

export const getStatistics = () => api.get("/statistics");

export const getWeeklyStatistics = () => api.get("/statistics/weekly");

export const getMonthlyStatistics = () => api.get("/statistics/monthly");
