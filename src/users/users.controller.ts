import { Controller,Post,Get,Put,Delete,Body,Param, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './users.model';
import { updateUserdto } from './dto/update-user.dto';
import { UserSelfGuard } from 'src/guards/user-self.guard';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}
    
    @ApiOperation({summary:"Foydalanuvchilarni olish"})
    @ApiResponse({status:200,type:[User]})
    @Get()
    getAll() {
        return this.userService.getAll()
    }

    @ApiOperation({summary:"Foydalanuvchini olish"})
    @ApiResponse({status:200,type:User})

    @UseGuards(UserSelfGuard)
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    getOne(@Param('id') id:number){
        return this.userService.getOne(id)
    }

    @ApiOperation({summary:"Foydalanuvchini o'chirish"})
    @ApiResponse({status:202,type:User})
    @UseGuards(UserSelfGuard)
    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    delete(@Param('id') id:number) {
        return this.userService.delete(id)
    }
    
    @ApiOperation({summary:"Foydalanuvchini o'chirish"})
    @ApiResponse({status:202,type:User})
    @UseGuards(UserSelfGuard)
    @UseGuards(JwtAuthGuard)
    @Put(':id')
    update(@Param('id') id:number,updateuserdto:updateUserdto){
        return this.userService.update(id,updateuserdto)
    }


}
