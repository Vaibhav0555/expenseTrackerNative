import { View,Text } from "react-native";
import ExpenseList from '../ExpensesList';
import ExpensesSummary from '../ExpensesSummary'
import style from "./ExpensesOutput.styles";

const ExpensesOutput=({expensesList,periodName,fallback})=>{
  
  let Context = <Text style={style.fallback}>{fallback}</Text>
  if(expensesList.length > 0){
     Context =<ExpenseList expensesList={expensesList} />
  }
  
  return(
    <View style={style.container}>
      <ExpensesSummary 
      period={periodName}
      expensesList={expensesList}/>
      {Context}
    </View>
  )  
}
export default ExpensesOutput;