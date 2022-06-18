import React from 'react';
//import styles from './starWarsNameClass.css';

export class StarWarsNameClass extends React.PureComponent {
  public render() {
    return (
      // <section className={styles.container}>
      //   <span className={styles.name}></span>
      //   <div className={styles.gap} />
      //   <button className={styles.button}>Мне нужно имя</button>
      // </section>
      <section>
        <span></span>
        <div />
        <button>Мне нужно имя!</button>
      </section>
    );
  }

}

// export function StarWarsNameClass() {
//   return (
//       <header>
//           <h1>Hello React</h1>
//       </header>
//   );
// }