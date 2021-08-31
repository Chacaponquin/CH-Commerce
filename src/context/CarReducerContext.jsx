import React, { createContext, useReducer } from "react";
import { carReducer } from "../helpers/carActions";

const CarReducerContext = createContext();

const CarReducerProvider = ({ children }) => {
  let initialCar = { products: [], totalPrice: 0, totalProducts: 0 };

  const [shoppingCar, dispatch] = useReducer(carReducer, initialCar);

  const data = { shoppingCar, dispatch };

  return (
    <CarReducerContext.Provider value={data}>
      {children}
    </CarReducerContext.Provider>
  );
};

export { CarReducerProvider };
export default CarReducerContext;
