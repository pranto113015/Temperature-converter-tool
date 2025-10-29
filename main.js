
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");
const typeSelect = document.getElementById("type");



convertBtn.addEventListener("click", function () {
  const degrees = parseFloat(document.getElementById("degrees").value);
//   console.log(degrees);
  const type = typeSelect.value;
//   console.log(type);
  let resultText = "";

  if (isNaN(degrees)) {
    resultText = "Enter a valid number!";
  } else {
    if (type === "fahrenheit") {
      // Fahrenheit to Celsius
      const celsius = ((degrees - 32) * 5) / 9;
    //   console.log(celsius);
      resultText = `${celsius.toFixed(4)} °C`;
    //   console.log(resultText);
    } else if (type === "celsius") {
      // Celsius to Fahrenheit
      const fahrenheit = (degrees * 9) / 5 + 32;
      resultText = `${fahrenheit.toFixed(4)} °F`;
    } else if (type === "kelvin") {
      // Kelvin to Celsius
      const celsius = degrees - 273.15;
      resultText = `${celsius.toFixed(4)} °C`;
    }
  }

  result.innerText = resultText;
});
