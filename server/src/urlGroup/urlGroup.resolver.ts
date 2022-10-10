import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { UrlGroupResolverBase } from "./base/urlGroup.resolver.base";
import { UrlGroup } from "./base/UrlGroup";
import { UrlGroupService } from "./urlGroup.service";

@graphql.Resolver(() => UrlGroup)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class UrlGroupResolver extends UrlGroupResolverBase {
  constructor(
    protected readonly service: UrlGroupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
