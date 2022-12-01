import { IsString,IsNumber,IsOptional} from 'class-validator'
import {ApiProperty} from '@nestjs/swagger'
export class UpdateCommentDto {
    @IsOptional()
    @IsString({message:"Comment string bo'lishi kerak!"})
    readonly comment:string;
    @IsOptional()
    @IsNumber({},{message:"Rating number bo'lishi kerak!"})
    readonly rating:number;
    @IsOptional()
    @IsNumber({},{message:"Equipment_id number bo'lishi kerak!"})
    readonly equipmentId:number;
    @IsOptional()
    @IsNumber({},{message:"user_id number bo'lishi kerak!"})
    readonly userId:number;
}