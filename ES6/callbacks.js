// Example of callbacks.
// Create a function to search an specific book 
// using the name or the id.
// Just like other ORM

// Step 1: Create a book's database
const booksDb = [
    {
        id: 1,
        title: "Clean Code"
    },
    {
        id: 2,
        title: "The pragamatic programmer"
    },
    {
        id: 3,
        title: "Web Development with Node.Js"
    }
];


// Step 2: Create a callback to seach the book 
//by id.

function getBookById(id, callback) {
    const book = booksDb.find(book => book.id === id);
    // The fisrt part of a calback alway will be the error case.    
    if(!book) {
        // If the book object does not exist, I return the error in the callback
        const error = new Error();
        error.message = "Book not found";
        return callback(error, null);
    }
    // If the book exist, I send to the callback the information
    // of the book without error.
    callback(null, book);
}

// Call of the service to get a book
// As parameter I will send the id of the book that I need
// and a function, this function will get the result values 
// as parameters "(err and book)"
getBookById(2, (err, book) => {
    if(err) {
        // Book not found case
        return console.log(err.message);
    }
    // Book found case
    return console.log(book);
});

function evalGetBook(err, book){
    if(err) {
        return console.log(err.message);
    }
    return console.log(book);
}

getBookById(20, evalGetBook);


// Lets create a service to get the Book by name.
function getBookByName(name, callback) {
    const book = booksDb.find(book => book.title === name);

    if(!book) {
        const err = new Error();
        err.message = "Error, book not found!";
        return callback(err, book);
    }
    callback(null, book);
}

getBookByName("Clean Code", (err, book) => {
    if(err) {
        return console.log(err.message);
    }
    return console.log(book);
});


