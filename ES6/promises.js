// Example of promises

// Step 1: Create a book's database
const booksDb = [
  {
    id: 1,
    title: "Clean Code",
    authorId: 1
  },
  {
    id: 2,
    title: "The pragamatic programmer",
    authorId: 2
  },
  {
    id: 3,
    title: "Web Development with Node.Js",
    authorId: 3
  },
];

const authorDb = [
  {
    id: 1,
    name: "Robert C' Martin",
  },
];

function getBookById(id) {
  // I return a promise object to get the
  // methods then catch and finally available outside.
  return new Promise((resolve, reject) => {
    const book = booksDb.find((book) => book.id === id);
    // If the book does not exist, I need create the error
    // and call the reject method.
    if (!book) {
      const error = new Error();
      error.message = "Book not found";
      reject(error);
    }
    // If the book exist, I send to the resolve method the information
    // of the book without error.
    resolve(book);
  });
}

function getAuthorById(id) {
  return new Promise((resolve, reject) => {
    // The logic
    const author = authorDb.find((author) => author.id === id);
    if (!author) {
      const error = new Error();
      error.message = "Author not found";
      reject(error);
    }
    resolve(author);
  });
}

// Execution of process getBookById
/*
let result = getBookById(13);

result.then((result) => {
  console.log(result);
});

result.catch((error) => {
  console.log(error.message);
});

result.finally(() => {
  console.log("Finally");
});
*/

getBookById(1)
  .then((book) => {
    console.log(book);
    return getAuthorById(book.id);
  })
  .then((author) => {
    console.log(author);
  })
  .catch((error) => {
    console.log(error.message);
  });
