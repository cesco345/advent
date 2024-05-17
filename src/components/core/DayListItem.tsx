import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";

type DayListItemProps = {
  day: number;
};

export default function DayListItem({ day: day }: DayListItemProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.box}>
        <Text style={styles.text}>{day} </Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 20,
  },
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
    fontFamily: "Inter_900Black",
  },
});
