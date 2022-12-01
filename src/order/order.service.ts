import { Injectable ,HttpException,HttpStatus} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { EquipmentService } from 'src/equipment/equipment.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './order.model';

@Injectable()
export class OrderService {
    constructor(
        @InjectModel(Order) private orderRepository: typeof Order,
        private readonly equipmentService:EquipmentService,
    ) {}


    async unlink(id:number){
        const value = await this.equipmentService.getOne(id)
        if(!value){
            throw new HttpException(
                'ID is incorrect',
                HttpStatus.NOT_FOUND
            )
        }
        value.is_active = false
        value.save()
        return {
            status:200,
            message:"Success"
        }
    }
    async create(createOrderDto:CreateOrderDto) {
            const value = await this.equipmentService.getOne(createOrderDto.equipmentId)
            if(!value || value.is_active == true) {
                throw new HttpException(
                    'Bunaqa uskuna mavjud emas yoki bu uskuna band!',
                    HttpStatus.BAD_GATEWAY
                )
            }
            const date1 = createOrderDto.start_date
            const date2 = createOrderDto.end_date
            const date = (Math.abs(new Date(date1).getTime() -new Date(date2).getTime()) / 84600000).toFixed(0)
            value.is_active = true
            value.save()
            let total_price = Number(date) * value.price
            return this.orderRepository.create({
                ...createOrderDto,
                total_price:total_price
            })
    }

    async update(id:number,updateorderDto:UpdateOrderDto){
        const check = await this.orderRepository.findByPk(id)
        if(!check){
            throw new HttpException(
                'Id is incorrect',
                HttpStatus.NOT_FOUND
            )
        }
        return this.orderRepository.update(
            {...updateorderDto},
            {where:{id:id},returning:true}
        )
    }
    async getAll(){
        return this.orderRepository.findAll({include:{all:true}})
    }
    
    async getOne(id:number){
        return this.orderRepository.findByPk(id)
    }


    async remove(id:number){
        const check = await this.orderRepository.findByPk(id)
        if(!check){
            throw new HttpException(
                'Id is incorrect',
                HttpStatus.NOT_FOUND
            )
        }
        await this.orderRepository.destroy({where:{id:id}})
        return check
    }
}
