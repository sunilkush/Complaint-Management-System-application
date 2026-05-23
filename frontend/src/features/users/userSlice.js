import { createSlice } from '@reduxjs/toolkit';
const slice = createSlice({ name: 'x', initialState: { items: [], loading: false, user: null, token: null }, reducers: { setData: (s, a) => ({ ...s, ...a.payload }) } });
export const { setData } = slice.actions;
export default slice.reducer;
