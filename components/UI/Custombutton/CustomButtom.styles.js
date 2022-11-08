import { StyleSheet } from "react-native";
import { colors } from "../../../assets/colors";
const styles=StyleSheet.create({
    button:{
        borderRadius:4,
        padding:8,
        backgroundColor:colors.primary500,
    },
    flat:{
        backgroundColor:"transparent"
    },
    buttonText:{
        color:"white",
        textAlign:"center"
    },
    flatText:{
        color:colors.primary200,
    },
    pressed:{
        opacity:0.75,
        backgroundColor:colors.primary100,
        borderRadius:4
    }
})
export default styles;