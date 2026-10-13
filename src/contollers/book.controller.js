// import {
//   findBookByTitleAndAuthor,
//   registerBook,
// } from "../repositories/book.repositories.js";
// import { registerBookSchema } from "../validators/books.js";

// export const registerBooksController = async (req, res) => {
//   try {
//     const { error, value } = registerBookSchema.validate(req.body);

//     if (error) return res.status(400).json({ error: error.message });

//     const { title, author, genre } = value;

//     const bookExists = await findBookByTitleAndAuthor(title, author);

//     if (bookExists)
//       return res.status(400).json({
//         error: "Book already exists",
//       });

//     const registeredBook = await registerBook(value);

//     return res.status(201).json({
//       message: "Book registered successfully",
//       registeredBook,
//     });
//   } catch (error) {
//     console.log(`Error registering book. Error: ${error}`);

//     return res.status(500).json({ error: "Internal server error" });
//   }
// };

// export const getAllBooksController = async (req, res) => {
//   try {
//   } catch (error) {
//     console.log(`Error getting all books. Error: ${error}`);

//     return res.status(500).json({ error: "Internal server error" });
//   }
// };

app.get("/books/all", async (req, res) => {
  const { title, author, isbn } = req.query;

  if (title) {
    const foundBooks = await Book.findAll({
      where: { title },
    });

    if (foundBooks.length === 0) {
      return res.status(404).json({
        message: `No books found with title: ${title}`,
      });
    }

    return res.status(200).json({
      foundBooks,
    });
  } else if (author) {
    const foundBooks = await Book.findAll({
      where: { author },
    });

    if (foundBooks.length === 0) {
      return res.status(404).json({
        message: `No books found by author: ${author}`,
      });
    }

    return res.status(200).json({
      foundBooks,
    });
  } else if (isbn) {
    const foundBook = await Book.findOne({
      where: { isbn },
    });

    if (!foundBook) {
      return res.status(404).json({
        message: `No book found with ISBN: ${isbn}`,
      });
    }

    return res.status(200).json({
      foundBook,
    });
  }

  const allBooks = await Book.findAll();

  return res.status(200).json({
    allBooks,
  });
});
