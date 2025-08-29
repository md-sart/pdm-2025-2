import { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";

import { PizzaTranslator } from "@/components/PizzaTranslator";
// import { ScrollViewApp } from "@/components/ScrollViewApp";
// import { FlatListExample } from "@/components/FlatListExample";
import { SectionListExample } from "@/components/SectionListExample";

export default function Index() {
  let MyComponent;
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  if (isEnabled) {
    MyComponent = <SectionListExample />;
  } else {
    MyComponent = (
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "center",
          marginTop: 25,
        }}
      >
        <Text style={styles.title}>Olá Turma!</Text>
        <PizzaTranslator />
      </View>
    );
  }
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      {MyComponent}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "blue",
  },
});
