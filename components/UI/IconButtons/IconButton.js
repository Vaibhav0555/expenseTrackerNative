import { Pressable,View,Text } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import styles from "./IconButton.styles";

const IconButton =({name,color,size,onPress})=>{
    return(
        <Pressable onPress={onPress} style={({pressed})=>pressed && styles.pressed}>
            <View style={styles.buttonContainer}>
            <AntDesign 
            name={name} 
            size={size} 
            color={color} />
            </View>
        </Pressable>
    )
}
export default IconButton;