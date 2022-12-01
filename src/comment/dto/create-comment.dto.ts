import { IsString,IsNumber} from 'class-validator'
import {ApiProperty} from '@nestjs/swagger'
export class CreateCommentDto {
    @ApiProperty({example:'Yaxshi equipment ekan',description:'Comment string kiriladi!'})
    @IsString({message:"Comment string bo'lishi kerak!"})
    readonly comment:string;
    @ApiProperty({example:'2',description:'Rating kiriladi!'})
    @IsNumber({},{message:"Rating number bo'lishi kerak!"})
    readonly rating:number;
    @ApiProperty({example:'2',description:'Equipment id si kiriladi!'})
    @IsNumber({},{message:"Equipment_id number bo'lishi kerak!"})
    readonly equipmentId:number;
    @ApiProperty({example:'2',description:'user id si kiriladi!'})
    @IsNumber({},{message:"user_id number bo'lishi kerak!"})
    readonly userId:number;
}