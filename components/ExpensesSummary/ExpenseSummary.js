import {View,Text} from 'react-native';
import style from './ExpensesSummary.styles';
import { useSelector } from 'react-redux';
const ExpensesSummary=({period})=>{
    const expensesList=useSelector((state)=>state.expense.ExpenseListCenter)
    const expenseSum = expensesList.reduce((sum,expense)=>{
        return(sum+expense.amount)
    },0);
    return(
        <View style={style.container}>
            <Text style={style.period}>{period}</Text>
            <Text style={style.sum}>${expenseSum.toFixed(2)}</Text>
        </View>
    )
}
export default ExpensesSummary;