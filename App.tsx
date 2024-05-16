import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View, SafeAreaView } from "react-native";
import DayListItem from "./src/components/core/DayListItem";

const days = [...Array(31).keys()].map((val, index) => index + 1);

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={days}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        numColumns={3}
        renderItem={({ item }) => <DayListItem />}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    gap: 10,
    padding: 10,
  },
  column: {
    gap: 10,
  },
});
