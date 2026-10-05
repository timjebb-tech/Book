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
      const index = myLibrary.findIndex(book => book.id === id);
    
      // 2. Chop it out of the array safely
      if (index !== -1) {
          myLibrary.splice(index, 1);
      }
      displayBooks();
}

function toggleRead(id) {
      const index = myLibrary.findIndex(book => book.id === id);
    
      if (index !== -1) {
          myLibrary[index].read = !myLibrary[index].read ;
      }
      displayBooks();
}

function displayBook(book) {
  const container = document.getElementById("myContainer");
  const lineElement = document.createElement('p');
  lineElement.className = 'new-text';

  // 2. Insert just the book's text info into the paragraph
  lineElement.textContent = `Title: ${book.title}, Author: ${book.author}, Number of pages: ${book.pages}, Read? : ${book.read ? "Yes" : "No"} `;

  //  Create delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete book';

  // Attach event function with the unique ID
  deleteBtn.addEventListener('click', () => {
      deleteBook(book.id); 
  });

  lineElement.appendChild(deleteBtn);

  // create toggleRead button
  const toggleReadBtn = document.createElement('button');
  toggleReadBtn.textContent = 'Toggle Read';

  // Attach event function with the unique ID
  toggleReadBtn.addEventListener('click', () => {
      toggleRead(book.id); 
  });

  lineElement.appendChild(toggleReadBtn);

  // Push the entire paragraph (with the buttons inside it) into your container
  container.appendChild(lineElement);
}

const addBookDialog = document.getElementById('addBookDialog');
const bookForm = addBookDialog.querySelector("form");
const addBookDlgBtn = document.getElementById('addBookDlgButton');
const addBookBtn = document.getElementById('addBookButton');
const cancelBtn = document.getElementById('cancelButton');

// Open as a Modal (Blocks background interaction + adds a dim backdrop)
addBookDlgBtn.addEventListener('click', () => {
  if (addBookDialog) {
        const form = addBookDialog.querySelector('form');
        if (form) {
            form.reset(); 
        }
    }
  addBookDialog.showModal(); 
});

addBookBtn.addEventListener('click', () => {
  addBookToLibrary();
  addBookDialog.close();
});

// 2. Catch the submission and freeze it
bookForm.addEventListener('submit', (event) => {
    // STOP the form from reloading the page or submitting online
    event.preventDefault(); 

    addBookDialog.close(); 
});

cancelBtn.addEventListener('click', () => {
  addBookDialog.close();
});

// make sure pages is numeric (without up and down arrows)
const pagesInput = document.getElementById('pages');

if (pagesInput) {
    pagesInput.addEventListener('input', (event) => {
        // Replace any character that is NOT a number (0-9) with nothing ""
        event.target.value = event.target.value.replace(/[^0-9]/g, '');
    });
}