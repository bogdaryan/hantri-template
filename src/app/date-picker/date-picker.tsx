import { ChangeEvent } from 'react';
import styles from './date-picker.module.css';
import { FORM } from '../types/constants';

type Props = {
  handleChange: (
    v: ChangeEvent<HTMLDataElement & { name: string; type: string }>
  ) => void;
};
export const DatePicker = ({ handleChange }: Props) => {
  return (
    <div className={styles.dates}>
      <p className={styles.title}> Даты проживания</p>
      <label>
        <input type="date" name={FORM.dateFrom} onChange={handleChange} />
      </label>
      <label>
        <input type="date" name={FORM.dateTo} onChange={handleChange} />
      </label>
    </div>
  );
};
