import { Pressable, StyleSheet, Text, View } from "react-native";

function ZeroButton({children,onPress,style}){
    return(
<View style={[styles.outerContainer,style]}>
    <Pressable onPress={onPress}>
        <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
</View>
    )
}

export default ZeroButton;

const styles=StyleSheet.create({
outerContainer:{
    borderRadius:40,
    overflow:'hidden',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'grey',
    width:165
    
},
buttonText:{
    color:'white',
    fontSize:35,

}
})