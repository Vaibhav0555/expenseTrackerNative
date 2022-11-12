import { useState } from "react";
import { View,TextInput,Text,Alert } from "react-native";
import styles from "./ExpenseForm.styles";
import {CustomButton} from '../../components';
import { useSelector } from "react-redux";

const ExpenseForm=(props)=>{
    const selectedList = useSelector((state)=>state.expense.ExpenseListCenter);
    const filteredItem = selectedList.find((item)=> item.id === props?.checkpoint)
    const [amountstate,setAmountState]=useState(filteredItem?.amount.toString());
    const [descritionState,setDescriptionState]=useState(filteredItem?.description);
    const [dateState,setdateState]=useState(filteredItem?.date.toISOString());



    const amountChangeHandler=(amountEntered)=>{
        setAmountState(amountEntered)
    }

    const descriptionHandler=(descriptionEntered)=>{
        setDescriptionState(descriptionEntered)
    }   

    const datechangeHandler=(dateEntered)=>{
         setdateState(dateEntered)  
    }

    const Submit=()=>{
        if(!props.checkpoint){
            const expense={
                amount:+amountstate,
                date: new Date(dateState),
                description:descritionState
            }
            const amountIsValid= !isNaN(expense.amount) && expense.amount > 0;
            const dateIsValid = expense.date.toString() !== "Invalid Date";
            const decriptionIsValid = (expense.description !== undefined)?true:false;
            if (!amountIsValid || !dateIsValid || !decriptionIsValid)
            {
                Alert.alert("Invalid input","Please check your input");
                return;
            }
            props.handler(expense)
        }
        else{
            const expense={
                amount:+amountstate,
                date: new Date(dateState),
                description:descritionState.trim()
            }
            const amountIsValid= !isNaN(expense.amount) && expense.amount > 0;
            const dateIsValid = expense.date.toString() !== "Invalid Date";
            const decriptionIsValid = (expense.description.trim().length >0)?true:false;
            if (!amountIsValid || !dateIsValid || !decriptionIsValid)
            {
                Alert.alert("Invalid input","Please check your input");
                return;
            }
            props.handler(props.checkpoint,expense)
        }
    }

    return(
        <View>
            <View style={styles.innerView}>
            <View style={styles.imputContainer}>
                <Text style={styles.label}>Amount</Text>
                <TextInput 
                keyboardType="decimal-pad"
                onChangeText={amountChangeHandler}
                autoFocus={true}
                style={styles.input}
                value={amountstate}/>
            </View>
            <View style={styles.imputContainer}>
                <Text style={styles.label}>Date</Text>
                <TextInput placeholder="YYYY-MM-DD"
                onChangeText={datechangeHandler}
                maxLength={10} 
                style={styles.input}
                value={dateState}/>
            </View>
            </View>
            <View style={styles.imputContainer}>
                <Text style={styles.label}>Decription</Text>
                <TextInput 
                numberOfLines={2}
                autoCapitalize="words"
                style={styles.input}
                onChangeText={descriptionHandler}
                value={descritionState}/>
            </View>
            <View style={styles.buttonContainer}>
                <CustomButton 
                title='cancel' 
                onPress={props.cancel}
                styless={styles.buttonExtra} />
                <CustomButton 
                title={props.checkpoint ? "Update":"Add"} 
                onPress={Submit}
                styless={styles.buttonExtra} />
            </View>
        </View>
    )
}
export default ExpenseForm;