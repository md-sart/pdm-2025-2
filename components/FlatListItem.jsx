import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#f9c2ff",
    padding: 30,
    marginVertical: 20,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export const FlatListItem = ({ item }) => (
  <View style={styles.itemContainer}>
    <Text style={styles.item}>{item.name}</Text>
  </View>
);
