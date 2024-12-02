import { useState, useEffect } from 'react';

/*
-----------------------------------------------------------------
To use this hook in a React component, you can call it like this:
-----------------------------------------------------------------
import { useLocalStorage } from './useLocalStorage';

function MyComponent() {
  const [count, setCount] = useLocalStorage<number>('count', 0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
*/

export function useLocalStorage<T>(
  storageKey: string,
  fallbackState: T,
): [T, (value: T) => void] {
  const [value, setValue] = useState<T>(() => {
    try {
      const storedValue = localStorage.getItem(storageKey);

      return storedValue ? JSON.parse(storedValue) : fallbackState;
    } catch (error) {
      console.error(
        `Error retrieving value for ${storageKey} from localStorage`,
        error,
      );
      return fallbackState;
    }
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [value, storageKey]);

  return [value, setValue];
}
