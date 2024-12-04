import {Request, Response} from 'express';
import {UserControllerPort} from "@application/ports/UserControllerPort";
import {UserService} from "@application/services/UserService";

export class UserController implements UserControllerPort {
    constructor(private userService: UserService) {
    }

    async createUser(req: Request, res: Response): Promise<void> {
        try {
            const {name, email} = req.body;
            const user = await this.userService.create(name, email);
            res.status(201).json(user);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({error: error.message});
            } else {
                res.status(500).json({error: 'An unknown error occurred'});
            }
        }
    }

}
