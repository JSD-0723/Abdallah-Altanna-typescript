import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const notFoundMiddleware = (_: any, res: Response) => {
  res
    .status(StatusCodes.NOT_FOUND)
    .json({ status: StatusCodes.NOT_FOUND, message: 'Route does not exist' });
};

export default notFoundMiddleware;
