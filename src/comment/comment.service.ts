import { Injectable,HttpException,HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { EquipmentService } from 'src/equipment/equipment.service';
import { Comment } from './comment.model';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentService {
    constructor(
        @InjectModel(Comment) private commentRepository: typeof Comment,
        private readonly EquipmentService:EquipmentService,
    ) {}


    async create(createcommentDto:CreateCommentDto) {
        const eqValue = await this.EquipmentService.getOne(createcommentDto.equipmentId)
        if(!eqValue.total_rating){
            eqValue.total_rating = createcommentDto.rating
        }
        else{
            eqValue.total_rating = Math.round((eqValue.total_rating + createcommentDto.rating) / 2)
        }
        eqValue.save()
        return this.commentRepository.create(createcommentDto)
    }

    async getAll(){
        return this.commentRepository.findAll({include:{all:true}})
    }

    async getOne(id:number){
        return this.commentRepository.findByPk(id)
    }

    async update(id:number,updatecommentDto:UpdateCommentDto) {
        const check = await this.commentRepository.findByPk(id)
        if(!check){
            throw new HttpException(
                'Id is incorrect',
                HttpStatus.BAD_REQUEST
            )
        }
        const newUser = await this.commentRepository.update({
            ...updatecommentDto
        },{where:{id:id},returning:true})
        return newUser
    }

    async delete(id:number) {
        return this.commentRepository.destroy({where:{
            id:id
        }})
    }
}
