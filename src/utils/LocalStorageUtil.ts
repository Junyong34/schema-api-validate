export const setLocalStorage = (key: string, data: any, force?: boolean) => {
  if (force || !window.localStorage.getItem(key)) {
    window.localStorage.setItem(key, JSON.stringify(data));
  }
};

export const getLocalStorage = (key: string) => {
  return window.localStorage.getItem(key);
};

export const removeLocalStorage = (key: string) => {
  return window.localStorage.removeItem(key);
};

export const clearLocalStorage = () => {
  return window.localStorage.clear();
};
