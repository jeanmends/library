const dialog = document.querySelector("#dialog");
const showButton = document.querySelector("#btn-open-add");
const closeButton = document.querySelector("#close-btn");



showButton.addEventListener("click", () =>{
  dialog.style.display = 'block';
  document.querySelectorAll('input')[0].focus();
})


closeButton.addEventListener('click', closeAndClean);