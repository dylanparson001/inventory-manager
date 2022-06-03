class InventoryList {
  createList() {
    const body = document.querySelector("body");
    const table = document.createElement("table");
    table.setAttribute("id", "inventory");
    // will check for items that are already in list, I need to learn to hook up project to something like firebase first
    body.append(table);
  }
  addToList() {
    const table = document.querySelector("#inventory");
    const itemInput = document.querySelector("#add-item");
    const itemRow = document.createElement("tr");
    const itemTitle = document.createElement("th");
    const itemQuant = document.createElement("td");
    const checkItem = document.querySelectorAll(`#${itemTitle.value}`); 
    
    itemRow.setAttribute("id", `${itemTitle.value}`)
    
    if (itemInput.value != " ") {
      //Check current inventory if item already exists, don't add another row and update quantity
      //This is a mess, brain too tired cant think straight
      // Set current list an array as a property of the class, so the other methods can access that data and check it. 
      // Checking everything all inside this one method is causing things to get oo complex, needs to be simplified
      checkItem.forEach((item) => {
        if (item === itemInput.value) {
          console.log(checkItem.value);
          const quant = document.querySelector(`#${itemTitle.value}-quant`);
          const curr = document.querySelector(`#${itemTitle.value}`);

          quant++;
          curr.append(quant);
          console.log('hello')
        }
      });
      itemTitle.value = itemInput.value;

      // console.log(typeof currentInventory);
      itemQuant.setAttribute("id", `${itemTitle.value}-quant`);

      itemTitle.textContent = itemTitle.value;
      itemQuant.textContent = itemQuant.value;

      itemRow.append(itemTitle, itemQuant);
      table.appendChild(itemRow);
    }
    itemInput.value = " ";
  }
}

export { InventoryList };
