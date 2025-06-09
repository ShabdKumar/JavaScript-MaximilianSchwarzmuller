const lists = document.querySelectorAll("li");

for (const listItem of lists) {
  listItem.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", listItem.id);
    event.dataTransfer.effectAllowed = "move";
  });
}

const droppableElements = document.querySelectorAll("ul");

for (const droppableEle of droppableElements) {
  droppableEle.addEventListener("dragenter", (event) => {
    if (event.dataTransfer.types[0] === "text/plain") {
      event.preventDefault();
    }
    droppableEle.classList.add("droppable");
  });
  droppableEle.addEventListener("dragover", (event) => {
    if (event.dataTransfer.types[0] === "text/plain") {
      event.preventDefault();
    }
  });
  droppableEle.addEventListener("dragleave", (event) => {
    if (event.relatedTarget.closest("ul") !== droppableEle) {
      droppableEle.classList.remove("droppable");
    }
  });

  droppableEle.addEventListener("drop", (event) => {
    if (event.dataTransfer.types[0] === "text/plain") {
      event.preventDefault();
      droppableEle.classList.remove("droppable");
      const dropItemId = event.dataTransfer.getData("text/plain");
      const dropItem = document.getElementById(dropItemId);
      const initialParentId = dropItem.parentElement.id;
      if (initialParentId !== droppableEle.id) {
        // droppableEle.append(dropItem.cloneNode(true)); // copy item
        droppableEle.append(dropItem); // move item
      }
    }
  });

  droppableEle.addEventListener("dragend", (event) => console.log(event));
}
