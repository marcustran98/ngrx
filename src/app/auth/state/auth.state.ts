import { User } from "src/app/models/Users.model";

export interface AuthState { }
export const initialAuthStateX: AuthState = {
  user: User
}