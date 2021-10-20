import { Request, Response } from 'express';

export default (request: Request, response: Response) => {
  response.status(404).send('Resource not found');
};