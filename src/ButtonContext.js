import { createContext, useState } from 'react';

export const ButtonContext = createContext();

export const ButtonProvider = ({ children }) => {
  const [clickedButton, setClickedButton] = useState('home');

  return (
    <ButtonContext.Provider value={{ clickedButton, setClickedButton }}>
      {children}
    </ButtonContext.Provider>
  );
};
