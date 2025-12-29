import { User } from "@/domains/users/user.type";

export function mapUserToStoreUser(user: any): User {
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    lastName: user.lastName,
    role: user.role,
  };
}
