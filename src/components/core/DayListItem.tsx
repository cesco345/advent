import { View, Text, StyleSheet } from "react-native";

export default function DayListItem() {
  return (
    <View>
      <View style={styles.box}>
        <Text style={styles.text}>1 </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  box: {
    backgroundColor: "#F9EDE3",

    aspectRatio: 1,
    width: 100,
    //height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#9b4521",
    borderRadius: 20,
    padding: 10,
  },
  text: {
    color: "#9b4521",
    fontSize: 50,
  },
});
