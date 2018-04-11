'use strict';
/*
Imagine you are looking for a book in a library with a Dewey Decimal index. How would you go about it? Can you express this process as a searching algorithm?
*/


const library = [
  { 
    author: 'Cowlishaw, Mike', 
    dewey: '005.133', 
    title: 'The REXX Language' 
  },
  { 
    author: 'Sams', 
    dewey: '005.133', 
    title: 'Teach Yourself C++ In 21 Days' 
  },
  { 
    author: 'Stroustrup., Bjarne', 
    dewey: '005.133', 
    title: 'The C++ Programming Language' 
  },
  { 
    author: 'Crockford, Douglas', 
    dewey: '005.2762', 
    title: 'JavaScript: The Good Parts' 
  },
  { 
    author: 'Flanagan, David', 
    dewey: '005.2762', 
    title: 'JavaScript: The Definitive Guide' 
  },
  { 
    author: 'Schmidt, Meinhard', 
    dewey: '005.44684', 
    title: 'Windows Vista for Dummies' 
  },
  { 
    author: 'Zondervan', 
    dewey: '220.52081', 
    title: 'NIV Study Bible' 
  },
  { 
    author: 'Humphries, Russell, Dr.', 
    dewey: '231.7652', 
    title: 'Starlight and Time' 
  },
  { 
    author: 'Jane, Frederick Thomas', 
    dewey: '623.82509051', 
    title: 'Jane\'s Fighting Ships' 
  },
  { 
    author: 'Norris, Chuck', 
    dewey: '796.8092', 
    title: 'The Official Chuck Norris Fact Book' 
  }
];

const findABook = (library, book) => {

  let collection = library.filter(books => books.dewey === book.dewey);


  if (collection.length === 1) {
    return `Found it! ${collection[0].title} by ${collection[0].author}.`;
  }
  else if (collection.length > 1) {
    let searchedTitle = collection.filter(selection => selection.title === book.title);
    return `Found it! ${searchedTitle[0].title} by ${searchedTitle[0].author}.`;
  }
  
  return `Sorry, we don't have ${book.title} by ${book.author} in our library.`;

};

console.log(findABook(library, {
  author: 'Zondervan',
  dewey: '220.52081',
  title: 'NIV Study Bible'
}));

console.log(findABook(library, {
  author: 'Crockford, Douglas',
  dewey: '005.2762',
  title: 'JavaScript: The Good Parts'
}));