const inputs = document.querySelectorAll(".controls input");
console.log(inputs);

function handleUpdate() {
  document.documentElement.style.setProperty(`--${this.name}`, this.value);
}

inputs.forEach(input => input.addEventListener("change", handleUpdate));
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));
