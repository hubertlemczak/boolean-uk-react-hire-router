import { createContext, useContext, useState } from 'react';

const HiredPeopleContext = createContext();

export const useHiredPeople = () => useContext(HiredPeopleContext);

export const HiredPeopleProvider = ({ children }) => {
  const [hiredPeople, setHiredPeople] = useState([]);

  return (
    <HiredPeopleContext.Provider value={{ hiredPeople, setHiredPeople }}>
      {children}
    </HiredPeopleContext.Provider>
  );
};
