// GOAL 1. Create a form, with an input, that adds data to a table

// query selectors
const name = document.querySelector("#name");
const submit = document.querySelector("#submit");
const table = document.querySelector("table");

// helper function
function addName() {
  let tr = document.createElement("tr");
  let td = document.createElement("td");
  td.innerText = name.value;
  tr.append(td);
  table.append(tr);
}

// event listeners
submit.addEventListener("click", addName);

// GOAL 2. Refactor the above code using an array
// GOAL 3. Preload data from an API Fetch Request
// GOAL 4. Set up an infinite scroll
