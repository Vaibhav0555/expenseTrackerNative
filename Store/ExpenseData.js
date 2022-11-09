import {createSlice} from '@reduxjs/toolkit'

const initialstate={
    ExpenseListCenter:[
        {
          id:'e1',
          description:"A Pair of shoes",
          amount:59.99,
          date: new Date("2022-11-06")
        },
        {
          id:'e2',
          description:"A Pair of trouser",
          amount:59.99,
          date: new Date("2022-11-08")
        },
        {
          id:'e3',
          description:"A Pair of Shirt",
          amount:59.99,
          date: new Date("2022-11-10")
        },
        {
          id:'e4',
          description:"keyboard and mouse",
          amount:59.99,
          date: new Date("2022-11-14")
        }
      ]
}

const ExpenseSlice= createSlice({
    initialState:initialstate,
    name:"centeralizedExpenselist",
    reducers:{
      delete(state,action){
        const selectedIndex =state.ExpenseListCenter.findIndex((element)=>element.id === action.payload)
        state.ExpenseListCenter.splice(selectedIndex,1)
      },
      add(state,action){
        state.ExpenseListCenter.push(action.payload)
      },
      update(state,action){
        const {id,updatedExpense} = action.payload;
        const selectedIndex =state.ExpenseListCenter.findIndex((element)=>element.id === id)
        console.log(id);
        state.ExpenseListCenter[selectedIndex]={id,...updatedExpense};
        console.log(state.ExpenseListCenter);     
      }
    }
})

export default ExpenseSlice;