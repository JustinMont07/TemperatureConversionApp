import { View, TextInput, Text } from "react-native";
import { s } from "./Input.style";
export function Input({ onChange, currentUnit }) {
  return (
    <>
      <View style={s.root}>
        <TextInput
          style={s.input}
          maxLength={4}
          placeholder="Type your Temperature"
          defaultValue="0"
          onChangeText={(text) => {
            onChange(text);
          }}
        />
        <Text style={s.unit}>{currentUnit}</Text>
      </View>
    </>
  );
}
