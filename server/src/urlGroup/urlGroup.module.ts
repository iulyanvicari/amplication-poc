import { Module } from "@nestjs/common";
import { UrlGroupModuleBase } from "./base/urlGroup.module.base";
import { UrlGroupService } from "./urlGroup.service";
import { UrlGroupController } from "./urlGroup.controller";
import { UrlGroupResolver } from "./urlGroup.resolver";

@Module({
  imports: [UrlGroupModuleBase],
  controllers: [UrlGroupController],
  providers: [UrlGroupService, UrlGroupResolver],
  exports: [UrlGroupService],
})
export class UrlGroupModule {}
