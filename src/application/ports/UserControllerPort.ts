import { Request, Response } from 'express';

export interface UserControllerPort {
  createUser(req: Request, res: Response): void;
}
