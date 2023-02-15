import { Pressable, StyleSheet, Text, View } from "react-native";

function ActionButton({ children, onPress, style }) {

  return (
    <View>
      <Pressable
        onPress={onPress}
        style={[styles.pressableButton, style]}
      >
        <Text style={[styles.buttonText]}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default ActionButton;

const styles = StyleSheet.create({
  pressableButton: {
    borderRadius: 40,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 70,
  },
  buttonText: {
    fontSize: 35,
    color:'white'
  },
  pressed: {
    backgroundColor: "white",
  },
});
