import { InventoryList } from "./InventoryList";
const inventory = new InventoryList();

class AddField {
  // Method for running class
  run() {
    this.createForm();
  }

  createForm() {
    const body = document.querySelector("body");
    const addForm = document.createElement("form");
    const addTextBox = document.createElement("input");
    const quantity = document.createElement("input");
    const addButton = document.createElement("input");

    addForm.setAttribute("id", "add-form");

    // Set Text attributes
    addTextBox.setAttribute("type", "text");
    addTextBox.setAttribute("id", "add-item");
    addTextBox.setAttribute("placeholder", "Item")

    quantity.setAttribute("type", "number");
    quantity.setAttribute("id", "add-quantity");
    quantity.setAttribute("value", 1); // Default
    addForm.append(addTextBox, quantity);

    // Set Add Button attributes
    addButton.setAttribute("type", "submit");
    addButton.setAttribute("id", "add-button");
    addForm.append(addButton);

    body.append(addForm);
  }
  editItemForm(){
    
  }
}

export { AddField };
