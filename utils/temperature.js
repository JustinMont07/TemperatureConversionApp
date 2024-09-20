const UNITS = {
  celcius: "°C",
  fahrenheit: "°F",
};

function convertTemperatureTo(temperature, unitTo) {
  if (unitTo === UNITS.celcius) {
    return ((temperature - 32) * 5) / 9;
  } else if (unitTo === UNITS.fahrenheit) {
    return (temperature * 9) / 5 + 32;
  } else {
    throw new Error("Invalid unit");
  }
}

function getOppositeUnit(unit) {
  return unit === UNITS.celcius ? UNITS.fahrenheit : UNITS.celcius;
}

export { UNITS, convertTemperatureTo, getOppositeUnit };
