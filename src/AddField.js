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
    
    // Set Add Button attributes
    addButton.setAttribute("type", "submit");
    addButton.setAttribute("id", "add-button");
    
    addForm.append(addTextBox, quantity, addButton);

    body.append(addForm);

    addForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const itemInput = document.querySelector("#add-item").value.toUpperCase().trim();
      const itemQuant = document.querySelector("#add-quantity").value;
      inventory.addToList(itemInput, itemQuant);
    });
    
  }
  
}

export { AddField };
