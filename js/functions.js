let courseBox = document.getElementById("coursebox");
var localLength = localStorage.length;
let putItemInAr = document.getElementById("input");
let countNum = document.getElementById("num");

export function DisplayAllDataFromLocalStorage(i) {
  let createLi = document.createElement("li");
  courseBox.appendChild(createLi);
  createLi.classList.add("hover");
  var keys = Object.keys(localStorage);
  let putRow = localStorage.getItem(keys[i]);
  createLi.innerHTML = `<span class="round"></span>${putRow}<i class="butx"></i>`;
}

export function addRowsFromLocalStorage() {
  putItemInAr.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      localStorage.setItem(putItemInAr.value, putItemInAr.value);
      let lastElement = localStorage.getItem(putItemInAr.value);
      let createLi = document.createElement("li");
      courseBox.appendChild(createLi);
      createLi.classList.add("hover");
      createLi.innerHTML = `<span class="round"></span>${lastElement}<i class="butx"></i>`;
      window.location.reload();
    }
  });
}

export function countLis(li) {
  countNum.textContent = li;
}

export function rowFoo(item) {
  let listLi = document.querySelectorAll("li");
  let listSpan = document.querySelectorAll("span");
  listLi[item].addEventListener("click", () => {
    if (listLi[item].hasAttribute("id")) {
      listLi[item].removeAttribute("id", "active");
      listSpan[item].removeAttribute("id", "activeS");
    } else {
      listLi[item].setAttribute("id", "active");
      listSpan[item].setAttribute("id", "activeS");
    }

    let delButton = document.getElementById("clear");
    delButton.addEventListener("click", () => {
      if (listLi[item].hasAttribute("id")) {
        localStorage.removeItem(localStorage.key(item));
        window.location.reload(true);
      }
    });
  });
}

export function delbut(item) {
  let delwithbutx = document.querySelectorAll(".butx");
  delwithbutx[item].addEventListener("click", () => {
    countNum.textContent = item;
    localStorage.removeItem(localStorage.key(item));
    window.location.reload(true);
  });
}

export function showAllItems() {
  let showall = document.getElementById("showall");
  showall.style.color = "#3A7CFD";
  showall.addEventListener("click", () => {
    showall.style.color = "#3A7CFD";
    showactives.style.color = "#9495A5";
    showcompleted.style.color = "#9495A5";
    let listLi = document.querySelectorAll("li");
    for (let li = 0; li <= localLength; li++) {
      if (listLi[li].style.display === "none") {
        listLi[li].removeAttribute("style");
      }
    }
  });
}
export function showActiveItems() {
  let showactives = document.getElementById("showactives");
  showactives.addEventListener("click", () => {
    showall.style.color = "#9495A5";
    showactives.style.color = "#3A7CFD";
    showcompleted.style.color = "#9495A5";
    let listLi = document.querySelectorAll("li");
    for (let li = 0; li <= localLength; li++) {
      if (listLi[li].hasAttribute("id")) {
        listLi[li].style.display = "none";
      }
      if (
        !listLi[li].hasAttribute("id") &&
        listLi[li].style.display === "none"
      ) {
        listLi[li].style.display = "flex";
      }
    }
  });
}
export function showcompletedItems() {
  let showcompleted = document.getElementById("showcompleted");
  showcompleted.addEventListener("click", () => {
    showall.style.color = "#9495A5";
    showactives.style.color = "#9495A5";
    showcompleted.style.color = "#3A7CFD";

    let listLi = document.querySelectorAll("li");
    for (let li = 0; li <= localLength; li++) {
      if (!listLi[li].hasAttribute("id")) {
        listLi[li].style.display = "none";
      }
      if (
        listLi[li].hasAttribute("id") &&
        listLi[li].style.display === "none"
      ) {
        listLi[li].style.display = "flex";
      }
    }
  });
}

export function ThemeStyleToggle() {
  let icon = document.getElementsByClassName("icon")[0];
  let icon1 = document.getElementsByClassName("icon1")[0];

  icon.addEventListener("click", () => {
    window.location.hash = "#darkmode";
    window.location.reload(true);
  });

  icon1.addEventListener("click", () => {
    window.location.hash = "#lightmode";
    window.location.reload(true);
  });

  if (window.location.hash === "#darkmode") {
    document.getElementsByTagName("link")[0].href = "./css/dark-style.css";
    icon.style.display = "none";
    icon1.style.display = "block";
  }

  if (window.location.hash === "#lightmode" || window.location.hash === "") {
    document.getElementsByTagName("link")[0].href = "./css/style.css";
    icon.style.display = "block";
    icon1.style.display = "none";
  }
}
