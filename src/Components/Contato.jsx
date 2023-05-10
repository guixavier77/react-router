import React from 'react';
import styles from './Contato.module.css';
import foto from '../img/contato.jpg';
import Head from './Head';
const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title='Ranek | Contato'></Head>
      <img src={foto} alt='' />
      <div>
        <h1>Entre em contato.</h1>
        <ul className={styles.dados}>
          <li>xguilherme1@gmail.com</li>
          <li>33 998364168</li>
          <li>Rua ali perto, 86</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
