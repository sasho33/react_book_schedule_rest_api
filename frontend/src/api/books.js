// TODO: Import API_ENDPOINT
import { API_ENDPOINT } from './index.js';

// TODO: Create the addNewBook function that takes in newTitle, newStart, and newEnd as arguments. Inside the function, create a POST request for the new book.
// Store the response as a JSON in a variable called newBook and return it at the end of the function.
export const addNewBook = async (newTitle, newStart, newEnd) => {
  const bookData = {
    title: newTitle,
    start: newStart,
    end: newEnd,
  };

  try {
    const response = await fetch(`${API_ENDPOINT}/books`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookData),
    });

    if (!response.ok) {
      throw new Error('Failed to add new book');
    }

    const newBook = await response.json();
    return newBook;
  } catch (error) {
    console.error(error);
    // Handle error here
  }
};

// TODO: Create the getBooks function that retrieves all of the books that have been saved to the back-end API
export const getBooks = async () => {
  const response = await fetch(`${API_ENDPOINT}/books`);
  const books = await response.json();
  return books;
};

// TODO: Create the updateBook function that takes the arguments id, newTitle, newStart, newEnd. Inside of the function, create a PUT request for the specified book to be updated. Return the status of the response at the end of the function.

// TODO: Create the deleteBook function that takes the id of the book to be deleted as an argument. Inside of the function, create a DELETE request for the specified book to be deleted. Return the status of the response at the end of the function.
