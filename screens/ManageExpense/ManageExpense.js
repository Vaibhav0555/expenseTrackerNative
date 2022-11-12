import { useLayoutEffect } from 'react';
import {View,Text, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import IconButton from '../../components/UI/IconButtons';
import styles from './ManageExpense.styles';
import {CustomButton,ExpenseForm} from '../../components'
import { useDispatch,useSelector } from 'react-redux';
import {ExpenseAction} from '../../Store';
import {storeExpense} from '../../utils/http';


const ManageExpense=({route,navigation})=>{
     const editedexpenseId =route.params?.expenseId;
     const dispatch =useDispatch();
     const expensesList=useSelector((state)=>state.expense.ExpenseListCenter);
     const filterItem = expensesList.filter((item)=> item.id === editedexpenseId);

    useLayoutEffect(()=>{
        navigation.setOptions({
            title:editedexpenseId?"Edit Expense" :"Add Expense"
        })
    },[navigation,editedexpenseId])

    const addExpenseHandler=(expense)=>{
        storeExpense(expense);
        navigation.goBack();
    }

    const deleteHandler=(id)=>{
        dispatch(ExpenseAction.delete(id));
        navigation.goBack();
    }

    const cancelHandler=()=>{
        navigation.goBack();
    }

    const updateHandler=(id,expense)=>{
        dispatch(ExpenseAction.update({id,expense}))
        navigation.goBack();
    }
    
    if (editedexpenseId)
    {
        return(
            <View style={styles.container}>
                <ExpenseForm cancel={cancelHandler} 
                checkpoint={editedexpenseId}
                handler={updateHandler}/>
                <View style={styles.deleteContainer}>
                    <IconButton
                    name="delete"
                    size={24}
                    color="red"
                    onPress={deleteHandler.bind(this,editedexpenseId)}
                    filterExpense={filterItem}/>
                </View> 
            </View>
        )
    }
    else{
        return(
            <View style={styles.container}>
                <ExpenseForm cancel={cancelHandler} 
                checkpoint={editedexpenseId}
                handler={addExpenseHandler}/> 
        </View>
            )
    }    
}
export default ManageExpense;