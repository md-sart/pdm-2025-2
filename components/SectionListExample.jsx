import { SectionList, StyleSheet, Text, View } from "react-native";

import { PEOPLE_LIST as DATA } from "@/data";
import { transformListToSectionList } from "@/utils";
import { useStore } from "@/zustand";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "beige",
    textAlign: "center",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const TRANSFORMED_DATA = transformListToSectionList(DATA);

export const SectionListExample = () => {
  const isEnabled = useStore((state) => state.isEnabled);

  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 10, fontSize: 20 }}>
        {isEnabled ? "Enabled" : "Disabled"}
      </Text>
      <SectionList
        sections={TRANSFORMED_DATA}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={(item) => `basicListEntry-${item}`}
      />
    </View>
  );
};
