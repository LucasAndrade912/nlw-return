export interface UserCreateData {
  id: string
  name: string
  email: string
}

export interface UsersRepository {
  findById(userId: string): Promise<string | null>
  create: (data: UserCreateData) => Promise<string>
}