import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, MinLength,IsNotEmpty } from "class-validator";

export class createUserDto {
    @ApiProperty({example:'User1',description:"Foydalanuvchi ismi"})
    @IsNotEmpty()
    @IsString({message:"Ismi string bo'lishi kerak!"})
    readonly name:string;
    @ApiProperty({example:'user1@gmail.com',description:"Foydalanuvchi @ emaili"})
    @IsNotEmpty()
    @IsString({message:"Email string bo'lishi kerak"})
    @IsEmail({},{message:"No'tog'ri email kiritilgan"})
    readonly email:string;
    @ApiProperty({example:'12345',description:'Foydalanuvchi passwordi'})
    @IsNotEmpty()
    @IsString({message:"Parol string bo'lishi kerak!"})
    @MinLength(4,{message:"Parol kamida 4 belgidan iborat bo'lishi kerak!"})
    readonly password:string;
    @ApiProperty({example:'+998900245500',description:'Foydalanuvchi telefon raqami'})
    @IsNotEmpty()
    @IsString({message:"Telefon raqam string bo'lishi kerak!"})
    phone_number:string;

    @ApiProperty({example:'Chilonzor tumani',description:'User lokatsiyasi'})
    @IsString({message:"Location string bo'lishi kerak"})
    location:string;

}