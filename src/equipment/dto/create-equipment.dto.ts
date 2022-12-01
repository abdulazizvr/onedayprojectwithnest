import {IsString,IsNumber} from 'class-validator'
import {ApiProperty} from '@nestjs/swagger'
export class CreateEquipmentDto {
    @ApiProperty({example:'name',description:'Equipment name'})
    // @IsString({message:"Name string bo'lishi kerak!"})
    readonly name:string;
    @ApiProperty({example:'price',description:'Equipment price'})
    // @IsNumber({},{message:"price number bo'lishi kerak!"})
    readonly price:number;
    @ApiProperty({example:'image',description:'Equipment image'})
    // @IsString({message:"image string bo'lishi kerak!"})
    readonly image:string;
    @ApiProperty({example:'userID',description:'Equipment userID'})
    // @IsNumber({},{message:"userID number bo'lishi kerak!"})
    readonly userId:number;
    @ApiProperty({example:'description',description:'Equipment description'})
    // @IsString({message:"description string bo'lishi kerak!"})
    readonly description:string;
}

