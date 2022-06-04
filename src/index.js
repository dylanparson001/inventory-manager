import { AddField } from "./addField";
import { InventoryList } from "./InventoryList";
const field = new AddField();
const inventory = new InventoryList();

field.run();

inventory.createList();

document.querySelector("#add-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const itemInput = document.querySelector("#add-item").value;
  const itemQuant = document.querySelector("#add-quantity").value;
  inventory.addToList(itemInput, itemQuant);
});
