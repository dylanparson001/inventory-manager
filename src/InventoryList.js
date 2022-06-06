class InventoryList {
  inventory = [
    // Testing values
    ["HAMMER", 5],
    ["DRILLS", 10],
  ];
  addToList(newItem, newQuant) {
    let itemExists = false;
    // Make sure a valid name and quantity have been selected
    if (newItem != '' && newQuant != '') {
      // Checks for entries already listed
      if (this.inventory.length > 0) {
        this.inventory.forEach((item) => {
          console.log(item[0]);
          if (newItem === item[0]) {
            item[1] += parseInt(newQuant);
            this.reloadList();
            itemExists = true;
          }
        });
      }
      if (itemExists === false) {
        this.inventory.push([newItem, parseInt(newQuant)]);
        console.log(this.inventory)
        this.reloadList();
      }
    } else {
      console.log('you dummy')
    }
  }
  createList() {
    const body = document.querySelector("body");
    const table = document.createElement("table");
    table.setAttribute("id", "inventory");
    // Load all items from current inventory
    this.inventory.forEach((item) => {
      const itemRow = document.createElement("tr");
      const itemTitle = document.createElement("th");
      const itemQuant = document.createElement("td");

      itemRow.classList.add("item-rows");
      itemRow.setAttribute("id", `${item[0]}`)
      itemTitle.classList.add("item-titles");
      itemQuant.classList.add("item-quant");
      itemTitle.textContent = item[0];
      itemQuant.textContent = item[1];

      itemRow.append(itemTitle, itemQuant);
      table.append(itemRow);
    });

    body.append(table);
  }
  editQuantities(){
    const quantities = document.querySelectorAll(".item-quant");
    const input = document.createElement("input").setAttribute("type", "number");
    quantities.forEach(quant=> {
      quant.addEventListener("click", (e)=> {
        // Get row from clicked event
        const rowID = e.target.parentElement.id;
        const editRow = document.getElementById(rowID);
        const itemCurrent = editRow.firstChild;
        const itemEdit = document.createElement("input").setAttribute("type", "text");
        const editForm = document.createElement("form");
        
        editRow.replaceWith(editForm)
        

      })
    })
  }
  reloadList() {
    const table = document.querySelector("#inventory").remove();
    this.createList();
  }
}
export { InventoryList };
