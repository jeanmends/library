const myLibrary = [];
const main = document.querySelector('#main');
function Book(title, author, pages, bookStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.bookStatus = bookStatus;
}
function addBookToLibrary(title, author, pages, bookStatus) {
 const book = new Book(title, author, pages, bookStatus);
 myLibrary.push(book);
}

addBookToLibrary("The hobbit", "JRR Tolkien", 300, true);
addBookToLibrary("Lord of the rings", "JRR Tolkien", 500, true);

function showBooks(array){
   let html = '';
    array.forEach(element => {
       html += `
       <div>
        <h1>${element.title}</h1>
        <p>${element.author}</p>
        <p>${element.pages}</p>
        <p>${element.bookStatus}</p>
       </div>
        

        `;        
    });

    main.innerHTML = html;
}

showBooks(myLibrary);

document.querySelector('#add-book').addEventListener('click', (event) =>{
    event.preventDefault();
    let formData = new FormData(document.querySelector('form'))
    addBookToLibrary(
      formData.get('title'),
      formData.get('author'),
      formData.get('pages'),
      formData.get('bookStatus'));

      showBooks(myLibrary);
})
