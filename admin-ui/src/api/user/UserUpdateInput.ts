import { UrlUpdateManyWithoutUsersInput } from "./UrlUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  favorites?: UrlUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  role?: "Admin" | "Contributor" | "User" | null;
  roles?: InputJsonValue;
  username?: string;
};
