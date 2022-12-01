import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, MinLength,IsOptional } from "class-validator";

export class updateUserdto {
    
    @IsOptional()
    @IsString({message:"Ismi string bo'lishi kerak!"})
    readonly name:string;

    @IsOptional()
    @IsString({message:"Email string bo'lishi kerak"})
    @IsEmail({},{message:"No'tog'ri email kiritilgan"})
    readonly email:string;
  
    @IsOptional()
    @IsString({message:"Parol string bo'lishi kerak!"})
    @MinLength(4,{message:"Parol kamida 4 belgidan iborat bo'lishi kerak!"})
    readonly password:string;
   
    @IsOptional()
    @IsString({message:"Telefon raqam string bo'lishi kerak!"})
    phone_number:string;

    @IsOptional()
    @IsString({message:"Location string bo'lishi kerak"})
    location:string;

}