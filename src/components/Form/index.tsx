/* eslint-disable no-unused-vars */
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loader from 'components/Loader';
import { axiosInstance } from 'network';
import React, { useState } from 'react';
import styles from './style.module.scss';

type TProps = {
  phone: string;
  setPhone: (value: string) => void;
  setValidationError: (value: boolean) => void;
  setRequestStatus: (value: number | null) => void;
};

const Form = (props: TProps) => {
  const { phone, setRequestStatus, setPhone, setValidationError } = props;

  const [isLoading, setIsLoading] = useState(false);

  const sendForm = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    if (!phone.trim()) {
      setRequestStatus(null);
      setValidationError(true);
      return;
    }
    setIsLoading(true);
    try {
      const res = await axiosInstance.post('/api/phoneNumber', { phone });
      setRequestStatus(res.status);
      setIsLoading(false);
    } catch (err: any) {
      setRequestStatus(err.response.status);
      setIsLoading(false);
    }
    setValidationError(false);
    setPhone('');
  };

  return (
    <div className={styles.wrapper}>
      {isLoading && <Loader />}
      <form className={styles.form}>
        <label htmlFor="phoneNumber">
          <input
            value={phone}
            autoComplete="off"
            type="number"
            id="phoneNumber"
            placeholder="Ваш номер..."
            onChange={(e) => setPhone((e.target as HTMLInputElement).value)}
          />
        </label>
        <button type="submit" onClick={(e) => sendForm(e)}>
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
