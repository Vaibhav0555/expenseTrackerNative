import { configureStore } from '@reduxjs/toolkit';
import ExpenseSlice from './ExpenseData';

const store =configureStore({
    reducer:{
        expense:ExpenseSlice.reducer
    }
})

export default store;