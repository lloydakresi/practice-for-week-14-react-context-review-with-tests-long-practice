import { useContext } from "react";
import  {useCoffeeBeanContext}  from "../context/CoffeeContext";

const SelectedCoffeeBean = () => {
  const {coffeeBean} = useCoffeeBeanContext();

  return (
    <div className="selected-coffee">
      <h2>{`Current Selection: ${coffeeBean.name}`}</h2>
    </div>
  );
}

export default SelectedCoffeeBean;
