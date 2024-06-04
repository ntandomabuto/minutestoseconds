let Btn = document.getElementById("convert");
let minutesInput = document.getElementById("minutes");
let result = document.getElementById("result");

Btn.addEventListener("click", function() {
  let minutes = minutesInput.value;
  let seconds = minutes * 60;
  result.textContent = `${minutes} minutes is  ${seconds} seconds.`;
});