const LS_KEY = {
  ACCESS_TOKEN: 'access_token',
  SESSION_EXPIRED: 'session_expired',
} as const;

export const setLS = (
  key: (typeof LS_KEY)[keyof typeof LS_KEY],
  value: any
) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLS = (key: (typeof LS_KEY)[keyof typeof LS_KEY]) => {
  return JSON.parse(localStorage.getItem(key) || 'null');
};

export const removeLS = (key: (typeof LS_KEY)[keyof typeof LS_KEY]) => {
  localStorage.removeItem(key);
};
