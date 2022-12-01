import { Controller,Get,Put,Post,Delete,Param,Body,Patch } from '@nestjs/common';
import { OrderService } from './order.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Order } from './order.model';
import { get } from 'http';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';


@Controller('order')
export class OrderController {
    constructor(private readonly orderService: OrderService) {}

    @ApiOperation({summary:'Orderlarni olish'})
    @ApiResponse({status:200,type:[Order]})
    @Get()
    getAll(){
        return this.orderService.getAll()
    }

    @ApiOperation({summary:'Orderlarni olish'})
    @ApiResponse({status:200,type:[Order]})
    @Get(':id')
    getOne(@Param('id') id:number ){
        return this.orderService.getOne(id)
    }

    @ApiOperation({summary:'Orderlarni olish'})
    @ApiResponse({status:201,type:Order})
    @Post()
    create(@Body() createorderdto:CreateOrderDto){
        return this.orderService.create(createorderdto)
    }

    @Delete('unlink/:id')
    unlink(@Param('id') id:number){
        return this.orderService.unlink(id)
    }

    @ApiOperation({summary:'Orderlarni ochirish'})
    @ApiResponse({status:201,type:Order})
    @Delete(':id')
    delete(@Param('id') id:number){
        return this.orderService.remove(id)
    }

    @ApiOperation({summary:'Orderlarni ochirish'})
    @ApiResponse({status:201,type:Order})
    @Put(':id')
    update(@Param('id') id:number,@Body() updateorderdto:UpdateOrderDto){
        return this.orderService.update(id,updateorderdto)
    }
    


}
