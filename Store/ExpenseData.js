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

    }
})

export default ExpenseSlice;