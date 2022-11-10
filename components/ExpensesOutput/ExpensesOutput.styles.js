import { StyleSheet } from "react-native";
import { colors } from "../../assets/colors";
const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:24,
        backgroundColor:colors.primary700
    },
    fallback:{
        color:"white",
        textFont:16,
        marginTop:32,
        textAlign:"center"
    }
})

export default styles;