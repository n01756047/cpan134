// Part 1
function calculateArea(width, height) {
    while (isNaN(width) || width <= 0) {
      width = parseFloat(prompt("Enter a valid positive width:"));
    }
    while (isNaN(height) || height <= 0) {
      height = parseFloat(prompt("Enter a valid positive height:"));
    }
    const area = width * height;
    console.log(`Area: ${area}`);
    return area;
  }
  
  // Part 2
  document.getElementById("clickButton").addEventListener("click", function () {
    alert("Button clicked!");
    this.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  });
  
  // Part 3
  const ul = document.getElementById("itemList");
  const newItem = document.createElement("li");
  newItem.textContent = "Fourth item";
  ul.appendChild(newItem);
  
  function getRandomString(length = 8) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let str = "";
    for (let i = 0; i < length; i++) {
      str += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return str;
  }
  
  ul.querySelectorAll("li").forEach(item => {
    item.addEventListener("click", function () {
      this.textContent = getRandomString();
      this.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    });
  });
  
  // Part 4
  const box = document.getElementById("boxModelDiv");
  box.addEventListener("click", () => {
    box.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  });
  box.addEventListener("mouseover", () => {
    box.style.borderColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  });
  box.addEventListener("mouseout", () => {
    box.style.borderColor = "#eee";
  });
  