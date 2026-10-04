const myLibrary = [];



function Book(title, author, pages, read) {

    if (!new.target) {
        throw Error("You have to use new to call this function");
    };

    this.name = this.name;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read ? "already read" : "not read yet"}`;
    }

    return this;
}

function addBookToLibrary(title, author, pages, read) {

    var myInput = document.getElementById("bookName");
    var book = myInput.value;
    var myInput = document.getElementById("author");
    var author = myInput.value;
    var myInput = document.getElementById("pages");
    var pages = myInput.value;
    var myInput = document.getElementById("read");
    var read = myInput.checked;
    
    book = new Book(book, author, pages, read);
    myLibrary.push(book);
    alert(`Size of library = ${myLibrary.length}`)
}

function displayBooks() {

}

const dialog = document.getElementById('addBookDialog');
const openBtn = document.getElementById('addBookDlgButton');
const addBookBtn = document.getElementById('addBookButton');
const cancelBtn = document.getElementById('cancelButton');

// Open as a Modal (Blocks background interaction + adds a dim backdrop)
openBtn.addEventListener('click', () => {
  dialog.showModal(); 
});

// Close the dialog
addBookBtn.addEventListener('click', () => {
  addBookToLibrary();
  
  dialog.close();
});

// Close the dialog
cancelBtn.addEventListener('click', () => {
  dialog.close();
});