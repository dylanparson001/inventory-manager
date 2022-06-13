// Import the functions you need from the SDKs you need

class InventoryList {
  inventory = [
    // Testing values
  ];
  createList() {
    const body = document.querySelector("body");
    const table = document.createElement("table");
    table.setAttribute("id", "inventory");
    // Load all items from current inventory
    this.inventory.forEach((item, index) => {
      const editButton = document.createElement("button");
      const itemRow = document.createElement("tr");
      const itemTitle = document.createElement("th");
      const itemQuant = document.createElement("td");
      const deleteBtn = document.createElement("button");

      // Set Classes/ids
      editButton.classList.add("item-edit");
      editButton.textContent = "Edit";
      editButton.addEventListener("click", (e) => {
        this.editItem(e, itemRow);
      });

      itemRow.classList.add("item-rows");
      itemRow.setAttribute("id", index);

      itemTitle.classList.add("item-titles");
      itemTitle.textContent = item[0];

      itemQuant.classList.add("item-quant");
      itemQuant.textContent = item[1];

      deleteBtn.classList.add("item-delete");
      deleteBtn.setAttribute("id", `${item[0]}-delete`);
      deleteBtn.textContent = "Delete";

      deleteBtn.addEventListener("click", (e) => {
        this.deleteItem(e);
      });

      //append
      itemRow.append(editButton, itemTitle, itemQuant, deleteBtn);
      table.append(itemRow);
    });

    body.append(table);
  }
  // Delete
  deleteItem(e) {
    const rowID = e.target.parentElement.id;
    this.inventory.splice(rowID, 1);
    this.reloadList();
  }
  editItem(e, itemRow) {
    const index = e.target.parentElement.id;

    const editRow = document.createElement("h2");
    const form = document.createElement("form");
    const editTitle = document.createElement("input");
    const editQuant = document.createElement("input");
    const editFinish = document.createElement("input");

    editTitle.setAttribute("type", "text");
    editTitle.setAttribute("id", "edit-item");
    editTitle.setAttribute("value", `${this.inventory[index][0]}`);

    editQuant.setAttribute("type", "number");
    editQuant.setAttribute("id", "edit-quantity");
    editQuant.setAttribute("value", `${this.inventory[index][1]}`);

    editFinish.setAttribute("type", "submit");
    // To get index when form is submitted
    editFinish.setAttribute("id", index);
    editFinish.classList.add("edit-submit");

    form.append(editTitle, editQuant, editFinish);
    editRow.append(form);
    itemRow.replaceWith(editRow);

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const index = document.querySelector(".edit-submit").id;
      const itemInput = document
        .querySelector("#edit-item")
        .value.toUpperCase()
        .trim();
      const itemQuant = document.querySelector("#edit-quantity").value;
      // Change actual inventory data
      this.inventory[index][0] = itemInput;
      this.inventory[index][1] = itemQuant;
      this.addToList(itemInput, itemQuant);
    });
  }
  reloadList() {
    const table = document.querySelector("#inventory").remove();
    this.createList();
  }
}
export { InventoryList };
