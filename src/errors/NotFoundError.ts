import CustomError from './CustomError';

class NotFoundError extends CustomError {
  status: number;
  constructor(message: string) {
    super(message);
    this.status = 404;
  }
}

export default NotFoundError;
