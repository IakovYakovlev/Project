import React from "react";
import { starWars, uniqueNamesGenerator } from "unique-names-generator";

// Состаяния в функциональных компонентах появились только с версии 16.
export function StarWarsNameFunction() {
  const randomName = () => uniqueNamesGenerator({dictionaries: [starWars], length: 1 });

  // Это хук. Хуки можно использовать только в функциональных компонентах.
  // name - состояние, setName - функция
  const [name, setName] = React.useState(randomName);
  const [count, setCount] = React.useState(0);
  const handleClick = () => { 
    setName(randomName);
    setCount((prevCount) => prevCount + 1);
  };
  console.log('>>', count);

  return(
    <section>
      <span>{name}</span>
      <div />
      <button onClick={handleClick}>Мне нужно имя!</button>
    </section>
  )
}