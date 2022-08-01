const storage = typeof window !== 'undefined' ? window.localStorage : null;

const getItem = (key: string) => {
  const defaultValue = '';

  try {
    const item = storage?.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.log(error);
    return defaultValue;
  }
};

const setItem = (key: string, item: string) => {
  try {
    storage?.setItem(key, JSON.stringify(item));
  } catch (error) {
    console.log(error);
  }
};

const removeItem = (key: string) => {
  try {
    storage?.removeItem(key);
  } catch (error) {
    console.log(error);
  }
};

export { getItem, setItem, removeItem };
