import { StyleSheet } from "react-native";
import { colors } from "../../assets/colors";
const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:24,
        backgroundColor:colors.primary800
    },
    deleteContainer:{
        marginTop:16,
        paddingTop:8,
        borderTopWidth:2,
        borderTopColor:colors.primary200,
        alignItems:"center"
    },
   
})
export default styles;