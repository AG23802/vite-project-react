import { useState } from 'react';

export default function useLocalStorage(key, initialValue) {
  // Function to get from localStorage or use initialValue if not found
  const getStoredValue = () => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn('Error reading localStorage key:', key, error);
      return initialValue;
    }
  };

  const [storedValue, setStoredValue] = useState(getStoredValue);

  // Setter function to update state and localStorage
  const setValue = (value) => {
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

  return [storedValue, setValue];
}
