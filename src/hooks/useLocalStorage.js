import { useState } from 'react';

export default function useLocalStorage(key, initialValue) {
  // Function to get from localStorage or use initialValue if not found
  const getItem = () => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn('Error reading localStorage key:', key, error);
      return initialValue;
    }
  };

  const [storedValue, setStoredValue] = useState(getItem);

  // Setter function to update state and localStorage
  const setItem = (value) => {
    try {
      // Allow value to be a function like useState setter
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.warn('Error setting localStorage key:', key, error);
    }
  };

  const removeItem = () => {
    try {
      localStorage.removeItem(key);
      setStoredValue(null);
    } catch (error) {
      console.warn('Error removing localStorage key:', key, error);
    }
  };

  return [storedValue, setItem, removeItem];
}
