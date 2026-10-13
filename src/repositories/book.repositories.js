import { Book } from "../db/models/book"


export const findBookByTitleAndAuthor = async (title, author) => {
    return Book.findOne({where: {title, author}});
};

export const registerBook = async (bookDetails) => {
    return Book.create(bookDetails)
};