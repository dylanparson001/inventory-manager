import { AddField } from "./addField";
import { InventoryList } from "./InventoryList";
import {} from "./style.css";

const field = new AddField();
const inventory = new InventoryList();

field.run();

inventory.createList();
inventory.editQuantities();

document.querySelector("#add-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const itemInput = document.querySelector("#add-item").value.toUpperCase().trim();
  const itemQuant = document.querySelector("#add-quantity").value;
  inventory.addToList(itemInput, itemQuant);
});
