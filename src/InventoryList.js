class InventoryList {
  inventory = [];

  createList() {
    const body = document.querySelector("body");
    const table = document.createElement("table");
    table.setAttribute("id", "inventory");
    // Load any previous items
    this.inventory.forEach((item) => {
      const itemRow = document.createElement("tr");
      const itemTitle = document.createElement("th");
      const itemQuant = document.createElement("td");
      itemTitle.textContent = item[0];
      itemQuant.textContent = item[1];

      itemRow.append(itemTitle, itemQuant);
      table.append(itemRow);
    });

    body.append(table);
  }
  reloadList() {
    const table = document.querySelector("#inventory").remove() ;
    this.createList();
  }
  addToList(newItem, newQuant) {
    let itemExists = false;

    if (this.inventory.length > 0) {
      this.inventory.forEach((item) => {
        if (newItem === item[0]) {
          item[1] += parseInt(newQuant);
          this.reloadList();
          itemExists = true;
        }
      });
    } 
     if(itemExists === false) {
      this.inventory.push([newItem, parseInt(newQuant)]);
      this.reloadList()
    }
  }
}
export { InventoryList };
