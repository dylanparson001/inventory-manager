import { InventoryList } from "./InventoryList";
const inventory = new InventoryList();

class AddField {
  // Method for running class
  run() {
    this.createForm();
    this.onSubmit();
  }

  createForm() {
    const body = document.querySelector("body");
    const addForm = document.createElement("form");
    const addTextBox = document.createElement("input");
    const addButton = document.createElement("input");

    addForm.setAttribute("id", "add-form");

    // Set Text attributes
    addTextBox.setAttribute("type", "text");
    addTextBox.setAttribute("id", "add-item");
    addTextBox.value = ' '; // Default value
    addForm.append(addTextBox);

    // Set Add Button attributes
    addButton.setAttribute("type", "submit");
    addButton.setAttribute("id", "add-button");
    addForm.append(addButton);

    body.append(addForm);
  }

  onSubmit() {
    const form = document.querySelector("#add-form");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      inventory.addToList();
    });
  }
}

export { AddField };
