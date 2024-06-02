import React, { useState, useEffect, useRef, MouseEvent } from 'react';
import { FaCopy } from 'react-icons/fa6';
import { ToastContainer, toast } from 'react-toastify';

import Form from 'react-bootstrap/Form';
import styles from './copy-field.module.css';
import { useSelector } from '../hooks/hooks';
// import { typeOfRoom as dataRoom } from '../../data/typeOfRoom';

type Props = {
  [key: string]: string;
};

function CopyField(props: Props) {
  const [textareaContent, setTextareaContent] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
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
    let content = `
Телефон: ${phone}
Кол-во гостей: ${numberGuests}
Дата: ${dateFrom} - ${dateTo}
Категория номера: ${typeOfRoom}
Забронировал(а): ${nameBooked}
Заселил(а): _________
Стоимость номера: ${price}
Тип оплаты: ${typePayments} 
Заметки: \n`;

    if (INB) {
      content += `ИНБ: ${INB} \n`;
    }

    if (breakfast) {
      content += `Завтрак: ${breakfast}`;
    }

    setTextareaContent(content);
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

  function onClick(e: MouseEvent<SVGElement, globalThis.MouseEvent>) {
    const data = textareaRef.current;
    if (data) {
      navigator.clipboard
        .writeText(data.value)
        .then(() => {
          toast.success('Текст скопирован в буфер обмена');
        })
        .catch((err) => {
          toast.error('Ошибка при копировании текста: ' + err);
        });
    }
  }

  return (
    <section>
      <Form.Group
        className={styles.container}
        controlId="exampleForm.ControlTextarea1"
      >
        <Form.Control
          className={styles.textarea}
          as="textarea"
          rows={15}
          defaultValue={textareaContent}
          ref={textareaRef}
        />
        <FaCopy className={styles.copy} size={30} onClick={onClick} />
      </Form.Group>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </section>
  );
}

export default CopyField;
