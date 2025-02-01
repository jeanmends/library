const myLibrary = [];
let globalIndex = '';
const main = document.querySelector('#main');
function Book(title, author, pages, bookStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.bookStatus = bookStatus;
}

function closeAndClean(){
  dialog.style.display = 'none';
  let allInputs = document.querySelectorAll('input');

  allInputs.forEach(element => {
   element.value = '';
  });
}
function addBookToLibrary(title, author, pages, bookStatus) {
 const book = new Book(title, author, pages, bookStatus);
 myLibrary.push(book);
 closeAndClean();
 showBooks(myLibrary);
 
}

addBookToLibrary("The hobbit", "JRR Tolkien", 300, 'Read');
addBookToLibrary("The Shining", "Stephen King", 505, 'Read');
addBookToLibrary("Lord of the rings", "JRR Tolkien", 500, 'Read');

function showBooks(array){
   let html = '';
    array.forEach(element => {
       html += `
        <div class="card">
            <button class="btn-delete" value='${element.title}'><img src='assets/trash_icon.svg' alt='Trash icon'></button>
            <div class="card-content">
                
                <h3 class="book-title">${element.title}</h3>
                <p class="book-author">Author: ${element.author}</p>
                <p class="book-pages">Páginas: ${element.pages}</p>
                <p class="book-status">Status: ${element.bookStatus}</p>
            </div>
        </div>
        `;        
    });

    main.innerHTML = html;
    let allDeleteButton = document.querySelectorAll('.btn-delete');
    addEventToDeleteButon(allDeleteButton);

}

showBooks(myLibrary);

document.querySelector('form').addEventListener('submit', (event) =>{
    
    let formData = new FormData(document.querySelector('form'))
    let allInputs = document.querySelectorAll('input');
    addBookToLibrary(
      formData.get('title'),
      formData.get('author'),
      formData.get('pages'),
      formData.get('bookStatus'));

      event.preventDefault();
})
function deleteBook(index){

  myLibrary.splice(index, 1);  
  showBooks(myLibrary);
  closeAlertDialog();

}

function addEventToDeleteButon(elements){
  elements.forEach((element, index) => {
    element.addEventListener("click", (e) => {
      globalIndex = index;
      deleteDialog(e.clientX, e.clientY, index);
    })
  })
}

function deleteDialog(x, y){
  let el = document.querySelector('#delete-dialog');
  el.style.display = 'block';
  el.style.top = `${y}px`;
  el.style.left = `${x}px`;
}

function confirmAlertDialog(){
  deleteBook(globalIndex);
  closeAlertDialog();
  globalIndex = '';
}
function closeAlertDialog(){
  let el = document.querySelector('#delete-dialog');
  el.style.display = 'none';
  showBooks(myLibrary);
}

let cancelButtonDialog = document.querySelector('#btn-cancel');

cancelButtonDialog.addEventListener('click', closeAlertDialog)

let confirmButtonDialog = document.querySelector('#btn-confirm');

confirmButtonDialog.addEventListener('click',() =>{
  confirmAlertDialog();
})