import {ApiProperty} from '@nestjs/swagger'
import {Table,Model,HasMany,Column,DataType,BelongsTo, ForeignKey, BelongsToMany} from 'sequelize-typescript'
import { User } from 'src/users/users.model';
import {Comment} from 'src/comment/comment.model'

@Table({tableName:"equipments"})

export class Equipment extends Model<Equipment> {
    @ApiProperty({example:'1',description:'unikal id'})
    @Column({
        type:DataType.INTEGER,
        unique:true,
        autoIncrement:true,
        primaryKey:true
    })
    id:number;

    @ApiProperty({example:'name',description:'equipment name'})
    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    name:string;

    @ApiProperty({example:'12.5',description:'Equipment price'})
    @Column({
        type:DataType.INTEGER,
        allowNull:false
    })
    price:number;

    @ApiProperty({example:'12.5',description:'equipment price'})
    @Column({
        type:DataType.INTEGER,
        allowNull:false
    })
    image:string;

    @ApiProperty({example:'6',description:'equipment total_rating'})
    @Column({
        type:DataType.INTEGER
    })
    total_rating:number;

    @ApiProperty({example:'bu zor uskuna ',description:'equipment condition'})
    @Column({
        type:DataType.STRING,
    })
    description:string;

    @ApiProperty({example:'true',description:'Equipment boshmi yoki bandmi ?'})
    @Column({
        type:DataType.BOOLEAN,
        defaultValue:false
    })
    is_active:boolean;

    @ForeignKey(()=>User)
    @Column({
        type:DataType.INTEGER
    })
    userId:number

    @BelongsTo(()=>User)
    user:User;

    @HasMany(()=>Comment)
    comments:Comment[]
}