import {ApiProperty} from '@nestjs/swagger'
import {Table,Model,Column,BelongsToMany,HasMany,DataType} from 'sequelize-typescript'

interface UserCreationAttrs {
    email:string;
    password:string;
}

@Table({tableName:"users"})

export class User extends Model<User,UserCreationAttrs> {
    @ApiProperty({example:'1',description:"Unikal id"})
    @Column({
        type:DataType.INTEGER,
        unique:true,
        autoIncrement:true,
        primaryKey:true
    })
    id:number;

    @ApiProperty({example:'name1',description:'User name'})
    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    name:string;

    @ApiProperty({example:'email1',description:'User email'})
    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    email:string;

    @ApiProperty({example:'password1',description:'user password'})
    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    password:string;

    @ApiProperty({example:'token',description:'Token'})
    @Column({
        type:DataType.STRING
    })
    token:string;
    
    @ApiProperty({example:'+998 90 0233391',description:'User phone number'})
    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    phone_number:string;

    @ApiProperty({example:'Chilonzor',description:'User lokatsiyasi'})
    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    location:string;

    @ApiProperty({example:'true',description:'User admin ekanligi yoki admin emasligi'})
    @Column({
        type:DataType.BOOLEAN,
        defaultValue:false
    })
    is_admin:boolean;

    @ApiProperty({example:'true',description:'User activligi'})
    @Column({
        type:DataType.BOOLEAN,
        defaultValue:false
    })
    is_active:true;
}