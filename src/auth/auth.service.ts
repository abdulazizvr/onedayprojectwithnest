import { Injectable,HttpException,HttpStatus, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import {JwtService} from '@nestjs/jwt'
import { AuthDto } from './dto/auth-login.dto';
import { createUserDto } from 'src/users/dto/create-user.dto';
import * as bcrypt from 'bcryptjs'
import { User } from 'src/users/users.model';
@Injectable()
export class AuthService {
    constructor(
        private readonly userService:UsersService,
        private readonly jwtService:JwtService
    ) { }
    async login(LoginDto:AuthDto){
        const user = await this.validateUser(LoginDto)
        if(!user) {
            throw new HttpException('Foydalanuvchi topilmadi',
            HttpStatus.NOT_FOUND)
        }
        const token = await this.generateToken(user)
        user.token = token
        user.is_active = true
        await user.save()
        return {
            status:200,
            message:"Succes",
            token:token
        }
    }
    async registration(userDto:createUserDto) {
        const candidate = await this.userService.getUserByEmail(userDto.email)
        if(candidate){
            throw new HttpException(
                "Bunday foydalanuvchi mavjud",
                HttpStatus.BAD_REQUEST
            )
        }
        const HashedPassword = await bcrypt.hash(userDto.password,7)
        const user = await this.userService.createUser({
            ...userDto,
            password:HashedPassword
        })
        const token = await this.generateToken(user)
        console.log(token)
        return {
            status:200,
            message:"Succes",
            token:token
        }
    }
    private async generateToken(user:User){
        const payload = {email:user.email,id:user.id,is_active:user.is_active,is_admin:user.is_admin}
        return this.jwtService.sign(payload)
    }
    private async validateUser(LoginDto:AuthDto) {
        const user = await this.userService.getUserByEmail(LoginDto.email)
        if(!user){
            throw new UnauthorizedException("Email yoki Password noto'g'ri")
        }
        const validPassword = await bcrypt.compare(
            LoginDto.password,
            user.password
        )
        if(user && validPassword){
            return user
        }
        throw new UnauthorizedException("Email yoki Parol noto'g'ri")
    }
}


