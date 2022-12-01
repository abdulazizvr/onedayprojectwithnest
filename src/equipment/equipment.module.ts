import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';
import { Comment } from 'src/comment/comment.model';
import { CommentModule } from 'src/comment/comment.module';
import { FilesModule } from 'src/files/files.module';
import { OrderModule } from 'src/order/order.module';
import { EquipmentController } from './equipment.controller';
import { Equipment } from './equipment.model';
import { EquipmentService } from './equipment.service';

@Module({
  imports:[
    SequelizeModule.forFeature([Equipment]),
    forwardRef(()=> CommentModule),
    FilesModule
  ],
  controllers: [EquipmentController],
  providers: [EquipmentService],
  exports:[EquipmentService]
})
export class EquipmentModule {}
