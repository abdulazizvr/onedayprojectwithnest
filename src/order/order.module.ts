import { forwardRef, Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Order } from './order.model';
import { EquipmentModule } from 'src/equipment/equipment.module';

@Module({
  imports:[
    SequelizeModule.forFeature([Order]),
    forwardRef(()=> EquipmentModule),
  ],
  providers: [OrderService],
  controllers: [OrderController],
  exports:[OrderService]
})
export class OrderModule {}
