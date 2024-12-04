import {User} from "@domain/model/User";
import {UserRepositoryPort} from "@application/ports/UserRepositoryPort";

export class UserService {
  constructor(private userRepository: UserRepositoryPort) {}

  async create(name: string, email: string): Promise<User> {
    const user = new User(Date.now().toString(), name, email);
    return this.userRepository.save(user);
  }
}
