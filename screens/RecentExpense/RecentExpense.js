import {View,Text,Button} from 'react-native';
import {ExpensesOutput} from '../../components';
import { useSelector } from "react-redux";
import {getDateMinusDay} from '../../utils/date'

const RecentExpense =({route,navigation})=>{
    const expensesList=useSelector((state)=>state.expense.ExpenseListCenter)

    filteredExpenseList= expensesList.filter((item)=>{
        const today =new Date()
        const date7DaysAgo = getDateMinusDay(today,7)

        return (item.date>= date7DaysAgo) && (item.date <= today);
    })

    return <ExpensesOutput 
    periodName="Last 7 days"
    expensesList={filteredExpenseList}
    fallback="No Expense Registered for last 7 day"
    />
}
export default RecentExpense;