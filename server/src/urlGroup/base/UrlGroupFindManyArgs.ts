/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UrlGroupWhereInput } from "./UrlGroupWhereInput";
import { Type } from "class-transformer";
import { UrlGroupOrderByInput } from "./UrlGroupOrderByInput";

@ArgsType()
class UrlGroupFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => UrlGroupWhereInput,
  })
  @Field(() => UrlGroupWhereInput, { nullable: true })
  @Type(() => UrlGroupWhereInput)
  where?: UrlGroupWhereInput;

  @ApiProperty({
    required: false,
    type: [UrlGroupOrderByInput],
  })
  @Field(() => [UrlGroupOrderByInput], { nullable: true })
  @Type(() => UrlGroupOrderByInput)
  orderBy?: Array<UrlGroupOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { UrlGroupFindManyArgs };