import { Pressable,Text,View } from 'react-native';
import styles from './CustomButtom.styles';
const CustomButton=({title,onPress,mode,styless})=>{
 return(
    <View style={styless}>
        <Pressable onPress={onPress}>
            <View style={[styles.button]}>
                <Text style={[styles.buttonText]}>
                        {title}
                </Text>
            </View>
        </Pressable>
    </View>
 )
}
export default CustomButton;
