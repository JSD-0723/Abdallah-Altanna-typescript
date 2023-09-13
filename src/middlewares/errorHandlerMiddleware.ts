import { Response, Request, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import ErrorInterface from '../interfaces/errorInterface';

const errorHandlerMiddleware = (
  err: ErrorInterface,
  _: Request,
  res: Response,
  next: NextFunction
) => {
  const { status, message }: ErrorInterface = err;
  res.status(status || StatusCodes.INTERNAL_SERVER_ERROR).json({
    status: status || StatusCodes.INTERNAL_SERVER_ERROR,
    message: message || 'Internal Server Error'
  });
  next();
};

export default errorHandlerMiddleware;
