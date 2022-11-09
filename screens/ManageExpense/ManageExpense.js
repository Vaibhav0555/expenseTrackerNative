import { useLayoutEffect } from 'react';
import {View,Text, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import IconButton from '../../components/UI/IconButtons';
import styles from './ManageExpense.styles';
import {CustomButton} from '../../components'
import { useDispatch } from 'react-redux';
import {ExpenseAction} from '../../Store';

const ManageExpense=({route,navigation})=>{
     const editedexpenseId =route.params?.expenseId;
     const dispatch =useDispatch();

    useLayoutEffect(()=>{
        navigation.setOptions({
            title:editedexpenseId?"Edit Expense" :"Add Expense"
        })
    },[navigation,editedexpenseId])

    const addExpenseHandler=()=>{
        const newExpense={
            id:Math.random().toString(),
            description:"neww expense",
            amount:45.67,
            date :new Date('2022-12-10')
        }

        dispatch(ExpenseAction.add(newExpense))
        navigation.goBack();
    }

    const deleteHandler=(id)=>{
        dispatch(ExpenseAction.delete(id));
        navigation.goBack();
    }

    const cancelHandler=()=>{
        navigation.goBack();
    }

    const updateHandler=(id)=>{
        const updatedExpense={
            description:"updated Expense",
            amount:100,
            date: new Date('2022-11-09')
        }
        dispatch(ExpenseAction.update({id,updatedExpense}))
        navigation.goBack();
    }
    
    if (editedexpenseId)
    {
        return(
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <CustomButton 
                    title='cancel' 
                    mode="flat"
                    onPress={cancelHandler}
                    styless={styles.buttonExtra} />
                    <CustomButton 
                    title="Update"
                    mode="flat"
                    onPress={updateHandler.bind(this,editedexpenseId)}
                    styless={styles.buttonExtra} />
                </View>
                <View style={styles.deleteContainer}>
                    <IconButton
                    name="delete"
                    size={24}
                    color="red"
                    onPress={deleteHandler.bind(this,editedexpenseId)}/>
                </View> 
            </View>
        )
    }
    else{
        return(
            <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <CustomButton 
                title='cancel' 
                mode="flat"
                onPress={cancelHandler}
                styless={styles.buttonExtra} />
                <CustomButton 
                title="Add" 
                mode="flat"
                onPress={addExpenseHandler}
                styless={styles.buttonExtra} />
            </View> 
        </View>
            )
    }    
}
export default ManageExpense;