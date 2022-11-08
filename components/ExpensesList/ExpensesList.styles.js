import { StyleSheet } from "react-native";
import {colors} from '../../assets/colors';
const styles=StyleSheet.create({
    outerview:{
        padding:12,
        marginVertical:8,
        backgroundColor:colors.primary500,
        flexDirection:"row",
        justifyContent:"space-between",
        borderRadius:6,
        elevation:3
    },
    common:{
        color:colors.primary50
    },
    description:{
        fontSize:16,
        marginBottom:4,
        fontWeight:"bold"
    },
    amountContainer:{
        paddingHorizontal:12,
        paddingVertical:4,
        backgroundColor:"white",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:4
    },
    amount:{
        color:colors.primary500,
        fontWeight:"bold"
    },
    pressable:{
        opacity:0.75
    }
})

export default styles;