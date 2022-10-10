import { UrlGroupWhereInput } from "./UrlGroupWhereInput";
import { UrlGroupOrderByInput } from "./UrlGroupOrderByInput";

export type UrlGroupFindManyArgs = {
  where?: UrlGroupWhereInput;
  orderBy?: Array<UrlGroupOrderByInput>;
  skip?: number;
  take?: number;
};
