import { createContext, useState, useContext } from 'react';
import coffeeBeans from '../mockData/coffeeBeans.json';

export const CoffeeContext = createContext();

// Correcting the custom hook syntax
export const useCoffeeBeanContext = () => {
  return useContext(CoffeeContext);
};

export default function CoffeeProvider(props) {
  const [coffeeBean, setCoffeeBean] = useState(coffeeBeans[0]);

  const setCoffeeBeanId = (coffeeBeanId) => {
    const bean = coffeeBeans.find(bean => Number(bean.id) === Number(coffeeBeanId));
    setCoffeeBean(bean);
  };

  return (
    <CoffeeContext.Provider
      value={{
        coffeeBean,
        setCoffeeBeanId,
        setCoffeeBean
      }}
    >
      {props.children}
    </CoffeeContext.Provider>
  );
}
