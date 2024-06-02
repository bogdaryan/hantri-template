import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TForm, TUseForm, TUseSelect } from '../../types/types';

type State = {
  form: TForm;
};

const initialState: State = {
  form: {},
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    handleChangeForm(state, action: PayloadAction<TUseForm & TUseSelect>) {
      state.form = action.payload;
    },
  },
});

export default formSlice.reducer;
export const { handleChangeForm } = formSlice.actions;
