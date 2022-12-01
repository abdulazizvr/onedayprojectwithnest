import { forwardRef, Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Equipment } from 'src/equipment/equipment.model';
import { Comment } from './comment.model';
import { EquipmentModule } from 'src/equipment/equipment.module';
import { EquipmentService } from 'src/equipment/equipment.service';

@Module({
  imports:[
    SequelizeModule.forFeature([Comment]),
    forwardRef(()=> EquipmentModule),
  ],
  providers: [CommentService],
  controllers: [CommentController],
  exports:[CommentService]
})
export class CommentModule {}
