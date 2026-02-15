const ADMIN_AUTH_KEY = 'elite_admin_authenticated';

const ADMIN_USERNAME = import.meta.env.VITE_ADMIN_USERNAME;
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;

export const hasAdminCredentialsConfigured = () => Boolean(ADMIN_USERNAME && ADMIN_PASSWORD);

export const validateAdminCredentials = (username: string, password: string) => {
  if (!hasAdminCredentialsConfigured()) {
    return false;
  }

  return username === ADMIN_USERNAME && password === ADMIN_PASSWORD;
};

export const setAdminAuthenticated = () => {
  sessionStorage.setItem(ADMIN_AUTH_KEY, 'true');
};

export const clearAdminAuthenticated = () => {
  sessionStorage.removeItem(ADMIN_AUTH_KEY);
};

export const isAdminAuthenticated = () => sessionStorage.getItem(ADMIN_AUTH_KEY) === 'true';
