import { createContext, useState } from 'react';

// Crear el contexto
export const ThemeContext = createContext();

// Proveedor del contexto
export const useTheme = () => {
    const [theme, setTheme] = useState(false);

    const toggleTheme = () => { // custom hook
        setTheme((prev) => !prev);
        document.body.classList.toggle('dark'); // clase en index.css
    };

  return {theme, toggleTheme}
};
