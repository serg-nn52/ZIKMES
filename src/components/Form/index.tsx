import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './style.module.scss';

const Form = () => {
  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        <label htmlFor="phoneNumber">
          <input
            autoComplete="off"
            type="number"
            id="phoneNumber"
            placeholder="Ваш номер..."
          />
        </label>
        <button type="submit">
          <p>
            ЗАКАЗАТЬ
            <FontAwesomeIcon icon={faCartShopping} />
          </p>
        </button>
      </form>
    </div>
  );
};

export default Form;
