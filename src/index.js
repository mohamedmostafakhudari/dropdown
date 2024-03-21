import "./style.css";

const dropdownButton = document.querySelector(".dropdown__button");

dropdownButton.addEventListener("click", () => {
  const dropdown = dropdownButton.parentElement;

  if (dropdown.getAttribute("data-state") === "idle") {
    dropdown.setAttribute("data-state", "active");
  } else if (dropdown.getAttribute("data-state") === "active") {
    dropdown.setAttribute("data-state", "idle");
  }
});
