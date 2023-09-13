import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { readJSON } from 'fs-extra';
import BookInterface from '../interfaces/bookInterface';

const getAllBooks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name } = req.query;
    const books = await readJSON('./src/books.json');

    if (name) {
      const filteredBooks = books.filter(
        (book: BookInterface) => book.name === name
      );

      if (filteredBooks.length === 0) {
        res.status(StatusCodes.NOT_FOUND).json({
          status: StatusCodes.NOT_FOUND,
          message: `There is no book with name: ${name}`
        });
      } else {
        res
          .status(StatusCodes.OK)
          .json({ status: StatusCodes.OK, data: [filteredBooks] });
      }
    } else {
      res.status(StatusCodes.OK).json({ status: StatusCodes.OK, data: books });
    }
  } catch (error) {
    next(error);
  }
};

export { getAllBooks };
