import CustumInput from '../custom-input/custum-input';
import { CustomCelect } from '../custom-select/custom-select';
import { DatePicker } from '../date-picker/date-picker';
import styles from './form.module.css';

import { typeOfRoom } from '../../data/typeOfRoom';
import useForm from '../hooks/useForm';
import { useEffect } from 'react';
import { useDispatch } from '../hooks/hooks';
import { handleChangeForm } from '../services/form/formSlice';
import { FORM } from '../types/constants';

export const Form = () => {
  const dispatch = useDispatch();
  const { formData, handleChange } = useForm({});

  useEffect(() => {
    dispatch(handleChangeForm(formData));
  }, [formData, dispatch]);

  return (
    <form className={styles.form}>
      <CustumInput
        title="Телефон"
        placeholder="+7 (000) 000 00 00"
        type="text"
        handleChange={handleChange}
        name={FORM.phone}
      />
      <CustumInput
        title="Кол-во гостей"
        type="number"
        handleChange={handleChange}
        name={FORM.numberGuests}
      />
      <DatePicker handleChange={handleChange} />
      <CustomCelect
        options={typeOfRoom}
        title="Категория номера"
        handleChange={handleChange}
        name={FORM.typeOfRoom}
      />
      <CustomCelect
        options={['Дарья Г.', 'Анастасия Б.', 'Иван М.', 'Ольга М.', 'Лада З.']}
        title="Забронировал(а)"
        handleChange={handleChange}
        name={FORM.nameBooked}
      />
      <CustumInput
        title="Стоимость номера"
        type="number"
        handleChange={handleChange}
        name={FORM.price}
      />
      <CustomCelect
        options={['Бонус', 'Касса', 'БН', 'Счет']}
        title="Тип оплаты"
        handleChange={handleChange}
        name={FORM.typePayments}
      />
      <CustumInput
        title="Завтрак"
        placeholder="Если завтрака нет, оставить поле пустым"
        type="text"
        handleChange={handleChange}
        name={FORM.breakfast}
      />
      <CustumInput
        title="ИНБ"
        placeholder="Если ИНБ нет, оставить поле пустым"
        type="text"
        handleChange={handleChange}
        name={FORM.INB}
      />
    </form>
  );
};
