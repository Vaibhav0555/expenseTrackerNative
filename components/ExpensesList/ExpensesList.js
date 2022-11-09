import { FlatList,View,Text, Pressable } from "react-native";
import styles from "./ExpensesList.styles";
import {getFullDate} from '../../utils/date';
import { useNavigation } from "@react-navigation/native";

const ExpesnseList =({expensesList})=>{
    const navigation=useNavigation();
    const onPressHandler=(id)=>{
        navigation.navigate('Manage expense',{expenseId:id})
    }

    return(
        <FlatList
        data={expensesList}
        renderItem={(itemData)=>{
            return(
                <Pressable onPress={onPressHandler.bind(this,itemData.item.id)} style={({pressed})=>pressed && styles.pressable}>
                    <View style={styles.outerview}>
                        <View >
                            <Text style={[styles.common,styles.description]}>
                                {itemData.item.description}
                            </Text>
                            <Text style={styles.common}>
                                {getFullDate(itemData.item.date)}
                            </Text>
                        </View>
                        <View style={styles.amountContainer}>
                            <Text style={styles.amount}>
                                {itemData.item.amount.toFixed(2)}
                            </Text>
                        </View>
                    </View>
                </Pressable>
                
            )
        }}
        keyExtractor={(item,index)=> item.id}/>
    )
}
export default ExpesnseList;
