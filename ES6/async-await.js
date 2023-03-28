// Example of promises

// Step 1: Create a book's database
const booksDb = [
  {
    id: 1,
    title: "Clean Code",
    authorId: 1,
  },
  {
    id: 2,
    title: "The pragamatic programmer",
    authorId: 2,
  },
  {
    id: 3,
    title: "Web Development with Node.Js",
    authorId: 3,
  },
];

const authorDb = [
  {
    id: 1,
    name: "Robert C. Martin",
  },
];

async function getBookById(id) {
  const book = booksDb.find((book) => book.id === id);
  console.log(book);
  // If the book does not exist, I need create the error
  // and call the reject method.
  if (!book) {
    const error = new Error();
    error.message = "Book not found";
    throw error;
  }
  // If the book exist, I send to the resolve method the information
  // of the book without error.
  return book;
}

async function getAuthorById(id) {
  // The logic
  const author = authorDb.find((author) => author.id === id);
  console.log(author);
  if (!author) {
    const error = new Error();
    error.message = "Author not found";
    throw error;
  }
  return author;
}

// Execution of process getBookById using async/await
async function main() {
  try {
    const book = await getBookById(1);
    const author = await getAuthorById(book.authorId);
    console.log(`This book ${book.title} was written by ${author.name}`);    
  } catch (err) {
    console.log(err.message);
  }
}


main();