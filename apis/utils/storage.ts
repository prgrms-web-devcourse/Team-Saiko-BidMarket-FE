const storage = window.localStorage;

const getItem = (key: string) => {
  const defaultValue = '';

  try {
    const item = storage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.log(error);
    return defaultValue;
  }
};

const setItem = (key: string, item: string) => {
  try {
    storage.setItem(key, JSON.stringify(item));
  } catch (error) {
    console.log(error);
  }
};

const removeItem = (key: string) => {
  storage.removeItem(key);
};

export { getItem, setItem, removeItem };
