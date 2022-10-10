import { UrlCreateNestedManyWithoutUsersInput } from "./UrlCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  favorites?: UrlCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  role?: "Admin" | "Contributor" | "User" | null;
  roles: InputJsonValue;
  username: string;
};
