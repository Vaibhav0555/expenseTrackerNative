import axios from 'axios';
export const storeExpense=(expenseDate)=>{
    axios.post("https://expense-tracker-react-na-b001d-default-rtdb.firebaseio.com/expenses.json",
    expenseDate
    );
    console.log("data sent to backend")
}

export  async function fetchExpenses(){
   const response = await axios.get("https://expense-tracker-react-na-b001d-default-rtdb.firebaseio.com/expenses.json");

   const expenses = [];
   for (const key in response.data){
        const expenseObj = {
            id:key,
            amount:response.data[key].amount,
            date: new Date(response.data[key].date),
            description:response.data[key].description
        }
        expenses.push(expenseObj)
   }
   return expenses;
}