// input value from the input slider element
const input = document.querySelector("#max-invite");
// output value distination
const value = document.querySelector("#value");

// update the value to the default value
value.textContent = input.value;

// Update the output value whenever the input value changes
input.addEventListener("input", (event) => {
  value.textContent = event.target.value;
});