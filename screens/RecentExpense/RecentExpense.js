import {View,Text,Button} from 'react-native';
import {ExpensesOutput} from '../../components';
const RecentExpense =({route,navigation})=>{
    return <ExpensesOutput 
    periodName="Last 7 days"/>
}
export default RecentExpense;