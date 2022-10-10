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
import { UrlWhereInput } from "./UrlWhereInput";
import { Type } from "class-transformer";
import { UrlOrderByInput } from "./UrlOrderByInput";

@ArgsType()
class UrlFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => UrlWhereInput,
  })
  @Field(() => UrlWhereInput, { nullable: true })
  @Type(() => UrlWhereInput)
  where?: UrlWhereInput;

  @ApiProperty({
    required: false,
    type: [UrlOrderByInput],
  })
  @Field(() => [UrlOrderByInput], { nullable: true })
  @Type(() => UrlOrderByInput)
  orderBy?: Array<UrlOrderByInput>;

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

export { UrlFindManyArgs };
