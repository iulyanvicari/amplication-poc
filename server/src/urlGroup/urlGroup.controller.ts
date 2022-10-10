import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UrlGroupService } from "./urlGroup.service";
import { UrlGroupControllerBase } from "./base/urlGroup.controller.base";

@swagger.ApiTags("urlGroups")
@common.Controller("urlGroups")
export class UrlGroupController extends UrlGroupControllerBase {
  constructor(
    protected readonly service: UrlGroupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
