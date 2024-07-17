const getTheTitles = function(books) {
    let bookTitles = [];
    // book in books gives indices instead of object itself
    for (book of books) {
        bookTitles.push(book.title);
    };
    return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
