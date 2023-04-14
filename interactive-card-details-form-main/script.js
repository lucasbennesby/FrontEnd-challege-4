const nome = document.getElementById("name");
const nameDisplay = document.getElementById("card-name");
const namePlaceholder = document.getElementById("");

const numero = document.getElementById("number");
const numeroDisplay = document.getElementById("card-number");

const date = document.getElementById("date");
const dateDisplay = document.getElementById("card-date");

function InputName() {
  nameDisplay.innerHTML = nome.value;
  if (nameDisplay.innerHTML == "") {
    nameDisplay.innerHTML = nome.placeholder;
  }
}
function InputNumber() {}
function InputDate() {
  dateDisplay.innerHTML = date.value;
}
