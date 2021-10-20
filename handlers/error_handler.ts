import { Request, Response, NextFunction } from 'express';
import HttpException from '../common/http-exception';

export default (error: HttpException, request: Request, response: Response, nextFunction: NextFunction) => {
  const status = error.statusCode || error.status || 500;

  response.status(status).send(error);
};
