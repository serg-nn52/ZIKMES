import React, { useState } from 'react';
import Form from '../../components/Form';
import styles from './style.module.scss';

const MainPage = () => {
  const [phone, setPhone] = useState('');
  const [validationError, setValidationError] = useState(false);
  const [requestStatus, setRequestStatus] = useState<number | null>(null);
  return (
    <div className={styles.wrapper}>
      <Form
        phone={phone}
        setPhone={setPhone}
        setValidationError={setValidationError}
        setRequestStatus={setRequestStatus}
      />
      <h2 className={styles.notice}>
        {validationError && 'Введите значение!'}
        {requestStatus === 200 && 'Заявка отправлена!'}
        {requestStatus && requestStatus !== 200 && 'Ошибка!'}
      </h2>
    </div>
  );
};

export default MainPage;
