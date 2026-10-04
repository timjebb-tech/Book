const myLibrary = [];



function Book(title, author, pages, read) {

    if (!new.target) {
        throw Error("You have to use new to call this function");
    };

    this.id = crypto.randomUUID();

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read ? "already read" : "not read yet"}`;
    }

}

function addBookToLibrary(title, author, pages, read) {

    var myInput = document.getElementById("bookName");
    var title = myInput.value;
    myInput = document.getElementById("author");
    var author = myInput.value;
    myInput = document.getElementById("pages");
    var pages = myInput.value;
    myInput = document.getElementById("read");
    var read = myInput.checked;
    
    var book = new Book(title, author, pages, read);

    myLibrary.push(book);
    displayBooks();
}

function displayBooks() {
  clearBooksDisplay();
  for (const book of myLibrary) {
    displayBook(book);
  }
}

function clearBooksDisplay() {
  document.getElementById("myContainer").innerHTML = "";
}

function deleteBook(id) {
  alert(id);
}

function displayBook(book) {
  const container = document.getElementById("myContainer");
  const lineElement = document.createElement('p');
  lineElement.className = 'new-text';

  // 2. Insert just the book's text info into the paragraph
  lineElement.textContent = `Title: ${book.title}, Author: ${book.author}, Number of pages: ${book.pages}, Read? : ${book.read ? "Yes" : "No"} `;

  // 3. Create your button
  const btn = document.createElement('button');
  btn.textContent = 'Greet User';

  // 4. Attach your event function with the unique ID
  btn.addEventListener('click', () => {
      deleteBook(book.id); 
  });

  // 5. Append the button INSIDE the paragraph element (puts it right at the end of the text)
  lineElement.appendChild(btn);

  // 6. Finally, push the entire paragraph (with the button inside it) into your container
  container.appendChild(lineElement);
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