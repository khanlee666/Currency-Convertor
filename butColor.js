const regBtn = document.querySelectorAll("#firstCurrency > button");
const regBtn1 = document.querySelectorAll("#secondCurrency > button");
const coloredBtn = document.querySelector("#firstCurrency > .colored");
const coloredBtn2 = document.querySelector("#secondCurrency > .colored");

regBtn.forEach((item) => {
  item.style.backgroundColor = "white";
  item.addEventListener("click", (e) => {
    coloredBtn.classList.remove("colored");
    if (e.target.style.backgroundColor == "white") {
      regBtn.forEach((item) => {
        item.style.backgroundColor = "white";
        item.style.color = "#e5e5e5";
      });
      e.target.style.backgroundColor = "#833AE0";
      e.target.style.color = "white";
    } 
  });
});
regBtn1.forEach((item) => {
  item.style.backgroundColor = "white";
  item.addEventListener("click", (e) => {
    coloredBtn2.classList.remove("colored");
    if (e.target.style.backgroundColor == "white") {
      regBtn1.forEach((item) => {
        item.style.backgroundColor = "white";
        item.style.color = "#e5e5e5";
      });
      e.target.style.backgroundColor = "#833AE0";
      e.target.style.color = "white";
    } 
  });
});

