function optionSlider() {
  const optionSlider = document.getElementById("optionSlider");
  const optionInput = document.getElementById("optionInput");
  optionSlider.classList.add("active");
  optionInput.classList.remove("active");

  const eventsNumberInput = document.getElementById("eventsNumberInput");
  eventsNumberInput.style.display = "none";
  const eventsSlider = document.getElementById("eventsSlider");
  eventsSlider.style.display = "block";

  const eventsValue = document.getElementById("eventsValue");
  eventsValue.style.display = "block";
}

function optionInput() {
  const optionSlider = document.getElementById("optionSlider");
  const optionInput = document.getElementById("optionInput");
  optionSlider.classList.remove("active");
  optionInput.classList.add("active");

  const eventsSlider = document.getElementById("eventsSlider");
  eventsSlider.style.display = "none";
  const eventsNumberInput = document.getElementById("eventsNumberInput");
  eventsNumberInput.style.display = "block";

  const eventsValue = document.getElementById("eventsValue");
  eventsValue.style.display = "none";
}
