export type TUseForm = {
  phone?: string;
  numberGuests?: string;
  price?: string;
  breakfast?: string;
  INB?: string;
};

export type TUseSelect = {
  typeOfRoom?: string;
  nameBooked?: string;
  typePayments?: string;
};

export type TDataPicker = {
  dateFrom?: string;
  dateTo?: string;
};

export type TForm = TUseForm & TUseSelect & TDataPicker;
