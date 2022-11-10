import {StyleSheet} from 'react-native';
import {colors} from '../../assets/colors'

const styles = StyleSheet.create({
    imputContainer:{
        marginHorizontal:4,
        marginVertical:8,
    },
    label:{
        fontSize:12,
        color:colors.primary100,
        marginBottom:4
    },
    input:{
        backgroundColor:colors.primary100,
        padding:6,
        borderRadius:6,
        fontSize:18,
        color:colors.primary700
    },
    innerView:{
        flexDirection:'row',
        justifyContent:"space-between"
    },
    buttonExtra:{
        flex:1,
        marginHorizontal:4
    },
    buttonContainer:{
        flexDirection:"row",
        justifyContent:"center",
        marginHorizontal:4
    }
})

export default styles;