



export const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
  };
  
  // Retrieve the string from localStorage
export const getFromLocalStorage = (key) => {
    return localStorage.getItem(key);
  };