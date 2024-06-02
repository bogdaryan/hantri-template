import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import styles from './copy-field.module.css';
import { useSelector } from '../hooks/hooks';
// import { typeOfRoom as dataRoom } from '../../data/typeOfRoom';

type Props = {
  [key: string]: string;
};

function CopyField(props: Props) {
  const [textareaContent, setTextareaContent] = useState('');
  const {
    phone = '',
    INB = '',
    breakfast = '',
    nameBooked = '',
    numberGuests = '',
    price = '',
    typeOfRoom = '',
    typePayments = '',
    dateFrom = '',
    dateTo = '',
  } = useSelector((store) => store.form.form);

  useEffect(() => {
    setTextareaContent(
      `
Телефон: ${phone}
Кол-во гостей: ${numberGuests}
Дата: ${dateFrom} - ${dateTo}
Категория номера: ${typeOfRoom}
Забронировал(а): ${nameBooked}
Заселил(а): _________
Стоимость номера: ${price}
Тип оплаты: ${typePayments} \n`
    );

    if (INB) {
      setTextareaContent((prevContent) => `${prevContent}ИНБ: ${INB} \n`);
    }

    if (breakfast) {
      setTextareaContent(
        (prevContent) => `${prevContent}Завтрак: ${breakfast}`
      );
    }
  }, [
    dateFrom,
    dateTo,
    nameBooked,
    numberGuests,
    phone,
    price,
    typeOfRoom,
    typePayments,
    INB,
    breakfast,
  ]);

  return (
    <section>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control
          className={styles.textarea}
          as="textarea"
          rows={15}
          defaultValue={textareaContent}
        />
      </Form.Group>
    </section>
  );
}

export default CopyField;
