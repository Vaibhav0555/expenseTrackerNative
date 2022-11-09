import {View,Text} from 'react-native';
import {ExpensesOutput} from '../../components'
import { useSelector } from "react-redux";

const AllExpense=()=>{
    const expensesList=useSelector((state)=>state.expense.ExpenseListCenter)
    return<ExpensesOutput 
    periodName="Total"
    expensesList={expensesList}
    fallback="No expenses Registered Found!"
    />
}

export default AllExpense;
