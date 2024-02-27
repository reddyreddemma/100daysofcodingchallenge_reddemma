// Define the Book object
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = false; // Initially set as unread
}

// Create methods for the Book object
Book.prototype.markAsRead = function () {
  this.read = true;
};

// Define the Library object
function Library() {
  this.books = []; // Array to store books
}

// Add a book to the library
Library.prototype.addBook = function (book) {
  this.books.push(book);
};

// List all books in the library
Library.prototype.listBooks = function () {
  console.log("Books in the library:");
  this.books.forEach((book, index) => {
    const status = book.read ? "Read" : "Unread";
    console.log(`${index + 1}. ${book.title} by ${book.author} (${status})`);
  });
};

// Example usage
const myLibrary = new Library();

// Add some books
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 320);
const book3 = new Book("1984", "George Orwell", 328);

myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);

// Mark a book as read
book2.markAsRead();

// List all books
myLibrary.listBooks();
