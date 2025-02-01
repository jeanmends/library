const dialog = document.querySelector("#dialog");
const showButton = document.querySelector("#btn-open-add");
const closeButton = document.querySelector("#close-btn");

//const closeButton = document.querySelector("dialog button");

showButton.addEventListener("click", () =>{
  dialog.style.display = 'block';
  document.querySelectorAll('input')[0].focus();
})
/*
closeButton.addEventListener("click", () =>{
  dialog.style.display = 'none';
  let allInputs = document.querySelectorAll('input');

  allInputs.forEach(element => {
   element.value = '';
  });
})
*/

closeButton.addEventListener('click', closeAndClean);