import {createSlice} from '@reduxjs/toolkit'

const initialstate={
    ExpenseListCenter:[]
}

const ExpenseSlice= createSlice({
    initialState:initialstate,
    name:"centeralizedExpenselist",
    reducers:{
      delete(state,action){
        const selectedIndex =state.ExpenseListCenter.findIndex((element)=>element.id === action.payload)
        state.ExpenseListCenter.splice(selectedIndex,1)
      },
      setExpense(state,action){    
        state.ExpenseListCenter=action.payload
      },
      update(state,action){
        const {id,expense} = action.payload;
        const selectedIndex =state.ExpenseListCenter.findIndex((element)=>element.id === id)
        state.ExpenseListCenter[selectedIndex]={id,...expense};     
      }
    }
})

export default ExpenseSlice;