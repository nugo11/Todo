import { DisplayAllDataFromLocalStorage, ThemeStyleToggle, addRowsFromLocalStorage, countLis, delbut, rowFoo, showActiveItems, showAllItems, showcompletedItems } from "./functions.js";

var localLength = localStorage.length;

addRowsFromLocalStorage();

for (let li = 0; li < localLength; li++) {
  DisplayAllDataFromLocalStorage(li);
  delbut(li);
  rowFoo(li);
}

for (let li = 0; li <= localLength; li++) {
  countLis(li);
}

showAllItems();
showActiveItems();
showcompletedItems();

ThemeStyleToggle();
