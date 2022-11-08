import { View } from "react-native";
import ExpenseList from '../ExpensesList';
import ExpensesSummary from '../ExpensesSummary'
import style from "./ExpensesOutput.styles";

const ExpensesOutput=({periodName})=>{

  return(
    <View style={style.container}>
      <ExpensesSummary 
      period={periodName}/>
      <ExpenseList />
    </View>
   
  )  
}
export default ExpensesOutput;