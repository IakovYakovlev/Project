import React from "react";
import { starWars, uniqueNamesGenerator } from "unique-names-generator";

// Состаяния в функциональных компонентах появились только с версии 16.
export function StarWarsNameFunction() {
  const randomName = () => uniqueNamesGenerator({dictionaries: [starWars], length: 1 });

  // Это хук. Хуки можно использовать только в функциональных компонентах.
  const [name, setName] = React.useState(randomName);
  
  return(
    <section>
      <span>{name}</span>
      <div />
      <button>Мне нужно имя!</button>
    </section>
  )
}