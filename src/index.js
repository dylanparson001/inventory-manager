import { AddField } from "./addField";
import { InventoryList } from "./InventoryList";
import "./style.css";

const app = initializeApp(firebaseConfig);
const field = new AddField();
const inventory = new InventoryList();

field.run();

inventory.createList();