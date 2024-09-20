import { s } from "./App.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Text, View, ImageBackground } from "react-native";
import { useState } from "react";
import hotBackground from "./assets/hot.png";
import { Input } from "./components/input/Input";
import { Temperature } from "./components/Temperature/Temperature";
import {
  UNITS,
  convertTemperatureTo,
  getOppositeUnit,
} from "./utils/temperature.js";
import { ButtonConvert } from "./components/ButtonConvert/ButtonConvert";

export default function App() {
  const [inputValue, setInputValue] = useState(0);
  const [unit, setUnit] = useState("°C");
  const oppositeUnit = getOppositeUnit(unit);

  function getConvertedTemperature() {
    if (isNaN(inputValue)) {
      return "";
    } else {
      return convertTemperatureTo(inputValue, oppositeUnit).toFixed(1);
    }
  }
  return (
    <>
      <ImageBackground style={s.backgroundImage} source={hotBackground}>
        <SafeAreaProvider>
          <SafeAreaView style={s.root}>
            <View style={s.workspace}>
              <Temperature
                currentUnit={oppositeUnit}
                Temperature={getConvertedTemperature()}
              />
              <Input currentUnit={unit} onChange={setInputValue} />
              <ButtonConvert />
            </View>
          </SafeAreaView>
        </SafeAreaProvider>
      </ImageBackground>
    </>
  );
}
