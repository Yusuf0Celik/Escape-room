const dialoogBtn1 = document.querySelector(".dialoog1-btn");
const dialoogDiv = document.querySelector(".dialoog1");

dialoogBtn1.addEventListener("click", gaDoor)

function gaDoor(){
  dialoogDiv.classList.add("active")
}