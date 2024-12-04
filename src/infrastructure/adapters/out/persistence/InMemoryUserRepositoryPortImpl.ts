import {UserRepositoryPort} from "@application/ports/UserRepositoryPort";
import {User} from "@domain/model/User";

export class InMemoryUserRepositoryPortImpl implements UserRepositoryPort {
    private users: User[] = [];

    async save(user: User): Promise<User> {
        this.users.push(user);
        return user;
    }

    async findById(id: string): Promise<User | null> {
        return this.users.find(user => user.id === id) || null;
    }
}
