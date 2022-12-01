import {ApiProperty} from '@nestjs/swagger'
import {Table,Model,Column,BelongsToMany,HasMany,DataType,ForeignKey,BelongsTo} from 'sequelize-typescript'
import { Equipment } from 'src/equipment/equipment.model';
import { User } from 'src/users/users.model';

export class Comment extends Model<Comment> {
    @ApiProperty({example:'1',description:'unikal id'})
    @Column({
        type:DataType.INTEGER,
        unique:true,
        autoIncrement:true,
        primaryKey:true
    })
    id:number;

    @ApiProperty({example:'1',description:'comment'})
    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    comment:string;

    @ApiProperty({example:5,description:'Bahosi'})
    @Column({
        type:DataType.INTEGER,
        allowNull:false
    })
    rating:number;

    @ForeignKey(()=>User)
    @Column({
        type:DataType.INTEGER
    })
    userId:number

    @BelongsTo(()=>User)
    user:User;

    @ForeignKey(()=>Equipment)
    @Column({
        type:DataType.INTEGER
    })
    equipmentId:number

    @BelongsTo(()=>Equipment)
    equipment:Equipment;

    @BelongsToMany(()=>User,() =>User)
    comments:User[]

}