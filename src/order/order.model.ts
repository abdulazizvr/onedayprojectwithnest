import { Table,Model,HasMany,BelongsTo,Column,DataType,ForeignKey } from "sequelize-typescript";
import {ApiProperty} from '@nestjs/swagger'
import { User } from "src/users/users.model";
import { Equipment } from "src/equipment/equipment.model";

export class Order extends Model<Order> {
    @ApiProperty({example:'1',description:'Unikal id'})
    @Column({
        type:DataType.STRING,
        unique:true,
        autoIncrement:true,
        primaryKey:true
    })
    id:number;

    @ApiProperty({example:'12.07.2008',description:'start_date'})
    @Column({
        type:DataType.DATE,
        allowNull:false
    })
    start_date:Date;

    @ApiProperty({example:'12.07.2008',description:'end_date'})
    @Column({
        type:DataType.DATE,
        allowNull:false
    })
    end_date:Date;

    @ApiProperty({example:'8',description:'orderning toliq total_price'})
    @Column({
        type:DataType.NUMBER,
        allowNull:false
    })
    total_price:number;

    @ForeignKey(()=>User)
    @Column({
        type:DataType.INTEGER
    })
    userId:number

    @BelongsTo(()=>User)
    owner_order:User;

    @ForeignKey(()=>Equipment)
    @Column({
        type:DataType.INTEGER
    })
    equipmentId:number

    @BelongsTo(()=>Equipment)
    equipment:Equipment;
}