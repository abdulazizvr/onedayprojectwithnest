import { IsString,IsNumber,IsDate } from "class-validator";
import {ApiProperty} from '@nestjs/swagger'

export class CreateOrderDto {
    @ApiProperty({example:'1',description:"EquipmentId"})
    @IsNumber({},{message:"Equipment_id number bo'lsin"})
    readonly equipmentId:number;
    @ApiProperty({example:'1',description:"UserId"})
    @IsNumber({},{message:"Number bo'lsin userID"})
    readonly userId:number;
    @ApiProperty({example:'2022-12-05T12:00:00Z',description:"Start Date"})
    // @IsDate({message:"Start_date Date typida bo'lish kerak"})
    readonly start_date:Date;
    @ApiProperty({example:'2022-12-05T12:00:00Z',description:"End Date"})
    // @IsDate({message:"End_date Date typida bo'lish kerak"})
    readonly end_date:Date;
}