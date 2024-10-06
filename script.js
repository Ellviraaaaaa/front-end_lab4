document.addEventListener("DOMContentLoaded", () => {
  const item6 = document.getElementById("item2"); 
  const item7 = document.querySelector("#item3"); 

  function toggleColor(element, class1, class2) {
    if (element.classList.contains(class1)) {
      element.classList.remove(class1);
      element.classList.add(class2);
    } else if (element.classList.contains(class2)) {
      element.classList.remove(class2);
      element.classList.add(class1);
    } else {
      element.classList.add(class1); 
    }
  }

  item6.addEventListener("click", () => {
    toggleColor(item6, "selected", "alt-selected");
  });

  item7.addEventListener("click", () => {
    toggleColor(item7, "alt-selected", "selected");
  });

  const img = document.querySelector("img");
  const btnAdd = document.querySelector("#add");
  const btnIncrease = document.querySelector("#increase");
  const btnDecrease = document.querySelector("#decrease");
  const btnDelete = document.querySelector("#delete");

  btnAdd.addEventListener("click", () => {
    const newImg = document.createElement("img");
    newImg.width = img.width;
    newImg.height = img.height;
    newImg.src = img.src;
    newImg.alt = img.alt;
    document.body.appendChild(newImg);
  });

  btnIncrease.addEventListener("click", () => {
    img.width += 50;
  });

  btnDecrease.addEventListener("click", () => {
    if (img.width > 50) img.width -= 50;
  });

  btnDelete.addEventListener("click", () => {
    img.remove();
  });
});
