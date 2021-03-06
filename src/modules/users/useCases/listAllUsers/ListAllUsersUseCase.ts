import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const currentUser = this.usersRepository.findById(user_id);

    if (!currentUser || !currentUser.admin) {
      throw new Error("You must be an admin to list all users");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
