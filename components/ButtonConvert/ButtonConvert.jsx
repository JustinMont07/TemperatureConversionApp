import { TouchableOpacity, Text } from "react-native";
import { s } from "./ButtonConvert.style.js";
export function ButtonConvert({ unit }) {
  return (
    <>
      <TouchableOpacity style={s.button}>
        <Text style={s.ButtonText}>Convert to {unit}</Text>
      </TouchableOpacity>
    </>
  );
}
