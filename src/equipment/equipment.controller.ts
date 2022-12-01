import { Controller,Get,Post,Put,Delete,Body,Param, UploadedFile, UseInterceptors } from '@nestjs/common';
import { EquipmentService } from './equipment.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Equipment } from './equipment.model';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { updateUserdto } from 'src/users/dto/update-user.dto';
import { UpdateEquipmentDto } from './dto/update-equipment.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('equipment')
export class EquipmentController {
    constructor(private readonly equipmentService:EquipmentService) { }

    @ApiOperation({summary:"Equipmentlarni olish"})
    @ApiResponse({status:200,type:[Equipment]})
    @Get()
    getAll(){
        return this.equipmentService.getAll()
    }
    @ApiOperation({summary:"Equipmentni olish"})
    @ApiResponse({status:200,type:Equipment})
    @Get(':id')
    getOne(@Param('id') id:number){
        return this.equipmentService.getOne(id)
    }

    @ApiOperation({summary:"Equipment qo'shish"})
    @ApiResponse({status:201,type:Equipment})
    @UseInterceptors(FileInterceptor('image'))
    @Post()
    create(@Body() createequipmentDto:CreateEquipmentDto,@UploadedFile() image:any){
        console.log(createequipmentDto)
        return this.equipmentService.create(createequipmentDto,image)
    }

    @ApiOperation({summary:"Equipment yangilash"})
    @ApiResponse({status:200,type:Equipment})
    @UseInterceptors(FileInterceptor('image'))
    @Put(':id')
    update(@Param('id') id:number,@Body() updateequipmentDto:UpdateEquipmentDto,@UploadedFile() image:any){
        return this.equipmentService.update(id,updateequipmentDto,image)
    }

    @ApiOperation({summary:"Equipment o'chirish"})
    @ApiResponse({status:202,type:Equipment})
    @Delete(':id')
    delete(@Param('id') id:number){
        return this.equipmentService.delete(id)
    }
}
