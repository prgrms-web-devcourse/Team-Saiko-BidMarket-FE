const getItem = (key: string) => {
  const defaultValue = '';

  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.log(error);
    return defaultValue;
  }
};

const setItem = (key: string, item: string) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(item));
  } catch (error) {
    console.log(error);
  }
};

const removeItem = (key: string) => {
  try {
    window.localStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
};

export { getItem, setItem, removeItem };
