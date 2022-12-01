import { IsString,IsNumber,IsDate,IsOptional } from "class-validator";
import {ApiProperty} from '@nestjs/swagger'

export class UpdateOrderDto {
    @IsOptional()
    @IsNumber({},{message:"Equipment_id number bo'lsin"})
    readonly equipmentId:number;
    @IsOptional()
    @IsNumber({},{message:"Number bo'lsin userID"})
    readonly userId:number;
    @IsOptional()
    // @IsDate({message:"Start_date Date typida bo'lish kerak"})
    readonly start_date:Date;
    @IsOptional()
    // @IsDate({message:"End_date Date typida bo'lish kerak"})
    readonly end_date:Date;
}