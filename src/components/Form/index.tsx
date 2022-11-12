import React from 'react';
import styles from './style.module.scss';

const Form = () => {
  return (
    <form className={styles.form}>
      <input type="text" placeholder="Ваш номер..." />
      <button type="submit">ЗАКАЗАТЬ</button>
    </form>
  );
};

export default Form;
