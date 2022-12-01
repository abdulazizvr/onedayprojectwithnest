import {IsString,IsNumber,IsOptional} from 'class-validator'
export class UpdateEquipmentDto {
    
    @IsOptional()
    @IsString({message:"Name string bo'lishi kerak!"})
    readonly name:string;
    
    @IsOptional()
    @IsNumber({},{message:"price number bo'lishi kerak!"})
    readonly price:number;
    
    @IsOptional()
    @IsString({message:"image string bo'lishi kerak!"})
    readonly image:string;
    
    @IsOptional()
    @IsNumber({},{message:"userID number bo'lishi kerak!"})
    readonly userId:number;
    
    @IsOptional()
    @IsString({message:"description string bo'lishi kerak!"})
    readonly description:string;
}