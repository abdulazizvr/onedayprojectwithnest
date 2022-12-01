import { Injectable,HttpException,HttpStatus, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FilesService } from 'src/files/files.service';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { UpdateEquipmentDto } from './dto/update-equipment.dto';
import { Equipment } from './equipment.model';

@Injectable()
export class EquipmentService {
  constructor(
    @InjectModel(Equipment) private equipmentRepository: typeof Equipment,
    private readonly fileService: FilesService,
  ) {}

  async getAll(): Promise<Equipment[]> {
    const equipment =  this.equipmentRepository.findAll({ include: { all: true } });
    return equipment
}
  async getOne(id:number):Promise<Equipment>{
    return this.equipmentRepository.findByPk(id)
  }

  // async create(createequipmentDto:CreateEquipmentDto) : Promise<Equipment>{
  //   const equipment = await this.equipmentRepository.create(createequipmentDto)
  //   console.log(equipment)
  //   return equipment;
  // }
  async create(equipmentBody: CreateEquipmentDto, image: any) {
    if (isNaN(Number(equipmentBody.price))) {
      throw new BadRequestException('price number bolishi kerak');
    } else if (isNaN(Number(equipmentBody.userId))) {
      throw new BadRequestException('user_id number bolishi kerak');
    }
    const fileName = await this.fileService.createFile(image);
    console.log(equipmentBody)
    const equipment = await (
      await this.equipmentRepository.create({
        ...equipmentBody,
        image: fileName,
      })
    ).save();
    if (!equipment) {
      throw new BadRequestException('Equipmentni qo`shish jarayonida hatolik');
    }
    return equipment;
  }

  async update(id:number,updateequimpentDto:UpdateEquipmentDto,image:any){
    const check = await this.equipmentRepository.findByPk(id)
    if(!check){
        throw new HttpException(
            'Id is incorrect',
            HttpStatus.NOT_FOUND
        )
    }
    await this.equipmentRepository.update({
        ...updateequimpentDto
    },{
        where:{id:id}
    })
    return {
        status:200,
        message:'Succes',
        data:check.name
    }
  }

  async delete(id:number) :Promise<Equipment>{
    const check = await this.equipmentRepository.findByPk(id)
    if(!check){
        throw new HttpException(
            'Id is incorrect',
            HttpStatus.NOT_FOUND
        )
    }
    await this.equipmentRepository.destroy({
        where:{id:id}
    })
    return check
  }
}
