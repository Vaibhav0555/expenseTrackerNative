import { useLayoutEffect } from 'react';
import {View,Text, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import IconButton from '../../components/UI/IconButtons';
import styles from './ManageExpense.styles';
import {CustomButton} from '../../components'
const ManageExpense=({route,navigation})=>{
     const editedexpenseId =route.params?.expenseId;
    useLayoutEffect(()=>{
        navigation.setOptions({
            title:editedexpenseId?"Edit Expense" :"Add Expense"
        })
    },[navigation,editedexpenseId])

    const onPressHandler=()=>{
        console.log("id deleted");
    }

    const cancelHandler=()=>{
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
                    title={editedexpenseId?'Update':"Add"} 
                    mode="flat"
                    onPress={cancelHandler}
                    styless={styles.buttonExtra} />
                </View>
                <View style={styles.deleteContainer}>
                    <IconButton
                    name="delete"
                    size={24}
                    color="red"
                    onPress={onPressHandler}/>
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
                title={editedexpenseId?'Update':"Add"} 
                mode="flat"
                onPress={cancelHandler}
                styless={styles.buttonExtra} />
            </View> 
        </View>
            )
    }    
}
export default ManageExpense;