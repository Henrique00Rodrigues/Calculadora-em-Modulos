export default function calculate() {
  const ResultInput = document.getElementById("result");
  ResultInput.value = "ERROR";
  ResultInput.classList.add("error");

  const result = eval(input.value);

  ResultInput.value = result;
  ResultInput.classList.remove("error");
}
