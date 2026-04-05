const BASE = import.meta.env.VITE_API_URL;
if (!BASE) console.warn("VITE_API_URL is NOT set. Frontend will not be able to connect to the backend.");

export const API = {
  // Auth
  register: `${BASE}/auth/register`,
  login: `${BASE}/auth/login`,
  saveSoil: `${BASE}/auth/profile/soil`,

  // Dashboard
  dashboard: `${BASE}/dashboard`,

  // AI Engine
  saveYieldInput: `${BASE}/yield-input`,      // POST — save inputs
  getYieldPredict: `${BASE}/yield-input`,      // GET — run prediction
  detectDisease: `${BASE}/detect-disease`,
  recommendCrop: `${BASE}/recommend-crop`,
  predictProfit: `${BASE}/predict-profit`,
};
