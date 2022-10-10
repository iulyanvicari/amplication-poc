import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { UrlGroupServiceBase } from "./base/urlGroup.service.base";

@Injectable()
export class UrlGroupService extends UrlGroupServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
