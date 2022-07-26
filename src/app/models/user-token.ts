import {Role} from "./role";

export interface UserToken {
  id: number;
  username: string;
  password: string;
  confirmPassword?: string;
  accessToken?: string;
  roles: Role[];
}
